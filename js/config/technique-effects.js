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
