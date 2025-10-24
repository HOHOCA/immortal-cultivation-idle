/**
 * 批量操作工具
 * 提供一键操作功能，提升游戏体验
 */

// ========== 批量使用丹药 ==========

/**
 * 一键使用所有丹药（直到突破进度100%或丹药用完）
 * @returns {Object} 使用结果 {used: 数量, gained: 灵力}
 */
function useAllPills() {
    const pillPower = CULTIVATION_CONFIG ? CULTIVATION_CONFIG.PILL_POWER : 100;
    const pillBreakthroughBonus = CULTIVATION_CONFIG ? CULTIVATION_CONFIG.PILL_BREAKTHROUGH_BONUS : 10;
    
    let used = 0;
    let totalGained = 0;
    
    // 计算需要多少丹药才能到100%
    const currentProgress = gameData.player.breakthroughProgress || 0;
    const neededProgress = 100 - currentProgress;
    const maxPills = Math.ceil(neededProgress / pillBreakthroughBonus);
    
    // 实际能用的丹药数
    const availablePills = Math.floor(gameData.player.pills || 0);
    const pillsToUse = Math.min(maxPills, availablePills);
    
    if (pillsToUse <= 0) {
        if (typeof showNotification === 'function') {
            if (availablePills === 0) {
                showNotification('没有丹药可用', 'warning');
            } else {
                showNotification('突破进度已达100%', 'info');
            }
        }
        return { used: 0, gained: 0 };
    }
    
    // 批量使用
    for (let i = 0; i < pillsToUse; i++) {
        if (gameData.player.breakthroughProgress >= 100) break;
        
        gameData.player.pills--;
        gameData.player.spiritualPower += pillPower;
        gameData.player.breakthroughProgress = Math.min(100, gameData.player.breakthroughProgress + pillBreakthroughBonus);
        
        used++;
        totalGained += pillPower;
    }
    
    // 更新统计
    if (gameData.player.totalPillsUsed !== undefined) {
        gameData.player.totalPillsUsed += used;
    }
    
    // 通知
    if (typeof showNotification === 'function') {
        showNotification(`使用了 ${used} 个丹药，获得 ${totalGained} 灵力`, 'success');
    }
    
    if (typeof addLog === 'function') {
        addLog(`💊 批量使用了 ${used} 个丹药，获得 ${totalGained} 灵力`);
    }
    
    // 更新UI
    if (typeof updateUI === 'function') {
        updateUI();
    }
    
    return { used, gained: totalGained };
}

/**
 * 使用指定数量的丹药
 * @param {Number} count - 要使用的数量
 */
function usePillsBatch(count) {
    const pillPower = CULTIVATION_CONFIG ? CULTIVATION_CONFIG.PILL_POWER : 100;
    const pillBreakthroughBonus = CULTIVATION_CONFIG ? CULTIVATION_CONFIG.PILL_BREAKTHROUGH_BONUS : 10;
    
    const availablePills = Math.floor(gameData.player.pills || 0);
    const actualCount = Math.min(count, availablePills);
    
    if (actualCount <= 0) {
        if (typeof showNotification === 'function') {
            showNotification('没有丹药可用', 'warning');
        }
        return;
    }
    
    let totalGained = 0;
    
    for (let i = 0; i < actualCount; i++) {
        gameData.player.pills--;
        gameData.player.spiritualPower += pillPower;
        gameData.player.breakthroughProgress = Math.min(100, 
            (gameData.player.breakthroughProgress || 0) + pillBreakthroughBonus);
        totalGained += pillPower;
    }
    
    if (typeof showNotification === 'function') {
        showNotification(`使用了 ${actualCount} 个丹药，获得 ${totalGained} 灵力`, 'success');
    }
    
    if (typeof updateUI === 'function') {
        updateUI();
    }
}

// ========== 批量升级设施 ==========

/**
 * 一键升级所有设施（用完灵石或达到目标等级）
 * @param {Number} targetLevel - 目标等级（可选）
 * @returns {Object} 升级结果
 */
