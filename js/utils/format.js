// 格式化和显示相关工具函数

// 格式化数字显示
function formatNumber(num) {
    if (typeof num !== 'number' || isNaN(num)) {
        return '0';
    }
    
    if (num >= 1e12) {
        return (num / 1e12).toFixed(1) + 'T';
    } else if (num >= 1e9) {
        return (num / 1e9).toFixed(1) + 'B';
    } else if (num >= 1e6) {
        return (num / 1e6).toFixed(1) + 'M';
    } else if (num >= 1e3) {
        return (num / 1e3).toFixed(1) + 'K';
    } else {
        return Math.floor(num).toString();
    }
}

// 格式化时间显示
function formatTime(seconds) {
    if (seconds < 60) {
        return `${Math.floor(seconds)}秒`;
    } else if (seconds < 3600) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}分${remainingSeconds}秒`;
    } else {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        return `${hours}小时${minutes}分钟`;
    }
}

// 格式化日期显示
function formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// 格式化百分比
function formatPercentage(value, decimals = 1) {
    return `${(value * 100).toFixed(decimals)}%`;
}

// 格式化货币（灵石）
function formatCurrency(amount) {
    return formatNumber(amount) + ' 灵石';
}

// 格式化战斗力
function formatCombatPower(power) {
    return formatNumber(power) + ' 战力';
}

// 格式化境界显示
function formatRealm(realm, level) {
    const realmName = realms[realm]?.name || '未知';
    return `${realmName} 第${level}层`;
}

// 格式化属性显示
function formatElement(element, power) {
    if (!element || element === 'none') {
        return '未选择';
    }
    
    const elementData = elementsData[element];
    if (!elementData) {
        return '未知';
    }
    
    return `${elementData.name} Lv.${power || 0}`;
}

// 格式化门派显示
function formatSect(sectId) {
    if (!sectId || sectId === 'rogue') {
        return '散修';
    }
    
    const sect = sects[sectId];
    return sect ? sect.name : '未知门派';
}

// 格式化奖励显示
function formatRewards(rewards) {
    if (!rewards) return '';
    
    const parts = [];
    for (let key in rewards) {
        const amount = rewards[key];
        const name = getResourceName(key);
        parts.push(`${name}+${formatNumber(amount)}`);
    }
    
    return parts.join(' ');
}

// 格式化消耗显示
function formatCost(cost) {
    if (!cost) return '';
    
    const parts = [];
    for (let key in cost) {
        const amount = cost[key];
        const name = getResourceName(key);
        parts.push(`${name}:${formatNumber(amount)}`);
    }
    
    return parts.join(', ');
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
        contribution: '贡献度',
        experience: '经验'
    };
    return names[resKey] || resKey;
}

// 格式化进度条
function formatProgress(current, max, showPercentage = true) {
    const percentage = Math.min(100, (current / max) * 100);
    const text = showPercentage ? `${percentage.toFixed(1)}%` : `${formatNumber(current)}/${formatNumber(max)}`;
    return {
        percentage: percentage,
        text: text,
        width: `${percentage}%`
    };
}

// 格式化列表显示
function formatList(items, maxItems = 5) {
    if (!items || items.length === 0) {
        return '无';
    }
    
    if (items.length <= maxItems) {
        return items.join(', ');
    } else {
        const visible = items.slice(0, maxItems);
        const remaining = items.length - maxItems;
        return `${visible.join(', ')} 等${remaining}个`;
    }
}

// 格式化技能显示
function formatSkill(skillId) {
    const skill = combatSkills[skillId];
    if (!skill) return '未知技能';
    
    return `${skill.name} (伤害:${skill.damage}x, 消耗:${skill.cost}灵力)`;
}

// 格式化装备显示
function formatEquipment(equipmentId) {
    const equipment = combatEquipment[equipmentId];
    if (!equipment) return '未知装备';
    
    const stats = [];
    if (equipment.attack) stats.push(`攻击+${equipment.attack}`);
    if (equipment.defense) stats.push(`防御+${equipment.defense}`);
    if (equipment.speed) stats.push(`速度+${equipment.speed}`);
    if (equipment.critical) stats.push(`暴击+${formatPercentage(equipment.critical)}`);
    
    return `${equipment.name} (${stats.join(', ')})`;
}

// 格式化成就显示
function formatAchievement(achievement) {
    if (!achievement) return '未知成就';
    
    const stars = '⭐'.repeat(Math.min(3, achievement.category === 'hidden' ? 3 : 1));
    return `${stars} ${achievement.name}`;
}

// 格式化NPC关系显示
function formatRelationship(relationship) {
    if (!relationship) return '陌生';
    
    const favor = relationship.favor || 0;
    const loyalty = relationship.loyalty || 0;
    const trust = relationship.trust || 0;
    
    if (favor >= 80 && loyalty >= 80 && trust >= 80) return '生死之交';
    if (favor >= 60 && loyalty >= 60 && trust >= 60) return '知己好友';
    if (favor >= 40 && loyalty >= 40 && trust >= 40) return '普通朋友';
    if (favor >= 20 && loyalty >= 20 && trust >= 20) return '点头之交';
    if (favor < 20 && loyalty < 20 && trust < 20) return '陌生';
    
    return '关系复杂';
}

// 格式化门派任务显示
function formatSectTask(taskId) {
    const task = sectTasks[taskId];
    if (!task) return '未知任务';
    
    const duration = formatTime(task.duration);
    const rewards = formatRewards(task.rewards);
    const cost = formatCost(task.cost);
    
    return `${task.name} (${duration}, 奖励:${rewards}, 消耗:${cost})`;
}

// 格式化Boss显示
function formatBoss(bossId) {
    const boss = bossesData[bossId];
    if (!boss) return '未知Boss';
    
    const power = formatCombatPower(boss.power);
    const rewards = formatRewards(boss.rewards);
    
    return `${boss.name} (${power}, 奖励:${rewards})`;
}

// 格式化副本显示
function formatDungeon(dungeonId) {
    const dungeon = dungeonsData[dungeonId];
    if (!dungeon) return '未知副本';
    
    const difficulty = '★'.repeat(dungeon.difficulty);
    const rewards = formatRewards(dungeon.rewards);
    
    return `${dungeon.name} (难度:${difficulty}, 奖励:${rewards})`;
}

// 功法名称映射表
function getTechniqueName(techniqueId) {
    const techniqueNames = {
        // 基础功法
        'basic': '基础心法',
        'fire_path': '火焰之道',
        'water_path': '水之心法',
        'body_refining': '炼体诀',
        
        // 进阶功法
        'advanced': '高级心法',
        'sword_mastery': '剑意心经',
        'spell_mastery': '法术精通',
        
        // 顶级功法
        'supreme': '至尊功法',
        'heaven_dao': '天道玄功',
        'void_secret': '虚空秘典',
        
        // 飞升功法
        'immortal_foundation': '仙基心法',
        'celestial_power': '仙元功',
        'eternal_dao': '永恒大道',
        
        // NPC传授功法
        'basic_sword': '基础剑法',
        'heaven_sword': '天剑诀',
        'righteous_sword': '正气剑法',
        'demon_slaying': '除魔剑法',
        'basic_alchemy': '基础炼丹',
        'master_alchemy': '炼丹大师',
        'nine_turn_pill': '九转金丹',
        'herb_cultivation': '药材培育',
        'formula_innovation': '丹方创新',
        'herb_master': '药材大师',
        'basic_formation': '基础阵法',
        'master_formation': '阵法大师',
        'heaven_earth_formation': '天地大阵',
        'defense_formation': '防御阵法',
        'barrier_master': '结界精通',
        'buddha_palm': '如来神掌',
        'zen_meditation': '禅定功',
        'buddha_light': '佛光普照',
        'compassion_heart': '慈悲心法',
        'wisdom_light': '般若智慧',
        'tao_nature': '道法自然',
        'five_thunder': '五雷正法',
        'immortal_sword': '仙剑术',
        'cloud_walking': '云游术',
        'sword_flight': '御剑飞行',
        'talisman_art': '符箓术',
        'demon_power': '魔神功',
        'blood_sacrifice': '血祭术',
        'soul_devouring': '噬魂术',
        'blood_magic': '血煞功',
        'berserk': '狂暴术',
        'illusion_magic': '幻术',
        'mind_control': '控心术',
        'dark_curse': '暗黑诅咒',
        'soul_manipulation': '操魂术',
        'charm_art': '魅术',
        'seduction': '诱惑术',
        'shadow_walk': '暗影步',
        'poison_art': '毒术',
        'blood_god': '血神功',
        'life_devouring': '吞生术',
        'blood_sea': '血海滔天',
        'killing_blade': '杀戮刀法',
        'blood_frenzy': '血狂',
        'blood_eye': '血瞳术',
        'blood_control': '血控术',
        'merchant_way': '商道',
        'treasure_eye': '鉴宝眼',
        'negotiation': '谈判术',
        'appraisal': '鉴宝术',
        'treasure_finding': '寻宝术',
        'bargaining': '讨价还价'
    };
    
    return techniqueNames[techniqueId] || techniqueId;
}

// 格式化功法显示
function formatTechnique(techniqueId, level = 0) {
    const name = getTechniqueName(techniqueId);
    return level > 0 ? `${name} Lv.${level}` : name;
}
