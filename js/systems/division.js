// 堂口系统
// 处理堂口任务、贡献度、商店等

// 开始堂口任务
function startDivisionTask(taskId) {
    if (!gameData.divisionId) {
        showNotification('你还没有加入堂口', 'warning');
        return;
    }
    
    const tasks = divisionTasks[gameData.divisionId];
    if (!tasks || !tasks[taskId]) {
        showNotification('任务不存在', 'error');
        return;
    }
    
    const task = tasks[taskId];
    
    // 检查境界要求
    if (gameData.player.realm < task.requiredRealm) {
        showNotification(`需要${realms[task.requiredRealm].name}以上境界`, 'warning');
        return;
    }
    
    // 检查是否有任务在进行
    if (gameData.currentDivisionTask) {
        showNotification('已有任务在进行中', 'warning');
        return;
    }
    
    // 检查资源
    if (task.cost) {
        for (let resource in task.cost) {
            if (gameData.player[resource] < task.cost[resource]) {
                showNotification(`${resource}不足`, 'warning');
                return;
            }
        }
        
        // 扣除资源
        for (let resource in task.cost) {
            gameData.player[resource] -= task.cost[resource];
        }
    }
    
    // 开始任务
    gameData.currentDivisionTask = {
        taskId: taskId,
        startTime: Date.now(),
        duration: task.duration * 1000, // 转换为毫秒
        rewards: task.rewards
    };
    
    addLog(`开始执行堂口任务：${task.name}`);
    showNotification(`开始任务：${task.name}`, 'info');
    
    updateUI();
    saveGame();
}

// 更新堂口任务进度
function updateDivisionTask() {
    if (!gameData.currentDivisionTask) return;
    
    const task = gameData.currentDivisionTask;
    const elapsed = Date.now() - task.startTime;
    
    // 任务完成
    if (elapsed >= task.duration) {
        completeDivisionTask();
    }
}

// 完成堂口任务
function completeDivisionTask() {
    if (!gameData.currentDivisionTask) return;
    
    const task = gameData.currentDivisionTask;
    const rewards = task.rewards;
    
    // 给予奖励
    if (rewards.divisionContribution) {
        gameData.divisionContribution = (gameData.divisionContribution || 0) + rewards.divisionContribution;
    }
    if (rewards.spiritualPower) {
        gameData.player.spiritualPower += rewards.spiritualPower;
    }
    if (rewards.spiritStone) {
        gameData.player.spiritStone += rewards.spiritStone;
    }
    if (rewards.pills) {
        gameData.player.pills += rewards.pills;
    }
    if (rewards.breakthroughProgress) {
        gameData.player.breakthroughProgress = (gameData.player.breakthroughProgress || 0) + rewards.breakthroughProgress;
    }
    
    // 门派贡献度也增加一点
    if (gameData.sect && gameData.sect !== 'rogue') {
        gameData.sectContribution = (gameData.sectContribution || 0) + Math.floor(rewards.divisionContribution / 2);
    }
    
    // 显示奖励
    let rewardText = [];
    if (rewards.divisionContribution) rewardText.push(`堂口贡献+${rewards.divisionContribution}`);
    if (rewards.spiritualPower) rewardText.push(`灵力+${formatNumber(rewards.spiritualPower)}`);
    if (rewards.spiritStone) rewardText.push(`灵石+${rewards.spiritStone}`);
    if (rewards.pills) rewardText.push(`丹药+${rewards.pills}`);
    if (rewards.breakthroughProgress) rewardText.push(`突破进度+${rewards.breakthroughProgress}%`);
    
    addLog(`<span class="log-success">完成堂口任务！获得：${rewardText.join('，')}</span>`);
    showNotification('任务完成！', 'success');
    
    // 清除当前任务
    gameData.currentDivisionTask = null;
    
    updateUI();
    saveGame();
}

// 取消堂口任务
function cancelDivisionTask() {
    if (!gameData.currentDivisionTask) return;
    
    gameData.currentDivisionTask = null;
    showNotification('已取消任务', 'info');
    updateUI();
    saveGame();
}