function upgradeAllFacilities(targetLevel = null) {
    const results = {
        upgraded: [],
        totalCost: 0,
        failedFacilities: []
    };
    
    const facilities = ['spiritualVein', 'pillRoom', 'library', 'artifactRoom', 'spiritualField'];
    
    // 如果已飞升，添加仙界设施
    if (gameData.ascensionCount > 0) {
        facilities.push('immortalPond');
    }
    if (gameData.ascensionCount >= 2) {
        facilities.push('celestialTree');
    }
    
    // 优先级排序（根据重要性）
    const priorityOrder = [
        'spiritualVein',    // 最重要
        'library',          // 很重要
        'pillRoom',         // 重要
        'artifactRoom',     // 中等
        'spiritualField',   // 中等
        'immortalPond',     // 仙界重要
        'celestialTree'     // 仙界重要
    ];
    
    // 按优先级升级
    let upgraded = true;
    while (upgraded) {
        upgraded = false;
        
        for (const facilityKey of priorityOrder) {
            if (!facilities.includes(facilityKey)) continue;
            
            const currentLevel = gameData.facilities[facilityKey] || 0;
            
            // 如果设定了目标等级且已达到，跳过
            if (targetLevel !== null && currentLevel >= targetLevel) {
                continue;
            }
            
            // 尝试升级
            const cost = getFacilityUpgradeCost(facilityKey, currentLevel);
            
            if (gameData.player.spiritStone >= cost) {
                gameData.player.spiritStone -= cost;
                gameData.facilities[facilityKey]++;
                
                results.upgraded.push({ facility: facilityKey, level: currentLevel + 1, cost });
                results.totalCost += cost;
                upgraded = true;
                
                // 只升级一个就break，下一轮继续（保持优先级）
                break;
            }
        }
    }
    
    // 通知
    if (results.upgraded.length > 0) {
        const message = `批量升级了 ${results.upgraded.length} 个设施，花费 ${formatNumber(results.totalCost)} 灵石`;
        
        if (typeof showNotification === 'function') {
            showNotification(message, 'success');
        }
        
        if (typeof addLog === 'function') {
            addLog(`${getSvg('building')} ${message}`);
        }
        
        if (typeof updateUI === 'function') {
            updateUI();
        }
    } else {
        if (typeof showNotification === 'function') {
            showNotification('灵石不足，无法升级任何设施', 'warning');
        }
    }
    
    return results;
}

/**
 * 获取设施升级成本（需要与游戏逻辑匹配）
 */
function getFacilityUpgradeCost(facilityKey, currentLevel) {
    // 这里使用简化的成本计算，实际应该调用游戏中的getFacilityCost函数
    // 如果存在，直接调用
    if (typeof window.getFacilityCost === 'function') {
        return window.getFacilityCost(facilityKey, currentLevel);
    }
    
    // 否则使用默认计算
    const baseCosts = {
        spiritualVein: 50,
        pillRoom: 500,
        library: 300,
        artifactRoom: 1000,
        spiritualField: 800,
        immortalPond: 5000,
        celestialTree: 10000
    };
    
    const baseCost = baseCosts[facilityKey] || 100;
    return Math.floor(baseCost * Math.pow(1.5, currentLevel));
}

/**
 * 升级单个设施到指定等级
 * @param {String} facilityKey - 设施键名
 * @param {Number} targetLevel - 目标等级
 */
function upgradeFacilityTo(facilityKey, targetLevel) {
    const currentLevel = gameData.facilities[facilityKey] || 0;
    
    if (currentLevel >= targetLevel) {
        if (typeof showNotification === 'function') {
            showNotification('已达到目标等级', 'info');
        }
        return;
    }
    
    let totalCost = 0;
    let upgrades = 0;
    
    for (let level = currentLevel; level < targetLevel; level++) {
        const cost = getFacilityUpgradeCost(facilityKey, level);
        
        if (gameData.player.spiritStone >= cost) {
            gameData.player.spiritStone -= cost;
            gameData.facilities[facilityKey]++;
            totalCost += cost;
            upgrades++;
        } else {
            break;
        }
    }
    
    if (upgrades > 0) {
        if (typeof showNotification === 'function') {
            showNotification(`升级了 ${upgrades} 级，花费 ${formatNumber(totalCost)} 灵石`, 'success');
        }
        
        if (typeof updateUI === 'function') {
            updateUI();
        }
    } else {
        if (typeof showNotification === 'function') {
            showNotification('灵石不足', 'warning');
        }
    }
}

// ========== 批量操作UI ==========

/**
 * 显示批量操作对话框
 */
