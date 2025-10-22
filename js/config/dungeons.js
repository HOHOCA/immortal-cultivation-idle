// 副本探索系统配置
const dungeonsConfig = {
    spirit_forest: {
        id: 'spirit_forest',
        name: '灵兽森林',
        desc: '灵气充裕的森林，栖息着各种灵兽',
        requiredRealm: 1,
        requiredLevel: 3,
        difficulty: 1,
        
        // 副本特色机制
        specialMechanic: {
            type: 'tame', // 驯服机制
            name: '灵兽驯服',
            desc: '击败灵兽后有概率驯服，获得临时助战'
        },
        
        // 探索路径（玩家可选择）
        paths: [
            {
                id: 'easy',
                name: '林间小路',
                desc: '安全但奖励较少',
                difficulty: 0.7,
                rewardMultiplier: 0.8,
                stages: 3
            },
            {
                id: 'normal',
                name: '森林深处',
                desc: '平衡的路线',
                difficulty: 1.0,
                rewardMultiplier: 1.0,
                stages: 4
            },
            {
                id: 'hard',
                name: '危险禁地',
                desc: '危险但奖励丰厚',
                difficulty: 1.3,
                rewardMultiplier: 1.5,
                stages: 5
            }
        ],
        
        // 敌人配置
        enemies: [
            { name: '灵狐', power: 200, hp: 500, canTame: true, tameChance: 0.3, tamePower: 50 },
            { name: '灵狼', power: 250, hp: 600, canTame: true, tameChance: 0.25, tamePower: 70 },
            { name: '森林守护者', power: 350, hp: 800, canTame: false }
        ],
        
        // 探索事件
        events: [
            {
                id: 'treasure_chest',
                name: '神秘宝箱',
                desc: '发现一个散发灵光的宝箱',
                choices: [
                    {
                        text: '小心打开',
                        cost: { explorationPoints: 1 },
                        outcomes: [
                            { chance: 0.6, reward: { spiritStone: 200, pills: 3 }, message: '获得了珍贵物品！' },
                            { chance: 0.3, reward: { spiritStone: 50 }, message: '宝箱里只有少量灵石' },
                            { chance: 0.1, damage: 200, message: '触发了陷阱！受到伤害' }
                        ]
                    },
                    {
                        text: '暴力破开',
                        cost: { spiritualPower: 100 },
                        outcomes: [
                            { chance: 0.8, reward: { spiritStone: 150, pills: 2 }, message: '成功破开宝箱！' },
                            { chance: 0.2, damage: 300, message: '宝箱爆炸了！' }
                        ]
                    },
                    {
                        text: '放弃',
                        outcomes: [
                            { chance: 1.0, message: '你谨慎地离开了' }
                        ]
                    }
                ]
            },
            {
                id: 'spirit_pool',
                name: '灵泉池',
                desc: '发现一池散发灵气的泉水',
                choices: [
                    {
                        text: '饮用泉水',
                        outcomes: [
                            { chance: 1.0, heal: 300, message: '恢复了300点生命值！' }
                        ]
                    },
                    {
                        text: '装瓶带走',
                        cost: { explorationPoints: 1 },
                        outcomes: [
                            { chance: 1.0, reward: { pills: 5 }, message: '获得了5枚灵泉丹药！' }
                        ]
                    },
                    {
                        text: '继续前进',
                        outcomes: [
                            { chance: 1.0, message: '你没有停留' }
                        ]
                    }
                ]
            },
            {
                id: 'teleport_array',
                name: '传送法阵',
                desc: '发现一座古老的传送法阵',
                choices: [
                    {
                        text: '使用法阵',
                        cost: { spiritualPower: 200 },
                        outcomes: [
                            { chance: 0.7, skipEnemy: 1, message: '传送成功！跳过了一个敌人' },
                            { chance: 0.3, damage: 150, message: '法阵不稳定，受到反噬！' }
                        ]
                    },
                    {
                        text: '研究法阵',
                        cost: { explorationPoints: 2 },
                        outcomes: [
                            { chance: 1.0, reward: { spiritualPower: 500 }, message: '领悟了法阵原理，获得灵力！' }
                        ]
                    },
                    {
                        text: '绕过法阵',
                        outcomes: [
                            { chance: 1.0, message: '你选择了稳妥的路线' }
                        ]
                    }
                ]
            },
            {
                id: 'spirit_beast_help',
                name: '受伤的灵兽',
                desc: '遇到一只受伤的小灵兽',
                choices: [
                    {
                        text: '治疗它',
                        cost: { pills: 2 },
                        outcomes: [
                            { chance: 1.0, ally: { name: '感恩灵兽', power: 100 }, message: '灵兽决定帮助你！' }
                        ]
                    },
                    {
                        text: '给予灵石',
                        cost: { spiritStone: 100 },
                        outcomes: [
                            { chance: 1.0, reward: { explorationPoints: 2 }, message: '灵兽感激地留下了灵气印记' }
                        ]
                    },
                    {
                        text: '离开',
                        outcomes: [
                            { chance: 1.0, message: '你选择不干涉' }
                        ]
                    }
                ]
            }
        ],
        
        // 基础奖励
        baseReward: {
            spiritStone: 400,
            pills: 8,
            immortalStone: 0
        }
    },
    
    demon_cave: {
        id: 'demon_cave',
        name: '魔窟',
        desc: '黑暗诡异的洞窟，充满危险',
        requiredRealm: 2,
        requiredLevel: 5,
        difficulty: 2,
        
        specialMechanic: {
            type: 'darkness',
            name: '黑暗环境',
            desc: '视野受限，可能遭遇突然袭击'
        },
        
        paths: [
            {
                id: 'torch',
                name: '火把照明',
                desc: '消耗灵力点燃火把，安全但消耗大',
                difficulty: 0.8,
                rewardMultiplier: 0.9,
                costPerStage: { spiritualPower: 150 },
                stages: 4
            },
            {
                id: 'stealth',
                name: '摸黑潜行',
                desc: '不消耗资源但可能遭遇偷袭',
                difficulty: 1.2,
                rewardMultiplier: 1.2,
                ambushChance: 0.3,
                stages: 4
            },
            {
                id: 'magic',
                name: '法术探路',
                desc: '用法术照明和防御',
                difficulty: 1.0,
                rewardMultiplier: 1.1,
                costPerStage: { explorationPoints: 1 },
                stages: 5
            }
        ],
        
        enemies: [
            { name: '魔修弟子', power: 400, hp: 800 },
            { name: '魔修长老', power: 550, hp: 1000 },
            { name: '魔窟首领', power: 700, hp: 1500 }
        ],
        
        events: [
            {
                id: 'dark_altar',
                name: '黑暗祭坛',
                desc: '发现一座散发邪恶气息的祭坛',
                choices: [
                    {
                        text: '摧毁祭坛',
                        cost: { spiritualPower: 300 },
                        outcomes: [
                            { chance: 0.7, reward: { spiritStone: 500, immortalStone: 2 }, message: '净化了邪恶力量！' },
                            { chance: 0.3, damage: 400, message: '邪恶力量反击！' }
                        ]
                    },
                    {
                        text: '吸收力量',
                        cost: { explorationPoints: 2 },
                        outcomes: [
                            { chance: 0.5, reward: { spiritualPower: 1000 }, message: '成功吸收了祭坛的力量！' },
                            { chance: 0.5, damage: 500, message: '邪恶力量侵蚀了你！' }
                        ]
                    },
                    {
                        text: '远离祭坛',
                        outcomes: [
                            { chance: 1.0, message: '你明智地离开了' }
                        ]
                    }
                ]
            },
            {
                id: 'trapped_cultivator',
                name: '被困修士',
                desc: '遇到一位被困在结界中的修士',
                choices: [
                    {
                        text: '破开结界',
                        cost: { spiritualPower: 400 },
                        outcomes: [
                            { chance: 0.8, reward: { spiritStone: 600, pills: 5 }, message: '修士感激地赠送了宝物！' },
                            { chance: 0.2, message: '结界太强，无法破开' }
                        ]
                    },
                    {
                        text: '研究结界',
                        cost: { explorationPoints: 3 },
                        outcomes: [
                            { chance: 1.0, reward: { spiritualPower: 800 }, message: '从结界中领悟了阵法之道！' }
                        ]
                    },
                    {
                        text: '继续前进',
                        outcomes: [
                            { chance: 1.0, message: '你无能为力' }
                        ]
                    }
                ]
            },
            {
                id: 'demon_treasure',
                name: '魔宝库',
                desc: '发现魔修的宝物库房',
                choices: [
                    {
                        text: '搜刮宝物',
                        cost: { explorationPoints: 2 },
                        outcomes: [
                            { chance: 0.6, reward: { spiritStone: 800, pills: 8, immortalStone: 3 }, message: '收获满满！' },
                            { chance: 0.3, reward: { spiritStone: 300 }, message: '大部分宝物都被毁了' },
                            { chance: 0.1, damage: 300, summonEnemy: true, message: '触发了守护机关！' }
                        ]
                    },
                    {
                        text: '只取精华',
                        cost: { explorationPoints: 1 },
                        outcomes: [
                            { chance: 0.9, reward: { immortalStone: 4 }, message: '获得了仙石！' },
                            { chance: 0.1, message: '什么都没找到' }
                        ]
                    },
                    {
                        text: '放弃',
                        outcomes: [
                            { chance: 1.0, message: '你担心陷阱而离开' }
                        ]
                    }
                ]
            }
        ],
        
        baseReward: {
            spiritStone: 1000,
            pills: 15,
            immortalStone: 3
        }
    },
    
    ancient_ruins: {
        id: 'ancient_ruins',
        name: '上古遗迹',
        desc: '远古文明的遗迹，充满谜题和机关',
        requiredRealm: 4,
        requiredLevel: 7,
        difficulty: 3,
        
        specialMechanic: {
            type: 'puzzle',
            name: '古代机关',
            desc: '需要智慧解谜，可以避开敌人或获得额外奖励'
        },
        
        paths: [
            {
                id: 'scholar',
                name: '学者之路',
                desc: '解谜前进，战斗少但需要探索点',
                difficulty: 0.6,
                rewardMultiplier: 1.0,
                costPerStage: { explorationPoints: 2 },
                stages: 4,
                reduceEnemies: true
            },
            {
                id: 'warrior',
                name: '战士之路',
                desc: '强行突破机关，战斗多',
                difficulty: 1.4,
                rewardMultiplier: 1.3,
                stages: 5
            },
            {
                id: 'explorer',
                name: '探险家之路',
                desc: '仔细探索每个角落',
                difficulty: 1.0,
                rewardMultiplier: 1.5,
                stages: 6,
                moreEvents: true
            }
        ],
        
        enemies: [
            { name: '守护傀儡', power: 1500, hp: 2500 },
            { name: '古代法师', power: 1800, hp: 2200 },
            { name: '遗迹之主', power: 2200, hp: 3000 }
        ],
        
        events: [
            {
                id: 'ancient_puzzle',
                name: '古代谜题',
                desc: '墙上刻着古老的文字和图案',
                choices: [
                    {
                        text: '认真解谜',
                        cost: { explorationPoints: 3 },
                        outcomes: [
                            { chance: 0.7, skipEnemy: 1, reward: { spiritStone: 1000 }, message: '解开谜题！获得奖励并绕过了守卫' },
                            { chance: 0.3, reward: { spiritualPower: 1500 }, message: '部分解开谜题，获得了感悟' }
                        ]
                    },
                    {
                        text: '强行破坏',
                        cost: { spiritualPower: 500 },
                        outcomes: [
                            { chance: 0.5, reward: { spiritStone: 500 }, message: '破坏了机关获得材料' },
                            { chance: 0.5, damage: 600, summonEnemy: true, message: '触发了防御机关！' }
                        ]
                    },
                    {
                        text: '跳过',
                        outcomes: [
                            { chance: 1.0, message: '你放弃了解谜' }
                        ]
                    }
                ]
            },
            {
                id: 'time_chamber',
                name: '时光密室',
                desc: '发现一个时间流速异常的密室',
                choices: [
                    {
                        text: '进入修炼',
                        cost: { explorationPoints: 3 },
                        outcomes: [
                            { chance: 1.0, reward: { spiritualPower: 3000, breakthroughProgress: 10 }, message: '在密室中修炼有成！' }
                        ]
                    },
                    {
                        text: '研究时光法则',
                        cost: { spiritualPower: 800 },
                        outcomes: [
                            { chance: 0.6, reward: { daoFruit: 1 }, message: '领悟了时光法则，获得道果！' },
                            { chance: 0.4, reward: { spiritualPower: 2000 }, message: '虽未完全领悟，但也有所收获' }
                        ]
                    },
                    {
                        text: '离开',
                        outcomes: [
                            { chance: 1.0, message: '你不敢冒险' }
                        ]
                    }
                ]
            },
            {
                id: 'ancient_library',
                name: '古代藏书阁',
                desc: '发现保存完好的古代典籍',
                choices: [
                    {
                        text: '仔细阅读',
                        cost: { explorationPoints: 4 },
                        outcomes: [
                            { chance: 0.4, reward: { daoFruit: 2 }, message: '从古籍中获得大道感悟！' },
                            { chance: 0.4, reward: { spiritualPower: 2500, breakthroughProgress: 15 }, message: '学到了高深的修炼之法！' },
                            { chance: 0.2, reward: { spiritStone: 2000, pills: 10 }, message: '找到了古代宝物！' }
                        ]
                    },
                    {
                        text: '快速浏览',
                        cost: { explorationPoints: 2 },
                        outcomes: [
                            { chance: 1.0, reward: { spiritualPower: 1500 }, message: '获得了一些知识' }
                        ]
                    },
                    {
                        text: '带走典籍',
                        cost: { spiritStone: 500 },
                        outcomes: [
                            { chance: 1.0, reward: { pills: 15 }, message: '花费灵石保存典籍，获得丹药' }
                        ]
                    }
                ]
            },
            {
                id: 'power_core',
                name: '能量核心',
                desc: '发现遗迹的能量核心',
                choices: [
                    {
                        text: '吸收能量',
                        cost: { explorationPoints: 5 },
                        outcomes: [
                            { chance: 0.6, reward: { spiritualPower: 5000, immortalStone: 10 }, message: '成功吸收了核心能量！' },
                            { chance: 0.4, damage: 800, message: '能量太强，受到反噬！' }
                        ]
                    },
                    {
                        text: '稳定核心',
                        cost: { spiritualPower: 1000 },
                        outcomes: [
                            { chance: 1.0, reward: { spiritStone: 3000, pills: 20 }, message: '稳定核心后获得了大量资源！' }
                        ]
                    },
                    {
                        text: '不触碰',
                        outcomes: [
                            { chance: 1.0, message: '你谨慎地避开了核心' }
                        ]
                    }
                ]
            }
        ],
        
        baseReward: {
            spiritStone: 4000,
            pills: 40,
            immortalStone: 15,
            daoFruit: 2
        }
    },
    
    heaven_trial: {
        id: 'heaven_trial',
        name: '天道试炼',
        desc: '考验修士全方位能力的终极试炼',
        requiredRealm: 5,
        requiredLevel: 9,
        difficulty: 4,
        
        specialMechanic: {
            type: 'trial',
            name: '全能考验',
            desc: '不仅考验战斗，还考验修炼、智慧等各方面'
        },
        
        paths: [
            {
                id: 'balance',
                name: '平衡之道',
                desc: '战斗、解谜、修炼各方面均衡',
                difficulty: 1.0,
                rewardMultiplier: 1.0,
                stages: 5,
                balancedChallenges: true
            },
            {
                id: 'combat',
                name: '战斗至上',
                desc: '纯粹的战斗考验',
                difficulty: 1.5,
                rewardMultiplier: 1.2,
                stages: 6,
                combatOnly: true
            },
            {
                id: 'wisdom',
                name: '智慧试炼',
                desc: '考验智慧和悟性',
                difficulty: 0.7,
                rewardMultiplier: 1.3,
                stages: 5,
                costPerStage: { explorationPoints: 3 },
                wisdomChallenges: true
            },
            {
                id: 'extreme',
                name: '极限挑战',
                desc: '最高难度，最高奖励',
                difficulty: 2.0,
                rewardMultiplier: 2.0,
                stages: 7
            }
        ],
        
        enemies: [
            { name: '天兵', power: 5000, hp: 8000 },
            { name: '天将', power: 6500, hp: 10000 },
            { name: '天道化身', power: 8500, hp: 15000 }
        ],
        
        events: [
            {
                id: 'dao_comprehension',
                name: '大道感悟',
                desc: '天道降下感悟机会',
                choices: [
                    {
                        text: '全心参悟',
                        cost: { explorationPoints: 5, spiritualPower: 1000 },
                        outcomes: [
                            { chance: 0.5, reward: { daoFruit: 3, breakthroughProgress: 30 }, message: '获得天道认可！' },
                            { chance: 0.5, reward: { daoFruit: 1, spiritualPower: 3000 }, message: '有所感悟' }
                        ]
                    },
                    {
                        text: '快速感悟',
                        cost: { explorationPoints: 2 },
                        outcomes: [
                            { chance: 1.0, reward: { spiritualPower: 4000 }, message: '获得了灵力提升' }
                        ]
                    },
                    {
                        text: '放弃机会',
                        outcomes: [
                            { chance: 1.0, message: '你错过了感悟' }
                        ]
                    }
                ]
            },
            {
                id: 'heaven_gift',
                name: '天赐宝物',
                desc: '天道赐予选择宝物的机会',
                choices: [
                    {
                        text: '选择灵力',
                        outcomes: [
                            { chance: 1.0, reward: { spiritualPower: 8000 }, message: '获得海量灵力！' }
                        ]
                    },
                    {
                        text: '选择财富',
                        outcomes: [
                            { chance: 1.0, reward: { spiritStone: 10000, pills: 50 }, message: '获得大量资源！' }
                        ]
                    },
                    {
                        text: '选择感悟',
                        outcomes: [
                            { chance: 1.0, reward: { daoFruit: 4, breakthroughProgress: 50 }, message: '获得道果和突破进度！' }
                        ]
                    },
                    {
                        text: '选择仙石',
                        outcomes: [
                            { chance: 1.0, reward: { immortalStone: 30 }, message: '获得大量仙石！' }
                        ]
                    }
                ]
            },
            {
                id: 'ultimate_test',
                name: '终极考验',
                desc: '天道的最终考验',
                choices: [
                    {
                        text: '接受挑战',
                        cost: { explorationPoints: 10, spiritualPower: 2000 },
                        outcomes: [
                            { chance: 0.3, reward: { daoFruit: 5, immortalStone: 50, spiritStone: 20000 }, message: '完美通过考验！' },
                            { chance: 0.5, reward: { daoFruit: 2, immortalStone: 25 }, message: '通过了考验' },
                            { chance: 0.2, damage: 1000, message: '考验失败，受到天罚！' }
                        ]
                    },
                    {
                        text: '谨慎应对',
                        cost: { explorationPoints: 5 },
                        outcomes: [
                            { chance: 1.0, reward: { daoFruit: 1, immortalStone: 15 }, message: '稳妥通过' }
                        ]
                    },
                    {
                        text: '拒绝挑战',
                        outcomes: [
                            { chance: 1.0, message: '你选择了安全' }
                        ]
                    }
                ]
            },
            {
                id: 'heaven_blessing',
                name: '天道祝福',
                desc: '感受到天道的祝福',
                choices: [
                    {
                        text: '接受祝福',
                        outcomes: [
                            { chance: 1.0, heal: 9999, reward: { spiritualPower: 5000 }, message: '完全恢复并获得灵力！' }
                        ]
                    }
                ]
            }
        ],
        
        baseReward: {
            spiritStone: 20000,
            pills: 100,
            immortalStone: 50,
            daoFruit: 5
        }
    }
};

