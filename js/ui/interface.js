// 界面管理和渲染相关功能

// 切换标签页
function switchTab(tabName) {
    // 隐藏所有标签内容
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // 移除所有标签的active类
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // 显示选中的标签内容
    const targetTab = document.getElementById(tabName + '-tab');
    if (targetTab) {
        targetTab.classList.add('active');
    }
    
    // 添加active类到选中的标签
    event.target.classList.add('active');
    
    // 根据不同标签页调用对应的渲染函数
    switch(tabName) {
        case 'cultivation-system':
            // 修炼系统：渲染设施和功法
            if (typeof renderFacilities === 'function') renderFacilities();
            if (typeof renderCultivation === 'function') renderCultivation();
            break;
        case 'resources':
            // 资源生产：渲染炼丹和灵田
            if (typeof renderAlchemy === 'function') renderAlchemy();
            if (typeof renderSpiritFieldInfo === 'function') renderSpiritFieldInfo();
            break;
        case 'power':
            // 战力提升：渲染装备、技能、天赋
            if (typeof renderEquipment === 'function') renderEquipment();
            if (typeof renderCombatSkills === 'function') renderCombatSkills();
            if (typeof renderTalentsContent === 'function') renderTalentsContent();
            break;
        case 'combat':
            // 战斗冒险
            if (typeof renderCombatContent === 'function') renderCombatContent();
            break;
        case 'sect':
            // 门派系统
            if (typeof renderSectContent === 'function') renderSectContent();
            break;
        case 'relationships':
            // 人际关系
            if (typeof renderRelationshipsPanel === 'function') renderRelationshipsPanel();
            break;
        case 'immortal':
            // 仙界飞升
            if (typeof renderImmortalTab === 'function') renderImmortalTab();
            break;
        case 'achievements':
            // 成就系统
            if (typeof renderAchievements === 'function') renderAchievements();
            break;
        case 'save':
            // 存档管理
            if (typeof renderSaveContent === 'function') renderSaveContent();
            break;
    }
}

// 应用法宝炼制标签页的折叠状态
function applyCraftingCollapseState() {
    if (!gameData.collapsedCategories) {
        gameData.collapsedCategories = {};
    }
    
    // 炼丹部分（默认展开）
    const alchemyCollapsed = gameData.collapsedCategories['crafting_alchemy'];
    const alchemySection = document.getElementById('alchemySection');
    const alchemyToggle = document.getElementById('crafting_alchemy_toggle');
    if (alchemySection && alchemyToggle) {
        alchemySection.style.display = alchemyCollapsed ? 'none' : 'block';
        alchemyToggle.textContent = alchemyCollapsed ? '▼ 展开' : '▲ 折叠';
    }
    
    // 装备法宝部分（默认展开）
    const equipmentCollapsed = gameData.collapsedCategories.hasOwnProperty('crafting_equipment') 
        ? gameData.collapsedCategories['crafting_equipment'] 
        : false;
    const equipmentSection = document.getElementById('equipmentSection');
    const equipmentToggle = document.getElementById('crafting_equipment_toggle');
    if (equipmentSection && equipmentToggle) {
        equipmentSection.style.display = equipmentCollapsed ? 'none' : 'block';
        equipmentToggle.textContent = equipmentCollapsed ? '▼ 展开' : '▲ 折叠';
    }
}

// 应用进阶系统标签页的折叠状态
function applyProgressionCollapseState() {
    if (!gameData.collapsedCategories) {
        gameData.collapsedCategories = {};
    }
    
    // 天赋部分（默认展开）
    const talentsCollapsed = gameData.collapsedCategories['progression_talents'];
    const talentsSection = document.getElementById('talentsSection');
    const talentsToggle = document.getElementById('progression_talents_toggle');
    if (talentsSection && talentsToggle) {
        talentsSection.style.display = talentsCollapsed ? 'none' : 'block';
        talentsToggle.textContent = talentsCollapsed ? '▼ 展开' : '▲ 折叠';
    }
    
    // 成就部分（默认展开）
    const achievementsCollapsed = gameData.collapsedCategories.hasOwnProperty('progression_achievements') 
        ? gameData.collapsedCategories['progression_achievements'] 
        : false;
    const achievementsSection = document.getElementById('achievementsSection');
    const achievementsToggle = document.getElementById('progression_achievements_toggle');
    if (achievementsSection && achievementsToggle) {
        achievementsSection.style.display = achievementsCollapsed ? 'none' : 'block';
        achievementsToggle.textContent = achievementsCollapsed ? '▼ 展开' : '▲ 折叠';
    }
}

