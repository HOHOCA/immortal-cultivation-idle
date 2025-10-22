// 战斗相关数据定义

const combatSkills = {
            basic_attack: {
                name: '基础攻击',
                desc: '最基础的攻击技能',
                damage: 1.0,
                cost: 0,
                cooldown: 0,
                type: 'attack'
            },
            spirit_strike: {
                name: '灵力冲击',
                desc: '消耗灵力发动强力攻击',
                damage: 1.5,
                cost: 50,
                cooldown: 2,
                type: 'attack',
                requiredRealm: 1 // 筑基期
            },
            defensive_stance: {
                name: '防御姿态',
                desc: '提升防御力，减少受到的伤害',
                damage: 0,
                cost: 30,
                cooldown: 3,
                type: 'defense',
                requiredRealm: 1 // 筑基期
            },
            critical_strike: {
                name: '致命一击',
                desc: '有概率造成暴击伤害',
                damage: 2.0,
                cost: 80,
                cooldown: 4,
                type: 'attack',
                critical: true,
                requiredRealm: 2 // 金丹期
            },
            healing_light: {
                name: '治愈之光',
                desc: '恢复生命值',
                damage: -0.5, // 负数表示治疗
                cost: 100,
                cooldown: 5,
                type: 'heal',
                requiredRealm: 2 // 金丹期
            }
        };

const combatEquipment = {
            // 武器
            wooden_sword: {
                name: '木剑',
                type: 'weapon',
                attack: 10,
                defense: 0,
                speed: 5,
                critical: 0.02,
                requiredRealm: 0
            },
            iron_sword: {
                name: '铁剑',
                type: 'weapon',
                attack: 25,
                defense: 0,
                speed: 3,
                critical: 0.05,
                requiredRealm: 2
            },
            spirit_blade: {
                name: '灵剑',
                type: 'weapon',
                attack: 50,
                defense: 5,
                speed: 8,
                critical: 0.08,
                requiredRealm: 4
            },
            // 护甲
            cloth_armor: {
                name: '布衣',
                type: 'armor',
                attack: 0,
                defense: 15,
                speed: 5,
                critical: 0,
                requiredRealm: 0
            },
            leather_armor: {
                name: '莱甲',
                type: 'armor',
                attack: 0,
                defense: 35,
                speed: 3,
                critical: 0,
                requiredRealm: 2
            },
            spirit_armor: {
                name: '灵甲',
                type: 'armor',
                attack: 5,
                defense: 60,
                speed: 2,
                critical: 0.03,
                requiredRealm: 4
            },
            // 饰品
            power_ring: {
                name: '力量戒指',
                type: 'accessory',
                attack: 20,
                defense: 10,
                speed: 0,
                critical: 0.05,
                requiredRealm: 3
            },
            speed_amulet: {
                name: '疾风项链',
                type: 'accessory',
                attack: 10,
                defense: 5,
                speed: 15,
                critical: 0.03,
                requiredRealm: 3
            }
        };

const bosses = {
            demon_lord: {
                name: '魔君',
                desc: '作恶多端的魔道强者',
                requiredRealm: 3,
                requiredLevel: 5,
                power: 500,
                rewards: {
                    spiritStone: 1000,
                    pills: 10,
                    equipment: 'iron_sword'
                },
                special: {
                    name: '魔气爆发',
                    desc: '每3回合发动一次强力攻击',
                    damage: 2.0,
                    cooldown: 3
                }
            },
            ancient_dragon: {
                name: '上古真龙',
                desc: '沉睡千年的神龙',
                requiredRealm: 5,
                requiredLevel: 7,
                power: 1200,
                rewards: {
                    spiritStone: 3000,
                    pills: 25,
                    equipment: 'spirit_blade'
                },
                special: {
                    name: '龙息',
                    desc: '每5回合发动一次范围攻击',
                    damage: 1.8,
                    cooldown: 5
                }
            },
            heaven_guardian: {
                name: '天界守护者',
                desc: '守护天门的强大存在',
                requiredRealm: 7,
                requiredLevel: 9,
                power: 2500,
                rewards: {
                    spiritStone: 8000,
                    pills: 50,
                    equipment: 'spirit_armor'
                },
                special: {
                    name: '天罚',
                    desc: '每4回合发动一次神圣攻击',
                    damage: 2.5,
                    cooldown: 4
                }
            },
            chaos_emperor: {
                name: '混沌帝君',
                desc: '远古混沌时期的至尊',
                requiredRealm: 8,
                requiredLevel: 9,
                power: 5000,
                rewards: {
                    spiritStone: 20000,
                    pills: 100,
                    equipment: 'power_ring'
                },
                special: {
                    name: '混沌之力',
                    desc: '每6回合发动一次毁灭性攻击',
                    damage: 3.0,
                    cooldown: 6
                }
            }
        };

const dungeons = {
            spirit_forest: {
                name: '灵兽森林',
                desc: '聚集着大量灵兽的神秘森林',
                requiredRealm: 2,
                requiredLevel: 3,
                difficulty: 'easy',
                enemies: [
                    { name: '灵狐', power: 200, rewards: { spiritStone: 50, pills: 1 } },
                    { name: '灵狼', power: 250, rewards: { spiritStone: 60, pills: 1 } },
                    { name: '森林守护者', power: 350, rewards: { spiritStone: 100, pills: 2 } }
                ],
                finalReward: { spiritStone: 300, pills: 5 }
            },
            demon_cave: {
                name: '魔窟',
                desc: '魔修聚集之地',
                requiredRealm: 4,
                requiredLevel: 5,
                difficulty: 'medium',
                enemies: [
                    { name: '魔修弟子', power: 400, rewards: { spiritStone: 80, pills: 2 } },
                    { name: '魔修长老', power: 500, rewards: { spiritStone: 120, pills: 3 } },
                    { name: '魔窟首领', power: 700, rewards: { spiritStone: 200, pills: 5 } }
                ],
                finalReward: { spiritStone: 800, pills: 10 }
            },
            ancient_ruins: {
                name: '上古遗迹',
                desc: '充满危险与机遇的上古遗迹',
                requiredRealm: 6,
                requiredLevel: 7,
                difficulty: 'hard',
                enemies: [
                    { name: '守护傀儡', power: 800, rewards: { spiritStone: 150, pills: 3 } },
                    { name: '古代法师', power: 1000, rewards: { spiritStone: 200, pills: 4 } },
                    { name: '遗迹之主', power: 1500, rewards: { spiritStone: 400, pills: 8 } }
                ],
                finalReward: { spiritStone: 2000, pills: 20 }
            },
            heaven_trial: {
                name: '天道试炼',
                desc: '考验修士的天道试炼场',
                requiredRealm: 8,
                requiredLevel: 9,
                difficulty: 'extreme',
                enemies: [
                    { name: '天兵', power: 2000, rewards: { spiritStone: 300, pills: 6 } },
                    { name: '天将', power: 2500, rewards: { spiritStone: 400, pills: 8 } },
                    { name: '天道化身', power: 4000, rewards: { spiritStone: 800, pills: 15 } }
                ],
                finalReward: { spiritStone: 5000, pills: 50 }
            }
        };