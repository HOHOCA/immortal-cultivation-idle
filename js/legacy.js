// 临时文件：包含所有原有逻辑
// TODO: 逐步拆分到各个模块

// SVG图标系统 - 已移至 js/utils/icons.js
// 下方代码已注释，使用icons.js中的定义
/* 
        const svgIcons = {
            moon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
            sun: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="5"/><path d="M12 1v6m0 6v6m8.66-11.66l-4.24 4.24m-4.24 4.24l-4.24 4.24m11.66-12.24l-4.24 4.24m-4.24 4.24l-4.24 4.24M23 12h-6m-6 0H1"/></svg>',
            settings: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6m5.66-14l-3.54 3.54m0 4.92l-3.54 3.54M23 12h-6m-6 0H1m17.66 5.66l-3.54-3.54m-4.92 0l-3.54 3.54"/></svg>',
            keyboard: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M7 16h10"/></svg>',
            save: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>',
            upload: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
            download: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
            trophy: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6m12 5h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M6 9h12v5a6 6 0 0 1-12 0V9z"/><path d="M9 21h6m-3-4v4"/></svg>',
            star: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
            sparkles: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l1.5 6.5L20 8l-6.5 1.5L12 16l-1.5-6.5L4 8l6.5-1.5L12 0zm5 12l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"/></svg>',
            sword: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 2l6 6-9 9-6-6 9-9z"/><path d="M5.5 11.5L9 15"/><path d="M2 18l2 2 4-4"/></svg>',
            shield: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
            book: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
            flame: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c1.5 3 4.5 5.5 4.5 9.5a4.5 4.5 0 0 1-9 0c0-4 3-6.5 4.5-9.5zm0 19a7 7 0 0 0 7-7c0-5-5-9-7-12-2 3-7 7-7 12a7 7 0 0 0 7 7z"/></svg>',
            mountain: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 20h18L12 4 3 20z"/><path d="M6.5 20l5.5-9 5.5 9"/></svg>',
            users: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
            gift: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>',
            zap: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/></svg>',
            target: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
            refresh: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
            pause: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>',
            clock: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
            check: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>',
            x: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
            alert: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
            info: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
            copy: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
            home: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
            bolt: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/></svg>',
            beaker: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3h6v6l5 7c.61.8.61 2 0 2.8-.4.52-1 .82-1.65.82H5.65C4.74 19.62 4 18.88 4 18c0-.61.21-1.2.6-1.67L9 9V3z"/><path d="M9 9h6"/></svg>',
            box: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
            crown: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6 6-3-3 9h-12l-3-9 6 3 3-6zm-8 18h16v2h-16v-2z"/></svg>',
            lock: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
            // 新增图标
            temple: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L2 9v3h2v7h16v-7h2V9L12 3z"/></svg>',
            coin: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 6v12M8 10h8M8 14h8"/></svg>',
            clipboard: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>',
            heart: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',
            diamond: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6 2L2 8l10 14L22 8l-4-6H6z"/></svg>',
            person: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',
            gear: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65c-.04-.24-.25-.42-.5-.42h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66z"/></svg>',
            disk: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>'
        };

        // 获取SVG图标
        function getSvg(name) {
            return svgIcons[name] || '';
        }
*/
// 注释结束 - SVG图标系统现在由 js/utils/icons.js 提供

        // 游戏数据 - 使用 state-manager.js 中声明的全局变量
        gameData = {
            // 玩家状态
            player: {
                realm: 0, // 境界索引
                realmLevel: 1, // 境界层数
                spiritualPower: 0, // 当前灵力
                spiritStone: 0, // 灵石
                pills: 0, // 丹药数量
                totalDays: 0, // 修炼天数
                breakthroughProgress: 0, // 突破进度
                totalPillsUsed: 0, // 使用丹药总数
                totalBreakthroughs: 0, // 成功突破次数
                // 新增资源
                immortalStone: 0, // 仙石（高级货币）
                daoFruit: 0, // 道果（用于天赋）
                heavenlyEssence: 0, // 天道精华（用于炼器）
                // 玩家属性（五行）
                element: 'none', // 五行属性：fire, water, wood, metal, earth, none
                elementPower: 0, // 属性强度
                // 战斗相关
                combatPower: 0, // 战斗力
                combatWins: 0, // 战斗胜利次数
                combatLosses: 0, // 战斗失败次数
                bossesDefeated: [], // 已击败的Boss
                // 仙界相关
                isInImmortalWorld: false, // 是否在仙界
                immortalRealm: 0, // 仙界境界索引
                immortalRealmLevel: 1 // 仙界境界层数
            },
            
            // 设施等级
            facilities: {
                spiritualVein: 1, // 灵脉
                pillRoom: 0, // 丹房
                library: 0, // 藏经阁
                artifactRoom: 0, // 炼器房
                spiritualField: 0, // 灵田
                immortalPond: 0, // 仙池（飞升解锁）
                celestialTree: 0 // 仙树（飞升解锁）
            },
            
            // 功法等级
            techniques: {
                // 基础功法
                basic: 0,
                fire_path: 0,
                water_path: 0,
                body_refining: 0,
                // 进阶功法
                advanced: 0,
                sword_intent: 0,
                spell_mastery: 0,
                // 顶级功法
                supreme: 0,
                heavenly_dao: 0,
                void_technique: 0,
                // 飞升功法
                immortal_foundation: 0,
                celestial_power: 0,
                eternal_dao: 0
            },
            
            // 成就
            achievements: [],
            achievementFilter: 'all', // 成就筛选
            
            // 门派
            sect: null, // 当前门派
            sectContribution: 0, // 门派贡献度
            currentSectTasks: [], // 当前进行的门派任务数组 [{taskId, endTime, startTime}, ...]
            maxSectTaskSlots: 1, // 最大任务槽位（根据境界提升）
            masterLevel: 0, // 师尊等级（拜师后）
            disciples: [], // 徒弟列表
            
            // 人际关系
            knownNPCs: [], // 已认识的NPC ID列表
            
            // 剧情
            storyProgress: 0, // 剧情进度
            unlockedStories: [], // 已解锁剧情
            
            // 装备法宝
            equipment: {
                weapon: null,
                armor: null,
                accessory: null
            },
            artifacts: [], // 拥有的法宝列表
            
            // 灵宠系统
            pets: [], // 拥有的灵宠
            activePet: null, // 当前激活的灵宠
            
            // 随机事件
            lastEventTime: Date.now(),
            currentEvent: null, // 当前事件
            
            // 飞升系统
            ascensionCount: 0, // 飞升次数
            ascensionBonuses: {}, // 飞升加成
            
            // 自动模式
            autoMode: false,
            autoSettings: {
                autoCultivate: false,
                autoBreakthrough: true,
                autoPill: true,
                autoUpgrade: false,
                autoSectTask: false,
                pillThreshold: 80 // 突破进度低于此值时使用丹药
            },
            
            // UI状态
            collapsedCategories: {}, // 折叠的分类
            
            // 主题设置
            darkMode: false,
            
            // 存档系统
            currentSaveSlot: 0, // 当前存档槽位 (0-4)
            
            // 天赋系统
            talents: [], // 已选择的天赋
            talentPoints: 0, // 天赋点
            
            // 炼器系统
            craftedItems: [], // 已炼制的物品
            craftingQueue: [], // 炼制队列
            
            // 副本系统
            dungeonProgress: {}, // 副本进度
            dungeonAttempts: 0, // 今日副本次数
            lastDungeonReset: Date.now(), // 上次重置时间
            
            // 统计数据
            statistics: {
                totalSpiritGained: 0,
                totalStoneSpent: 0,
                totalPillsUsed: 0,
                totalBreakthroughs: 0,
                totalPlayTime: 0, // 总游戏时间（秒）
                startTime: Date.now(),
                totalTrades: 0, // NPC交易次数
                perfectChoices: 0, // 完美选择次数
                manualSaves: 0, // 手动存档次数
                exports: 0 // 导出次数
            },
            
            // 成就奖励加成
            achievementBonuses: {
                spiritualPowerBonus: 0,
                spiritStoneBonus: 0,
                breakthroughBonus: 0
            },
            
            // 时间
            lastSave: Date.now(),
            lastUpdate: Date.now(),
            
            // 战斗系统
            combatSkills: [], // 已学习的战斗技能
            combatEquipment: { // 战斗装备
                weapon: null,
                armor: null,
                accessory: null
            },
            combatStats: { // 战斗属性
                attack: 0,
                defense: 0,
                speed: 0,
                critical: 0.05 // 暴击率
            },
            
            // 日志限制
            maxLogEntries: 100 // 最大日志条目数
        };

        // 设施定义（平衡后的数值） - 已移至 config/facilities.js
        /* const facilitiesData = {
            spiritualVein: {
                name: '灵脉',
                desc: '提升灵力产出速度',
                baseCost: 50,
                costMultiplier: 1.45, // 降低成本增长
                getBenefit: (level) => `每秒 +${level} 灵力`
            },
            pillRoom: {
                name: '丹房',
                desc: '自动生产丹药',
                baseCost: 200,
                costMultiplier: 1.7, // 降低成本增长
                getBenefit: (level) => `每30秒 +1 丹药 (等级${level})`
            },
            library: {
                name: '藏经阁',
                desc: '提升突破成功率和灵力获取',
                baseCost: 500,
                costMultiplier: 1.85, // 降低成本增长
                getBenefit: (level) => `灵力获取 +${level * 10}%`
            },
            artifactRoom: {
                name: '炼器房',
                desc: '提升整体修炼效率',
                baseCost: 1000,
                costMultiplier: 2.0, // 降低成本增长
                getBenefit: (level) => `整体效率 +${level * 5}%`
            },
            spiritualField: {
                name: '灵田',
                desc: '种植灵药，获取额外资源',
                baseCost: 1500,
                costMultiplier: 2.2, // 降低成本增长
                getBenefit: (level) => `每分钟 +${level} 灵石`
            },
            immortalPond: {
                name: '⭐ 仙池',
                desc: '仙界灵泉，大幅提升灵力产出',
                baseCost: 5000,
                costMultiplier: 3,
                requiredAscension: 1,
                getBenefit: (level) => `灵力产出 +${level * 50}%`
            },
            celestialTree: {
                name: '⭐ 仙树',
                desc: '天地灵根，每小时产出珍贵资源',
                baseCost: 10000,
                costMultiplier: 3.5,
                requiredAscension: 2,
                getBenefit: (level) => `每小时 +${level * 10}灵石, +${level}丹药`
            }
        }; */

        // 灵宠定义
        const pets = {
            spirit_fox: {
                name: '灵狐',
                desc: '聪慧的灵狐，提升修炼速度',
                rarity: 'common',
                bonus: { spiritualPowerBonus: 0.15 },
                requiredRealm: 1
            },
            fire_bird: {
                name: '炎鸟',
                desc: '火焰之鸟，增强战斗力',
                rarity: 'rare',
                bonus: { spiritualPowerBonus: 0.25, breakthroughBonus: 0.05 },
                requiredRealm: 2
            },
            jade_dragon: {
                name: '玉龙',
                desc: '高贵的龙族，全面提升',
                rarity: 'epic',
                bonus: { spiritualPowerBonus: 0.4, breakthroughBonus: 0.1, spiritStoneBonus: 0.3 },
                requiredRealm: 4
            },
            phoenix: {
                name: '凤凰',
                desc: '涅槃重生的神兽',
                rarity: 'legendary',
                bonus: { spiritualPowerBonus: 0.6, breakthroughBonus: 0.15, spiritStoneBonus: 0.5 },
                requiredRealm: 6
            },
            qilin: {
                name: '麒麟',
                desc: '祥瑞之兽，仙界圣兽',
                rarity: 'mythic',
                bonus: { spiritualPowerBonus: 1.0, breakthroughBonus: 0.2, spiritStoneBonus: 0.8 },
                requiredAscension: 3
            }
        };

        // 法宝定义
        const artifacts = {
            // 武器类
            spirit_sword: {
                name: '灵剑',
                desc: '蕴含灵气的宝剑',
                type: 'weapon',
                bonus: { spiritualPowerBonus: 0.1 },
                requiredRealm: 1
            },
            heavenly_sword: {
                name: '天剑',
                desc: '传说中的神兵',
                type: 'weapon',
                bonus: { spiritualPowerBonus: 0.25 },
                requiredRealm: 4
            },
            dragon_blade: {
                name: '龙刃',
                desc: '用龙鳞锻造的神兵',
                type: 'weapon',
                bonus: { spiritualPowerBonus: 0.3, combatPower: 800 },
                requiredRealm: 4
            },
            phoenix_staff: {
                name: '凤羽法杖',
                desc: '凤凰羽毛制成的法杖',
                type: 'weapon',
                bonus: { spiritualPowerBonus: 0.35, breakthroughBonus: 0.1 },
                requiredRealm: 5
            },
            void_saber: {
                name: '虚空刀',
                desc: '掌控虚空之力的神兵',
                type: 'weapon',
                bonus: { spiritualPowerBonus: 0.4, spiritStoneBonus: 0.2 },
                requiredRealm: 6
            },
            chaos_hammer: {
                name: '混沌锤',
                desc: '混沌之力锻造的重锤',
                type: 'weapon',
                bonus: { spiritualPowerBonus: 0.45, combatPower: 1200 },
                requiredRealm: 7
            },
            
            // 护甲类
            protective_armor: {
                name: '护体法衣',
                desc: '提升防御的法衣',
                type: 'armor',
                bonus: { breakthroughBonus: 0.08 },
                requiredRealm: 1
            },
            immortal_armor: {
                name: '仙铠',
                desc: '仙界流传的护甲',
                type: 'armor',
                bonus: { breakthroughBonus: 0.15, spiritualPowerBonus: 0.1 },
                requiredRealm: 5
            },
            dragon_scale_armor: {
                name: '龙鳞甲',
                desc: '真龙鳞片制成的护甲',
                type: 'armor',
                bonus: { breakthroughBonus: 0.2, combatPower: 600 },
                requiredRealm: 5
            },
            phoenix_robe: {
                name: '凤羽袍',
                desc: '凤凰羽毛编织的法袍',
                type: 'armor',
                bonus: { breakthroughBonus: 0.25, spiritualPowerBonus: 0.15 },
                requiredRealm: 6
            },
            void_cloak: {
                name: '虚空斗篷',
                desc: '融入虚空之力的斗篷',
                type: 'armor',
                bonus: { breakthroughBonus: 0.3, spiritStoneBonus: 0.25 },
                requiredRealm: 7
            },
            
            // 饰品类
            spirit_ring: {
                name: '灵戒',
                desc: '储存灵力的戒指',
                type: 'accessory',
                bonus: { spiritStoneBonus: 0.2 },
                requiredRealm: 2
            },
            void_ring: {
                name: '虚空戒',
                desc: '掌控虚空之力的戒指',
                type: 'accessory',
                bonus: { spiritStoneBonus: 0.4, spiritualPowerBonus: 0.15 },
                requiredRealm: 6
            },
            dragon_necklace: {
                name: '龙珠项链',
                desc: '龙珠制成的项链',
                type: 'accessory',
                bonus: { spiritualPowerBonus: 0.2, breakthroughBonus: 0.1 },
                requiredRealm: 4
            },
            phoenix_bracelet: {
                name: '凤羽手镯',
                desc: '凤凰羽毛制成的手镯',
                type: 'accessory',
                bonus: { spiritStoneBonus: 0.3, spiritualPowerBonus: 0.25 },
                requiredRealm: 5
            },
            chaos_amulet: {
                name: '混沌护符',
                desc: '混沌之力凝聚的护符',
                type: 'accessory',
                bonus: { spiritualPowerBonus: 0.3, breakthroughBonus: 0.2, spiritStoneBonus: 0.2 },
                requiredRealm: 7
            },
            
            // 特殊法宝
            alchemy_cauldron: {
                name: '炼丹炉',
                desc: '提升炼丹效率的法宝',
                type: 'special',
                bonus: { pillBonus: 0.5 },
                requiredRealm: 3
            },
            formation_disk: {
                name: '阵盘',
                desc: '布置阵法的法宝',
                type: 'special',
                bonus: { facilityBonus: 0.3 },
                requiredRealm: 4
            },
            spirit_talisman: {
                name: '灵符',
                desc: '蕴含法力的符箓',
                type: 'special',
                bonus: { breakthroughBonus: 0.15, spiritualPowerBonus: 0.1 },
                requiredRealm: 3
            }
        };

        // 炼制配方定义
        const forgeRecipes = {
            // 基础法宝
            spirit_sword: { 
                name: '灵剑', 
                cost: { spiritStone: 200, ironOre: 5 }, 
                success: 0.8,
                requiredRealm: 1
            },
            protective_armor: { 
                name: '护体法衣', 
                cost: { spiritStone: 200, cloth: 5 }, 
                success: 0.8,
                requiredRealm: 1
            },
            spirit_ring: { 
                name: '灵戒', 
                cost: { spiritStone: 400, spiritCrystal: 3 }, 
                success: 0.6,
                requiredRealm: 2
            },
            
            // 中级法宝
            dragon_blade: {
                name: '龙刃',
                cost: { spiritStone: 1000, dragonScale: 3, spiritOre: 10 },
                success: 0.5,
                requiredRealm: 4
            },
            dragon_scale_armor: {
                name: '龙鳞甲',
                cost: { spiritStone: 1200, dragonScale: 5, cloth: 8 },
                success: 0.45,
                requiredRealm: 5
            },
            dragon_necklace: {
                name: '龙珠项链',
                cost: { spiritStone: 800, dragonScale: 2, spiritCrystal: 5 },
                success: 0.6,
                requiredRealm: 4
            },
            
            // 高级法宝
            phoenix_staff: {
                name: '凤羽法杖',
                cost: { spiritStone: 2000, phoenixFeather: 3, spiritOre: 15 },
                success: 0.4,
                requiredRealm: 5
            },
            phoenix_robe: {
                name: '凤羽袍',
                cost: { spiritStone: 2500, phoenixFeather: 5, cloth: 10 },
                success: 0.35,
                requiredRealm: 6
            },
            phoenix_bracelet: {
                name: '凤羽手镯',
                cost: { spiritStone: 1500, phoenixFeather: 2, spiritCrystal: 8 },
                success: 0.5,
                requiredRealm: 5
            },
            
            // 顶级法宝
            void_saber: {
                name: '虚空刀',
                cost: { spiritStone: 5000, heavenMetal: 3, chaosCrystal: 2 },
                success: 0.3,
                requiredRealm: 6
            },
            void_cloak: {
                name: '虚空斗篷',
                cost: { spiritStone: 6000, heavenMetal: 5, cloth: 15 },
                success: 0.25,
                requiredRealm: 7
            },
            void_ring: {
                name: '虚空戒',
                cost: { spiritStone: 4000, heavenMetal: 2, chaosCrystal: 3 },
                success: 0.35,
                requiredRealm: 6
            },
            
            // 传说法宝
            chaos_hammer: {
                name: '混沌锤',
                cost: { spiritStone: 10000, chaosCrystal: 5, heavenMetal: 8 },
                success: 0.2,
                requiredRealm: 7
            },
            chaos_amulet: {
                name: '混沌护符',
                cost: { spiritStone: 8000, chaosCrystal: 3, phoenixFeather: 2 },
                success: 0.25,
                requiredRealm: 7
            },
            
            // 特殊法宝
            alchemy_cauldron: {
                name: '炼丹炉',
                cost: { spiritStone: 1500, spiritOre: 8, demonCore: 3 },
                success: 0.6,
                requiredRealm: 3
            },
            formation_disk: {
                name: '阵盘',
                cost: { spiritStone: 2000, spiritCrystal: 10, demonCore: 5 },
                success: 0.5,
                requiredRealm: 4
            },
            spirit_talisman: {
                name: '灵符',
                cost: { spiritStone: 500, cloth: 3, demonCore: 1 },
                success: 0.8,
                requiredRealm: 3
            }
        };

        // 门派任务定义 - 已移至 config/sects.js
        /* const sectTasks = {
            // 剑宗任务
            patrol_mission: {
                name: '巡山任务',
                desc: '巡视宗门周边，清除妖兽',
                duration: 300, // 5分钟
                rewards: { contribution: 10, spiritStone: 50 },
                cost: { spiritualPower: 200 }
            },
            demon_hunt: {
                name: '斩妖除魔',
                desc: '猎杀作恶的妖魔',
                duration: 600, // 10分钟
                rewards: { contribution: 25, spiritStone: 150, pills: 2 },
                cost: { spiritualPower: 500 }
            },
            sect_competition: {
                name: '宗门比武',
                desc: '参加宗门内部切磋',
                duration: 180,
                rewards: { contribution: 15, spiritualPower: 1000 },
                cost: { spiritualPower: 300 }
            },
            
            // 丹宗任务
            collect_herbs: {
                name: '采集灵药',
                desc: '前往灵山采集炼丹材料',
                duration: 240,
                rewards: { contribution: 8, spiritStone: 40, pills: 3 },
                cost: { spiritualPower: 150 }
            },
            refine_pills: {
                name: '炼制丹药',
                desc: '为宗门炼制丹药',
                duration: 480,
                rewards: { contribution: 20, spiritStone: 100, pills: 5 },
                cost: { spiritStone: 50 }
            },
            research_recipe: {
                name: '研究丹方',
                desc: '研究新的丹药配方',
                duration: 720,
                rewards: { contribution: 30, spiritStone: 200 },
                cost: { spiritStone: 100 }
            },
            
            // 阵宗任务
            maintain_formation: {
                name: '维护阵法',
                desc: '维护宗门护山大阵',
                duration: 300,
                rewards: { contribution: 12, spiritStone: 60 },
                cost: { spiritualPower: 200 }
            },
            study_array: {
                name: '研习阵道',
                desc: '学习更高深的阵法',
                duration: 600,
                rewards: { contribution: 25, spiritualPower: 1500 },
                cost: { spiritStone: 80 }
            },
            defend_sect: {
                name: '守护宗门',
                desc: '协助防御外敌入侵',
                duration: 420,
                rewards: { contribution: 20, spiritStone: 120, pills: 2 },
                cost: { spiritualPower: 400 }
            },
            
            // ==================== 新增门派任务 ====================
            
            // 佛宗任务
            meditation_practice: {
                name: '禅修悟道',
                desc: '在佛堂中静心禅修，领悟佛法真谛',
                duration: 360, // 6分钟
                rewards: { contribution: 12, spiritualPower: 800, breakthroughProgress: 5 },
                cost: { spiritualPower: 200 }
            },
            save_people: {
                name: '普度众生',
                desc: '下山救助苦难百姓，传播佛法',
                duration: 540, // 9分钟
                rewards: { contribution: 20, spiritStone: 100, pills: 3 },
                cost: { spiritualPower: 300 }
            },
            buddha_teaching: {
                name: '佛法讲经',
                desc: '为弟子们讲解佛法，提升宗门修为',
                duration: 480, // 8分钟
                rewards: { contribution: 18, spiritualPower: 1200 },
                cost: { spiritStone: 60 }
            },
            
            // 道宗任务
            comprehend_tao: {
                name: '悟道参玄',
                desc: '参悟天道，领悟自然法则',
                duration: 420, // 7分钟
                rewards: { contribution: 15, spiritualPower: 1000, allBonus: 0.02 },
                cost: { spiritualPower: 250 }
            },
            alchemy_practice: {
                name: '炼丹修行',
                desc: '炼制道家丹药，辅助修炼',
                duration: 600, // 10分钟
                rewards: { contribution: 22, spiritStone: 120, pills: 4 },
                cost: { spiritStone: 80 }
            },
            talisman_making: {
                name: '制作符箓',
                desc: '制作护身符箓，增强宗门防御',
                duration: 360, // 6分钟
                rewards: { contribution: 14, spiritStone: 80, facilityBonus: 0.05 },
                cost: { spiritualPower: 180 }
            },
            
            // 魔宗任务
            demon_cultivation: {
                name: '魔功修炼',
                desc: '修炼魔道功法，提升修为',
                duration: 480, // 8分钟
                rewards: { contribution: 25, spiritualPower: 1500, breakthroughProgress: 8 },
                cost: { spiritualPower: 400 },
                warning: '⚠️ 修炼魔功会降低正派好感'
            },
            absorb_power: {
                name: '吞噬灵力',
                desc: '吞噬他人灵力，快速提升实力',
                duration: 600, // 10分钟
                rewards: { contribution: 30, spiritualPower: 2000, allBonus: 0.03 },
                cost: { spiritualPower: 500 },
                warning: '⚠️ 吞噬灵力会降低正派好感'
            },
            conquest: {
                name: '征服领地',
                desc: '征服其他势力，扩张魔宗势力',
                duration: 720, // 12分钟
                rewards: { contribution: 35, spiritStone: 200, pills: 5 },
                cost: { spiritualPower: 600 },
                warning: '⚠️ 征服行为会激怒正派势力'
            },
            
            // 邪教任务
            mind_control_practice: {
                name: '心术修炼',
                desc: '修炼邪教心术，控制他人心智',
                duration: 540, // 9分钟
                rewards: { contribution: 28, spiritualPower: 1400, spiritStone: 150 },
                cost: { spiritualPower: 350 },
                warning: '⚠️ 心术修炼会被正派敌视'
            },
            conspiracy: {
                name: '阴谋策划',
                desc: '策划阴谋，削弱敌对势力',
                duration: 660, // 11分钟
                rewards: { contribution: 32, spiritStone: 180, facilityBonus: 0.08 },
                cost: { spiritStone: 100 },
                warning: '⚠️ 阴谋行为会降低正派好感'
            },
            dark_ritual: {
                name: '黑暗仪式',
                desc: '举行邪恶仪式，获得黑暗力量',
                duration: 780, // 13分钟
                rewards: { contribution: 40, spiritualPower: 1800, allBonus: 0.04 },
                cost: { spiritualPower: 500, spiritStone: 120 },
                warning: '⚠️ 黑暗仪式会被所有正派追杀'
            },
            
            // 血煞门任务
            blood_cultivation: {
                name: '血煞修炼',
                desc: '以血为媒，修炼血煞功法',
                duration: 600, // 10分钟
                rewards: { contribution: 35, spiritualPower: 2000, breakthroughProgress: 10 },
                cost: { spiritualPower: 500 },
                warning: '⚠️ 血煞修炼需要杀戮，会被正派追杀'
            },
            slaughter: {
                name: '杀戮试炼',
                desc: '通过杀戮提升血煞修为',
                duration: 720, // 12分钟
                rewards: { contribution: 45, spiritualPower: 2500, allBonus: 0.05 },
                cost: { spiritualPower: 600 },
                warning: '⚠️ 杀戮行为会激怒所有正派'
            },
            blood_ritual: {
                name: '血祭仪式',
                desc: '举行血祭仪式，获得血煞之力',
                duration: 900, // 15分钟
                rewards: { contribution: 50, spiritStone: 300, pills: 8 },
                cost: { spiritualPower: 700, spiritStone: 150 },
                warning: '⚠️ 血祭仪式会被所有正派追杀'
            },
            
            // 商会任务
            trading: {
                name: '商业贸易',
                desc: '进行商业贸易，赚取灵石',
                duration: 360, // 6分钟
                rewards: { contribution: 10, spiritStone: 200, pills: 2 },
                cost: { spiritStone: 50 }
            },
            business_deal: {
                name: '商务谈判',
                desc: '与其他势力进行商务谈判',
                duration: 480, // 8分钟
                rewards: { contribution: 18, spiritStone: 300, facilityBonus: 0.06 },
                cost: { spiritualPower: 200 }
            },
            treasure_hunting: {
                name: '寻宝探险',
                desc: '寻找珍稀宝物，增加商会财富',
                duration: 600, // 10分钟
                rewards: { contribution: 25, spiritStone: 400, pills: 5, spiritualPower: 1000 },
                cost: { spiritualPower: 300, spiritStone: 80 }
            }
        }; */

        // 门派商店物品 - 已移至 config/sects.js
        /* const sectShop = {
            contribution_pill: {
                name: '门派丹药',
                desc: '兑换门派特制丹药',
                cost: { contribution: 50 },
                reward: { pills: 10 }
            },
            contribution_stone: {
                name: '灵石奖励',
                desc: '兑换灵石',
                cost: { contribution: 30 },
                reward: { spiritStone: 200 }
            },
            contribution_technique: {
                name: '门派秘传',
                desc: '学习门派独门功法',
                cost: { contribution: 100 },
                reward: { spiritualPower: 5000, breakthroughProgress: 20 }
            },
            master_teaching: {
                name: '师尊传授',
                desc: '请求师尊指点修炼',
                cost: { contribution: 80 },
                reward: { breakthroughProgress: 30 }
            }
        }; */

        // 随机事件定义 - 已移至 config/events.js
        /* const randomEvents = {
            // 奇遇事件
            mysterious_elder: {
                name: '神秘前辈',
                desc: '你在修炼时遇到一位神秘的前辈，他似乎对你颇有好感...',
                type: 'opportunity',
                minRealm: 0,
                choices: [
                    {
                        text: '恭敬请教修炼之道',
                        result: () => {
                            const gain = Math.floor(gameData.player.spiritualPower * 0.2 + 100);
                            gameData.player.spiritualPower += gain;
                            return `前辈指点了你一些修炼要诀，灵力增加 ${formatNumber(gain)} 点`;
                        }
                    },
                    {
                        text: '请求赐予灵石',
                        result: () => {
                            const gain = 50 + gameData.player.realm * 20;
                            gameData.player.spiritStone += gain;
                            return `前辈欣赏你的坦诚，赠予 ${gain} 块灵石`;
                        }
                    },
                    {
                        text: '婉拒，独自修炼',
                        result: () => {
                            return '前辈赞许地点点头，送你一句：修仙之路，贵在自强';
                        }
                    }
                ]
            },
            
            ancient_ruins: {
                name: '古迹遗址',
                desc: '你发现了一处上古遗址，里面隐约有宝光闪烁...',
                type: 'opportunity',
                minRealm: 1,
                choices: [
                    {
                        text: '深入探索（消耗30%灵力）',
                        canChoose: () => gameData.player.spiritualPower > 100,
                        result: () => {
                            gameData.player.spiritualPower *= 0.7;
                            const stoneGain = 100 + gameData.player.realm * 50;
                            const pillGain = 3 + Math.floor(gameData.player.realm / 2);
                            gameData.player.spiritStone += stoneGain;
                            gameData.player.pills += pillGain;
                            return `你在遗址中找到了 ${stoneGain} 块灵石和 ${pillGain} 枚丹药！`;
                        }
                    },
                    {
                        text: '小心翼翼地收集外围资源',
                        result: () => {
                            const gain = 30 + gameData.player.realm * 10;
                            gameData.player.spiritStone += gain;
                            return `你谨慎地收集了一些资源，获得 ${gain} 块灵石`;
                        }
                    }
                ]
            },
            
            spiritual_beast: {
                name: '灵兽现世',
                desc: '一只灵兽出现在你面前，它似乎受了重伤...',
                type: 'opportunity',
                minRealm: 2,
                choices: [
                    {
                        text: '消耗丹药救治（需要5枚丹药）',
                        canChoose: () => gameData.player.pills >= 5,
                        result: () => {
                            gameData.player.pills -= 5;
                            const stoneGain = 200 + gameData.player.realm * 30;
                            gameData.player.spiritStone += stoneGain;
                            gameData.player.spiritualPower += 500;
                            return `灵兽感激地留下了 ${stoneGain} 块灵石和一些灵力精华（+500灵力）`;
                        }
                    },
                    {
                        text: '无视离开',
                        result: () => {
                            return '你选择不多管闲事';
                        }
                    }
                ]
            },
            
            demon_attack: {
                name: '魔修袭击',
                desc: '一个魔修发现了你的修炼之处，正在靠近...',
                type: 'crisis',
                minRealm: 1,
                choices: [
                    {
                        text: '⚔️ 正面迎战（战斗）',
                        result: () => {
                            // 触发战斗事件
                            gameData.currentEvent = null; // 清除当前事件
                            showDemonBattle();
                            return '你决定与魔修正面一战！';
                        }
                    },
                    {
                        text: '消耗灵力抵抗（损失50%灵力）',
                        result: () => {
                            const loss = Math.floor(gameData.player.spiritualPower * 0.5);
                            gameData.player.spiritualPower *= 0.5;
                            return `经过一番苦战，你击退了魔修，但消耗了 ${formatNumber(loss)} 灵力`;
                        }
                    },
                    {
                        text: '花费灵石请求援助（100灵石）',
                        canChoose: () => gameData.player.spiritStone >= 100,
                        result: () => {
                            gameData.player.spiritStone -= 100;
                            return '附近的修士赶来相助，击退了魔修';
                        }
                    },
                    {
                        text: '破财消灾（损失30%灵石）',
                        result: () => {
                            const loss = Math.floor(gameData.player.spiritStone * 0.3);
                            gameData.player.spiritStone = Math.floor(gameData.player.spiritStone * 0.7);
                            return `你损失了 ${loss} 块灵石，魔修满意地离开了`;
                        }
                    }
                ]
            },
            
            enlightenment: {
                name: '顿悟时刻',
                desc: '修炼中你突然有所感悟，仿佛触摸到了天道的一角...',
                type: 'opportunity',
                minRealm: 0,
                choices: [
                    {
                        text: '静心感悟（需要5枚丹药）',
                        canChoose: () => gameData.player.pills >= 5,
                        result: () => {
                            gameData.player.pills -= 5;
                            const gain = Math.floor(gameData.player.spiritualPower * 0.5);
                            gameData.player.spiritualPower += gain;
                            gameData.player.breakthroughProgress = Math.min(100, gameData.player.breakthroughProgress + 20);
                            return `你进入深层次的顿悟，灵力增加 ${formatNumber(gain)}，突破进度提升20%`;
                        }
                    },
                    {
                        text: '继续修炼',
                        result: () => {
                            const gain = Math.floor(gameData.player.spiritualPower * 0.2);
                            gameData.player.spiritualPower += gain;
                            return `你获得了一些感悟，灵力增加 ${formatNumber(gain)}`;
                        }
                    }
                ]
            },
            
            traveling_merchant: {
                name: '云游商人',
                desc: '一个云游商人经过此地，带来了一些稀奇的货物...',
                type: 'trade',
                minRealm: 0,
                choices: [
                    {
                        text: '购买丹药（80灵石→5丹药）',
                        canChoose: () => gameData.player.spiritStone >= 80,
                        result: () => {
                            gameData.player.spiritStone -= 80;
                            gameData.player.pills += 5;
                            return '你购买了5枚丹药';
                        }
                    },
                    {
                        text: '购买修炼心得（150灵石）',
                        canChoose: () => gameData.player.spiritStone >= 150,
                        result: () => {
                            gameData.player.spiritStone -= 150;
                            const gain = 1000 + gameData.player.realm * 300;
                            gameData.player.spiritualPower += gain;
                            return `你购买了修炼心得，灵力增加 ${formatNumber(gain)}`;
                        }
                    },
                    {
                        text: '不购买',
                        result: () => {
                            return '你婉拒了商人的推销';
                        }
                    }
                ]
            },
            
            secret_realm: {
                name: '秘境开启',
                desc: '附近出现了一处秘境入口，机缘与危险并存...',
                type: 'opportunity',
                minRealm: 2,
                choices: [
                    {
                        text: '进入秘境（消耗40%灵力）',
                        canChoose: () => gameData.player.spiritualPower > 100,
                        result: () => {
                            gameData.player.spiritualPower *= 0.6;
                            const rand = Math.random();
                            if (rand < 0.6) {
                                const stoneGain = 300 + gameData.player.realm * 80;
                                const pillGain = 5 + Math.floor(gameData.player.realm / 2);
                                gameData.player.spiritStone += stoneGain;
                                gameData.player.pills += pillGain;
                                return `你获得了丰厚的收获：${stoneGain}灵石和${pillGain}枚丹药`;
                            } else if (rand < 0.9) {
                                const gain = Math.floor(gameData.player.spiritualPower * 0.8);
                                gameData.player.spiritualPower += gain;
                                return `你在秘境中感悟良多，灵力增加 ${formatNumber(gain)}`;
                            } else {
                                gameData.player.breakthroughProgress = 100;
                                return '⚡ 你在秘境中得到传承，突破进度直接达到100%！';
                            }
                        }
                    },
                    {
                        text: '谨慎观察',
                        result: () => {
                            const gain = 50 + gameData.player.realm * 20;
                            gameData.player.spiritStone += gain;
                            return `你在外围找到了一些资源，获得${gain}灵石`;
                        }
                    }
                ]
            },
            
            heaven_material: {
                name: '天材地宝',
                desc: '你发现了一株罕见的灵药，散发着浓郁的灵气...',
                type: 'opportunity',
                minRealm: 0,
                choices: [
                    {
                        text: '立即服用',
                        result: () => {
                            const gain = 200 + gameData.player.realm * 100;
                            gameData.player.spiritualPower += gain;
                            return `灵药入体，灵力大增 +${formatNumber(gain)}`;
                        }
                    },
                    {
                        text: '收藏起来（换取灵石）',
                        result: () => {
                            const gain = 100 + gameData.player.realm * 50;
                            gameData.player.spiritStone += gain;
                            return `你将灵药卖给了商人，获得 ${gain} 块灵石`;
                        }
                    }
                ]
            },
            
            fellow_cultivator: {
                name: '同道中人',
                desc: '你遇到了一位同境界的修士，他提出切磋交流...',
                type: 'opportunity',
                minRealm: 1,
                choices: [
                    {
                        text: '友好切磋',
                        result: () => {
                            const gain = Math.floor(gameData.player.spiritualPower * 0.3);
                            gameData.player.spiritualPower += gain;
                            gameData.player.breakthroughProgress = Math.min(100, gameData.player.breakthroughProgress + 10);
                            return `切磋收获颇丰，灵力+${formatNumber(gain)}，突破进度+10%`;
                        }
                    },
                    {
                        text: '婉拒离开',
                        result: () => {
                            return '你婉拒了对方的邀请';
                        }
                    }
                ]
            },
            
            treasure_competition: {
                name: '争夺宝物',
                desc: '一件宝物出世，多人争夺，你是否参与？',
                type: 'crisis',
                minRealm: 2,
                choices: [
                    {
                        text: '⚔️ 参与争夺（PvP战斗）',
                        result: () => {
                            // 触发PvP战斗事件
                            gameData.currentEvent = null; // 清除当前事件
                            showTreasureBattle();
                            return '你决定参与宝物争夺战！';
                        }
                    },
                    {
                        text: '奋力争夺（消耗60%灵力）',
                        canChoose: () => gameData.player.spiritualPower > 200,
                        result: () => {
                            gameData.player.spiritualPower *= 0.4;
                            if (Math.random() < 0.4) {
                                const gain = 500 + gameData.player.realm * 150;
                                gameData.player.spiritStone += gain;
                                return `⭐ 你成功夺得宝物，获得 ${gain} 块灵石！`;
                            } else {
                                return '激烈争夺中你未能取胜，但平安离开';
                            }
                        }
                    },
                    {
                        text: '旁观不参与',
                        result: () => {
                            return '你选择明哲保身，不参与争夺';
                        }
                    }
                ]
            },
            
            cultivation_insight: {
                name: '修炼感悟',
                desc: '静坐修炼时，你突然有所领悟...',
                type: 'opportunity',
                minRealm: 0,
                choices: [
                    {
                        text: '深入感悟',
                        result: () => {
                            gameData.player.breakthroughProgress = Math.min(100, gameData.player.breakthroughProgress + 15);
                            return '你陷入深度感悟，突破进度+15%';
                        }
                    },
                    {
                        text: '继续正常修炼',
                        result: () => {
                            const gain = 100 + gameData.player.realm * 50;
                            gameData.player.spiritualPower += gain;
                            return `你继续修炼，灵力+${formatNumber(gain)}`;
                        }
                    }
                ]
            },
            
            strange_fog: {
                name: '诡异迷雾',
                desc: '一团迷雾笼罩了你的修炼之地，其中似有异常...',
                type: 'crisis',
                minRealm: 1,
                choices: [
                    {
                        text: '进入探查',
                        result: () => {
                            if (Math.random() < 0.5) {
                                const gain = 200 + gameData.player.realm * 80;
                                gameData.player.spiritStone += gain;
                                return `迷雾中你发现了隐藏的宝藏，获得 ${gain} 灵石`;
                            } else {
                                const loss = Math.floor(gameData.player.spiritualPower * 0.3);
                                gameData.player.spiritualPower *= 0.7;
                                return `迷雾中有诡异力量，损失了 ${formatNumber(loss)} 灵力`;
                            }
                        }
                    },
                    {
                        text: '离开此地',
                        result: () => {
                            return '你谨慎地避开了迷雾区域';
                        }
                    }
                ]
            },
            
            inner_demon: {
                name: '心魔劫',
                desc: '修炼中心魔出现，考验你的道心...',
                type: 'crisis',
                minRealm: 3,
                choices: [
                    {
                        text: '消耗丹药压制（需要10枚丹药）',
                        canChoose: () => gameData.player.pills >= 10,
                        result: () => {
                            gameData.player.pills -= 10;
                            gameData.player.breakthroughProgress = Math.min(100, gameData.player.breakthroughProgress + 25);
                            return '你成功克服心魔，道心更加坚定，突破进度+25%！';
                        }
                    },
                    {
                        text: '凭意志抵抗',
                        result: () => {
                            if (Math.random() < 0.6) {
                                gameData.player.breakthroughProgress = Math.min(100, gameData.player.breakthroughProgress + 15);
                                return '你凭借坚定意志战胜了心魔，突破进度+15%';
                            } else {
                                const loss = Math.floor(gameData.player.spiritualPower * 0.4);
                                gameData.player.spiritualPower *= 0.6;
                                gameData.player.breakthroughProgress = Math.max(0, gameData.player.breakthroughProgress - 10);
                                return `心魔难以抵挡，灵力-${formatNumber(loss)}，突破进度-10%`;
                            }
                        }
                    }
                ]
            },
            
            immortal_scripture: {
                name: '仙经残卷',
                desc: '你偶然得到一卷残缺的仙经...',
                type: 'opportunity',
                minRealm: 4,
                choices: [
                    {
                        text: '潜心研读（消耗200灵石）',
                        canChoose: () => gameData.player.spiritStone >= 200,
                        result: () => {
                            gameData.player.spiritStone -= 200;
                            const gain = Math.floor(gameData.player.spiritualPower * 0.5);
                            gameData.player.spiritualPower += gain;
                            gameData.player.breakthroughProgress = 100;
                            return `你参透仙经奥义！灵力+${formatNumber(gain)}，突破进度直接达到100%！`;
                        }
                    },
                    {
                        text: '卖给藏经阁',
                        result: () => {
                            const gain = 300 + gameData.player.realm * 100;
                            gameData.player.spiritStone += gain;
                            return `藏经阁高价收购，获得 ${gain} 灵石`;
                        }
                    }
                ]
            },
            
            artifact_discovery: {
                name: '法宝现世',
                desc: '你发现了一件法宝，似乎与你有缘...',
                type: 'opportunity',
                minRealm: 1,
                choices: [
                    {
                        text: '炼化法宝（消耗500灵石）',
                        canChoose: () => gameData.player.spiritStone >= 500,
                        result: () => {
                            gameData.player.spiritStone -= 500;
                            // 随机获得一个符合境界的法宝
                            const availableArtifacts = Object.keys(artifacts).filter(id => 
                                artifacts[id].requiredRealm <= gameData.player.realm &&
                                !gameData.artifacts.includes(id)
                            );
                            if (availableArtifacts.length > 0) {
                                const artifactId = availableArtifacts[Math.floor(Math.random() * availableArtifacts.length)];
                                gameData.artifacts.push(artifactId);
                                return `⚔️ 你成功炼化了 ${artifacts[artifactId].name}！`;
                            } else {
                                gameData.player.spiritualPower += 1000;
                                return '法宝与你无缘，但获得了1000灵力';
                            }
                        }
                    },
                    {
                        text: '放弃',
                        result: () => {
                            return '你选择离开';
                        }
                    }
                ]
            },
            
            // === 飞升专属事件 ===
            immortal_meeting: {
                name: '🌟 仙人相会',
                desc: '你遇到了一位真正的仙人，他来自仙界...',
                type: 'opportunity',
                minRealm: 0,
                minAscension: 1,
                choices: [
                    {
                        text: '请教仙道',
                        result: () => {
                            const gain = Math.floor(gameData.player.spiritualPower * (0.5 + gameData.ascensionCount * 0.1));
                            gameData.player.spiritualPower += gain;
                            gameData.player.breakthroughProgress = 100;
                            return `仙人传授了仙界修炼之法！灵力+${formatNumber(gain)}，突破进度100%`;
                        }
                    },
                    {
                        text: '离开',
                        result: () => {
                            const gain = 500 + gameData.ascensionCount * 200;
                            gameData.player.spiritStone += gain;
                            return `仙人赠予你${gain}块仙石作为缘分`;
                        }
                    }
                ]
            },
            
            celestial_fragment: {
                name: '🌟 仙界碎片',
                desc: '仙界与凡界的空间裂缝出现，可以获取仙界资源...',
                type: 'opportunity',
                minRealm: 2,
                minAscension: 2,
                choices: [
                    {
                        text: '进入仙界碎片（消耗1000灵力）',
                        canChoose: () => gameData.player.spiritualPower >= 1000,
                        result: () => {
                            gameData.player.spiritualPower -= 1000;
                            const stoneGain = 1000 + gameData.ascensionCount * 300;
                            const pillGain = 10 + gameData.ascensionCount * 3;
                            gameData.player.spiritStone += stoneGain;
                            gameData.player.pills += pillGain;
                            return `${getSvg('zap')} 仙界碎片中获得：${stoneGain}灵石，${pillGain}丹药！`;
                        }
                    },
                    {
                        text: '观望',
                        result: () => {
                            const gain = 300 + gameData.ascensionCount * 100;
                            gameData.player.spiritStone += gain;
                            return `你获得了一些散落的仙界灵气，转化为${gain}灵石`;
                        }
                    }
                ]
            },
            
            past_life_memory: {
                name: '🌟 前世记忆',
                desc: '飞升后的你偶尔会回忆起前世的修炼经历...',
                type: 'opportunity',
                minRealm: 0,
                minAscension: 1,
                choices: [
                    {
                        text: '沉浸于回忆',
                        result: () => {
                            const multiplier = 1 + gameData.ascensionCount * 0.3;
                            const gain = Math.floor(gameData.player.spiritualPower * multiplier);
                            gameData.player.spiritualPower += gain;
                            return `前世经验让你修炼速度暴增！灵力+${formatNumber(gain)}`;
                        }
                    },
                    {
                        text: '继续修炼',
                        result: () => {
                            const gain = 1000 * gameData.ascensionCount;
                            gameData.player.spiritualPower += gain;
                            return `你从记忆中获得一些感悟，灵力+${formatNumber(gain)}`;
                        }
                    }
                ]
            },
            
            // 灵宠相关事件
            pet_encounter: {
                name: '🐾 灵宠相遇',
                desc: '一只灵兽幼崽出现在你面前，它似乎很喜欢你...',
                type: 'opportunity',
                minRealm: 1,
                choices: [
                    {
                        text: '收为灵宠（消耗300灵石）',
                        canChoose: () => gameData.player.spiritStone >= 300,
                        result: () => {
                            gameData.player.spiritStone -= 300;
                            // 随机获得符合境界的灵宠
                            const availablePets = Object.keys(pets).filter(id => {
                                const pet = pets[id];
                                const realmOk = !pet.requiredRealm || pet.requiredRealm <= gameData.player.realm;
                                const ascensionOk = !pet.requiredAscension || pet.requiredAscension <= gameData.ascensionCount;
                                return realmOk && ascensionOk && !gameData.pets.includes(id);
                            });
                            
                            if (availablePets.length > 0) {
                                const petId = availablePets[Math.floor(Math.random() * availablePets.length)];
                                gameData.pets.push(petId);
                                return `🐾 恭喜！你收获了灵宠：${pets[petId].name}（${pets[petId].rarity}）`;
                            } else {
                                gameData.player.spiritStone += 300;
                                gameData.player.spiritualPower += 500;
                                return '灵兽与你无缘，但你获得了500灵力作为补偿（灵石已返还）';
                            }
                        }
                    },
                    {
                        text: '放它离开',
                        result: () => {
                            const gain = 100 + gameData.player.realm * 30;
                            gameData.player.spiritStone += gain;
                            return `灵兽感激你的善意，留下了${gain}块灵石`;
                        }
                    }
                ]
            },
            
            // ==================== 仙界专属事件 ====================
            immortal_dao_comprehension: {
                name: '🌟 仙道顿悟',
                desc: '在仙界修炼，你突然领悟了仙道真谛...',
                type: 'opportunity',
                minRealm: 0,
                requireImmortalWorld: true,
                choices: [
                    {
                        text: '深入参悟（消耗50仙石）',
                        canChoose: () => (gameData.player.immortalStone || 0) >= 50,
                        result: () => {
                            gameData.player.immortalStone -= 50;
                            const gain = Math.floor(gameData.player.spiritualPower * 2);
                            gameData.player.spiritualPower += gain;
                            gameData.player.breakthroughProgress = 100;
                            return `${getSvg('zap')} 仙道顿悟！灵力暴增+${formatNumber(gain)}，突破进度直达100%！`;
                        }
                    },
                    {
                        text: '继续修炼',
                        result: () => {
                            const gain = Math.floor(gameData.player.spiritualPower * 0.5);
                            gameData.player.spiritualPower += gain;
                            return `获得一些感悟，灵力+${formatNumber(gain)}`;
                        }
                    }
                ]
            },
            
            immortal_treasure: {
                name: '🌟 仙界宝库',
                desc: '你发现了一座隐藏的仙界宝库...',
                type: 'opportunity',
                minRealm: 0,
                requireImmortalWorld: true,
                choices: [
                    {
                        text: '全力探索（消耗30%灵力）',
                        canChoose: () => gameData.player.spiritualPower > 1000,
                        result: () => {
                            gameData.player.spiritualPower *= 0.7;
                            const stoneGain = 5000 + gameData.player.immortalRealm * 2000;
                            const immortalStoneGain = 50 + gameData.player.immortalRealm * 20;
                            const daoFruitGain = 3 + Math.floor(gameData.player.immortalRealm / 2);
                            gameData.player.spiritStone += stoneGain;
                            gameData.player.immortalStone = (gameData.player.immortalStone || 0) + immortalStoneGain;
                            gameData.player.daoFruit = (gameData.player.daoFruit || 0) + daoFruitGain;
                            return `${getSvg('zap')} 仙宝无数！获得${stoneGain}灵石、${immortalStoneGain}仙石、${daoFruitGain}道果！`;
                        }
                    },
                    {
                        text: '小心翼翼地收集',
                        result: () => {
                            const gain = 2000 + gameData.player.immortalRealm * 500;
                            gameData.player.spiritStone += gain;
                            return `谨慎收集，获得${gain}灵石`;
                        }
                    },
                    {
                        text: '离开',
                        result: () => {
                            return '你选择不冒险';
                        }
                    }
                ]
            },
            
            immortal_challenge: {
                name: '🌟 仙人挑战',
                desc: '一位仙人向你发起挑战，这是证明自己的机会...',
                type: 'opportunity',
                minRealm: 0,
                requireImmortalWorld: true,
                choices: [
                    {
                        text: '接受挑战（消耗5000灵力）',
                        canChoose: () => gameData.player.spiritualPower >= 5000,
                        result: () => {
                            gameData.player.spiritualPower -= 5000;
                            const powerLevel = calculateCombatPower();
                            if (Math.random() < 0.6) {
                                const stoneGain = 10000 + gameData.player.immortalRealm * 3000;
                                const immortalStoneGain = 100 + gameData.player.immortalRealm * 30;
                                gameData.player.spiritStone += stoneGain;
                                gameData.player.immortalStone = (gameData.player.immortalStone || 0) + immortalStoneGain;
                                gameData.player.breakthroughProgress = Math.min(100, gameData.player.breakthroughProgress + 50);
                                return `⚔️ 挑战成功！获得${stoneGain}灵石、${immortalStoneGain}仙石，突破进度+50%！`;
                            } else {
                                return '挑战失败，但你获得了宝贵的经验...';
                            }
                        }
                    },
                    {
                        text: '婉拒挑战',
                        result: () => {
                            const gain = 1000;
                            gameData.player.spiritStone += gain;
                            return `仙人赞赏你的谦逊，赠予${gain}灵石`;
                        }
                    }
                ]
            },
            
            // 五行相关事件
            element_trial: {
                name: '🔥 五行试炼',
                desc: '你遇到了五行试炼之地，可以提升属性强度...',
                type: 'opportunity',
                minRealm: 2,
                choices: [
                    {
                        text: '参加试炼（消耗20仙石）',
                        canChoose: () => (gameData.player.immortalStone || 0) >= 20 && gameData.player.element !== 'none',
                        result: () => {
                            if (gameData.player.element === 'none') {
                                return '你尚未觉醒五行属性，无法参加试炼';
                            }
                            gameData.player.immortalStone -= 20;
                            gameData.player.elementPower = (gameData.player.elementPower || 1) + 1;
                            const element = elementsData[gameData.player.element];
                            return `${getSvg('zap')} 试炼成功！${element.name}属性强度提升至Lv.${gameData.player.elementPower}！`;
                        }
                    },
                    {
                        text: '放弃',
                        result: () => {
                            return '你选择离开试炼之地';
                        }
                    }
                ]
            },
            
            dao_fruit_tree: {
                name: '🌳 道果神树',
                desc: '你发现了一棵结满道果的神树...',
                type: 'opportunity',
                minRealm: 4,
                choices: [
                    {
                        text: '虔诚祈祷',
                        result: () => {
                            const fruitGain = 1 + Math.floor(Math.random() * 3);
                            gameData.player.daoFruit = (gameData.player.daoFruit || 0) + fruitGain;
                            return `神树感应到你的诚心，赐予${fruitGain}枚道果！`;
                        }
                    },
                    {
                        text: '强行采摘（消耗1000灵力）',
                        canChoose: () => gameData.player.spiritualPower >= 1000,
                        result: () => {
                            gameData.player.spiritualPower -= 1000;
                            if (Math.random() < 0.7) {
                                const fruitGain = 3 + Math.floor(Math.random() * 4);
                                gameData.player.daoFruit = (gameData.player.daoFruit || 0) + fruitGain;
                                return `强行采摘成功！获得${fruitGain}枚道果`;
                            } else {
                                gameData.player.spiritualPower *= 0.5;
                                return '神树反噬！损失了大量灵力...';
                            }
                        }
                    },
                    {
                        text: '离开',
                        result: () => {
                            const stoneGain = 500;
                            gameData.player.spiritStone += stoneGain;
                            return `你拾取了一些掉落的灵石：${stoneGain}`;
                        }
                    }
                ]
            }
        }; */

        // Boss定义（平衡后的奖励）
        const bossesData = {
            demon_lord: {
                name: '魔君',
                desc: '作恶多端的魔道强者',
                requiredRealm: 2,
                power: 500,
                rewards: {
                    spiritStone: 2000, // 提高奖励
                    pills: 30,
                    immortalStone: 8,
                    experience: 10000
                },
                loot: ['demon_blade', 'dark_armor']
            },
            ancient_dragon: {
                name: '上古真龙',
                desc: '沉睡千年的神龙',
                requiredRealm: 4,
                power: 2000,
                rewards: {
                    spiritStone: 10000, // 提高奖励
                    pills: 80,
                    immortalStone: 30,
                    daoFruit: 2, // 提高道果
                    experience: 40000
                },
                loot: ['dragon_scale', 'dragon_soul']
            },
            heaven_guardian: {
                name: '天界守护者',
                desc: '守护天门的强大存在',
                requiredRealm: 6,
                power: 8000,
                rewards: {
                    spiritStone: 40000, // 提高奖励
                    pills: 150,
                    immortalStone: 80,
                    daoFruit: 5, // 提高道果
                    heavenlyEssence: 15,
                    experience: 100000
                },
                loot: ['heaven_blade', 'guardian_armor', 'celestial_ring']
            },
            chaos_emperor: {
                name: '混沌帝君',
                desc: '远古混沌时期的至尊',
                requiredRealm: 8,
                power: 30000,
                rewards: {
                    spiritStone: 200000, // 提高奖励
                    pills: 500,
                    immortalStone: 300,
                    daoFruit: 15, // 提高道果
                    heavenlyEssence: 80,
                    experience: 500000
                },
                loot: ['chaos_sword', 'emperor_robe', 'chaos_orb']
            }
        };

        // 副本定义（平衡后的奖励）
        const dungeonsData = {
            spirit_forest: {
                name: '灵兽森林',
                desc: '聚集着大量灵兽的神秘森林',
                requiredRealm: 1,
                difficulty: 1,
                energyCost: 10,
                rewards: {
                    spiritStone: 400, // 提高奖励
                    pills: 8,
                    experience: 2000
                },
                waves: 3
            },
            demon_cave: {
                name: '魔窟',
                desc: '魔修聚集之地',
                requiredRealm: 2,
                difficulty: 2,
                energyCost: 20,
                rewards: {
                    spiritStone: 1000, // 提高奖励
                    pills: 15,
                    immortalStone: 3,
                    experience: 6000
                },
                waves: 5
            },
            ancient_ruins: {
                name: '上古遗迹',
                desc: '充满危险与机遇的上古遗迹',
                requiredRealm: 4,
                difficulty: 3,
                energyCost: 30,
                rewards: {
                    spiritStone: 4000, // 提高奖励
                    pills: 40,
                    immortalStone: 15,
                    daoFruit: 2, // 提高道果
                    experience: 20000
                },
                waves: 7
            },
            heaven_trial: {
                name: '天道试炼',
                desc: '考验修士的天道试炼场',
                requiredRealm: 6,
                difficulty: 4,
                energyCost: 50,
                rewards: {
                    spiritStone: 20000, // 提高奖励
                    pills: 100,
                    immortalStone: 50,
                    daoFruit: 5, // 提高道果
                    heavenlyEssence: 10,
                    experience: 60000
                },
                waves: 10
            }
        };

        // 天赋定义
        const talentsData = {
            spiritual_body: {
                name: '灵体',
                desc: '天生灵体，修炼速度+30%',
                cost: 1,
                bonus: { spiritualPowerBonus: 0.3 }
            },
            iron_will: {
                name: '铁心',
                desc: '意志坚定，突破成功率+15%',
                cost: 1,
                bonus: { breakthroughBonus: 0.15 }
            },
            lucky_star: {
                name: '幸运星',
                desc: '运气极佳，资源获取+25%',
                cost: 1,
                bonus: { spiritStoneBonus: 0.25 }
            },
            alchemy_genius: {
                name: '炼丹奇才',
                desc: '炼丹效率+50%，丹药效果+30%',
                cost: 2,
                bonus: { pillEfficiency: 0.5, pillPower: 0.3 }
            },
            combat_master: {
                name: '战斗大师',
                desc: '战斗力+40%',
                cost: 2,
                bonus: { combatPowerBonus: 0.4 }
            },
            sect_favorite: {
                name: '宗门宠儿',
                desc: '门派贡献度获取+50%',
                cost: 1,
                bonus: { contributionBonus: 0.5 }
            },
            enlightened: {
                name: '悟性超凡',
                desc: '功法修炼效率+40%',
                cost: 2,
                bonus: { techniqueBonus: 0.4 }
            },
            five_elements: {
                name: '五行之体',
                desc: '掌握五行之力，全属性+20%',
                cost: 3,
                bonus: { allBonus: 0.2, elementMastery: true }
            },
            forging_master: {
                name: '炼器大师',
                desc: '炼制成功率+10%',
                cost: 2,
                bonus: { forgingBonus: 0.1 }
            },
            immortal_root: {
                name: '仙根',
                desc: '传说中的仙人资质，全属性+50%',
                cost: 5,
                bonus: { allBonus: 0.5 }
            }
        };

        // 法宝图纸系统
        const artifactBlueprints = {
            // 基础图纸（初始拥有）
            spirit_sword: {
                name: '灵剑图纸',
                desc: '记载灵剑炼制方法的古老图纸',
                rarity: 'common',
                source: 'initial',
                requiredRealm: 1
            },
            protective_armor: {
                name: '护体法衣图纸',
                desc: '护体法衣的制作方法',
                rarity: 'common',
                source: 'initial',
                requiredRealm: 1
            },
            spirit_ring: {
                name: '灵戒图纸',
                desc: '灵戒的炼制秘法',
                rarity: 'common',
                source: 'quest',
                requiredRealm: 2
            },
            
            // 中级图纸
            dragon_blade: {
                name: '龙刃图纸',
                desc: '传说中的龙刃炼制图纸',
                rarity: 'uncommon',
                source: 'dungeon',
                requiredRealm: 4,
                dungeon: 'dragon_cave'
            },
            dragon_scale_armor: {
                name: '龙鳞甲图纸',
                desc: '龙鳞甲的锻造方法',
                rarity: 'uncommon',
                source: 'dungeon',
                requiredRealm: 5,
                dungeon: 'dragon_cave'
            },
            dragon_necklace: {
                name: '龙珠项链图纸',
                desc: '龙珠项链的制作工艺',
                rarity: 'uncommon',
                source: 'npc_trade',
                requiredRealm: 4,
                npc: 'dragon_master'
            },
            
            // 高级图纸
            phoenix_staff: {
                name: '凤羽法杖图纸',
                desc: '凤凰法杖的炼制秘典',
                rarity: 'rare',
                source: 'event',
                requiredRealm: 5,
                event: 'phoenix_encounter'
            },
            phoenix_robe: {
                name: '凤羽袍图纸',
                desc: '凤羽法袍的制作方法',
                rarity: 'rare',
                source: 'boss_drop',
                requiredRealm: 6,
                boss: 'phoenix_king'
            },
            phoenix_bracelet: {
                name: '凤羽手镯图纸',
                desc: '凤羽手镯的炼制工艺',
                rarity: 'rare',
                source: 'sect_reward',
                requiredRealm: 5,
                sect: 'phoenix_sect'
            },
            
            // 顶级图纸
            void_saber: {
                name: '虚空刀图纸',
                desc: '虚空之力的神兵图纸',
                rarity: 'epic',
                source: 'boss_drop',
                requiredRealm: 6,
                boss: 'void_lord'
            },
            void_cloak: {
                name: '虚空斗篷图纸',
                desc: '虚空斗篷的制作秘法',
                rarity: 'epic',
                source: 'dungeon',
                requiredRealm: 7,
                dungeon: 'void_realm'
            },
            void_ring: {
                name: '虚空戒图纸',
                desc: '虚空戒的炼制图纸',
                rarity: 'epic',
                source: 'achievement',
                requiredRealm: 6,
                achievement: 'void_master'
            },
            
            // 传说图纸
            chaos_hammer: {
                name: '混沌锤图纸',
                desc: '混沌之力的终极图纸',
                rarity: 'legendary',
                source: 'boss_drop',
                requiredRealm: 7,
                boss: 'chaos_emperor'
            },
            chaos_amulet: {
                name: '混沌护符图纸',
                desc: '混沌护符的制作秘典',
                rarity: 'legendary',
                source: 'event',
                requiredRealm: 7,
                event: 'chaos_ritual'
            },
            
            // 特殊图纸
            alchemy_cauldron: {
                name: '炼丹炉图纸',
                desc: '高级炼丹炉的制作方法',
                rarity: 'uncommon',
                source: 'npc_trade',
                requiredRealm: 3,
                npc: 'alchemy_master'
            },
            formation_disk: {
                name: '阵盘图纸',
                desc: '阵盘的制作工艺',
                rarity: 'rare',
                source: 'sect_reward',
                requiredRealm: 4,
                sect: 'formation_sect'
            },
            spirit_talisman: {
                name: '灵符图纸',
                desc: '灵符的制作方法',
                rarity: 'common',
                source: 'quest',
                requiredRealm: 3
            }
        };

        // 炼制技能系统
        const forgingSkills = {
            basic_forging: {
                name: '基础炼器',
                desc: '提升基础法宝炼制成功率',
                maxLevel: 10,
                bonusPerLevel: 0.05, // 每级+5%成功率
                requiredRealm: 1
            },
            advanced_forging: {
                name: '高级炼器',
                desc: '提升中级法宝炼制成功率',
                maxLevel: 10,
                bonusPerLevel: 0.04, // 每级+4%成功率
                requiredRealm: 3
            },
            master_forging: {
                name: '大师炼器',
                desc: '提升高级法宝炼制成功率',
                maxLevel: 10,
                bonusPerLevel: 0.03, // 每级+3%成功率
                requiredRealm: 5
            },
            legendary_forging: {
                name: '传说炼器',
                desc: '提升传说法宝炼制成功率',
                maxLevel: 10,
                bonusPerLevel: 0.02, // 每级+2%成功率
                requiredRealm: 7
            }
        };

        // 炼器材料定义
        const craftingMaterials = {
            // 基础材料
            iron_ore: { name: '铁矿石', desc: '普通的铁矿', rarity: 'common' },
            cloth: { name: '布料', desc: '普通的布料', rarity: 'common' },
            spirit_crystal: { name: '灵晶', desc: '蕴含灵气的晶石', rarity: 'common' },
            
            // 中级材料
            spirit_ore: { name: '灵矿', desc: '蕴含灵气的矿石', rarity: 'uncommon' },
            demon_core: { name: '妖丹', desc: '妖兽的内丹', rarity: 'uncommon' },
            dragon_scale: { name: '龙鳞', desc: '真龙的鳞片', rarity: 'rare' },
            
            // 高级材料
            phoenix_feather: { name: '凤羽', desc: '凤凰的羽毛', rarity: 'rare' },
            heaven_metal: { name: '天外神铁', desc: '天界的珍贵材料', rarity: 'epic' },
            
            // 传说材料
            chaos_crystal: { name: '混沌晶石', desc: '混沌中诞生的至宝', rarity: 'legendary' }
        };

        // 炼器配方定义
        const craftingRecipes = {
            iron_sword: {
                name: '铁剑',
                desc: '普通的铁剑',
                type: 'weapon',
                requiredRealm: 0,
                materials: { iron_ore: 10 },
                time: 300, // 5分钟
                bonus: { combatPower: 50 }
            },
            spirit_sword: {
                name: '灵剑',
                desc: '蕴含灵气的宝剑',
                type: 'weapon',
                requiredRealm: 2,
                materials: { spirit_ore: 20, demon_core: 5 },
                time: 600,
                bonus: { combatPower: 200, spiritualPowerBonus: 0.15 }
            },
            dragon_blade: {
                name: '龙刃',
                desc: '用龙鳞锻造的神兵',
                type: 'weapon',
                requiredRealm: 4,
                materials: { dragon_scale: 10, spirit_ore: 50 },
                time: 1800,
                bonus: { combatPower: 800, spiritualPowerBonus: 0.3, element: 'fire' }
            },
            heaven_sword: {
                name: '天剑',
                desc: '天界神兵',
                type: 'weapon',
                requiredRealm: 6,
                materials: { heaven_metal: 5, phoenix_feather: 3, dragon_scale: 20 },
                time: 3600,
                bonus: { combatPower: 2000, spiritualPowerBonus: 0.5, allBonus: 0.2 }
            }
        };

        // 五行属性系统
        const elementsData = {
            fire: {
                name: '火',
                color: '#e74c3c',
                desc: '烈焰焚天，攻击力强',
                counters: 'metal', // 克制金
                counteredBy: 'water', // 被水克制
                bonus: { combatPowerBonus: 0.2, spiritualPowerBonus: 0.1 }
            },
            water: {
                name: '水',
                color: '#3498db',
                desc: '上善若水，防御力高',
                counters: 'fire',
                counteredBy: 'earth',
                bonus: { breakthroughBonus: 0.15, spiritStoneBonus: 0.15 }
            },
            wood: {
                name: '木',
                color: '#27ae60',
                desc: '生生不息，恢复力强',
                counters: 'earth',
                counteredBy: 'metal',
                bonus: { spiritualPowerBonus: 0.25, pillBonus: 0.2 }
            },
            metal: {
                name: '金',
                color: '#f39c12',
                desc: '金石为开，破坏力强',
                counters: 'wood',
                counteredBy: 'fire',
                bonus: { combatPowerBonus: 0.25, breakthroughBonus: 0.1 }
            },
            earth: {
                name: '土',
                color: '#95a5a6',
                desc: '厚德载物，根基稳固',
                counters: 'water',
                counteredBy: 'wood',
                bonus: { breakthroughBonus: 0.2, facilityBonus: 0.15 }
            }
        };

        // 仙界境界定义（飞升后） - 已移至 config/realms.js
        /* const immortalRealms = [
            {
                name: '地仙',
                maxLevel: 9,
                spiritRequired: 50000000,
                multiplier: 512,
                story: '飞升成功！你踏入仙界，成为地仙。凡界的一切都已远去，新的修炼之路在脚下延展...'
            },
            {
                name: '天仙',
                maxLevel: 9,
                spiritRequired: 200000000,
                multiplier: 1024,
                story: '突破至天仙，掌控天地法则。仙界诸多秘境向你敞开...'
            },
            {
                name: '真仙',
                maxLevel: 9,
                spiritRequired: 1000000000,
                multiplier: 2048,
                story: '真仙之境，已脱离生死轮回。不朽的道路在前方...'
            },
            {
                name: '金仙',
                maxLevel: 9,
                spiritRequired: 10000000000,
                multiplier: 4096,
                story: '证得金仙果位，寿与天齐。仙界亿万年，不过弹指一挥间...'
            },
            {
                name: '大罗金仙',
                maxLevel: 9,
                spiritRequired: 100000000000,
                multiplier: 8192,
                story: '大罗金仙，超脱时空，不在五行之中。你已站在仙道巅峰...'
            }
        ]; */

        // NPC修士定义
        const npcsData = {
            wandering_merchant: {
                name: '游商',
                desc: '云游四方的商人',
                trades: [
                    { offer: { spiritStone: 100 }, request: { pills: 3 } },
                    { offer: { pills: 5 }, request: { spiritStone: 200 } },
                    { offer: { immortalStone: 1 }, request: { spiritStone: 1000 } }
                ]
            },
            senior_cultivator: {
                name: '前辈修士',
                desc: '修为高深的前辈',
                requiredRealm: 2,
                trades: [
                    { offer: { spiritualPower: 5000 }, request: { spiritStone: 500 } },
                    { offer: { breakthroughProgress: 30 }, request: { immortalStone: 5 } }
                ]
            },
            treasure_hunter: {
                name: '寻宝者',
                desc: '专门寻找奇珍异宝的修士',
                requiredRealm: 3,
                trades: [
                    { offer: { daoFruit: 1 }, request: { spiritStone: 5000, pills: 50 } },
                    { offer: { heavenlyEssence: 3 }, request: { immortalStone: 20 } }
                ]
            }
        };

        // 初始化游戏
        function init() {
            loadGame();
            
            // 初始化NPC数据
            if (typeof initializeNPCData === 'function') {
                initializeNPCData();
            }
            
            // 🆕 v3.1: 检查离线收益
            if (typeof checkOfflineReward === 'function') {
                checkOfflineReward();
            }
            
            // 检查是否需要显示门派选择（如果玩家达到筑基期但未选择门派）
            if (gameData.player.realm >= 1 && !gameData.sect) {
                setTimeout(() => {
                    showSectSelection();
                }, 1000);
            }
            
            updateUI();
            updateAutoModeUI();
            startGameLoop();
            // 渲染所有标签页内容
            renderFacilities();
            renderCultivation();
            renderEquipment();
            renderAlchemy();
            renderSectContent();
            renderCombatContent();
            renderTalentsContent();
            renderAchievements();
            renderSaveContent();
            // 新增渲染函数
            renderSpiritFieldInfo();
            renderCombatSkills();
            renderImmortalTab();
            addLog('开始修仙之路...');
            
            // 初始化快捷键
            initKeyboardShortcuts();
            
            // 应用主题
            applyTheme();
            
            // 创建粒子容器
            createParticleContainer();
        }

        // 初始化快捷键系统
        function initKeyboardShortcuts() {
            document.addEventListener('keydown', (e) => {
                // 忽略在输入框中的按键
                if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                    return;
                }
                
                const key = e.key.toLowerCase();
                
                // Space - 修炼
                if (key === ' ') {
                    e.preventDefault();
                    cultivate();
                }
                // B - 突破
                else if (key === 'b') {
                    e.preventDefault();
                    breakthrough();
                }
                // P - 使用丹药
                else if (key === 'p') {
                    e.preventDefault();
                    usePill();
                }
                // A - 切换自动模式
                else if (key === 'a') {
                    e.preventDefault();
                    toggleAutoMode();
                }
                // S - 手动保存
                else if (key === 's' && e.ctrlKey) {
                    e.preventDefault();
                    saveGame();
                    showNotification('游戏已保存', 'success');
                }
                // D - 切换暗色模式 (Ctrl+D)
                else if (key === 'd' && e.ctrlKey) {
                    e.preventDefault();
                    toggleDarkMode();
                }
                // ? - 显示快捷键帮助
                else if (key === '?' || (key === '/' && e.shiftKey)) {
                    e.preventDefault();
                    showShortcutHelp();
                }
                // 1-7 - 切换Tab
                else if (['1','2','3','4','5','6','7'].includes(key) && !e.ctrlKey) {
                    e.preventDefault();
                    const tabs = ['facilities', 'cultivation', 'equipment', 'alchemy', 'sect', 'achievements', 'save'];
                    const tabIndex = parseInt(key) - 1;
                    if (tabs[tabIndex]) {
                        switchTab(tabs[tabIndex]);
                    }
                }
            });
        }

        // 显示快捷键帮助
        function showShortcutHelp() {
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 3000;
            `;
            
            const card = document.createElement('div');
            card.style.cssText = `
                background: ${gameData.darkMode ? '#2d2d2d' : 'white'};
                color: ${gameData.darkMode ? '#e0e0e0' : '#333'};
                padding: 30px;
                border-radius: 8px;
                max-width: 600px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                box-shadow: 0 10px 40px rgba(0,0,0,0.5);
            `;
            
            card.innerHTML = `
                <h2 style="margin-bottom: 20px; font-size: 20px; display: flex; align-items: center; gap: 8px;">
                    <span style="display: inline-flex;">${getSvg('keyboard')}</span> 快捷键帮助
                </h2>
                <div style="display: grid; gap: 10px;">
                    <div style="display: flex; justify-content: space-between; padding: 10px; background: ${gameData.darkMode ? '#383838' : '#f5f5f5'}; border-radius: 4px;">
                        <span>修炼</span>
                        <span class="shortcut-hint">Space</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 10px; background: ${gameData.darkMode ? '#383838' : '#f5f5f5'}; border-radius: 4px;">
                        <span>突破境界</span>
                        <span class="shortcut-hint">B</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 10px; background: ${gameData.darkMode ? '#383838' : '#f5f5f5'}; border-radius: 4px;">
                        <span>使用丹药</span>
                        <span class="shortcut-hint">P</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 10px; background: ${gameData.darkMode ? '#383838' : '#f5f5f5'}; border-radius: 4px;">
                        <span>切换自动修炼</span>
                        <span class="shortcut-hint">A</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 10px; background: ${gameData.darkMode ? '#383838' : '#f5f5f5'}; border-radius: 4px;">
                        <span>切换标签页</span>
                        <span class="shortcut-hint">1-7</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 10px; background: ${gameData.darkMode ? '#383838' : '#f5f5f5'}; border-radius: 4px;">
                        <span>手动保存</span>
                        <span class="shortcut-hint">Ctrl+S</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 10px; background: ${gameData.darkMode ? '#383838' : '#f5f5f5'}; border-radius: 4px;">
                        <span>切换暗色模式</span>
                        <span class="shortcut-hint">Ctrl+D</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 10px; background: ${gameData.darkMode ? '#383838' : '#f5f5f5'}; border-radius: 4px;">
                        <span>显示此帮助</span>
                        <span class="shortcut-hint">?</span>
                    </div>
                </div>
                <button class="btn btn-primary" onclick="this.parentElement.parentElement.remove()" style="width: 100%; margin-top: 20px;">
                    关闭
                </button>
            `;
            
            modal.appendChild(card);
            document.body.appendChild(modal);
            
            // 点击背景关闭
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        }

        // 切换暗色模式
        function toggleDarkMode() {
            gameData.darkMode = !gameData.darkMode;
            applyTheme();
            saveGame();
            showNotification(gameData.darkMode ? '已切换到暗色模式' : '已切换到亮色模式', 'info');
        }

        // 应用主题
        function applyTheme() {
            if (gameData.darkMode) {
                document.body.classList.add('dark-mode');
                document.getElementById('themeIcon').innerHTML = getSvg('sun');
            } else {
                document.body.classList.remove('dark-mode');
                document.getElementById('themeIcon').innerHTML = getSvg('moon');
            }
            // 初始化其他图标
            if (document.getElementById('keyboardIcon')) {
                document.getElementById('keyboardIcon').innerHTML = getSvg('keyboard');
            }
            if (document.getElementById('settingsIcon')) {
                document.getElementById('settingsIcon').innerHTML = getSvg('settings');
            }
        }

        // 显示通知
        function showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            notification.className = 'notification';
            
            const colors = {
                success: '#27ae60',
                error: '#e74c3c',
                warning: '#f39c12',
                info: '#3498db'
            };
            
            const icons = {
                success: getSvg('check'),
                error: getSvg('x'),
                warning: getSvg('alert'),
                info: getSvg('info')
            };
            
            const titles = {
                success: '成功',
                error: '错误',
                warning: '警告',
                info: '提示'
            };
            
            notification.style.borderLeft = `4px solid ${colors[type] || colors.info}`;
            notification.innerHTML = `
                <div style="font-weight: 600; margin-bottom: 5px; display: flex; align-items: center; gap: 5px;">
                    <span style="color: ${colors[type]}; display: inline-flex;">${icons[type]}</span>
                    <span>${titles[type]}</span>
                </div>
                <div style="font-size: 13px;">${message}</div>
            `;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 3000);
        }

        // 创建粒子容器
        function createParticleContainer() {
            if (!document.getElementById('particleContainer')) {
                const container = document.createElement('div');
                container.id = 'particleContainer';
                container.className = 'particle-container';
                document.body.appendChild(container);
            }
        }

        // 创建粒子效果
        function createParticles(x, y, color, count = 10) {
            const container = document.getElementById('particleContainer');
            if (!container) return;
            
            for (let i = 0; i < count; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                particle.style.background = color;
                
                // 随机方向
                const angle = (Math.PI * 2 * i) / count;
                const distance = 50 + Math.random() * 100;
                const tx = Math.cos(angle) * distance;
                const ty = Math.sin(angle) * distance;
                
                particle.style.setProperty('--tx', tx + 'px');
                particle.style.setProperty('--ty', ty + 'px');
                
                container.appendChild(particle);
                
                setTimeout(() => particle.remove(), 2000);
            }
        }

        // 突破特效
        function breakthroughEffect() {
            const flash = document.createElement('div');
            flash.className = 'breakthrough-flash';
            document.body.appendChild(flash);
            
            setTimeout(() => flash.remove(), 1000);
            
            // 粒子效果
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            createParticles(centerX, centerY, '#ffd700', 30);
        }

        // 显示设置界面
        function showSettings() {
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 3000;
            `;
            
            const card = document.createElement('div');
            card.style.cssText = `
                background: ${gameData.darkMode ? '#2d2d2d' : 'white'};
                color: ${gameData.darkMode ? '#e0e0e0' : '#333'};
                padding: 30px;
                border-radius: 8px;
                max-width: 600px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                box-shadow: 0 10px 40px rgba(0,0,0,0.5);
            `;
            
            card.innerHTML = `
                <h2 style="margin-bottom: 20px; font-size: 20px;">${getSvg('gear')} 游戏设置</h2>
                
                <div style="margin-bottom: 25px;">
                    <h3 style="font-size: 16px; margin-bottom: 15px;">自动化设置</h3>
                    
                    <div style="margin-bottom: 15px; padding: 15px; background: ${gameData.darkMode ? '#383838' : '#f5f5f5'}; border-radius: 6px;">
                        <label style="display: flex; align-items: center; cursor: pointer;">
                            <input type="checkbox" id="autoBreakthrough" ${gameData.autoSettings.autoBreakthrough ? 'checked' : ''} 
                                   style="margin-right: 10px; width: 18px; height: 18px; cursor: pointer;">
                            <div>
                                <div style="font-weight: 600;">自动突破</div>
                                <div style="font-size: 12px; color: #7f8c8d;">突破进度达到100%时自动突破</div>
                            </div>
                        </label>
                    </div>
                    
                    <div style="margin-bottom: 15px; padding: 15px; background: ${gameData.darkMode ? '#383838' : '#f5f5f5'}; border-radius: 6px;">
                        <label style="display: flex; align-items: center; cursor: pointer;">
                            <input type="checkbox" id="autoPill" ${gameData.autoSettings.autoPill ? 'checked' : ''} 
                                   style="margin-right: 10px; width: 18px; height: 18px; cursor: pointer;">
                            <div style="flex: 1;">
                                <div style="font-weight: 600;">自动使用丹药</div>
                                <div style="font-size: 12px; color: #7f8c8d;">突破进度低于阈值时自动使用丹药</div>
                                <div style="margin-top: 10px;">
                                    <label style="font-size: 12px;">
                                        使用阈值: <span id="pillThresholdValue">${gameData.autoSettings.pillThreshold}</span>%
                                        <input type="range" id="pillThreshold" min="0" max="100" value="${gameData.autoSettings.pillThreshold}" 
                                               style="width: 100%; margin-top: 5px;" oninput="document.getElementById('pillThresholdValue').textContent=this.value">
                                    </label>
                                </div>
                            </div>
                        </label>
                    </div>
                    
                    <div style="margin-bottom: 15px; padding: 15px; background: ${gameData.darkMode ? '#383838' : '#f5f5f5'}; border-radius: 6px;">
                        <label style="display: flex; align-items: center; cursor: pointer;">
                            <input type="checkbox" id="autoUpgrade" ${gameData.autoSettings.autoUpgrade ? 'checked' : ''} 
                                   style="margin-right: 10px; width: 18px; height: 18px; cursor: pointer;">
                            <div>
                                <div style="font-weight: 600;">自动升级设施</div>
                                <div style="font-size: 12px; color: #7f8c8d;">有足够灵力时自动升级设施</div>
                            </div>
                        </label>
                    </div>
                    
                    <div style="margin-bottom: 15px; padding: 15px; background: ${gameData.darkMode ? '#383838' : '#f5f5f5'}; border-radius: 6px;">
                        <label style="display: flex; align-items: center; cursor: pointer;">
                            <input type="checkbox" id="autoSectTask" ${gameData.autoSettings.autoSectTask ? 'checked' : ''} 
                                   style="margin-right: 10px; width: 18px; height: 18px; cursor: pointer;">
                            <div>
                                <div style="font-weight: 600;">自动门派任务</div>
                                <div style="font-size: 12px; color: #7f8c8d;">自动接取和完成门派任务</div>
                            </div>
                        </label>
                    </div>
                </div>
                
                <div style="margin-bottom: 25px;">
                    <h3 style="font-size: 16px; margin-bottom: 15px;">显示设置</h3>
                    
                    <div style="margin-bottom: 15px; padding: 15px; background: ${gameData.darkMode ? '#383838' : '#f5f5f5'}; border-radius: 6px;">
                        <label style="display: flex; align-items: center; cursor: pointer;">
                            <input type="checkbox" id="darkModeToggle" ${gameData.darkMode ? 'checked' : ''} 
                                   style="margin-right: 10px; width: 18px; height: 18px; cursor: pointer;"
                                   onchange="toggleDarkMode()">
                            <div>
                                <div style="font-weight: 600;">暗色模式</div>
                                <div style="font-size: 12px; color: #7f8c8d;">切换到暗色主题</div>
                            </div>
                        </label>
                    </div>
                    
                    <div style="margin-bottom: 15px; padding: 15px; background: ${gameData.darkMode ? '#383838' : '#f5f5f5'}; border-radius: 6px;">
                        <div style="font-weight: 600; margin-bottom: 10px;">最大日志条数</div>
                        <input type="number" id="maxLogEntries" value="${gameData.maxLogEntries}" min="50" max="500" 
                               style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; background: ${gameData.darkMode ? '#2d2d2d' : 'white'}; color: ${gameData.darkMode ? '#e0e0e0' : '#333'};">
                        <div style="font-size: 12px; color: #7f8c8d; margin-top: 5px;">日志超过此数量时自动清理旧记录</div>
                    </div>
                </div>
                
                <div style="display: flex; gap: 10px;">
                    <button class="btn btn-primary" onclick="saveSettings()" style="flex: 1;">
                        保存设置
                    </button>
                    <button class="btn" onclick="this.parentElement.parentElement.parentElement.remove()" style="flex: 1;">
                        取消
                    </button>
                </div>
            `;
            
            modal.appendChild(card);
            document.body.appendChild(modal);
            
            // 点击背景关闭
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        }

        // 保存设置
        function saveSettings() {
            gameData.autoSettings.autoBreakthrough = document.getElementById('autoBreakthrough').checked;
            gameData.autoSettings.autoPill = document.getElementById('autoPill').checked;
            gameData.autoSettings.pillThreshold = parseInt(document.getElementById('pillThreshold').value);
            gameData.autoSettings.autoUpgrade = document.getElementById('autoUpgrade').checked;
            gameData.autoSettings.autoSectTask = document.getElementById('autoSectTask').checked;
            gameData.maxLogEntries = parseInt(document.getElementById('maxLogEntries').value);
            
            saveGame();
            showNotification('设置已保存', 'success');
            
            // 关闭设置窗口
            document.querySelectorAll('[style*="z-index: 3000"]').forEach(el => el.remove());
        }


        // 游戏主循环
        function startGameLoop() {
            setInterval(() => {
                const now = Date.now();
                const deltaTime = (now - gameData.lastUpdate) / 1000; // 秒
                gameData.lastUpdate = now;
                
                // 自动获取灵力
                const spiritPerSec = calculateSpiritPerSecond();
                gameData.player.spiritualPower += spiritPerSec * deltaTime;
                
                // 更新突破进度
                updateBreakthroughProgress();
                
                // 自动模式
                if (gameData.autoMode) {
                    autoPlay();
                }
                
                // 检查门派任务是否完成（遍历所有任务）
                if (gameData.currentSectTasks && gameData.currentSectTasks.length > 0) {
                    for (let i = gameData.currentSectTasks.length - 1; i >= 0; i--) {
                        if (gameData.currentSectTasks[i].endTime <= now) {
                            completeSectTask(i);
                        }
                    }
                }
                
                // NPC成长更新
                if (typeof updateNPCGrowth === 'function') {
                    updateNPCGrowth();
                }
                
                // 堂口任务更新
                if (typeof updateDivisionTask === 'function') {
                    updateDivisionTask();
                }
                
                // 自动保存
                if (now - gameData.lastSave > 30000) { // 30秒保存一次
                    saveGame();
                }
                
                updateUI();
            }, 100);
            
            // 定期刷新列表（更新按钮状态）
            setInterval(() => {
                const activeTab = document.querySelector('.tab.active');
                if (activeTab) {
                    const tabText = activeTab.textContent;
                    // 修炼系统主Tab内包含设施与功法两块内容
                    if (tabText.includes('修炼系统')) {
                        renderFacilities();
                        renderCultivation();
                    } else if (tabText.includes('装备')) {
                        renderEquipment();
                    } else if (tabText.includes('炼丹')) {
                        renderAlchemy();
                    } else if (tabText.includes('门派')) {
                        renderSectContent();
                    } else if (tabText.includes('人际关系') && typeof renderRelationshipsPanel === 'function') {
                        renderRelationshipsPanel();
                    } else if (tabText.includes('成就')) {
                        renderAchievements();
                    } else if (tabText.includes('存档')) {
                        renderSaveContent();
                    }
                }
            }, 1000);
            
            // 定期检查成就
            setInterval(() => {
                checkAchievements();
            }, 5000);
            
            // 随机事件触发
            setInterval(() => {
                tryTriggerEvent();
            }, 60000); // 每分钟检查一次
            
            // 丹房自动生产
            setInterval(() => {
                if (gameData.facilities.pillRoom > 0) {
                    let pillOutput = gameData.facilities.pillRoom;
                    
                    // 门派加成
                    if (gameData.sect && sects[gameData.sect]) {
                        const sect = sects[gameData.sect];
                        if (sect.benefits.pillProduction) {
                            pillOutput += sect.benefits.pillProduction;
                        }
                        if (sect.benefits.allBonus) {
                            pillOutput = Math.floor(pillOutput * (1 + sect.benefits.allBonus));
                        }
                    }
                    
                    gameData.player.pills += pillOutput;
                    addLog(`丹房产出 ${pillOutput} 枚丹药`);
                }
            }, 30000);
            
            // 灵田产出和自动修炼天数增加
            setInterval(() => {
                // 自动增加修炼天数（每分钟+1天）
                gameData.player.totalDays += 1;
                
                if (gameData.facilities.spiritualField > 0) {
                    let stoneOutput = gameData.facilities.spiritualField;
                    
                    // 门派加成
                    if (gameData.sect && sects[gameData.sect]) {
                        const sect = sects[gameData.sect];
                        if (sect.benefits.spiritStoneBonus) {
                            stoneOutput = Math.floor(stoneOutput * (1 + sect.benefits.spiritStoneBonus));
                        }
                        if (sect.benefits.allBonus) {
                            stoneOutput = Math.floor(stoneOutput * (1 + sect.benefits.allBonus));
                        }
                    }
                    
                    gameData.player.spiritStone += stoneOutput;
                    addLog(`灵田收获 ${stoneOutput} 块灵石`);
                }
                
                // 徒弟贡献度产出
                if (gameData.disciples.length > 0) {
                    const contribution = gameData.disciples.length * 5;
                    gameData.sectContribution += contribution;
                    addLog(`徒弟为你赚取了 ${contribution} 贡献度`);
                }
                
                // 仙树产出（飞升专属，每小时）
                if (gameData.facilities.celestialTree > 0) {
                    const stoneOutput = gameData.facilities.celestialTree * 10;
                    const pillOutput = gameData.facilities.celestialTree;
                    gameData.player.spiritStone += stoneOutput;
                    gameData.player.pills += pillOutput;
                    addLog(`${getSvg('star')} 仙树结果：${stoneOutput}灵石，${pillOutput}丹药`);
                }
            }, 60000);
        }

        // 计算每秒灵力
        function calculateSpiritPerSecond() {
            let base = gameData.facilities.spiritualVein;
            
            // 藏经阁加成
            if (gameData.facilities.library > 0) {
                base *= (1 + gameData.facilities.library * 0.1);
            }
            
            // 炼器房加成
            if (gameData.facilities.artifactRoom > 0) {
                base *= (1 + gameData.facilities.artifactRoom * 0.05);
            }
            
            // 仙池加成（飞升专属）
            if (gameData.facilities.immortalPond > 0) {
                base *= (1 + gameData.facilities.immortalPond * 0.5);
            }
            
            // 功法加成 - 遍历所有功法
            for (let techId in gameData.techniques) {
                const level = gameData.techniques[techId];
                if (level > 0 && techniquesData[techId]) {
                    const tech = techniquesData[techId];
                    // 根据功法类别计算加成
                    if (tech.category === 'basic') {
                        const bonus = techId === 'fire_path' ? 0.18 :
                                     techId === 'water_path' ? 0.17 :
                                     techId === 'body_refining' ? 0.12 : 0.15;
                        base *= (1 + level * bonus);
                    } else if (tech.category === 'advanced') {
                        const bonus = techId === 'sword_intent' ? 0.28 :
                                     techId === 'spell_mastery' ? 0.27 : 0.25;
                        base *= (1 + level * bonus);
                    } else if (tech.category === 'supreme') {
                        const bonus = techId === 'heavenly_dao' ? 0.45 :
                                     techId === 'void_technique' ? 0.50 : 0.40;
                        base *= (1 + level * bonus);
                    } else if (tech.category === 'ascension') {
                        // 飞升功法加成
                        const bonus = techId === 'immortal_foundation' ? 0.60 :
                                     techId === 'celestial_power' ? 0.80 : 1.00;
                        base *= (1 + level * bonus);
                    }
                }
            }
            
            // 境界加成
            const realm = realms[gameData.player.realm];
            base *= realm.multiplier;
            
            // 门派加成
            if (gameData.sect && sects[gameData.sect]) {
                const sect = sects[gameData.sect];
                if (sect.benefits.spiritualPowerBonus) {
                    base *= (1 + sect.benefits.spiritualPowerBonus);
                }
                if (sect.benefits.allBonus) {
                    base *= (1 + sect.benefits.allBonus);
                }
                if (sect.benefits.facilityBonus) {
                    base *= (1 + sect.benefits.facilityBonus);
                }
            }
            
            // 飞升加成
            if (gameData.ascensionCount > 0) {
                base *= (1 + gameData.ascensionCount * 0.5);
            }
            
            // 师尊加成
            if (gameData.masterLevel > 0) {
                base *= 1.15; // 拜师后灵力获取+15%
            }
            
            // 新拜师系统加成
            if (gameData.masterId) {
                base *= 1.1; // 正式师傅加成10%
            }
            
            // 师徒羁绊加成（共同飞升获得）
            if (gameData.masterBond) {
                base *= 1.05; // 全属性+5%
            }
            
            // 客座师傅加成（每位3%，最多5位）
            if (gameData.guestMasters && gameData.guestMasters.length > 0) {
                const guestBonus = Math.min(gameData.guestMasters.length * 0.03, 0.15);
                base *= (1 + guestBonus);
            }
            
            // 法宝加成
            gameData.artifacts.forEach(artifactId => {
                const artifact = artifacts[artifactId];
                if (artifact && artifact.bonus.spiritualPowerBonus) {
                    base *= (1 + artifact.bonus.spiritualPowerBonus);
                }
            });
            
            // 装备加成
            for (let slot in gameData.equipment) {
                const equipId = gameData.equipment[slot];
                if (equipId && artifacts[equipId]) {
                    const equip = artifacts[equipId];
                    if (equip.bonus.spiritualPowerBonus) {
                        base *= (1 + equip.bonus.spiritualPowerBonus);
                    }
                }
            }
            
            // 灵宠加成
            if (gameData.activePet && pets[gameData.activePet]) {
                const pet = pets[gameData.activePet];
                if (pet.bonus.spiritualPowerBonus) {
                    base *= (1 + pet.bonus.spiritualPowerBonus);
                }
            }
            
            // 成就永久加成
            if (gameData.achievementBonuses.spiritualPowerBonus) {
                base *= (1 + gameData.achievementBonuses.spiritualPowerBonus);
            }
            if (gameData.achievementBonuses.allBonus) {
                base *= (1 + gameData.achievementBonuses.allBonus);
            }
            
            // 天赋加成
            (gameData.talents || []).forEach(talentId => {
                const talent = talentsData[talentId];
                if (talent && talent.bonus.spiritualPowerBonus) {
                    base *= (1 + talent.bonus.spiritualPowerBonus);
                }
                if (talent && talent.bonus.allBonus) {
                    base *= (1 + talent.bonus.allBonus);
                }
            });
            
            // 五行属性加成
            if (gameData.player.element && gameData.player.element !== 'none') {
                const element = elementsData[gameData.player.element];
                if (element && element.bonus.spiritualPowerBonus) {
                    const powerLevel = gameData.player.elementPower || 1;
                    base *= (1 + element.bonus.spiritualPowerBonus * powerLevel * 0.1); // 每级增加10%效果
                }
            }
            
            return Math.floor(base * 10) / 10;
        }

        // 更新突破进度
        function updateBreakthroughProgress() {
            const player = gameData.player;
            let realm, currentLevel;
            
            if (player.isInImmortalWorld) {
                realm = immortalRealms[player.immortalRealm];
                currentLevel = player.immortalRealmLevel;
            } else {
                realm = realms[player.realm];
                currentLevel = player.realmLevel;
            }
            
            const required = realm.spiritRequired * currentLevel;
            gameData.player.breakthroughProgress = Math.min(100, (gameData.player.spiritualPower / required) * 100);
        }

        // 修炼（手动）
        function cultivate() {
            gameData.player.totalDays += 1;
            const gain = 50 + gameData.player.realm * 20;
            gameData.player.spiritualPower += gain;
            addLog(`专注修炼一天，获得 ${gain} 点灵力`);
            updateUI();
        }

        // 安全尝试突破 - 由按钮点击触发
        function attemptBreakthrough() {
            const player = gameData.player;
            let realm, currentLevel;
            if (player.isInImmortalWorld) {
                realm = immortalRealms[player.immortalRealm];
                currentLevel = player.immortalRealmLevel;
            } else {
                realm = realms[player.realm];
                currentLevel = player.realmLevel;
            }
            const required = realm.spiritRequired * currentLevel;
            if (player.spiritualPower >= required) {
                breakthrough();
            } else {
                showNotification(`灵力不足（需要 ${formatNumber(required)}）`, 'warning');
            }
        }

        // 突破境界
        function breakthrough() {
            const player = gameData.player;
            let realm, currentLevel, maxLevel;
            
            // 判断是凡界还是仙界
            if (player.isInImmortalWorld) {
                realm = immortalRealms[player.immortalRealm];
                currentLevel = player.immortalRealmLevel;
                maxLevel = realm.maxLevel;
            } else {
                realm = realms[player.realm];
                currentLevel = player.realmLevel;
                maxLevel = realm.maxLevel;
            }
            
            const required = realm.spiritRequired * currentLevel;
            
            if (gameData.player.spiritualPower >= required) {
                gameData.player.spiritualPower -= required;
                
                // 计算成功率
                let successRate = 0.7;
                
                // 藏经阁加成
                successRate += gameData.facilities.library * 0.05;
                
                // 功法加成突破成功率
                for (let techId in gameData.techniques) {
                    const level = gameData.techniques[techId];
                    if (level > 0) {
                        // 炼体诀特殊加成
                        if (techId === 'body_refining') {
                            successRate += level * 0.02;
                        }
                        // 永恒大道特殊加成
                        else if (techId === 'eternal_dao') {
                            successRate += level * 0.01; // 永恒大道的突破加成
                        }
                        // 其他功法基础加成
                        else if (techniquesData[techId]) {
                            const tech = techniquesData[techId];
                            if (tech.category === 'basic') successRate += level * 0.01;
                            else if (tech.category === 'advanced') successRate += level * 0.015;
                            else if (tech.category === 'supreme') successRate += level * 0.02;
                            else if (tech.category === 'ascension') successRate += level * 0.025;
                        }
                    }
                }
                
                // 门派加成
                if (gameData.sect && sects[gameData.sect]) {
                    const sect = sects[gameData.sect];
                    if (sect.benefits.breakthroughBonus) {
                        successRate += sect.benefits.breakthroughBonus;
                    }
                    if (sect.benefits.allBonus) {
                        successRate += sect.benefits.allBonus * 0.5; // 全属性加成的一半用于突破
                    }
                }
                
                // 丹药临时加成
                if (gameData.player.tempBreakthroughBonus) {
                    successRate += gameData.player.tempBreakthroughBonus;
                    addLog(`筑基丹效果：突破成功率+${(gameData.player.tempBreakthroughBonus * 100).toFixed(0)}%`);
                }
                
                // 飞升加成
                if (gameData.ascensionCount > 0) {
                    successRate += gameData.ascensionCount * 0.05;
                }
                
                // 法宝加成
                gameData.artifacts.forEach(artifactId => {
                    const artifact = artifacts[artifactId];
                    if (artifact && artifact.bonus.breakthroughBonus) {
                        successRate += artifact.bonus.breakthroughBonus;
                    }
                });
                
                // 装备加成
                for (let slot in gameData.equipment) {
                    const equipId = gameData.equipment[slot];
                    if (equipId && artifacts[equipId]) {
                        const equip = artifacts[equipId];
                        if (equip.bonus.breakthroughBonus) {
                            successRate += equip.bonus.breakthroughBonus;
                        }
                    }
                }
                
                // 灵宠加成
                if (gameData.activePet && pets[gameData.activePet]) {
                    const pet = pets[gameData.activePet];
                    if (pet.bonus.breakthroughBonus) {
                        successRate += pet.bonus.breakthroughBonus;
                    }
                }
                
                // 成就永久加成
                if (gameData.achievementBonuses.breakthroughBonus) {
                    successRate += gameData.achievementBonuses.breakthroughBonus;
                }
                if (gameData.achievementBonuses.allBonus) {
                    successRate += gameData.achievementBonuses.allBonus * 0.5; // 全属性加成的一半
                }
                
                // 天赋加成
                (gameData.talents || []).forEach(talentId => {
                    const talent = talentsData[talentId];
                    if (talent && talent.bonus.breakthroughBonus) {
                        successRate += talent.bonus.breakthroughBonus;
                    }
                    if (talent && talent.bonus.allBonus) {
                        successRate += talent.bonus.allBonus * 0.5;
                    }
                });
                
                // 五行属性加成
                if (gameData.player.element && gameData.player.element !== 'none') {
                    const element = elementsData[gameData.player.element];
                    if (element && element.bonus.breakthroughBonus) {
                        const powerLevel = gameData.player.elementPower || 1;
                        successRate += element.bonus.breakthroughBonus * powerLevel * 0.1;
                    }
                }
                
                successRate = Math.min(0.98, successRate);
                
                if (Math.random() < successRate) {
                    // 成功
                    gameData.player.totalBreakthroughs++;
                    breakthroughEffect(); // 添加突破特效
                    
                    if (player.isInImmortalWorld) {
                        // 仙界境界突破
                        if (currentLevel < maxLevel) {
                            player.immortalRealmLevel++;
                            addLog(`<span class="log-success">突破成功！${getSvg('star')} ${realm.name} 第${player.immortalRealmLevel}层</span>`, true);
                            showNotification(`突破成功！${realm.name} 第${player.immortalRealmLevel}层`, 'success');
                        } else {
                            // 进入下一个仙界境界
                            if (player.immortalRealm < immortalRealms.length - 1) {
                                player.immortalRealm++;
                                player.immortalRealmLevel = 1;
                                const newRealm = immortalRealms[player.immortalRealm];
                                addLog(`<span class="log-important">${getSvg('star')} 恭喜突破至 ${newRealm.name}！</span>`, true);
                                showNotification(`恭喜突破至 ${newRealm.name}！`, 'success');
                                
                                createAutoBackup(`仙界突破至${newRealm.name}`);
                                showRealmStory(newRealm);
                                checkAchievements();
                            } else {
                                // 达到大罗金仙最高层
                                addLog(`<span class="log-important">${getSvg('zap')} 你已达到大罗金仙巅峰！超脱三界之外，不在五行之中！</span>`, true);
                                showNotification(`恭喜！已达仙道巅峰！`, 'success');
                            }
                        }
                    } else {
                        // 凡界境界突破
                        if (currentLevel < maxLevel) {
                            player.realmLevel++;
                            addLog(`<span class="log-success">突破成功！${realm.name} 第${player.realmLevel}层</span>`, true);
                            showNotification(`突破成功！${realm.name} 第${player.realmLevel}层`, 'success');
                        } else {
                            // 进入下一个境界
                            if (player.realm < realms.length - 1) {
                                player.realm++;
                                player.realmLevel = 1;
                                const newRealm = realms[player.realm];
                                addLog(`<span class="log-important">恭喜突破至 ${newRealm.name}！</span>`, true);
                                showNotification(`恭喜突破至 ${newRealm.name}！`, 'success');
                                
                                // 自动创建备份
                                createAutoBackup(`突破至${newRealm.name}`);
                                
                                // 显示境界感悟
                                showRealmStory(newRealm);
                                
                                // 突破大境界时刷新功法列表（可能解锁新功法）
                                renderCultivation();
                                checkAchievements();
                                
                                // 玩家突破大境界，师傅声望提升
                                if (typeof playerAchievementBoostMaster === 'function') {
                                    playerAchievementBoostMaster('realm_breakthrough', player.realm);
                                }
                                
                                // 突破到筑基期且未选择门派时，触发门派选择
                                if (player.realm === 1 && !gameData.sect) {
                                    setTimeout(() => showSectSelection(), 2000);
                                }
                            } else {
                                // 达到最高境界最高层，可以飞升
                                if (player.realm === realms.length - 1 && currentLevel === maxLevel) {
                                    setTimeout(() => showAscensionOption(), 1500);
                                }
                            }
                        }
                    }
                } else {
                    // 失败
                    addLog(`<span class="log-important">突破失败，损失部分灵力</span>`);
                    gameData.player.spiritualPower = Math.floor(gameData.player.spiritualPower * 0.5);
                }
                
                // 清除临时突破加成
                gameData.player.tempBreakthroughBonus = 0;
                
                updateUI();
            }
        }

        // 使用丹药
        function usePill() {
            if (gameData.player.pills > 0) {
                gameData.player.pills--;
                gameData.player.totalPillsUsed++;
                gameData.player.spiritualPower += 100;
                addLog('使用丹药，获得 100 点灵力');
                updateUI();
            }
        }

        // 切换自动模式
        function toggleAutoMode() {
            gameData.autoMode = !gameData.autoMode;
            updateAutoModeUI();
            addLog(gameData.autoMode ? '✓ 自动修炼已开启' : '✗ 自动修炼已关闭');
        }
        
        // 更新自动模式UI
        function updateAutoModeUI() {
            const btn = document.getElementById('autoModeBtn');
            const text = document.getElementById('autoModeText');
            if (gameData.autoMode) {
                text.textContent = '关闭自动修炼';
                btn.style.background = '#27ae60';
                btn.style.color = 'white';
                btn.style.borderColor = '#27ae60';
            } else {
                text.textContent = '开启自动修炼';
                btn.style.background = 'white';
                btn.style.color = '#2c3e50';
                btn.style.borderColor = '#d0d0d0';
            }
        }

        // 渲染门派内容
        function renderSectContent() {
            const container = document.getElementById('sectContent');
            
            if (!gameData.sect || gameData.sect === 'rogue') {
                container.innerHTML = `
                    <div style="text-align: center; color: #7f8c8d; padding: 40px;">
                        ${!gameData.sect ? '请先加入门派（达到筑基期）' : '散修无门派任务'}
                    </div>
                `;
                return;
            }
            
            const sect = sects[gameData.sect];
            let html = '';
            
            // 门派信息
            html += `<div style="background: ${sect.color}; color: white; padding: 15px; border-radius: 6px; margin-bottom: 20px;">`;
            html += `<div style="font-size: 18px; font-weight: 600; margin-bottom: 5px;">${sect.name}</div>`;
            html += `<div style="opacity: 0.9; font-size: 13px;">${sect.desc}</div>`;
            
            // 显示堂口信息（如果已加入）
            if (gameData.divisionId && gameData.divisionName) {
                html += `<div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.3);">`;
                html += `<div style="font-size: 13px; opacity: 0.9; margin-bottom: 6px;">`;
                html += `<svg width="14" height="14" viewBox="0 0 24 24" fill="white" style="vertical-align: -2px; margin-right: 4px;">`;
                html += `<path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"/>`;
                html += `</svg>`;
                html += `所属：${gameData.divisionName}`;
                html += `</div>`;
                html += `<div style="font-size: 13px; opacity: 0.9;">`;
                html += `堂口贡献：<strong>${gameData.divisionContribution || 0}</strong>`;
                html += `</div>`;
                html += `</div>`;
            }
            
            html += `<div style="margin-top: 10px; display: flex; justify-content: space-between; align-items: center;">`;
            html += `<div style="font-size: 14px; font-weight: 600;">门派贡献度: ${gameData.sectContribution}</div>`;
            html += `<button class="btn" onclick="confirmChangeSect()" style="background: rgba(255,255,255,0.2); color: white; border: 1px solid rgba(255,255,255,0.3); font-size: 12px; padding: 6px 12px;">`;
            html += `更换门派`;
            html += `</button>`;
            html += `</div>`;
            html += `</div>`;
            
            // 如果还没有拜师，显示拜师按钮
            if (!gameData.divisionId) {
                html += `<div style="margin-bottom: 20px;">`;
                html += `<button class="btn btn-primary" onclick="showMasterSelection('${gameData.sect}')" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 6px;">`;
                html += `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">`;
                html += `<path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>`;
                html += `</svg>`;
                html += `拜师入堂口`;
                html += `</button>`;
                html += `<div style="text-align: center; color: #7f8c8d; font-size: 12px; margin-top: 8px;">`;
                html += `选择师傅后将加入对应的堂口，获得独特加成`;
                html += `</div>`;
                html += `</div>`;
            }
            
            // 堂口快捷按钮（如果已加入堂口）
            if (gameData.divisionId && gameData.divisionName) {
                html += `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px;">`;
                html += `<button class="btn btn-primary" onclick="showDivisionTasksModal()" style="display: flex; align-items: center; justify-content: center; gap: 6px;">`;
                html += `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">`;
                html += `<path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>`;
                html += `</svg>`;
                html += `堂口任务`;
                html += `</button>`;
                html += `<button class="btn btn-primary" onclick="showDivisionShop()" style="display: flex; align-items: center; justify-content: center; gap: 6px;">`;
                html += `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">`;
                html += `<path d="M3,3H21V7H3V3M3,9H21V21H3V9M8,12V18H10V12H8M14,12V18H16V12H14Z"/>`;
                html += `</svg>`;
                html += `堂口商店`;
                html += `</button>`;
                html += `</div>`;
            }
            
            
            // 门派任务
            html += `<div style="margin-bottom: 25px;">`;
            const taskCollapsed = gameData.collapsedCategories['sect_tasks'];
            
            // 计算任务槽位
            const maxSlots = 1 + Math.floor(gameData.player.realm / 3);
            const currentTaskCount = gameData.currentSectTasks ? gameData.currentSectTasks.length : 0;
            const slotInfo = `<span style="color: ${currentTaskCount >= maxSlots ? '#e74c3c' : '#27ae60'};">[${currentTaskCount}/${maxSlots}]</span>`;
            
            html += `<div style="font-size: 14px; font-weight: 600; color: #2c3e50; margin-bottom: 10px; padding: 8px; background: #f8f9fa; border-radius: 4px; cursor: pointer; display: flex; justify-content: space-between;" 
                     onclick="toggleCategory('sect_tasks')">`;
            html += `<span>门派任务 ${slotInfo}</span>`;
            html += `<span style="font-size: 12px; color: #95a5a6;" id="sect_tasks_toggle">${taskCollapsed ? '▼ 展开' : '▲ 折叠'}</span>`;
            html += `</div>`;
            
            html += `<div id="sect_tasks_content" style="display: ${taskCollapsed ? 'none' : 'block'};">`;
            
            // 显示所有进行中的任务
            if (gameData.currentSectTasks && gameData.currentSectTasks.length > 0) {
                html += `<div style="margin-bottom: 15px;">`;
                html += `<div style="font-size: 12px; color: #7f8c8d; margin-bottom: 8px; font-weight: 600;">进行中的任务：</div>`;
                
                gameData.currentSectTasks.forEach((taskData, index) => {
                    const task = sectTasks[taskData.taskId];
                    if (!task) return;
                    
                    const remaining = Math.max(0, Math.ceil((taskData.endTime - Date.now()) / 1000));
                    const minutes = Math.floor(remaining / 60);
                    const seconds = remaining % 60;
                    
                    html += `<div class="facility-item" style="background: #fff3cd; border-color: #f39c12; margin-bottom: 8px;">`;
                    html += `<div class="facility-header">`;
                    html += `<span class="facility-name">${getSvg('clock')} ${task.name}</span>`;
                    html += `<span class="facility-level">剩余 ${minutes}:${seconds.toString().padStart(2, '0')}</span>`;
                    html += `</div>`;
                    html += `<div class="facility-desc">${task.desc}</div>`;
                    
                    // 进度条
                    const totalTime = taskData.endTime - taskData.startTime;
                    const elapsed = Date.now() - taskData.startTime;
                    const progress = Math.min(100, (elapsed / totalTime) * 100);
                    
                    html += `<div style="margin-top: 8px; background: #ecf0f1; border-radius: 10px; height: 6px; overflow: hidden;">`;
                    html += `<div style="width: ${progress}%; height: 100%; background: linear-gradient(90deg, #f39c12, #e67e22); transition: width 0.3s;"></div>`;
                    html += `</div>`;
                    html += `</div>`;
                });
                html += `</div>`;
            }
            
            // 显示可接任务（槽位未满时）
            if (currentTaskCount < maxSlots) {
                html += `<div style="margin-bottom: 10px;">`;
                html += `<div style="font-size: 12px; color: #7f8c8d; margin-bottom: 8px; font-weight: 600;">可接取的任务：</div>`;
                
                sect.tasks.forEach(taskId => {
                    const task = sectTasks[taskId];
                    if (!task) return; // 任务不存在，跳过
                    
                    let canAccept = true;
                    let cantReason = '';
                    
                    if (task.cost) {
                        if (task.cost.spiritualPower && gameData.player.spiritualPower < task.cost.spiritualPower) {
                            canAccept = false;
                            cantReason = `需要灵力: ${task.cost.spiritualPower}`;
                        }
                        if (task.cost.spiritStone && gameData.player.spiritStone < task.cost.spiritStone) {
                            canAccept = false;
                            cantReason = `需要灵石: ${task.cost.spiritStone}`;
                        }
                    }
                    
                    // 计算加速后的时长
                    const realmSpeedBonus = 1 - (gameData.player.realm * 0.08);
                    const speedMultiplier = Math.max(0.2, realmSpeedBonus);
                    const actualDuration = Math.ceil(task.duration * speedMultiplier);
                    const displayMinutes = actualDuration < 60 ? `${actualDuration}秒` : `${Math.floor(actualDuration/60)}分${actualDuration%60}秒`;
                    
                    html += `<div class="facility-item">`;
                    html += `<div class="facility-header">`;
                    html += `<span class="facility-name">${task.name}</span>`;
                    html += `<span class="facility-level">${displayMinutes}</span>`;
                    html += `</div>`;
                    html += `<div class="facility-desc">${task.desc}</div>`;
                    
                    // 显示警告信息（如果有）
                    if (task.warning) {
                        html += `<div style="font-size: 12px; color: #e74c3c; background: #fee; padding: 8px; border-radius: 4px; margin: 8px 0; border-left: 3px solid #e74c3c;">`;
                        html += task.warning;
                        html += `</div>`;
                    }
                    
                    html += `<div class="facility-benefit">`;
                    html += `奖励: `;
                    if (task.rewards) {
                        if (task.rewards.contribution) html += `贡献度+${task.rewards.contribution} `;
                        if (task.rewards.spiritStone) html += `灵石+${task.rewards.spiritStone} `;
                        if (task.rewards.pills) html += `丹药+${task.rewards.pills} `;
                        if (task.rewards.spiritualPower) html += `灵力+${task.rewards.spiritualPower} `;
                        if (task.rewards.breakthroughProgress) html += `突破进度+${task.rewards.breakthroughProgress}% `;
                        if (task.rewards.allBonus) html += `全属性+${(task.rewards.allBonus * 100).toFixed(1)}% `;
                        if (task.rewards.facilityBonus) html += `设施效果+${(task.rewards.facilityBonus * 100).toFixed(1)}% `;
                    }
                    html += `</div>`;
                    if (!canAccept) {
                        html += `<div class="cost-info">${cantReason}</div>`;
                    }
                    html += `<button class="btn btn-primary" onclick="startSectTask('${taskId}')" ${!canAccept ? 'disabled' : ''}>`;
                    html += `接取任务`;
                    html += `</button>`;
                    html += `</div>`;
                });
                html += `</div>`;
            } else {
                html += `<div style="text-align: center; padding: 15px; color: #95a5a6; font-size: 13px;">`;
                html += `任务槽位已满，请等待任务完成`;
                html += `</div>`;
            }
            
            html += `</div>`; // 结束任务内容div
            
            html += `</div>`; // 结束任务外层div
            
            // 门派商店
            html += `<div style="margin-bottom: 25px;">`;
            const shopCollapsed = gameData.collapsedCategories.hasOwnProperty('sect_shop') 
                ? gameData.collapsedCategories['sect_shop'] 
                : false; // 默认展开
            html += `<div style="font-size: 14px; font-weight: 600; color: #2c3e50; margin-bottom: 10px; padding: 8px; background: #f8f9fa; border-radius: 4px; cursor: pointer; display: flex; justify-content: space-between;" 
                     onclick="toggleCategory('sect_shop')">`;
            html += `<span>门派商店</span>`;
            html += `<span style="font-size: 12px; color: #95a5a6;" id="sect_shop_toggle">${shopCollapsed ? '▼ 展开' : '▲ 折叠'}</span>`;
            html += `</div>`;
            
            html += `<div id="sect_shop_content" style="display: ${shopCollapsed ? 'none' : 'block'};">`;
            
            // 添加网格布局容器
            html += '<div class="sect-shop-grid">';
            
            for (let id in sectShop) {
                const item = sectShop[id];
                if (!item) continue;
                
                const canBuy = gameData.sectContribution >= (item.cost ? item.cost.contribution : 999999);
                
                html += `<div class="facility-item">`;
                html += `<div class="facility-header">`;
                html += `<span class="facility-name">${item.name}</span>`;
                html += `</div>`;
                html += `<div class="facility-desc">${item.desc}</div>`;
                html += `<div class="facility-benefit">`;
                if (item.reward) {
                    if (item.reward.pills) html += `丹药+${item.reward.pills} `;
                    if (item.reward.spiritStone) html += `灵石+${item.reward.spiritStone} `;
                    if (item.reward.spiritualPower) html += `灵力+${item.reward.spiritualPower} `;
                    if (item.reward.breakthroughProgress) html += `突破进度+${item.reward.breakthroughProgress}% `;
                }
                html += `</div>`;
                html += `<div class="cost-info">费用: ${item.cost.contribution} 贡献度</div>`;
                html += `<button class="btn btn-primary" onclick="buySectItem('${id}')" ${!canBuy ? 'disabled' : ''}>`;
                html += `兑换`;
                html += `</button>`;
                html += `</div>`;
            }
            
            // 关闭网格布局容器
            html += '</div>';
            
            html += `</div>`; // 结束商店内容div
            
            html += `</div>`; // 结束商店外层div
            
            // 拜师系统
            if (gameData.masterLevel === 0 && gameData.player.realm >= 1) {
                html += `<div style="margin-bottom: 25px;">`;
                const masterCollapsed = gameData.collapsedCategories.hasOwnProperty('sect_master') 
                    ? gameData.collapsedCategories['sect_master'] 
                    : false; // 默认展开
                html += `<div style="font-size: 14px; font-weight: 600; color: #2c3e50; margin-bottom: 10px; padding: 8px; background: #f8f9fa; border-radius: 4px; cursor: pointer; display: flex; justify-content: space-between;" 
                         onclick="toggleCategory('sect_master')">`;
                html += `<span>拜师学艺</span>`;
                html += `<span style="font-size: 12px; color: #95a5a6;" id="sect_master_toggle">${masterCollapsed ? '▼ 展开' : '▲ 折叠'}</span>`;
                html += `</div>`;
                
                html += `<div id="sect_master_content" style="display: ${masterCollapsed ? 'none' : 'block'};">`;
                    html += `<div class="facility-item" style="background: #f0f9ff;">`;
                    html += `<div class="facility-name">拜师入门</div>`;
                    html += `<div class="facility-desc">拜一位前辈为师，获得修炼指导</div>`;
                    html += `<div class="facility-benefit">• 灵力获取永久+15% • 可接取更多任务</div>`;
                    html += `<div class="cost-info">费用: 100 贡献度</div>`;
                    html += `<button class="btn btn-success" onclick="worshipMaster()" ${gameData.sectContribution < 100 ? 'disabled' : ''}>`;
                    html += `拜师`;
                    html += `</button>`;
                    html += `</div>`;
                
                html += `</div>`; // 结束拜师内容div
                html += `</div>`; // 结束拜师外层div
            }
            
            // 收徒系统
            if (gameData.player.realm >= 3) {
                html += `<div style="margin-bottom: 25px;">`;
                const discipleCollapsed = gameData.collapsedCategories.hasOwnProperty('sect_disciple') 
                    ? gameData.collapsedCategories['sect_disciple'] 
                    : false; // 默认展开
                html += `<div style="font-size: 14px; font-weight: 600; color: #2c3e50; margin-bottom: 10px; padding: 8px; background: #f8f9fa; border-radius: 4px; cursor: pointer; display: flex; justify-content: space-between;" 
                         onclick="toggleCategory('sect_disciple')">`;
                html += `<span>收徒传艺</span>`;
                html += `<span style="font-size: 12px; color: #95a5a6;" id="sect_disciple_toggle">${discipleCollapsed ? '▼ 展开' : '▲ 折叠'}</span>`;
                html += `</div>`;
                
                html += `<div id="sect_disciple_content" style="display: ${discipleCollapsed ? 'none' : 'block'};">`;
                    html += `<div class="facility-item">`;
                    html += `<div class="facility-name">收徒 (${gameData.disciples.length}/3)</div>`;
                    html += `<div class="facility-desc">收徒弟可以获得持续的贡献度产出</div>`;
                    html += `<div class="facility-benefit">每位徒弟：每小时+5贡献度</div>`;
                    html += `<div class="cost-info">费用: 200 贡献度</div>`;
                    html += `<button class="btn btn-primary" onclick="acceptDisciple()" ${gameData.sectContribution < 200 || gameData.disciples.length >= 3 ? 'disabled' : ''}>`;
                    html += `收徒`;
                    html += `</button>`;
                    html += `</div>`;
                
                html += `</div>`; // 结束收徒内容div
                html += `</div>`; // 结束收徒外层div
            }
            
            // 门派竞技（战斗系统）
            if (gameData.player.realm >= 2) {
                html += `<div style="margin-bottom: 25px;">`;
                const battleCollapsed = gameData.collapsedCategories.hasOwnProperty('sect_battle') 
                    ? gameData.collapsedCategories['sect_battle'] 
                    : false; // 默认展开
                html += `<div style="font-size: 14px; font-weight: 600; color: #2c3e50; margin-bottom: 10px; padding: 8px; background: #f8f9fa; border-radius: 4px; cursor: pointer; display: flex; justify-content: space-between;" 
                         onclick="toggleCategory('sect_battle')">`;
                html += `<span>${getSvg('sword')} 门派竞技</span>`;
                html += `<span style="font-size: 12px; color: #95a5a6;" id="sect_battle_toggle">${battleCollapsed ? '▼ 展开' : '▲ 折叠'}</span>`;
                html += `</div>`;
                
                html += `<div id="sect_battle_content" style="display: ${battleCollapsed ? 'none' : 'block'};">`;
                    html += `<div class="facility-item" style="background: #fff3e0; border-color: #ff9800;">`;
                    html += `<div class="facility-name">${getSvg('sword')} 门派大比</div>`;
                    html += `<div class="facility-desc">与其他弟子切磋，获得丰厚奖励</div>`;
                    html += `<div class="facility-benefit">`;
                    html += `• 胜利：贡献度+30，灵石+300<br>`;
                    html += `• 平局：贡献度+10，灵石+100<br>`;
                    html += `• 失败：贡献度+5`;
                    html += `</div>`;
                    html += `<div class="cost-info">消耗: 500灵力</div>`;
                    html += `<button class="btn btn-success" onclick="startSectBattle()" ${gameData.player.spiritualPower < 500 ? 'disabled' : ''}>`;
                    html += `参加比武`;
                    html += `</button>`;
                    html += `</div>`;
                
                html += `</div>`; // 结束竞技内容div
                html += `</div>`; // 结束竞技外层div
            }
            
            container.innerHTML = html;
        }

        // 门派竞技战斗
        function startSectBattle() {
            if (gameData.player.spiritualPower < 500) {
                addLog('灵力不足，无法参加比武（需要500灵力）');
                return;
            }
            
            gameData.player.spiritualPower -= 500;
            
            // 显示战斗界面
            showBattleScreen();
        }

        // 显示战斗界面
        function showBattleScreen() {
            const battleModal = document.createElement('div');
            battleModal.id = 'battleModal';
            battleModal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.92);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2000;
                backdrop-filter: blur(5px);
            `;
            
            const battleCard = document.createElement('div');
            battleCard.style.cssText = `
                background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
                padding: 20px;
                border-radius: 8px;
                max-width: 600px;
                width: 90%;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                border: 1px solid rgba(0,0,0,0.1);
            `;
            
            // 计算双方战斗力
            let playerPower = gameData.player.realm * 100 + gameData.player.realmLevel * 10;
            playerPower += gameData.facilities.library * 5;
            playerPower += gameData.sectContribution * 0.5;
            if (gameData.masterLevel > 0) playerPower += 50;
            playerPower += gameData.disciples.length * 20;
            
            // 装备加成战斗力
            for (let slot in gameData.equipment) {
                if (gameData.equipment[slot]) {
                    playerPower += 30;
                }
            }
            
            // 法宝加成
            playerPower += gameData.artifacts.length * 15;
            
            const enemyPower = Math.floor(playerPower * (0.7 + Math.random() * 0.6));
            
            let html = '';
            html += `<div style="text-align: center; margin-bottom: 20px;">`;
            html += `<h2 style="font-size: 20px; color: #2c3e50; margin: 0; font-weight: 500; letter-spacing: 2px;">门派大比</h2>`;
            html += `</div>`;
            
            // 战斗双方展示区域 - 紧凑布局
            html += `<div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 15px; margin-bottom: 15px; align-items: stretch;">`;
            
            // 玩家侧
            html += `<div style="background: linear-gradient(135deg, rgba(33,150,243,0.05), rgba(100,181,246,0.05)); border: 1px solid rgba(33,150,243,0.3); border-radius: 6px; padding: 15px;">`;
            html += `<div style="text-align: center; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid rgba(0,0,0,0.1);">`;
            html += `<div style="font-size: 10px; color: #2196f3; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">PLAYER</div>`;
            html += `<div style="font-size: 14px; font-weight: 500; color: #2c3e50; margin-bottom: 3px;">${realms[gameData.player.realm].name}</div>`;
            html += `<div style="font-size: 10px; color: #7f8c8d;">第 ${gameData.player.realmLevel} 层</div>`;
            html += `</div>`;
            
            // 玩家血条
            html += `<div style="margin-bottom: 12px;">`;
            html += `<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">`;
            html += `<span style="font-size: 10px; color: #7f8c8d; letter-spacing: 1px;">气血值</span>`;
            html += `<span id="playerHpText" style="font-size: 11px; color: #2196f3; font-weight: 600; font-family: monospace;">100/100</span>`;
            html += `</div>`;
            html += `<div style="background: #e9ecef; height: 6px; border-radius: 3px; overflow: hidden;">`;
            html += `<div id="playerHpBar" style="width: 100%; height: 100%; background: linear-gradient(90deg, #2196f3, #64b5f6); transition: all 0.3s ease;"></div>`;
            html += `</div>`;
            html += `</div>`;
            
            // 玩家战力
            html += `<div style="text-align: center; background: rgba(33,150,243,0.1); padding: 10px; border-radius: 4px;">`;
            html += `<div style="font-size: 9px; color: #7f8c8d; margin-bottom: 3px; letter-spacing: 1px;">POWER</div>`;
            html += `<div style="font-size: 18px; font-weight: 600; color: #2196f3; font-family: monospace;">${playerPower}</div>`;
            html += `</div>`;
            html += `</div>`;
            
            // VS 标识
            html += `<div style="display: flex; align-items: center; justify-content: center; min-width: 50px;">`;
            html += `<div style="width: 40px; height: 40px; border: 2px solid #e9ecef; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: #f8f9fa;">`;
            html += `<span style="font-size: 12px; font-weight: 500; color: #6c757d; letter-spacing: 1px;">VS</span>`;
            html += `</div>`;
            html += `</div>`;
            
            // 对手侧
            html += `<div style="background: linear-gradient(135deg, rgba(244,67,54,0.05), rgba(239,83,80,0.05)); border: 1px solid rgba(244,67,54,0.3); border-radius: 6px; padding: 15px;">`;
            html += `<div style="text-align: center; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid rgba(0,0,0,0.1);">`;
            html += `<div style="font-size: 10px; color: #f44336; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">OPPONENT</div>`;
            html += `<div style="font-size: 14px; font-weight: 500; color: #2c3e50; margin-bottom: 3px;">同门弟子</div>`;
            html += `<div style="font-size: 10px; color: #7f8c8d;">同境界修士</div>`;
            html += `</div>`;
            
            // 对手血条
            html += `<div style="margin-bottom: 12px;">`;
            html += `<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">`;
            html += `<span style="font-size: 10px; color: #7f8c8d; letter-spacing: 1px;">气血值</span>`;
            html += `<span id="enemyHpText" style="font-size: 11px; color: #f44336; font-weight: 600; font-family: monospace;">100/100</span>`;
            html += `</div>`;
            html += `<div style="background: #e9ecef; height: 6px; border-radius: 3px; overflow: hidden;">`;
            html += `<div id="enemyHpBar" style="width: 100%; height: 100%; background: linear-gradient(90deg, #f44336, #e57373); transition: all 0.3s ease;"></div>`;
            html += `</div>`;
            html += `</div>`;
            
            // 对手战力
            html += `<div style="text-align: center; background: rgba(244,67,54,0.1); padding: 10px; border-radius: 4px;">`;
            html += `<div style="font-size: 9px; color: #7f8c8d; margin-bottom: 3px; letter-spacing: 1px;">POWER</div>`;
            html += `<div style="font-size: 18px; font-weight: 600; color: #f44336; font-family: monospace;">${enemyPower}</div>`;
            html += `</div>`;
            html += `</div>`;
            
            html += `</div>`;
            
            // 战斗统计面板
            html += `<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 15px;">`;
            html += `<div style="background: #f8f9fa; padding: 12px; border-radius: 4px; text-align: center; border: 1px solid #e9ecef;">`;
            html += `<div style="font-size: 9px; color: #7f8c8d; margin-bottom: 5px; letter-spacing: 1px; text-transform: uppercase;">Round</div>`;
            html += `<div id="roundCount" style="font-size: 16px; font-weight: 600; color: #2c3e50; font-family: monospace;">0</div>`;
            html += `</div>`;
            html += `<div style="background: #f8f9fa; padding: 12px; border-radius: 4px; text-align: center; border: 1px solid #e9ecef;">`;
            html += `<div style="font-size: 9px; color: #7f8c8d; margin-bottom: 5px; letter-spacing: 1px; text-transform: uppercase;">Damage</div>`;
            html += `<div id="playerTotalDamage" style="font-size: 16px; font-weight: 600; color: #2196f3; font-family: monospace;">0</div>`;
            html += `</div>`;
            html += `<div style="background: #f8f9fa; padding: 12px; border-radius: 4px; text-align: center; border: 1px solid #e9ecef;">`;
            html += `<div style="font-size: 9px; color: #7f8c8d; margin-bottom: 5px; letter-spacing: 1px; text-transform: uppercase;">Taken</div>`;
            html += `<div id="playerTotalReceived" style="font-size: 16px; font-weight: 600; color: #f44336; font-family: monospace;">0</div>`;
            html += `</div>`;
            html += `</div>`;
            
            // 战斗日志区域
            html += `<div style="margin-bottom: 15px;">`;
            html += `<div style="font-size: 10px; color: #7f8c8d; margin-bottom: 8px; letter-spacing: 1px; text-transform: uppercase; padding-left: 2px;">Battle Log</div>`;
            html += `<div id="battleLog" style="background: #f8f9fa; padding: 12px; border-radius: 4px; height: 120px; overflow-y: auto; border: 1px solid #e9ecef; font-family: 'Courier New', monospace; font-size: 11px;">`;
            html += `<div style="text-align: center; color: #95a5a6; padding: 20px 0;">等待战斗开始...</div>`;
            html += `</div>`;
            html += `</div>`;
            
            html += `<button class="btn btn-primary" id="startBattleBtn" onclick="executeBattle(${playerPower}, ${enemyPower})" style="width: 100%; padding: 12px; font-size: 12px; font-weight: 500; background: #2196f3; border: 1px solid #2196f3; color: white; border-radius: 4px; transition: all 0.3s;">开始战斗</button>`;
            
            // 添加动画样式
            html += `<style>
                #startBattleBtn:hover:not(:disabled) {
                    background: #1976d2;
                    transform: translateY(-1px);
                    box-shadow: 0 2px 8px rgba(33,150,243,0.3);
                }
                #battleLog::-webkit-scrollbar {
                    width: 4px;
                }
                #battleLog::-webkit-scrollbar-track {
                    background: #e9ecef;
                    border-radius: 2px;
                }
                #battleLog::-webkit-scrollbar-thumb {
                    background: #adb5bd;
                    border-radius: 2px;
                }
                #battleLog::-webkit-scrollbar-thumb:hover {
                    background: #6c757d;
                }
            </style>`;
            
            battleCard.innerHTML = html;
            battleModal.appendChild(battleCard);
            document.body.appendChild(battleModal);
        }

        // 执行战斗
        function executeBattle(playerPower, enemyPower) {
            document.getElementById('startBattleBtn').disabled = true;
            document.getElementById('startBattleBtn').textContent = '战斗中...';
            
            const battleLog = document.getElementById('battleLog');
            battleLog.innerHTML = '';
            
            let playerHp = 100;
            let enemyHp = 100;
            let round = 1;
            let playerTotalDamage = 0;
            let playerTotalReceived = 0;
            
            // 更新血条函数（平滑插值）
            function updateHpBar(target, currentHp, maxHp) {
                const hpBar = document.getElementById(target + 'HpBar');
                const hpText = document.getElementById(target + 'HpText');
                if (!hpBar || !hpText) return;
                const fromHp = Number(hpBar.dataset.currentHp || maxHp);
                const toHp = Math.max(0, currentHp);
                const duration = 400; // ms
                const steps = 20;
                const stepTime = Math.max(16, Math.floor(duration / steps));
                const delta = (toHp - fromHp) / steps;
                let i = 0;
                clearInterval(hpBar._animTimer);
                hpBar._animTimer = setInterval(() => {
                    i++;
                    const nowHp = i >= steps ? toHp : fromHp + delta * i;
                    const percentage = Math.max(0, (nowHp / maxHp) * 100);
                    hpBar.style.width = percentage + '%';
                    hpText.textContent = Math.max(0, Math.floor(nowHp)) + '/' + maxHp;
                    if (target === 'player') {
                        if (percentage > 60) {
                            hpBar.style.background = 'linear-gradient(90deg, #2196f3, #64b5f6)';
                            hpText.style.color = '#2196f3';
                        } else if (percentage > 30) {
                            hpBar.style.background = 'linear-gradient(90deg, #ff9800, #ffb74d)';
                            hpText.style.color = '#ff9800';
                        } else {
                            hpBar.style.background = 'linear-gradient(90deg, #f44336, #e57373)';
                            hpText.style.color = '#f44336';
                        }
                    } else {
                        if (percentage > 60) {
                            hpBar.style.background = 'linear-gradient(90deg, #f44336, #e57373)';
                            hpText.style.color = '#f44336';
                        } else if (percentage > 30) {
                            hpBar.style.background = 'linear-gradient(90deg, #ff9800, #ffb74d)';
                            hpText.style.color = '#ff9800';
                        } else {
                            hpBar.style.background = 'linear-gradient(90deg, #d32f2f, #f44336)';
                            hpText.style.color = '#d32f2f';
                        }
                    }
                    if (i >= steps) {
                        clearInterval(hpBar._animTimer);
                        hpBar.dataset.currentHp = String(toHp);
                    }
                }, stepTime);
            }
            
            // 显示伤害数字动画
            function showDamageNumber(damage, isCritical, target) {
                const modal = document.getElementById('battleModal');
                if (!modal) return;
                const float = document.createElement('div');
                const color = target === 'enemy' ? '#f44336' : '#2196f3';
                float.textContent = (isCritical ? '暴击 ' : '') + '-' + damage;
                float.style.cssText = `
                    position: absolute;
                    pointer-events: none;
                    z-index: 2101;
                    color: ${color};
                    font-weight: 800;
                    text-shadow: 0 1px 0 rgba(0,0,0,0.15);
                    transition: transform 0.8s ease, opacity 0.8s ease;
                    opacity: 1;
                `;
                const rect = modal.getBoundingClientRect();
                const baseX = target === 'enemy' ? rect.right - 220 : rect.left + 220;
                const baseY = rect.top + 180 + Math.random() * 60;
                float.style.left = baseX + 'px';
                float.style.top = baseY + 'px';
                document.body.appendChild(float);
                // 下一帧启动动画
                requestAnimationFrame(() => {
                    float.style.transform = 'translateY(-30px)';
                    float.style.opacity = '0';
                });
                setTimeout(() => float.remove(), 900);
            }
            
            // 更新统计信息
            function updateStats() {
                const roundEl = document.getElementById('roundCount');
                const damageEl = document.getElementById('playerTotalDamage');
                const receivedEl = document.getElementById('playerTotalReceived');
                
                if (roundEl) roundEl.textContent = round;
                if (damageEl) damageEl.textContent = playerTotalDamage;
                if (receivedEl) receivedEl.textContent = playerTotalReceived;
            }
            
            const battleInterval = setInterval(() => {
                // 随机暴击判定
                const playerCritical = Math.random() < 0.15;
                const enemyCritical = Math.random() < 0.15;
                
                // 玩家攻击
                let playerBaseDamage = Math.floor(10 + Math.random() * 10 + (playerPower - enemyPower) * 0.05);
                const playerDamage = playerCritical ? Math.floor(playerBaseDamage * 1.5) : playerBaseDamage;
                enemyHp -= playerDamage;
                showDamageNumber(playerDamage, playerCritical, 'enemy');
                playerTotalDamage += playerDamage;
                
                let log = `<div style="margin-bottom: 8px; padding: 8px; background: #f8f9fa; border-left: 2px solid #2196f3; border-radius: 3px;">`;
                log += `<div style="font-weight: 500; color: #6c757d; margin-bottom: 6px; font-size: 10px; letter-spacing: 1px;">ROUND ${round}</div>`;
                
                // 玩家攻击日志
                if (playerCritical) {
                    log += `<div style="font-size: 11px; color: #2c3e50; margin-bottom: 4px; line-height: 1.5;">`;
                    log += `<span style="color: #2196f3; font-weight: 600;">[暴击]</span> `;
                    log += `你 → 对手 <span style="color: #f44336; font-weight: 600; font-family: monospace;">${playerDamage}</span>`;
                    log += `</div>`;
                } else {
                    log += `<div style="font-size: 11px; color: #2c3e50; margin-bottom: 4px; line-height: 1.5;">`;
                    log += `<span style="color: #95a5a6;">[攻击]</span> `;
                    log += `你 → 对手 <span style="color: #2196f3; font-weight: 600; font-family: monospace;">${playerDamage}</span>`;
                    log += `</div>`;
                }
                
                // 更新对手血条
                updateHpBar('enemy', enemyHp, 100);
                
                if (enemyHp <= 0) {
                    log += `<div style="color: #2196f3; font-weight: 600; margin-top: 8px; font-size: 11px; padding: 6px; background: rgba(33,150,243,0.1); border-radius: 3px; text-align: center;">对手被击败</div>`;
                    log += `</div>`;
                    battleLog.innerHTML += log;
                    updateStats();
                    clearInterval(battleInterval);
                    setTimeout(() => endBattle('win'), 500);
                    return;
                }
                
                // 敌人攻击
                let enemyBaseDamage = Math.floor(10 + Math.random() * 10 + (enemyPower - playerPower) * 0.05);
                const enemyDamage = enemyCritical ? Math.floor(enemyBaseDamage * 1.5) : enemyBaseDamage;
                playerHp -= enemyDamage;
                showDamageNumber(enemyDamage, enemyCritical, 'player');
                playerTotalReceived += enemyDamage;
                
                // 敌人攻击日志
                if (enemyCritical) {
                    log += `<div style="font-size: 11px; color: #2c3e50; margin-bottom: 4px; line-height: 1.5;">`;
                    log += `<span style="color: #f44336; font-weight: 600;">[暴击]</span> `;
                    log += `对手 → 你 <span style="color: #f44336; font-weight: 600; font-family: monospace;">${enemyDamage}</span>`;
                    log += `</div>`;
                } else {
                    log += `<div style="font-size: 11px; color: #2c3e50; margin-bottom: 4px; line-height: 1.5;">`;
                    log += `<span style="color: #95a5a6;">[反击]</span> `;
                    log += `对手 → 你 <span style="color: #f44336; font-weight: 600; font-family: monospace;">${enemyDamage}</span>`;
                    log += `</div>`;
                }
                
                // 更新玩家血条
                updateHpBar('player', playerHp, 100);
                
                if (playerHp <= 0) {
                    log += `<div style="color: #f44336; font-weight: 600; margin-top: 8px; font-size: 11px; padding: 6px; background: rgba(244,67,54,0.1); border-radius: 3px; text-align: center;">你被击败了</div>`;
                    log += `</div>`;
                    battleLog.innerHTML += log;
                    updateStats();
                    clearInterval(battleInterval);
                    setTimeout(() => endBattle('lose'), 500);
                    return;
                }
                
                // 显示当前血量
                log += `<div style="font-size: 10px; color: #95a5a6; margin-top: 6px; padding-top: 6px; border-top: 1px solid #e9ecef; font-family: monospace;">`;
                log += `<span style="color: #2196f3;">${Math.max(0, Math.floor(playerHp))}</span> / `;
                log += `<span style="color: #f44336;">${Math.max(0, Math.floor(enemyHp))}</span>`;
                log += `</div>`;
                log += `</div>`;
                
                battleLog.innerHTML += log;
                battleLog.scrollTop = battleLog.scrollHeight;
                
                // 更新统计
                updateStats();
                
                round++;
                
                // 平局判定（15回合后比较剩余血量）
                if (round > 15) {
                    clearInterval(battleInterval);
                    setTimeout(() => {
                        if (playerHp > enemyHp) {
                            endBattle('win');
                        } else if (enemyHp > playerHp) {
                            endBattle('lose');
                        } else {
                            endBattle('draw');
                        }
                    }, 500);
                }
            }, 1000);
        }

        // 战斗结束
        function endBattle(result) {
            let rewardText = '';
            let rewardColor = '';
            
            if (result === 'win') {
                gameData.sectContribution += 30;
                gameData.player.spiritStone += 300;
                rewardText = `胜利！获得贡献度+30，灵石+300`;
                rewardColor = '#28a745';
                addLog(`门派大比胜利！贡献度+30，灵石+300`);
            } else if (result === 'draw') {
                gameData.sectContribution += 10;
                gameData.player.spiritStone += 100;
                rewardText = `平局！获得贡献度+10，灵石+100`;
                rewardColor = '#ffc107';
                addLog(`门派大比平局，贡献度+10，灵石+100`);
            } else {
                gameData.sectContribution += 5;
                rewardText = `失败...获得贡献度+5`;
                rewardColor = '#dc3545';
                addLog(`门派大比失败，但获得了经验，贡献度+5`);
            }
            
            setTimeout(() => {
                const battleLog = document.getElementById('battleLog');
                if (battleLog) {
                    battleLog.innerHTML += `
                        <div style="margin-top: 10px; padding: 12px; background: ${rewardColor}; color: white; border-radius: 4px; text-align: center; font-weight: 600; font-size: 12px;">
                            ${rewardText}
                        </div>
                    `;
                }
                
                const btn = document.getElementById('startBattleBtn');
                if (btn) {
                    btn.textContent = '关闭';
                    btn.disabled = false;
                    btn.style.background = '#6c757d';
                    btn.style.borderColor = '#6c757d';
                    btn.onclick = () => {
                        const modal = document.getElementById('battleModal');
                        if (modal) modal.remove();
                        renderSectContent();
                        updateUI();
                    };
                }
            }, 1000);
        }

        // 开始门派任务
        function startSectTask(taskId) {
            const task = sectTasks[taskId];
            if (!task) {
                console.error('任务不存在:', taskId);
                return;
            }
            
            // 计算当前任务槽位上限（每3个境界+1槽）
            const maxSlots = 1 + Math.floor(gameData.player.realm / 3);
            gameData.maxSectTaskSlots = maxSlots;
            
            // 检查任务槽位是否已满
            if (gameData.currentSectTasks.length >= maxSlots) {
                addLog('任务槽位已满，请等待任务完成');
                return;
            }
            
            // 检查消耗
            if (task.cost) {
                if (task.cost.spiritualPower && gameData.player.spiritualPower < task.cost.spiritualPower) {
                    addLog('灵力不足，无法接取任务');
                    return;
                }
                if (task.cost.spiritStone && gameData.player.spiritStone < task.cost.spiritStone) {
                    addLog('灵石不足，无法接取任务');
                    return;
                }
            }
            
            // 扣除消耗
            if (task.cost) {
                if (task.cost.spiritualPower) gameData.player.spiritualPower -= task.cost.spiritualPower;
                if (task.cost.spiritStone) gameData.player.spiritStone -= task.cost.spiritStone;
            }
            
            // 计算境界加速：每个境界减少8%时长，最低保留20%
            const realmSpeedBonus = 1 - (gameData.player.realm * 0.08);
            const speedMultiplier = Math.max(0.2, realmSpeedBonus);
            const actualDuration = Math.ceil(task.duration * speedMultiplier);
            
            // 添加任务到队列
            const taskData = {
                taskId: taskId,
                endTime: Date.now() + (actualDuration * 1000),
                startTime: Date.now()
            };
            gameData.currentSectTasks.push(taskData);
            
            // 显示加速信息
            const speedPercent = Math.round((1 - speedMultiplier) * 100);
            const speedInfo = speedPercent > 0 ? ` <span style="color: #2ecc71;">(境界加速 -${speedPercent}%)</span>` : '';
            const slotInfo = ` <span style="color: #95a5a6;">[${gameData.currentSectTasks.length}/${maxSlots}]</span>`;
            addLog(`✓ 接取门派任务：${task.name}${speedInfo}${slotInfo}`);
            renderSectContent();
            updateUI();
        }

        // 完成门派任务（支持通过索引或任务ID完成）
        function completeSectTask(taskIndexOrId) {
            let taskData = null;
            let taskIndex = -1;
            
            // 如果传入的是数字，视为索引；否则视为任务ID
            if (typeof taskIndexOrId === 'number') {
                taskIndex = taskIndexOrId;
                taskData = gameData.currentSectTasks[taskIndex];
            } else if (typeof taskIndexOrId === 'string') {
                taskIndex = gameData.currentSectTasks.findIndex(t => t.taskId === taskIndexOrId);
                taskData = gameData.currentSectTasks[taskIndex];
            } else {
                // 没有参数时，完成第一个到期的任务
                const now = Date.now();
                for (let i = 0; i < gameData.currentSectTasks.length; i++) {
                    if (gameData.currentSectTasks[i].endTime <= now) {
                        taskIndex = i;
                        taskData = gameData.currentSectTasks[i];
                        break;
                    }
                }
            }
            
            if (!taskData || taskIndex === -1) {
                console.error('未找到要完成的任务');
                return;
            }
            
            const task = sectTasks[taskData.taskId];
            if (!task) {
                console.error('任务不存在:', taskData.taskId);
                gameData.currentSectTasks.splice(taskIndex, 1);
                return;
            }
            
            // 发放奖励
            if (task.rewards) {
                if (task.rewards.contribution) {
                    gameData.sectContribution += task.rewards.contribution;
                }
                if (task.rewards.spiritStone) {
                    gameData.player.spiritStone += task.rewards.spiritStone;
                }
                if (task.rewards.pills) {
                    gameData.player.pills += task.rewards.pills;
                }
                if (task.rewards.spiritualPower) {
                    gameData.player.spiritualPower += task.rewards.spiritualPower;
                }
                if (task.rewards.breakthroughProgress) {
                    gameData.player.breakthroughProgress += task.rewards.breakthroughProgress;
                    if (gameData.player.breakthroughProgress >= 100) {
                        gameData.player.breakthroughProgress = 100;
                    }
                }
                if (task.rewards.allBonus) {
                    // 全属性加成暂时加到突破进度上
                    gameData.player.breakthroughProgress += task.rewards.allBonus * 50;
                    if (gameData.player.breakthroughProgress >= 100) {
                        gameData.player.breakthroughProgress = 100;
                    }
                }
                if (task.rewards.facilityBonus) {
                    // 设施加成暂时加到突破进度上
                    gameData.player.breakthroughProgress += task.rewards.facilityBonus * 30;
                    if (gameData.player.breakthroughProgress >= 100) {
                        gameData.player.breakthroughProgress = 100;
                    }
                }
            }
            
            // 根据贡献度解锁更多门派NPC
            if (typeof unlockSectNPCsByContribution === 'function') {
                unlockSectNPCsByContribution();
            }
            
            // 阵营冲突处理
            if (task.warning && typeof updateNPCRelationships === 'function') {
                handleSectTaskFactionConflict(task);
            }
            
            addLog(`<span class="log-success">✓ 完成门派任务：${task.name}，贡献度+${task.rewards.contribution || 0}</span>`);
            
            // 从任务列表中移除
            gameData.currentSectTasks.splice(taskIndex, 1);
            
            renderSectContent();
            updateUI();
        }
        
        // 处理门派任务的阵营冲突
        function handleSectTaskFactionConflict(task) {
            if (!gameData.npcRelationships) return;
            
            // 获取玩家当前门派
            const playerSect = gameData.sect;
            if (!playerSect) return;
            
            // 定义阵营分类
            const righteousSects = ['sword_sect', 'pill_sect', 'formation_sect', 'buddhist_sect'];
            const evilSects = ['demon_sect', 'evil_cult', 'blood_sect'];
            const neutralSects = ['taoist_sect', 'merchant_guild', 'rogue'];
            
            // 判断玩家阵营
            let playerFaction = 'neutral';
            if (righteousSects.includes(playerSect)) {
                playerFaction = 'righteous';
            } else if (evilSects.includes(playerSect)) {
                playerFaction = 'evil';
            }
            
            // 根据任务类型和玩家阵营影响NPC关系
            for (let npcId in gameData.npcRelationships) {
                const npcData = gameData.npcRelationships[npcId];
                const npcConfig = relationshipNPCs[npcId];
                if (!npcConfig) continue;
                
                const npcSect = npcConfig.sect;
                let npcFaction = 'neutral';
                if (righteousSects.includes(npcSect)) {
                    npcFaction = 'righteous';
                } else if (evilSects.includes(npcSect)) {
                    npcFaction = 'evil';
                }
                
                // 计算关系变化
                let favorChange = 0;
                let loyaltyChange = 0;
                
                // 正派NPC对反派行为的反应
                if (npcFaction === 'righteous' && playerFaction === 'evil') {
                    if (task.warning.includes('魔道') || task.warning.includes('邪恶') || task.warning.includes('血煞')) {
                        favorChange = -15;
                        loyaltyChange = -10;
                    }
                }
                
                // 反派NPC对正派行为的反应
                if (npcFaction === 'evil' && playerFaction === 'righteous') {
                    if (task.name.includes('斩妖') || task.name.includes('除魔') || task.name.includes('普度')) {
                        favorChange = -10;
                        loyaltyChange = -5;
                    }
                }
                
                // 应用关系变化
                if (favorChange !== 0) {
                    npcData.favor = Math.max(0, Math.min(100, npcData.favor + favorChange));
                    npcData.loyalty = Math.max(0, Math.min(100, npcData.loyalty + loyaltyChange));
                    
                    // 记录日志
                    const changeText = favorChange > 0 ? `+${favorChange}` : `${favorChange}`;
                    const npcName = npcConfig.name;
                    const sectName = npcConfig.sect === 'sword' ? '剑宗' : 
                                    npcConfig.sect === 'alchemy' ? '丹宗' :
                                    npcConfig.sect === 'formation' ? '阵宗' :
                                    npcConfig.sect === 'buddhist' ? '佛宗' :
                                    npcConfig.sect === 'taoist' ? '道宗' :
                                    npcConfig.sect === 'demon' ? '魔宗' :
                                    npcConfig.sect === 'evil_cult' ? '邪教' :
                                    npcConfig.sect === 'blood_sect' ? '血煞门' :
                                    npcConfig.sect === 'merchant' ? '商会' : npcConfig.sect;
                    
                    if (favorChange < 0) {
                        addLog(`<span class="log-warning">${getSvg('alert')} ${sectName}的${npcName}对你的好感下降了${Math.abs(favorChange)}点</span>`);
                    } else if (favorChange > 0) {
                        addLog(`<span class="log-success">✓ ${sectName}的${npcName}对你的好感上升了${favorChange}点</span>`);
                    }
                }
            }
        }

        // 购买门派商店物品
        function buySectItem(itemId) {
            const item = sectShop[itemId];
            if (!item) {
                console.error('商品不存在:', itemId);
                return;
            }
            
            if (gameData.sectContribution >= item.cost.contribution) {
                gameData.sectContribution -= item.cost.contribution;
                
                // 发放奖励
                let rewardText = '';
                if (item.reward.pills) {
                    gameData.player.pills += item.reward.pills;
                    rewardText += `丹药+${item.reward.pills} `;
                }
                if (item.reward.spiritStone) {
                    gameData.player.spiritStone += item.reward.spiritStone;
                    rewardText += `灵石+${item.reward.spiritStone} `;
                }
                if (item.reward.spiritualPower) {
                    gameData.player.spiritualPower += item.reward.spiritualPower;
                    rewardText += `灵力+${item.reward.spiritualPower} `;
                }
                if (item.reward.breakthroughProgress) {
                    gameData.player.breakthroughProgress = Math.min(100, 
                        gameData.player.breakthroughProgress + item.reward.breakthroughProgress);
                    rewardText += `突破进度+${item.reward.breakthroughProgress}% `;
                }
                
                addLog(`<span class="log-success">兑换${item.name}：${rewardText}</span>`);
                renderSectContent();
                updateUI();
            }
        }

        // 拜师
        function worshipMaster() {
            if (!gameData.sectContribution) gameData.sectContribution = 0;
            
            if (gameData.sectContribution >= 100) {
                gameData.sectContribution -= 100;
                gameData.masterLevel = 1;
                addLog(`<span class="log-success">🎓 你拜入师门，师尊开始传授修炼心得！灵力获取永久+15%</span>`);
                renderSectContent();
                updateUI();
            } else {
                addLog('贡献度不足，无法拜师（需要100贡献度）');
            }
        }

        // 收徒
        function acceptDisciple() {
            if (!gameData.disciples) gameData.disciples = [];
            if (!gameData.sectContribution) gameData.sectContribution = 0;
            
            if (gameData.disciples.length >= 3) {
                addLog('徒弟已满（最多3人）');
                return;
            }
            
            if (gameData.sectContribution >= 200) {
                gameData.sectContribution -= 200;
                const discipleName = `弟子${gameData.disciples.length + 1}号`;
                gameData.disciples.push({
                    name: discipleName,
                    joinTime: Date.now()
                });
                addLog(`<span class="log-success">👨‍🎓 收徒成功：${discipleName}（每小时+5贡献度）</span>`);
                renderSectContent();
                updateUI();
            } else {
                addLog('贡献度不足，无法收徒（需要200贡献度）');
            }
        }

        // 自动游戏逻辑
        function autoPlay() {
            // 自动使用丹药（根据设置）
            if (gameData.autoSettings.autoPill && gameData.player.pills > 0) {
                const threshold = gameData.autoSettings.pillThreshold || 80;
                if (gameData.player.breakthroughProgress < threshold) {
                    usePill();
                }
            }
            
            // 自动突破（根据设置）
            if (gameData.autoSettings.autoBreakthrough && gameData.player.breakthroughProgress >= 100) {
                breakthrough();
            }
            
            // 自动升级设施（根据设置）
            if (gameData.autoSettings.autoUpgrade) {
                autoUpgradeFacilities();
            }
            
            // 自动门派任务（根据设置）
            if (gameData.autoSettings.autoSectTask && gameData.sect) {
                const maxSlots = 1 + Math.floor(gameData.player.realm / 3);
                if (!gameData.currentSectTasks || gameData.currentSectTasks.length < maxSlots) {
                    autoAcceptSectTask();
                }
            }
        }

        // 自动升级设施
        function autoUpgradeFacilities() {
            // 优先级：灵脉 > 丹房 > 藏经阁 > 其他
            const priority = ['spiritualVein', 'pillRoom', 'library', 'artifactRoom', 'spiritualField'];
            
            for (let facilityId of priority) {
                const facility = facilitiesData[facilityId];
                if (!facility) continue;
                
                // 检查飞升解锁
                if (facility.requiredAscension && gameData.ascensionCount < facility.requiredAscension) continue;
                
                const level = gameData.facilities[facilityId] || 0;
                const cost = Math.floor(facility.baseCost * Math.pow(facility.costMultiplier, level));
                
                // 修复：检查灵力而不是灵石
                if (gameData.player.spiritualPower >= cost) {
                    upgradeFacility(facilityId);
                    break; // 每次只升级一个
                }
            }
        }

        // 自动接取门派任务
        function autoAcceptSectTask() {
            if (!gameData.sect) return;
            
            const sect = sects[gameData.sect];
            if (!sect || !sect.tasks) return;
            
            // 计算最大槽位
            const maxSlots = 1 + Math.floor(gameData.player.realm / 3);
            
            // 循环接取任务直到槽位满
            while (gameData.currentSectTasks.length < maxSlots) {
                let taskAccepted = false;
                
                // 遍历所有任务，选择第一个可以接取的
                for (let taskId of sect.tasks) {
                    const task = sectTasks[taskId];
                    if (!task) continue;
                    
                    // 检查消耗
                    let canAccept = true;
                    if (task.cost) {
                        if (task.cost.spiritualPower && gameData.player.spiritualPower < task.cost.spiritualPower) {
                            canAccept = false;
                        }
                        if (task.cost.spiritStone && gameData.player.spiritStone < task.cost.spiritStone) {
                            canAccept = false;
                        }
                    }
                    
                    if (canAccept) {
                        startSectTask(taskId);
                        taskAccepted = true;
                        break;
                    }
                }
                
                // 如果没有可接取的任务，退出循环
                if (!taskAccepted) break;
            }
        }

        // 升级设施
        function upgradeFacility(facilityId) {
            const facility = facilitiesData[facilityId];
            if (!facility) {
                console.error('设施不存在:', facilityId);
                return;
            }
            
            // 确保设施等级存在
            if (gameData.facilities[facilityId] === undefined) {
                gameData.facilities[facilityId] = 0;
            }
            
            const currentLevel = gameData.facilities[facilityId];
            const cost = Math.floor(facility.baseCost * Math.pow(facility.costMultiplier, currentLevel));
            
            if (gameData.player.spiritualPower >= cost) {
                gameData.player.spiritualPower -= cost;
                gameData.facilities[facilityId]++;
                addLog(`${facility.name} 升级至 ${gameData.facilities[facilityId]} 级`);
                renderFacilities();
                updateUI();
            }
        }

        // 所有系统统一使用多列网格布局

        // 渲染设施列表
        function renderFacilities() {
            const container = document.getElementById('facilitiesList');
            
            // 设施分类
            const categories = {
                basic: {
                    name: '基础设施',
                    icon: '🏠',
                    svgIcon: 'home',
                    facilities: ['spiritualVein', 'pillRoom', 'library'],
                    defaultCollapsed: false
                },
                advanced: {
                    name: '高级设施',
                    icon: '⚡',
                    svgIcon: 'bolt',
                    facilities: ['artifactRoom', 'spiritualField'],
                    defaultCollapsed: false
                },
                immortal: {
                    name: '仙界设施',
                    icon: '⭐',
                    svgIcon: 'star',
                    facilities: ['immortalPond', 'celestialTree'],
                    defaultCollapsed: false
                }
            };
            
            let html = '';
            
            // 渲染每个分类
            for (let catId in categories) {
                const category = categories[catId];
                const categoryKey = `facility_${catId}`;
                const isCollapsed = gameData.collapsedCategories.hasOwnProperty(categoryKey) 
                    ? gameData.collapsedCategories[categoryKey] 
                    : category.defaultCollapsed;
                
                // 分类标题
                html += `<div class="facility-category" onclick="toggleCategory('${categoryKey}')">`;
                html += `<span>${getSvg(category.svgIcon || 'box')} ${category.name}</span>`;
                html += `<span class="facility-category-toggle" id="${categoryKey}_toggle">${isCollapsed ? '▼ 展开' : '▲ 折叠'}</span>`;
                html += `</div>`;
                
                // 分类内容 - 统一使用网格布局
                html += `<div id="${categoryKey}_content" class="facilities-list" style="display: ${isCollapsed ? 'none' : 'grid'};">`;
                    for (let facilityId of category.facilities) {
                        const facility = facilitiesData[facilityId];
                        if (!facility) continue;
                        
                        const level = gameData.facilities[facilityId] || 0;
                        
                        // 检查飞升解锁
                        if (facility.requiredAscension && gameData.ascensionCount < facility.requiredAscension && level === 0) {
                            html += `<div class="facility-item" style="opacity: 0.5;">`;
                            html += `<div class="facility-header">`;
                            html += `<span class="facility-name">🔒 ${facility.name}</span>`;
                            html += `<span class="facility-level">未解锁</span>`;
                            html += `</div>`;
                            html += `<div class="facility-desc">${facility.desc}</div>`;
                            html += `<div class="facility-benefit">需要飞升${facility.requiredAscension}次</div>`;
                            html += `</div>`;
                            continue;
                        }
                        
                        const cost = Math.floor(facility.baseCost * Math.pow(facility.costMultiplier, level));
                        const canAfford = gameData.player.spiritualPower >= cost;
                        
                        // 统一使用网格布局
                        html += `<div class="facility-item">`;
                        html += `<div class="facility-header">`;
                        html += `<span class="facility-name">${facility.name}</span>`;
                        html += `<span class="facility-level">Lv.${level}</span>`;
                        html += `</div>`;
                        html += `<div class="facility-desc">${facility.desc}</div>`;
                        html += `<div class="facility-benefit">${facility.getBenefit(level)}</div>`;
                        html += `<div class="facility-cost">升级费用: ${formatNumber(cost)} 灵力</div>`;
                        html += `<button class="facility-upgrade-btn" onclick="upgradeFacility('${facilityId}')" ${!canAfford ? 'disabled' : ''}>升级</button>`;
                        html += `</div>`;
                    }
                
                html += `</div>`; // 结束分类内容div
            }
            
            container.innerHTML = html;
        }

        // 功法数据定义
        const techniquesData = {
            // === 基础功法（炼气期可修炼） ===
            basic: {
                name: '基础心法',
                desc: '最基础的修炼功法，平衡稳健',
                maxLevel: 10,
                baseCost: 100,
                costMultiplier: 1.6,
                category: 'basic',
                getBenefit: (level) => `灵力获取 +${(level * 15).toFixed(0)}%`
            },
            fire_path: {
                name: '火焰之道',
                desc: '以火之力淬炼灵力，提升修炼速度',
                maxLevel: 10,
                baseCost: 150,
                costMultiplier: 1.7,
                requiredRealm: 0,
                category: 'basic',
                getBenefit: (level) => `灵力获取 +${(level * 18).toFixed(0)}%`
            },
            water_path: {
                name: '水之心法',
                desc: '如水般绵延不绝，增强灵力恢复',
                maxLevel: 10,
                baseCost: 150,
                costMultiplier: 1.7,
                requiredRealm: 0,
                category: 'basic',
                getBenefit: (level) => `灵力获取 +${(level * 17).toFixed(0)}%`
            },
            body_refining: {
                name: '炼体诀',
                desc: '强化肉身，提升突破成功率',
                maxLevel: 10,
                baseCost: 200,
                costMultiplier: 1.8,
                requiredRealm: 0,
                category: 'basic',
                getBenefit: (level) => `灵力获取 +${(level * 12).toFixed(0)}%, 突破成功率 +${level * 2}%`
            },
            
            // === 进阶功法（筑基期以上） ===
            advanced: {
                name: '高级心法',
                desc: '更加高深的修炼之法',
                maxLevel: 10,
                baseCost: 1000,
                costMultiplier: 2,
                requiredRealm: 1, // 筑基期
                category: 'advanced',
                getBenefit: (level) => `灵力获取 +${(level * 25).toFixed(0)}%`
            },
            sword_intent: {
                name: '剑意心经',
                desc: '以剑入道，攻守兼备',
                maxLevel: 10,
                baseCost: 1500,
                costMultiplier: 2.1,
                requiredRealm: 1,
                category: 'advanced',
                getBenefit: (level) => `灵力获取 +${(level * 28).toFixed(0)}%`
            },
            spell_mastery: {
                name: '法术精通',
                desc: '掌控天地灵气，法力增幅',
                maxLevel: 10,
                baseCost: 1500,
                costMultiplier: 2.1,
                requiredRealm: 1,
                category: 'advanced',
                getBenefit: (level) => `灵力获取 +${(level * 27).toFixed(0)}%`
            },
            
            // === 顶级功法（金丹期以上） ===
            supreme: {
                name: '至尊功法',
                desc: '传说中的无上功法',
                maxLevel: 10,
                baseCost: 10000,
                costMultiplier: 2.5,
                requiredRealm: 2, // 金丹期
                category: 'supreme',
                getBenefit: (level) => `灵力获取 +${(level * 40).toFixed(0)}%`
            },
            heavenly_dao: {
                name: '天道玄功',
                desc: '领悟天道，与天地同寿',
                maxLevel: 10,
                baseCost: 15000,
                costMultiplier: 2.6,
                requiredRealm: 3, // 元婴期
                category: 'supreme',
                getBenefit: (level) => `灵力获取 +${(level * 45).toFixed(0)}%`
            },
            void_technique: {
                name: '虚空秘典',
                desc: '掌控虚空之力，超越凡俗',
                maxLevel: 10,
                baseCost: 25000,
                costMultiplier: 2.8,
                requiredRealm: 4, // 化神期
                category: 'supreme',
                getBenefit: (level) => `灵力获取 +${(level * 50).toFixed(0)}%`
            },
            
            // === 飞升功法（需要飞升后解锁） ===
            immortal_foundation: {
                name: '仙基心法',
                desc: '飞升后的全新修炼功法',
                maxLevel: 15,
                baseCost: 500,
                costMultiplier: 1.8,
                requiredAscension: 1, // 需要飞升1次
                category: 'ascension',
                getBenefit: (level) => `灵力获取 +${(level * 60).toFixed(0)}%`
            },
            celestial_power: {
                name: '仙元功',
                desc: '仙界传承的强大功法',
                maxLevel: 15,
                baseCost: 2000,
                costMultiplier: 2,
                requiredAscension: 3, // 需要飞升3次
                category: 'ascension',
                getBenefit: (level) => `灵力获取 +${(level * 80).toFixed(0)}%`
            },
            eternal_dao: {
                name: '永恒大道',
                desc: '超越时间的终极功法',
                maxLevel: 20,
                baseCost: 10000,
                costMultiplier: 2.5,
                requiredAscension: 5, // 需要飞升5次
                category: 'ascension',
                getBenefit: (level) => `灵力获取 +${(level * 100).toFixed(0)}%, 突破成功率 +${level}%`
            }
        };

        // 渲染功法
        function renderCultivation() {
            const container = document.getElementById('cultivationList');
            let html = '';
            
            // 五行属性选择区域
            if (gameData.player.realm >= 1) {
                html += `<div style="margin-bottom: 25px;">`;
                html += `<h3 style="font-size: 16px; margin-bottom: 15px;">${getSvg('flame')} 五行属性</h3>`;
                html += `<p style="font-size: 12px; color: #7f8c8d; margin-bottom: 15px;">`;
                html += `选择五行属性后获得永久加成。五行相生相克，影响战斗效果。`;
                html += `</p>`;
                
                const currentElement = gameData.player.element || 'none';
                
                if (currentElement === 'none') {
                    // 尚未选择属性
                    html += `<div class="elements-grid">`;
                    for (let elemId in elementsData) {
                        const elem = elementsData[elemId];
                        html += `<div class="facility-item" style="border-left: 4px solid ${elem.color}; cursor: pointer;" onclick="chooseElement('${elemId}')">`;
                        html += `<div class="facility-name" style="color: ${elem.color};">${elem.name}属性</div>`;
                        html += `<div class="facility-desc" style="font-size: 11px;">${elem.desc}</div>`;
                        html += `<div style="font-size: 11px; color: #27ae60; margin-top: 5px;">`;
                        if (elem.bonus.spiritualPowerBonus) html += `灵力+${(elem.bonus.spiritualPowerBonus * 100).toFixed(0)}% `;
                        if (elem.bonus.combatPowerBonus) html += `战力+${(elem.bonus.combatPowerBonus * 100).toFixed(0)}% `;
                        if (elem.bonus.breakthroughBonus) html += `突破+${(elem.bonus.breakthroughBonus * 100).toFixed(0)}% `;
                        html += `</div>`;
                        html += `<div style="font-size: 10px; color: #95a5a6; margin-top: 5px;">克制: ${elementsData[elem.counters].name} | 被克: ${elementsData[elem.counteredBy].name}</div>`;
                        html += `</div>`;
                    }
                    html += `</div>`;
                } else {
                    // 已选择属性
                    const elem = elementsData[currentElement];
                    html += `<div class="facility-item" style="background: linear-gradient(135deg, ${elem.color}22, ${elem.color}11); border-left: 4px solid ${elem.color};">`;
                    html += `<div class="facility-header">`;
                    html += `<span class="facility-name" style="color: ${elem.color};">当前属性：${elem.name}</span>`;
                    html += `<span class="facility-level" style="background: ${elem.color};">Lv.${gameData.player.elementPower || 0}</span>`;
                    html += `</div>`;
                    html += `<div class="facility-desc">${elem.desc}</div>`;
                    html += `<div class="facility-benefit">`;
                    html += `加成: `;
                    if (elem.bonus.spiritualPowerBonus) html += `灵力+${(elem.bonus.spiritualPowerBonus * 100).toFixed(0)}% `;
                    if (elem.bonus.combatPowerBonus) html += `战力+${(elem.bonus.combatPowerBonus * 100).toFixed(0)}% `;
                    if (elem.bonus.breakthroughBonus) html += `突破+${(elem.bonus.breakthroughBonus * 100).toFixed(0)}% `;
                    html += `</div>`;
                    html += `<div style="font-size: 11px; color: #7f8c8d; margin-top: 5px;">`;
                    html += `克制: ${elementsData[elem.counters].name}属性 | 被克: ${elementsData[elem.counteredBy].name}属性`;
                    html += `</div>`;
                    const upgradeCost = 10 * ((gameData.player.elementPower || 0) + 1);
                    html += `<button class="btn" onclick="upgradeElement()" ${(gameData.player.immortalStone || 0) < upgradeCost ? 'disabled' : ''}>`;
                    html += `提升属性强度（消耗${upgradeCost}仙石）`;
                    html += `</button>`;
                    html += `</div>`;
                }
                
                html += `</div>`;
            }
            
            // 按类别分组
            const categories = {
                learned: { name: `${getSvg('book')} 师传功法`, techniques: [] }, // 新增：师传功法
                basic: { name: '基础功法', techniques: [] },
                advanced: { name: '进阶功法', techniques: [] },
                supreme: { name: '顶级功法', techniques: [] },
                ascension: { name: `${getSvg('star')} 飞升功法`, techniques: [] }
            };
            
            // 首先添加从师傅处学习的功法
            if (gameData.learnedTechniques && typeof getTechniqueName === 'function') {
                for (let techId in gameData.learnedTechniques) {
                    const learnedInfo = gameData.learnedTechniques[techId];
                    const techName = getTechniqueName(techId);
                    const masterName = (learnedInfo.learnedFrom && typeof relationshipNPCs !== 'undefined' && relationshipNPCs[learnedInfo.learnedFrom]) 
                        ? relationshipNPCs[learnedInfo.learnedFrom].name 
                        : '未知师傅';
                    
                    categories.learned.techniques.push({
                        id: techId,
                        name: techName,
                        master: masterName,
                        learnedAt: learnedInfo.learnedAt,
                        isLearned: true
                    });
                }
            }
            
            // 然后添加藏经阁功法
            for (let id in techniquesData) {
                const technique = techniquesData[id];
                const level = gameData.techniques[id] || 0;
                
                // 检查解锁条件
                let isUnlocked = true;
                let unlockReason = '';
                
                if (technique.requiredRealm && gameData.player.realm < technique.requiredRealm) {
                    isUnlocked = false;
                    unlockReason = `需要境界: ${realms[technique.requiredRealm].name}`;
                }
                
                if (technique.requiredAscension && gameData.ascensionCount < technique.requiredAscension) {
                    isUnlocked = false;
                    unlockReason = `需要飞升${technique.requiredAscension}次`;
                }
                
                const isMaxLevel = level >= technique.maxLevel;
                
                categories[technique.category].techniques.push({
                    id, technique, level, isUnlocked, isMaxLevel, unlockReason
                });
            }
            
            // 渲染各个类别
            for (let catId in categories) {
                const cat = categories[catId];
                if (cat.techniques.length === 0) continue;
                
                const isCollapsed = gameData.collapsedCategories['technique_' + catId];
                
                html += `<div style="margin-bottom: 20px;">`;
                html += `<div style="font-size: 14px; font-weight: 600; color: #2c3e50; margin-bottom: 10px; padding: 8px; background: #f8f9fa; border-radius: 4px; cursor: pointer; display: flex; justify-content: space-between; align-items: center;" 
                         onclick="toggleCategory('technique_${catId}')">`;
                html += `<span>${cat.name} (${cat.techniques.length})</span>`;
                html += `<span style="font-size: 12px; color: #95a5a6;" id="technique_${catId}_toggle">${isCollapsed ? '▼ 展开' : '▲ 折叠'}</span>`;
                html += `</div>`;
                
                // 统一使用网格布局
                html += `<div id="technique_${catId}_content" class="techniques-list" style="display: ${isCollapsed ? 'none' : 'grid'};">`;
                    for (let item of cat.techniques) {
                    // 处理师传功法（特殊渲染）
                    if (item.isLearned) {
                        const date = new Date(item.learnedAt).toLocaleDateString('zh-CN');
                html += `<div class="facility-item" style="background: linear-gradient(135deg, #fff9e6, #ffffff); border-left: 4px solid #f39c12;">`;
                html += `<div class="facility-header">`;
                html += `<span class="facility-name">${getSvg('book')} ${item.name}</span>`;
                html += `<span class="facility-level" style="background: #f39c12;">已习得</span>`;
                html += `</div>`;
                html += `<div class="facility-desc" style="color: #7f8c8d;">师从：<strong>${item.master}</strong></div>`;
                
                // 显示功法效果
                if (typeof getTechniqueEffectDescription === 'function') {
                    const effects = getTechniqueEffectDescription(item.id);
                    html += `<div style="font-size: 12px; color: #27ae60; margin-top: 8px; padding: 8px; background: rgba(39, 174, 96, 0.1); border-radius: 4px;">`;
                    html += `<strong>功法效果：</strong>${effects}`;
                    html += `</div>`;
                }
                
                html += `<div style="font-size: 11px; color: #95a5a6; margin-top: 5px;">学习时间：${date}</div>`;
                html += `</div>`;
                        continue;
                    }
                    
                    const { id, technique, level, isUnlocked, isMaxLevel, unlockReason } = item;
                    
                    if (!isUnlocked && level === 0) {
                        // 未解锁的功法
                        html += `<div class="facility-item" style="opacity: 0.5;">`;
                        html += `<div class="facility-header">`;
                        html += `<span class="facility-name">🔒 ${technique.name}</span>`;
                        html += `<span class="facility-level">未解锁</span>`;
                        html += `</div>`;
                        html += `<div class="facility-desc">${technique.desc}</div>`;
                        html += `<div class="cost-info">${unlockReason}</div>`;
                        html += `</div>`;
                        continue;
                    }
                    
                    const cost = Math.floor(technique.baseCost * Math.pow(technique.costMultiplier, level));
                    const canAfford = gameData.player.spiritStone >= cost;
                    
                    html += `<div class="facility-item">`;
                    html += `<div class="facility-header">`;
                    html += `<span class="facility-name">${technique.name}</span>`;
                    html += `<span class="facility-level">Lv.${level}/${technique.maxLevel}</span>`;
                    html += `</div>`;
                    html += `<div class="facility-desc">${technique.desc}</div>`;
                    html += `<div class="facility-benefit">${technique.getBenefit(level)}</div>`;
                    
                    if (!isMaxLevel) {
                        html += `<div class="cost-info">升级费用: ${formatNumber(cost)} 灵石</div>`;
                        html += `<button class="btn btn-primary" onclick="upgradeTechnique('${id}')" ${!canAfford ? 'disabled' : ''}>`;
                        html += `修炼 Cultivate`;
                        html += `</button>`;
                    } else {
                        html += `<div style="font-size: 11px; color: #27ae60; margin-top: 8px;">✓ 已修炼至最高境界</div>`;
                    }
                    
                    html += `</div>`;
                    }
                
                html += `</div>`; // 结束分类内容div
                html += `</div>`; // 结束分类外层div
            }
            
            container.innerHTML = html;
        }

        // 切换分类折叠状态（已移至 interface.js）

        // 升级功法
        function upgradeTechnique(techniqueId) {
            const technique = techniquesData[techniqueId];
            if (!technique) {
                console.error('功法不存在:', techniqueId);
                return;
            }
            
            // 确保功法等级存在
            if (gameData.techniques[techniqueId] === undefined) {
                gameData.techniques[techniqueId] = 0;
            }
            
            const currentLevel = gameData.techniques[techniqueId];
            
            if (currentLevel >= technique.maxLevel) return;
            
            const cost = Math.floor(technique.baseCost * Math.pow(technique.costMultiplier, currentLevel));
            
            if (gameData.player.spiritStone >= cost) {
                gameData.player.spiritStone -= cost;
                gameData.techniques[techniqueId]++;
                addLog(`<span class="log-success">${technique.name} 修炼至 ${gameData.techniques[techniqueId]} 级</span>`);
                renderCultivation();
                updateUI();
            }
        }

        // 丹药配方定义
        const pillRecipes = {
            basic_pill: {
                name: '聚灵丹',
                desc: '最基础的丹药，快速恢复灵力',
                cost: { spiritStone: 10 },
                effect: { spiritualPower: 100 },
                unlocked: true
            },
            advanced_pill: {
                name: '筑基丹',
                desc: '提升突破成功率的珍贵丹药',
                cost: { spiritStone: 50 },
                effect: { breakthroughBonus: 10 }, // +10%突破成功率（一次性）
                requiredRealm: 1
            },
            fortune_pill: {
                name: '造化丹',
                desc: '大幅提升灵力的高级丹药',
                cost: { spiritStone: 100 },
                effect: { spiritualPower: 1000 },
                requiredRealm: 2
            },
            enlightenment_pill: {
                name: '悟道丹',
                desc: '帮助感悟天道，直接提升突破进度',
                cost: { spiritStone: 200 },
                effect: { breakthroughProgress: 30 }, // +30%突破进度
                requiredRealm: 3
            },
            immortal_pill: {
                name: '仙灵丹',
                desc: '传说中的丹药，效果惊人',
                cost: { spiritStone: 500 },
                effect: { spiritualPower: 10000, breakthroughProgress: 50 },
                requiredRealm: 5
            }
        };

        // 渲染装备法宝
        function renderEquipment() {
            const container = document.getElementById('equipmentContent');
            let html = '';
            
            // 当前装备槽
            html += `<div style="margin-bottom: 25px;">`;
            html += `<div style="font-size: 14px; font-weight: 600; color: #2c3e50; margin-bottom: 12px;">当前装备</div>`;
            
            const slots = {
                weapon: { name: '武器槽', icon: '⚔️' },
                armor: { name: '防具槽', icon: '🛡️' },
                accessory: { name: '饰品槽', icon: '💍' }
            };
            
            html += `<div class="equipment-slots">`;
            for (let slotId in slots) {
                const slot = slots[slotId];
                const equippedId = gameData.equipment[slotId];
                const equipped = equippedId ? artifacts[equippedId] : null;
                
                html += `<div class="facility-item" style="${equipped ? 'background: #f0f9ff; border-color: #3498db;' : ''}">`;
                html += `<div class="facility-header">`;
                html += `<span class="facility-name">${slot.icon} ${slot.name}</span>`;
                html += `<span class="facility-level">${equipped ? '已装备' : '空'}</span>`;
                html += `</div>`;
                
                if (equipped) {
                    html += `<div class="facility-desc">${equipped.name} - ${equipped.desc}</div>`;
                    html += `<div class="facility-benefit">`;
                    if (equipped.bonus.spiritualPowerBonus) {
                        html += `灵力获取 +${(equipped.bonus.spiritualPowerBonus * 100).toFixed(0)}% `;
                    }
                    if (equipped.bonus.breakthroughBonus) {
                        html += `突破成功率 +${(equipped.bonus.breakthroughBonus * 100).toFixed(0)}% `;
                    }
                    if (equipped.bonus.spiritStoneBonus) {
                        html += `灵石获取 +${(equipped.bonus.spiritStoneBonus * 100).toFixed(0)}% `;
                    }
                    html += `</div>`;
                    html += `<button class="btn" onclick="unequipArtifact('${slotId}')">卸下</button>`;
                } else {
                    html += `<div class="facility-desc">未装备任何法宝</div>`;
                }
                
                html += `</div>`;
            }
            html += `</div>`;
            html += `</div>`;
            
            // 法宝背包
            html += `<div style="margin-bottom: 25px;">`;
            html += `<div style="font-size: 14px; font-weight: 600; color: #2c3e50; margin-bottom: 12px;">法宝背包 (${gameData.artifacts.length})</div>`;
            
            if (gameData.artifacts.length === 0) {
                html += `<div style="text-align: center; color: #95a5a6; padding: 30px; background: #fafafa; border-radius: 6px;">`;
                html += `暂无法宝<br><br>`;
                html += `<small>通过随机事件"法宝现世"获得法宝</small>`;
                html += `</div>`;
            } else {
                // 统一使用网格布局
                html += `<div class="equipment-list">`;
                gameData.artifacts.forEach(artifactId => {
                    const artifact = artifacts[artifactId];
                    if (!artifact) return;
                    
                    const isEquipped = Object.values(gameData.equipment).includes(artifactId);
                    
                    html += `<div class="facility-item" style="${isEquipped ? 'opacity: 0.5;' : ''}">`;
                    html += `<div class="facility-header">`;
                    html += `<span class="facility-name">${artifact.name}</span>`;
                    html += `<span class="facility-level">${isEquipped ? '已装备' : artifact.type === 'weapon' ? '⚔️' : artifact.type === 'armor' ? '🛡️' : '💍'}</span>`;
                    html += `</div>`;
                    html += `<div class="facility-desc">${artifact.desc}</div>`;
                    html += `<div class="facility-benefit">`;
                    if (artifact.bonus.spiritualPowerBonus) {
                        html += `灵力获取 +${(artifact.bonus.spiritualPowerBonus * 100).toFixed(0)}% `;
                    }
                    if (artifact.bonus.breakthroughBonus) {
                        html += `突破成功率 +${(artifact.bonus.breakthroughBonus * 100).toFixed(0)}% `;
                    }
                    if (artifact.bonus.spiritStoneBonus) {
                        html += `灵石获取 +${(artifact.bonus.spiritStoneBonus * 100).toFixed(0)}% `;
                    }
                    html += `</div>`;
                    
                    if (!isEquipped) {
                        html += `<button class="btn btn-success" onclick="equipArtifact('${artifactId}')">装备</button>`;
                    } else {
                        html += `<div style="font-size: 11px; color: #95a5a6; margin-top: 8px;">已在使用中</div>`;
                    }
                    
                    html += `</div>`;
                });
                html += `</div>`;
            }
            
            html += `</div>`;
            
            // 灵宠系统
            html += `<div style="margin-bottom: 25px;">`;
            html += `<div style="font-size: 14px; font-weight: 600; color: #2c3e50; margin-bottom: 12px;">🐾 灵宠系统</div>`;
            
            if (gameData.pets.length === 0) {
                html += `<div style="text-align: center; color: #95a5a6; padding: 30px; background: #fafafa; border-radius: 6px;">`;
                html += `暂无灵宠<br><br>`;
                html += `<small>通过随机事件获得灵宠</small>`;
                html += `</div>`;
            } else {
                // 当前激活的灵宠
                if (gameData.activePet) {
                    const pet = pets[gameData.activePet];
                    if (pet) {
                        const rarityColors = {
                            common: '#95a5a6',
                            rare: '#3498db',
                            epic: '#3b82f6',
                            legendary: '#f39c12',
                            mythic: '#e74c3c'
                        };
                        
                        html += `<div class="facility-item" style="background: #fff8e1; border-color: ${rarityColors[pet.rarity]};">`;
                        html += `<div class="facility-header">`;
                        html += `<span class="facility-name">✨ ${pet.name} (激活中)</span>`;
                        html += `<span class="facility-level" style="background: ${rarityColors[pet.rarity]};">${pet.rarity}</span>`;
                        html += `</div>`;
                        html += `<div class="facility-desc">${pet.desc}</div>`;
                        html += `<div class="facility-benefit">`;
                        if (pet.bonus.spiritualPowerBonus) {
                            html += `灵力获取 +${(pet.bonus.spiritualPowerBonus * 100).toFixed(0)}% `;
                        }
                        if (pet.bonus.breakthroughBonus) {
                            html += `突破成功率 +${(pet.bonus.breakthroughBonus * 100).toFixed(0)}% `;
                        }
                        if (pet.bonus.spiritStoneBonus) {
                            html += `灵石获取 +${(pet.bonus.spiritStoneBonus * 100).toFixed(0)}% `;
                        }
                        html += `</div>`;
                        html += `<button class="btn" onclick="deactivatePet()">取消激活</button>`;
                        html += `</div>`;
                    }
                }
                
                // 显示所有拥有的灵宠
                html += `<div style="margin-top: 15px;">`;
                html += `<div style="font-size: 12px; color: #7f8c8d; margin-bottom: 8px;">拥有的灵宠：</div>`;
                
                gameData.pets.forEach(petId => {
                    const pet = pets[petId];
                    if (!pet) return;
                    
                    const isActive = gameData.activePet === petId;
                    const rarityColors = {
                        common: '#95a5a6',
                        rare: '#3498db',
                        epic: '#3b82f6',
                        legendary: '#f39c12',
                        mythic: '#e74c3c'
                    };
                    
                    html += `<div class="facility-item" style="${isActive ? 'opacity: 0.5;' : ''}">`;
                    html += `<div class="facility-header">`;
                    html += `<span class="facility-name">${pet.name}</span>`;
                    html += `<span class="facility-level" style="background: ${rarityColors[pet.rarity]};">${pet.rarity}</span>`;
                    html += `</div>`;
                    html += `<div class="facility-desc">${pet.desc}</div>`;
                    html += `<div class="facility-benefit">`;
                    if (pet.bonus.spiritualPowerBonus) {
                        html += `灵力获取 +${(pet.bonus.spiritualPowerBonus * 100).toFixed(0)}% `;
                    }
                    if (pet.bonus.breakthroughBonus) {
                        html += `突破成功率 +${(pet.bonus.breakthroughBonus * 100).toFixed(0)}% `;
                    }
                    if (pet.bonus.spiritStoneBonus) {
                        html += `灵石获取 +${(pet.bonus.spiritStoneBonus * 100).toFixed(0)}% `;
                    }
                    html += `</div>`;
                    
                    if (!isActive) {
                        html += `<button class="btn btn-primary" onclick="activatePet('${petId}')">激活</button>`;
                    } else {
                        html += `<div style="font-size: 11px; color: #f39c12; margin-top: 8px;">✓ 当前激活中</div>`;
                    }
                    
                    html += `</div>`;
                });
                
                html += `</div>`;
            }
            
            html += `</div>`;

            // 炼制法宝系统
            html += `<div class="facility-item" style="margin-bottom: 25px;">`;
            html += `<div class="facility-header"><span class="facility-name">炼制法宝系统</span></div>`;
            html += `<div class="facility-desc">消耗灵石与材料炼制法宝，成功率随配方和材料品质不同</div>`;
            
            // 材料库存显示
            const mats = gameData.materials || {};
            const materialNames = {
                ironOre: '铁矿石', cloth: '布料', spiritCrystal: '灵晶',
                spiritOre: '灵矿', demonCore: '妖丹', dragonScale: '龙鳞',
                phoenixFeather: '凤羽', heavenMetal: '天外神铁', chaosCrystal: '混沌晶石'
            };
            
            html += `<div style="font-size:12px; color:#7f8c8d; margin-bottom:12px;">`;
            html += `<strong>材料库存：</strong>`;
            let materialList = [];
            for (let matId in materialNames) {
                const count = mats[matId] || 0;
                if (count > 0) {
                    materialList.push(`${materialNames[matId]}×${count}`);
                }
            }
            html += materialList.length > 0 ? materialList.join('，') : '无';
            html += `</div>`;
            
            // 按境界分组显示配方
            const realmGroups = {
                '基础法宝': [],
                '中级法宝': [],
                '高级法宝': [],
                '顶级法宝': [],
                '传说法宝': [],
                '特殊法宝': []
            };
            
            for (let id in forgeRecipes) {
                const recipe = forgeRecipes[id];
                if (recipe.requiredRealm <= 2) realmGroups['基础法宝'].push({id, recipe});
                else if (recipe.requiredRealm <= 4) realmGroups['中级法宝'].push({id, recipe});
                else if (recipe.requiredRealm <= 5) realmGroups['高级法宝'].push({id, recipe});
                else if (recipe.requiredRealm <= 6) realmGroups['顶级法宝'].push({id, recipe});
                else if (recipe.requiredRealm <= 7) realmGroups['传说法宝'].push({id, recipe});
                else realmGroups['特殊法宝'].push({id, recipe});
            }
            
            for (let groupName in realmGroups) {
                const recipes = realmGroups[groupName];
                if (recipes.length === 0) continue;
                
                html += `<div style="margin-bottom: 15px;">`;
                html += `<div style="font-weight: 600; color: #2c3e50; margin-bottom: 8px; font-size: 13px;">${groupName}</div>`;
                html += `<div class="forge-recipes-grid">`;
                
                for (let {id, recipe} of recipes) {
                    const isUnlocked = gameData.player.realm >= recipe.requiredRealm;
                    const hasBlueprintForThis = hasBlueprint(id);
                    const canCraft = isUnlocked && hasBlueprintForThis && gameData.player.spiritStone >= (recipe.cost.spiritStone || 0);
                    
                    // 检查材料是否足够
                    let materialsEnough = true;
                    for (let matId in recipe.cost) {
                        if (matId !== 'spiritStone' && (mats[matId] || 0) < recipe.cost[matId]) {
                            materialsEnough = false;
                            break;
                        }
                    }
                    
                    // 获取图纸信息
                    const blueprint = artifactBlueprints[id];
                    const blueprintStatus = blueprint ? (hasBlueprintForThis ? '✅' : '❌') : '';
                    
                    html += `<div style="border:1px solid #e0e0e0; padding:10px; border-radius:6px; ${!isUnlocked || !hasBlueprintForThis ? 'opacity: 0.5;' : ''}">`;
                    html += `<div style="font-weight:600; margin-bottom:6px; color: ${isUnlocked && hasBlueprintForThis ? '#2c3e50' : '#7f8c8d'};">${recipe.name} ${blueprintStatus}</div>`;
                    
                    // 材料需求
                    let costText = `${recipe.cost.spiritStone || 0} 灵石`;
                    for (let matId in recipe.cost) {
                        if (matId !== 'spiritStone') {
                            const matName = materialNames[matId] || matId;
                            costText += `，${matName}×${recipe.cost[matId]}`;
                        }
                    }
                    
                    html += `<div style="font-size:11px; color:#7f8c8d; margin-bottom:6px;">${costText}</div>`;
                    
                    // 显示动态成功率
                    const dynamicSuccessRate = calculateForgingSuccessRate(id);
                    const baseSuccessRate = recipe.success;
                    let successText = `成功率 ${(dynamicSuccessRate*100).toFixed(0)}%`;
                    if (dynamicSuccessRate > baseSuccessRate) {
                        successText += ` (+${((dynamicSuccessRate - baseSuccessRate)*100).toFixed(0)}%)`;
                    }
                    html += `<div style="font-size:11px; color:#27ae60; margin-bottom:8px;">${successText}</div>`;
                    
                    // 显示解锁条件
                    const conditions = [];
                    if (!isUnlocked) {
                        conditions.push(`需要境界: ${realms[recipe.requiredRealm].name}`);
                    }
                    if (!hasBlueprintForThis) {
                        conditions.push(`需要图纸: ${blueprint.name}`);
                        if (blueprint.source) {
                            // 内部ID到中文名称的映射
                            const dungeonNames = {
                                'dragon_cave': '龙窟',
                                'spirit_forest': '灵兽森林',
                                'demon_cave': '魔窟',
                                'ancient_ruins': '上古遗迹',
                                'heaven_trial': '天道试炼',
                                'void_realm': '虚空领域'
                            };
                            
                            const bossNames = {
                                'phoenix_king': '凤凰王',
                                'void_lord': '虚空领主',
                                'chaos_emperor': '混沌帝君',
                                'demon_lord': '魔君',
                                'ancient_dragon': '上古真龙',
                                'heaven_guardian': '天界守护者'
                            };
                            
                            const npcNames = {
                                'dragon_master': '龙族大师',
                                'alchemy_master': '炼丹大师',
                                'formation_master': '阵法大师',
                                'sword_master': '剑道大师',
                                'pill_master': '丹道大师'
                            };
                            
                            const sectNames = {
                                'formation_sect': '阵宗',
                                'sword_sect': '剑宗',
                                'pill_sect': '丹宗',
                                'buddhist_sect': '佛宗',
                                'taoist_sect': '道宗',
                                'demon_sect': '魔宗',
                                'evil_cult': '邪教',
                                'blood_sect': '血煞门',
                                'merchant_guild': '商会',
                                'rogue': '散修'
                            };
                            
                            const achievementNames = {
                                'void_master': '虚空大师',
                                'formation_master': '阵法大师',
                                'alchemy_master': '炼丹大师'
                            };
                            
                            const sourceText = {
                                'initial': '初始拥有',
                                'dungeon': `副本：${dungeonNames[blueprint.dungeon] || blueprint.dungeon || '未知'}`,
                                'boss_drop': `Boss掉落：${bossNames[blueprint.boss] || blueprint.boss || '未知'}`,
                                'npc_trade': `NPC交易：${npcNames[blueprint.npc] || blueprint.npc || '未知'}`,
                                'event': `随机事件：${blueprint.event || '未知'}`,
                                'sect_reward': `门派奖励：${sectNames[blueprint.sect] || blueprint.sect || '未知'}`,
                                'achievement': `成就奖励：${achievementNames[blueprint.achievement] || blueprint.achievement || '未知'}`,
                                'quest': '任务奖励'
                            };
                            conditions.push(`图纸获取: ${sourceText[blueprint.source] || blueprint.source}`);
                        }
                    }
                    if (!canCraft || !materialsEnough) {
                        conditions.push('材料不足');
                    }
                    
                    if (conditions.length > 0) {
                        conditions.forEach((condition, index) => {
                            const color = condition.includes('材料不足') ? '#e74c3c' : '#f39c12';
                            html += `<div style="font-size:11px; color:${color}; margin-bottom:2px;">${condition}</div>`;
                        });
                    } else {
                        html += `<button class="btn btn-primary" onclick="forgeArtifact('${id}')" style="font-size: 11px; padding: 6px;">炼制</button>`;
                    }
                    
                    html += `</div>`;
                }
                
                html += `</div>`;
                html += `</div>`;
            }
            
            html += `</div>`;

            // 材料商店
            html += `<div class="facility-item">`;
            html += `<div class="facility-header"><span class="facility-name">材料商店</span></div>`;
            html += `<div class="facility-desc">使用灵石购买各种材料，稀有材料价格更高</div>`;
            
            // 按稀有度分组显示材料
            const materialGroups = {
                '基础材料': [
                    {id: 'ironOre', name: '铁矿石', count: 5, price: 20, desc: '普通铁矿'},
                    {id: 'cloth', name: '布料', count: 5, price: 15, desc: '普通布料'},
                    {id: 'spiritCrystal', name: '灵晶', count: 3, price: 80, desc: '蕴含灵气的晶石'}
                ],
                '中级材料': [
                    {id: 'spiritOre', name: '灵矿', count: 3, price: 100, desc: '蕴含灵气的矿石'},
                    {id: 'demonCore', name: '妖丹', count: 2, price: 150, desc: '妖兽的内丹'}
                ],
                '稀有材料': [
                    {id: 'dragonScale', name: '龙鳞', count: 1, price: 300, desc: '真龙的鳞片'},
                    {id: 'phoenixFeather', name: '凤羽', count: 1, price: 400, desc: '凤凰的羽毛'}
                ],
                '传说材料': [
                    {id: 'heavenMetal', name: '天外神铁', count: 1, price: 800, desc: '天界的珍贵材料'},
                    {id: 'chaosCrystal', name: '混沌晶石', count: 1, price: 1200, desc: '混沌中诞生的至宝'}
                ]
            };
            
            for (let groupName in materialGroups) {
                const materials = materialGroups[groupName];
                html += `<div style="margin-bottom: 15px;">`;
                html += `<div style="font-weight: 600; color: #2c3e50; margin-bottom: 8px; font-size: 13px;">${groupName}</div>`;
                html += `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 8px;">`;
                
                for (let material of materials) {
                    const totalPrice = material.count * material.price;
                    html += `<div style="border:1px solid #e0e0e0; padding:8px; border-radius:4px; text-align:center;">`;
                    html += `<div style="font-weight:600; margin-bottom:4px; font-size:12px;">${material.name}</div>`;
                    html += `<div style="font-size:11px; color:#7f8c8d; margin-bottom:6px;">${material.desc}</div>`;
                    html += `<button class="btn" onclick="buyMaterial('${material.id}', ${material.count}, ${material.price}, this)" style="font-size: 11px; padding: 6px; transition: all 0.2s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">${material.name}×${material.count} (${totalPrice}灵石)</button>`;
                    html += `</div>`;
                }
                
                html += `</div>`;
                html += `</div>`;
            }
            
            html += `</div>`;

            // 炼制技能系统
            html += `<div class="facility-item" style="margin-bottom: 25px;">`;
            html += `<div class="facility-header"><span class="facility-name">炼制技能</span></div>`;
            html += `<div class="facility-desc">提升炼制技能等级可以增加法宝炼制成功率</div>`;
            
            // 添加网格布局容器
            html += '<div class="forging-skills-grid">';
            
            // 初始化炼制技能
            gameData.forgingSkills = gameData.forgingSkills || {};
            
            for (let skillId in forgingSkills) {
                const skill = forgingSkills[skillId];
                const currentLevel = gameData.forgingSkills[skillId] || 0;
                const isUnlocked = gameData.player.realm >= skill.requiredRealm;
                const canUpgrade = isUnlocked && currentLevel < skill.maxLevel && gameData.player.spiritStone >= (currentLevel + 1) * 100;
                
                html += `<div style="border:1px solid #e0e0e0; padding:10px; border-radius:6px; margin-bottom:8px; ${!isUnlocked ? 'opacity: 0.5;' : ''}">`;
                html += `<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">`;
                html += `<div style="font-weight:600; color: ${isUnlocked ? '#2c3e50' : '#7f8c8d'};">${skill.name}</div>`;
                html += `<div style="font-size:12px; color:#3498db;">等级 ${currentLevel}/${skill.maxLevel}</div>`;
                html += `</div>`;
                
                html += `<div style="font-size:11px; color:#7f8c8d; margin-bottom:6px;">${skill.desc}</div>`;
                html += `<div style="font-size:11px; color:#27ae60; margin-bottom:8px;">每级+${(skill.bonusPerLevel*100).toFixed(0)}%成功率</div>`;
                
                if (!isUnlocked) {
                    html += `<div style="font-size:11px; color:#e74c3c;">需要境界: ${realms[skill.requiredRealm].name}</div>`;
                } else if (currentLevel >= skill.maxLevel) {
                    html += `<div style="font-size:11px; color:#f39c12;">已满级</div>`;
                } else if (!canUpgrade) {
                    html += `<div style="font-size:11px; color:#e74c3c;">灵石不足 (需要${(currentLevel + 1) * 100}灵石)</div>`;
                } else {
                    html += `<button class="btn btn-primary" onclick="upgradeForgingSkill('${skillId}')" style="font-size: 11px; padding: 6px;">升级 (${(currentLevel + 1) * 100}灵石)</button>`;
                }
                
                html += `</div>`;
            }
            
            // 关闭网格布局容器
            html += '</div>';
            
            html += `</div>`;

            container.innerHTML = html;
        }

        // 装备法宝
        function equipArtifact(artifactId) {
            const artifact = artifacts[artifactId];
            if (!artifact) return;
            
            // 卸下该槽位原有的装备
            const oldEquip = gameData.equipment[artifact.type];
            if (oldEquip) {
                addLog(`卸下了 ${artifacts[oldEquip].name}`);
            }
            
            // 装备新法宝
            gameData.equipment[artifact.type] = artifactId;
            addLog(`<span class="log-success">⚔️ 装备了 ${artifact.name}</span>`);
            
            renderEquipment();
            updateUI();
        }
        
        // 炼制法宝（MVP）
        // 计算炼制成功率
        function calculateForgingSuccessRate(artifactId) {
            const recipe = forgeRecipes[artifactId];
            if (!recipe) return 0;
            
            let baseSuccess = recipe.success;
            let totalBonus = 0;
            
            // 初始化炼制技能等级
            gameData.forgingSkills = gameData.forgingSkills || {};
            
            // 根据法宝等级应用不同的技能加成
            if (recipe.requiredRealm <= 2) {
                // 基础法宝
                const skillLevel = gameData.forgingSkills.basic_forging || 0;
                totalBonus += skillLevel * forgingSkills.basic_forging.bonusPerLevel;
            } else if (recipe.requiredRealm <= 4) {
                // 中级法宝
                const skillLevel = gameData.forgingSkills.advanced_forging || 0;
                totalBonus += skillLevel * forgingSkills.advanced_forging.bonusPerLevel;
            } else if (recipe.requiredRealm <= 6) {
                // 高级法宝
                const skillLevel = gameData.forgingSkills.master_forging || 0;
                totalBonus += skillLevel * forgingSkills.master_forging.bonusPerLevel;
            } else {
                // 传说法宝
                const skillLevel = gameData.forgingSkills.legendary_forging || 0;
                totalBonus += skillLevel * forgingSkills.legendary_forging.bonusPerLevel;
            }
            
            // 设施加成（炼器房等级）
            const forgeRoomLevel = gameData.facilities?.forge_room || 0;
            totalBonus += forgeRoomLevel * 0.01; // 每级+1%成功率
            
            // 天赋加成
            if (gameData.talents?.includes('forging_master')) {
                totalBonus += 0.1; // 炼器大师天赋+10%成功率
            }
            
            // 计算最终成功率（最高95%）
            const finalSuccess = Math.min(baseSuccess + totalBonus, 0.95);
            return finalSuccess;
        }

        function forgeArtifact(artifactId) {
            const recipe = forgeRecipes[artifactId];
            if (!recipe) return;
            
            // 检查境界要求
            if (gameData.player.realm < recipe.requiredRealm) {
                showNotification(`需要境界: ${realms[recipe.requiredRealm].name} 才能炼制`, 'warning');
                return;
            }
            
            // 检查是否拥有图纸
            if (!hasBlueprint(artifactId)) {
                const blueprint = artifactBlueprints[artifactId];
                if (blueprint) {
                    let sourceText = '';
                    if (blueprint.source) {
                        // 内部ID到中文名称的映射
                        const dungeonNames = {
                            'dragon_cave': '龙窟',
                            'spirit_forest': '灵兽森林',
                            'demon_cave': '魔窟',
                            'ancient_ruins': '上古遗迹',
                            'heaven_trial': '天道试炼',
                            'void_realm': '虚空领域'
                        };
                        
                        const bossNames = {
                            'phoenix_king': '凤凰王',
                            'void_lord': '虚空领主',
                            'chaos_emperor': '混沌帝君',
                            'demon_lord': '魔君',
                            'ancient_dragon': '上古真龙',
                            'heaven_guardian': '天界守护者'
                        };
                        
                        const npcNames = {
                            'dragon_master': '龙族大师',
                            'alchemy_master': '炼丹大师',
                            'formation_master': '阵法大师',
                            'sword_master': '剑道大师',
                            'pill_master': '丹道大师'
                        };
                        
                        const sectNames = {
                            'formation_sect': '阵宗',
                            'sword_sect': '剑宗',
                            'pill_sect': '丹宗',
                            'buddhist_sect': '佛宗',
                            'taoist_sect': '道宗',
                            'demon_sect': '魔宗',
                            'evil_cult': '邪教',
                            'blood_sect': '血煞门',
                            'merchant_guild': '商会',
                            'rogue': '散修'
                        };
                        
                        const achievementNames = {
                            'void_master': '虚空大师',
                            'formation_master': '阵法大师',
                            'alchemy_master': '炼丹大师'
                        };
                        
                        const sourceMap = {
                            'initial': '初始拥有',
                            'dungeon': `副本：${dungeonNames[blueprint.dungeon] || blueprint.dungeon || '未知'}`,
                            'boss_drop': `Boss掉落：${bossNames[blueprint.boss] || blueprint.boss || '未知'}`,
                            'npc_trade': `NPC交易：${npcNames[blueprint.npc] || blueprint.npc || '未知'}`,
                            'event': `随机事件：${blueprint.event || '未知'}`,
                            'sect_reward': `门派奖励：${sectNames[blueprint.sect] || blueprint.sect || '未知'}`,
                            'achievement': `成就奖励：${achievementNames[blueprint.achievement] || blueprint.achievement || '未知'}`,
                            'quest': '任务奖励'
                        };
                        sourceText = ` (获取方式: ${sourceMap[blueprint.source] || blueprint.source})`;
                    }
                    showNotification(`需要先获得 ${blueprint.name} 才能炼制${sourceText}`, 'warning');
                } else {
                    showNotification('未知的炼制配方', 'warning');
                }
                return;
            }
            
            // 初始化材料库存
            gameData.materials = gameData.materials || {};
            const need = recipe.cost || {};
            const lacks = [];
            if (need.ironOre && gameData.materials.ironOre < need.ironOre) lacks.push('铁矿');
            if (need.cloth && gameData.materials.cloth < need.cloth) lacks.push('布料');
            if (need.spiritCrystal && gameData.materials.spiritCrystal < need.spiritCrystal) lacks.push('灵晶');
            if (lacks.length) { showNotification('材料不足：' + lacks.join('、'), 'warning'); return; }
            gameData.player.spiritStone -= (need.spiritStone||0);
            if (need.ironOre) gameData.materials.ironOre -= need.ironOre;
            if (need.cloth) gameData.materials.cloth -= need.cloth;
            if (need.spiritCrystal) gameData.materials.spiritCrystal -= need.spiritCrystal;
            // 炼制判定（使用动态成功率）
            const successRate = calculateForgingSuccessRate(artifactId);
            const ok = Math.random() < successRate;
            if (ok) {
                if (!gameData.artifacts.includes(artifactId)) gameData.artifacts.push(artifactId);
                addLog(`<span class=\"log-success\">炼制成功：${recipe.name}</span>`);
                showNotification(`获得法宝：${recipe.name}`, 'success');
            } else {
                addLog('炼制失败，材料尽散。');
                showNotification('炼制失败', 'error');
            }
            renderEquipment();
            updateUI();
            saveGame();
        }

        // 获取法宝图纸
        function gainBlueprint(blueprintId) {
            if (!artifactBlueprints[blueprintId]) return;
            
            gameData.blueprints = gameData.blueprints || [];
            if (!gameData.blueprints.includes(blueprintId)) {
                gameData.blueprints.push(blueprintId);
                const blueprint = artifactBlueprints[blueprintId];
                addLog(`<span class="log-success">📜 获得了 ${blueprint.name}</span>`);
                showNotification(`获得图纸：${blueprint.name}`, 'success');
                
                // 重新渲染装备界面以显示新图纸
                renderEquipment();
            }
        }

        // 检查是否拥有图纸
        function hasBlueprint(blueprintId) {
            gameData.blueprints = gameData.blueprints || [];
            return gameData.blueprints.includes(blueprintId);
        }

        // 升级炼制技能
        function upgradeForgingSkill(skillId) {
            const skill = forgingSkills[skillId];
            if (!skill) return;
            
            // 初始化炼制技能
            gameData.forgingSkills = gameData.forgingSkills || {};
            
            const currentLevel = gameData.forgingSkills[skillId] || 0;
            const cost = (currentLevel + 1) * 100;
            
            // 检查条件
            if (gameData.player.realm < skill.requiredRealm) {
                showNotification(`需要境界: ${realms[skill.requiredRealm].name} 才能学习`, 'warning');
                return;
            }
            
            if (currentLevel >= skill.maxLevel) {
                showNotification('技能已满级', 'warning');
                return;
            }
            
            if (gameData.player.spiritStone < cost) {
                showNotification('灵石不足', 'warning');
                return;
            }
            
            // 升级技能
            gameData.player.spiritStone -= cost;
            gameData.forgingSkills[skillId] = currentLevel + 1;
            
            addLog(`<span class="log-success">🔨 ${skill.name} 提升到等级 ${currentLevel + 1}</span>`);
            showNotification(`${skill.name} 升级成功！`, 'success');
            
            renderEquipment();
            updateUI();
            saveGame();
        }

        // 图纸获取示例函数（可以在各种事件中调用）
        function giveRandomBlueprint() {
            // 获取所有未拥有的图纸
            const availableBlueprints = [];
            for (let blueprintId in artifactBlueprints) {
                if (!hasBlueprint(blueprintId)) {
                    const blueprint = artifactBlueprints[blueprintId];
                    if (gameData.player.realm >= blueprint.requiredRealm) {
                        availableBlueprints.push(blueprintId);
                    }
                }
            }
            
            if (availableBlueprints.length > 0) {
                const randomBlueprint = availableBlueprints[Math.floor(Math.random() * availableBlueprints.length)];
                gainBlueprint(randomBlueprint);
            }
        }

        // 根据副本掉落图纸
        function giveDungeonBlueprint(dungeonId) {
            const dungeonBlueprints = [];
            for (let blueprintId in artifactBlueprints) {
                const blueprint = artifactBlueprints[blueprintId];
                if (blueprint.source === 'dungeon' && blueprint.dungeon === dungeonId && !hasBlueprint(blueprintId)) {
                    dungeonBlueprints.push(blueprintId);
                }
            }
            
            if (dungeonBlueprints.length > 0) {
                const randomBlueprint = dungeonBlueprints[Math.floor(Math.random() * dungeonBlueprints.length)];
                gainBlueprint(randomBlueprint);
            }
        }

        // 根据Boss掉落图纸
        function giveBossBlueprint(bossId) {
            const bossBlueprints = [];
            for (let blueprintId in artifactBlueprints) {
                const blueprint = artifactBlueprints[blueprintId];
                if (blueprint.source === 'boss_drop' && blueprint.boss === bossId && !hasBlueprint(blueprintId)) {
                    bossBlueprints.push(blueprintId);
                }
            }
            
            if (bossBlueprints.length > 0) {
                const randomBlueprint = bossBlueprints[Math.floor(Math.random() * bossBlueprints.length)];
                gainBlueprint(randomBlueprint);
            }
        }

        // 材料商店（改进版）
        function buyMaterial(type, count, priceEach, buttonElement) {
            const total = count * priceEach;
            
            // 检查灵石是否足够
            if (gameData.player.spiritStone < total) { 
                showNotification('灵石不足', 'warning'); 
                return; 
            }
            
            // 按钮点击效果
            if (buttonElement) {
                buttonElement.style.transform = 'scale(0.95)';
                buttonElement.style.backgroundColor = '#4CAF50';
                buttonElement.style.color = 'white';
                setTimeout(() => {
                    buttonElement.style.transform = 'scale(1)';
                    buttonElement.style.backgroundColor = '';
                    buttonElement.style.color = '';
                }, 150);
            }
            
            // 材料名称映射
            const materialNames = {
                ironOre: '铁矿石',
                cloth: '布料', 
                spiritCrystal: '灵晶',
                spiritOre: '灵矿',
                demonCore: '妖丹',
                dragonScale: '龙鳞',
                phoenixFeather: '凤羽',
                heavenMetal: '天外神铁',
                chaosCrystal: '混沌晶石'
            };
            
            const materialName = materialNames[type] || type;
            
            // 扣除灵石
            gameData.player.spiritStone -= total;
            
            // 增加材料
            gameData.materials = gameData.materials || { ironOre: 0, cloth: 0, spiritCrystal: 0 };
            gameData.materials[type] = (gameData.materials[type] || 0) + count;
            
            // 显示购买成功通知
            showNotification(`成功购买 ${materialName} ×${count}`, 'success');
            
            // 添加到日志
            addLog(`<span class="log-success">${getSvg('coin')} 购买材料：${materialName} ×${count} (消耗${total}灵石)</span>`);
            
            // 重新渲染装备界面（包含材料商店）
            renderEquipment();
            updateUI();
            saveGame();
        }

        // 卸下法宝
        function unequipArtifact(slotId) {
            const equippedId = gameData.equipment[slotId];
            if (equippedId) {
                addLog(`卸下了 ${artifacts[equippedId].name}`);
                gameData.equipment[slotId] = null;
                renderEquipment();
                updateUI();
            }
        }

        // 激活灵宠
        function activatePet(petId) {
            const pet = pets[petId];
            if (!pet) return;
            
            if (gameData.activePet) {
                addLog(`${pets[gameData.activePet].name} 进入休息状态`);
            }
            
            gameData.activePet = petId;
            addLog(`<span class="log-success">🐾 激活灵宠：${pet.name}</span>`);
            
            renderEquipment();
            updateUI();
        }

        // 取消激活灵宠
        function deactivatePet() {
            if (gameData.activePet) {
                addLog(`${pets[gameData.activePet].name} 进入休息状态`);
                gameData.activePet = null;
                renderEquipment();
                updateUI();
            }
        }

        // 渲染炼丹
        function renderAlchemy() {
            const container = document.getElementById('alchemyList');
            let html = '';
            
            // 添加网格布局容器
            html += '<div class="alchemy-list">';
            
            for (let id in pillRecipes) {
                const recipe = pillRecipes[id];
                const isUnlocked = !recipe.requiredRealm || gameData.player.realm >= recipe.requiredRealm;
                
                if (!isUnlocked) {
                    html += `<div class="facility-item" style="opacity: 0.5;">`;
                    html += `<div class="facility-header">`;
                    html += `<span class="facility-name">🔒 ${recipe.name}</span>`;
                    html += `<span class="facility-level">未解锁</span>`;
                    html += `</div>`;
                    html += `<div class="facility-desc">${recipe.desc}</div>`;
                    html += `<div class="cost-info">需要境界: ${realms[recipe.requiredRealm].name}</div>`;
                    html += `</div>`;
                    continue;
                }
                
                const canAfford = gameData.player.spiritStone >= recipe.cost.spiritStone;
                
                html += `<div class="facility-item">`;
                html += `<div class="facility-header">`;
                html += `<span class="facility-name">${recipe.name}</span>`;
                html += `</div>`;
                html += `<div class="facility-desc">${recipe.desc}</div>`;
                
                // 显示效果
                html += `<div class="facility-benefit">`;
                if (recipe.effect.spiritualPower) {
                    html += `灵力 +${formatNumber(recipe.effect.spiritualPower)} `;
                }
                if (recipe.effect.breakthroughBonus) {
                    html += `突破成功率 +${recipe.effect.breakthroughBonus}% `;
                }
                if (recipe.effect.breakthroughProgress) {
                    html += `突破进度 +${recipe.effect.breakthroughProgress}% `;
                }
                html += `</div>`;
                
                html += `<div class="cost-info">费用: ${recipe.cost.spiritStone} 灵石</div>`;
                html += `<button class="btn btn-primary" onclick="refinePill('${id}')" ${!canAfford ? 'disabled' : ''}>`;
                html += `炼制 Refine`;
                html += `</button>`;
                html += `</div>`;
            }
            
            // 关闭网格布局容器
            html += '</div>';
            
            container.innerHTML = html;
        }

        // 炼制丹药
        function refinePill(recipeId) {
            const recipe = pillRecipes[recipeId];
            if (!recipe) return;
            
            if (gameData.player.spiritStone >= recipe.cost.spiritStone) {
                gameData.player.spiritStone -= recipe.cost.spiritStone;
                
                // 应用效果
                let effectText = '';
                if (recipe.effect.spiritualPower) {
                    gameData.player.spiritualPower += recipe.effect.spiritualPower;
                    effectText += `灵力+${formatNumber(recipe.effect.spiritualPower)} `;
                }
                if (recipe.effect.breakthroughProgress) {
                    gameData.player.breakthroughProgress = Math.min(100, 
                        gameData.player.breakthroughProgress + recipe.effect.breakthroughProgress);
                    effectText += `突破进度+${recipe.effect.breakthroughProgress}% `;
                }
                if (recipe.effect.breakthroughBonus) {
                    // 临时存储，在下次突破时使用
                    if (!gameData.player.tempBreakthroughBonus) {
                        gameData.player.tempBreakthroughBonus = 0;
                    }
                    gameData.player.tempBreakthroughBonus += recipe.effect.breakthroughBonus / 100;
                    effectText += `下次突破成功率+${recipe.effect.breakthroughBonus}% `;
                }
                
                addLog(`<span class="log-success">炼制${recipe.name}成功！${effectText}</span>`);
                renderAlchemy();
                updateUI();
            }
        }

        // 成就定义
        const achievementsData = {
            // 境界成就
            first_breakthrough: {
                name: '初窥门径',
                desc: '第一次突破境界',
                category: 'realm',
                check: () => gameData.player.realmLevel > 1 || gameData.player.realm > 0,
                reward: { spiritStone: 50 }
            },
            realm_foundation: {
                name: '筑基成功',
                desc: '达到筑基期',
                category: 'realm',
                check: () => gameData.player.realm >= 1,
                reward: { spiritStone: 200 }
            },
            realm_golden: {
                name: '金丹大道',
                desc: '达到金丹期',
                category: 'realm',
                check: () => gameData.player.realm >= 2,
                reward: { spiritStone: 500 }
            },
            realm_nascent: {
                name: '元婴之境',
                desc: '达到元婴期',
                category: 'realm',
                check: () => gameData.player.realm >= 3,
                reward: { spiritStone: 2000 }
            },
            realm_spirit: {
                name: '化神成功',
                desc: '达到化神期',
                category: 'realm',
                check: () => gameData.player.realm >= 4,
                reward: { spiritStone: 5000 }
            },
            realm_void: {
                name: '炼虚仙人',
                desc: '达到炼虚期',
                category: 'realm',
                check: () => gameData.player.realm >= 5,
                reward: { spiritStone: 10000 }
            },
            realm_unity: {
                name: '合体真仙',
                desc: '达到合体期',
                category: 'realm',
                check: () => gameData.player.realm >= 6,
                reward: { spiritStone: 20000 }
            },
            realm_mahayana: {
                name: '大乘至尊',
                desc: '达到大乘期',
                category: 'realm',
                check: () => gameData.player.realm >= 7,
                reward: { spiritStone: 50000 }
            },
            realm_tribulation: {
                name: '渡劫成仙',
                desc: '达到渡劫期',
                category: 'realm',
                check: () => gameData.player.realm >= 8,
                reward: { spiritStone: 100000 }
            },
            realm_level_5: {
                name: '境界精进',
                desc: '任意境界达到第5层',
                category: 'realm',
                check: () => gameData.player.realmLevel >= 5,
                reward: { spiritStone: 150 }
            },
            realm_level_9: {
                name: '境界圆满',
                desc: '任意境界达到第9层',
                category: 'realm',
                check: () => gameData.player.realmLevel >= 9,
                reward: { spiritStone: 500 }
            },
            
            // 修炼成就
            cultivate_10: {
                name: '修炼入门',
                desc: '修炼10天',
                category: 'cultivation',
                check: () => gameData.player.totalDays >= 10,
                reward: { spiritStone: 20 }
            },
            cultivate_100: {
                name: '勤修苦练',
                desc: '修炼100天',
                category: 'cultivation',
                check: () => gameData.player.totalDays >= 100,
                reward: { spiritStone: 100 }
            },
            cultivate_500: {
                name: '百折不挠',
                desc: '修炼500天',
                category: 'cultivation',
                check: () => gameData.player.totalDays >= 500,
                reward: { spiritStone: 500 }
            },
            cultivate_1000: {
                name: '持之以恒',
                desc: '修炼1000天',
                category: 'cultivation',
                check: () => gameData.player.totalDays >= 1000,
                reward: { spiritStone: 1000 }
            },
            cultivate_5000: {
                name: '修仙大师',
                desc: '修炼5000天',
                category: 'cultivation',
                check: () => gameData.player.totalDays >= 5000,
                reward: { spiritStone: 5000 }
            },
            spiritual_power_1k: {
                name: '灵力初成',
                desc: '灵力达到1000',
                category: 'cultivation',
                check: () => gameData.player.spiritualPower >= 1000,
                reward: { spiritStone: 50 }
            },
            spiritual_power_10k: {
                name: '灵力深厚',
                desc: '灵力达到10000',
                category: 'cultivation',
                check: () => gameData.player.spiritualPower >= 10000,
                reward: { spiritStone: 200 }
            },
            spiritual_power_100k: {
                name: '灵力充盈',
                desc: '灵力达到100000',
                category: 'cultivation',
                check: () => gameData.player.spiritualPower >= 100000,
                reward: { spiritStone: 800 }
            },
            spiritual_power_1m: {
                name: '灵力如海',
                desc: '灵力达到1000000',
                category: 'cultivation',
                check: () => gameData.player.spiritualPower >= 1000000,
                reward: { spiritStone: 5000 }
            },
            
            // 设施成就
            facility_level_5: {
                name: '初级建设者',
                desc: '任意设施升至5级',
                category: 'facility',
                check: () => {
                    for (let id in gameData.facilities) {
                        if (gameData.facilities[id] >= 5) return true;
                    }
                    return false;
                },
                reward: { spiritStone: 100 }
            },
            facility_level_10: {
                name: '设施大师',
                desc: '任意设施升至10级',
                category: 'facility',
                check: () => {
                    for (let id in gameData.facilities) {
                        if (gameData.facilities[id] >= 10) return true;
                    }
                    return false;
                },
                reward: { spiritStone: 500 }
            },
            facility_level_20: {
                name: '建筑宗师',
                desc: '任意设施升至20级',
                category: 'facility',
                check: () => {
                    for (let id in gameData.facilities) {
                        if (gameData.facilities[id] >= 20) return true;
                    }
                    return false;
                },
                reward: { spiritStone: 2000 }
            },
            all_facilities: {
                name: '全面发展',
                desc: '所有设施至少升至1级',
                category: 'facility',
                check: () => {
                    for (let id in gameData.facilities) {
                        if (gameData.facilities[id] === 0) return false;
                    }
                    return true;
                },
                reward: { spiritStone: 300 }
            },
            vein_master: {
                name: '灵脉宗师',
                desc: '灵脉升至15级',
                category: 'facility',
                check: () => gameData.facilities.spiritualVein >= 15,
                reward: { spiritStone: 1000 }
            },
            pill_factory: {
                name: '丹药工厂',
                desc: '丹房升至10级',
                category: 'facility',
                check: () => gameData.facilities.pillRoom >= 10,
                reward: { spiritStone: 800 }
            },
            
            // 功法成就
            technique_start: {
                name: '功法入门',
                desc: '任意功法修炼至3级',
                category: 'technique',
                check: () => {
                    for (let id in gameData.techniques) {
                        if (gameData.techniques[id] >= 3) return true;
                    }
                    return false;
                },
                reward: { spiritStone: 100 }
            },
            technique_master: {
                name: '功法大成',
                desc: '任意功法修炼至满级',
                category: 'technique',
                check: () => {
                    for (let id in gameData.techniques) {
                        if (techniquesData[id] && techniquesData[id].maxLevel) {
                            const maxLevel = techniquesData[id].maxLevel;
                            if (gameData.techniques[id] >= maxLevel) return true;
                        }
                    }
                    return false;
                },
                reward: { spiritStone: 1000 }
            },
            all_techniques: {
                name: '博学多才',
                desc: '所有功法至少修炼1级',
                category: 'technique',
                check: () => {
                    for (let id in gameData.techniques) {
                        if (gameData.techniques[id] === 0) return false;
                    }
                    return true;
                },
                reward: { spiritStone: 800 }
            },
            all_techniques_max: {
                name: '功法圆满',
                desc: '所有基础和进阶功法修炼至满级',
                category: 'technique',
                check: () => {
                    for (let id in techniquesData) {
                        const tech = techniquesData[id];
                        // 只检查基础和进阶功法
                        if (tech.category === 'basic' || tech.category === 'advanced') {
                            const level = gameData.techniques[id] || 0;
                            if (level < tech.maxLevel) return false;
                        }
                    }
                    return true;
                },
                reward: { spiritStone: 5000 }
            },
            
            // 财富成就
            rich_100: {
                name: '小有积蓄',
                desc: '拥有100灵石',
                category: 'wealth',
                check: () => gameData.player.spiritStone >= 100,
                reward: { spiritStone: 50 }
            },
            rich_1000: {
                name: '财源广进',
                desc: '拥有1000灵石',
                category: 'wealth',
                check: () => gameData.player.spiritStone >= 1000,
                reward: { spiritStone: 200 }
            },
            rich_10000: {
                name: '财富自由',
                desc: '拥有10000灵石',
                category: 'wealth',
                check: () => gameData.player.spiritStone >= 10000,
                reward: { spiritStone: 2000 }
            },
            rich_100k: {
                name: '富可敌国',
                desc: '拥有100000灵石',
                category: 'wealth',
                check: () => gameData.player.spiritStone >= 100000,
                reward: { spiritStone: 10000 }
            },
            pill_10: {
                name: '丹药入门',
                desc: '同时拥有10枚丹药',
                category: 'wealth',
                check: () => gameData.player.pills >= 10,
                reward: { spiritStone: 50 }
            },
            pill_50: {
                name: '丹药收藏家',
                desc: '同时拥有50枚丹药',
                category: 'wealth',
                check: () => gameData.player.pills >= 50,
                reward: { spiritStone: 300 }
            },
            pill_100: {
                name: '丹药大师',
                desc: '同时拥有100枚丹药',
                category: 'wealth',
                check: () => gameData.player.pills >= 100,
                reward: { spiritStone: 1000 }
            },
            
            // 特殊成就
            auto_master: {
                name: '挂机达人',
                desc: '开启自动修炼',
                category: 'special',
                check: () => gameData.autoMode,
                reward: { spiritStone: 100 }
            },
            first_pill_use: {
                name: '丹药初体验',
                desc: '使用第一枚丹药',
                category: 'special',
                check: () => gameData.player.totalPillsUsed > 0,
                reward: { spiritStone: 50 }
            },
            breakthrough_success: {
                name: '突破成功',
                desc: '成功突破境界10次',
                category: 'special',
                check: () => gameData.player.totalBreakthroughs >= 10,
                reward: { spiritStone: 300 }
            },
            breakthrough_master: {
                name: '突破大师',
                desc: '成功突破境界50次',
                category: 'special',
                check: () => gameData.player.totalBreakthroughs >= 50,
                reward: { spiritStone: 1500 }
            },
            
            // 门派成就
            join_sect: {
                name: '入门弟子',
                desc: '加入任意门派',
                category: 'special',
                check: () => gameData.sect && gameData.sect !== 'rogue',
                reward: { spiritStone: 200 }
            },
            sect_contribution_100: {
                name: '门派新星',
                desc: '获得100贡献度',
                category: 'special',
                check: () => gameData.sectContribution >= 100,
                reward: { spiritStone: 150 }
            },
            sect_contribution_500: {
                name: '核心弟子',
                desc: '获得500贡献度',
                category: 'special',
                check: () => gameData.sectContribution >= 500,
                reward: { spiritStone: 500 }
            },
            sect_contribution_1000: {
                name: '长老候选',
                desc: '获得1000贡献度',
                category: 'special',
                check: () => gameData.sectContribution >= 1000,
                reward: { spiritStone: 1500 }
            },
            worship_master: {
                name: '拜师学艺',
                desc: '拜师成功',
                category: 'special',
                check: () => gameData.masterLevel > 0,
                reward: { spiritStone: 300 }
            },
            accept_disciple: {
                name: '为人师表',
                desc: '收徒1人',
                category: 'special',
                check: () => gameData.disciples.length >= 1,
                reward: { spiritStone: 500 }
            },
            three_disciples: {
                name: '桃李满门',
                desc: '收徒3人',
                category: 'special',
                check: () => gameData.disciples.length >= 3,
                reward: { spiritStone: 2000 }
            },
            
            // 飞升成就
            first_ascension: {
                name: '首次飞升',
                desc: '完成第一次飞升',
                category: 'special',
                check: () => gameData.ascensionCount >= 1,
                reward: { spiritStone: 1000 }
            },
            ascension_3: {
                name: '三次飞升',
                desc: '飞升3次，解锁仙界',
                category: 'special',
                check: () => gameData.ascensionCount >= 3,
                reward: { spiritStone: 5000 }
            },
            ascension_10: {
                name: '永恒之路',
                desc: '飞升10次',
                category: 'special',
                check: () => gameData.ascensionCount >= 10,
                reward: { spiritStone: 20000 }
            },
            
            // 法宝成就
            first_artifact: {
                name: '法宝入手',
                desc: '获得第一件法宝',
                category: 'special',
                check: () => gameData.artifacts.length >= 1,
                reward: { spiritStone: 300 }
            },
            three_artifacts: {
                name: '法宝收藏家',
                desc: '获得3件法宝',
                category: 'special',
                check: () => gameData.artifacts.length >= 3,
                reward: { spiritStone: 1000 }
            },
            
            // 灵宠成就
            first_pet: {
                name: '首只灵宠',
                desc: '获得第一只灵宠',
                category: 'special',
                check: () => gameData.pets && gameData.pets.length >= 1,
                reward: { spiritStone: 400 }
            },
            pet_collector: {
                name: '灵宠大师',
                desc: '收集3只灵宠',
                category: 'special',
                check: () => gameData.pets && gameData.pets.length >= 3,
                reward: { spiritStone: 1500 }
            },
            all_pets: {
                name: '百兽之王',
                desc: '收集所有灵宠',
                category: 'special',
                check: () => gameData.pets && gameData.pets.length >= Object.keys(pets).length,
                reward: { spiritStone: 5000 },
                bonus: { spiritualPowerBonus: 0.1 } // 永久加成：灵力获取+10%
            },
            
            // ==================== 门派成就 ====================
            join_sect: {
                name: '加入门派',
                desc: '加入第一个门派',
                category: 'sect',
                check: () => gameData.sect && gameData.sect !== 'rogue',
                reward: { spiritStone: 300 }
            },
            righteous_path: {
                name: '正道之路',
                desc: '加入正派门派',
                category: 'sect',
                check: () => ['sword_sect', 'pill_sect', 'formation_sect', 'buddhist_sect'].includes(gameData.sect),
                reward: { spiritStone: 500 }
            },
            evil_path: {
                name: '魔道之路',
                desc: '加入反派门派',
                category: 'sect',
                check: () => ['demon_sect', 'evil_cult', 'blood_sect'].includes(gameData.sect),
                reward: { spiritStone: 500 }
            },
            neutral_path: {
                name: '中庸之道',
                desc: '加入中立门派',
                category: 'sect',
                check: () => ['taoist_sect', 'merchant_guild', 'rogue'].includes(gameData.sect),
                reward: { spiritStone: 500 }
            },
            sect_contributor: {
                name: '门派贡献者',
                desc: '门派贡献度达到100',
                category: 'sect',
                check: () => (gameData.sectContribution || 0) >= 100,
                reward: { spiritStone: 800 }
            },
            sect_master: {
                name: '门派大师',
                desc: '门派贡献度达到500',
                category: 'sect',
                check: () => (gameData.sectContribution || 0) >= 500,
                reward: { spiritStone: 2000 }
            },
            
            // ==================== 人际关系成就 ====================
            first_friend: {
                name: '初识朋友',
                desc: '与第一个NPC建立朋友关系',
                category: 'relationship',
                check: () => {
                    if (!gameData.npcRelationships) return false;
                    for (let npcId in gameData.npcRelationships) {
                        const npc = gameData.npcRelationships[npcId];
                        if (npc.favor >= 40 && npc.loyalty >= 40 && npc.trust >= 40) {
                            return true;
                        }
                    }
                    return false;
                },
                reward: { spiritStone: 200 }
            },
            social_butterfly: {
                name: '社交达人',
                desc: '与5个NPC建立朋友关系',
                category: 'relationship',
                check: () => {
                    if (!gameData.npcRelationships) return false;
                    let friendCount = 0;
                    for (let npcId in gameData.npcRelationships) {
                        const npc = gameData.npcRelationships[npcId];
                        if (npc.favor >= 40 && npc.loyalty >= 40 && npc.trust >= 40) {
                            friendCount++;
                        }
                    }
                    return friendCount >= 5;
                },
                reward: { spiritStone: 1000 }
            },
            best_friend: {
                name: '生死之交',
                desc: '与一个NPC建立生死之交关系',
                category: 'relationship',
                check: () => {
                    if (!gameData.npcRelationships) return false;
                    for (let npcId in gameData.npcRelationships) {
                        const npc = gameData.npcRelationships[npcId];
                        if (npc.favor >= 80 && npc.loyalty >= 80 && npc.trust >= 80) {
                            return true;
                        }
                    }
                    return false;
                },
                reward: { spiritStone: 1500 }
            },

            // —— 新的人际系统（knownNPCs 与 npcData）——
            meet_first_npc: {
                name: '初次相识',
                desc: '结识第一位修士',
                category: 'relationship',
                check: () => (gameData.knownNPCs && gameData.knownNPCs.length >= 1),
                reward: { spiritStone: 100 }
            },
            meet_5_npcs: {
                name: '广结善缘 I',
                desc: '结识5位修士',
                category: 'relationship',
                check: () => (gameData.knownNPCs && gameData.knownNPCs.length >= 5),
                reward: { spiritStone: 300 }
            },
            meet_10_npcs: {
                name: '广结善缘 II',
                desc: '结识10位修士',
                category: 'relationship',
                check: () => (gameData.knownNPCs && gameData.knownNPCs.length >= 10),
                reward: { spiritStone: 800 }
            },
            meet_20_npcs: {
                name: '广结善缘 III',
                desc: '结识20位修士',
                category: 'relationship',
                check: () => (gameData.knownNPCs && gameData.knownNPCs.length >= 20),
                reward: { spiritStone: 2000 }
            },
            meet_sect_master: {
                name: '拜见掌门',
                desc: '结识本门派掌门',
                category: 'relationship',
                check: () => {
                    if (!gameData.sect || gameData.sect === 'rogue' || !gameData.knownNPCs) return false;
                    const map = {
                        'sword_sect': 'sword',
                        'pill_sect': 'alchemy',
                        'formation_sect': 'formation',
                        'buddhist_sect': 'buddhist',
                        'taoist_sect': 'taoist',
                        'demon_sect': 'demon',
                        'evil_cult': 'evil_cult',
                        'blood_sect': 'blood_sect',
                        'merchant_guild': 'merchant'
                    };
                    const sectKey = map[gameData.sect];
                    if (!sectKey) return false;
                    return gameData.knownNPCs.some(id => relationshipNPCs[id] && relationshipNPCs[id].sect === sectKey && relationshipNPCs[id].role === 'master');
                },
                reward: { spiritStone: 400 }
            },
            relation_level_friendly: {
                name: '惺惺相惜',
                desc: '与任意修士达到关系“友好”',
                category: 'relationship',
                check: () => {
                    if (!gameData.npcData) return false;
                    for (let id in gameData.npcData) {
                        const r = gameData.npcData[id].relationship;
                        if (r && r.level >= 3) return true;
                    }
                    return false;
                },
                reward: { spiritStone: 300 }
            },
            relation_level_intimate: {
                name: '莫逆之交',
                desc: '与任意修士达到关系“亲密”',
                category: 'relationship',
                check: () => {
                    if (!gameData.npcData) return false;
                    for (let id in gameData.npcData) {
                        const r = gameData.npcData[id].relationship;
                        if (r && r.level >= 4) return true;
                    }
                    return false;
                },
                reward: { spiritStone: 800 }
            },
            relation_level_best: {
                name: '挚友如故',
                desc: '与任意修士达到关系“挚友”',
                category: 'relationship',
                check: () => {
                    if (!gameData.npcData) return false;
                    for (let id in gameData.npcData) {
                        const r = gameData.npcData[id].relationship;
                        if (r && r.level >= 5) return true;
                    }
                    return false;
                },
                reward: { spiritStone: 1500 }
            },
            meet_by_introduction_1: {
                name: '名动同门 I',
                desc: '通过请求介绍结识1位修士',
                category: 'relationship',
                check: () => {
                    if (!gameData.npcData) return false;
                    let count = 0;
                    for (let id in gameData.npcData) {
                        const h = gameData.npcData[id].relationshipHistory || [];
                        if (h.some(x => x.action === 'ask_introduction')) { count++; break; }
                    }
                    return count >= 1;
                },
                reward: { spiritStone: 300 }
            },
            meet_by_introduction_5: {
                name: '名动同门 II',
                desc: '通过请求介绍累计5次成功结识',
                category: 'relationship',
                check: () => {
                    if (!gameData.npcData) return false;
                    let total = 0;
                    for (let id in gameData.npcData) {
                        const h = gameData.npcData[id].relationshipHistory || [];
                        total += h.filter(x => x.action === 'ask_introduction').length;
                    }
                    return total >= 5;
                },
                reward: { spiritStone: 1200 }
            },
            
            // ==================== 任务成就 ====================
            first_task: {
                name: '初出茅庐',
                desc: '完成第一个门派任务',
                category: 'task',
                check: () => (gameData.sectContribution || 0) > 0,
                reward: { spiritStone: 150 }
            },
            task_master: {
                name: '任务达人',
                desc: '完成10个门派任务',
                category: 'task',
                check: () => {
                    // 通过贡献度估算完成的任务数量
                    const contribution = gameData.sectContribution || 0;
                    return contribution >= 200; // 假设平均每个任务20贡献度
                },
                reward: { spiritStone: 800 }
            },
            righteous_warrior: {
                name: '正义战士',
                desc: '完成10个正派任务',
                category: 'task',
                check: () => {
                    const contribution = gameData.sectContribution || 0;
                    const isRighteous = ['sword_sect', 'pill_sect', 'formation_sect', 'buddhist_sect'].includes(gameData.sect);
                    return isRighteous && contribution >= 200;
                },
                reward: { spiritStone: 1000 }
            },
            demon_hunter: {
                name: '除魔卫道',
                desc: '完成10个反派任务',
                category: 'task',
                check: () => {
                    const contribution = gameData.sectContribution || 0;
                    const isEvil = ['demon_sect', 'evil_cult', 'blood_sect'].includes(gameData.sect);
                    return isEvil && contribution >= 200;
                },
                reward: { spiritStone: 1000 }
            },
            
            // ==================== 战斗技能成就 ====================
            learn_skill: {
                name: '技能初学者',
                desc: '学习第一个战斗技能',
                category: 'combat',
                check: () => gameData.combatSkills && gameData.combatSkills.length > 0,
                reward: { spiritStone: 200 }
            },
            skill_master: {
                name: '技能大师',
                desc: '学习所有战斗技能',
                category: 'combat',
                check: () => gameData.combatSkills && gameData.combatSkills.length >= Object.keys(combatSkills).length,
                reward: { spiritStone: 1500 }
            },
            
            // ==================== 隐藏成就 ====================
            // 战斗成就
            battle_master: {
                name: '⭐ 战无不胜',
                desc: '???（战斗胜利10次）',
                category: 'hidden',
                hidden: true,
                hiddenDesc: '战斗胜利10次',
                check: () => (gameData.player.combatWins || 0) >= 10,
                reward: { spiritStone: 2000, immortalStone: 5 },
                bonus: { combatPowerBonus: 0.05 } // 战斗力+5%
            },
            battle_legend: {
                name: '⭐ 战斗传说',
                desc: '???（战斗胜利50次）',
                category: 'hidden',
                hidden: true,
                hiddenDesc: '战斗胜利50次',
                check: () => (gameData.player.combatWins || 0) >= 50,
                reward: { spiritStone: 10000, immortalStone: 20 },
                bonus: { combatPowerBonus: 0.1, spiritualPowerBonus: 0.05 }
            },
            boss_slayer: {
                name: '⭐ 屠龙勇士',
                desc: '???（击败所有Boss）',
                category: 'hidden',
                hidden: true,
                hiddenDesc: '击败所有Boss',
                check: () => (gameData.player.bossesDefeated || []).length >= Object.keys(bossesData).length,
                reward: { spiritStone: 20000, immortalStone: 50, daoFruit: 2 },
                bonus: { allBonus: 0.15 } // 全属性+15%
            },
            
            // 财富成就（隐藏）
            spirit_stone_10k: {
                name: '⭐ 灵石大亨',
                desc: '???（拥有10000灵石）',
                category: 'hidden',
                hidden: true,
                hiddenDesc: '同时拥有10000灵石',
                check: () => gameData.player.spiritStone >= 10000,
                reward: { spiritStone: 1000 },
                bonus: { spiritStoneBonus: 0.05 } // 灵石获取+5%
            },
            spirit_stone_100k: {
                name: '⭐ 富可敌国',
                desc: '???（拥有100000灵石）',
                category: 'hidden',
                hidden: true,
                hiddenDesc: '同时拥有100000灵石',
                check: () => gameData.player.spiritStone >= 100000,
                reward: { spiritStone: 10000, immortalStone: 10 },
                bonus: { spiritStoneBonus: 0.1 }
            },
            
            // 速度成就（隐藏）
            quick_foundation: {
                name: '⭐ 天赋异禀',
                desc: '???（100天内达到筑基期）',
                category: 'hidden',
                hidden: true,
                hiddenDesc: '100天内达到筑基期',
                check: () => gameData.player.realm >= 1 && gameData.player.totalDays <= 100,
                reward: { spiritStone: 5000, pills: 50 },
                bonus: { spiritualPowerBonus: 0.2 } // 灵力获取+20%
            },
            quick_golden: {
                name: '⭐ 修仙奇才',
                desc: '???（500天内达到金丹期）',
                category: 'hidden',
                hidden: true,
                hiddenDesc: '500天内达到金丹期',
                check: () => gameData.player.realm >= 2 && gameData.player.totalDays <= 500,
                reward: { spiritStone: 20000, immortalStone: 20, daoFruit: 1 },
                bonus: { spiritualPowerBonus: 0.3, breakthroughBonus: 0.05 }
            },
            
            // 完美成就（隐藏）
            perfect_realm: {
                name: '⭐ 境界圆满',
                desc: '???（所有境界都达到第9层后才突破）',
                category: 'hidden',
                hidden: true,
                hiddenDesc: '从不在第9层前突破境界',
                check: () => {
                    // 这个需要特殊追踪，暂时简化为：达到金丹期且所有突破都是满层
                    return gameData.player.realm >= 2 && (gameData.player.totalBreakthroughs || 0) >= 10;
                },
                reward: { spiritStone: 50000, immortalStone: 50, daoFruit: 3 },
                bonus: { breakthroughBonus: 0.15, spiritualPowerBonus: 0.2 }
            },
            
            // 收集成就（隐藏）
            technique_master: {
                name: '⭐ 功法宗师',
                desc: '???（学习所有功法）',
                category: 'hidden',
                hidden: true,
                hiddenDesc: '学习所有功法',
                check: () => {
                    let count = 0;
                    for (let id in gameData.techniques) {
                        if (gameData.techniques[id] > 0) count++;
                    }
                    return count >= Object.keys(techniquesData).length;
                },
                reward: { spiritStone: 30000, immortalStone: 30, daoFruit: 2 },
                bonus: { spiritualPowerBonus: 0.25 }
            },
            all_talents: {
                name: '⭐ 天赋满级',
                desc: '???（激活所有天赋）',
                category: 'hidden',
                hidden: true,
                hiddenDesc: '激活所有天赋',
                check: () => (gameData.talents || []).length >= Object.keys(talentsData).length,
                reward: { spiritStone: 100000, immortalStone: 100, daoFruit: 5 },
                bonus: { allBonus: 0.25 } // 全属性+25%
            },
            
            // 特殊成就（隐藏）
            no_pill_foundation: {
                name: '⭐ 自力更生',
                desc: '???（不使用丹药达到筑基期）',
                category: 'hidden',
                hidden: true,
                hiddenDesc: '不使用丹药达到筑基期',
                check: () => gameData.player.realm >= 1 && (gameData.player.totalPillsUsed || 0) === 0,
                reward: { spiritStone: 10000, pills: 100 },
                bonus: { breakthroughBonus: 0.1 }
            },
            lucky_one: {
                name: '⭐ 欧皇附体',
                desc: '???（连续成功突破10次）',
                category: 'hidden',
                hidden: true,
                hiddenDesc: '连续成功突破10次',
                check: () => (gameData.player.totalBreakthroughs || 0) >= 10,
                reward: { spiritStone: 15000, immortalStone: 15, daoFruit: 1 },
                bonus: { breakthroughBonus: 0.08 }
            },
            dungeon_master: {
                name: '⭐ 副本专家',
                desc: '???（完成50次副本）',
                category: 'hidden',
                hidden: true,
                hiddenDesc: '完成50次副本挑战',
                check: () => {
                    let total = 0;
                    for (let id in gameData.dungeonProgress || {}) {
                        total += gameData.dungeonProgress[id] || 0;
                    }
                    return total >= 50;
                },
                reward: { spiritStone: 20000, immortalStone: 30, daoFruit: 2 },
                bonus: { combatPowerBonus: 0.15, spiritStoneBonus: 0.1 }
            },
            
            // 终极成就（隐藏）
            true_immortal: {
                name: '⭐⭐⭐ 真·仙人',
                desc: '???（飞升10次且达到渡劫期）',
                category: 'hidden',
                hidden: true,
                hiddenDesc: '飞升10次且达到渡劫期第9层',
                check: () => gameData.ascensionCount >= 10 && gameData.player.realm >= 8 && gameData.player.realmLevel >= 9,
                reward: { spiritStone: 500000, immortalStone: 500, daoFruit: 20 },
                bonus: { allBonus: 0.5, spiritualPowerBonus: 0.5, breakthroughBonus: 0.2 } // 超强加成
            },
            perfect_cultivator: {
                name: '⭐⭐⭐ 完美修士',
                desc: '???（完成所有非隐藏成就）',
                category: 'hidden',
                hidden: true,
                hiddenDesc: '完成所有非隐藏成就',
                check: () => {
                    let nonHiddenCount = 0;
                    let completedNonHidden = 0;
                    for (let id in achievementsData) {
                        const ach = achievementsData[id];
                        if (!ach.hidden) {
                            nonHiddenCount++;
                            if (gameData.achievements.includes(id)) completedNonHidden++;
                        }
                    }
                    return completedNonHidden >= nonHiddenCount - 1; // 排除自己
                },
                reward: { spiritStone: 1000000, immortalStone: 1000, daoFruit: 50 },
                bonus: { allBonus: 1.0 } // 全属性翻倍！
            },
            
            // ==================== 新增成就 ====================
            // 设施相关
            facility_max_all: {
                name: '基建狂魔',
                desc: '所有设施都升到10级以上',
                category: 'facility',
                check: () => {
                    for (let id in gameData.facilities) {
                        if (gameData.facilities[id] < 10) return false;
                    }
                    return true;
                },
                reward: { spiritStone: 5000, immortalStone: 15 },
                bonus: { facilityBonus: 0.1 }
            },
            
            vein_legend: {
                name: '灵脉传说',
                desc: '灵脉升至30级',
                category: 'facility',
                check: () => gameData.facilities.spiritualVein >= 30,
                reward: { spiritStone: 10000, immortalStone: 25 },
                bonus: { spiritualPowerBonus: 0.15 }
            },
            
            // 门派相关
            sect_loyalty: {
                name: '门派忠臣',
                desc: '门派贡献度达到500',
                category: 'special',
                check: () => (gameData.sectContribution || 0) >= 500,
                reward: { spiritStone: 3000, pills: 50 },
                bonus: { contributionBonus: 0.2 }
            },
            
            sect_legend: {
                name: '门派传奇',
                desc: '门派贡献度达到2000',
                category: 'special',
                check: () => (gameData.sectContribution || 0) >= 2000,
                reward: { spiritStone: 15000, immortalStone: 30, pills: 100 },
                bonus: { contributionBonus: 0.5, allBonus: 0.1 }
            },
            
            master_teacher: {
                name: '名师高徒',
                desc: '成功收徒3人',
                category: 'special',
                check: () => (gameData.disciples || []).length >= 3,
                reward: { spiritStone: 5000, immortalStone: 10 },
                bonus: { spiritualPowerBonus: 0.08 }
            },
            
            // 五行相关
            element_awakened: {
                name: '五行觉醒',
                desc: '选择一个五行属性',
                category: 'special',
                check: () => gameData.player.element && gameData.player.element !== 'none',
                reward: { spiritStone: 1000, immortalStone: 5 }
            },
            
            element_master: {
                name: '⭐ 五行大师',
                desc: '???（五行属性强度达到10级）',
                category: 'hidden',
                hidden: true,
                hiddenDesc: '五行属性强度达到10级',
                check: () => (gameData.player.elementPower || 0) >= 10,
                reward: { spiritStone: 20000, immortalStone: 50, daoFruit: 3 },
                bonus: { allBonus: 0.15 }
            },
            
            // 天赋相关
            talent_collector: {
                name: '天赋初成',
                desc: '激活3个天赋',
                category: 'special',
                check: () => (gameData.talents || []).length >= 3,
                reward: { spiritStone: 5000, immortalStone: 15, daoFruit: 1 }
            },
            
            talent_master: {
                name: '天赋精通',
                desc: '激活6个天赋',
                category: 'special',
                check: () => (gameData.talents || []).length >= 6,
                reward: { spiritStone: 20000, immortalStone: 40, daoFruit: 3 },
                bonus: { spiritualPowerBonus: 0.1 }
            },
            
            // 仙界相关
            immortal_world_entry: {
                name: '初入仙界',
                desc: '成功进入仙界',
                category: 'special',
                check: () => gameData.player.isInImmortalWorld === true,
                reward: { spiritStone: 50000, immortalStone: 100, daoFruit: 5 },
                bonus: { spiritualPowerBonus: 0.2 }
            },
            
            earth_immortal: {
                name: '地仙之境',
                desc: '在仙界达到地仙第9层',
                category: 'special',
                check: () => gameData.player.isInImmortalWorld && gameData.player.immortalRealm >= 0 && gameData.player.immortalRealmLevel >= 9,
                reward: { spiritStone: 100000, immortalStone: 200, daoFruit: 10 },
                bonus: { allBonus: 0.2 }
            },
            
            // 资源相关
            pill_hoarder: {
                name: '丹药富翁',
                desc: '同时拥有100枚丹药',
                category: 'wealth',
                check: () => gameData.player.pills >= 100,
                reward: { spiritStone: 5000, immortalStone: 10 }
            },
            
            pill_master: {
                name: '⭐ 丹药大师',
                desc: '???（同时拥有500枚丹药）',
                category: 'hidden',
                hidden: true,
                hiddenDesc: '同时拥有500枚丹药',
                check: () => gameData.player.pills >= 500,
                reward: { spiritStone: 30000, immortalStone: 50, daoFruit: 2 },
                bonus: { pillBonus: 0.2 }
            },
            
            immortal_stone_collector: {
                name: '仙石收藏家',
                desc: '拥有100仙石',
                category: 'wealth',
                check: () => (gameData.player.immortalStone || 0) >= 100,
                reward: { spiritStone: 10000, immortalStone: 20 }
            },
            
            dao_fruit_master: {
                name: '⭐ 道果仙人',
                desc: '???（拥有20道果）',
                category: 'hidden',
                hidden: true,
                hiddenDesc: '同时拥有20道果',
                check: () => (gameData.player.daoFruit || 0) >= 20,
                reward: { spiritStone: 50000, immortalStone: 100, daoFruit: 10 },
                bonus: { allBonus: 0.2 }
            },
            
            // 战斗相关（新增）
            first_battle: {
                name: '初涉战场',
                desc: '完成第一场战斗',
                category: 'special',
                check: () => (gameData.player.combatWins || 0) >= 1 || (gameData.player.combatLosses || 0) >= 1,
                reward: { spiritStone: 500, pills: 5 }
            },
            
            undefeated: {
                name: '⭐ 百战不殆',
                desc: '???（连胜20场）',
                category: 'hidden',
                hidden: true,
                hiddenDesc: '连续获胜20场战斗',
                check: () => (gameData.player.combatWins || 0) >= 20 && (gameData.player.combatLosses || 0) === 0,
                reward: { spiritStone: 25000, immortalStone: 40, daoFruit: 2 },
                bonus: { combatPowerBonus: 0.2 }
            },
            
            // 时间相关
            speed_runner: {
                name: '⭐ 速通传说',
                desc: '???（300天内达到元婴期）',
                category: 'hidden',
                hidden: true,
                hiddenDesc: '300天内达到元婴期',
                check: () => gameData.player.realm >= 3 && gameData.player.totalDays <= 300,
                reward: { spiritStone: 40000, immortalStone: 60, daoFruit: 3 },
                bonus: { spiritualPowerBonus: 0.4, breakthroughBonus: 0.1 }
            },
            
            ancient_one: {
                name: '长生久视',
                desc: '修炼超过10000天',
                category: 'cultivation',
                check: () => gameData.player.totalDays >= 10000,
                reward: { spiritStone: 50000, immortalStone: 100, daoFruit: 5 },
                bonus: { allBonus: 0.15 }
            },
            
            // 综合成就
            resource_master: {
                name: '⭐ 资源大师',
                desc: '???（同时拥有50000灵石、200丹药、50仙石）',
                category: 'hidden',
                hidden: true,
                hiddenDesc: '同时拥有50000灵石、200丹药、50仙石',
                check: () => gameData.player.spiritStone >= 50000 && gameData.player.pills >= 200 && (gameData.player.immortalStone || 0) >= 50,
                reward: { spiritStone: 100000, immortalStone: 200, daoFruit: 10 },
                bonus: { spiritStoneBonus: 0.15, spiritualPowerBonus: 0.15 }
            },
            
            power_overwhelming: {
                name: '⭐ 力压群雄',
                desc: '???（战斗力超过10000）',
                category: 'hidden',
                hidden: true,
                hiddenDesc: '战斗力超过10000',
                check: () => calculateCombatPower() >= 10000,
                reward: { spiritStone: 50000, immortalStone: 100, daoFruit: 5 },
                bonus: { combatPowerBonus: 0.25 }
            },
            
            ascension_master: {
                name: '⭐ 飞升之主',
                desc: '???（飞升20次）',
                category: 'hidden',
                hidden: true,
                hiddenDesc: '飞升20次',
                check: () => gameData.ascensionCount >= 20,
                reward: { spiritStone: 1000000, immortalStone: 2000, daoFruit: 50 },
                bonus: { allBonus: 0.5, spiritualPowerBonus: 1.0 }
            },
            
            breakthrough_100: {
                name: '突破百次',
                desc: '成功突破100次',
                category: 'cultivation',
                check: () => (gameData.player.totalBreakthroughs || 0) >= 100,
                reward: { spiritStone: 20000, immortalStone: 40 },
                bonus: { breakthroughBonus: 0.1 }
            },
            
            no_failure: {
                name: '⭐ 从不失败',
                desc: '???（突破50次从未失败）',
                category: 'hidden',
                hidden: true,
                hiddenDesc: '突破50次从未失败过',
                check: () => (gameData.player.totalBreakthroughs || 0) >= 50,
                reward: { spiritStone: 50000, immortalStone: 100, daoFruit: 5 },
                bonus: { breakthroughBonus: 0.15 }
            },
            
            dungeon_champion: {
                name: '副本霸主',
                desc: '完成100次副本',
                category: 'special',
                check: () => {
                    let total = 0;
                    for (let id in gameData.dungeonProgress || {}) {
                        total += gameData.dungeonProgress[id] || 0;
                    }
                    return total >= 100;
                },
                reward: { spiritStone: 50000, immortalStone: 100, daoFruit: 5 },
                bonus: { combatPowerBonus: 0.2, spiritStoneBonus: 0.15 }
            },
            
            // ==================== 新副本探索成就 ====================
            first_dungeon_exploration: {
                name: '初次探险',
                desc: '完成第一次副本探索',
                category: 'dungeon',
                check: () => {
                    let total = 0;
                    for (let id in gameData.dungeonProgress || {}) {
                        total += gameData.dungeonProgress[id] || 0;
                    }
                    return total >= 1;
                },
                reward: { spiritStone: 1000, pills: 5, immortalStone: 2 },
                bonus: { spiritualPowerBonus: 0.05 }
            },
            
            spirit_forest_explorer: {
                name: '森林探险家',
                desc: '完成灵兽森林探索10次',
                category: 'dungeon',
                check: () => (gameData.dungeonProgress && gameData.dungeonProgress.spirit_forest) >= 10,
                reward: { spiritStone: 5000, pills: 20, immortalStone: 8 },
                bonus: { spiritualPowerBonus: 0.08 }
            },
            
            demon_cave_conqueror: {
                name: '魔窟征服者',
                desc: '完成魔窟探索10次',
                category: 'dungeon',
                check: () => (gameData.dungeonProgress && gameData.dungeonProgress.demon_cave) >= 10,
                reward: { spiritStone: 8000, pills: 30, immortalStone: 12 },
                bonus: { spiritualPowerBonus: 0.1 }
            },
            
            ancient_ruins_master: {
                name: '遗迹大师',
                desc: '完成上古遗迹探索10次',
                category: 'dungeon',
                check: () => (gameData.dungeonProgress && gameData.dungeonProgress.ancient_ruins) >= 10,
                reward: { spiritStone: 15000, pills: 50, immortalStone: 20, daoFruit: 1 },
                bonus: { spiritualPowerBonus: 0.12 }
            },
            
            heaven_trial_legend: {
                name: '天道试炼传奇',
                desc: '完成天道试炼探索10次',
                category: 'dungeon',
                check: () => (gameData.dungeonProgress && gameData.dungeonProgress.heaven_trial) >= 10,
                reward: { spiritStone: 25000, pills: 80, immortalStone: 30, daoFruit: 2 },
                bonus: { spiritualPowerBonus: 0.15, breakthroughBonus: 0.05 }
            },
            
            dungeon_path_master: {
                name: '路径大师',
                desc: '尝试过所有副本的所有路径',
                category: 'hidden',
                hidden: true,
                hiddenDesc: '探索过每个副本的每种路径',
                check: () => {
                    // 检查是否探索过所有路径（这里简化检查，实际可以更精确）
                    return (gameData.dungeonProgress && Object.keys(gameData.dungeonProgress).length >= 4);
                },
                reward: { spiritStone: 50000, pills: 100, immortalStone: 50, daoFruit: 5 },
                bonus: { spiritualPowerBonus: 0.2, breakthroughBonus: 0.1 }
            },
            
            all_bosses_defeated: {
                name: '魔王终结者',
                desc: '击败所有4个Boss',
                category: 'special',
                check: () => (gameData.player.bossesDefeated || []).length >= 4,
                reward: { spiritStone: 100000, immortalStone: 200, daoFruit: 10 },
                bonus: { combatPowerBonus: 0.3, allBonus: 0.15 }
            },
            
            npc_trader: {
                name: '商业奇才',
                desc: '与NPC交易30次',
                category: 'special',
                check: () => (gameData.statistics.totalTrades || 0) >= 30,
                reward: { spiritStone: 10000, immortalStone: 20 },
                bonus: { spiritStoneBonus: 0.1 }
            },
            
            lucky_dog: {
                name: '⭐ 天选之人',
                desc: '???（随机事件中10次都选对最佳选项）',
                category: 'hidden',
                hidden: true,
                hiddenDesc: '随机事件做出10次最优选择',
                check: () => (gameData.statistics.perfectChoices || 0) >= 10,
                reward: { spiritStone: 30000, immortalStone: 60, daoFruit: 5 },
                bonus: { allBonus: 0.2 }
            },
            
            equipment_full: {
                name: '全副武装',
                desc: '装备所有槽位',
                category: 'special',
                check: () => {
                    return gameData.equipment.weapon && gameData.equipment.armor && gameData.equipment.accessory;
                },
                reward: { spiritStone: 5000, immortalStone: 15 },
                bonus: { combatPowerBonus: 0.1 }
            },
            
            technique_advanced: {
                name: '博学多才',
                desc: '学习6种不同功法',
                category: 'technique',
                check: () => {
                    let count = 0;
                    for (let id in gameData.techniques) {
                        if (gameData.techniques[id] > 0) count++;
                    }
                    return count >= 6;
                },
                reward: { spiritStone: 10000, immortalStone: 20 },
                bonus: { spiritualPowerBonus: 0.12 }
            },
            
            technique_max_one: {
                name: '一心专精',
                desc: '任意功法达到20级',
                category: 'technique',
                check: () => {
                    for (let id in gameData.techniques) {
                        if (gameData.techniques[id] >= 20) return true;
                    }
                    return false;
                },
                reward: { spiritStone: 20000, immortalStone: 40, daoFruit: 2 },
                bonus: { spiritualPowerBonus: 0.18 }
            },
            
            save_master: {
                name: '谨慎修士',
                desc: '使用10次手动存档',
                category: 'special',
                check: () => (gameData.statistics.manualSaves || 0) >= 10,
                reward: { spiritStone: 1000, pills: 10 }
            },
            
            export_king: {
                name: '备份之王',
                desc: '导出存档5次',
                category: 'special',
                check: () => (gameData.statistics.exports || 0) >= 5,
                reward: { spiritStone: 2000, pills: 20 }
            }
        };

        // 渲染成就
        function renderAchievements() {
            const container = document.getElementById('achievementsList');
            let html = '';
            
            // 成就加成总览
            html += `<div style="background: white; border: 1px solid #e0e0e0; padding: 15px; border-radius: 6px; margin-bottom: 15px;">`;
            html += `<div style="font-size: 14px; font-weight: 600; margin-bottom: 8px; color: #2c3e50;">✨ 成就永久加成总览</div>`;
            html += `<div style="font-size: 12px; color: #7f8c8d;">`;
            const totalBonuses = Object.keys(gameData.achievementBonuses).filter(k => gameData.achievementBonuses[k] > 0).length;
            if (totalBonuses === 0) {
                html += `暂无永久加成，完成成就即可获得`;
            } else {
                if (gameData.achievementBonuses.spiritualPowerBonus > 0) {
                    html += `• 灵力获取 +${(gameData.achievementBonuses.spiritualPowerBonus * 100).toFixed(1)}% `;
                }
                if (gameData.achievementBonuses.spiritStoneBonus > 0) {
                    html += `• 灵石获取 +${(gameData.achievementBonuses.spiritStoneBonus * 100).toFixed(1)}% `;
                }
                if (gameData.achievementBonuses.breakthroughBonus > 0) {
                    html += `• 突破成功率 +${(gameData.achievementBonuses.breakthroughBonus * 100).toFixed(1)}% `;
                }
                if (gameData.achievementBonuses.combatPowerBonus > 0) {
                    html += `• 战斗力 +${(gameData.achievementBonuses.combatPowerBonus * 100).toFixed(1)}% `;
                }
                if (gameData.achievementBonuses.allBonus > 0) {
                    html += `• 全属性 +${(gameData.achievementBonuses.allBonus * 100).toFixed(1)}% `;
                }
            }
            html += `</div>`;
            html += `</div>`;
            
            // 分类统计
            const categories = {
                'all': { name: `${icons.getIcon('star')} 全部`, achievements: [] },
                'claimable': { name: `${icons.getIcon('gift')} 待领取`, achievements: [] },
                'completed': { name: `${icons.getIcon('check')} 已完成`, achievements: [] },
                'realm': { name: `${icons.getIcon('lightning')} 境界成就`, achievements: [] },
                'cultivation': { name: `${icons.getIcon('meditation')} 修炼成就`, achievements: [] },
                'facility': { name: `${icons.getIcon('building')} 设施成就`, achievements: [] },
                'technique': { name: `${icons.getIcon('book')} 功法成就`, achievements: [] },
                'wealth': { name: `${icons.getIcon('coin')} 财富成就`, achievements: [] },
                'special': { name: `${icons.getIcon('star')} 特殊成就`, achievements: [] },
                'sect': { name: `${icons.getIcon('sect')} 门派成就`, achievements: [] },
                'relationship': { name: `${icons.getIcon('users')} 人际关系`, achievements: [] },
                'task': { name: `${icons.getIcon('list')} 任务成就`, achievements: [] },
                'combat': { name: `${icons.getIcon('sword')} 战斗成就`, achievements: [] },
                'hidden': { name: '⭐ 隐藏成就', achievements: [] }
            };
            
            let completedCount = 0;
            let claimableCount = 0;
            let totalCount = Object.keys(achievementsData).length;
            
            // 分类成就
            for (let id in achievementsData) {
                const achievement = achievementsData[id];
                const isCompleted = gameData.achievements.includes(id);
                const canComplete = !isCompleted && achievement.check();
                
                const achievementData = { id, ...achievement, isCompleted, canComplete };
                
                categories.all.achievements.push(achievementData);
                
                // 确保分类存在
                if (achievement.category && categories[achievement.category]) {
                    categories[achievement.category].achievements.push(achievementData);
                }
                
                if (isCompleted) {
                    completedCount++;
                    categories.completed.achievements.push(achievementData);
                } else if (canComplete) {
                    claimableCount++;
                    categories.claimable.achievements.push(achievementData);
                }
            }
            
            // 渲染顶部统计
            html += `<div style="margin-bottom: 15px; padding: 15px; background: white; border: 1px solid #e0e0e0; border-radius: 6px;">`;
            html += `<div style="font-size: 14px; font-weight: 600; margin-bottom: 8px; color: #2c3e50;">📊 成就总览</div>`;
            html += `<div style="display: flex; gap: 20px; font-size: 12px; color: #7f8c8d;">`;
            html += `<div>总进度: ${completedCount}/${totalCount}</div>`;
            html += `<div style="color: #f39c12;">待领取: ${claimableCount}</div>`;
            html += `<div>完成率: ${((completedCount/totalCount)*100).toFixed(1)}%</div>`;
            html += `</div>`;
            html += `</div>`;
            
            // 渲染标签页
            html += `<div class="achievement-tabs">`;
            for (let catId in categories) {
                const cat = categories[catId];
                const count = cat.achievements.length;
                if (count === 0 && catId !== 'all' && catId !== 'claimable' && catId !== 'completed') continue;
                
                const isActive = !gameData.achievementFilter || gameData.achievementFilter === catId;
                html += `<div class="achievement-tab ${isActive ? 'active' : ''}" onclick="filterAchievements('${catId}')">`;
                html += `<span>${cat.name}</span>`;
                html += `<span class="achievement-tab-count">${count}</span>`;
                html += `</div>`;
            }
            html += `</div>`;
            
            // 当前筛选
            const currentFilter = gameData.achievementFilter || 'all';
            const filteredAchievements = categories[currentFilter].achievements;
            
            // 渲染成就内容区域
            html += `<div class="achievement-content">`;
            
            // 渲染成就列表
            if (filteredAchievements.length === 0) {
                html += `<div style="text-align: center; color: #95a5a6; padding: 40px;">暂无成就</div>`;
            } else {
                html += `<div class="achievement-list">`;
                for (let achievement of filteredAchievements) {
                    // 隐藏成就的特殊样式
                    const isHidden = achievement.hidden && !achievement.isCompleted && !achievement.canComplete;
                    const bgStyle = achievement.isCompleted ? 'background: linear-gradient(135deg, #f0f9ff, #e3f2fd); border-color: #3498db;' : 
                                   achievement.hidden ? 'background: linear-gradient(135deg, #fff3e0, #ffe0b2); border-left: 4px solid #f39c12;' : '';
                    
                    html += `<div class="facility-item" style="${bgStyle}">`;
                    html += `<div class="facility-header">`;
                    html += `<span class="facility-name">${achievement.isCompleted ? '✓ ' : achievement.hidden ? '⭐ ' : ''}${achievement.name}</span>`;
                    if (achievement.isCompleted) {
                        html += `<span class="facility-level" style="background: #27ae60;">已完成</span>`;
                    } else if (achievement.canComplete) {
                        html += `<span class="facility-level" style="background: #f39c12; animation: pulse 1.5s infinite;">可领取</span>`;
                    } else {
                        html += `<span class="facility-level" style="background: #95a5a6;">未完成</span>`;
                    }
                    html += `</div>`;
                    
                    // 显示描述（隐藏成就未完成时显示???）
                    if (isHidden) {
                        html += `<div class="facility-desc" style="font-style: italic; color: #95a5a6;">${achievement.desc}</div>`;
                    } else {
                        html += `<div class="facility-desc">${achievement.isCompleted && achievement.hiddenDesc ? achievement.hiddenDesc : achievement.desc}</div>`;
                    }
                    
                    // 显示奖励
                    if (!isHidden || achievement.canComplete || achievement.isCompleted) {
                        html += `<div class="facility-benefit" style="margin-top: 8px;">`;
                        html += `🎁 奖励: `;
                        if (achievement.reward.spiritStone) html += `${formatNumber(achievement.reward.spiritStone)}灵石 `;
                        if (achievement.reward.pills) html += `${achievement.reward.pills}丹药 `;
                        if (achievement.reward.immortalStone) html += `${achievement.reward.immortalStone}仙石 `;
                        if (achievement.reward.daoFruit) html += `${achievement.reward.daoFruit}道果 `;
                        html += `</div>`;
                        
                        // 显示永久加成
                        if (achievement.bonus) {
                            html += `<div style="font-size: 11px; color: #3b82f6; margin-top: 5px; font-weight: 600;">`;
                            html += `✨ 永久加成: `;
                            if (achievement.bonus.spiritualPowerBonus) html += `灵力+${(achievement.bonus.spiritualPowerBonus * 100).toFixed(0)}% `;
                            if (achievement.bonus.spiritStoneBonus) html += `灵石+${(achievement.bonus.spiritStoneBonus * 100).toFixed(0)}% `;
                            if (achievement.bonus.breakthroughBonus) html += `突破率+${(achievement.bonus.breakthroughBonus * 100).toFixed(0)}% `;
                            if (achievement.bonus.combatPowerBonus) html += `战力+${(achievement.bonus.combatPowerBonus * 100).toFixed(0)}% `;
                            if (achievement.bonus.allBonus) html += `全属性+${(achievement.bonus.allBonus * 100).toFixed(0)}% `;
                            html += `</div>`;
                        }
                    }
                    
                    if (achievement.canComplete) {
                        html += `<button class="btn btn-success" onclick="claimAchievement('${achievement.id}')" style="margin-top: 10px;">领取奖励</button>`;
                    }
                    
                    html += `</div>`;
                }
                html += `</div>`; // 结束成就列表div
            }
            html += `</div>`; // 结束成就内容区域div
            
            container.innerHTML = html;
        }
        
        // 筛选成就
        function filterAchievements(category) {
            gameData.achievementFilter = category;
            renderAchievements();
        }

        // 领取成就
        function claimAchievement(achievementId) {
            const achievement = achievementsData[achievementId];
            
            if (!gameData.achievements.includes(achievementId) && achievement.check()) {
                gameData.achievements.push(achievementId);
                
                let rewardText = '';
                
                // 发放资源奖励
                if (achievement.reward.spiritStone) {
                    gameData.player.spiritStone += achievement.reward.spiritStone;
                    rewardText += `${achievement.reward.spiritStone}灵石 `;
                }
                if (achievement.reward.pills) {
                    gameData.player.pills += achievement.reward.pills;
                    rewardText += `${achievement.reward.pills}丹药 `;
                }
                if (achievement.reward.immortalStone) {
                    gameData.player.immortalStone = (gameData.player.immortalStone || 0) + achievement.reward.immortalStone;
                    rewardText += `${achievement.reward.immortalStone}仙石 `;
                }
                if (achievement.reward.daoFruit) {
                    gameData.player.daoFruit = (gameData.player.daoFruit || 0) + achievement.reward.daoFruit;
                    rewardText += `${achievement.reward.daoFruit}道果 `;
                }
                
                // 应用永久加成
                if (achievement.bonus) {
                    for (let bonusType in achievement.bonus) {
                        if (!gameData.achievementBonuses[bonusType]) {
                            gameData.achievementBonuses[bonusType] = 0;
                        }
                        gameData.achievementBonuses[bonusType] += achievement.bonus[bonusType];
                    }
                    rewardText += '+ 永久加成！';
                }
                
                addLog(`<span class="log-success">${getSvg('trophy')} 完成成就【${achievement.name}】，获得 ${rewardText}</span>`);
                showNotification(`完成成就：${achievement.name}`, 'success');
                breakthroughEffect(); // 成就完成特效
                
                renderAchievements();
                updateUI();
                saveGame();
            }
        }

        // 检查成就
        function checkAchievements() {
            for (let id in achievementsData) {
                const achievement = achievementsData[id];
                if (!gameData.achievements.includes(id) && achievement.check()) {
                    // 不自动领取，只提示
                    addLog(`💡 新成就可领取：${achievement.name}`);
                }
            }
            renderAchievements();
        }

        // 尝试触发随机事件
        function tryTriggerEvent() {
            // 如果当前有事件正在进行，不触发新事件
            if (gameData.currentEvent) return;
            
            // 50%概率触发事件（提升触发率）
            if (Math.random() > 0.5) return;
            
            // 筛选符合条件的事件
            const availableEvents = [];
            for (let id in randomEvents) {
                const event = randomEvents[id];
                
                // 检查境界要求
                if (event.minRealm && event.minRealm > gameData.player.realm) continue;
                
                // 检查飞升要求
                if (event.minAscension && event.minAscension > gameData.ascensionCount) continue;
                
                // 检查仙界要求
                if (event.requireImmortalWorld && !gameData.player.isInImmortalWorld) continue;
                
                // 如果在仙界，优先触发仙界事件，但也允许通用事件（没有特殊要求的）
                // 移除了之前阻止凡界事件在仙界触发的限制
                
                availableEvents.push({ id, ...event });
            }
            
            if (availableEvents.length === 0) return;
            
            // 随机选择一个事件
            const event = availableEvents[Math.floor(Math.random() * availableEvents.length)];
            gameData.currentEvent = event;
            gameData.lastEventTime = Date.now();
            
            // 显示事件
            showEvent(event);
            addLog(`<span class="log-important">${getSvg('zap')} 随机事件：${event.name}</span>`);
        }

        // 显示事件
        function showEvent(event) {
            const eventModal = document.createElement('div');
            eventModal.id = 'eventModal';
            eventModal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.7);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
            `;
            
            const eventCard = document.createElement('div');
            eventCard.style.cssText = `
                background: white;
                padding: 30px;
                border-radius: 8px;
                max-width: 500px;
                width: 90%;
                box-shadow: 0 10px 40px rgba(0,0,0,0.3);
            `;
            
            let html = '';
            
            // 事件标题和类型
            const typeColors = {
                opportunity: '#27ae60',
                crisis: '#e74c3c',
                trade: '#f39c12'
            };
            const typeNames = {
                opportunity: '奇遇',
                crisis: '危机',
                trade: '交易'
            };
            
            html += `<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">`;
            html += `<h2 style="margin: 0; font-size: 20px; color: #2c3e50;">${event.name}</h2>`;
            html += `<span style="background: ${typeColors[event.type]}; color: white; padding: 4px 10px; border-radius: 4px; font-size: 12px;">`;
            html += typeNames[event.type];
            html += `</span>`;
            html += `</div>`;
            
            // 事件描述
            html += `<div style="padding: 15px; background: #f8f9fa; border-radius: 6px; margin-bottom: 20px; color: #555; line-height: 1.8;">`;
            html += event.desc;
            html += `</div>`;
            
            // 选择按钮
            html += `<div style="display: flex; flex-direction: column; gap: 10px;">`;
            event.choices.forEach((choice, index) => {
                const canChoose = !choice.canChoose || choice.canChoose();
                html += `<button class="btn ${canChoose ? 'btn-primary' : ''}" 
                         onclick="handleEventChoice(${index})" 
                         ${!canChoose ? 'disabled' : ''}
                         style="text-align: left; padding: 12px 16px;">`;
                html += choice.text;
                html += `</button>`;
            });
            html += `</div>`;
            
            eventCard.innerHTML = html;
            eventModal.appendChild(eventCard);
            document.body.appendChild(eventModal);
        }

        // 处理事件选择
        function handleEventChoice(choiceIndex) {
            const event = gameData.currentEvent;
            const choice = event.choices[choiceIndex];
            
            // 执行选择结果
            const resultText = choice.result();
            
            // 显示结果
            const modal = document.getElementById('eventModal');
            const card = modal.firstChild;
            
            card.innerHTML = `
                <h2 style="margin: 0 0 20px 0; font-size: 20px; color: #2c3e50;">结果</h2>
                <div style="padding: 20px; background: #f8f9fa; border-radius: 6px; margin-bottom: 20px; color: #555; line-height: 1.8;">
                    ${resultText}
                </div>
                <button class="btn btn-primary" onclick="closeEvent()" style="width: 100%;">
                    确定
                </button>
            `;
            
            addLog(`事件结果：${resultText}`);
            updateUI();
            checkAchievements(); // 检查是否解锁新成就
        }

        // 关闭事件
        function closeEvent() {
            const modal = document.getElementById('eventModal');
            if (modal) {
                modal.remove();
            }
            gameData.currentEvent = null;
        }

        // 显示魔修战斗
        function showDemonBattle() {
            const battleModal = document.createElement('div');
            battleModal.id = 'demonBattleModal';
            battleModal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.92);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2000;
                backdrop-filter: blur(5px);
            `;
            
            const battleCard = document.createElement('div');
            battleCard.style.cssText = `
                background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
                padding: 20px;
                border-radius: 8px;
                max-width: 600px;
                width: 90%;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                border: 1px solid rgba(0,0,0,0.1);
            `;
            
            // 计算战斗力
            const playerPower = calculateCombatPower();
            const demonPower = Math.floor(playerPower * (1.2 + Math.random() * 0.3)); // 魔修比玩家强20-50%
            
            let html = '';
            html += `<div style="text-align: center; margin-bottom: 20px;">`;
            html += `<h2 style="font-size: 20px; color: #2c3e50; margin: 0; font-weight: 500; letter-spacing: 2px;">魔修来袭</h2>`;
            html += `<div style="color: #e74c3c; font-size: 12px; margin-top: 5px;">一个邪恶的魔修发现了你的修炼之地！</div>`;
            html += `</div>`;
            
            // 战斗双方展示区域
            html += `<div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 15px; margin-bottom: 15px; align-items: stretch;">`;
            
            // 玩家侧
            html += `<div style="background: linear-gradient(135deg, rgba(33,150,243,0.05), rgba(100,181,246,0.05)); border: 1px solid rgba(33,150,243,0.3); border-radius: 6px; padding: 15px;">`;
            html += `<div style="text-align: center; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid rgba(0,0,0,0.1);">`;
            html += `<div style="font-size: 10px; color: #2196f3; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">PLAYER</div>`;
            html += `<div style="font-size: 14px; font-weight: 500; color: #2c3e50; margin-bottom: 3px;">${realms[gameData.player.realm].name}</div>`;
            html += `<div style="font-size: 10px; color: #7f8c8d;">第 ${gameData.player.realmLevel} 层</div>`;
            html += `</div>`;
            
            // 玩家血条
            html += `<div style="margin-bottom: 12px;">`;
            html += `<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">`;
            html += `<span style="font-size: 10px; color: #7f8c8d; letter-spacing: 1px;">气血值</span>`;
            html += `<span id="demonPlayerHpText" style="font-size: 11px; color: #2196f3; font-weight: 600; font-family: monospace;">100/100</span>`;
            html += `</div>`;
            html += `<div style="background: #e9ecef; height: 6px; border-radius: 3px; overflow: hidden;">`;
            html += `<div id="demonPlayerHpBar" style="width: 100%; height: 100%; background: linear-gradient(90deg, #2196f3, #64b5f6); transition: all 0.3s ease;"></div>`;
            html += `</div>`;
            html += `</div>`;
            
            // 玩家战力
            html += `<div style="text-align: center; background: rgba(33,150,243,0.1); padding: 10px; border-radius: 4px;">`;
            html += `<div style="font-size: 9px; color: #7f8c8d; margin-bottom: 3px; letter-spacing: 1px;">POWER</div>`;
            html += `<div style="font-size: 18px; font-weight: 600; color: #2196f3; font-family: monospace;">${playerPower}</div>`;
            html += `</div>`;
            html += `</div>`;
            
            // VS 标识
            html += `<div style="display: flex; align-items: center; justify-content: center; min-width: 50px;">`;
            html += `<div style="width: 40px; height: 40px; border: 2px solid #e9ecef; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: #f8f9fa;">`;
            html += `<span style="font-size: 12px; font-weight: 500; color: #6c757d; letter-spacing: 1px;">VS</span>`;
            html += `</div>`;
            html += `</div>`;
            
            // 魔修侧
            html += `<div style="background: linear-gradient(135deg, rgba(139,69,19,0.05), rgba(160,82,45,0.05)); border: 1px solid rgba(139,69,19,0.3); border-radius: 6px; padding: 15px;">`;
            html += `<div style="text-align: center; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid rgba(0,0,0,0.1);">`;
            html += `<div style="font-size: 10px; color: #8b4513; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">DEMON</div>`;
            html += `<div style="font-size: 14px; font-weight: 500; color: #2c3e50; margin-bottom: 3px;">魔修</div>`;
            html += `<div style="font-size: 10px; color: #7f8c8d;">邪恶修炼者</div>`;
            html += `</div>`;
            
            // 魔修血条
            html += `<div style="margin-bottom: 12px;">`;
            html += `<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">`;
            html += `<span style="font-size: 10px; color: #7f8c8d; letter-spacing: 1px;">气血值</span>`;
            html += `<span id="demonHpText" style="font-size: 11px; color: #8b4513; font-weight: 600; font-family: monospace;">100/100</span>`;
            html += `</div>`;
            html += `<div style="background: #e9ecef; height: 6px; border-radius: 3px; overflow: hidden;">`;
            html += `<div id="demonHpBar" style="width: 100%; height: 100%; background: linear-gradient(90deg, #8b4513, #a0522d); transition: all 0.3s ease;"></div>`;
            html += `</div>`;
            html += `</div>`;
            
            // 魔修战力
            html += `<div style="text-align: center; background: rgba(139,69,19,0.1); padding: 10px; border-radius: 4px;">`;
            html += `<div style="font-size: 9px; color: #7f8c8d; margin-bottom: 3px; letter-spacing: 1px;">POWER</div>`;
            html += `<div style="font-size: 18px; font-weight: 600; color: #8b4513; font-family: monospace;">${demonPower}</div>`;
            html += `</div>`;
            html += `</div>`;
            
            html += `</div>`;
            
            // 战斗日志区域
            html += `<div style="margin-bottom: 15px;">`;
            html += `<div style="font-size: 10px; color: #7f8c8d; margin-bottom: 8px; letter-spacing: 1px; text-transform: uppercase; padding-left: 2px;">Battle Log</div>`;
            html += `<div id="demonBattleLog" style="background: #f8f9fa; padding: 12px; border-radius: 4px; height: 120px; overflow-y: auto; border: 1px solid #e9ecef; font-family: 'Courier New', monospace; font-size: 11px;">`;
            html += `<div style="text-align: center; color: #95a5a6; padding: 20px 0;">魔修正在逼近，战斗即将开始...</div>`;
            html += `</div>`;
            html += `</div>`;
            
            html += `<button class="btn btn-primary" id="startDemonBattleBtn" onclick="executeDemonBattle(${playerPower}, ${demonPower})" style="width: 100%; padding: 12px; font-size: 12px; font-weight: 500; background: #8b4513; border: 1px solid #8b4513; color: white; border-radius: 4px; transition: all 0.3s;">开始战斗</button>`;
            
            battleCard.innerHTML = html;
            battleModal.appendChild(battleCard);
            document.body.appendChild(battleModal);
        }

        // 显示宝物争夺战
        function showTreasureBattle() {
            const battleModal = document.createElement('div');
            battleModal.id = 'treasureBattleModal';
            battleModal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.92);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2000;
                backdrop-filter: blur(5px);
            `;
            
            const battleCard = document.createElement('div');
            battleCard.style.cssText = `
                background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
                padding: 20px;
                border-radius: 8px;
                max-width: 600px;
                width: 90%;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                border: 1px solid rgba(0,0,0,0.1);
            `;
            
            // 计算战斗力
            const playerPower = calculateCombatPower();
            const competitorPower = Math.floor(playerPower * (0.8 + Math.random() * 0.6)); // 竞争对手战力在80-140%之间
            
            let html = '';
            html += `<div style="text-align: center; margin-bottom: 20px;">`;
            html += `<h2 style="font-size: 20px; color: #2c3e50; margin: 0; font-weight: 500; letter-spacing: 2px;">宝物争夺战</h2>`;
            html += `<div style="color: #f39c12; font-size: 12px; margin-top: 5px;">珍贵的宝物出世，各路修士前来争夺！</div>`;
            html += `</div>`;
            
            // 战斗双方展示区域
            html += `<div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 15px; margin-bottom: 15px; align-items: stretch;">`;
            
            // 玩家侧
            html += `<div style="background: linear-gradient(135deg, rgba(33,150,243,0.05), rgba(100,181,246,0.05)); border: 1px solid rgba(33,150,243,0.3); border-radius: 6px; padding: 15px;">`;
            html += `<div style="text-align: center; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid rgba(0,0,0,0.1);">`;
            html += `<div style="font-size: 10px; color: #2196f3; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">PLAYER</div>`;
            html += `<div style="font-size: 14px; font-weight: 500; color: #2c3e50; margin-bottom: 3px;">${realms[gameData.player.realm].name}</div>`;
            html += `<div style="font-size: 10px; color: #7f8c8d;">第 ${gameData.player.realmLevel} 层</div>`;
            html += `</div>`;
            
            // 玩家血条
            html += `<div style="margin-bottom: 12px;">`;
            html += `<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">`;
            html += `<span style="font-size: 10px; color: #7f8c8d; letter-spacing: 1px;">气血值</span>`;
            html += `<span id="treasurePlayerHpText" style="font-size: 11px; color: #2196f3; font-weight: 600; font-family: monospace;">100/100</span>`;
            html += `</div>`;
            html += `<div style="background: #e9ecef; height: 6px; border-radius: 3px; overflow: hidden;">`;
            html += `<div id="treasurePlayerHpBar" style="width: 100%; height: 100%; background: linear-gradient(90deg, #2196f3, #64b5f6); transition: all 0.3s ease;"></div>`;
            html += `</div>`;
            html += `</div>`;
            
            // 玩家战力
            html += `<div style="text-align: center; background: rgba(33,150,243,0.1); padding: 10px; border-radius: 4px;">`;
            html += `<div style="font-size: 9px; color: #7f8c8d; margin-bottom: 3px; letter-spacing: 1px;">POWER</div>`;
            html += `<div style="font-size: 18px; font-weight: 600; color: #2196f3; font-family: monospace;">${playerPower}</div>`;
            html += `</div>`;
            html += `</div>`;
            
            // VS 标识
            html += `<div style="display: flex; align-items: center; justify-content: center; min-width: 50px;">`;
            html += `<div style="width: 40px; height: 40px; border: 2px solid #e9ecef; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: #f8f9fa;">`;
            html += `<span style="font-size: 12px; font-weight: 500; color: #6c757d; letter-spacing: 1px;">VS</span>`;
            html += `</div>`;
            html += `</div>`;
            
            // 竞争对手侧
            html += `<div style="background: linear-gradient(135deg, rgba(255,193,7,0.05), rgba(255,152,0,0.05)); border: 1px solid rgba(255,193,7,0.3); border-radius: 6px; padding: 15px;">`;
            html += `<div style="text-align: center; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid rgba(0,0,0,0.1);">`;
            html += `<div style="font-size: 10px; color: #ffc107; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">COMPETITOR</div>`;
            html += `<div style="font-size: 14px; font-weight: 500; color: #2c3e50; margin-bottom: 3px;">竞争对手</div>`;
            html += `<div style="font-size: 10px; color: #7f8c8d;">同境界修士</div>`;
            html += `</div>`;
            
            // 竞争对手血条
            html += `<div style="margin-bottom: 12px;">`;
            html += `<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">`;
            html += `<span style="font-size: 10px; color: #7f8c8d; letter-spacing: 1px;">气血值</span>`;
            html += `<span id="treasureCompetitorHpText" style="font-size: 11px; color: #ffc107; font-weight: 600; font-family: monospace;">100/100</span>`;
            html += `</div>`;
            html += `<div style="background: #e9ecef; height: 6px; border-radius: 3px; overflow: hidden;">`;
            html += `<div id="treasureCompetitorHpBar" style="width: 100%; height: 100%; background: linear-gradient(90deg, #ffc107, #ffb74d); transition: all 0.3s ease;"></div>`;
            html += `</div>`;
            html += `</div>`;
            
            // 竞争对手战力
            html += `<div style="text-align: center; background: rgba(255,193,7,0.1); padding: 10px; border-radius: 4px;">`;
            html += `<div style="font-size: 9px; color: #7f8c8d; margin-bottom: 3px; letter-spacing: 1px;">POWER</div>`;
            html += `<div style="font-size: 18px; font-weight: 600; color: #ffc107; font-family: monospace;">${competitorPower}</div>`;
            html += `</div>`;
            html += `</div>`;
            
            html += `</div>`;
            
            // 战斗日志区域
            html += `<div style="margin-bottom: 15px;">`;
            html += `<div style="font-size: 10px; color: #7f8c8d; margin-bottom: 8px; letter-spacing: 1px; text-transform: uppercase; padding-left: 2px;">Battle Log</div>`;
            html += `<div id="treasureBattleLog" style="background: #f8f9fa; padding: 12px; border-radius: 4px; height: 120px; overflow-y: auto; border: 1px solid #e9ecef; font-family: 'Courier New', monospace; font-size: 11px;">`;
            html += `<div style="text-align: center; color: #95a5a6; padding: 20px 0;">宝物争夺战即将开始...</div>`;
            html += `</div>`;
            html += `</div>`;
            
            html += `<button class="btn btn-primary" id="startTreasureBattleBtn" onclick="executeTreasureBattle(${playerPower}, ${competitorPower})" style="width: 100%; padding: 12px; font-size: 12px; font-weight: 500; background: #ffc107; border: 1px solid #ffc107; color: #2c3e50; border-radius: 4px; transition: all 0.3s;">开始争夺</button>`;
            
            battleCard.innerHTML = html;
            battleModal.appendChild(battleCard);
            document.body.appendChild(battleModal);
        }

        // 计算战斗力的函数
        function calculateCombatPower() {
            let power = gameData.player.realm * 100 + gameData.player.realmLevel * 10;
            power += gameData.facilities.library * 5;
            power += (gameData.sectContribution || 0) * 0.5;
            
            // 装备加成
            for (let slot in gameData.combatEquipment) {
                const equipment = gameData.combatEquipment[slot];
                if (equipment && combatEquipment[equipment]) {
                    const equip = combatEquipment[equipment];
                    power += equip.attack * 2 + equip.defense + equip.speed;
                }
            }
            
            // 技能加成
            power += gameData.combatSkills.length * 20;
            
            // 法宝加成
            power += gameData.artifacts.length * 15;
            
            return Math.floor(power);
        }

        // 执行魔修战斗
        function executeDemonBattle(playerPower, demonPower) {
            document.getElementById('startDemonBattleBtn').disabled = true;
            document.getElementById('startDemonBattleBtn').textContent = '战斗中...';
            
            const battleLog = document.getElementById('demonBattleLog');
            battleLog.innerHTML = '';
            
            let playerHp = 100;
            let demonHp = 100;
            let round = 1;
            
            // 更新血条函数
            function updateDemonHpBar(target, currentHp, maxHp) {
                const percentage = Math.max(0, (currentHp / maxHp) * 100);
                const hpBar = document.getElementById(target + 'HpBar');
                const hpText = document.getElementById(target + 'HpText');
                
                if (hpBar && hpText) {
                    hpBar.style.width = percentage + '%';
                    hpText.textContent = Math.max(0, Math.floor(currentHp)) + '/' + maxHp;
                    
                    // 根据血量改变颜色
                    if (target === 'demonPlayer') {
                        if (percentage > 60) {
                            hpBar.style.background = 'linear-gradient(90deg, #2196f3, #64b5f6)';
                            hpText.style.color = '#2196f3';
                        } else if (percentage > 30) {
                            hpBar.style.background = 'linear-gradient(90deg, #ff9800, #ffb74d)';
                            hpText.style.color = '#ff9800';
                        } else {
                            hpBar.style.background = 'linear-gradient(90deg, #f44336, #e57373)';
                            hpText.style.color = '#f44336';
                        }
                    } else {
                        if (percentage > 60) {
                            hpBar.style.background = 'linear-gradient(90deg, #8b4513, #a0522d)';
                            hpText.style.color = '#8b4513';
                        } else if (percentage > 30) {
                            hpBar.style.background = 'linear-gradient(90deg, #ff9800, #ffb74d)';
                            hpText.style.color = '#ff9800';
                        } else {
                            hpBar.style.background = 'linear-gradient(90deg, #d32f2f, #f44336)';
                            hpText.style.color = '#d32f2f';
                        }
                    }
                }
            }
            
            const battleInterval = setInterval(() => {
                // 玩家攻击
                const playerDamage = Math.floor(8 + Math.random() * 8 + (playerPower - demonPower) * 0.03);
                demonHp -= Math.max(1, playerDamage);
                
                let log = `<div style="margin-bottom: 8px; padding: 8px; background: #f8f9fa; border-left: 2px solid #2196f3; border-radius: 3px;">`;
                log += `<div style="font-weight: 500; color: #6c757d; margin-bottom: 6px; font-size: 10px; letter-spacing: 1px;">ROUND ${round}</div>`;
                log += `<div style="font-size: 11px; color: #2c3e50; margin-bottom: 4px; line-height: 1.5;">`;
                log += `<span style="color: #95a5a6;">[攻击]</span> `;
                log += `你 → 魔修 <span style="color: #2196f3; font-weight: 600; font-family: monospace;">${Math.max(1, playerDamage)}</span>`;
                log += `</div>`;
                
                // 更新魔修血条
                updateDemonHpBar('demon', demonHp, 100);
                
                if (demonHp <= 0) {
                    log += `<div style="color: #2196f3; font-weight: 600; margin-top: 8px; font-size: 11px; padding: 6px; background: rgba(33,150,243,0.1); border-radius: 3px; text-align: center;">魔修被击败</div>`;
                    log += `</div>`;
                    battleLog.innerHTML += log;
                    clearInterval(battleInterval);
                    endDemonBattle('win');
                    return;
                }
                
                // 魔修攻击
                const demonDamage = Math.floor(8 + Math.random() * 8 + (demonPower - playerPower) * 0.03);
                playerHp -= Math.max(1, demonDamage);
                
                log += `<div style="font-size: 11px; color: #2c3e50; margin-bottom: 4px; line-height: 1.5;">`;
                log += `<span style="color: #95a5a6;">[反击]</span> `;
                log += `魔修 → 你 <span style="color: #8b4513; font-weight: 600; font-family: monospace;">${Math.max(1, demonDamage)}</span>`;
                log += `</div>`;
                
                // 更新玩家血条
                updateDemonHpBar('demonPlayer', playerHp, 100);
                
                if (playerHp <= 0) {
                    log += `<div style="color: #8b4513; font-weight: 600; margin-top: 8px; font-size: 11px; padding: 6px; background: rgba(139,69,19,0.1); border-radius: 3px; text-align: center;">你被魔修击败了</div>`;
                    log += `</div>`;
                    battleLog.innerHTML += log;
                    clearInterval(battleInterval);
                    endDemonBattle('lose');
                    return;
                }
                
                // 显示当前血量
                log += `<div style="font-size: 10px; color: #95a5a6; margin-top: 6px; padding-top: 6px; border-top: 1px solid #e9ecef; font-family: monospace;">`;
                log += `<span style="color: #2196f3;">${Math.max(0, Math.floor(playerHp))}</span> / `;
                log += `<span style="color: #8b4513;">${Math.max(0, Math.floor(demonHp))}</span>`;
                log += `</div>`;
                log += `</div>`;
                
                battleLog.innerHTML += log;
                battleLog.scrollTop = battleLog.scrollHeight;
                
                round++;
                
                // 平局判定
                if (round > 15) {
                    clearInterval(battleInterval);
                    if (playerHp > demonHp) {
                        endDemonBattle('win');
                    } else if (demonHp > playerHp) {
                        endDemonBattle('lose');
                    } else {
                        endDemonBattle('draw');
                    }
                }
            }, 800);
        }

        // 执行宝物争夺战
        function executeTreasureBattle(playerPower, competitorPower) {
            document.getElementById('startTreasureBattleBtn').disabled = true;
            document.getElementById('startTreasureBattleBtn').textContent = '争夺中...';
            
            const battleLog = document.getElementById('treasureBattleLog');
            battleLog.innerHTML = '';
            
            let playerHp = 100;
            let competitorHp = 100;
            let round = 1;
            
            const battleInterval = setInterval(() => {
                // 玩家攻击
                const playerDamage = Math.floor(6 + Math.random() * 6 + (playerPower - competitorPower) * 0.02);
                competitorHp -= Math.max(1, playerDamage);
                
                let log = `<div style="margin-bottom: 8px; padding: 8px; background: white; border-radius: 4px;">`;
                log += `<div style="font-weight: 600; color: #2196f3;">第${round}回合</div>`;
                log += `<div style="font-size: 13px; color: #666;">你向竞争对手发动攻击，造成 <span style="color: #e74c3c; font-weight: 600;">${Math.max(1, playerDamage)}</span> 点伤害</div>`;
                
                if (competitorHp <= 0) {
                    log += `<div style="color: #27ae60; font-weight: 600; margin-top: 5px;">✓ 你击败了竞争对手，夺得了宝物！</div>`;
                    log += `</div>`;
                    battleLog.innerHTML += log;
                    clearInterval(battleInterval);
                    endTreasureBattle('win');
                    return;
                }
                
                // 竞争对手攻击
                const competitorDamage = Math.floor(6 + Math.random() * 6 + (competitorPower - playerPower) * 0.02);
                playerHp -= Math.max(1, competitorDamage);
                
                log += `<div style="font-size: 13px; color: #666;">竞争对手反击，造成 <span style="color: #e74c3c; font-weight: 600;">${Math.max(1, competitorDamage)}</span> 点伤害</div>`;
                
                if (playerHp <= 0) {
                    log += `<div style="color: #e74c3c; font-weight: 600; margin-top: 5px;">✗ 你被竞争对手击败了...</div>`;
                    log += `</div>`;
                    battleLog.innerHTML += log;
                    clearInterval(battleInterval);
                    endTreasureBattle('lose');
                    return;
                }
                
                log += `<div style="font-size: 12px; color: #95a5a6; margin-top: 5px;">你的气血: ${Math.max(0, playerHp)} | 竞争对手气血: ${Math.max(0, competitorHp)}</div>`;
                log += `</div>`;
                
                battleLog.innerHTML += log;
                battleLog.scrollTop = battleLog.scrollHeight;
                
                round++;
                
                // 平局判定
                if (round > 12) {
                    clearInterval(battleInterval);
                    if (playerHp > competitorHp) {
                        endTreasureBattle('win');
                    } else if (competitorHp > playerHp) {
                        endTreasureBattle('lose');
                    } else {
                        endTreasureBattle('draw');
                    }
                }
            }, 800);
        }

        // 结束魔修战斗
        function endDemonBattle(result) {
            const modal = document.getElementById('demonBattleModal');
            const card = modal.firstChild;
            
            let resultText = '';
            let reward = '';
            
            if (result === 'win') {
                resultText = '你成功击败了魔修！';
                const stoneGain = 200 + gameData.player.realm * 50;
                const pillGain = 3 + Math.floor(gameData.player.realm / 2);
                gameData.player.spiritStone += stoneGain;
                gameData.player.pills += pillGain;
                gameData.player.combatWins = (gameData.player.combatWins || 0) + 1;
                reward = `获得奖励：${stoneGain} 灵石，${pillGain} 枚丹药`;
                addLog(`⚔️ 击败魔修，获得 ${stoneGain} 灵石和 ${pillGain} 枚丹药`);
            } else if (result === 'lose') {
                resultText = '你被魔修击败了...';
                const loss = Math.floor(gameData.player.spiritualPower * 0.3);
                gameData.player.spiritualPower = Math.max(0, gameData.player.spiritualPower - loss);
                gameData.player.combatLosses = (gameData.player.combatLosses || 0) + 1;
                reward = `损失了 ${loss} 灵力`;
                addLog(`💀 被魔修击败，损失了 ${loss} 灵力`);
            } else {
                resultText = '战斗以平局结束';
                const stoneGain = 50 + gameData.player.realm * 20;
                gameData.player.spiritStone += stoneGain;
                reward = `获得 ${stoneGain} 灵石`;
                addLog(`🤝 与魔修战成平手，获得 ${stoneGain} 灵石`);
            }
            
            card.innerHTML = `
                <h2 style="margin: 0 0 20px 0; font-size: 20px; color: #2c3e50;">战斗结果</h2>
                <div style="padding: 20px; background: #f8f9fa; border-radius: 6px; margin-bottom: 20px; color: #555; line-height: 1.8;">
                    <div style="font-weight: 600; margin-bottom: 10px;">${resultText}</div>
                    <div>${reward}</div>
                </div>
                <button class="btn btn-primary" onclick="this.parentElement.parentElement.remove()" style="width: 100%;">
                    确定
                </button>
            `;
            
            updateUI();
        }

        // 结束宝物争夺战
        function endTreasureBattle(result) {
            const modal = document.getElementById('treasureBattleModal');
            const card = modal.firstChild;
            
            let resultText = '';
            let reward = '';
            
            if (result === 'win') {
                resultText = '你成功夺得了宝物！';
                const stoneGain = 500 + gameData.player.realm * 150;
                const pillGain = 5 + Math.floor(gameData.player.realm / 2);
                gameData.player.spiritStone += stoneGain;
                gameData.player.pills += pillGain;
                gameData.player.combatWins = (gameData.player.combatWins || 0) + 1;
                reward = `获得宝物奖励：${stoneGain} 灵石，${pillGain} 枚丹药`;
                addLog(`💎 夺得宝物，获得 ${stoneGain} 灵石和 ${pillGain} 枚丹药`);
            } else if (result === 'lose') {
                resultText = '你未能夺得宝物...';
                const loss = Math.floor(gameData.player.spiritualPower * 0.2);
                gameData.player.spiritualPower = Math.max(0, gameData.player.spiritualPower - loss);
                gameData.player.combatLosses = (gameData.player.combatLosses || 0) + 1;
                reward = `损失了 ${loss} 灵力`;
                addLog(`💔 宝物争夺失败，损失了 ${loss} 灵力`);
            } else {
                resultText = '争夺以平局结束';
                const stoneGain = 100 + gameData.player.realm * 50;
                gameData.player.spiritStone += stoneGain;
                reward = `获得 ${stoneGain} 灵石`;
                addLog(`🤝 宝物争夺平手，获得 ${stoneGain} 灵石`);
            }
            
            card.innerHTML = `
                <h2 style="margin: 0 0 20px 0; font-size: 20px; color: #2c3e50;">争夺结果</h2>
                <div style="padding: 20px; background: #f8f9fa; border-radius: 6px; margin-bottom: 20px; color: #555; line-height: 1.8;">
                    <div style="font-weight: 600; margin-bottom: 10px;">${resultText}</div>
                    <div>${reward}</div>
                </div>
                <button class="btn btn-primary" onclick="this.parentElement.parentElement.remove()" style="width: 100%;">
                    确定
                </button>
            `;
            
            updateUI();
        }

        // 显示境界感悟
        function showRealmStory(realm) {
            const storyModal = document.createElement('div');
            storyModal.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
                color: white;
                padding: 30px;
                border-radius: 8px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.5);
                z-index: 1003;
                max-width: 500px;
                width: 90%;
                text-align: center;
                animation: fadeIn 0.5s ease;
            `;
            
            storyModal.innerHTML = `
                <div style="font-size: 24px; font-weight: 600; margin-bottom: 15px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
                    ${realm.name}
                </div>
                <div style="font-size: 14px; line-height: 1.8; opacity: 0.95; margin-bottom: 20px;">
                    ${realm.story}
                </div>
                <button class="btn" onclick="this.parentElement.remove()" 
                        style="background: rgba(255,255,255,0.2); color: white; border: 1px solid rgba(255,255,255,0.3);">
                    继续修炼
                </button>
            `;
            
            document.body.appendChild(storyModal);
            
            // 3秒后自动关闭
            setTimeout(() => {
                if (storyModal.parentElement) {
                    storyModal.remove();
                }
            }, 3000);
        }

        // 打开门派菜单
        function openSectMenu() {
            // 如果还没到筑基期
            if (gameData.player.realm < 1) {
                const tipModal = document.createElement('div');
                tipModal.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: white;
                    padding: 30px;
                    border-radius: 8px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.3);
                    z-index: 1001;
                    text-align: center;
                    max-width: 400px;
                `;
                
                tipModal.innerHTML = `
                    <div style="font-size: 18px; font-weight: 600; color: #2c3e50; margin-bottom: 15px;">
                        门派系统
                    </div>
                    <div style="color: #666; margin-bottom: 20px; line-height: 1.6;">
                        需要达到<strong style="color: #3498db;">筑基期</strong>才能选择门派<br>
                        <br>
                        当前境界: ${realms[gameData.player.realm].name}<br>
                        继续修炼，突破境界后即可选择！
                    </div>
                    <button class="btn btn-primary" onclick="this.parentElement.remove()" style="width: 100%;">
                        继续修炼
                    </button>
                `;
                
                document.body.appendChild(tipModal);
                return;
            }
            
            // 如果已经选择了门派，显示门派信息
            if (gameData.sect) {
                const sect = sects[gameData.sect];
                const infoModal = document.createElement('div');
                infoModal.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: white;
                    padding: 30px;
                    border-radius: 8px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.3);
                    z-index: 1001;
                    max-width: 500px;
                `;
                
                let html = '';
                html += `<div style="font-size: 20px; font-weight: 600; color: ${sect.color}; margin-bottom: 10px;">`;
                html += `${sect.name}`;
                html += `</div>`;
                html += `<div style="color: #666; margin-bottom: 15px;">${sect.desc}</div>`;
                html += `<div style="background: #f8f9fa; padding: 15px; border-radius: 6px; margin-bottom: 15px;">`;
                html += `<div style="font-size: 13px; font-weight: 600; margin-bottom: 8px;">门派加成：</div>`;
                
                if (sect.benefits.spiritualPowerBonus) {
                    html += `<div style="font-size: 12px; color: #27ae60; margin: 4px 0;">• 灵力获取 +${(sect.benefits.spiritualPowerBonus * 100).toFixed(0)}%</div>`;
                }
                if (sect.benefits.breakthroughBonus) {
                    html += `<div style="font-size: 12px; color: #27ae60; margin: 4px 0;">• 突破成功率 +${(sect.benefits.breakthroughBonus * 100).toFixed(0)}%</div>`;
                }
                if (sect.benefits.pillProduction) {
                    html += `<div style="font-size: 12px; color: #27ae60; margin: 4px 0;">• 丹房产出 +${sect.benefits.pillProduction}</div>`;
                }
                if (sect.benefits.spiritStoneBonus) {
                    html += `<div style="font-size: 12px; color: #27ae60; margin: 4px 0;">• 灵石获取 +${(sect.benefits.spiritStoneBonus * 100).toFixed(0)}%</div>`;
                }
                if (sect.benefits.facilityBonus) {
                    html += `<div style="font-size: 12px; color: #27ae60; margin: 4px 0;">• 设施效果 +${(sect.benefits.facilityBonus * 100).toFixed(0)}%</div>`;
                }
                if (sect.benefits.allBonus) {
                    html += `<div style="font-size: 12px; color: #27ae60; margin: 4px 0;">• 全属性 +${(sect.benefits.allBonus * 100).toFixed(0)}%</div>`;
                }
                
                html += `</div>`;
                html += `<button class="btn btn-primary" onclick="this.parentElement.remove()" style="width: 100%;">确定</button>`;
                
                infoModal.innerHTML = html;
                document.body.appendChild(infoModal);
                return;
            }
            
            // 如果还没选择门派，显示选择界面
            showSectSelection();
        }

        // 显示门派选择界面（已移至 js/ui/modals.js）
        // 新的拜师系统在 modals.js 中实现

        // 显示飞升选项
        function showAscensionOption() {
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2000;
            `;
            
            const card = document.createElement('div');
            card.style.cssText = `
                background: white;
                color: #2c3e50;
                padding: 30px;
                border-radius: 8px;
                max-width: 500px;
                width: 90%;
                box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            `;
            
            const bonusMultiplier = 1 + gameData.ascensionCount * 0.5;
            
            card.innerHTML = `
                <div style="font-size: 24px; font-weight: 600; margin-bottom: 20px; color: #2c3e50; text-align: center;">
                    飞升仙界
                </div>
                <div style="font-size: 14px; line-height: 1.8; margin-bottom: 20px; color: #555; text-align: center;">
                    你已修炼至渡劫期巅峰！<br>
                    可以选择飞升仙界，开启新的修仙之旅
                </div>
                <div style="background: #f8f9fa; padding: 15px; border-radius: 4px; margin-bottom: 20px; border-left: 3px solid #3b82f6;">
                    <div style="font-weight: 600; margin-bottom: 10px; font-size: 14px; color: #2c3e50;">飞升奖励：</div>
                    <div style="font-size: 13px; line-height: 1.8; color: #666;">
                        • 保留所有成就和飞升加成<br>
                        • 永久灵力获取 +${(bonusMultiplier * 100).toFixed(0)}%<br>
                        • 永久突破成功率 +${(gameData.ascensionCount * 5)}%<br>
                        • 初始获得50灵石
                    </div>
                </div>
                <div style="text-align: center; margin-bottom: 15px; font-size: 13px; color: #888;">
                    飞升次数: ${gameData.ascensionCount}
                </div>
                <div style="display: flex; gap: 10px;">
                    ${gameData.ascensionCount >= 3 ? `
                    <button class="btn" onclick="enterImmortalWorld()" 
                            style="flex: 1; background: #3b82f6; color: white; font-weight: 600; padding: 12px; border: none;">
                        进入仙界（不重置）
                    </button>
                    ` : ''}
                    <button class="btn" onclick="ascend()" 
                            style="flex: 1; background: #3b82f6; color: white; font-weight: 600; padding: 12px; border: none;">
                        飞升仙界
                    </button>
                    <button class="btn" onclick="this.parentElement.parentElement.parentElement.remove()" 
                            style="flex: 1; background: #f0f0f0; color: #666; padding: 12px; border: 1px solid #ddd;">
                        继续修炼
                    </button>
                </div>
            `;
            
            modal.appendChild(card);
            document.body.appendChild(modal);
        }

        // 进入仙界（不重置）
        function enterImmortalWorld() {
            if (gameData.ascensionCount < 3) {
                showNotification('需要飞升3次才能进入仙界', 'warning');
                return;
            }
            
            // 创建备份
            createAutoBackup('进入仙界前');
            
            // 关闭弹窗
            document.querySelectorAll('[style*="z-index: 2000"]').forEach(el => el.remove());
            
            // 进入仙界
            gameData.player.isInImmortalWorld = true;
            gameData.player.immortalRealm = 0;
            gameData.player.immortalRealmLevel = 1;
            
            addLog(`<span class="log-important">${getSvg('zap')}${getSvg('zap')}${getSvg('zap')} 成功飞升，进入仙界！开始地仙修炼之路...</span>`);
            showNotification('🌟 欢迎来到仙界！', 'success');
            breakthroughEffect();
            
            // 显示仙界介绍
            setTimeout(() => {
                showRealmStory(immortalRealms[0]);
            }, 1000);
            
            updateUI();
            renderCultivation();
            saveGame();
        }

        // 飞升（传统重置模式）
        function ascend() {
            // 关闭弹窗
            document.querySelectorAll('[style*="z-index: 2000"]').forEach(el => el.remove());
            
            // 飞升前创建备份
            createAutoBackup('飞升前备份');
            
            gameData.ascensionCount++;
            
            // 保存成就和飞升次数
            const savedAchievements = [...gameData.achievements];
            const savedAscensionCount = gameData.ascensionCount;
            
            // 重置玩家数据但保留飞升加成
            gameData.player = {
                class: 'warrior',
                realm: 0,
                realmLevel: 1,
                spiritualPower: 0,
                spiritStone: 50, // 初始50灵石
                pills: 0,
                totalDays: 0,
                breakthroughProgress: 0,
                totalPillsUsed: 0,
                totalBreakthroughs: 0
            };
            
            // 重置设施但保留1级灵脉和飞升设施
            const savedAscensionFacilities = {
                immortalPond: gameData.facilities.immortalPond || 0,
                celestialTree: gameData.facilities.celestialTree || 0
            };
            
            gameData.facilities = {
                spiritualVein: 1,
                pillRoom: 0,
                library: 0,
                artifactRoom: 0,
                spiritualField: 0,
                // 保留飞升设施
                immortalPond: savedAscensionFacilities.immortalPond,
                celestialTree: savedAscensionFacilities.celestialTree
            };
            
            // 重置功法（保留飞升功法等级）
            const savedAscensionTechniques = {
                immortal_foundation: gameData.techniques.immortal_foundation || 0,
                celestial_power: gameData.techniques.celestial_power || 0,
                eternal_dao: gameData.techniques.eternal_dao || 0
            };
            
            gameData.techniques = {
                basic: 0,
                fire_path: 0,
                water_path: 0,
                body_refining: 0,
                advanced: 0,
                sword_intent: 0,
                spell_mastery: 0,
                supreme: 0,
                heavenly_dao: 0,
                void_technique: 0,
                // 保留飞升功法
                immortal_foundation: savedAscensionTechniques.immortal_foundation,
                celestial_power: savedAscensionTechniques.celestial_power,
                eternal_dao: savedAscensionTechniques.eternal_dao
            };
            
            // 恢复成就和飞升数据
            gameData.achievements = savedAchievements;
            gameData.ascensionCount = savedAscensionCount;
            gameData.sect = null;
            
            // 法宝和装备飞升后保留
            // 已经在重置时没有清空，所以保持不变
            
            // 关闭所有模态窗口
            document.querySelectorAll('[id*="Modal"], div[style*="z-index: 2000"]').forEach(el => el.remove());
            
            // 显示飞升成功信息
            addLog(`<span class="log-important">${getSvg('star')} 恭喜飞升成功！这是第${gameData.ascensionCount}次飞升</span>`);
            addLog(`飞升加成：灵力获取+${((1 + gameData.ascensionCount * 0.5) * 100).toFixed(0)}%`);
            
            // 提示新解锁内容
            if (gameData.ascensionCount === 1) {
                addLog(`<span class="log-success">✨ 解锁：仙基心法、仙池设施、仙界专属事件</span>`);
            } else if (gameData.ascensionCount === 2) {
                addLog(`<span class="log-success">✨ 解锁：仙树设施</span>`);
            } else if (gameData.ascensionCount === 3) {
                addLog(`<span class="log-success">✨ 解锁：仙元功</span>`);
            } else if (gameData.ascensionCount === 5) {
                addLog(`<span class="log-success">✨ 解锁：永恒大道（终极功法）</span>`);
            }
            
            saveGame();
            updateUI();
            renderFacilities();
            renderCultivation();
            renderAlchemy();
            renderSectContent();
        }

        // 确认更换门派
        function confirmChangeSect() {
            const currentSect = sects[gameData.sect];
            
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2001;
            `;
            
            const card = document.createElement('div');
            card.style.cssText = `
                background: white;
                padding: 30px;
                border-radius: 8px;
                max-width: 500px;
                width: 90%;
                box-shadow: 0 10px 40px rgba(0,0,0,0.5);
                text-align: center;
            `;
            
            card.innerHTML = `
                <div style="font-size: 20px; font-weight: 600; color: #e67e22; margin-bottom: 15px;">
                    更换门派
                </div>
                <div style="color: #666; margin-bottom: 20px; line-height: 1.8;">
                    你即将离开<strong style="color: ${currentSect.color};">${currentSect.name}</strong><br><br>
                    <span style="color: #e74c3c;">注意：</span><br>
                    • 当前贡献度将<strong>减半</strong>（${Math.floor(gameData.sectContribution / 2)}）<br>
                    • 门派任务将被重置<br>
                    • 师徒关系将解除<br>
                    • 需要消耗500灵石
                </div>
                <div style="display: flex; gap: 15px;">
                    <button class="btn" onclick="this.parentElement.parentElement.parentElement.remove()" 
                            style="flex: 1;">
                        取消
                    </button>
                    <button class="btn btn-primary" onclick="changeSect()" 
                            style="flex: 1;" ${gameData.player.spiritStone < 500 ? 'disabled' : ''}>
                        确认更换（500灵石）
                    </button>
                </div>
            `;
            
            modal.appendChild(card);
            document.body.appendChild(modal);
        }

        // 更换门派
        function changeSect() {
            if (gameData.player.spiritStone < 500) {
                addLog('灵石不足，无法更换门派');
                return;
            }
            
            // 扣除费用
            gameData.player.spiritStone -= 500;
            
            // 贡献度减半
            gameData.sectContribution = Math.floor(gameData.sectContribution / 2);
            
            // 重置师徒关系
            gameData.masterLevel = 0;
            gameData.disciples = [];
            
            // 重置当前任务
            gameData.currentSectTasks = [];
            
            // 关闭确认窗口
            document.querySelectorAll('[style*="z-index: 2001"]').forEach(el => el.remove());
            
            // 显示门派选择
            showSectSelection();
        }

        // 加入门派（已移至 js/ui/modals.js，此处注释保留以避免混淆）
        // 新的拜师系统在 modals.js 中实现

        // 切换标签
        function switchTab(tabName) {
            // 隐藏所有标签内容
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.querySelectorAll('.tab').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // 显示选中的标签
            document.getElementById(tabName + '-tab').classList.add('active');
            event.target.classList.add('active');
            
            // 如果切换到人际关系标签，渲染NPC列表
            if (tabName === 'relationships' && typeof renderRelationshipsPanel === 'function') {
                renderRelationshipsPanel();
            }
        }

        // 安全获取元素（避免null错误）
        function safeGetElement(id) {
            const element = document.getElementById(id);
            if (!element) {
                console.warn(`Element with id '${id}' not found`);
            }
            return element;
        }
        
        // 更新UI
        function updateUI() {
            const player = gameData.player;
            let realm, realmName, realmLevel;
            
            // 判断是凡界还是仙界
            if (player.isInImmortalWorld) {
                realm = immortalRealms[player.immortalRealm];
                realmName = `${getSvg('star')} ${realm.name}`;
                realmLevel = `第${player.immortalRealmLevel}层`;
            } else {
                realm = realms[player.realm];
                realmName = realm.name;
                realmLevel = `第${player.realmLevel}层`;
            }
            
            // 更新境界显示
            document.getElementById('realmName').textContent = realmName;
            document.getElementById('realmLevel').textContent = realmLevel;
            
            // 所有系统统一使用多列网格布局
            
            // 更新资源
            document.getElementById('spiritualPower').textContent = formatNumber(Math.floor(player.spiritualPower));
            document.getElementById('spiritStone').textContent = formatNumber(player.spiritStone);
            document.getElementById('pillCount').textContent = player.pills;
            document.getElementById('totalDays').textContent = player.totalDays;
            const sps = calculateSpiritPerSecond();
            document.getElementById('spiritPerSec').textContent = sps.toFixed(1);
            const cultivateBtnText = document.getElementById('cultivateBtnText');
            if (cultivateBtnText) {
                cultivateBtnText.textContent = `修炼 (+${sps.toFixed(1)}/s)`;
            }
            
            // 更新新资源显示
            const immortalStone = player.immortalStone || 0;
            const daoFruit = player.daoFruit || 0;
            
            if (immortalStone > 0 || player.realm >= 2) {
                document.getElementById('immortalStoneRow').style.display = 'flex';
                document.getElementById('immortalStone').textContent = formatNumber(immortalStone);
            }
            
            if (daoFruit > 0 || player.realm >= 4) {
                document.getElementById('daoFruitRow').style.display = 'flex';
                document.getElementById('daoFruit').textContent = formatNumber(daoFruit);
            }
            
            // 更新进度条
            const progress = Math.min(100, player.breakthroughProgress);
            document.getElementById('spiritProgress').style.width = progress + '%';
            document.getElementById('spiritProgress').textContent = progress.toFixed(1) + '%';
            
            // 更新门派显示
            if (gameData.sect && sects[gameData.sect]) {
                document.getElementById('sectInfo').style.display = 'flex';
                document.getElementById('sectName').textContent = sects[gameData.sect].name;
                document.getElementById('sectName').style.color = sects[gameData.sect].color;
            } else {
                document.getElementById('sectInfo').style.display = 'none';
            }
            
            // 更新五行属性显示
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
            
            // 更新按钮状态
            const currentLevel = player.isInImmortalWorld ? player.immortalRealmLevel : player.realmLevel;
            const required = realm.spiritRequired * currentLevel;
            const canBreakthrough = player.spiritualPower >= required;

            // 更新突破按钮状态
            const breakthroughBtn = document.getElementById('breakthroughBtn');
            if (breakthroughBtn) {
                breakthroughBtn.disabled = !canBreakthrough;
                if (canBreakthrough) {
                    breakthroughBtn.classList.add('btn-primary');
                } else {
                    breakthroughBtn.classList.remove('btn-primary');
                }
                breakthroughBtn.title = canBreakthrough
                    ? '点击突破境界'
                    : `需要 ${formatNumber(required)} 灵力才能突破`;
            }
            const canUsePill = player.pills > 0;
            const pillBtn = document.getElementById('pillBtn');
            const usePillBtn = document.getElementById('usePillBtn');
            if (pillBtn) pillBtn.disabled = !canUsePill;
            if (usePillBtn) usePillBtn.disabled = !canUsePill;
            
            // 更新自动修炼按钮状态
            updateAutoModeUI();
        }

        // 添加日志
        function addLog(message, important = false) {
            const log = document.getElementById('eventLog');
            const time = new Date().toLocaleTimeString();
            const entry = document.createElement('div');
            entry.className = 'log-entry';
            entry.innerHTML = `<span class="log-time">[${time}]</span>${message}`;
            log.insertBefore(entry, log.firstChild);
            
            // 限制日志数量（使用配置的值）
            const maxLogs = gameData.maxLogEntries || 100;
            while (log.children.length > maxLogs) {
                log.removeChild(log.lastChild);
            }
        }

        // 格式化数字（已在 utils/format.js 中定义，此处注释避免重复）

        // 数值安全保护
        function safeNumber(num, defaultValue = 0) {
            if (typeof num !== 'number' || isNaN(num) || !isFinite(num)) {
                return defaultValue;
            }
            // 限制在安全整数范围内
            return Math.min(Number.MAX_SAFE_INTEGER, Math.max(-Number.MAX_SAFE_INTEGER, num));
        }

        // 渲染战斗冒险内容
        function renderCombatContent() {
            const container = document.getElementById('combatContent');
            if (!container) return;
            
            let html = '';
            
            // 战斗属性显示
            html += `<div style="margin-bottom: 25px;">`;
            html += `<h3 style="font-size: 16px; margin-bottom: 15px;">⚔️ 战斗属性</h3>`;
            html += `<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 15px;">`;
            
            const combatPower = calculateCombatPower();
            const playerElement = gameData.player.element;
            const elementInfo = playerElement && elementsData[playerElement] ? elementsData[playerElement] : null;
            
            html += `<div class="facility-item" style="background: white; border: 1px solid #e0e0e0;">`;
            html += `<div style="font-size: 14px; font-weight: 600; color: #2c3e50;">战斗力</div>`;
            html += `<div style="font-size: 18px; font-weight: 700; color: #2c3e50;">${combatPower}</div>`;
            html += `</div>`;
            
            html += `<div class="facility-item" style="background: white; border: 1px solid #e0e0e0;">`;
            html += `<div style="font-size: 14px; font-weight: 600; color: #2c3e50;">五行属性</div>`;
            html += `<div style="font-size: 16px; font-weight: 700; color: #7f8c8d;">${elementInfo ? elementInfo.name : '未选择'}</div>`;
            html += `</div>`;
            
            html += `<div class="facility-item" style="background: white; border: 1px solid #e0e0e0;">`;
            html += `<div style="font-size: 14px; font-weight: 600; color: #2c3e50;">战斗技能</div>`;
            html += `<div style="font-size: 16px; font-weight: 700; color: #7f8c8d;">${gameData.combatSkills ? gameData.combatSkills.length : 0}个</div>`;
            html += `</div>`;
            html += `</div>`;
            
            // 战斗技能区域
            html += `<div style="margin-bottom: 20px;">`;
            html += `<div style="font-size: 14px; font-weight: 600; color: #2c3e50; margin-bottom: 10px;">战斗技能</div>`;
            html += `<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">`;
            
            for (let skillId in combatSkills) {
                const skill = combatSkills[skillId];
                const hasSkill = gameData.combatSkills && gameData.combatSkills.includes(skillId);
                const canLearn = gameData.player.realm >= (skill.requiredRealm || 0);
                
                html += `<div class="facility-item" style="${hasSkill ? 'background: linear-gradient(135deg, #3b82f622, #1d4ed822); border-color: #3b82f6;' : ''}">`;
                html += `<div style="font-size: 13px; font-weight: 600; margin-bottom: 5px;">${skill.name}</div>`;
                html += `<div style="font-size: 11px; color: #666; margin-bottom: 6px;">${skill.desc}</div>`;
                html += `<div style="font-size: 11px; display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 3px;">`;
                html += `<span style="background: #e8f5e9; color: #27ae60; padding: 2px 6px; border-radius: 3px;">伤害 ${skill.damage}x</span>`;
                html += `<span style="background: #e3f2fd; color: #2196f3; padding: 2px 6px; border-radius: 3px;">消耗 ${skill.cost}灵力</span>`;
                if (skill.cooldown) html += `<span style="background: #fff3e0; color: #f57c00; padding: 2px 6px; border-radius: 3px;">冷却 ${skill.cooldown}回合</span>`;
                if (skill.critical) html += `<span style="background: #fce4ec; color: #c2185b; padding: 2px 6px; border-radius: 3px;">可暴击</span>`;
                html += `</div>`;
                if (!hasSkill && canLearn) {
                    html += `<button class="btn" style="padding: 4px 8px; margin-top: 5px; font-size: 11px;" onclick="learnCombatSkill('${skillId}')">学习</button>`;
                } else if (hasSkill) {
                    html += `<div style="color: #27ae60; font-size: 11px; margin-top: 5px;">✓ 已学习</div>`;
                } else {
                    html += `<div style="color: #e74c3c; font-size: 11px; margin-top: 5px;">需要境界: ${realms[skill.requiredRealm || 0].name}</div>`;
                }
                html += `</div>`;
            }
            html += `</div>`;
            html += `</div>`;
            
            // Boss战斗区域
            html += `<div style="margin-bottom: 25px;">`;
            html += `<h3 style="font-size: 16px; margin-bottom: 15px;">⚔️ Boss挑战</h3>`;
            html += `<p style="font-size: 12px; color: #7f8c8d; margin-bottom: 15px;">挑战强大的Boss获取丰厚奖励</p>`;
            
            // 添加网格布局容器
            html += '<div class="boss-challenge-grid">';
            
            for (let bossId in bossesData) {
                const boss = bossesData[bossId];
                const canChallenge = gameData.player.realm >= boss.requiredRealm;
                const defeated = gameData.player.bossesDefeated.includes(bossId);
                
                html += `<div class="facility-item" style="${defeated ? 'opacity: 0.6;' : ''}">`;
                html += `<div class="facility-header">`;
                html += `<span class="facility-name">${boss.name} ${defeated ? '(已击败)' : ''}</span>`;
                html += `<span class="facility-level">战力: ${boss.power}</span>`;
                html += `</div>`;
                html += `<div class="facility-desc">${boss.desc}</div>`;
                html += `<div class="facility-benefit">`;
                html += `奖励: `;
                if (boss.rewards.spiritStone) html += `灵石+${boss.rewards.spiritStone} `;
                if (boss.rewards.pills) html += `丹药+${boss.rewards.pills} `;
                if (boss.rewards.immortalStone) html += `仙石+${boss.rewards.immortalStone} `;
                if (boss.rewards.daoFruit) html += `道果+${boss.rewards.daoFruit} `;
                html += `</div>`;
                if (!canChallenge) {
                    html += `<div class="cost-info">需要境界: ${realms[boss.requiredRealm].name}</div>`;
                }
                html += `<button class="btn btn-primary" onclick="challengeBoss('${bossId}')" ${!canChallenge || defeated ? 'disabled' : ''}>`;
                html += defeated ? '已完成' : '挑战';
                html += `</button>`;
                html += `</div>`;
            }
            
            // 关闭网格布局容器
            html += '</div>';
            
            html += `</div>`;
            
            // 副本区域
            html += `<div style="margin-bottom: 25px;">`;
            html += `<h3 style="font-size: 16px; margin-bottom: 15px;">🏔️ 副本探索</h3>`;
            html += `<p style="font-size: 12px; color: #7f8c8d; margin-bottom: 15px;">探索副本，体验不同的冒险路径和事件</p>`;
            
            // 添加网格布局容器
            html += '<div class="dungeon-exploration-grid">';
            
            for (let dungeonId in dungeonsConfig) {
                const dungeon = dungeonsConfig[dungeonId];
                const canEnter = gameData.player.realm >= dungeon.requiredRealm && 
                                 gameData.player.realmLevel >= dungeon.requiredLevel;
                const completedTimes = (gameData.dungeonProgress && gameData.dungeonProgress[dungeonId]) || 0;
                
                html += `<div class="facility-item">`;
                html += `<div class="facility-header">`;
                html += `<span class="facility-name">${dungeon.name}</span>`;
                html += `<span class="facility-level">难度: ${'★'.repeat(dungeon.difficulty)}</span>`;
                html += `</div>`;
                html += `<div class="facility-desc">${dungeon.desc}</div>`;
                
                // 显示特色机制
                if (dungeon.specialMechanic) {
                    html += `<div style="font-size: 11px; color: #3b82f6; margin: 5px 0;">`;
                    html += `✨ ${dungeon.specialMechanic.name}: ${dungeon.specialMechanic.desc}`;
                    html += `</div>`;
                }
                
                // 显示路径选项
                html += `<div style="font-size: 11px; color: #7f8c8d; margin: 5px 0;">`;
                html += `${dungeon.paths.length}条可选路径 | 已完成${completedTimes}次`;
                html += `</div>`;
                
                html += `<div class="facility-benefit">`;
                html += `基础奖励: `;
                if (dungeon.baseReward.spiritStone) html += `灵石+${dungeon.baseReward.spiritStone} `;
                if (dungeon.baseReward.pills) html += `丹药+${dungeon.baseReward.pills} `;
                if (dungeon.baseReward.immortalStone) html += `仙石+${dungeon.baseReward.immortalStone} `;
                if (dungeon.baseReward.daoFruit) html += `道果+${dungeon.baseReward.daoFruit} `;
                html += `</div>`;
                
                if (!canEnter) {
                    html += `<div class="cost-info">需要: ${realms[dungeon.requiredRealm].name}第${dungeon.requiredLevel}层</div>`;
                }
                html += `<button class="btn btn-primary" onclick="showDungeonPathSelection('${dungeonId}')" ${!canEnter ? 'disabled' : ''}>`;
                html += '开始探索';
                html += `</button>`;
                html += `</div>`;
            }
            
            // 关闭网格布局容器
            html += '</div>';
            
            html += `</div>`;
            
            // NPC交易区域
            html += `<div style="margin-bottom: 25px;">`;
            html += `<h3 style="font-size: 16px; margin-bottom: 15px;">👤 NPC交易</h3>`;
            html += `<p style="font-size: 12px; color: #7f8c8d; margin-bottom: 15px;">与修士交易资源</p>`;
            
            // 添加网格布局容器
            html += '<div class="npc-trade-grid">';
            
            for (let npcId in npcsData) {
                const npc = npcsData[npcId];
                const canTrade = !npc.requiredRealm || gameData.player.realm >= npc.requiredRealm;
                
                if (!canTrade) continue;
                
                html += `<div class="facility-item">`;
                html += `<div class="facility-name">${npc.name}</div>`;
                html += `<div class="facility-desc">${npc.desc}</div>`;
                
                // 添加交易项目网格布局容器
                html += '<div class="npc-trades-grid">';
                
                npc.trades.forEach((trade, index) => {
                    html += `<div class="trade-item">`;
                    html += `<div class="trade-info">`;
                    html += `<div style="font-size: 13px; font-weight: 600; color: #e74c3c; margin-bottom: 8px;">`;
                    html += `支付: `;
                    for (let res in trade.request) {
                        html += `${getResourceName(res)} ${trade.request[res]} `;
                    }
                    html += `</div>`;
                    html += `<div style="font-size: 13px; font-weight: 600; color: #27ae60;">`;
                    html += `获得: `;
                    for (let res in trade.offer) {
                        html += `${getResourceName(res)} ${trade.offer[res]} `;
                    }
                    html += `</div>`;
                    html += `</div>`;
                    html += `<div class="trade-button">`;
                    html += `<button class="btn btn-primary" style="width: 100%; padding: 10px; font-size: 13px; font-weight: 600;" onclick="tradeWithNPC('${npcId}', ${index})">交易</button>`;
                    html += `</div>`;
                    html += `</div>`;
                });
                
                // 关闭交易项目网格布局容器
                html += '</div>';
                
                html += `</div>`;
            }
            
            // 关闭网格布局容器
            html += '</div>';
            
            html += `</div>`;
            
            container.innerHTML = html;
        }

        // 渲染天赋系统内容
        function renderTalentsContent() {
            const container = document.getElementById('talentsContent');
            if (!container) return;
            
            let html = '';
            
            html += `<div style="margin-bottom: 20px; padding: 15px; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); color: white; border-radius: 6px;">`;
            html += `<div style="font-size: 16px; font-weight: 600; margin-bottom: 5px;">可用天赋点: ${gameData.talentPoints || 0}</div>`;
            html += `<div style="font-size: 12px; opacity: 0.9;">使用道果激活天赋，永久提升修炼效率</div>`;
            html += `</div>`;
            
            html += `<div style="margin-bottom: 15px;">`;
            html += `<button class="btn btn-success" onclick="convertDaoFruitToTalentPoints()" ${(gameData.player.daoFruit || 0) === 0 ? 'disabled' : ''}>`;
            html += `消耗1道果兑换1天赋点`;
            html += `</button>`;
            html += `</div>`;
            
            // 按cost分组显示天赋
            const talentGroups = {
                1: { title: '基础天赋', talents: [] },
                2: { title: '进阶天赋', talents: [] },
                3: { title: '高级天赋', talents: [] },
                5: { title: '至尊天赋', talents: [] }
            };
            
            for (let talentId in talentsData) {
                const talent = talentsData[talentId];
                talentGroups[talent.cost].talents.push({ id: talentId, data: talent });
            }
            
            for (let cost in talentGroups) {
                const group = talentGroups[cost];
                if (group.talents.length === 0) continue;
                
                html += `<div style="margin-bottom: 25px;">`;
                html += `<h3 style="font-size: 14px; font-weight: 600; margin-bottom: 12px; color: #2c3e50;">${group.title}</h3>`;
                
                // 添加网格布局容器
                html += '<div class="talents-grid">';
                
                group.talents.forEach(({id, data}) => {
                    const hasActivated = (gameData.talents || []).includes(id);
                    const canActivate = (gameData.talentPoints || 0) >= data.cost;
                    
                    html += `<div class="facility-item" style="${hasActivated ? 'background: linear-gradient(135deg, #3b82f622, #1d4ed822); border-color: #3b82f6;' : ''}">`;
                    html += `<div class="facility-header">`;
                    html += `<span class="facility-name">${data.name} ${hasActivated ? '✓' : ''}</span>`;
                    html += `<span class="facility-level">消耗: ${data.cost}点</span>`;
                    html += `</div>`;
                    html += `<div class="facility-desc">${data.desc}</div>`;
                    html += `<button class="btn ${hasActivated ? 'btn-success' : 'btn-primary'}" onclick="activateTalent('${id}')" ${hasActivated || !canActivate ? 'disabled' : ''}>`;
                    html += hasActivated ? '已激活' : '激活';
                    html += `</button>`;
                    html += `</div>`;
                });
                
                // 关闭网格布局容器
                html += '</div>';
                
                html += `</div>`;
            }
            
            container.innerHTML = html;
        }

        // 获取资源名称
        function getResourceName(resKey) {
            const names = {
                spiritStone: '灵石',
                pills: '丹药',
                immortalStone: '仙石',
                daoFruit: '道果',
                spiritualPower: '灵力',
                breakthroughProgress: '突破进度',
                heavenlyEssence: '天道精华',
                explorationPoints: '探索点'
            };
            return names[resKey] || resKey;
        }

        // 学习战斗技能
        function learnCombatSkill(skillId) {
            const skill = combatSkills[skillId];
            if (!skill) return;
            
            // 检查是否已学习
            if (gameData.combatSkills && gameData.combatSkills.includes(skillId)) {
                showNotification('已学习此技能', 'warning');
                return;
            }
            
            // 检查境界要求
            if (skill.requiredRealm && gameData.player.realm < skill.requiredRealm) {
                showNotification(`需要境界: ${realms[skill.requiredRealm].name}`, 'warning');
                return;
            }
            
            // 检查消耗
            if (skill.cost && gameData.player.spiritualPower < skill.cost) {
                showNotification('灵力不足', 'warning');
                return;
            }
            
            // 学习技能
            if (!gameData.combatSkills) gameData.combatSkills = [];
            gameData.combatSkills.push(skillId);
            
            // 消耗资源
            if (skill.cost) {
                gameData.player.spiritualPower -= skill.cost;
            }
            
            addLog(`<span class="log-success">✓ 学习了战斗技能：${skill.name}</span>`);
            showNotification(`学习了 ${skill.name}`, 'success');
            
            // 重新渲染战斗技能界面
            renderCombatSkills();
            updateUI();
            saveGame();
        }

        // 挑战Boss（优化版）
        function challengeBoss(bossId) {
            const boss = bossesData[bossId];
            if (!boss) return;
            
            // 检查是否已击败
            if (gameData.player.bossesDefeated.includes(bossId)) {
                showNotification('已击败此Boss', 'warning');
                return;
            }
            
            // 显示战斗动画
            showBattleAnimation(boss, () => {
                // 战斗逻辑
                const playerPower = calculateCombatPower();
                const bossPower = boss.power;
                
                // 属性相克计算
                const playerElement = gameData.player.element;
                const bossElement = boss.element;
                let elementBonus = 1.0;
                
                if (playerElement && bossElement && elementsData[playerElement] && elementsData[bossElement]) {
                    const playerElem = elementsData[playerElement];
                    const bossElem = elementsData[bossElement];
                    
                    if (playerElem.counters === bossElement) {
                        elementBonus = 1.2; // 克制对方，伤害+20%
                        addLog(`<span class="log-success">属性克制！${playerElem.name}克制${bossElem.name}</span>`);
                    } else if (bossElem.counters === playerElement) {
                        elementBonus = 0.8; // 被对方克制，伤害-20%
                        addLog(`<span class="log-warning">属性被克！${bossElem.name}克制${playerElem.name}</span>`);
                    }
                }
                
                const finalPlayerPower = playerPower * elementBonus;
                const winChance = Math.min(0.95, finalPlayerPower / bossPower);
                
                if (Math.random() < winChance) {
                    // 胜利
                    let totalRewards = '';
                    for (let res in boss.rewards) {
                        const amount = boss.rewards[res];
                        if (res === 'experience') {
                            gameData.player.spiritualPower += amount;
                            totalRewards += `灵力+${amount} `;
                        } else if (res === 'spiritStone') {
                            gameData.player.spiritStone += amount;
                            totalRewards += `灵石+${amount} `;
                        } else if (res === 'pills') {
                            gameData.player.pills += amount;
                            totalRewards += `丹药+${amount} `;
                        } else if (res === 'immortalStone') {
                            gameData.player.immortalStone = (gameData.player.immortalStone || 0) + amount;
                            totalRewards += `仙石+${amount} `;
                        } else if (res === 'daoFruit') {
                            gameData.player.daoFruit = (gameData.player.daoFruit || 0) + amount;
                            totalRewards += `道果+${amount} `;
                        } else if (res === 'heavenlyEssence') {
                            gameData.player.heavenlyEssence = (gameData.player.heavenlyEssence || 0) + amount;
                            totalRewards += `天道精华+${amount} `;
                        }
                    }
                    
                    gameData.player.bossesDefeated.push(bossId);
                    gameData.player.combatWins = (gameData.player.combatWins || 0) + 1;
                    
                    addLog(`<span class="log-success">✓ 击败 ${boss.name}！获得：${totalRewards}</span>`);
                    showNotification(`击败 ${boss.name}！`, 'success');
                } else {
                    // 失败
                    gameData.player.combatLosses = (gameData.player.combatLosses || 0) + 1;
                    addLog(`<span class="log-warning">✗ 挑战 ${boss.name} 失败</span>`);
                    showNotification(`挑战 ${boss.name} 失败`, 'warning');
                }
                
                renderCombatContent();
                updateUI();
                saveGame();
            });
        }
        
        // 显示战斗动画
        function showBattleAnimation(boss, callback) {
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2000;
            `;
            
            const battleCard = document.createElement('div');
            battleCard.style.cssText = `
                background: white;
                padding: 30px;
                border-radius: 8px;
                text-align: center;
                max-width: 500px;
                width: 90%;
            `;
            
            battleCard.innerHTML = `
                <div style="font-size: 24px; font-weight: 600; color: #2c3e50; margin-bottom: 20px;">
                    ⚔️ 战斗开始！
                </div>
                <div style="font-size: 18px; color: #e74c3c; margin-bottom: 15px;">
                    vs ${boss.name}
                </div>
                <div style="font-size: 14px; color: #7f8c8d; margin-bottom: 20px;">
                    战力: ${calculateCombatPower()} vs ${boss.power}
                </div>
                <div style="font-size: 16px; color: #27ae60; animation: pulse 1s infinite;">
                    战斗中...
                </div>
            `;
            
            modal.appendChild(battleCard);
            document.body.appendChild(modal);
            
            // 3秒后关闭动画并执行回调
            setTimeout(() => {
                modal.remove();
                callback();
            }, 3000);
        }

        // 计算战斗力
        function calculateCombatPower() {
            let power = gameData.player.realm * 150 + gameData.player.realmLevel * 20;
            power += gameData.facilities.library * 10;
            power += gameData.facilities.artifactRoom * 15;
            
            // 装备加成
            for (let slot in gameData.equipment) {
                if (gameData.equipment[slot]) power += 50;
            }
            
            // 法宝加成
            power += gameData.artifacts.length * 30;
            
            // 战斗技能加成
            if (gameData.combatSkills) {
                power += gameData.combatSkills.length * 25;
            }
            
            // 成就加成
            if (gameData.achievementBonuses.combatPowerBonus) {
                power *= (1 + gameData.achievementBonuses.combatPowerBonus);
            }
            if (gameData.achievementBonuses.allBonus) {
                power *= (1 + gameData.achievementBonuses.allBonus);
            }
            
            // 天赋加成
            (gameData.talents || []).forEach(talentId => {
                const talent = talentsData[talentId];
                if (talent && talent.bonus.combatPowerBonus) {
                    power *= (1 + talent.bonus.combatPowerBonus);
                }
                if (talent && talent.bonus.allBonus) {
                    power *= (1 + talent.bonus.allBonus);
                }
            });
            
            // 五行属性加成
            if (gameData.player.element && gameData.player.element !== 'none') {
                const element = elementsData[gameData.player.element];
                if (element && element.bonus.combatPowerBonus) {
                    const powerLevel = gameData.player.elementPower || 1;
                    power *= (1 + element.bonus.combatPowerBonus * powerLevel * 0.1);
                }
            }
            
            return Math.floor(power);
        }

        // ===== 新副本探索系统 =====
        
        // 全局副本探索状态
        let currentDungeonExploration = null;
        
        // 显示路径选择
        function showDungeonPathSelection(dungeonId) {
            const dungeon = dungeonsConfig[dungeonId];
            if (!dungeon) return;
            
            const modal = showModal('选择探索路径', '', []);
            modal.style.maxWidth = '600px';
            
            let html = '';
            html += `<div style="margin-bottom: 15px; padding: 15px; background: #f8f9fa; border-radius: 6px;">`;
            html += `<h3 style="margin: 0 0 10px 0; color: #2c3e50;">${dungeon.name}</h3>`;
            html += `<p style="margin: 0; color: #666; font-size: 13px;">${dungeon.desc}</p>`;
            html += `</div>`;
            
            // 显示路径选项
            dungeon.paths.forEach(path => {
                html += `<div style="margin-bottom: 15px; padding: 15px; border: 2px solid #ddd; border-radius: 6px; cursor: pointer; transition: all 0.3s;" 
                         onmouseover="this.style.borderColor='#3498db'; this.style.background='#f0f8ff';" 
                         onmouseout="this.style.borderColor='#ddd'; this.style.background='white';"
                         onclick="startDungeonExploration('${dungeonId}', '${path.id}')">`;
                html += `<h4 style="margin: 0 0 8px 0; color: #2c3e50; font-size: 15px;">${path.name}</h4>`;
                html += `<p style="margin: 0 0 8px 0; color: #666; font-size: 12px;">${path.desc}</p>`;
                html += `<div style="font-size: 11px; color: #7f8c8d;">`;
                html += `难度系数: ${(path.difficulty * 100).toFixed(0)}% | `;
                html += `奖励系数: ${(path.rewardMultiplier * 100).toFixed(0)}% | `;
                html += `阶段数: ${path.stages}`;
                if (path.costPerStage) {
                    html += ` | 每阶段消耗: `;
                    for (let res in path.costPerStage) {
                        html += `${getResourceName(res)} ${path.costPerStage[res]} `;
                    }
                }
                html += `</div>`;
                html += `</div>`;
            });
            
            html += `<button class="btn" onclick="closeModal()" style="width: 100%; margin-top: 10px;">取消</button>`;
            
            modal.querySelector('.modal-body').innerHTML = html;
        }
        
        // 开始副本探索
        function startDungeonExploration(dungeonId, pathId) {
            const dungeon = dungeonsConfig[dungeonId];
            const path = dungeon.paths.find(p => p.id === pathId);
            if (!dungeon || !path) return;
            
            closeModal();
            
            // 初始化探索状态
            currentDungeonExploration = {
                dungeonId: dungeonId,
                pathId: pathId,
                currentStage: 0,
                maxStages: path.stages,
                hp: 1000, // 副本内生命值
                maxHp: 1000,
                explorationPoints: 5, // 探索点数
                allies: [], // 助战伙伴
                skippedEnemies: 0, // 跳过的敌人
                collectedRewards: {
                    spiritStone: 0,
                    pills: 0,
                    immortalStone: 0,
                    daoFruit: 0,
                    spiritualPower: 0,
                    breakthroughProgress: 0
                },
                path: path,
                dungeon: dungeon
            };
            
            showNotification(`进入${dungeon.name} - ${path.name}`, 'info');
            addLog(`🏔️ 开始探索 ${dungeon.name}（${path.name}）`);
            
            // 显示探索界面
            showDungeonExplorationUI();
        }
        
        // 显示探索界面
        function showDungeonExplorationUI() {
            const exp = currentDungeonExploration;
            if (!exp) return;
            
            const modal = showModal('副本探索中', '', []);
            modal.id = 'dungeonExplorationModal';
            modal.style.maxWidth = '700px';
            
            updateDungeonExplorationUI();
        }
        
        // 更新探索界面
        function updateDungeonExplorationUI() {
            const modal = document.getElementById('dungeonExplorationModal');
            if (!modal) return;
            
            const exp = currentDungeonExploration;
            if (!exp) return;
            
            let html = '';
            
            // 顶部状态栏
            html += `<div style="margin-bottom: 15px; padding: 15px; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); border-radius: 6px; color: white;">`;
            html += `<div style="display: flex; justify-content: space-between; margin-bottom: 10px;">`;
            html += `<div style="font-size: 16px; font-weight: 600;">${exp.dungeon.name} - ${exp.path.name}</div>`;
            html += `<div style="font-size: 14px;">阶段 ${exp.currentStage}/${exp.maxStages}</div>`;
            html += `</div>`;
            
            // 进度条
            const progress = (exp.currentStage / exp.maxStages * 100).toFixed(1);
            html += `<div style="background: rgba(255,255,255,0.3); height: 8px; border-radius: 4px; overflow: hidden;">`;
            html += `<div style="background: white; height: 100%; width: ${progress}%; transition: width 0.3s;"></div>`;
            html += `</div>`;
            html += `</div>`;
            
            // 资源状态
            html += `<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 15px;">`;
            
            // 生命值
            const hpPercent = (exp.hp / exp.maxHp * 100).toFixed(1);
            const hpColor = hpPercent > 60 ? '#27ae60' : hpPercent > 30 ? '#f39c12' : '#e74c3c';
            html += `<div style="padding: 10px; background: #f8f9fa; border-radius: 4px; border-left: 3px solid ${hpColor};">`;
            html += `<div style="font-size: 11px; color: #7f8c8d; margin-bottom: 3px;">生命值</div>`;
            html += `<div style="font-size: 14px; font-weight: 600; color: ${hpColor};">${exp.hp}/${exp.maxHp}</div>`;
            html += `</div>`;
            
            // 灵力
            html += `<div style="padding: 10px; background: #f8f9fa; border-radius: 4px; border-left: 3px solid #3498db;">`;
            html += `<div style="font-size: 11px; color: #7f8c8d; margin-bottom: 3px;">灵力</div>`;
            html += `<div style="font-size: 14px; font-weight: 600; color: #3498db;">${formatNumber(gameData.player.spiritualPower)}</div>`;
            html += `</div>`;
            
            // 探索点
            html += `<div style="padding: 10px; background: #f8f9fa; border-radius: 4px; border-left: 3px solid #3b82f6;">`;
            html += `<div style="font-size: 11px; color: #7f8c8d; margin-bottom: 3px;">探索点</div>`;
            html += `<div style="font-size: 14px; font-weight: 600; color: #3b82f6;">${exp.explorationPoints}</div>`;
            html += `</div>`;
            html += `</div>`;
            
            // 助战伙伴
            if (exp.allies.length > 0) {
                html += `<div style="margin-bottom: 15px; padding: 10px; background: #e8f5e9; border-radius: 4px;">`;
                html += `<div style="font-size: 12px; color: #27ae60; margin-bottom: 5px;">🤝 助战伙伴</div>`;
                exp.allies.forEach(ally => {
                    html += `<div style="font-size: 11px; color: #666;">${ally.name} (战力+${ally.power})</div>`;
                });
                html += `</div>`;
            }
            
            // 累计奖励
            html += `<div style="margin-bottom: 15px; padding: 12px; background: #fff3cd; border-radius: 4px;">`;
            html += `<div style="font-size: 12px; color: #856404; margin-bottom: 5px; font-weight: 600;">📦 累计奖励</div>`;
            html += `<div style="font-size: 11px; color: #856404;">`;
            if (exp.collectedRewards.spiritStone > 0) html += `灵石+${exp.collectedRewards.spiritStone} `;
            if (exp.collectedRewards.pills > 0) html += `丹药+${exp.collectedRewards.pills} `;
            if (exp.collectedRewards.immortalStone > 0) html += `仙石+${exp.collectedRewards.immortalStone} `;
            if (exp.collectedRewards.daoFruit > 0) html += `道果+${exp.collectedRewards.daoFruit} `;
            if (exp.collectedRewards.spiritualPower > 0) html += `灵力+${formatNumber(exp.collectedRewards.spiritualPower)} `;
            if (exp.collectedRewards.breakthroughProgress > 0) html += `突破进度+${exp.collectedRewards.breakthroughProgress}% `;
            if (Object.values(exp.collectedRewards).every(v => v === 0)) {
                html += `暂无奖励`;
            }
            html += `</div>`;
            html += `</div>`;
            
            // 继续探索按钮
            html += `<button class="btn btn-primary" onclick="continueExploration()" style="width: 100%; padding: 12px; font-size: 14px;">`;
            html += `继续探索 →`;
            html += `</button>`;
            
            // 撤退按钮
            html += `<button class="btn" onclick="retreatFromDungeon()" style="width: 100%; margin-top: 10px;">`;
            html += `撤退（保留已获得的奖励）`;
            html += `</button>`;
            
            modal.querySelector('.modal-body').innerHTML = html;
        }
        
        // 继续探索
        function continueExploration() {
            const exp = currentDungeonExploration;
            if (!exp) return;
            
            // 检查路径消耗
            if (exp.path.costPerStage) {
                for (let res in exp.path.costPerStage) {
                    const cost = exp.path.costPerStage[res];
                    if (res === 'spiritualPower' && gameData.player.spiritualPower < cost) {
                        showNotification('灵力不足！', 'error');
                return;
                    }
                    if (res === 'explorationPoints' && exp.explorationPoints < cost) {
                        showNotification('探索点不足！', 'error');
                        return;
                    }
                }
                
                // 扣除消耗
                for (let res in exp.path.costPerStage) {
                    const cost = exp.path.costPerStage[res];
                    if (res === 'spiritualPower') {
                        gameData.player.spiritualPower -= cost;
                    } else if (res === 'explorationPoints') {
                        exp.explorationPoints -= cost;
                    }
                }
            }
            
            exp.currentStage++;
            
            // 判断是战斗还是事件
            const encounterType = Math.random();
            const eventChance = exp.path.moreEvents ? 0.5 : 0.3;
            
            if (encounterType < eventChance && exp.dungeon.events.length > 0) {
                // 触发事件
                triggerDungeonEvent();
            } else {
                // 触发战斗
                triggerDungeonCombat();
            }
        }
        
        // 触发副本事件
        function triggerDungeonEvent() {
            const exp = currentDungeonExploration;
            if (!exp) return;
            
            const event = exp.dungeon.events[Math.floor(Math.random() * exp.dungeon.events.length)];
            
            const modal = document.getElementById('dungeonExplorationModal');
            if (!modal) return;
            
            let html = '';
            
            html += `<div style="padding: 20px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 6px; color: white; margin-bottom: 15px;">`;
            html += `<h3 style="margin: 0 0 10px 0; font-size: 18px;">✨ ${event.name}</h3>`;
            html += `<p style="margin: 0; font-size: 13px; opacity: 0.95;">${event.desc}</p>`;
            html += `</div>`;
            
            html += `<div style="margin-bottom: 15px;">`;
            html += `<div style="font-size: 13px; color: #666; margin-bottom: 10px;">选择你的行动：</div>`;
            
            event.choices.forEach((choice, index) => {
                html += `<div style="margin-bottom: 10px; padding: 12px; border: 2px solid #ddd; border-radius: 6px; cursor: pointer; transition: all 0.3s;"
                         onmouseover="this.style.borderColor='#3498db'; this.style.background='#f0f8ff';" 
                         onmouseout="this.style.borderColor='#ddd'; this.style.background='white';"
                         onclick="handleDungeonEventChoice(${index})">`;
                html += `<div style="font-weight: 600; margin-bottom: 5px; color: #2c3e50;">${choice.text}</div>`;
                
                if (choice.cost) {
                    html += `<div style="font-size: 11px; color: #e74c3c;">`;
                    html += `消耗: `;
                    for (let res in choice.cost) {
                        html += `${getResourceName(res)} ${choice.cost[res]} `;
                    }
                    html += `</div>`;
                }
                html += `</div>`;
            });
            
            html += `</div>`;
            
            modal.querySelector('.modal-body').innerHTML = html;
            
            // 保存当前事件到探索状态
            exp.currentEvent = event;
        }
        
        // 处理地牢探索事件选择
        function handleDungeonEventChoice(choiceIndex) {
            const exp = currentDungeonExploration;
            if (!exp || !exp.currentEvent) return;
            
            const choice = exp.currentEvent.choices[choiceIndex];
            
            // 检查消耗
            if (choice.cost) {
                for (let res in choice.cost) {
                    const cost = choice.cost[res];
                    if (res === 'spiritualPower' && gameData.player.spiritualPower < cost) {
                        showNotification('灵力不足！', 'error');
                        return;
                    }
                    if (res === 'explorationPoints' && exp.explorationPoints < cost) {
                        showNotification('探索点不足！', 'error');
                        return;
                    }
                    if (res === 'pills' && gameData.player.pills < cost) {
                        showNotification('丹药不足！', 'error');
                        return;
                    }
                    if (res === 'spiritStone' && gameData.player.spiritStone < cost) {
                        showNotification('灵石不足！', 'error');
                        return;
                    }
                }
                
                // 扣除消耗
                for (let res in choice.cost) {
                    const cost = choice.cost[res];
                    if (res === 'spiritualPower') gameData.player.spiritualPower -= cost;
                    if (res === 'explorationPoints') exp.explorationPoints -= cost;
                    if (res === 'pills') gameData.player.pills -= cost;
                    if (res === 'spiritStone') gameData.player.spiritStone -= cost;
                }
            }
            
            // 计算结果
            const rand = Math.random();
            let cumulativeChance = 0;
            let selectedOutcome = null;
            
            for (let outcome of choice.outcomes) {
                cumulativeChance += outcome.chance;
                if (rand < cumulativeChance) {
                    selectedOutcome = outcome;
                    break;
                }
            }
            
            if (!selectedOutcome) selectedOutcome = choice.outcomes[choice.outcomes.length - 1];
            
            // 应用结果
            let resultMessage = selectedOutcome.message;
            
            if (selectedOutcome.reward) {
                for (let res in selectedOutcome.reward) {
                    const amount = selectedOutcome.reward[res];
                    if (res === 'breakthroughProgress') {
                        exp.collectedRewards.breakthroughProgress += amount;
                    } else {
                        exp.collectedRewards[res] = (exp.collectedRewards[res] || 0) + amount;
                    }
                }
            }
            
            if (selectedOutcome.heal) {
                exp.hp = Math.min(exp.maxHp, exp.hp + selectedOutcome.heal);
            }
            
            if (selectedOutcome.damage) {
                exp.hp -= selectedOutcome.damage;
                if (exp.hp <= 0) {
                    exp.hp = 0;
                    endDungeonExploration(false);
                    return;
                }
            }
            
            if (selectedOutcome.skipEnemy) {
                exp.skippedEnemies += selectedOutcome.skipEnemy;
            }
            
            if (selectedOutcome.ally) {
                exp.allies.push(selectedOutcome.ally);
            }
            
            showNotification(resultMessage, selectedOutcome.damage ? 'warning' : 'success');
            addLog(`📖 ${resultMessage}`);
            
            // 如果触发了召唤敌人
            if (selectedOutcome.summonEnemy) {
            setTimeout(() => {
                    triggerDungeonCombat();
                }, 1000);
            } else {
                // 检查是否完成探索
                if (exp.currentStage >= exp.maxStages) {
                    endDungeonExploration(true);
                } else {
                    setTimeout(() => {
                        updateDungeonExplorationUI();
                    }, 1000);
                }
            }
            
            delete exp.currentEvent;
        }
        
        // 触发副本战斗
        function triggerDungeonCombat() {
            const exp = currentDungeonExploration;
            if (!exp) return;
            
            // 检查是否跳过
            if (exp.skippedEnemies > 0) {
                exp.skippedEnemies--;
                showNotification('跳过了一个敌人', 'info');
                
                if (exp.currentStage >= exp.maxStages) {
                    endDungeonExploration(true);
                } else {
                    setTimeout(() => {
                        updateDungeonExplorationUI();
                    }, 1000);
                }
                return;
            }
            
            // 检查是否减少敌人
            if (exp.path.reduceEnemies && Math.random() < 0.4) {
                showNotification('通过机关避开了战斗', 'success');
                
                if (exp.currentStage >= exp.maxStages) {
                    endDungeonExploration(true);
                } else {
                    setTimeout(() => {
                        updateDungeonExplorationUI();
                    }, 1000);
                }
                return;
            }
            
            // 选择敌人
            const enemy = exp.dungeon.enemies[Math.floor(Math.random() * exp.dungeon.enemies.length)];
            const enemyPower = enemy.power * exp.path.difficulty;
            const enemyHp = enemy.hp * exp.path.difficulty;
            
            // 计算玩家战力
            let playerPower = calculateCombatPower();
            exp.allies.forEach(ally => {
                playerPower += ally.power;
            });
            
            // 检查偷袭
            if (exp.path.ambushChance && Math.random() < exp.path.ambushChance) {
                const ambushDamage = Math.floor(enemyPower * 0.5);
                exp.hp -= ambushDamage;
                showNotification(`遭到偷袭！受到${ambushDamage}点伤害`, 'warning');
                
                if (exp.hp <= 0) {
                    exp.hp = 0;
                    endDungeonExploration(false);
                    return;
                }
            }
            
            const modal = document.getElementById('dungeonExplorationModal');
            if (!modal) return;
            
            let html = '';
            
            html += `<div style="padding: 20px; background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); border-radius: 6px; color: white; margin-bottom: 15px; text-align: center;">`;
            html += `<h3 style="margin: 0 0 10px 0; font-size: 20px;">⚔️ 遭遇战斗</h3>`;
            html += `<p style="margin: 0; font-size: 16px; font-weight: 600;">${enemy.name}</p>`;
            html += `</div>`;
            
            html += `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;">`;
            html += `<div style="text-align: center; padding: 15px; background: #e3f2fd; border-radius: 6px;">`;
            html += `<div style="font-size: 12px; color: #666; margin-bottom: 5px;">你的战力</div>`;
            html += `<div style="font-size: 18px; font-weight: 600; color: #2196f3;">${formatNumber(playerPower)}</div>`;
            html += `</div>`;
            html += `<div style="text-align: center; padding: 15px; background: #ffebee; border-radius: 6px;">`;
            html += `<div style="font-size: 12px; color: #666; margin-bottom: 5px;">敌人战力</div>`;
            html += `<div style="font-size: 18px; font-weight: 600; color: #f44336;">${formatNumber(enemyPower)}</div>`;
            html += `</div>`;
            html += `</div>`;
            
            html += `<div style="text-align: center; margin-bottom: 15px;">`;
            html += `<div style="font-size: 13px; color: #666; margin-bottom: 10px;">战斗中...</div>`;
            html += `<div style="width: 100%; height: 8px; background: #e0e0e0; border-radius: 4px; overflow: hidden;">`;
            html += `<div style="width: 0%; height: 100%; background: linear-gradient(90deg, #4CAF50, #8BC34A); animation: loading 2s ease-out forwards;"></div>`;
            html += `</div>`;
            html += `</div>`;
            
            modal.querySelector('.modal-body').innerHTML = html;
            
            // 模拟战斗
            setTimeout(() => {
                const successChance = Math.min(0.95, playerPower / enemyPower);
                const success = Math.random() < successChance;
                
                if (success) {
                    showNotification(`击败了${enemy.name}！`, 'success');
                    addLog(`⚔️ 击败了${enemy.name}`);
                    
                    // 驯服机制
                    if (enemy.canTame && Math.random() < enemy.tameChance) {
                        exp.allies.push({
                            name: enemy.name,
                            power: enemy.tamePower
                        });
                        showNotification(`成功驯服了${enemy.name}！`, 'success');
                        addLog(`🤝 驯服了${enemy.name}作为助战伙伴`);
                    }
                    
                    // 检查是否完成探索
                    if (exp.currentStage >= exp.maxStages) {
                        endDungeonExploration(true);
                    } else {
                        setTimeout(() => {
                            updateDungeonExplorationUI();
                        }, 1000);
                    }
                } else {
                    const damage = Math.floor(enemyPower * 0.3);
                    exp.hp -= damage;
                    
                    if (exp.hp <= 0) {
                        exp.hp = 0;
                        showNotification(`战斗失败！`, 'error');
                        endDungeonExploration(false);
                    } else {
                        showNotification(`受到${damage}点伤害`, 'warning');
                        addLog(`💥 受到${damage}点伤害`);
                        
                        // 可以选择继续
                        setTimeout(() => {
                            updateDungeonExplorationUI();
                        }, 1000);
                    }
                }
            }, 2000);
        }
        
        // 撤退
        function retreatFromDungeon() {
            if (!confirm('确定要撤退吗？你将保留已获得的奖励。')) return;
            
            endDungeonExploration(false, true);
        }
        
        // 结束探索
        function endDungeonExploration(success, retreat = false) {
            const exp = currentDungeonExploration;
            if (!exp) return;
            
            const modal = document.getElementById('dungeonExplorationModal');
            if (modal) closeModal();
            
            // 应用奖励
            let totalRewards = { ...exp.collectedRewards };
            
            if (success) {
                // 完成副本，获得基础奖励
                for (let res in exp.dungeon.baseReward) {
                    const amount = Math.floor(exp.dungeon.baseReward[res] * exp.path.rewardMultiplier);
                    totalRewards[res] = (totalRewards[res] || 0) + amount;
                }
                
                // 记录完成次数
                if (!gameData.dungeonProgress) gameData.dungeonProgress = {};
                gameData.dungeonProgress[exp.dungeonId] = (gameData.dungeonProgress[exp.dungeonId] || 0) + 1;
                
                addLog(`<span class="log-success">🎉 完成副本${exp.dungeon.name}！</span>`);
                showNotification(`完成探索！`, 'success');
            } else if (retreat) {
                addLog(`${getSvg('alert')} 从${exp.dungeon.name}撤退`);
                showNotification(`成功撤退`, 'info');
            } else {
                addLog(`💀 在${exp.dungeon.name}中失败了`);
                showNotification(`探索失败`, 'error');
                // 失败时损失部分奖励
                for (let res in totalRewards) {
                    totalRewards[res] = Math.floor(totalRewards[res] * 0.5);
                }
            }
            
            // 发放奖励
            if (totalRewards.spiritStone > 0) {
                gameData.player.spiritStone += totalRewards.spiritStone;
                addLog(`获得 ${totalRewards.spiritStone} 灵石`);
            }
            if (totalRewards.pills > 0) {
                gameData.player.pills += totalRewards.pills;
                addLog(`获得 ${totalRewards.pills} 丹药`);
            }
            if (totalRewards.immortalStone > 0) {
                gameData.player.immortalStone = (gameData.player.immortalStone || 0) + totalRewards.immortalStone;
                addLog(`获得 ${totalRewards.immortalStone} 仙石`);
            }
            if (totalRewards.daoFruit > 0) {
                gameData.player.daoFruit = (gameData.player.daoFruit || 0) + totalRewards.daoFruit;
                addLog(`获得 ${totalRewards.daoFruit} 道果`);
            }
            if (totalRewards.spiritualPower > 0) {
                gameData.player.spiritualPower += totalRewards.spiritualPower;
                addLog(`获得 ${formatNumber(totalRewards.spiritualPower)} 灵力`);
            }
            if (totalRewards.breakthroughProgress > 0) {
                gameData.player.breakthroughProgress = Math.min(100, 
                    (gameData.player.breakthroughProgress || 0) + totalRewards.breakthroughProgress);
                addLog(`突破进度 +${totalRewards.breakthroughProgress}%`);
            }
            
            currentDungeonExploration = null;
                updateUI();
                renderCombatContent();
        }

        // NPC交易
        function tradeWithNPC(npcId, tradeIndex) {
            const npc = npcsData[npcId];
            if (!npc || !npc.trades[tradeIndex]) return;
            
            const trade = npc.trades[tradeIndex];
            
            // 检查是否有足够资源
            for (let res in trade.request) {
                const amount = trade.request[res];
                if (res === 'spiritStone' && gameData.player.spiritStone < amount) {
                    showNotification('灵石不足', 'error');
                    return;
                }
                if (res === 'pills' && gameData.player.pills < amount) {
                    showNotification('丹药不足', 'error');
                    return;
                }
                if (res === 'immortalStone' && (gameData.player.immortalStone || 0) < amount) {
                    showNotification('仙石不足', 'error');
                    return;
                }
            }
            
            // 扣除资源
            for (let res in trade.request) {
                const amount = trade.request[res];
                if (res === 'spiritStone') gameData.player.spiritStone -= amount;
                if (res === 'pills') gameData.player.pills -= amount;
                if (res === 'immortalStone') gameData.player.immortalStone -= amount;
            }
            
            // 获得资源
            for (let res in trade.offer) {
                const amount = trade.offer[res];
                if (res === 'spiritStone') gameData.player.spiritStone += amount;
                if (res === 'pills') gameData.player.pills += amount;
                if (res === 'immortalStone') gameData.player.immortalStone = (gameData.player.immortalStone || 0) + amount;
                if (res === 'daoFruit') gameData.player.daoFruit = (gameData.player.daoFruit || 0) + amount;
                if (res === 'spiritualPower') gameData.player.spiritualPower += amount;
                if (res === 'breakthroughProgress') gameData.player.breakthroughProgress = Math.min(100, gameData.player.breakthroughProgress + amount);
                if (res === 'heavenlyEssence') gameData.player.heavenlyEssence = (gameData.player.heavenlyEssence || 0) + amount;
            }
            
            // 统计交易次数
            if (!gameData.statistics.totalTrades) gameData.statistics.totalTrades = 0;
            gameData.statistics.totalTrades++;
            
            addLog(`与${npc.name}完成交易`);
            showNotification('交易成功', 'success');
            updateUI();
            checkAchievements(); // 检查成就
        }

        // 激活天赋
        function activateTalent(talentId) {
            const talent = talentsData[talentId];
            if (!talent) return;
            
            if (!gameData.talents) gameData.talents = [];
            if (gameData.talents.includes(talentId)) return;
            
            if ((gameData.talentPoints || 0) < talent.cost) {
                showNotification('天赋点不足', 'error');
                return;
            }
            
            gameData.talentPoints -= talent.cost;
            gameData.talents.push(talentId);
            
            addLog(`<span class="log-success">✨ 激活天赋：${talent.name}</span>`);
            showNotification(`激活天赋：${talent.name}`, 'success');
            breakthroughEffect();
            
            updateUI();
            renderTalentsContent();
        }

        // 道果兑换天赋点
        function convertDaoFruitToTalentPoints() {
            if ((gameData.player.daoFruit || 0) === 0) {
                showNotification('道果不足', 'error');
                return;
            }
            
            gameData.player.daoFruit--;
            gameData.talentPoints = (gameData.talentPoints || 0) + 1;
            
            addLog('消耗1道果，获得1天赋点');
            showNotification('获得1天赋点', 'success');
            
            updateUI();
            renderTalentsContent();
        }

        // 选择五行属性
        function chooseElement(elementId) {
            if (gameData.player.element && gameData.player.element !== 'none') {
                showNotification('已选择五行属性，无法更改', 'warning');
                return;
            }
            
            const element = elementsData[elementId];
            if (!element) return;
            
            if (confirm(`确定选择【${element.name}】属性吗？\n选择后无法更改！\n\n${element.desc}\n\n加成效果将立即生效。`)) {
                gameData.player.element = elementId;
                gameData.player.elementPower = 1;
                
                addLog(`<span class="log-success">${getSvg('zap')} 觉醒${element.name}属性！获得永久加成</span>`);
                showNotification(`觉醒${element.name}属性！`, 'success');
                breakthroughEffect();
                
                updateUI();
                renderCultivation();
                // 同时更新战斗冒险界面，确保五行属性立即显示
                if (typeof renderCombatContent === 'function') {
                    renderCombatContent();
                }
                saveGame();
            }
        }

        // 提升五行属性强度
        function upgradeElement() {
            if (!gameData.player.element || gameData.player.element === 'none') {
                showNotification('尚未选择五行属性', 'warning');
                return;
            }
            
            const cost = 10 * ((gameData.player.elementPower || 0) + 1);
            
            if ((gameData.player.immortalStone || 0) < cost) {
                showNotification('仙石不足', 'error');
                return;
            }
            
            gameData.player.immortalStone -= cost;
            gameData.player.elementPower = (gameData.player.elementPower || 0) + 1;
            
            const element = elementsData[gameData.player.element];
            addLog(`<span class="log-success">${getSvg('zap')} ${element.name}属性强度提升至Lv.${gameData.player.elementPower}</span>`);
            showNotification(`属性强度提升！`, 'success');
            
            updateUI();
            renderCultivation();
        }

        // 渲染灵田信息
        function renderSpiritFieldInfo() {
            const container = document.getElementById('spiritFieldInfo');
            if (!container) return;
            
            const spiritualFieldLevel = gameData.facilities.spiritualField || 0;
            
            let html = '';
            if (spiritualFieldLevel === 0) {
                html += `<div class="facility-item" style="opacity: 0.6;">`;
                html += `<div class="facility-name">灵田未建造</div>`;
                html += `<div class="facility-desc">请前往"修炼系统"标签页升级灵田设施</div>`;
                html += `</div>`;
            } else {
                const productionPerMin = spiritualFieldLevel;
                html += `<div class="facility-item" style="background: linear-gradient(135deg, #84fab022, #8fd3f422);">`;
                html += `<div class="facility-header">`;
                html += `<span class="facility-name">灵田 Lv.${spiritualFieldLevel}</span>`;
                html += `<span class="facility-level">运转中</span>`;
                html += `</div>`;
                html += `<div class="facility-desc">自动产出灵石和其他资源</div>`;
                html += `<div class="facility-benefit">`;
                html += `产出速率：每分钟 +${productionPerMin} 灵石`;
                html += `</div>`;
                html += `<div style="font-size: 12px; color: #7f8c8d; margin-top: 8px;">`;
                html += `💡 提示：前往"修炼系统"标签升级灵田以提升产出`;
                html += `</div>`;
                html += `</div>`;
            }
            
            container.innerHTML = html;
        }
        
        // 渲染战斗技能（从战斗内容中提取）
        function renderCombatSkills() {
            const container = document.getElementById('combatSkillsContent');
            if (!container) return;
            
            let html = '';
            html += `<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">`;
            
            for (let skillId in combatSkills) {
                const skill = combatSkills[skillId];
                const hasSkill = gameData.combatSkills && gameData.combatSkills.includes(skillId);
                const canLearn = gameData.player.realm >= (skill.requiredRealm || 0);
                
                html += `<div class="facility-item" style="${hasSkill ? 'background: #e8f5e9; border-color: #4caf50;' : ''}">`;
                html += `<div class="facility-name">${hasSkill ? '✓ ' : ''}${skill.name}</div>`;
                html += `<div class="facility-desc" style="font-size: 11px;">${skill.desc}</div>`;
                
                if (!hasSkill) {
                    if (!canLearn) {
                        html += `<div class="cost-info">需要境界: ${realms[skill.requiredRealm].name}</div>`;
                    } else {
                        html += `<button class="btn btn-primary" onclick="learnCombatSkill('${skillId}')" style="font-size: 11px; padding: 4px 8px;">`;
                        html += `学习`;
                        html += `</button>`;
                    }
                }
                html += `</div>`;
            }
            html += `</div>`;
            
            if (!combatSkills || Object.keys(combatSkills).length === 0) {
                html = `<div class="facility-item"><div class="facility-desc">暂无可学习的战斗技能</div></div>`;
            }
            
            container.innerHTML = html;
        }
        
        // 渲染仙界飞升标签页
        function renderImmortalTab() {
            // 渲染飞升系统
            renderAscensionContent();
            // 渲染仙界设施
            renderImmortalFacilities();
        }
        
        // 渲染飞升内容
        function renderAscensionContent() {
            const container = document.getElementById('ascensionContent');
            if (!container) return;
            
            let html = '';
            
            // 检查是否可以飞升
            const canAscend = gameData.player.realm >= 8 && gameData.player.realmLevel >= 9;
            
            html += `<div class="facility-item" style="background: linear-gradient(135deg, #ffd89b, #19547b); color: white;">`;
            html += `<div class="facility-name" style="color: white; font-size: 18px;">飞升成仙 Ascension</div>`;
            html += `<div class="facility-desc" style="color: white;">突破凡界限制，飞升至仙界</div>`;
            html += `<div class="facility-benefit" style="color: white;">`;
            html += `• 进入仙界，开启新的境界<br>`;
            html += `• 解锁仙界专属设施和功法<br>`;
            html += `• 保留部分修炼进度和成就`;
            html += `</div>`;
            
            if (gameData.player.isInImmortalWorld) {
                html += `<div style="margin-top: 12px; padding: 12px; background: rgba(255,255,255,0.2); border-radius: 4px;">`;
                html += `当前状态：已飞升（第${gameData.ascensionCount}次）`;
                html += `</div>`;
            } else {
                if (canAscend) {
                    html += `<button class="btn" onclick="ascendToImmortalWorld()" style="margin-top: 12px; background: gold; color: #333; font-weight: 600;">`;
                    html += `✨ 开始飞升`;
                    html += `</button>`;
                } else {
                    html += `<div class="cost-info" style="color: white; opacity: 0.8;">`;
                    html += `条件：达到渡劫期第9层`;
                    html += `</div>`;
                }
            }
            html += `</div>`;
            
            // 飞升历史
            if (gameData.ascensionCount > 0) {
                html += `<div class="facility-item" style="margin-top: 15px;">`;
                html += `<div class="facility-name">飞升记录</div>`;
                html += `<div class="facility-desc">已飞升 ${gameData.ascensionCount} 次</div>`;
                html += `</div>`;
            }
            
            container.innerHTML = html;
        }
        
        // 渲染仙界设施
        function renderImmortalFacilities() {
            const container = document.getElementById('immortalFacilitiesContent');
            if (!container) return;
            
            let html = '';
            
            if (!gameData.player.isInImmortalWorld && gameData.ascensionCount === 0) {
                html += `<div class="facility-item" style="opacity: 0.6;">`;
                html += `<div class="facility-name">🔒 未解锁</div>`;
                html += `<div class="facility-desc">飞升后解锁仙界专属设施</div>`;
                html += `</div>`;
            } else {
                // 仙池
                const pondLevel = gameData.facilities.immortalPond || 0;
                html += `<div class="facility-item">`;
                html += `<div class="facility-header">`;
                html += `<span class="facility-name">⭐ 仙池 Lv.${pondLevel}</span>`;
                html += `</div>`;
                html += `<div class="facility-desc">仙界灵泉，大幅提升灵力产出</div>`;
                html += `<div class="facility-benefit">灵力产出 +${pondLevel * 50}%</div>`;
                html += `<div style="font-size: 12px; color: #7f8c8d; margin-top: 8px;">`;
                html += `💡 前往"修炼系统"标签升级设施`;
                html += `</div>`;
                html += `</div>`;
                
                // 仙树
                const treeLevel = gameData.facilities.celestialTree || 0;
                html += `<div class="facility-item">`;
                html += `<div class="facility-header">`;
                html += `<span class="facility-name">⭐ 仙树 Lv.${treeLevel}</span>`;
                html += `</div>`;
                html += `<div class="facility-desc">天地灵根，每小时产出珍贵资源</div>`;
                html += `<div class="facility-benefit">每小时 +${treeLevel * 10}灵石, +${treeLevel}丹药</div>`;
                html += `<div style="font-size: 12px; color: #7f8c8d; margin-top: 8px;">`;
                html += `💡 前往"修炼系统"标签升级设施`;
                html += `</div>`;
                html += `</div>`;
            }
            
            container.innerHTML = html;
        }
        
        // 渲染存档管理
        function renderSaveContent() {
            const container = document.getElementById('saveContent');
            let html = '';
            
            // 当前游戏信息
            html += `<div style="background: white; border: 1px solid #e0e0e0; padding: 15px; border-radius: 6px; margin-bottom: 15px;">`;
            html += `<div style="font-size: 14px; font-weight: 600; margin-bottom: 8px; color: #2c3e50;">📋 当前游戏数据</div>`;
            html += `<div style="font-size: 12px; color: #7f8c8d; line-height: 1.6;">`;
            html += `境界: ${realms[gameData.player.realm].name} 第${gameData.player.realmLevel}层<br>`;
            html += `修炼天数: ${gameData.player.totalDays}天<br>`;
            html += `灵石: ${formatNumber(gameData.player.spiritStone)}<br>`;
            html += `飞升次数: ${gameData.ascensionCount}次<br>`;
            html += `门派: ${gameData.sect ? sects[gameData.sect].name : '无'}<br>`;
            html += `成就完成: ${gameData.achievements.length}个`;
            html += `</div>`;
            html += `</div>`;
            
            // 自动存档信息
            html += `<div style="margin-bottom: 25px;">`;
            html += `<div style="font-size: 14px; font-weight: 600; color: #2c3e50; margin-bottom: 12px;">自动存档</div>`;
            html += `<div class="facility-item">`;
            html += `<div class="facility-desc">游戏每30秒自动保存一次，确保进度不丢失</div>`;
            html += `<div style="font-size: 11px; color: #27ae60; margin-top: 8px;">`;
            const lastSaveTime = new Date(gameData.lastSave).toLocaleString();
            html += `上次保存时间: ${lastSaveTime}`;
            html += `</div>`;
            html += `</div>`;
            html += `</div>`;
            
            // 手动存档
            html += `<div style="margin-bottom: 25px;">`;
            html += `<div style="font-size: 14px; font-weight: 600; color: #2c3e50; margin-bottom: 12px;">手动存档</div>`;
            
            for (let i = 1; i <= 3; i++) {
                const slotKey = `manualSave_${i}`;
                const savedData = localStorage.getItem(slotKey);
                
                html += `<div class="facility-item">`;
                html += `<div class="facility-header">`;
                html += `<span class="facility-name">存档槽 ${i}</span>`;
                
                if (savedData) {
                    try {
                        const data = JSON.parse(savedData);
                        const saveTime = new Date(data.saveTime).toLocaleString();
                        html += `<span class="facility-level" style="background: #27ae60;">已使用</span>`;
                        html += `</div>`;
                        html += `<div class="facility-desc" style="font-size: 11px;">`;
                        html += `境界: ${realms[data.player.realm].name} | 修炼天数: ${data.player.totalDays}天<br>`;
                        html += `保存时间: ${saveTime}`;
                        html += `</div>`;
                        html += `<div style="display: flex; gap: 8px; margin-top: 10px;">`;
                        html += `<button class="btn btn-primary" onclick="saveToSlot(${i})" style="flex: 1;">覆盖保存</button>`;
                        html += `<button class="btn btn-success" onclick="loadFromSlot(${i})" style="flex: 1;">加载存档</button>`;
                        html += `<button class="btn" onclick="deleteSlot(${i})" style="flex: 1;">删除</button>`;
                        html += `</div>`;
                    } catch (e) {
                        html += `<span class="facility-level" style="background: #95a5a6;">空</span>`;
                        html += `</div>`;
                        html += `<button class="btn btn-primary" onclick="saveToSlot(${i})">保存到此槽位</button>`;
                    }
                } else {
                    html += `<span class="facility-level" style="background: #95a5a6;">空</span>`;
                    html += `</div>`;
                    html += `<button class="btn btn-primary" onclick="saveToSlot(${i})">保存到此槽位</button>`;
                }
                
                html += `</div>`;
            }
            
            html += `</div>`;
            
            // 导出/导入存档
            html += `<div style="margin-bottom: 25px;">`;
            html += `<div style="font-size: 14px; font-weight: 600; color: #2c3e50; margin-bottom: 12px;">📦 导出/导入存档</div>`;
            
            // 导出存档
            html += `<div class="facility-item" style="background: #e8f5e9; border-color: #27ae60;">`;
            html += `<div class="facility-name">${getSvg('disk')} 导出存档到文件</div>`;
            html += `<div class="facility-desc">将当前游戏存档导出为JSON文件，可用于备份或迁移到其他设备</div>`;
            html += `<div style="display: flex; gap: 8px; margin-top: 10px;">`;
            html += `<button class="btn btn-success" onclick="exportSaveToFile()" style="flex: 1;">导出当前存档</button>`;
            html += `<button class="btn btn-primary" onclick="exportAllSaves()" style="flex: 1;">导出所有存档</button>`;
            html += `</div>`;
            html += `</div>`;
            
            // 导入存档
            html += `<div class="facility-item" style="background: #e3f2fd; border-color: #3498db;">`;
            html += `<div class="facility-name">📥 从文件导入存档</div>`;
            html += `<div class="facility-desc">从JSON文件导入存档（会覆盖当前游戏进度，建议先导出备份）</div>`;
            html += `<input type="file" id="importFileInput" accept="application/json,.json,text/plain" style="display: none;" onchange="importSaveFromFile(event)">`;
            html += `<button class="btn btn-primary" onclick="document.getElementById('importFileInput').click()" style="margin-top: 10px;">选择文件导入</button>`;
            html += `</div>`;
            
            // 自动备份
            html += `<div class="facility-item">`;
            html += `<div class="facility-name">🔄 自动备份</div>`;
            html += `<div class="facility-desc">游戏会在每次境界突破时自动创建备份，最多保留5个备份</div>`;
            const backupCount = getBackupCount();
            html += `<div style="font-size: 11px; color: #27ae60; margin-top: 8px;">`;
            html += `当前备份数量: ${backupCount}/5`;
            html += `</div>`;
            html += `<div style="display: flex; gap: 8px; margin-top: 10px;">`;
            html += `<button class="btn" onclick="viewBackups()" style="flex: 1;">查看备份</button>`;
            html += `<button class="btn btn-success" onclick="createManualBackup()" style="flex: 1;">手动创建备份</button>`;
            html += `</div>`;
            html += `</div>`;
            
            html += `</div>`;
            
            // 高级功能
            html += `<div style="margin-bottom: 25px;">`;
            html += `<div style="font-size: 14px; font-weight: 600; color: #2c3e50; margin-bottom: 12px;">${getSvg('gear')} 高级功能</div>`;
            
            // 存档代码
            html += `<div class="facility-item">`;
            html += `<div class="facility-name">${getSvg('clipboard')} 存档代码（云同步）</div>`;
            html += `<div class="facility-desc">复制存档代码可以在其他设备上使用，实现云同步</div>`;
            html += `<div style="display: flex; gap: 8px; margin-top: 10px;">`;
            html += `<button class="btn btn-primary" onclick="generateSaveCode()" style="flex: 1;">生成存档代码</button>`;
            html += `<button class="btn btn-success" onclick="loadFromSaveCode()" style="flex: 1;">使用存档代码</button>`;
            html += `</div>`;
            html += `</div>`;
            
            html += `</div>`;
            
            // 危险操作
            html += `<div style="margin-bottom: 25px;">`;
            html += `<div style="font-size: 14px; font-weight: 600; color: #e74c3c; margin-bottom: 12px;">${getSvg('alert')} 危险操作</div>`;
            html += `<div class="facility-item" style="border-color: #e74c3c;">`;
            html += `<div class="facility-name">重新开始游戏</div>`;
            html += `<div class="facility-desc">删除所有数据，从头开始游戏（建议先导出存档备份）</div>`;
            html += `<button class="btn" onclick="confirmResetGame()" style="background: #e74c3c; color: white; border-color: #e74c3c;">`;
            html += `重新开始`;
            html += `</button>`;
            html += `</div>`;
            html += `</div>`;
            
            container.innerHTML = html;
        }

        // 保存到指定槽位
        function saveToSlot(slot) {
            const slotKey = `manualSave_${slot}`;
            const existingSave = localStorage.getItem(slotKey);
            
            // 如果槽位已有存档，需要确认是否覆盖
            if (existingSave) {
                if (!confirm(`存档槽${slot}已有存档，确定要覆盖吗？`)) {
                    return;
                }
            }
            
            const saveData = {
                ...gameData,
                saveTime: Date.now()
            };
            localStorage.setItem(slotKey, JSON.stringify(saveData));
            
            // 统计手动存档次数
            if (!gameData.statistics.manualSaves) gameData.statistics.manualSaves = 0;
            gameData.statistics.manualSaves++;
            
            addLog(`<span class="log-success">${getSvg('disk')} 游戏已保存到存档槽${slot}</span>`);
            showNotification('手动存档成功', 'success');
            renderSaveContent();
            checkAchievements(); // 检查成就
        }

        // 从指定槽位加载
        function loadFromSlot(slot) {
            const slotKey = `manualSave_${slot}`;
            const savedData = localStorage.getItem(slotKey);
            
            if (savedData) {
                if (confirm(`确定要加载存档槽${slot}吗？当前进度将会丢失（建议先保存）`)) {
                    try {
                        const data = JSON.parse(savedData);
                        Object.assign(gameData, data);
                        gameData.lastUpdate = Date.now();
                        
                        addLog(`<span class="log-success">${getSvg('disk')} 已加载存档槽${slot}</span>`);
                        
                        // 重新渲染所有界面
                        updateUI();
                        renderFacilities();
                        renderCultivation();
                        renderEquipment();
                        renderAlchemy();
                        renderSectContent();
                        renderAchievements();
                        renderSaveContent();
                    } catch (e) {
                        alert('加载存档失败：' + e.message);
                    }
                }
            }
        }

        // 删除存档槽
        function deleteSlot(slot) {
            if (confirm(`确定要删除存档槽${slot}吗？此操作不可恢复！`)) {
                const slotKey = `manualSave_${slot}`;
                localStorage.removeItem(slotKey);
                addLog(`已删除存档槽${slot}`);
                renderSaveContent();
            }
        }

        // 确认重新开始
        function confirmResetGame() {
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2001;
            `;
            
            const card = document.createElement('div');
            card.style.cssText = `
                background: white;
                padding: 30px;
                border-radius: 8px;
                max-width: 500px;
                width: 90%;
                box-shadow: 0 10px 40px rgba(0,0,0,0.5);
                text-align: center;
            `;
            
            card.innerHTML = `
                <div style="font-size: 22px; font-weight: 600; color: #e74c3c; margin-bottom: 15px;">
                    ${getSvg('alert')} 警告
                </div>
                <div style="color: #666; margin-bottom: 25px; line-height: 1.8;">
                    你确定要<strong style="color: #e74c3c;">重新开始游戏</strong>吗？<br><br>
                    以下数据将会被清除：<br>
                    • 所有境界和修炼进度<br>
                    • 所有设施和功法<br>
                    • 所有装备、法宝、灵宠<br>
                    • 所有成就<br>
                    • 所有飞升记录<br>
                    • 门派和贡献度<br><br>
                    <strong style="color: #f39c12;">建议先手动保存当前进度！</strong>
                </div>
                <div style="display: flex; gap: 15px;">
                    <button class="btn" onclick="this.parentElement.parentElement.parentElement.remove()" 
                            style="flex: 1; background: #95a5a6; color: white; border-color: #95a5a6;">
                        取消
                    </button>
                    <button class="btn" onclick="resetGame()" 
                            style="flex: 1; background: #e74c3c; color: white; border-color: #e74c3c; font-weight: 600;">
                        确认重新开始
                    </button>
                </div>
            `;
            
            modal.appendChild(card);
            document.body.appendChild(modal);
        }

        // 重新开始游戏
        function resetGame() {
            // 清除所有存档（自动存档和手动存档）
            localStorage.removeItem('immortalCultivationSave');
            
            // 设置一个标记，表示需要重置
            localStorage.setItem('needReset', 'true');
            
            // 关闭确认窗口
            document.querySelectorAll('[style*="z-index: 2001"]').forEach(el => el.remove());
            
            // 显示重置成功信息
            addLog(`<span class="log-important">${getSvg('alert')} 游戏已重置，即将刷新页面...</span>`);
            
            // 立即刷新页面
            setTimeout(() => {
                location.reload();
            }, 500);
        }

        // 保存游戏（自动）
        function saveGame() {
            localStorage.setItem('immortalCultivationSave', JSON.stringify(gameData));
            gameData.lastSave = Date.now();
        }

        // 加载游戏
        function loadGame() {
            // 检查是否需要重置
            const needReset = localStorage.getItem('needReset');
            if (needReset === 'true') {
                localStorage.removeItem('needReset');
                // 不加载任何存档，使用初始数据
                addLog('🔄 游戏已重置，欢迎重新开始修仙之路！');
                return;
            }
            
            const saved = localStorage.getItem('immortalCultivationSave');
            if (saved) {
                try {
                    const data = JSON.parse(saved);
                    Object.assign(gameData, data);
                    
                    // 数据兼容性处理 - 补全缺失的功法
                    for (let id in techniquesData) {
                        if (gameData.techniques[id] === undefined) {
                            gameData.techniques[id] = 0;
                        }
                    }
                    
                    // 数据兼容性处理 - 补全缺失的设施
                    for (let id in facilitiesData) {
                        if (gameData.facilities[id] === undefined) {
                            gameData.facilities[id] = 0;
                        }
                    }
                    
                    // 确保必要的数据字段存在
                    if (!gameData.player.totalPillsUsed) gameData.player.totalPillsUsed = 0;
                    if (!gameData.player.totalBreakthroughs) gameData.player.totalBreakthroughs = 0;
                    if (!gameData.sectContribution) gameData.sectContribution = 0;
                    if (!gameData.ascensionCount) gameData.ascensionCount = 0;
                    if (!gameData.artifacts) gameData.artifacts = [];
                    if (!gameData.disciples) gameData.disciples = [];
                    if (!gameData.masterLevel) gameData.masterLevel = 0;
                    if (!gameData.collapsedCategories) gameData.collapsedCategories = {};
                    if (!gameData.pets) gameData.pets = [];
                    if (!gameData.activePet) gameData.activePet = null;
                    if (!gameData.equipment) gameData.equipment = { weapon: null, armor: null, accessory: null };
                    
                    // 初始化图纸系统
                    if (!gameData.blueprints) {
                        gameData.blueprints = [];
                    }
                    
                    // 给新玩家初始图纸和资源（如果没有任何图纸）
                    if (gameData.blueprints.length === 0) {
                        gameData.blueprints.push('spirit_sword', 'protective_armor');
                        // 给一些初始灵石和材料
                        gameData.player.spiritStone = Math.max(gameData.player.spiritStone, 500);
                        gameData.materials = gameData.materials || {};
                        gameData.materials.ironOre = Math.max(gameData.materials.ironOre || 0, 5);
                        gameData.materials.cloth = Math.max(gameData.materials.cloth || 0, 5);
                        gameData.materials.spiritCrystal = Math.max(gameData.materials.spiritCrystal || 0, 3);
                        addLog('<span class="log-success">📜 获得了初始图纸：灵剑图纸、护体法衣图纸</span>');
                        addLog('<span class="log-success">💰 获得了初始资源：500灵石、5铁矿石、5布料、3灵晶</span>');
                    }
                    
                    // 计算离线收益（仅资源，不涨修为）
                    const offlineTime = (Date.now() - gameData.lastUpdate) / 1000; // 秒
                    if (offlineTime > 60) { // 超过1分钟才计算离线收益
                        const offlineMinutes = Math.floor(offlineTime / 60);
                        // 仅计算资源收益，不增加灵力
                        const stoneGain = Math.floor(offlineMinutes * 0.5); // 每分钟0.5灵石（来自灵田等）
                        const pillGain = Math.floor(offlineMinutes / 30); // 丹房每30分钟产1丹药
                        if (stoneGain > 0) gameData.player.spiritStone += stoneGain;
                        if (pillGain > 0) gameData.player.pills += pillGain;
                        let msg = `离线 ${offlineMinutes} 分钟`;
                        if (stoneGain > 0) msg += `，获得 ${stoneGain} 灵石`;
                        if (pillGain > 0) msg += `，${pillGain} 丹药`;
                        addLog(`<span class="log-success">${msg}</span>`);
                    }
                    
                    gameData.lastUpdate = Date.now();
                } catch (e) {
                    console.error('加载存档失败', e);
                }
            }
        }

        // ==================== 存档导出/导入功能 ====================
        
        // 导出当前存档到文件
        function exportSaveToFile() {
            const saveData = {
                ...gameData,
                exportTime: Date.now(),
                gameVersion: '1.0.0'
            };
            
            const dataStr = JSON.stringify(saveData, null, 2);
            const blob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            a.download = `immortal-save-${gameData.player.realm}-${gameData.player.realmLevel}-${timestamp}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            // 统计导出次数
            if (!gameData.statistics.exports) gameData.statistics.exports = 0;
            gameData.statistics.exports++;
            
            showNotification('存档已导出到文件', 'success');
            addLog('<span class="log-success">💾 存档已成功导出</span>');
            checkAchievements(); // 检查成就
        }

        // 导出所有存档
        function exportAllSaves() {
            const allSaves = {
                currentSave: gameData,
                manualSaves: {},
                backups: {},
                exportTime: Date.now(),
                gameVersion: '1.0.0'
            };
            
            // 收集所有手动存档
            for (let i = 1; i <= 3; i++) {
                const slotKey = `manualSave_${i}`;
                const savedData = localStorage.getItem(slotKey);
                if (savedData) {
                    allSaves.manualSaves[`slot${i}`] = JSON.parse(savedData);
                }
            }
            
            // 收集所有备份
            for (let i = 0; i < 5; i++) {
                const backupKey = `autoBackup_${i}`;
                const backupData = localStorage.getItem(backupKey);
                if (backupData) {
                    allSaves.backups[`backup${i}`] = JSON.parse(backupData);
                }
            }
            
            const dataStr = JSON.stringify(allSaves, null, 2);
            const blob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            a.download = `immortal-all-saves-${timestamp}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            showNotification('所有存档已导出到文件', 'success');
            addLog('<span class="log-success">💾 所有存档已成功导出</span>');
        }

        // 从文件导入存档
        function importSaveFromFile(event) {
            const file = event.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const importedData = JSON.parse(e.target.result);
                    
                    // 检查是否是完整的存档包
                    if (importedData.currentSave && importedData.manualSaves) {
                        // 导入所有存档
                        if (confirm('检测到完整存档包！是否导入所有存档？\n（会覆盖现有的手动存档）')) {
                            // 导入当前存档
                            Object.assign(gameData, importedData.currentSave);
                            
                            // 导入手动存档
                            for (let slot in importedData.manualSaves) {
                                const slotNum = slot.replace('slot', '');
                                localStorage.setItem(`manualSave_${slotNum}`, JSON.stringify(importedData.manualSaves[slot]));
                            }
                            
                            // 导入备份
                            if (importedData.backups) {
                                for (let backup in importedData.backups) {
                                    const backupNum = backup.replace('backup', '');
                                    localStorage.setItem(`autoBackup_${backupNum}`, JSON.stringify(importedData.backups[backup]));
                                }
                            }
                            
                            showNotification('所有存档导入成功！', 'success');
                            addLog('<span class="log-success">📥 所有存档已成功导入</span>');
                        }
                    } else {
                        // 单个存档导入
                        if (confirm('确定要导入此存档吗？\n当前游戏进度会被覆盖！\n（建议先导出当前存档备份）')) {
                            Object.assign(gameData, importedData);
                            showNotification('存档导入成功！', 'success');
                            addLog('<span class="log-success">📥 存档已成功导入</span>');
                        }
                    }
                    
                    saveGame();
                    updateUI();
                    renderFacilities();
                    renderCultivation();
                    renderEquipment();
                    renderAlchemy();
                    renderSectContent();
                    renderCombatContent();
                    renderTalentsContent();
                    renderAchievements();
                    renderSaveContent();
                    
                    // 刷新页面以确保所有内容正确加载
                    setTimeout(() => {
                        location.reload();
                    }, 1000);
                    
                } catch (error) {
                    showNotification('导入失败：文件格式错误', 'error');
                    console.error('导入错误:', error);
                }
            };
            reader.readAsText(file);
            
            // 重置input
            event.target.value = '';
        }

        // 获取备份数量
        function getBackupCount() {
            let count = 0;
            for (let i = 0; i < 5; i++) {
                if (localStorage.getItem(`autoBackup_${i}`)) {
                    count++;
                }
            }
            return count;
        }

        // 创建自动备份
        function createAutoBackup(reason = '境界突破') {
            const backupData = {
                ...gameData,
                backupTime: Date.now(),
                backupReason: reason
            };
            
            // 循环使用5个备份槽位
            const oldestBackupIndex = Math.floor(Date.now() / 1000) % 5;
            localStorage.setItem(`autoBackup_${oldestBackupIndex}`, JSON.stringify(backupData));
            
            console.log(`自动备份已创建：${reason}`);
        }

        // 手动创建备份
        function createManualBackup() {
            createAutoBackup('手动备份');
            showNotification('备份创建成功', 'success');
            addLog('<span class="log-success">🔄 手动备份已创建</span>');
            renderSaveContent();
        }

        // 查看备份列表
        function viewBackups() {
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 3000;
            `;
            
            const card = document.createElement('div');
            card.style.cssText = `
                background: ${gameData.darkMode ? '#2d2d2d' : 'white'};
                color: ${gameData.darkMode ? '#e0e0e0' : '#333'};
                padding: 30px;
                border-radius: 8px;
                max-width: 700px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                box-shadow: 0 10px 40px rgba(0,0,0,0.5);
            `;
            
            let html = `<h2 style="margin-bottom: 20px; font-size: 20px;">🔄 自动备份列表</h2>`;
            
            const backups = [];
            for (let i = 0; i < 5; i++) {
                const backupData = localStorage.getItem(`autoBackup_${i}`);
                if (backupData) {
                    try {
                        const data = JSON.parse(backupData);
                        backups.push({ index: i, data: data });
                    } catch (e) {}
                }
            }
            
            if (backups.length === 0) {
                html += `<p style="text-align: center; color: #95a5a6; padding: 20px;">暂无备份</p>`;
            } else {
                backups.sort((a, b) => b.data.backupTime - a.data.backupTime);
                
                backups.forEach(backup => {
                    const time = new Date(backup.data.backupTime).toLocaleString();
                    const realm = realms[backup.data.player.realm];
                    
                    html += `<div style="padding: 15px; margin-bottom: 10px; background: ${gameData.darkMode ? '#383838' : '#f5f5f5'}; border-radius: 6px;">`;
                    html += `<div style="display: flex; justify-content: space-between; margin-bottom: 10px;">`;
                    html += `<div style="font-weight: 600;">${backup.data.backupReason}</div>`;
                    html += `<div style="font-size: 11px; color: #95a5a6;">${time}</div>`;
                    html += `</div>`;
                    html += `<div style="font-size: 12px; color: #7f8c8d; margin-bottom: 10px;">`;
                    html += `境界: ${realm.name} 第${backup.data.player.realmLevel}层 | `;
                    html += `修炼天数: ${backup.data.player.totalDays}天 | `;
                    html += `灵石: ${formatNumber(backup.data.player.spiritStone)}`;
                    html += `</div>`;
                    html += `<button class="btn btn-success" onclick="restoreBackup(${backup.index})" style="width: 100%; padding: 8px;">恢复此备份</button>`;
                    html += `</div>`;
                });
            }
            
            html += `<button class="btn btn-primary" onclick="this.parentElement.parentElement.remove()" style="width: 100%; margin-top: 15px;">关闭</button>`;
            
            card.innerHTML = html;
            modal.appendChild(card);
            document.body.appendChild(modal);
            
            // 点击背景关闭
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        }

        // 恢复备份
        function restoreBackup(index) {
            const backupData = localStorage.getItem(`autoBackup_${index}`);
            if (!backupData) {
                showNotification('备份不存在', 'error');
                return;
            }
            
            if (confirm('确定要恢复此备份吗？当前进度会被覆盖！')) {
                try {
                    const data = JSON.parse(backupData);
                    Object.assign(gameData, data);
                    saveGame();
                    
                    showNotification('备份已恢复', 'success');
                    addLog('<span class="log-success">🔄 已恢复到备份点</span>');
                    
                    // 关闭弹窗
                    document.querySelectorAll('[style*="z-index: 3000"]').forEach(el => el.remove());
                    
                    // 刷新所有UI
                    updateUI();
                    renderFacilities();
                    renderCultivation();
                    renderEquipment();
                    renderAlchemy();
                    renderSectContent();
                    renderCombatContent();
                    renderTalentsContent();
                    renderAchievements();
                    renderSaveContent();
                } catch (e) {
                    showNotification('恢复失败', 'error');
                    console.error('恢复备份错误:', e);
                }
            }
        }

        // 生成存档代码
        function generateSaveCode() {
            const saveData = {
                ...gameData,
                codeTime: Date.now()
            };
            
            const dataStr = JSON.stringify(saveData);
            const encoded = btoa(encodeURIComponent(dataStr));
            
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 3000;
            `;
            
            const card = document.createElement('div');
            card.style.cssText = `
                background: ${gameData.darkMode ? '#2d2d2d' : 'white'};
                color: ${gameData.darkMode ? '#e0e0e0' : '#333'};
                padding: 30px;
                border-radius: 8px;
                max-width: 600px;
                width: 90%;
                box-shadow: 0 10px 40px rgba(0,0,0,0.5);
            `;
            
            card.innerHTML = `
                <h2 style="margin-bottom: 20px; font-size: 20px;">${getSvg('clipboard')} 存档代码</h2>
                <p style="font-size: 12px; color: #7f8c8d; margin-bottom: 15px;">
                    复制下面的代码，可以在其他设备上使用"使用存档代码"功能导入
                </p>
                <textarea id="saveCodeText" readonly style="
                    width: 100%; 
                    height: 200px; 
                    padding: 10px; 
                    border: 1px solid #ddd; 
                    border-radius: 4px; 
                    font-family: monospace; 
                    font-size: 11px; 
                    resize: vertical;
                    background: ${gameData.darkMode ? '#383838' : '#f5f5f5'};
                    color: ${gameData.darkMode ? '#e0e0e0' : '#333'};
                ">${encoded}</textarea>
                <div style="display: flex; gap: 10px; margin-top: 15px;">
                    <button class="btn btn-success" onclick="copyToClipboard('saveCodeText')" style="flex: 1;">
                        复制代码
                    </button>
                    <button class="btn" onclick="this.parentElement.parentElement.parentElement.remove()" style="flex: 1;">
                        关闭
                    </button>
                </div>
            `;
            
            modal.appendChild(card);
            document.body.appendChild(modal);
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        }

        // 使用存档代码加载
        function loadFromSaveCode() {
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 3000;
            `;
            
            const card = document.createElement('div');
            card.style.cssText = `
                background: ${gameData.darkMode ? '#2d2d2d' : 'white'};
                color: ${gameData.darkMode ? '#e0e0e0' : '#333'};
                padding: 30px;
                border-radius: 8px;
                max-width: 600px;
                width: 90%;
                box-shadow: 0 10px 40px rgba(0,0,0,0.5);
            `;
            
            card.innerHTML = `
                <h2 style="margin-bottom: 20px; font-size: 20px;">📥 使用存档代码</h2>
                <p style="font-size: 12px; color: #7f8c8d; margin-bottom: 15px;">
                    粘贴存档代码，将会覆盖当前游戏进度
                </p>
                <textarea id="loadCodeText" placeholder="在此粘贴存档代码..." style="
                    width: 100%; 
                    height: 200px; 
                    padding: 10px; 
                    border: 1px solid #ddd; 
                    border-radius: 4px; 
                    font-family: monospace; 
                    font-size: 11px; 
                    resize: vertical;
                    background: ${gameData.darkMode ? '#383838' : '#f5f5f5'};
                    color: ${gameData.darkMode ? '#e0e0e0' : '#333'};
                "></textarea>
                <div style="display: flex; gap: 10px; margin-top: 15px;">
                    <button class="btn btn-success" onclick="importFromCode()" style="flex: 1;">
                        导入存档
                    </button>
                    <button class="btn" onclick="this.parentElement.parentElement.parentElement.remove()" style="flex: 1;">
                        取消
                    </button>
                </div>
            `;
            
            modal.appendChild(card);
            document.body.appendChild(modal);
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        }

        // 从代码导入存档
        function importFromCode() {
            const code = document.getElementById('loadCodeText').value.trim();
            if (!code) {
                showNotification('请输入存档代码', 'warning');
                return;
            }
            
            try {
                const decoded = decodeURIComponent(atob(code));
                const data = JSON.parse(decoded);
                
                if (confirm('确定要导入此存档吗？当前进度会被覆盖！')) {
                    Object.assign(gameData, data);
                    saveGame();
                    
                    showNotification('存档导入成功！', 'success');
                    addLog('<span class="log-success">📥 存档代码已成功导入</span>');
                    
                    // 关闭弹窗
                    document.querySelectorAll('[style*="z-index: 3000"]').forEach(el => el.remove());
                    
                    // 刷新页面
                    setTimeout(() => {
                        location.reload();
                    }, 500);
                }
            } catch (e) {
                showNotification('存档代码格式错误', 'error');
                console.error('导入代码错误:', e);
            }
        }

        // 复制到剪贴板
        function copyToClipboard(elementId) {
            const element = document.getElementById(elementId);
            if (!element) return;
            
            element.select();
            element.setSelectionRange(0, 99999);
            
            try {
                document.execCommand('copy');
                showNotification('已复制到剪贴板', 'success');
            } catch (e) {
                // 备用方法
                navigator.clipboard.writeText(element.value).then(() => {
                    showNotification('已复制到剪贴板', 'success');
                }).catch(() => {
                    showNotification('复制失败，请手动复制', 'error');
                });
            }
        }

        // 显示Boss战斗界面
        function showBossBattle(bossId) {
            const boss = bosses[bossId];
            if (!boss) return;

            // 检查挑战条件
            if (gameData.player.realm < boss.requiredRealm || gameData.player.realmLevel < boss.requiredLevel) {
                showNotification(`挑战条件不足！需要${realms[boss.requiredRealm].name}第${boss.requiredLevel}层`, 'error');
                return;
            }

            const battleModal = document.createElement('div');
            battleModal.id = 'bossBattleModal';
            battleModal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.92);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2000;
                backdrop-filter: blur(5px);
            `;
            
            const battleCard = document.createElement('div');
            battleCard.style.cssText = `
                background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
                padding: 20px;
                border-radius: 8px;
                max-width: 600px;
                width: 90%;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                border: 1px solid rgba(0,0,0,0.1);
            `;
            
            // 计算战斗力
            const playerPower = calculateCombatPower();
            const bossPower = boss.power;
            
            let html = '';
            html += `<div style="text-align: center; margin-bottom: 20px;">`;
            html += `<h2 style="font-size: 20px; color: #2c3e50; margin: 0; font-weight: 500; letter-spacing: 2px;">${boss.name}</h2>`;
            html += `<div style="color: #e74c3c; font-size: 12px; margin-top: 5px;">${boss.desc}</div>`;
            html += `</div>`;
            
            // Boss特殊技能信息
            html += `<div style="background: rgba(244,67,54,0.1); padding: 12px; border-radius: 4px; margin-bottom: 15px; border-left: 3px solid #f44336;">`;
            html += `<div style="font-weight: 600; color: #f44336; margin-bottom: 5px; font-size: 12px;">特殊技能：${boss.special.name}</div>`;
            html += `<div style="font-size: 11px; color: #666;">${boss.special.desc}</div>`;
            html += `</div>`;
            
            // 战斗双方展示区域
            html += `<div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 15px; margin-bottom: 15px; align-items: stretch;">`;
            
            // 玩家侧
            html += `<div style="background: linear-gradient(135deg, rgba(33,150,243,0.05), rgba(100,181,246,0.05)); border: 1px solid rgba(33,150,243,0.3); border-radius: 6px; padding: 15px;">`;
            html += `<div style="text-align: center; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid rgba(0,0,0,0.1);">`;
            html += `<div style="font-size: 10px; color: #2196f3; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">PLAYER</div>`;
            html += `<div style="font-size: 14px; font-weight: 500; color: #2c3e50; margin-bottom: 3px;">${realms[gameData.player.realm].name}</div>`;
            html += `<div style="font-size: 10px; color: #7f8c8d;">第 ${gameData.player.realmLevel} 层</div>`;
            html += `</div>`;
            
            // 玩家血条
            html += `<div style="margin-bottom: 12px;">`;
            html += `<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">`;
            html += `<span style="font-size: 10px; color: #7f8c8d; letter-spacing: 1px;">气血值</span>`;
            html += `<span id="bossPlayerHpText" style="font-size: 11px; color: #2196f3; font-weight: 600; font-family: monospace;">100/100</span>`;
            html += `</div>`;
            html += `<div style="background: #e9ecef; height: 6px; border-radius: 3px; overflow: hidden;">`;
            html += `<div id="bossPlayerHpBar" style="width: 100%; height: 100%; background: linear-gradient(90deg, #2196f3, #64b5f6); transition: all 0.3s ease;"></div>`;
            html += `</div>`;
            html += `</div>`;
            
            // 玩家战力
            html += `<div style="text-align: center; background: rgba(33,150,243,0.1); padding: 10px; border-radius: 4px;">`;
            html += `<div style="font-size: 9px; color: #7f8c8d; margin-bottom: 3px; letter-spacing: 1px;">POWER</div>`;
            html += `<div style="font-size: 18px; font-weight: 600; color: #2196f3; font-family: monospace;">${playerPower}</div>`;
            html += `</div>`;
            html += `</div>`;
            
            // VS 标识
            html += `<div style="display: flex; align-items: center; justify-content: center; min-width: 50px;">`;
            html += `<div style="width: 40px; height: 40px; border: 2px solid #e9ecef; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: #f8f9fa;">`;
            html += `<span style="font-size: 12px; font-weight: 500; color: #6c757d; letter-spacing: 1px;">VS</span>`;
            html += `</div>`;
            html += `</div>`;
            
            // Boss侧
            html += `<div style="background: linear-gradient(135deg, rgba(244,67,54,0.05), rgba(229,57,53,0.05)); border: 1px solid rgba(244,67,54,0.3); border-radius: 6px; padding: 15px;">`;
            html += `<div style="text-align: center; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid rgba(0,0,0,0.1);">`;
            html += `<div style="font-size: 10px; color: #f44336; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">BOSS</div>`;
            html += `<div style="font-size: 14px; font-weight: 500; color: #2c3e50; margin-bottom: 3px;">${boss.name}</div>`;
            html += `<div style="font-size: 10px; color: #7f8c8d;">强大Boss</div>`;
            html += `</div>`;
            
            // Boss血条
            html += `<div style="margin-bottom: 12px;">`;
            html += `<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">`;
            html += `<span style="font-size: 10px; color: #7f8c8d; letter-spacing: 1px;">气血值</span>`;
            html += `<span id="bossHpText" style="font-size: 11px; color: #f44336; font-weight: 600; font-family: monospace;">100/100</span>`;
            html += `</div>`;
            html += `<div style="background: #e9ecef; height: 6px; border-radius: 3px; overflow: hidden;">`;
            html += `<div id="bossHpBar" style="width: 100%; height: 100%; background: linear-gradient(90deg, #f44336, #e57373); transition: all 0.3s ease;"></div>`;
            html += `</div>`;
            html += `</div>`;
            
            // Boss战力
            html += `<div style="text-align: center; background: rgba(244,67,54,0.1); padding: 10px; border-radius: 4px;">`;
            html += `<div style="font-size: 9px; color: #7f8c8d; margin-bottom: 3px; letter-spacing: 1px;">POWER</div>`;
            html += `<div style="font-size: 18px; font-weight: 600; color: #f44336; font-family: monospace;">${bossPower}</div>`;
            html += `</div>`;
            html += `</div>`;
            
            html += `</div>`;
            
            // 奖励预览
            html += `<div style="background: rgba(255,193,7,0.1); padding: 12px; border-radius: 4px; margin-bottom: 15px; border-left: 3px solid #ffc107;">`;
            html += `<div style="font-weight: 600; color: #f57c00; margin-bottom: 8px; font-size: 12px;">胜利奖励</div>`;
            html += `<div style="font-size: 11px; color: #666;">`;
            html += `${boss.rewards.spiritStone} 灵石 • ${boss.rewards.pills} 丹药`;
            if (boss.rewards.equipment) {
                html += ` • ${combatEquipment[boss.rewards.equipment].name}`;
            }
            html += `</div>`;
            html += `</div>`;
            
            // 战斗日志区域
            html += `<div style="margin-bottom: 15px;">`;
            html += `<div style="font-size: 10px; color: #7f8c8d; margin-bottom: 8px; letter-spacing: 1px; text-transform: uppercase; padding-left: 2px;">Battle Log</div>`;
            html += `<div id="bossBattleLog" style="background: #f8f9fa; padding: 12px; border-radius: 4px; height: 120px; overflow-y: auto; border: 1px solid #e9ecef; font-family: 'Courier New', monospace; font-size: 11px;">`;
            html += `<div style="text-align: center; color: #95a5a6; padding: 20px 0;">准备挑战${boss.name}...</div>`;
            html += `</div>`;
            html += `</div>`;
            
            html += `<button class="btn btn-primary" id="startBossBattleBtn" onclick="executeBossBattle('${bossId}')" style="width: 100%; padding: 12px; font-size: 12px; font-weight: 500; background: #f44336; border: 1px solid #f44336; color: white; border-radius: 4px; transition: all 0.3s;">开始挑战</button>`;
            
            battleCard.innerHTML = html;
            battleModal.appendChild(battleCard);
            document.body.appendChild(battleModal);
        }

        // 执行Boss战斗
        function executeBossBattle(bossId) {
            const boss = bosses[bossId];
            if (!boss) return;

            document.getElementById('startBossBattleBtn').disabled = true;
            document.getElementById('startBossBattleBtn').textContent = '战斗中...';
            
            const battleLog = document.getElementById('bossBattleLog');
            battleLog.innerHTML = '';
            
            let playerHp = 100;
            let bossHp = 100;
            let round = 1;
            let bossSpecialCooldown = 0;
            
            // 更新血条函数
            function updateBossHpBar(target, currentHp, maxHp) {
                const percentage = Math.max(0, (currentHp / maxHp) * 100);
                const hpBar = document.getElementById(target + 'HpBar');
                const hpText = document.getElementById(target + 'HpText');
                
                if (hpBar && hpText) {
                    hpBar.style.width = percentage + '%';
                    hpText.textContent = Math.max(0, Math.floor(currentHp)) + '/' + maxHp;
                    
                    // 根据血量改变颜色
                    if (target === 'bossPlayer') {
                        if (percentage > 60) {
                            hpBar.style.background = 'linear-gradient(90deg, #2196f3, #64b5f6)';
                            hpText.style.color = '#2196f3';
                        } else if (percentage > 30) {
                            hpBar.style.background = 'linear-gradient(90deg, #ff9800, #ffb74d)';
                            hpText.style.color = '#ff9800';
                        } else {
                            hpBar.style.background = 'linear-gradient(90deg, #f44336, #e57373)';
                            hpText.style.color = '#f44336';
                        }
                    } else {
                        if (percentage > 60) {
                            hpBar.style.background = 'linear-gradient(90deg, #f44336, #e57373)';
                            hpText.style.color = '#f44336';
                        } else if (percentage > 30) {
                            hpBar.style.background = 'linear-gradient(90deg, #ff9800, #ffb74d)';
                            hpText.style.color = '#ff9800';
                        } else {
                            hpBar.style.background = 'linear-gradient(90deg, #d32f2f, #f44336)';
                            hpText.style.color = '#d32f2f';
                        }
                    }
                }
            }
            
            const battleInterval = setInterval(() => {
                // 玩家攻击
                const playerDamage = Math.floor(6 + Math.random() * 6 + (calculateCombatPower() - boss.power) * 0.01);
                bossHp -= Math.max(1, playerDamage);
                
                let log = `<div style="margin-bottom: 8px; padding: 8px; background: #f8f9fa; border-left: 2px solid #2196f3; border-radius: 3px;">`;
                log += `<div style="font-weight: 500; color: #6c757d; margin-bottom: 6px; font-size: 10px; letter-spacing: 1px;">ROUND ${round}</div>`;
                log += `<div style="font-size: 11px; color: #2c3e50; margin-bottom: 4px; line-height: 1.5;">`;
                log += `<span style="color: #95a5a6;">[攻击]</span> `;
                log += `你 → ${boss.name} <span style="color: #2196f3; font-weight: 600; font-family: monospace;">${Math.max(1, playerDamage)}</span>`;
                log += `</div>`;
                
                // 更新Boss血条
                updateBossHpBar('boss', bossHp, 100);
                
                if (bossHp <= 0) {
                    log += `<div style="color: #2196f3; font-weight: 600; margin-top: 8px; font-size: 11px; padding: 6px; background: rgba(33,150,243,0.1); border-radius: 3px; text-align: center;">${boss.name}被击败</div>`;
                    log += `</div>`;
                    battleLog.innerHTML += log;
                    clearInterval(battleInterval);
                    endBossBattle('win', bossId);
                    return;
                }
                
                // Boss攻击
                let bossDamage = Math.floor(8 + Math.random() * 8 + (boss.power - calculateCombatPower()) * 0.01);
                
                // Boss特殊技能
                if (bossSpecialCooldown <= 0) {
                    bossDamage = Math.floor(bossDamage * boss.special.damage);
                    bossSpecialCooldown = boss.special.cooldown;
                    log += `<div style="font-size: 11px; color: #2c3e50; margin-bottom: 4px; line-height: 1.5;">`;
                    log += `<span style="color: #f44336;">[技能]</span> `;
                    log += `${boss.name} → 你 <span style="color: #f44336; font-weight: 600; font-family: monospace;">${bossDamage}</span>`;
                    log += `</div>`;
                } else {
                    bossSpecialCooldown--;
                    log += `<div style="font-size: 11px; color: #2c3e50; margin-bottom: 4px; line-height: 1.5;">`;
                    log += `<span style="color: #95a5a6;">[反击]</span> `;
                    log += `${boss.name} → 你 <span style="color: #f44336; font-weight: 600; font-family: monospace;">${bossDamage}</span>`;
                    log += `</div>`;
                }
                
                playerHp -= Math.max(1, bossDamage);
                
                // 更新玩家血条
                updateBossHpBar('bossPlayer', playerHp, 100);
                
                if (playerHp <= 0) {
                    log += `<div style="color: #f44336; font-weight: 600; margin-top: 8px; font-size: 11px; padding: 6px; background: rgba(244,67,54,0.1); border-radius: 3px; text-align: center;">你被${boss.name}击败了</div>`;
                    log += `</div>`;
                    battleLog.innerHTML += log;
                    clearInterval(battleInterval);
                    endBossBattle('lose', bossId);
                    return;
                }
                
                // 显示当前血量
                log += `<div style="font-size: 10px; color: #95a5a6; margin-top: 6px; padding-top: 6px; border-top: 1px solid #e9ecef; font-family: monospace;">`;
                log += `<span style="color: #2196f3;">${Math.max(0, Math.floor(playerHp))}</span> / `;
                log += `<span style="color: #f44336;">${Math.max(0, Math.floor(bossHp))}</span>`;
                if (bossSpecialCooldown > 0) {
                    log += ` • 技能冷却: ${bossSpecialCooldown}`;
                }
                log += `</div>`;
                log += `</div>`;
                
                battleLog.innerHTML += log;
                battleLog.scrollTop = battleLog.scrollHeight;
                
                round++;
                
                // 平局判定
                if (round > 20) {
                    clearInterval(battleInterval);
                    if (playerHp > bossHp) {
                        endBossBattle('win', bossId);
                    } else if (bossHp > playerHp) {
                        endBossBattle('lose', bossId);
                    } else {
                        endBossBattle('draw', bossId);
                    }
                }
            }, 1000);
        }

        // 结束Boss战斗
        function endBossBattle(result, bossId) {
            const boss = bosses[bossId];
            const modal = document.getElementById('bossBattleModal');
            const card = modal.firstChild;
            
            let resultText = '';
            let reward = '';
            
            if (result === 'win') {
                resultText = `你成功击败了${boss.name}！`;
                
                // 发放奖励
                gameData.player.spiritStone += boss.rewards.spiritStone;
                gameData.player.pills += boss.rewards.pills;
                gameData.player.combatWins = (gameData.player.combatWins || 0) + 1;
                
                // 添加装备奖励
                if (boss.rewards.equipment) {
                    const equipType = boss.rewards.equipment.includes('ring') || boss.rewards.equipment.includes('amulet') ? 'accessory' : 
                                     boss.rewards.equipment.includes('sword') || boss.rewards.equipment.includes('blade') ? 'weapon' : 'armor';
                    gameData.combatEquipment[equipType] = boss.rewards.equipment;
                }
                
                // 记录Boss击败
                if (!gameData.player.bossesDefeated) {
                    gameData.player.bossesDefeated = [];
                }
                if (!gameData.player.bossesDefeated.includes(bossId)) {
                    gameData.player.bossesDefeated.push(bossId);
                }
                
                reward = `获得奖励：${boss.rewards.spiritStone} 灵石，${boss.rewards.pills} 枚丹药`;
                if (boss.rewards.equipment) {
                    reward += `，${combatEquipment[boss.rewards.equipment].name}`;
                }
                
                addLog(`👑 击败${boss.name}，获得 ${boss.rewards.spiritStone} 灵石和 ${boss.rewards.pills} 枚丹药`);
            } else if (result === 'lose') {
                resultText = `你被${boss.name}击败了...`;
                const loss = Math.floor(gameData.player.spiritualPower * 0.4);
                gameData.player.spiritualPower = Math.max(0, gameData.player.spiritualPower - loss);
                gameData.player.combatLosses = (gameData.player.combatLosses || 0) + 1;
                reward = `损失了 ${loss} 灵力`;
                addLog(`💀 被${boss.name}击败，损失了 ${loss} 灵力`);
            } else {
                resultText = `与${boss.name}的战斗以平局结束`;
                const stoneGain = Math.floor(boss.rewards.spiritStone * 0.3);
                gameData.player.spiritStone += stoneGain;
                reward = `获得 ${stoneGain} 灵石`;
                addLog(`🤝 与${boss.name}战成平手，获得 ${stoneGain} 灵石`);
            }
            
            card.innerHTML = `
                <h2 style="margin: 0 0 20px 0; font-size: 20px; color: #2c3e50;">战斗结果</h2>
                <div style="padding: 15px; background: #f8f9fa; border-radius: 4px; margin-bottom: 15px; color: #555; line-height: 1.8;">
                    <div style="font-weight: 600; margin-bottom: 8px;">${resultText}</div>
                    <div>${reward}</div>
                </div>
                <button class="btn btn-primary" onclick="this.parentElement.parentElement.remove()" style="width: 100%; padding: 12px; font-size: 12px; font-weight: 500; background: #6c757d; border: 1px solid #6c757d; color: white; border-radius: 4px; transition: all 0.3s;">
                    确定
                </button>
            `;
            
            updateUI();
            checkAchievements();
        }

        // 显示副本战斗界面
        function showDungeonBattle(dungeonId) {
            const dungeon = dungeons[dungeonId];
            if (!dungeon) return;

            // 检查挑战条件
            if (gameData.player.realm < dungeon.requiredRealm || gameData.player.realmLevel < dungeon.requiredLevel) {
                showNotification(`挑战条件不足！需要${realms[dungeon.requiredRealm].name}第${dungeon.requiredLevel}层`, 'error');
                return;
            }

            const battleModal = document.createElement('div');
            battleModal.id = 'dungeonBattleModal';
            battleModal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.92);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2000;
                backdrop-filter: blur(5px);
            `;
            
            const battleCard = document.createElement('div');
            battleCard.style.cssText = `
                background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
                padding: 20px;
                border-radius: 8px;
                max-width: 600px;
                width: 90%;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                border: 1px solid rgba(0,0,0,0.1);
            `;
            
            let html = '';
            html += `<div style="text-align: center; margin-bottom: 20px;">`;
            html += `<h2 style="font-size: 20px; color: #2c3e50; margin: 0; font-weight: 500; letter-spacing: 2px;">${dungeon.name}</h2>`;
            html += `<div style="color: #666; font-size: 12px; margin-top: 5px;">${dungeon.desc}</div>`;
            html += `</div>`;
            
            // 难度显示
            const difficultyColors = {
                easy: '#27ae60',
                medium: '#f39c12',
                hard: '#e74c3c',
                extreme: '#1d4ed8'
            };
            const difficultyNames = {
                easy: '简单',
                medium: '中等',
                hard: '困难',
                extreme: '极难'
            };
            
            html += `<div style="background: rgba(${difficultyColors[dungeon.difficulty].substring(1).match(/.{2}/g).map(hex => parseInt(hex, 16)).join(',')}, 0.1); padding: 12px; border-radius: 4px; margin-bottom: 15px; border-left: 3px solid ${difficultyColors[dungeon.difficulty]};">`;
            html += `<div style="font-weight: 600; color: ${difficultyColors[dungeon.difficulty]}; margin-bottom: 5px; font-size: 12px;">难度：${difficultyNames[dungeon.difficulty]}</div>`;
            html += `<div style="font-size: 11px; color: #666;">需要击败 ${dungeon.enemies.length} 个敌人</div>`;
            html += `</div>`;
            
            // 敌人列表
            html += `<div style="background: #f8f9fa; padding: 12px; border-radius: 4px; margin-bottom: 15px; border: 1px solid #e9ecef;">`;
            html += `<div style="font-weight: 600; color: #2c3e50; margin-bottom: 8px; font-size: 12px;">敌人列表</div>`;
            dungeon.enemies.forEach((enemy, index) => {
                html += `<div style="font-size: 11px; color: #666; margin-bottom: 3px; font-family: monospace;">`;
                html += `${index + 1}. ${enemy.name} <span style="color: #f44336;">${enemy.power}</span>`;
                html += `</div>`;
            });
            html += `</div>`;
            
            // 奖励预览
            html += `<div style="background: rgba(255,193,7,0.1); padding: 12px; border-radius: 4px; margin-bottom: 15px; border-left: 3px solid #ffc107;">`;
            html += `<div style="font-weight: 600; color: #f57c00; margin-bottom: 8px; font-size: 12px;">完成奖励</div>`;
            html += `<div style="font-size: 11px; color: #666;">`;
            html += `${dungeon.finalReward.spiritStone} 灵石 • ${dungeon.finalReward.pills} 丹药`;
            html += `</div>`;
            html += `</div>`;
            
            // 战斗日志区域
            html += `<div style="margin-bottom: 15px;">`;
            html += `<div style="font-size: 10px; color: #7f8c8d; margin-bottom: 8px; letter-spacing: 1px; text-transform: uppercase; padding-left: 2px;">Battle Log</div>`;
            html += `<div id="dungeonBattleLog" style="background: #f8f9fa; padding: 12px; border-radius: 4px; height: 120px; overflow-y: auto; border: 1px solid #e9ecef; font-family: 'Courier New', monospace; font-size: 11px;">`;
            html += `<div style="text-align: center; color: #95a5a6; padding: 20px 0;">准备进入${dungeon.name}...</div>`;
            html += `</div>`;
            html += `</div>`;
            
            html += `<button class="btn btn-primary" id="startDungeonBattleBtn" onclick="executeDungeonBattle('${dungeonId}')" style="width: 100%; padding: 12px; font-size: 12px; font-weight: 500; background: #1d4ed8; border: 1px solid #1d4ed8; color: white; border-radius: 4px; transition: all 0.3s;">开始挑战</button>`;
            
            battleCard.innerHTML = html;
            battleModal.appendChild(battleCard);
            document.body.appendChild(battleModal);
        }

        // 执行副本战斗
        function executeDungeonBattle(dungeonId) {
            const dungeon = dungeons[dungeonId];
            if (!dungeon) return;

            document.getElementById('startDungeonBattleBtn').disabled = true;
            document.getElementById('startDungeonBattleBtn').textContent = '挑战中...';
            
            const battleLog = document.getElementById('dungeonBattleLog');
            battleLog.innerHTML = '';
            
            let currentEnemyIndex = 0;
            let playerHp = 100;
            let enemyHp = 100;
            let round = 1;
            let totalReward = { spiritStone: 0, pills: 0 };
            
            const battleInterval = setInterval(() => {
                const currentEnemy = dungeon.enemies[currentEnemyIndex];
                if (!currentEnemy) {
                    // 副本完成
                    clearInterval(battleInterval);
                    endDungeonBattle('win', dungeonId, totalReward);
                    return;
                }
                
                // 玩家攻击
                const playerDamage = Math.floor(8 + Math.random() * 8 + (calculateCombatPower() - currentEnemy.power) * 0.02);
                enemyHp -= Math.max(1, playerDamage);
                
                let log = `<div style="margin-bottom: 8px; padding: 8px; background: white; border-radius: 4px;">`;
                log += `<div style="font-weight: 600; color: #2196f3;">第${round}回合 - 对战 ${currentEnemy.name}</div>`;
                log += `<div style="font-size: 13px; color: #666;">你对${currentEnemy.name}发动攻击，造成 <span style="color: #e74c3c; font-weight: 600;">${Math.max(1, playerDamage)}</span> 点伤害</div>`;
                
                if (enemyHp <= 0) {
                    // 敌人被击败
                    totalReward.spiritStone += currentEnemy.rewards.spiritStone;
                    totalReward.pills += currentEnemy.rewards.pills;
                    
                    log += `<div style="color: #27ae60; font-weight: 600; margin-top: 5px;">✓ 击败了${currentEnemy.name}！获得 ${currentEnemy.rewards.spiritStone} 灵石，${currentEnemy.rewards.pills} 枚丹药</div>`;
                    log += `</div>`;
                    battleLog.innerHTML += log;
                    battleLog.scrollTop = battleLog.scrollHeight;
                    
                    // 准备下一个敌人
                    currentEnemyIndex++;
                    if (currentEnemyIndex < dungeon.enemies.length) {
                        const nextEnemy = dungeon.enemies[currentEnemyIndex];
                        enemyHp = 100;
                        round = 1;
                        setTimeout(() => {
                            let nextLog = `<div style="margin-bottom: 8px; padding: 8px; background: #e3f2fd; border-radius: 4px;">`;
                            nextLog += `<div style="font-weight: 600; color: #2196f3;">遭遇新的敌人：${nextEnemy.name}</div>`;
                            nextLog += `<div style="font-size: 13px; color: #666;">战力: ${nextEnemy.power}</div>`;
                            nextLog += `</div>`;
                            battleLog.innerHTML += nextLog;
                            battleLog.scrollTop = battleLog.scrollHeight;
                        }, 1000);
                        return;
                    } else {
                        // 副本完成
                        setTimeout(() => {
                            clearInterval(battleInterval);
                            endDungeonBattle('win', dungeonId, totalReward);
                        }, 1000);
                        return;
                    }
                }
                
                // 敌人攻击
                const enemyDamage = Math.floor(6 + Math.random() * 6 + (currentEnemy.power - calculateCombatPower()) * 0.02);
                playerHp -= Math.max(1, enemyDamage);
                
                log += `<div style="font-size: 13px; color: #666;">${currentEnemy.name}反击，造成 <span style="color: #e74c3c; font-weight: 600;">${Math.max(1, enemyDamage)}</span> 点伤害</div>`;
                
                if (playerHp <= 0) {
                    log += `<div style="color: #e74c3c; font-weight: 600; margin-top: 5px;">✗ 你被${currentEnemy.name}击败了...</div>`;
                    log += `</div>`;
                    battleLog.innerHTML += log;
                    clearInterval(battleInterval);
                    endDungeonBattle('lose', dungeonId, totalReward);
                    return;
                }
                
                log += `<div style="font-size: 12px; color: #95a5a6; margin-top: 5px;">你的气血: ${Math.max(0, playerHp)} | ${currentEnemy.name}气血: ${Math.max(0, enemyHp)}</div>`;
                log += `</div>`;
                
                battleLog.innerHTML += log;
                battleLog.scrollTop = battleLog.scrollHeight;
                
                round++;
                
                // 平局判定
                if (round > 15) {
                    clearInterval(battleInterval);
                    if (playerHp > enemyHp) {
                        endDungeonBattle('win', dungeonId, totalReward);
                    } else {
                        endDungeonBattle('lose', dungeonId, totalReward);
                    }
                }
            }, 800);
        }

        // 结束副本战斗
        function endDungeonBattle(result, dungeonId, totalReward) {
            const dungeon = dungeons[dungeonId];
            const modal = document.getElementById('dungeonBattleModal');
            const card = modal.firstChild;
            
            let resultText = '';
            let reward = '';
            
            if (result === 'win') {
                resultText = `你成功完成了${dungeon.name}的挑战！`;
                
                // 发放奖励
                gameData.player.spiritStone += dungeon.finalReward.spiritStone;
                gameData.player.pills += dungeon.finalReward.pills;
                gameData.player.combatWins = (gameData.player.combatWins || 0) + 1;
                
                // 记录副本完成
                if (!gameData.dungeonProgress) {
                    gameData.dungeonProgress = {};
                }
                gameData.dungeonProgress[dungeonId] = (gameData.dungeonProgress[dungeonId] || 0) + 1;
                
                reward = `获得奖励：${dungeon.finalReward.spiritStone} 灵石，${dungeon.finalReward.pills} 枚丹药`;
                if (totalReward.spiritStone > 0 || totalReward.pills > 0) {
                    reward += `<br>战斗奖励：${totalReward.spiritStone} 灵石，${totalReward.pills} 枚丹药`;
                }
                
                addLog(`🏰 完成副本${dungeon.name}，获得 ${dungeon.finalReward.spiritStone} 灵石和 ${dungeon.finalReward.pills} 枚丹药`);
            } else {
                resultText = `你在${dungeon.name}中失败了...`;
                const loss = Math.floor(gameData.player.spiritualPower * 0.3);
                gameData.player.spiritualPower = Math.max(0, gameData.player.spiritualPower - loss);
                gameData.player.combatLosses = (gameData.player.combatLosses || 0) + 1;
                reward = `损失了 ${loss} 灵力`;
                if (totalReward.spiritStone > 0 || totalReward.pills > 0) {
                    reward += `<br>部分奖励：${totalReward.spiritStone} 灵石，${totalReward.pills} 枚丹药`;
                    gameData.player.spiritStone += totalReward.spiritStone;
                    gameData.player.pills += totalReward.pills;
                }
                addLog(`💀 副本挑战失败，损失了 ${loss} 灵力`);
            }
            
            card.innerHTML = `
                <h2 style="margin: 0 0 20px 0; font-size: 20px; color: #2c3e50;">挑战结果</h2>
                <div style="padding: 20px; background: #f8f9fa; border-radius: 6px; margin-bottom: 20px; color: #555; line-height: 1.8;">
                    <div style="font-weight: 600; margin-bottom: 10px;">${resultText}</div>
                    <div>${reward}</div>
                </div>
                <button class="btn btn-primary" onclick="this.parentElement.parentElement.remove()" style="width: 100%;">
                    确定
                </button>
            `;
            
            updateUI();
            checkAchievements();
        }

        // 启动游戏
        window.onload = init;
        window.onbeforeunload = saveGame;