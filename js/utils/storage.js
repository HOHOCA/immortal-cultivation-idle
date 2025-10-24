// 存储和存档管理

// ========== 版本管理 ==========
const CURRENT_SAVE_VERSION = '3.1.0'; // 当前存档版本

// 保存游戏
function saveGame() {
    try {
        // 在保存前验证数据
        if (!validateGameData(gameData)) {
            console.warn('游戏数据验证失败，尝试修复...');
            gameData = fixGameData(gameData);
        }
        
        const saveData = {
            gameData: gameData,
            version: CURRENT_SAVE_VERSION,
            timestamp: Date.now()
        };
        localStorage.setItem('immortalCultivationSave', JSON.stringify(saveData));
        return true;
    } catch (error) {
        console.error('保存游戏失败:', error);
        if (typeof showNotification === 'function') {
            showNotification('保存失败', 'error');
        }
        return false;
    }
}

// 加载游戏
function loadGame() {
    try {
        const saveData = localStorage.getItem('immortalCultivationSave');
        if (!saveData) {
            return false;
        }
        
        const parsed = JSON.parse(saveData);
        
        // 检查版本兼容性并自动迁移
        if (parsed.version && parsed.version !== CURRENT_SAVE_VERSION) {
            console.warn(`存档版本 ${parsed.version} -> ${CURRENT_SAVE_VERSION}，开始迁移...`);
            parsed.gameData = migrateSaveData(parsed.gameData, parsed.version);
        }
        
        gameData = { ...defaultGameData, ...parsed.gameData };
        
        // 验证和修复数据
        if (!validateGameData(gameData)) {
            console.warn('数据验证失败，自动修复...');
            gameData = fixGameData(gameData);
        }
        
        // 确保必要的数据结构存在
        ensureDataStructure();
        
        return true;
    } catch (error) {
        console.error('加载游戏失败:', error);
        if (typeof showNotification === 'function') {
            showNotification('加载失败', 'error');
        }
        return false;
    }
}

// 确保数据结构完整性
function ensureDataStructure() {
    // 确保基础数据结构存在
    if (!gameData.player) gameData.player = { ...defaultGameData.player };
    if (!gameData.facilities) gameData.facilities = { ...defaultGameData.facilities };
    if (!gameData.autoSettings) gameData.autoSettings = { ...defaultGameData.autoSettings };
    if (!gameData.collapsedCategories) gameData.collapsedCategories = {};
    
    // 确保新功能的数据结构存在
    if (!gameData.npcRelationships) gameData.npcRelationships = {};
    if (!gameData.combatEquipment) gameData.combatEquipment = defaultGameData.combatEquipment;
    if (!gameData.artifacts) gameData.artifacts = [];
    if (!gameData.talents) gameData.talents = [];
    if (!gameData.achievements) gameData.achievements = [];
    if (!gameData.bossesDefeated) gameData.bossesDefeated = [];
    if (!gameData.dungeonAttempts) gameData.dungeonAttempts = 0;
    
    // 确保新属性存在
    if (gameData.player.combatWins === undefined) gameData.player.combatWins = 0;
    if (gameData.player.combatLosses === undefined) gameData.player.combatLosses = 0;
    if (gameData.player.immortalStone === undefined) gameData.player.immortalStone = 0;
    if (gameData.player.daoFruit === undefined) gameData.player.daoFruit = 0;
    if (gameData.player.heavenlyEssence === undefined) gameData.player.heavenlyEssence = 0;
    
    // 迁移旧的门派任务数据结构到新的多任务系统
    if (gameData.currentSectTask && gameData.sectTaskEndTime && !gameData.currentSectTasks) {
        gameData.currentSectTasks = [{
            taskId: gameData.currentSectTask,
            endTime: gameData.sectTaskEndTime,
            startTime: Date.now() - 60000 // 假设开始于1分钟前
        }];
        delete gameData.currentSectTask;
        delete gameData.sectTaskEndTime;
        console.log('已迁移旧的任务数据到多任务系统');
    }
    
    // 确保多任务系统数据结构存在
    if (!gameData.currentSectTasks) gameData.currentSectTasks = [];
    if (!gameData.maxSectTaskSlots) gameData.maxSectTaskSlots = 1;
    
    // 确保堂口系统数据结构存在
    if (!gameData.divisionId) gameData.divisionId = null;
    if (!gameData.divisionName) gameData.divisionName = null;
    if (!gameData.divisionContribution) gameData.divisionContribution = 0;
    if (!gameData.currentDivisionTask) gameData.currentDivisionTask = null;
}

// ========== 版本迁移系统 ==========

/**
 * 迁移存档数据到最新版本
 * @param {Object} oldData - 旧版本数据
 * @param {String} fromVersion - 原版本号
 * @returns {Object} 迁移后的数据
 */
