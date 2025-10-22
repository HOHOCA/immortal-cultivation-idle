// 存储和存档管理

// 保存游戏
function saveGame() {
    try {
        const saveData = {
            gameData: gameData,
            version: '2.1.0',
            timestamp: Date.now()
        };
        localStorage.setItem('immortalCultivationSave', JSON.stringify(saveData));
        return true;
    } catch (error) {
        console.error('保存游戏失败:', error);
        showNotification('保存失败', 'error');
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
        
        // 检查版本兼容性
        if (parsed.version && parsed.version !== '2.1.0') {
            console.warn('存档版本不匹配，尝试迁移...');
            migrateSaveData(parsed.gameData);
        }
        
        gameData = { ...defaultGameData, ...parsed.gameData };
        
        // 确保必要的数据结构存在
        ensureDataStructure();
        
        return true;
    } catch (error) {
        console.error('加载游戏失败:', error);
        showNotification('加载失败', 'error');
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
    if (!gameData.combatSkills) gameData.combatSkills = [];
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

// 迁移存档数据
function migrateSaveData(oldData) {
    // 从旧版本迁移到新版本的数据结构
    console.log('开始数据迁移...');
    
    // 添加新功能的默认数据
    if (!oldData.npcRelationships) {
        oldData.npcRelationships = {};
    }
    
    if (!oldData.combatSkills) {
        oldData.combatSkills = [];
    }
    
    if (!oldData.combatEquipment) {
        oldData.combatEquipment = {
            weapon: null,
            armor: null,
            accessory: null
        };
    }
    
    console.log('数据迁移完成');
}

// 导出存档
function exportSave() {
    try {
        const saveData = {
            gameData: gameData,
            version: '2.1.0',
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