function showBatchOperationsDialog() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    const content = document.createElement('div');
    content.className = 'modal-content';
    content.style.cssText = `
        background: white;
        border-radius: 8px;
        padding: 24px;
        max-width: 500px;
        width: 90%;
    `;
    
    content.innerHTML = `
        <h2 style="margin: 0 0 20px 0; font-size: 18px; color: #2c3e50;">批量操作</h2>
        
        <div style="margin-bottom: 20px;">
            <h3 style="font-size: 14px; margin-bottom: 10px; color: #555;">丹药操作</h3>
            <div style="display: flex; gap: 8px;">
                <button class="btn btn-primary" onclick="useAllPills(); this.closest('.modal-overlay').remove();" 
                        style="flex: 1;">
                    使用所有丹药（到100%）
                </button>
                <button class="btn" onclick="usePillsBatch(10); this.closest('.modal-overlay').remove();" 
                        style="flex: 1;">
                    使用10个丹药
                </button>
            </div>
        </div>
        
        <div style="margin-bottom: 20px;">
            <h3 style="font-size: 14px; margin-bottom: 10px; color: #555;">设施操作</h3>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <button class="btn btn-success" onclick="upgradeAllFacilities(); this.closest('.modal-overlay').remove();" 
                        style="flex: 1; min-width: 120px;">
                    一键升级所有设施
                </button>
                <button class="btn" onclick="upgradeAllFacilities(10); this.closest('.modal-overlay').remove();" 
                        style="flex: 1; min-width: 120px;">
                    全部升到10级
                </button>
                <button class="btn" onclick="upgradeAllFacilities(20); this.closest('.modal-overlay').remove();" 
                        style="flex: 1; min-width: 120px;">
                    全部升到20级
                </button>
            </div>
        </div>
        
        <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #e0e0e0;">
            <button class="btn" onclick="this.closest('.modal-overlay').remove()" style="width: 100%;">
                关闭
            </button>
        </div>
    `;
    
    modal.appendChild(content);
    document.body.appendChild(modal);
    
    // 点击覆盖层关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// ========== 离线收益系统 ==========

/**
 * 计算离线收益
 * @param {Number} offlineTime - 离线时长（毫秒）
 * @returns {Object} 离线收益详情
 */
function calculateOfflineReward(offlineTime) {
    if (offlineTime <= 0) return null;
    
    // 离线时间上限：8小时
    const maxOfflineTime = 8 * 60 * 60 * 1000;
    const effectiveTime = Math.min(offlineTime, maxOfflineTime);
    const timeInSeconds = effectiveTime / 1000;
    
    // 计算每秒灵力产出
    const spiritPerSecond = calculateSpiritPerSecond();
    
    // 计算离线灵力（打75折）
    const offlineSpiritGain = Math.floor(spiritPerSecond * timeInSeconds * 0.75);
    
    // 计算离线灵石（灵田产出，打75折）
    const fieldLevel = gameData.facilities.spiritualField || 0;
    const fieldProduction = fieldLevel > 0 ? fieldLevel * 10 : 0;
    const minutesOffline = Math.floor(timeInSeconds / 60);
    const offlineStoneGain = Math.floor(fieldProduction * minutesOffline * 0.75);
    
    // 计算离线丹药（丹房产出，打75折）
    const pillRoomLevel = gameData.facilities.pillRoom || 0;
    const pillProduction = pillRoomLevel > 0 ? Math.floor(pillRoomLevel / 5) + 1 : 0;
    const periods = Math.floor(effectiveTime / 30000); // 30秒一个周期
    const offlinePillGain = Math.floor(pillProduction * periods * 0.75);
    
    return {
        offlineTime: effectiveTime,
        displayTime: formatTimeMs(effectiveTime),
        spiritGained: offlineSpiritGain,
        stoneGained: offlineStoneGain,
        pillsGained: offlinePillGain,
        wasLimited: offlineTime > maxOfflineTime
    };
}

/**
 * 计算每秒灵力产出
 */
function calculateSpiritPerSecond() {
    // 这里使用简化计算，实际应该调用游戏中的函数
    if (typeof window.calculateSpiritPerSecond === 'function') {
        return window.calculateSpiritPerSecond();
    }
    
    // 默认计算
    const veinLevel = gameData.facilities.spiritualVein || 1;
    const baseProduction = 1 + veinLevel * 0.5;
    
    // 计算各种加成
    let totalBonus = 1.0;
    
    // 藏经阁加成
    const libraryLevel = gameData.facilities.library || 0;
    totalBonus += libraryLevel * 0.05;
    
    // 炼器房加成
    const artifactLevel = gameData.facilities.artifactRoom || 0;
    totalBonus += artifactLevel * 0.03;
    
    return baseProduction * totalBonus;
}

/**
 * 格式化时间
 */
function formatTimeMs(ms) {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) {
        return `${days}天${hours % 24}小时`;
    } else if (hours > 0) {
        return `${hours}小时${minutes % 60}分钟`;
    } else if (minutes > 0) {
        return `${minutes}分钟${seconds % 60}秒`;
    } else {
        return `${seconds}秒`;
    }
}