function migrateSaveData(oldData, fromVersion) {
    console.log(`开始数据迁移：${fromVersion} -> ${CURRENT_SAVE_VERSION}`);
    
    let data = deepClone(oldData);
    
    // 版本迁移链
    // 2.0.x -> 2.1.x
    if (fromVersion && fromVersion.startsWith('2.0')) {
        console.log('迁移 2.0 -> 2.1');
        // 添加新的战斗系统数据
        if (!data.combatEquipment) {
            data.combatEquipment = { weapon: null, armor: null, accessory: null };
        }
    }
    
    // 2.1.x -> 2.2.x
    if (fromVersion && (fromVersion.startsWith('2.0') || fromVersion.startsWith('2.1'))) {
        console.log('迁移到 2.2');
        // 添加副本探索系统
        if (!data.dungeonProgress) data.dungeonProgress = {};
    }
    
    // 2.x.x -> 3.0.x
    if (fromVersion && fromVersion.startsWith('2.')) {
        console.log('迁移 2.x -> 3.0');
        // 添加拜师系统
        if (!data.divisionMaster) data.divisionMaster = null;
        if (!data.guestMasters) data.guestMasters = [];
        if (!data.divisionId) data.divisionId = null;
        if (!data.divisionContribution) data.divisionContribution = 0;
    }
    
    // 3.0.x -> 3.1.x
    if (fromVersion && fromVersion.startsWith('3.0')) {
        console.log('迁移 3.0 -> 3.1');
        // 添加优化后的新功能（如果有）
    }
    
    console.log('数据迁移完成');
    return data;
}

// ========== 数据验证系统 ==========

/**
 * 验证游戏数据的完整性和合法性
 * @param {Object} data - 游戏数据
 * @returns {Boolean} 是否通过验证
 */
function validateGameData(data) {
    if (!data || typeof data !== 'object') {
        console.error('无效的游戏数据：不是对象');
        return false;
    }
    
    // 检查必需的顶级属性
    const requiredFields = ['player', 'facilities', 'techniques'];
    for (const field of requiredFields) {
        if (!data[field]) {
            console.error(`缺少必需字段: ${field}`);
            return false;
        }
    }
    
    // 验证玩家数据
    if (!validatePlayerData(data.player)) {
        return false;
    }
    
    // 验证设施数据
    if (!validateFacilitiesData(data.facilities)) {
        return false;
    }
    
    return true;
}

/**
 * 验证玩家数据
 */
function validatePlayerData(player) {
    if (!player || typeof player !== 'object') {
        console.error('玩家数据无效');
        return false;
    }
    
    // 检查数值类型和范围
    const numericFields = {
        realm: { min: 0, max: 20 },
        realmLevel: { min: 1, max: 9 },
        spiritualPower: { min: 0, max: Number.MAX_SAFE_INTEGER },
        spiritStone: { min: 0, max: Number.MAX_SAFE_INTEGER },
        pills: { min: 0, max: Number.MAX_SAFE_INTEGER },
        totalDays: { min: 0, max: Number.MAX_SAFE_INTEGER },
        breakthroughProgress: { min: 0, max: 100 }
    };
    
    for (const [field, range] of Object.entries(numericFields)) {
        if (player[field] !== undefined) {
            if (typeof player[field] !== 'number' || isNaN(player[field])) {
                console.error(`玩家数据 ${field} 不是有效数字:`, player[field]);
                return false;
            }
            if (player[field] < range.min || player[field] > range.max) {
                console.error(`玩家数据 ${field} 超出范围 [${range.min}, ${range.max}]:`, player[field]);
                return false;
            }
        }
    }
    
    return true;
}

/**
 * 验证设施数据
 */
function validateFacilitiesData(facilities) {
    if (!facilities || typeof facilities !== 'object') {
        console.error('设施数据无效');
        return false;
    }
    
    // 所有设施等级必须是非负整数
    for (const [key, level] of Object.entries(facilities)) {
        if (typeof level !== 'number' || level < 0 || !Number.isInteger(level)) {
            console.error(`设施 ${key} 等级无效:`, level);
            return false;
        }
    }
    
    return true;
}

/**
 * 修复游戏数据
 * @param {Object} data - 需要修复的数据
 * @returns {Object} 修复后的数据
 */
function fixGameData(data) {
    console.log('开始修复游戏数据...');
    
    const fixed = deepClone(data);
    
    // 修复玩家数据
    if (fixed.player) {
        fixed.player = fixPlayerData(fixed.player);
    }
    
    // 修复设施数据
    if (fixed.facilities) {
        fixed.facilities = fixFacilitiesData(fixed.facilities);
    }
    
    // 修复数组数据
    if (!Array.isArray(fixed.achievements)) fixed.achievements = [];
    if (!Array.isArray(fixed.talents)) fixed.talents = [];
    if (!Array.isArray(fixed.knownNPCs)) fixed.knownNPCs = [];
    
    console.log('数据修复完成');
    return fixed;
}