// 显示堂口任务界面
function showDivisionTasksModal() {
    if (!gameData.divisionId) {
        showNotification('你还没有加入堂口', 'warning');
        return;
    }
    
    const tasks = divisionTasks[gameData.divisionId];
    if (!tasks) {
        showNotification('该堂口暂无专属任务', 'info');
        return;
    }
    
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.85);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
    `;
    
    const card = document.createElement('div');
    card.style.cssText = `
        background: white;
        padding: 30px;
        border-radius: 12px;
        max-width: 800px;
        width: 90%;
        max-height: 85%;
        overflow-y: auto;
        box-shadow: 0 20px 60px rgba(0,0,0,0.5);
    `;
    
    let html = '';
    
    html += `<div style="text-align: center; margin-bottom: 25px;">`;
    html += `<div style="font-size: 20px; font-weight: 600; color: #2c3e50; margin-bottom: 8px;">`;
    html += `📜 ${gameData.divisionName || '堂口'} 专属任务`;
    html += `</div>`;
    html += `<div style="font-size: 13px; color: #7f8c8d;">`;
    html += `当前堂口贡献度：<strong style="color: #e67e22;">${gameData.divisionContribution || 0}</strong>`;
    html += `</div>`;
    html += `</div>`;
    
    // 当前进行中的任务
    if (gameData.currentDivisionTask) {
        const task = gameData.currentDivisionTask;
        const taskConfig = tasks[task.taskId];
        const elapsed = Date.now() - task.startTime;
        const progress = Math.min(100, (elapsed / task.duration) * 100);
        const remaining = Math.max(0, task.duration - elapsed);
        
        html += `<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 12px; margin-bottom: 20px;">`;
        html += `<div style="font-size: 14px; font-weight: 600; margin-bottom: 10px;">进行中的任务</div>`;
        html += `<div style="font-size: 16px; font-weight: 600; margin-bottom: 10px;">${taskConfig?.name || '未知任务'}</div>`;
        html += `<div style="margin-bottom: 10px;">`;
        html += `<div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 5px;">`;
        html += `<span>进度</span>`;
        html += `<span>${formatTime(Math.ceil(remaining / 1000))}剩余</span>`;
        html += `</div>`;
        html += `<div style="background: rgba(255,255,255,0.3); height: 12px; border-radius: 6px; overflow: hidden;">`;
        html += `<div style="width: ${progress}%; height: 100%; background: white; transition: width 0.3s;"></div>`;
        html += `</div>`;
        html += `</div>`;
        html += `<button class="btn" onclick="cancelDivisionTask(); this.parentElement.parentElement.parentElement.remove();" style="background: rgba(255,255,255,0.2); color: white; width: 100%;">`;
        html += `取消任务`;
        html += `</button>`;
        html += `</div>`;
    }
    
    // 可用任务列表
    html += `<div style="display: grid; gap: 15px;">`;
    
    for (let taskId in tasks) {
        const task = tasks[taskId];
        const canStart = gameData.player.realm >= task.requiredRealm && !gameData.currentDivisionTask;
        
        // 检查资源
        let hasResources = true;
        if (task.cost) {
            for (let resource in task.cost) {
                if (gameData.player[resource] < task.cost[resource]) {
                    hasResources = false;
                    break;
                }
            }
        }
        
        html += `<div class="facility-item" style="padding: 20px; ${!canStart || !hasResources ? 'opacity: 0.6;' : ''}">`;
        
        html += `<div style="margin-bottom: 12px;">`;
        html += `<div style="font-size: 17px; font-weight: 600; color: #2c3e50; margin-bottom: 6px;">`;
        html += task.name;
        html += `</div>`;
        html += `<div style="font-size: 13px; color: #7f8c8d; line-height: 1.6; margin-bottom: 8px;">`;
        html += task.desc;
        html += `</div>`;
        html += `<div style="font-size: 12px; color: #95a5a6;">`;
        html += `耗时：${formatTime(task.duration)} | 需要：${realms[task.requiredRealm].name}`;
        html += `</div>`;
        html += `</div>`;
        
        // 消耗
        if (task.cost && Object.keys(task.cost).length > 0) {
            html += `<div style="background: #fff3cd; padding: 10px; border-radius: 6px; margin-bottom: 12px;">`;
            html += `<div style="font-size: 12px; font-weight: 600; color: #856404; margin-bottom: 6px;">消耗</div>`;
            html += `<div style="font-size: 12px; color: #856404;">`;
            const costs = [];
            if (task.cost.spiritualPower) costs.push(`灵力 ${formatNumber(task.cost.spiritualPower)}`);
            if (task.cost.spiritStone) costs.push(`灵石 ${task.cost.spiritStone}`);
            html += costs.join('，');
            html += `</div>`;
            html += `</div>`;
        }
        
        // 奖励
        html += `<div style="background: #d4edda; padding: 10px; border-radius: 6px; margin-bottom: 12px;">`;
        html += `<div style="font-size: 12px; font-weight: 600; color: #155724; margin-bottom: 6px;">奖励</div>`;
        html += `<div style="font-size: 12px; color: #155724; line-height: 1.6;">`;
        const rewards = [];
        if (task.rewards.divisionContribution) rewards.push(`堂口贡献 +${task.rewards.divisionContribution}`);
        if (task.rewards.spiritualPower) rewards.push(`灵力 +${formatNumber(task.rewards.spiritualPower)}`);
        if (task.rewards.spiritStone) rewards.push(`灵石 +${task.rewards.spiritStone}`);
        if (task.rewards.pills) rewards.push(`丹药 +${task.rewards.pills}`);
        if (task.rewards.breakthroughProgress) rewards.push(`突破进度 +${task.rewards.breakthroughProgress}%`);
        html += rewards.join('、');
        html += `</div>`;
        html += `</div>`;
        
        // 开始按钮
        if (canStart && hasResources) {
            html += `<button class="btn btn-primary" onclick="startDivisionTask('${taskId}'); this.parentElement.parentElement.parentElement.remove();" style="width: 100%;">`;
            html += `开始任务`;
            html += `</button>`;
        } else if (gameData.currentDivisionTask) {
            html += `<div style="text-align: center; color: #6c757d; font-size: 13px;">已有任务在进行中</div>`;
        } else if (!hasResources) {
            html += `<div style="text-align: center; color: #e74c3c; font-size: 13px;">资源不足</div>`;
        } else {
            html += `<div style="text-align: center; color: #6c757d; font-size: 13px;">境界不足</div>`;
        }
        
        html += `</div>`;
    }
    
    html += `</div>`;
    
    html += `<div style="margin-top: 25px; text-align: center;">`;
    html += `<button class="btn" onclick="this.parentElement.parentElement.parentElement.remove()" style="padding: 10px 30px;">`;
    html += `关闭`;
    html += `</button>`;
    html += `</div>`;
    
    card.innerHTML = html;
    modal.appendChild(card);
    document.body.appendChild(modal);
}

