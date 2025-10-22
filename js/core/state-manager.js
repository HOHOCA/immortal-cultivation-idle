/**
 * 游戏状态管理器
 * 统一管理游戏数据的访问和修改，提供类型安全的接口
 */

// 状态管理器类
class GameStateManager {
    constructor() {
        this.state = null;
        this.listeners = new Map(); // 状态变化监听器
        this.history = []; // 状态历史（用于撤销/调试）
        this.maxHistory = 50; // 最大历史记录数
    }

    // 初始化状态
    initialize(initialState) {
        this.state = initialState;
        this.notifyListeners('initialize', null, this.state);
    }

    // 获取整个状态（只读）
    getState() {
        return JSON.parse(JSON.stringify(this.state)); // 返回深拷贝
    }

    // ========== 玩家数据访问 ==========
    
    // 获取玩家属性
    getPlayer(key) {
        return key ? this.state.player[key] : { ...this.state.player };
    }

    // 设置玩家属性
    setPlayer(key, value) {
        const oldValue = this.state.player[key];
        this.state.player[key] = value;
        this.notifyListeners(`player.${key}`, oldValue, value);
        this.recordHistory('player', key, oldValue, value);
    }

    // 增加/减少玩家属性（数值）
    modifyPlayer(key, delta) {
        const oldValue = this.state.player[key];
        const newValue = (oldValue || 0) + delta;
        this.state.player[key] = Math.max(0, newValue); // 防止负数
        this.notifyListeners(`player.${key}`, oldValue, newValue);
        this.recordHistory('player', key, oldValue, newValue);
        return newValue;
    }

    // ========== 资源管理 ==========
    
    // 获取资源数量
    getResource(resourceName) {
        return this.state.player[resourceName] || 0;
    }

    // 添加资源
    addResource(resourceName, amount) {
        return this.modifyPlayer(resourceName, amount);
    }

    // 消耗资源（返回是否成功）
    consumeResource(resourceName, amount) {
        const current = this.getResource(resourceName);
        if (current >= amount) {
            this.modifyPlayer(resourceName, -amount);
            return true;
        }
        return false;
    }

    // 检查资源是否足够
    hasResource(resourceName, amount) {
        return this.getResource(resourceName) >= amount;
    }

    // 批量检查资源
    hasResources(requirements) {
        for (const [resource, amount] of Object.entries(requirements)) {
            if (!this.hasResource(resource, amount)) {
                return false;
            }
        }
        return true;
    }

    // 批量消耗资源
    consumeResources(requirements) {
        if (!this.hasResources(requirements)) {
            return false;
        }
        for (const [resource, amount] of Object.entries(requirements)) {
            this.consumeResource(resource, amount);
        }
        return true;
    }

    // ========== 设施管理 ==========
    
    // 获取设施等级
    getFacilityLevel(facilityName) {
        return this.state.facilities[facilityName] || 0;
    }

    // 设置设施等级
    setFacilityLevel(facilityName, level) {
        const oldLevel = this.state.facilities[facilityName];
        this.state.facilities[facilityName] = level;
        this.notifyListeners(`facility.${facilityName}`, oldLevel, level);
        this.recordHistory('facility', facilityName, oldLevel, level);
    }

    // 升级设施
    upgradeFacility(facilityName) {
        const currentLevel = this.getFacilityLevel(facilityName);
        this.setFacilityLevel(facilityName, currentLevel + 1);
        return currentLevel + 1;
    }

    // ========== 功法管理 ==========
    
    // 获取功法等级
    getTechniqueLevel(techniqueName) {
        return this.state.techniques[techniqueName] || 0;
    }

    // 设置功法等级
    setTechniqueLevel(techniqueName, level) {
        const oldLevel = this.state.techniques[techniqueName];
        this.state.techniques[techniqueName] = level;
        this.notifyListeners(`technique.${techniqueName}`, oldLevel, level);
        this.recordHistory('technique', techniqueName, oldLevel, level);
    }

    // 升级功法
    upgradeTechnique(techniqueName) {
        const currentLevel = this.getTechniqueLevel(techniqueName);
        this.setTechniqueLevel(techniqueName, currentLevel + 1);
        return currentLevel + 1;
    }

