// 师传功法效果定义
const learnedTechniqueEffects = {
    // 剑宗功法
    'sword_flight': {
        name: '御剑飞行',
        description: '凌云传授的御剑术，可御剑飞行',
        effects: [
            { type: 'spiritualPower', value: 500, description: '灵力 +500' },
            { type: 'movementSpeed', value: 0.2, description: '移动速度 +20%' },
            { type: 'combatBonus', value: 0.1, description: '战斗伤害 +10%' }
        ],
        category: 'movement'
    },
    'sword_intent': {
        name: '剑意',
        description: '领悟剑道真意，提升攻击力',
        effects: [
            { type: 'spiritualPower', value: 300, description: '灵力 +300' },
            { type: 'attackBonus', value: 0.15, description: '攻击力 +15%' },
            { type: 'criticalChance', value: 0.05, description: '暴击率 +5%' }
        ],
        category: 'combat'
    },
    'sword_heart': {
        name: '剑心',
        description: '修炼剑心，提升整体实力',
        effects: [
            { type: 'spiritualPower', value: 400, description: '灵力 +400' },
            { type: 'allBonus', value: 0.08, description: '全属性 +8%' },
            { type: 'breakthroughBonus', value: 0.05, description: '突破成功率 +5%' }
        ],
        category: 'cultivation'
    },
    
    // 丹宗功法
    'pill_refining': {
        name: '炼丹术',
        description: '精通炼丹之道，提升丹药效果',
        effects: [
            { type: 'spiritualPower', value: 350, description: '灵力 +350' },
            { type: 'pillEffect', value: 0.2, description: '丹药效果 +20%' },
            { type: 'pillProduction', value: 0.1, description: '丹药产出 +10%' }
        ],
        category: 'alchemy'
    },
    'herb_knowledge': {
        name: '药草学',
        description: '熟知各种药草特性',
        effects: [
            { type: 'spiritualPower', value: 250, description: '灵力 +250' },
            { type: 'herbBonus', value: 0.3, description: '药草效果 +30%' },
            { type: 'spiritStoneBonus', value: 0.1, description: '灵石获取 +10%' }
        ],
        category: 'knowledge'
    },
    
    // 邪教功法
    'demon_power': {
        name: '魔神功',
        description: '邪教秘传魔功，威力强大但代价巨大',
        effects: [
            { type: 'spiritualPower', value: 600, description: '灵力 +600' },
            { type: 'attackBonus', value: 0.25, description: '攻击力 +25%' },
            { type: 'evilPenalty', value: -0.1, description: '正派好感 -10%' }
        ],
        category: 'evil'
    },
    'shadow_walk': {
        name: '暗影步',
        description: '在暗影中穿行的秘术',
        effects: [
            { type: 'spiritualPower', value: 400, description: '灵力 +400' },
            { type: 'stealthBonus', value: 0.3, description: '潜行能力 +30%' },
            { type: 'criticalChance', value: 0.08, description: '暴击率 +8%' }
        ],
        category: 'stealth'
    },
    'charm_art': {
        name: '魅术',
        description: '魅惑他人的邪术',
        effects: [
            { type: 'spiritualPower', value: 300, description: '灵力 +300' },
            { type: 'charmBonus', value: 0.2, description: '魅惑成功率 +20%' },
            { type: 'socialBonus', value: 0.15, description: '社交效果 +15%' }
        ],
        category: 'social'
    },
    
    // 其他功法
    'five_thunder': {
        name: '五雷正法',
        description: '雷系法术，威力巨大',
        effects: [
            { type: 'spiritualPower', value: 500, description: '灵力 +500' },
            { type: 'lightningDamage', value: 0.3, description: '雷系伤害 +30%' },
            { type: 'areaDamage', value: 0.2, description: '范围伤害 +20%' }
        ],
        category: 'elemental'
    },
    'immortal_sword': {
        name: '仙剑术',
        description: '仙界剑法，威力无穷',
        effects: [
            { type: 'spiritualPower', value: 800, description: '灵力 +800' },
            { type: 'attackBonus', value: 0.3, description: '攻击力 +30%' },
            { type: 'immortalBonus', value: 0.1, description: '仙界修炼 +10%' }
        ],
        category: 'immortal'
    },
    'cloud_walking': {
        name: '云游术',
        description: '踏云而行的仙术',
        effects: [
            { type: 'spiritualPower', value: 400, description: '灵力 +400' },
            { type: 'movementSpeed', value: 0.4, description: '移动速度 +40%' },
            { type: 'explorationBonus', value: 0.2, description: '探索效率 +20%' }
        ],
        category: 'movement'
    },
    'talisman_art': {
        name: '符箓术',
        description: '制作和使用符箓的法术',
        effects: [
            { type: 'spiritualPower', value: 350, description: '灵力 +350' },
            { type: 'talismanEffect', value: 0.25, description: '符箓效果 +25%' },
            { type: 'defenseBonus', value: 0.15, description: '防御力 +15%' }
        ],
        category: 'support'
    },
    'blood_sacrifice': {
        name: '血祭术',
        description: '以血为祭的邪术',
        effects: [
            { type: 'spiritualPower', value: 700, description: '灵力 +700' },
            { type: 'attackBonus', value: 0.4, description: '攻击力 +40%' },
            { type: 'healthCost', value: -0.1, description: '生命值 -10%' }
        ],
        category: 'evil'
    },
    
    // 剑宗功法
    'basic_sword': {
        name: '基础剑法',
        description: '剑宗入门剑法',
        effects: [
            { type: 'spiritualPower', value: 200, description: '灵力 +200' },
            { type: 'attackBonus', value: 0.1, description: '攻击力 +10%' }
        ],
        category: 'combat'
    },
    'sword_mastery': {
        name: '剑道精通',
        description: '剑道修炼的精髓',
        effects: [
            { type: 'spiritualPower', value: 400, description: '灵力 +400' },
            { type: 'attackBonus', value: 0.2, description: '攻击力 +20%' },
            { type: 'criticalChance', value: 0.1, description: '暴击率 +10%' }
        ],
        category: 'combat'
    },
    'heaven_sword': {
        name: '天剑诀',
        description: '剑宗高级剑法',
        effects: [
            { type: 'spiritualPower', value: 600, description: '灵力 +600' },
            { type: 'attackBonus', value: 0.3, description: '攻击力 +30%' },
            { type: 'criticalChance', value: 0.15, description: '暴击率 +15%' }
        ],
        category: 'combat'
    },
    'righteous_sword': {
        name: '正气剑法',
        description: '以正气为剑的剑法',
        effects: [
            { type: 'spiritualPower', value: 500, description: '灵力 +500' },
            { type: 'attackBonus', value: 0.25, description: '攻击力 +25%' },
            { type: 'evilResistance', value: 0.2, description: '对邪魔抗性 +20%' }
        ],
        category: 'combat'
    },
    'demon_slaying': {
        name: '除魔剑法',
        description: '专门克制魔修的剑法',
        effects: [
            { type: 'spiritualPower', value: 700, description: '灵力 +700' },
            { type: 'attackBonus', value: 0.35, description: '攻击力 +35%' },
            { type: 'demonDamage', value: 0.5, description: '对魔修伤害 +50%' }
        ],
        category: 'combat'
    },
    
    // 丹宗功法
    'basic_alchemy': {
        name: '基础炼丹',
        description: '炼丹入门功法',
        effects: [
            { type: 'spiritualPower', value: 300, description: '灵力 +300' },
            { type: 'pillEffect', value: 0.15, description: '丹药效果 +15%' }
        ],
        category: 'alchemy'
    },
    'master_alchemy': {
        name: '炼丹大师',
        description: '炼丹术的精髓',
        effects: [
            { type: 'spiritualPower', value: 500, description: '灵力 +500' },
            { type: 'pillEffect', value: 0.3, description: '丹药效果 +30%' },
            { type: 'pillProduction', value: 0.2, description: '丹药产出 +20%' }
        ],
        category: 'alchemy'
    },
    'nine_turn_pill': {
        name: '九转金丹',
        description: '炼制九转金丹的秘法',
        effects: [
            { type: 'spiritualPower', value: 800, description: '灵力 +800' },
            { type: 'pillEffect', value: 0.5, description: '丹药效果 +50%' },
            { type: 'breakthroughBonus', value: 0.1, description: '突破成功率 +10%' }
        ],
        category: 'alchemy'
    },
    'herb_cultivation': {
        name: '药材培育',
        description: '培育药材的功法',
        effects: [
            { type: 'spiritualPower', value: 250, description: '灵力 +250' },
            { type: 'herbBonus', value: 0.4, description: '药材效果 +40%' }
        ],
        category: 'knowledge'
    },
    'formula_innovation': {
        name: '丹方创新',
        description: '创新丹方的能力',
        effects: [
            { type: 'spiritualPower', value: 400, description: '灵力 +400' },
            { type: 'pillEffect', value: 0.25, description: '丹药效果 +25%' },
            { type: 'spiritStoneBonus', value: 0.15, description: '灵石获取 +15%' }
        ],
        category: 'knowledge'
    },
    'herb_master': {
        name: '药材大师',
        description: '精通各种药材特性',
        effects: [
            { type: 'spiritualPower', value: 350, description: '灵力 +350' },
            { type: 'herbBonus', value: 0.6, description: '药材效果 +60%' },
            { type: 'spiritStoneBonus', value: 0.2, description: '灵石获取 +20%' }
        ],
        category: 'knowledge'
    },
    
    // 阵宗功法
    'basic_formation': {
        name: '基础阵法',
        description: '阵法入门功法',
        effects: [
            { type: 'spiritualPower', value: 300, description: '灵力 +300' },
            { type: 'defenseBonus', value: 0.1, description: '防御力 +10%' }
        ],
        category: 'support'
    },
    'master_formation': {
        name: '阵法大师',
        description: '阵法修炼的精髓',
        effects: [
            { type: 'spiritualPower', value: 500, description: '灵力 +500' },
            { type: 'defenseBonus', value: 0.2, description: '防御力 +20%' },
            { type: 'facilityBonus', value: 0.15, description: '设施效果 +15%' }
        ],
        category: 'support'
    },
    'heaven_earth_formation': {
        name: '天地大阵',
        description: '阵宗顶级阵法',
        effects: [
            { type: 'spiritualPower', value: 800, description: '灵力 +800' },
            { type: 'defenseBonus', value: 0.4, description: '防御力 +40%' },
            { type: 'allBonus', value: 0.1, description: '全属性 +10%' }
        ],
        category: 'support'
    },
    'defense_formation': {
        name: '防御阵法',
        description: '专门用于防御的阵法',
        effects: [
            { type: 'spiritualPower', value: 400, description: '灵力 +400' },
            { type: 'defenseBonus', value: 0.3, description: '防御力 +30%' }
        ],
        category: 'support'
    },
    'barrier_master': {
        name: '结界精通',
        description: '精通各种结界术',
        effects: [
            { type: 'spiritualPower', value: 600, description: '灵力 +600' },
            { type: 'defenseBonus', value: 0.25, description: '防御力 +25%' },
            { type: 'facilityBonus', value: 0.2, description: '设施效果 +20%' }
        ],
        category: 'support'
    },
    
    // 佛宗功法
    'buddha_palm': {
        name: '如来神掌',
        description: '佛门绝学掌法',
        effects: [
            { type: 'spiritualPower', value: 700, description: '灵力 +700' },
            { type: 'attackBonus', value: 0.3, description: '攻击力 +30%' },
            { type: 'evilResistance', value: 0.3, description: '对邪魔抗性 +30%' }
        ],
        category: 'combat'
    },
    'zen_meditation': {
        name: '禅定功',
        description: '佛门禅定心法',
        effects: [
            { type: 'spiritualPower', value: 500, description: '灵力 +500' },
            { type: 'breakthroughBonus', value: 0.15, description: '突破成功率 +15%' },
            { type: 'allBonus', value: 0.08, description: '全属性 +8%' }
        ],
        category: 'cultivation'
    },
    'buddha_light': {
        name: '佛光普照',
        description: '佛门光明功法',
        effects: [
            { type: 'spiritualPower', value: 600, description: '灵力 +600' },
            { type: 'evilResistance', value: 0.4, description: '对邪魔抗性 +40%' },
            { type: 'healingBonus', value: 0.2, description: '治疗效果 +20%' }
        ],
        category: 'support'
    },
    'compassion_heart': {
        name: '慈悲心法',
        description: '佛门慈悲心法',
        effects: [
            { type: 'spiritualPower', value: 400, description: '灵力 +400' },
            { type: 'healingBonus', value: 0.3, description: '治疗效果 +30%' },
            { type: 'socialBonus', value: 0.2, description: '社交效果 +20%' }
        ],
        category: 'support'
    },
    'wisdom_light': {
        name: '般若智慧',
        description: '佛门智慧功法',
        effects: [
            { type: 'spiritualPower', value: 550, description: '灵力 +550' },
            { type: 'breakthroughBonus', value: 0.12, description: '突破成功率 +12%' },
            { type: 'allBonus', value: 0.1, description: '全属性 +10%' }
        ],
        category: 'cultivation'
    },
    
    // 道宗功法
    'tao_nature': {
        name: '道法自然',
        description: '道门自然心法',
        effects: [
            { type: 'spiritualPower', value: 600, description: '灵力 +600' },
            { type: 'allBonus', value: 0.12, description: '全属性 +12%' },
            { type: 'breakthroughBonus', value: 0.1, description: '突破成功率 +10%' }
        ],
        category: 'cultivation'
    },
    
    // 魔宗功法
    'blood_magic': {
        name: '血魔法',
        description: '以血为媒介的魔法',
        effects: [
            { type: 'spiritualPower', value: 800, description: '灵力 +800' },
            { type: 'attackBonus', value: 0.4, description: '攻击力 +40%' },
            { type: 'healthCost', value: -0.15, description: '生命值 -15%' }
        ],
        category: 'evil'
    },
    'berserk': {
        name: '狂暴术',
        description: '激发狂暴状态的邪术',
        effects: [
            { type: 'spiritualPower', value: 600, description: '灵力 +600' },
            { type: 'attackBonus', value: 0.5, description: '攻击力 +50%' },
            { type: 'defensePenalty', value: -0.2, description: '防御力 -20%' }
        ],
        category: 'evil'
    },
    'soul_devouring': {
        name: '噬魂术',
        description: '吞噬他人灵魂的邪术',
        effects: [
            { type: 'spiritualPower', value: 1000, description: '灵力 +1000' },
            { type: 'attackBonus', value: 0.6, description: '攻击力 +60%' },
            { type: 'evilPenalty', value: -0.2, description: '正派好感 -20%' }
        ],
        category: 'evil'
    },
    'illusion_magic': {
        name: '幻术',
        description: '制造幻象的魔法',
        effects: [
            { type: 'spiritualPower', value: 450, description: '灵力 +450' },
            { type: 'stealthBonus', value: 0.4, description: '潜行能力 +40%' },
            { type: 'charmBonus', value: 0.3, description: '魅惑成功率 +30%' }
        ],
        category: 'stealth'
    },
    'mind_control': {
        name: '控心术',
        description: '控制他人心智的邪术',
        effects: [
            { type: 'spiritualPower', value: 700, description: '灵力 +700' },
            { type: 'charmBonus', value: 0.5, description: '魅惑成功率 +50%' },
            { type: 'socialBonus', value: 0.3, description: '社交效果 +30%' }
        ],
        category: 'social'
    },
    'dark_curse': {
        name: '黑暗诅咒',
        description: '施加诅咒的邪术',
        effects: [
            { type: 'spiritualPower', value: 550, description: '灵力 +550' },
            { type: 'attackBonus', value: 0.25, description: '攻击力 +25%' },
            { type: 'curseBonus', value: 0.3, description: '诅咒效果 +30%' }
        ],
        category: 'evil'
    },
    'soul_manipulation': {
        name: '灵魂操控',
        description: '操控灵魂的邪术',
        effects: [
            { type: 'spiritualPower', value: 900, description: '灵力 +900' },
            { type: 'charmBonus', value: 0.4, description: '魅惑成功率 +40%' },
            { type: 'evilPenalty', value: -0.15, description: '正派好感 -15%' }
        ],
        category: 'evil'
    },
    'seduction': {
        name: '魅惑术',
        description: '魅惑他人的邪术',
        effects: [
            { type: 'spiritualPower', value: 400, description: '灵力 +400' },
            { type: 'charmBonus', value: 0.6, description: '魅惑成功率 +60%' },
            { type: 'socialBonus', value: 0.25, description: '社交效果 +25%' }
        ],
        category: 'social'
    },
    'poison_art': {
        name: '毒术',
        description: '使用毒物的邪术',
        effects: [
            { type: 'spiritualPower', value: 500, description: '灵力 +500' },
            { type: 'poisonDamage', value: 0.4, description: '毒系伤害 +40%' },
            { type: 'stealthBonus', value: 0.2, description: '潜行能力 +20%' }
        ],
        category: 'stealth'
    },
    'blood_god': {
        name: '血神功',
        description: '血宗顶级功法',
        effects: [
            { type: 'spiritualPower', value: 1200, description: '灵力 +1200' },
            { type: 'attackBonus', value: 0.7, description: '攻击力 +70%' },
            { type: 'healthCost', value: -0.2, description: '生命值 -20%' }
        ],
        category: 'evil'
    },
    'life_devouring': {
        name: '噬命术',
        description: '吞噬生命力的邪术',
        effects: [
            { type: 'spiritualPower', value: 1000, description: '灵力 +1000' },
            { type: 'attackBonus', value: 0.5, description: '攻击力 +50%' },
            { type: 'lifeSteal', value: 0.3, description: '生命偷取 +30%' }
        ],
        category: 'evil'
    },
    'blood_sea': {
        name: '血海功',
        description: '血海滔天的邪功',
        effects: [
            { type: 'spiritualPower', value: 1100, description: '灵力 +1100' },
            { type: 'attackBonus', value: 0.6, description: '攻击力 +60%' },
            { type: 'areaDamage', value: 0.3, description: '范围伤害 +30%' }
        ],
        category: 'evil'
    },
    'killing_blade': {
        name: '杀生刀',
        description: '专为杀戮而生的刀法',
        effects: [
            { type: 'spiritualPower', value: 800, description: '灵力 +800' },
            { type: 'attackBonus', value: 0.8, description: '攻击力 +80%' },
            { type: 'criticalChance', value: 0.2, description: '暴击率 +20%' }
        ],
        category: 'combat'
    },
    'blood_frenzy': {
        name: '血狂术',
        description: '激发血液狂暴的邪术',
        effects: [
            { type: 'spiritualPower', value: 700, description: '灵力 +700' },
            { type: 'attackBonus', value: 0.6, description: '攻击力 +60%' },
            { type: 'speedBonus', value: 0.3, description: '速度 +30%' }
        ],
        category: 'evil'
    },
    'blood_eye': {
        name: '血眼术',
        description: '血宗瞳术',
        effects: [
            { type: 'spiritualPower', value: 600, description: '灵力 +600' },
            { type: 'criticalChance', value: 0.25, description: '暴击率 +25%' },
            { type: 'stealthBonus', value: 0.3, description: '潜行能力 +30%' }
        ],
        category: 'stealth'
    },
    'blood_control': {
        name: '控血术',
        description: '控制血液的邪术',
        effects: [
            { type: 'spiritualPower', value: 650, description: '灵力 +650' },
            { type: 'healingBonus', value: 0.4, description: '治疗效果 +40%' },
            { type: 'bloodMagic', value: 0.5, description: '血系魔法 +50%' }
        ],
        category: 'support'
    },
    
    // 商会功法
    'merchant_way': {
        name: '商道',
        description: '商人的经营之道',
        effects: [
            { type: 'spiritualPower', value: 400, description: '灵力 +400' },
            { type: 'spiritStoneBonus', value: 0.3, description: '灵石获取 +30%' },
            { type: 'socialBonus', value: 0.2, description: '社交效果 +20%' }
        ],
        category: 'social'
    },
    'treasure_eye': {
        name: '鉴宝眼',
        description: '识别宝物的能力',
        effects: [
            { type: 'spiritualPower', value: 300, description: '灵力 +300' },
            { type: 'treasureBonus', value: 0.4, description: '宝物发现 +40%' },
            { type: 'spiritStoneBonus', value: 0.2, description: '灵石获取 +20%' }
        ],
        category: 'knowledge'
    },
    'negotiation': {
        name: '谈判术',
        description: '商业谈判的技巧',
        effects: [
            { type: 'spiritualPower', value: 350, description: '灵力 +350' },
            { type: 'socialBonus', value: 0.3, description: '社交效果 +30%' },
            { type: 'spiritStoneBonus', value: 0.15, description: '灵石获取 +15%' }
        ],
        category: 'social'
    },
    'appraisal': {
        name: '鉴定术',
        description: '鉴定物品价值的能力',
        effects: [
            { type: 'spiritualPower', value: 250, description: '灵力 +250' },
            { type: 'treasureBonus', value: 0.5, description: '宝物发现 +50%' },
            { type: 'knowledgeBonus', value: 0.2, description: '知识获取 +20%' }
        ],
        category: 'knowledge'
    },
    'treasure_finding': {
        name: '寻宝术',
        description: '寻找宝物的能力',
        effects: [
            { type: 'spiritualPower', value: 400, description: '灵力 +400' },
            { type: 'treasureBonus', value: 0.6, description: '宝物发现 +60%' },
            { type: 'explorationBonus', value: 0.3, description: '探索效率 +30%' }
        ],
        category: 'exploration'
    },
    'bargaining': {
        name: '讨价还价',
        description: '商业讨价还价的技巧',
        effects: [
            { type: 'spiritualPower', value: 200, description: '灵力 +200' },
            { type: 'spiritStoneBonus', value: 0.4, description: '灵石获取 +40%' },
            { type: 'socialBonus', value: 0.15, description: '社交效果 +15%' }
        ],
        category: 'social'
    }
};

// 获取功法效果描述
function getTechniqueEffectDescription(techniqueId) {
    const effect = learnedTechniqueEffects[techniqueId];
    if (!effect) {
        return '效果未知';
    }
    
    return effect.effects.map(e => e.description).join('、');
}

// 获取功法详细效果
function getTechniqueDetailedEffects(techniqueId) {
    return learnedTechniqueEffects[techniqueId] || null;
}