// 显示堂口商店
function showDivisionShop() {
    if (!gameData.divisionId) {
        showNotification('你还没有加入堂口', 'warning');
        return;
    }
    
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.85);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
    `;
    
    const card = document.createElement('div');
    card.style.cssText = `
        background: white;
        padding: 30px;
        border-radius: 12px;
        max-width: 800px;
        width: 90%;
        max-height: 85%;
        overflow-y: auto;
        box-shadow: 0 20px 60px rgba(0,0,0,0.5);
    `;
    
    let html = '';
    
    html += `<div style="text-align: center; margin-bottom: 25px;">`;
    html += `<div style="font-size: 20px; font-weight: 600; color: #2c3e50; margin-bottom: 8px;">`;
    html += `🏪 ${gameData.divisionName || '堂口'} 商店`;
    html += `</div>`;
    html += `<div style="font-size: 13px; color: #7f8c8d;">`;
    html += `当前堂口贡献度：<strong style="color: #e67e22;">${gameData.divisionContribution || 0}</strong>`;
    html += `</div>`;
    html += `</div>`;
    
    // 通用商品
    html += `<div style="margin-bottom: 25px;">`;
    html += `<div style="font-size: 16px; font-weight: 600; color: #2c3e50; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #3498db;">`;
    html += `通用商品`;
    html += `</div>`;
    html += `<div style="display: grid; gap: 15px;">`;
    
    for (let itemId in divisionShop.common) {
        html += renderShopItem(itemId, divisionShop.common[itemId]);
    }
    
    html += `</div>`;
    html += `</div>`;
    
    // 堂口专属商品
    if (divisionShop[gameData.divisionId]) {
        html += `<div style="margin-bottom: 25px;">`;
        html += `<div style="font-size: 16px; font-weight: 600; color: #2c3e50; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #e67e22;">`;
        html += `堂口专属`;
        html += `</div>`;
        html += `<div style="display: grid; gap: 15px;">`;
        
        for (let itemId in divisionShop[gameData.divisionId]) {
            html += renderShopItem(itemId, divisionShop[gameData.divisionId][itemId]);
        }
        
        html += `</div>`;
        html += `</div>`;
    }
    
    html += `<div style="margin-top: 25px; text-align: center;">`;
    html += `<button class="btn" onclick="this.parentElement.parentElement.parentElement.remove()" style="padding: 10px 30px;">`;
    html += `关闭`;
    html += `</button>`;
    html += `</div>`;
    
    card.innerHTML = html;
    modal.appendChild(card);
    document.body.appendChild(modal);
}

// 渲染商店物品
function renderShopItem(itemId, item) {
    const contribution = gameData.divisionContribution || 0;
    const canBuy = contribution >= item.cost.divisionContribution && contribution >= (item.requiredContribution || 0);
    
    let html = `<div class="facility-item" style="padding: 20px; ${!canBuy ? 'opacity: 0.6;' : ''}">`;
    
    html += `<div style="margin-bottom: 12px;">`;
    html += `<div style="font-size: 17px; font-weight: 600; color: #2c3e50; margin-bottom: 6px;">`;
    html += item.name;
    html += `</div>`;
    html += `<div style="font-size: 13px; color: #7f8c8d; line-height: 1.6;">`;
    html += item.desc;
    html += `</div>`;
    html += `</div>`;
    
    // 价格
    html += `<div style="background: #fff3cd; padding: 10px; border-radius: 6px; margin-bottom: 12px;">`;
    html += `<div style="font-size: 12px; color: #856404;">`;
    html += `消耗堂口贡献：<strong>${item.cost.divisionContribution}</strong>`;
    if (item.requiredContribution) {
        html += ` | 需要总贡献：<strong>${item.requiredContribution}</strong>`;
    }
    html += `</div>`;
    html += `</div>`;
    
    // 兑换按钮
    if (canBuy) {
        html += `<button class="btn btn-primary" onclick="buyDivisionItem('${itemId}'); this.parentElement.parentElement.parentElement.remove(); showDivisionShop();" style="width: 100%;">`;
        html += `兑换`;
        html += `</button>`;
    } else {
        html += `<div style="text-align: center; color: #6c757d; font-size: 13px;">贡献度不足</div>`;
    }
    
    html += `</div>`;
    
    return html;
}

// 购买堂口商店物品
function buyDivisionItem(itemId) {
    // 先在通用商品中查找
    let item = divisionShop.common[itemId];
    
    // 如果没找到，在堂口专属中查找
    if (!item && divisionShop[gameData.divisionId]) {
        item = divisionShop[gameData.divisionId][itemId];
    }
    
    if (!item) {
        showNotification('物品不存在', 'error');
        return;
    }
    
    const contribution = gameData.divisionContribution || 0;
    
    // 检查贡献度
    if (contribution < item.cost.divisionContribution) {
        showNotification('堂口贡献度不足', 'warning');
        return;
    }
    
    if (item.requiredContribution && contribution < item.requiredContribution) {
        showNotification(`需要累计贡献度${item.requiredContribution}`, 'warning');
        return;
    }
    
    // 扣除贡献度
    gameData.divisionContribution -= item.cost.divisionContribution;
    
    // 给予奖励
    if (item.reward.spiritualPower) {
        gameData.player.spiritualPower += item.reward.spiritualPower;
    }
    if (item.reward.spiritStone) {
        gameData.player.spiritStone += item.reward.spiritStone;
    }
    if (item.reward.pills) {
        gameData.player.pills += item.reward.pills;
    }
    if (item.reward.breakthroughProgress) {
        gameData.player.breakthroughProgress = (gameData.player.breakthroughProgress || 0) + item.reward.breakthroughProgress;
    }
    if (item.reward.masterFavorBonus && gameData.masterId) {
        const master = gameData.npcData[gameData.masterId];
        if (master) {
            master.relationship.favor = Math.min(100, master.relationship.favor + item.reward.masterFavorBonus);
        }
    }
    
    addLog(`<span class="log-success">兑换成功：${item.name}</span>`);
    showNotification(`兑换成功：${item.name}`, 'success');
    
    updateUI();
    saveGame();
}