// 切换折叠状态（优化版：只切换显示，不重新渲染）
function toggleCategory(category) {
    if (!gameData.collapsedCategories) {
        gameData.collapsedCategories = {};
    }
    gameData.collapsedCategories[category] = !gameData.collapsedCategories[category];
    const isCollapsed = gameData.collapsedCategories[category];
    saveGame();
    
    // 直接切换显示状态，不重新渲染整个页面
    if (category.startsWith('sect_')) {
        // 门派事务的子分类
        const contentId = category + '_content';
        const toggleId = category + '_toggle';
        const contentEl = document.getElementById(contentId);
        const toggleEl = document.getElementById(toggleId);
        
        if (contentEl && toggleEl) {
            contentEl.style.display = isCollapsed ? 'none' : 'block';
            toggleEl.textContent = isCollapsed ? '▼ 展开' : '▲ 折叠';
        }
    } else if (category.startsWith('facility_')) {
        // 设施管理的分类
        const contentId = category + '_content';
        const toggleId = category + '_toggle';
        const contentEl = document.getElementById(contentId);
        const toggleEl = document.getElementById(toggleId);
        
        if (contentEl && toggleEl) {
            contentEl.style.display = isCollapsed ? 'none' : 'block';
            toggleEl.textContent = isCollapsed ? '▼ 展开' : '▲ 折叠';
        }
    } else if (category.startsWith('technique_')) {
        // 功法修炼的分类
        const contentId = category + '_content';
        const toggleId = category + '_toggle';
        const contentEl = document.getElementById(contentId);
        const toggleEl = document.getElementById(toggleId);
        
        if (contentEl && toggleEl) {
            contentEl.style.display = isCollapsed ? 'none' : 'grid';
            toggleEl.textContent = isCollapsed ? '▼ 展开' : '▲ 折叠';
        }
    } else if (category.startsWith('crafting_')) {
        // 处理法宝炼制标签页的折叠
        const section = category.split('_')[1];
        const sectionEl = document.getElementById(section + 'Section');
        const toggleEl = document.getElementById(category + '_toggle');
        
        if (sectionEl && toggleEl) {
            sectionEl.style.display = isCollapsed ? 'none' : 'block';
            toggleEl.textContent = isCollapsed ? '▼ 展开' : '▲ 折叠';
        }
    } else if (category.startsWith('progression_')) {
        // 处理进阶系统标签页的折叠
        const section = category.split('_')[1];
        const sectionEl = document.getElementById(section + 'Section');
        const toggleEl = document.getElementById(category + '_toggle');
        
        if (sectionEl && toggleEl) {
            sectionEl.style.display = isCollapsed ? 'none' : 'block';
            toggleEl.textContent = isCollapsed ? '▼ 展开' : '▲ 折叠';
        }
    }
}

// 切换日志面板
function toggleLogPanel() {
    if (!gameData.hasOwnProperty('logPanelCollapsed')) {
        gameData.logPanelCollapsed = false;
    }
    gameData.logPanelCollapsed = !gameData.logPanelCollapsed;
    applyLogPanelState();
    saveGame();
}

// 切换玩家详细属性
function togglePlayerStats() {
    if (!gameData.hasOwnProperty('playerStatsCollapsed')) {
        gameData.playerStatsCollapsed = true; // 默认折叠
    }
    gameData.playerStatsCollapsed = !gameData.playerStatsCollapsed;
    applyPlayerStatsState();
    saveGame();
}

// 应用玩家属性折叠状态
function applyPlayerStatsState() {
    const advancedStats = document.getElementById('advancedStats');
    const playerStatsToggle = document.getElementById('playerStatsToggle');
    
    if (!gameData.hasOwnProperty('playerStatsCollapsed')) {
        gameData.playerStatsCollapsed = true; // 默认折叠
    }
    
    if (advancedStats && playerStatsToggle) {
        advancedStats.style.display = gameData.playerStatsCollapsed ? 'none' : 'block';
        playerStatsToggle.textContent = gameData.playerStatsCollapsed ? '▼' : '▲';
    }
}

