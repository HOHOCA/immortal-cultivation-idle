// 堂口专属任务定义
// 每个堂口有3-5个专属任务

const divisionTasks = {
    // ==================== 剑宗 ====================
    // 剑心峰任务
    sword_heart: {
        basic_sword_practice: {
            name: '基础剑法修炼',
            desc: '练习基础剑法，打磨剑道基础',
            duration: 120, // 2分钟
            rewards: { divisionContribution: 5, spiritualPower: 500 },
            cost: { spiritualPower: 200 },
            requiredRealm: 1
        },
        sword_heart_meditation: {
            name: '剑心淬炼',
            desc: '静心打坐，淬炼剑心',
            duration: 180, // 3分钟
            rewards: { divisionContribution: 10, breakthroughProgress: 10 },
            cost: { spiritualPower: 300 },
            requiredRealm: 2
        },
        guide_junior: {
            name: '指导师弟',
            desc: '指导师弟基础剑法，巩固自身根基',
            duration: 150,
            rewards: { divisionContribution: 8, spiritualPower: 800 },
            cost: { spiritualPower: 200 },
            requiredRealm: 2
        }
    },
    
    // 剑意峰任务
    sword_intent: {
        demon_slaying: {
            name: '斩妖除魔',
            desc: '外出斩杀妖魔，磨练剑意',
            duration: 200,
            rewards: { divisionContribution: 12, spiritualPower: 1200, spiritStone: 100 },
            cost: { spiritualPower: 500 },
            requiredRealm: 2
        },
        sword_intent_comprehension: {
            name: '剑意感悟',
            desc: '观摩前辈剑法，感悟剑意真谛',
            duration: 240,
            rewards: { divisionContribution: 15, breakthroughProgress: 15 },
            cost: { spiritualPower: 400 },
            requiredRealm: 3
        },
        righteousness_practice: {
            name: '正气修炼',
            desc: '修炼正气剑法，增强杀伐之气',
            duration: 180,
            rewards: { divisionContribution: 10, spiritualPower: 1000 },
            cost: { spiritualPower: 350 },
            requiredRealm: 2
        }
    },
    
    // 剑魂峰任务
    sword_soul: {
        sword_soul_fusion: {
            name: '剑魂凝聚',
            desc: '凝聚剑魂，提升境界',
            duration: 200,
            rewards: { divisionContribution: 12, spiritualPower: 1000, breakthroughProgress: 8 },
            cost: { spiritualPower: 400 },
            requiredRealm: 3
        },
        flexible_sword: {
            name: '柔剑修炼',
            desc: '修炼柔剑之法，以柔克刚',
            duration: 180,
            rewards: { divisionContribution: 10, spiritualPower: 900 },
            cost: { spiritualPower: 300 },
            requiredRealm: 2
        }
    },
    
    // ==================== 丹宗 ====================
    // 炼丹堂任务
    pill_refining: {
        refine_basic_pill: {
            name: '炼制基础丹药',
            desc: '炼制基础丹药，提升炼丹技艺',
            duration: 150,
            rewards: { divisionContribution: 8, pills: 5 },
            cost: { spiritStone: 50 },
            requiredRealm: 1
        },
        refine_advanced_pill: {
            name: '炼制高级丹药',
            desc: '炼制高级丹药，挑战更高难度',
            duration: 240,
            rewards: { divisionContribution: 15, pills: 10, spiritStone: 100 },
            cost: { spiritStone: 100 },
            requiredRealm: 3
        },
        teach_alchemy: {
            name: '传授炼丹术',
            desc: '向师弟传授炼丹经验',
            duration: 180,
            rewards: { divisionContribution: 12, spiritualPower: 800 },
            cost: { spiritStone: 50 },
            requiredRealm: 2
        }
    },
    
    // 药园任务
    herb_garden: {
        collect_herbs: {
            name: '采集灵药',
            desc: '前往灵山采集珍贵药材',
            duration: 120,
            rewards: { divisionContribution: 6, spiritStone: 80 },
            cost: { spiritualPower: 200 },
            requiredRealm: 1
        },
        cultivate_herbs: {
            name: '培育灵药',
            desc: '在药园中培育珍贵药材',
            duration: 200,
            rewards: { divisionContribution: 10, spiritStone: 150, pills: 3 },
            cost: { spiritStone: 50 },
            requiredRealm: 2
        },
        herb_research: {
            name: '药材研究',
            desc: '研究药材特性，提升认知',
            duration: 180,
            rewards: { divisionContribution: 12, spiritualPower: 700 },
            cost: { spiritualPower: 250 },
            requiredRealm: 2
        }
    },
    
    // 丹方阁任务
    formula_research: {
        study_formula: {
            name: '研究丹方',
            desc: '研究古代丹方，寻找新配方',
            duration: 240,
            rewards: { divisionContribution: 15, spiritualPower: 1000, pills: 5 },
            cost: { spiritStone: 100 },
            requiredRealm: 2
        },
        innovate_formula: {
            name: '创新丹方',
            desc: '尝试创新丹方，可能获得意外收获',
            duration: 300,
            rewards: { divisionContribution: 20, spiritualPower: 1500, pills: 8 },
            cost: { spiritStone: 150, spiritualPower: 300 },
            requiredRealm: 3
        }
    },
    
    // ==================== 阵宗 ====================
    // 攻阵堂任务
    attack_formation: {
        practice_attack_formation: {
            name: '修炼攻阵',
            desc: '修炼进攻阵法，提升杀伐之力',
            duration: 180,
            rewards: { divisionContribution: 10, spiritualPower: 1000 },
            cost: { spiritualPower: 350 },
            requiredRealm: 2
        },
        break_formation: {
            name: '破阵演练',
            desc: '演练破阵之法，提升实战能力',
            duration: 200,
            rewards: { divisionContribution: 12, spiritualPower: 1100, breakthroughProgress: 5 },
            cost: { spiritualPower: 400 },
            requiredRealm: 2
        }
    },
    
    // 守阵堂任务
    defense_formation: {
        maintain_formation: {
            name: '维护护山大阵',
            desc: '维护宗门护山大阵，确保安全',
            duration: 150,
            rewards: { divisionContribution: 8, spiritualPower: 600 },
            cost: { spiritualPower: 250 },
            requiredRealm: 1
        },
        strengthen_defense: {
            name: '加固防御',
            desc: '加固防御阵法，提升防护能力',
            duration: 200,
            rewards: { divisionContribution: 12, spiritualPower: 900 },
            cost: { spiritualPower: 300, spiritStone: 50 },
            requiredRealm: 2
        }
    },
    
    // 幻阵堂任务
    illusion_formation: {
        practice_illusion: {
            name: '修炼幻阵',
            desc: '修炼幻阵之术，提升变化能力',
            duration: 180,
            rewards: { divisionContribution: 10, spiritualPower: 900 },
            cost: { spiritualPower: 300 },
            requiredRealm: 2
        },
        create_maze: {
            name: '布置迷阵',
            desc: '布置迷惑敌人的幻阵',
            duration: 220,
            rewards: { divisionContribution: 14, spiritualPower: 1100, breakthroughProgress: 8 },
            cost: { spiritualPower: 400, spiritStone: 80 },
            requiredRealm: 3
        }
    },
    
    // ==================== 其他门派任务（简化版） ====================
    // 佛宗 - 禅修院
    meditation: {
        zen_meditation: {
            name: '禅定修炼',
            desc: '静心禅定，提升心境',
            duration: 180,
            rewards: { divisionContribution: 10, spiritualPower: 800, breakthroughProgress: 10 },
            cost: { spiritualPower: 300 },
            requiredRealm: 1
        },
        chant_sutras: {
            name: '诵读经文',
            desc: '诵读佛经，感悟佛法',
            duration: 150,
            rewards: { divisionContribution: 8, spiritualPower: 700 },
            cost: { spiritualPower: 200 },
            requiredRealm: 1
        }
    },
    
    // 道宗 - 清虚殿
    tao_nature: {
        comprehend_tao: {
            name: '感悟天道',
            desc: '感悟天道自然，提升道行',
            duration: 200,
            rewards: { divisionContribution: 12, spiritualPower: 1000, breakthroughProgress: 12 },
            cost: { spiritualPower: 350 },
            requiredRealm: 2
        }
    },
    
    // 道宗 - 逍遥谷
    freedom: {
        free_spirit_cultivation: {
            name: '逍遥修炼',
            desc: '随心所欲地修炼，体验逍遥之道',
            duration: 180,
            rewards: { divisionContribution: 10, spiritualPower: 900, breakthroughProgress: 8 },
            cost: { spiritualPower: 300 },
            requiredRealm: 2
        },
        cloud_walking_practice: {
            name: '云游修行',
            desc: '云游四方，感悟天地自然',
            duration: 200,
            rewards: { divisionContribution: 12, spiritualPower: 1100, spiritStone: 80 },
            cost: { spiritualPower: 350 },
            requiredRealm: 2
        },
        natural_way_comprehension: {
            name: '自然之道',
            desc: '感悟自然法则，提升道行',
            duration: 220,
            rewards: { divisionContribution: 15, spiritualPower: 1200, breakthroughProgress: 15 },
            cost: { spiritualPower: 400 },
            requiredRealm: 3
        }
    },
    
    // 魔宗 - 魔神殿
    demon_palace: {
        absorb_demon_power: {
            name: '吸收魔力',
            desc: '吸收魔气，提升魔功修为',
            duration: 180,
            rewards: { divisionContribution: 10, spiritualPower: 1200 },
            cost: { spiritualPower: 400 },
            requiredRealm: 2
        }
    },
    
    // 商会 - 商道总会
    commerce: {
        business_deal: {
            name: '商业交易',
            desc: '进行商业交易，赚取灵石',
            duration: 150,
            rewards: { divisionContribution: 8, spiritStone: 200 },
            cost: { spiritStone: 50 },
            requiredRealm: 1
        },
        treasure_appraisal: {
            name: '鉴定宝物',
            desc: '鉴定各类宝物，提升眼力',
            duration: 180,
            rewards: { divisionContribution: 10, spiritStone: 250, pills: 3 },
            cost: { spiritStone: 80 },
            requiredRealm: 2
        }
    }
};