    // ========== 成就管理 ==========
    
    // 获取已完成成就
    getAchievements() {
        return [...this.state.achievements];
    }

    // 检查成就是否完成
    hasAchievement(achievementId) {
        return this.state.achievements.includes(achievementId);
    }

    // 添加成就
    addAchievement(achievementId) {
        if (!this.hasAchievement(achievementId)) {
            this.state.achievements.push(achievementId);
            this.notifyListeners('achievement', null, achievementId);
            this.recordHistory('achievement', 'add', null, achievementId);
            return true;
        }
        return false;
    }

    // ========== 门派管理 ==========
    
    // 获取门派信息
    getSect() {
        return this.state.sect;
    }

    // 设置门派
    setSect(sectId) {
        const oldSect = this.state.sect;
        this.state.sect = sectId;
        this.notifyListeners('sect', oldSect, sectId);
        this.recordHistory('sect', 'change', oldSect, sectId);
    }

    // 获取门派贡献度
    getSectContribution() {
        return this.state.sectContribution || 0;
    }

    // 添加门派贡献度
    addSectContribution(amount) {
        return this.modifyPlayer('sectContribution', amount);
    }

    // ========== NPC关系管理 ==========
    
    // 获取已认识的NPC列表
    getKnownNPCs() {
        return [...(this.state.knownNPCs || [])];
    }

    // 添加已认识的NPC
    addKnownNPC(npcId) {
        if (!this.state.knownNPCs) {
            this.state.knownNPCs = [];
        }
        if (!this.state.knownNPCs.includes(npcId)) {
            this.state.knownNPCs.push(npcId);
            this.notifyListeners('npc.known', null, npcId);
            return true;
        }
        return false;
    }

    // 检查是否认识某个NPC
    knowsNPC(npcId) {
        return this.state.knownNPCs && this.state.knownNPCs.includes(npcId);
    }

    // ========== 装备管理 ==========
    
    // 获取装备
    getEquipment(slot) {
        return slot ? this.state.equipment[slot] : { ...this.state.equipment };
    }

    // 装备物品
    equipItem(slot, itemId) {
        const oldItem = this.state.equipment[slot];
        this.state.equipment[slot] = itemId;
        this.notifyListeners(`equipment.${slot}`, oldItem, itemId);
        this.recordHistory('equipment', slot, oldItem, itemId);
    }

    // 卸下装备
    unequipItem(slot) {
        this.equipItem(slot, null);
    }

    // ========== 灵宠管理 ==========
    
    // 获取灵宠列表
    getPets() {
        return [...(this.state.pets || [])];
    }

    // 添加灵宠
    addPet(petId) {
        if (!this.state.pets) {
            this.state.pets = [];
        }
        if (!this.state.pets.includes(petId)) {
            this.state.pets.push(petId);
            this.notifyListeners('pet.add', null, petId);
            return true;
        }
        return false;
    }

    // 获取激活的灵宠
    getActivePet() {
        return this.state.activePet;
    }

    // 设置激活的灵宠
    setActivePet(petId) {
        const oldPet = this.state.activePet;
        this.state.activePet = petId;
        this.notifyListeners('pet.active', oldPet, petId);
    }

    // ========== 天赋管理 ==========
    
    // 获取已选择的天赋
    getTalents() {
        return [...(this.state.talents || [])];
    }

    // 添加天赋
    addTalent(talentId) {
        if (!this.state.talents) {
            this.state.talents = [];
        }
        if (!this.state.talents.includes(talentId)) {
            this.state.talents.push(talentId);
            this.notifyListeners('talent.add', null, talentId);
            return true;
        }
        return false;
    }

    // 检查是否拥有天赋
    hasTalent(talentId) {
        return this.state.talents && this.state.talents.includes(talentId);
    }

    // 获取天赋点
    getTalentPoints() {
        return this.state.talentPoints || 0;
    }

    // 消耗天赋点
    consumeTalentPoints(amount) {
        return this.consumeResource('talentPoints', amount);
    }