// 应用日志面板状态
function applyLogPanelState() {
    const mainContent = document.querySelector('.main-content');
    const logToggleIcon = document.getElementById('logToggleIcon');
    const logExpandBtn = document.getElementById('logExpandBtn');
    const logExpandIcon = document.getElementById('logExpandIcon');
    
    // 等待getSvg函数加载
    if (typeof getSvg !== 'function') {
        setTimeout(applyLogPanelState, 100);
        return;
    }
    
    if (gameData.logPanelCollapsed) {
        mainContent.classList.add('log-collapsed');
        if (logToggleIcon) logToggleIcon.textContent = '✕';
        if (logExpandBtn) logExpandBtn.style.display = 'block';
        if (logExpandIcon) logExpandIcon.innerHTML = getSvg('book');
    } else {
        mainContent.classList.remove('log-collapsed');
        if (logToggleIcon) logToggleIcon.textContent = '✕';
        if (logExpandBtn) logExpandBtn.style.display = 'none';
        if (logExpandIcon) logExpandIcon.innerHTML = getSvg('book');
    }
}

// 切换深色模式
function toggleDarkMode() {
    gameData.darkMode = !gameData.darkMode;
    applyTheme();
    saveGame();
    
    // 更新主题图标
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        themeIcon.innerHTML = gameData.darkMode ? getSvg('sun') : getSvg('moon');
    }
}

// 应用主题
function applyTheme() {
    const body = document.body;
    if (gameData.darkMode) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

// 更新UI
function updateUI() {
    // 更新玩家属性显示
    const spiritualPower = document.getElementById('spiritualPower');
    const spiritStone = document.getElementById('spiritStone');
    const pillCount = document.getElementById('pillCount');
    const totalDays = document.getElementById('totalDays');
    const spiritPerSec = document.getElementById('spiritPerSec');
    const immortalStone = document.getElementById('immortalStone');
    const daoFruit = document.getElementById('daoFruit');
    
    if (spiritualPower) spiritualPower.textContent = formatNumber(gameData.player.spiritualPower);
    if (spiritStone) spiritStone.textContent = formatNumber(gameData.player.spiritStone);
    if (pillCount) pillCount.textContent = formatNumber(gameData.player.pills);
    if (totalDays) totalDays.textContent = formatNumber(gameData.player.totalDays);
    if (spiritPerSec) spiritPerSec.textContent = formatNumber(gameData.player.spiritPerSec || 0);
    if (immortalStone) immortalStone.textContent = formatNumber(gameData.player.immortalStone || 0);
    if (daoFruit) daoFruit.textContent = formatNumber(gameData.player.daoFruit || 0);
    
    // 更新境界显示
    const realmName = document.getElementById('realmName');
    const realmLevel = document.getElementById('realmLevel');
    if (realmName && realmLevel) {
        // 判断是凡界还是仙界
        if (gameData.player.isInImmortalWorld) {
            const realm = immortalRealms[gameData.player.immortalRealm];
            realmName.textContent = `🌟 ${realm.name}`;
            realmLevel.textContent = `第${gameData.player.immortalRealmLevel}层`;
        } else {
            const realm = realms[gameData.player.realm];
            realmName.textContent = realm.name;
            realmLevel.textContent = `第${gameData.player.realmLevel}层`;
        }
    }
    
    // 更新突破进度
    const breakthroughProgress = document.getElementById('breakthroughProgress');
    const spiritProgress = document.getElementById('spiritProgress');
    if (breakthroughProgress && spiritProgress) {
        const progress = gameData.player.breakthroughProgress || 0;
        breakthroughProgress.style.width = `${progress}%`;
        breakthroughProgress.textContent = `${Math.floor(progress)}%`;
        spiritProgress.style.width = `${Math.min(progress, 100)}%`;
    }
    
    // 更新门派信息
    const sectInfo = document.getElementById('sectInfo');
    const sectName = document.getElementById('sectName');
    if (sectInfo && sectName) {
        if (gameData.sect && gameData.sect !== 'rogue') {
            sectInfo.style.display = 'flex';
            sectName.textContent = sects[gameData.sect].name;
        } else {
            sectInfo.style.display = 'none';
        }
    }
    
    // 更新五行属性信息
    const elementInfo = document.getElementById('elementInfo');
    const elementName = document.getElementById('elementName');
    if (elementInfo && elementName) {
        if (gameData.player.element && gameData.player.element !== 'none') {
            const elem = elementsData[gameData.player.element];
            elementInfo.style.display = 'flex';
            const elementText = `${elem.name} Lv.${gameData.player.elementPower || 0}`;
            elementName.textContent = elementText;
            elementName.style.color = elem.color;
        } else if (gameData.player.realm >= 1) {
            elementInfo.style.display = 'flex';
            elementName.textContent = '未选择';
            elementName.style.color = '#95a5a6';
        } else {
            elementInfo.style.display = 'none';
        }
    }
    
    // 更新修炼按钮
    const cultivateBtn = document.getElementById('cultivateBtn');
    const cultivateBtnText = document.getElementById('cultivateBtnText');
    if (cultivateBtn && cultivateBtnText) {
        const spiritGain = calculateSpiritGain();
        cultivateBtnText.textContent = `修炼 (+${formatNumber(spiritGain)}/s)`;
    }
    
    // 更新突破按钮
    const breakthroughBtn = document.getElementById('breakthroughBtn');
    if (breakthroughBtn) {
        const canBreakthrough = gameData.player.breakthroughProgress >= 100;
        breakthroughBtn.disabled = !canBreakthrough;
    }
    
    // 更新丹药按钮
    const pillBtn = document.getElementById('pillBtn');
    const usePillBtn = document.getElementById('usePillBtn');
    if (pillBtn && usePillBtn) {
        const hasPills = gameData.player.pills > 0;
        pillBtn.disabled = !hasPills;
        usePillBtn.disabled = !hasPills;
    }
    
    // 更新自动模式按钮
    const autoModeBtn = document.getElementById('autoModeBtn');
    const autoModeText = document.getElementById('autoModeText');
    if (autoModeBtn && autoModeText) {
        if (gameData.autoMode) {
            autoModeText.innerHTML = getSvg('pause') + ' 关闭自动修炼';
        } else {
            autoModeText.innerHTML = getSvg('refresh') + ' 开启自动修炼';
        }
    }
}

// 更新自动模式UI
function updateAutoModeUI() {
    const autoModeBtn = document.getElementById('autoModeBtn');
    const autoModeText = document.getElementById('autoModeText');
    if (autoModeBtn && autoModeText) {
        if (gameData.autoMode) {
            autoModeText.innerHTML = getSvg('pause') + ' 关闭自动修炼';
        } else {
            autoModeText.innerHTML = getSvg('refresh') + ' 开启自动修炼';
        }
    }
}

// 安全的元素获取
function safeGetElement(id) {
    const element = document.getElementById(id);
    if (!element) {
        console.warn(`Element with id '${id}' not found`);
    }
    return element;
}

// 格式化数字显示（已在 utils/format.js 中定义，此处注释避免重复）

// 初始化快捷键系统
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // 忽略在输入框中的按键
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }
        
        switch(e.key.toLowerCase()) {
            case ' ':
                e.preventDefault();
                cultivate();
                break;
            case 'b':
                e.preventDefault();
                breakthrough();
                break;
            case 'p':
                e.preventDefault();
                usePill();
                break;
            case 'a':
                e.preventDefault();
                toggleAutoMode();
                break;
            case 'd':
                e.preventDefault();
                toggleDarkMode();
                break;
            case 's':
                e.preventDefault();
                saveGame();
                showNotification('游戏已保存', 'success');
                break;
            case 'l':
                e.preventDefault();
                loadGame();
                showNotification('游戏已加载', 'success');
                break;
            case '?':
                e.preventDefault();
                showShortcutHelp();
                break;
        }
    });
}