// 堂口商店 - 使用堂口贡献度兑换
const divisionShop = {
    // 通用商品（所有堂口）
    common: {
        contribution_pill: {
            name: '堂口丹药',
            desc: '使用堂口贡献兑换丹药',
            cost: { divisionContribution: 30 },
            reward: { pills: 8 },
            requiredContribution: 0
        },
        contribution_stone: {
            name: '堂口灵石',
            desc: '使用堂口贡献兑换灵石',
            cost: { divisionContribution: 20 },
            reward: { spiritStone: 150 },
            requiredContribution: 0
        },
        contribution_power: {
            name: '堂口秘传',
            desc: '学习堂口秘传心法',
            cost: { divisionContribution: 50 },
            reward: { spiritualPower: 3000, breakthroughProgress: 15 },
            requiredContribution: 100
        },
        master_special_teaching: {
            name: '师傅特别指点',
            desc: '获得师傅的特别指点机会',
            cost: { divisionContribution: 80 },
            reward: { masterFavorBonus: 20 },
            requiredContribution: 200
        }
    },
    
    // 剑宗专属
    sword_heart: {
        sword_heart_manual: {
            name: '剑心心法',
            desc: '剑心峰独门心法',
            cost: { divisionContribution: 100 },
            reward: { breakthroughProgress: 25 },
            requiredContribution: 150
        }
    },
    
    // 丹宗专属
    pill_refining: {
        pill_formula_book: {
            name: '高级丹方',
            desc: '炼丹堂珍藏丹方',
            cost: { divisionContribution: 100 },
            reward: { pills: 20 },
            requiredContribution: 150
        }
    },
    
    // 商会专属
    commerce: {
        treasure_map: {
            name: '藏宝图',
            desc: '标注了宝藏位置的地图',
            cost: { divisionContribution: 120 },
            reward: { spiritStone: 1000, pills: 10 },
            requiredContribution: 200
        }
    }
};