    // ========== 自动化设置 ==========
    
    // 获取自动化设置
    getAutoSettings() {
        return { ...(this.state.autoSettings || {}) };
    }

    // 设置自动化选项
    setAutoSetting(key, value) {
        if (!this.state.autoSettings) {
            this.state.autoSettings = {};
        }
        const oldValue = this.state.autoSettings[key];
        this.state.autoSettings[key] = value;
        this.notifyListeners(`auto.${key}`, oldValue, value);
    }

    // 切换自动化选项
    toggleAutoSetting(key) {
        const current = this.state.autoSettings && this.state.autoSettings[key];
        this.setAutoSetting(key, !current);
        return !current;
    }

    // ========== 通用数据访问 ==========
    
    // 获取任意路径的数据
    get(path) {
        const keys = path.split('.');
        let value = this.state;
        for (const key of keys) {
            if (value === undefined || value === null) return undefined;
            value = value[key];
        }
        return value;
    }

    // 设置任意路径的数据
    set(path, value) {
        const keys = path.split('.');
        const lastKey = keys.pop();
        let target = this.state;
        
        for (const key of keys) {
            if (!(key in target)) {
                target[key] = {};
            }
            target = target[key];
        }
        
        const oldValue = target[lastKey];
        target[lastKey] = value;
        this.notifyListeners(path, oldValue, value);
        this.recordHistory('custom', path, oldValue, value);
    }

    // ========== 监听器系统 ==========
    
    // 添加状态变化监听器
    addEventListener(event, callback) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, []);
        }
        this.listeners.get(event).push(callback);
    }

    // 移除监听器
    removeEventListener(event, callback) {
        if (this.listeners.has(event)) {
            const callbacks = this.listeners.get(event);
            const index = callbacks.indexOf(callback);
            if (index > -1) {
                callbacks.splice(index, 1);
            }
        }
    }

    // 通知监听器
    notifyListeners(event, oldValue, newValue) {
        if (this.listeners.has(event)) {
            const callbacks = this.listeners.get(event);
            callbacks.forEach(callback => callback(newValue, oldValue));
        }
        
        // 通知通用监听器
        if (this.listeners.has('*')) {
            const callbacks = this.listeners.get('*');
            callbacks.forEach(callback => callback(event, newValue, oldValue));
        }
    }

    // ========== 历史记录 ==========
    
    // 记录状态变化历史
    recordHistory(category, key, oldValue, newValue) {
        this.history.push({
            timestamp: Date.now(),
            category,
            key,
            oldValue,
            newValue
        });
        
        // 限制历史记录数量
        if (this.history.length > this.maxHistory) {
            this.history.shift();
        }
    }

    // 获取历史记录
    getHistory(limit = 10) {
        return this.history.slice(-limit);
    }

    // 清空历史
    clearHistory() {
        this.history = [];
    }

    // ========== 调试工具 ==========
    
    // 打印状态
    debug() {
        console.log('=== Game State ===');
        console.log('Player:', this.state.player);
        console.log('Facilities:', this.state.facilities);
        console.log('Techniques:', this.state.techniques);
        console.log('Sect:', this.state.sect);
        console.log('Achievements:', this.state.achievements.length);
        console.log('Recent History:', this.getHistory(5));
    }

    // 导出状态（用于存档）
    export() {
        return JSON.stringify(this.state);
    }

    // 导入状态（用于读档）
    import(jsonString) {
        try {
            const imported = JSON.parse(jsonString);
            this.state = imported;
            this.notifyListeners('import', null, imported);
            return true;
        } catch (e) {
            console.error('Failed to import state:', e);
            return false;
        }
    }
}

// 创建全局状态管理器实例
const gameState = new GameStateManager();

// 为了兼容legacy.js，保留gameData的直接访问
// 但推荐使用gameState的方法
let gameData = null;

// 初始化函数
function initializeGameState(initialData) {
    gameData = initialData;
    gameState.initialize(initialData);
    
    // 同步gameData和gameState.state的引用
    // 这样修改gameData也会反映到gameState中
    // 但建议逐步迁移到只使用gameState
}