// 初始化界面
function initInterface() {
    // 初始化快捷键
    initKeyboardShortcuts();
    
    // 初始化图标
    initIcons();
    
    // 应用主题
    applyTheme();
    
    // 应用日志面板状态
    applyLogPanelState();
    
    // 应用玩家属性折叠状态
    applyPlayerStatsState();
    
    // 初始化通知系统
    if (typeof initNotificationSystem === 'function') {
        initNotificationSystem();
    }
    
    // 更新UI
    updateUI();
}

// 初始化图标
function initIcons() {
    // 等待getSvg函数加载
    if (typeof getSvg !== 'function') {
        setTimeout(initIcons, 100);
        return;
    }
    
    // 右上角按钮图标
    const themeIcon = document.getElementById('themeIcon');
    const keyboardIcon = document.getElementById('keyboardIcon');
    const settingsIcon = document.getElementById('settingsIcon');
    
    if (themeIcon) {
        themeIcon.innerHTML = gameData.darkMode ? getSvg('sun') : getSvg('moon');
    }
    if (keyboardIcon) {
        keyboardIcon.innerHTML = getSvg('keyboard');
    }
    if (settingsIcon) {
        settingsIcon.innerHTML = getSvg('settings');
    }
    
    // 替换所有icon类为SVG
    const iconElements = document.querySelectorAll('[class^="icon-"]');
    iconElements.forEach(el => {
        const iconName = el.className.replace('icon-', '');
        el.innerHTML = getSvg(iconName);
    });
}