/**
 * 显示离线收益弹窗
 * @param {Object} reward - 离线收益数据
 */
function showOfflineRewardDialog(reward) {
    if (!reward || (reward.spiritGained === 0 && reward.stoneGained === 0 && reward.pillsGained === 0)) {
        return;
    }
    
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease-out;
    `;
    
    const content = document.createElement('div');
    content.style.cssText = `
        background: white;
        border-radius: 12px;
        padding: 30px;
        max-width: 450px;
        width: 90%;
        text-align: center;
        animation: slideIn 0.4s ease-out;
    `;
    
    let warningText = '';
    if (reward.wasLimited) {
        warningText = `<div style="margin-top: 12px; padding: 8px; background: #fff3cd; border-radius: 4px; font-size: 11px; color: #856404;">${getSvg('alert')} 离线时间超过8小时，仅计算前8小时的收益</div>`;
    }
    
    content.innerHTML = `
        <div style="font-size: 48px; margin-bottom: 16px;">${getSvg('gift')}</div>
        <h2 style="margin: 0 0 16px 0; font-size: 20px; color: #2c3e50; font-weight: 600;">离线收益</h2>
        <div style="margin-bottom: 20px; font-size: 13px; color: #7f8c8d;">
            你离开了 <strong style="color: #3498db;">${reward.displayTime}</strong>
        </div>
        
        <div style="background: #f8f9fa; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; text-align: center;">
                <div>
                    <div style="font-size: 11px; color: #95a5a6; margin-bottom: 4px;">灵力</div>
                    <div style="font-size: 18px; font-weight: 600; color: #3498db;">+${formatNumber(reward.spiritGained)}</div>
                </div>
                <div>
                    <div style="font-size: 11px; color: #95a5a6; margin-bottom: 4px;">灵石</div>
                    <div style="font-size: 18px; font-weight: 600; color: #f39c12;">+${formatNumber(reward.stoneGained)}</div>
                </div>
                <div>
                    <div style="font-size: 11px; color: #95a5a6; margin-bottom: 4px;">丹药</div>
                    <div style="font-size: 18px; font-weight: 600; color: #e74c3c;">+${reward.pillsGained}</div>
                </div>
            </div>
        </div>
        
        ${warningText}
        
        <button class="btn btn-primary" onclick="claimOfflineReward(${reward.spiritGained}, ${reward.stoneGained}, ${reward.pillsGained}); this.closest('.modal-overlay').remove();" 
                style="width: 100%; padding: 12px; font-size: 14px;">
            领取奖励
        </button>
    `;
    
    modal.appendChild(content);
    document.body.appendChild(modal);
}

/**
 * 领取离线奖励
 */
function claimOfflineReward(spirit, stone, pills) {
    gameData.player.spiritualPower += spirit;
    gameData.player.spiritStone += stone;
    gameData.player.pills += pills;
    
    if (typeof addLog === 'function') {
        addLog(`${getSvg('gift')} 领取离线收益：${formatNumber(spirit)} 灵力，${formatNumber(stone)} 灵石，${pills} 丹药`);
    }
    
    if (typeof updateUI === 'function') {
        updateUI();
    }
    
    if (typeof saveGame === 'function') {
        saveGame();
    }
}

/**
 * 检查并显示离线收益
 */
function checkOfflineReward() {
    // 获取上次游戏时间
    const lastActiveTime = gameData.lastActiveTime || Date.now();
    const now = Date.now();
    const offlineTime = now - lastActiveTime;
    
    // 超过5分钟才算离线
    if (offlineTime > 5 * 60 * 1000) {
        const reward = calculateOfflineReward(offlineTime);
        if (reward && reward.spiritGained > 0) {
            setTimeout(() => {
                showOfflineRewardDialog(reward);
            }, 1500); // 延迟1.5秒显示，让界面先加载
        }
    }
    
    // 更新最后活跃时间
    gameData.lastActiveTime = now;
}

/**
 * 更新最后活跃时间（定期调用）
 */
function updateLastActiveTime() {
    if (gameData) {
        gameData.lastActiveTime = Date.now();
    }
}

// 每分钟更新一次最后活跃时间
setInterval(updateLastActiveTime, 60000);

// ========== 注入CSS动画 ==========
function injectBatchOperationStyles() {
    if (document.getElementById('batchOperationStyles')) return;
    
    const style = document.createElement('style');
    style.id = 'batchOperationStyles';
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    
    document.head.appendChild(style);
}

// 页面加载时注入样式
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectBatchOperationStyles);
} else {
    injectBatchOperationStyles();
}