/**
 * 修复玩家数据
 */
function fixPlayerData(player) {
    const fixed = { ...player };
    
    // 确保数值字段有效
    fixed.realm = clamp(Math.floor(player.realm || 0), 0, 20);
    fixed.realmLevel = clamp(Math.floor(player.realmLevel || 1), 1, 9);
    fixed.spiritualPower = Math.max(0, player.spiritualPower || 0);
    fixed.spiritStone = Math.max(0, player.spiritStone || 0);
    fixed.pills = Math.max(0, Math.floor(player.pills || 0));
    fixed.totalDays = Math.max(0, player.totalDays || 0);
    fixed.breakthroughProgress = clamp(player.breakthroughProgress || 0, 0, 100);
    
    // 修复高级资源
    fixed.immortalStone = Math.max(0, player.immortalStone || 0);
    fixed.daoFruit = Math.max(0, player.daoFruit || 0);
    fixed.heavenlyEssence = Math.max(0, player.heavenlyEssence || 0);
    
    // 修复战斗数据
    fixed.combatPower = Math.max(0, player.combatPower || 0);
    fixed.combatWins = Math.max(0, Math.floor(player.combatWins || 0));
    fixed.combatLosses = Math.max(0, Math.floor(player.combatLosses || 0));
    
    return fixed;
}

/**
 * 修复设施数据
 */
function fixFacilitiesData(facilities) {
    const fixed = { ...facilities };
    
    // 确保所有设施等级都是有效的非负整数
    for (const key in fixed) {
        if (fixed.hasOwnProperty(key)) {
            fixed[key] = Math.max(0, Math.floor(fixed[key] || 0));
        }
    }
    
    return fixed;
}

// 导出存档
function exportSave() {
    try {
        const saveData = {
            gameData: gameData,
            version: CURRENT_SAVE_VERSION,
            timestamp: Date.now()
        };
        
        const dataStr = JSON.stringify(saveData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `immortal_cultivation_save_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        showNotification('存档已导出', 'success');
    } catch (error) {
        console.error('导出存档失败:', error);
        showNotification('导出失败', 'error');
    }
}

// 导入存档
function importSave() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const saveData = JSON.parse(e.target.result);
                
                // 验证存档格式
                if (!saveData.gameData || !saveData.version) {
                    throw new Error('无效的存档格式');
                }
                
                // 确认导入
                if (confirm('导入存档将覆盖当前游戏数据，确定要继续吗？')) {
                    gameData = { ...defaultGameData, ...saveData.gameData };
                    ensureDataStructure();
                    saveGame();
                    
                    // 重新加载界面
                    location.reload();
                    
                    showNotification('存档导入成功', 'success');
                }
            } catch (error) {
                console.error('导入存档失败:', error);
                showNotification('导入失败：' + error.message, 'error');
            }
        };
        
        reader.readAsText(file);
    };
    
    input.click();
}

// 重置游戏
function resetGame() {
    if (confirm('确定要重置游戏吗？这将删除所有进度！')) {
        if (confirm('请再次确认：这将永久删除所有游戏数据！')) {
            localStorage.removeItem('immortalCultivationSave');
            gameData = { ...defaultGameData };
            location.reload();
            showNotification('游戏已重置', 'success');
        }
    }
}

// 获取存档信息
function getSaveInfo() {
    const saveData = localStorage.getItem('immortalCultivationSave');
    if (!saveData) {
        return null;
    }
    
    try {
        const parsed = JSON.parse(saveData);
        return {
            version: parsed.version || '未知',
            timestamp: parsed.timestamp || 0,
            playerLevel: parsed.gameData?.player?.realm || 0,
            playerName: parsed.gameData?.player?.name || '修仙者',
            playTime: parsed.gameData?.player?.totalDays || 0
        };
    } catch (error) {
        console.error('获取存档信息失败:', error);
        return null;
    }
}

// 自动保存
function autoSave() {
    if (gameData.autoSave && gameData.autoSave.enabled) {
        const now = Date.now();
        const lastSave = gameData.autoSave.lastSave || 0;
        
        if (now - lastSave >= (gameData.autoSave.interval || 60000)) { // 默认1分钟
            saveGame();
            gameData.autoSave.lastSave = now;
        }
    }
}

// 初始化存储系统
function initStorage() {
    // 设置自动保存
    if (!gameData.autoSave) {
        gameData.autoSave = {
            enabled: true,
            interval: 60000, // 1分钟
            lastSave: 0
        };
    }
    
    // 定期自动保存
    setInterval(autoSave, 10000); // 每10秒检查一次
}
