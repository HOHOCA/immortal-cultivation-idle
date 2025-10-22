// NPC系统
// 处理NPC成长、互动、飞升等逻辑

// ==================== NPC认识系统 ====================

// 认识一个NPC
function meetNPC(npcId, reason = '偶然相遇') {
    if (!relationshipNPCs[npcId]) {
        console.error('NPC不存在:', npcId);
        return false;
    }
    
    // 检查是否已经认识
    if (!gameData.knownNPCs) {
        gameData.knownNPCs = [];
    }
    
    if (gameData.knownNPCs.includes(npcId)) {
        return false; // 已经认识了
    }
    
    // 添加到已认识列表
    gameData.knownNPCs.push(npcId);
    
    // 初始化NPC数据（如果还没有）
    if (!gameData.npcData) {
        gameData.npcData = {};
    }
    
    if (!gameData.npcData[npcId]) {
        const npcConfig = relationshipNPCs[npcId];
        gameData.npcData[npcId] = {
            id: npcId,
            name: npcConfig.name,
            realm: npcConfig.initialRealm,
            realmLevel: npcConfig.initialRealmLevel,
            breakthroughProgress: 0,
            growthSpeed: npcConfig.growthSpeed,
            growthBonus: 0,
            canAscend: npcConfig.canAscend,
            hasAscended: false,
            isInImmortalWorld: false,
            relationship: {
                favor: 0,
                loyalty: 50,
                trust: 50,
                level: 1
            },
            lastInteractions: {},
            relationshipHistory: [],
            receivedRewards: {}
        };
    }
    
    // 显示认识通知
    const npcConfig = relationshipNPCs[npcId];
    const handshakeIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle; margin-right: 4px;"><path d="M11,6H14L17,9V11.91L12.83,16.08L11,14.25V6M5,11V22H3V11H5M10,11V22H6V11H10M22,11V22H20V11H22M17,11V19.6L12.4,15L17,11Z"/></svg>';
    addLog(`<span class="log-important">${handshakeIcon}你结识了${npcConfig.name}（${sectGroupsMap[npcConfig.sect]?.name || '散修'}）- ${reason}</span>`);
    showNotification(`结识了${npcConfig.name}`, 'success');
    
    return true;
}

// 批量认识NPC（比如加入门派时）
function meetMultipleNPCs(npcIds, reason = '加入门派') {
    let count = 0;
    for (let npcId of npcIds) {
        if (meetNPC(npcId, reason)) {
            count++;
        }
    }
    return count;
}

// 根据门派获取NPC列表
function getNPCsBySect(sectKey) {
    const npcList = [];
    for (let npcId in relationshipNPCs) {
        const npc = relationshipNPCs[npcId];
        if (npc.sect === sectKey) {
            npcList.push(npcId);
        }
    }
    return npcList;
}

// 检查是否认识某个NPC
function hasMetNPC(npcId) {
    return gameData.knownNPCs && gameData.knownNPCs.includes(npcId);
}

// 获取未认识的NPC列表（可选：按门派筛选）
function getUnknownNPCs(sectKey = null) {
    const unknownNPCs = [];
    for (let npcId in relationshipNPCs) {
        if (!hasMetNPC(npcId)) {
            if (!sectKey || relationshipNPCs[npcId].sect === sectKey) {
                unknownNPCs.push(npcId);
            }
        }
    }
    return unknownNPCs;
}

// 随机遇到一个未认识的NPC
function meetRandomNPC(sectKey = null) {
    const unknownNPCs = getUnknownNPCs(sectKey);
    if (unknownNPCs.length === 0) {
        return null;
    }
    
    const randomIndex = Math.floor(Math.random() * unknownNPCs.length);
    const npcId = unknownNPCs[randomIndex];
    
    meetNPC(npcId, '偶然相遇');
    return npcId;
}

// NPC介绍新朋友
function introduceNewNPC(introducerNpcId) {
    const introducerConfig = relationshipNPCs[introducerNpcId];
    if (!introducerConfig) return null;
    
    // 优先介绍同门派的NPC
    let unknownNPCs = getUnknownNPCs(introducerConfig.sect);
    
    // 如果同门派没有未认识的，就介绍其他友好门派的NPC
    if (unknownNPCs.length === 0) {
        // 根据门派阵营决定可以介绍哪些门派的人
        const friendlySects = getFriendlySects(introducerConfig.sect);
        for (let sect of friendlySects) {
            const sectNPCs = getUnknownNPCs(sect);
            unknownNPCs = unknownNPCs.concat(sectNPCs);
        }
    }
    
    // 如果还是没有，就从所有未认识的NPC中随机选一个
    if (unknownNPCs.length === 0) {
        unknownNPCs = getUnknownNPCs();
    }
    
    if (unknownNPCs.length === 0) {
        return null; // 没有可介绍的NPC了
    }
    
    // 随机选择一个NPC介绍
    const randomIndex = Math.floor(Math.random() * unknownNPCs.length);
    const npcId = unknownNPCs[randomIndex];
    
    meetNPC(npcId, `${introducerConfig.name}的介绍`);
    
    // 被介绍的NPC初始好感度+5（因为有熟人介绍）
    if (gameData.npcData[npcId]) {
        gameData.npcData[npcId].relationship.favor += 5;
    }
    
    return npcId;
}

// 获取友好门派列表
function getFriendlySects(sectKey) {
    // 定义门派间的关系
    const sects = {
        righteous: ['sword', 'alchemy', 'formation', 'buddhist'], // 正派
        neutral: ['taoist', 'merchant'], // 中立
        evil: ['demon', 'evil_cult', 'blood_sect'] // 邪派
    };
    
    // 正派之间友好
    if (sects.righteous.includes(sectKey)) {
        return sects.righteous.filter(s => s !== sectKey);
    }
    
    // 中立与所有派系都可以互动
    if (sects.neutral.includes(sectKey)) {
        return [...sects.righteous, ...sects.neutral.filter(s => s !== sectKey), ...sects.evil];
    }
    
    // 邪派之间友好
    if (sects.evil.includes(sectKey)) {
        return sects.evil.filter(s => s !== sectKey);
    }
    
    return [];
}

// 根据门派贡献度解锁更多NPC
function unlockSectNPCsByContribution() {
    if (!gameData.sect || gameData.sect === 'rogue') {
        return;
    }
    
    const sectToNPCMapping = {
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
    
    const npcSectKey = sectToNPCMapping[gameData.sect];
    if (!npcSectKey) return;
    
    const contribution = gameData.sectContribution || 0;
    const sectNPCs = getNPCsBySect(npcSectKey);
    
    // 根据贡献度解锁不同角色的NPC
    let newMeetCount = 0;
    
    for (let npcId of sectNPCs) {
        if (hasMetNPC(npcId)) continue;
        
        const npc = relationshipNPCs[npcId];
        if (!npc) continue;
        
        // 贡献度阈值设定
        let requiredContribution = 0;
        if (npc.role === 'master' || npc.role === 'senior_sister' || npc.role === 'senior_brother') {
            requiredContribution = 0; // 加入门派时就认识
        } else if (npc.role === 'junior_brother' || npc.role === 'junior_sister') {
            requiredContribution = 50; // 贡献度50认识师弟师妹
        } else {
            requiredContribution = 100; // 其他角色需要更高贡献度
        }
        
        if (contribution >= requiredContribution) {
            if (meetNPC(npcId, '门派贡献')) {
                newMeetCount++;
            }
        }
    }
    
    return newMeetCount;
}

// NPC成长更新
function updateNPCGrowth() {
    if (!gameData.npcData) return;
    
    for (let npcId in gameData.npcData) {
        const npc = gameData.npcData[npcId];
        
        // 如果NPC已飞升或在仙界，跳过
        if (npc.hasAscended && !gameData.player.isInImmortalWorld) continue;
        
        // 计算成长速度
        const baseSpeed = npc.growthSpeed || 0.3;
        const bonusSpeed = npc.growthBonus || 0;
        
        // 师傅额外成长加成
        let masterBonus = 0;
        if (npc.isMaster) {
            // 正式师傅：根据玩家境界和好感度获得成长加速
            const playerRealmBonus = gameData.player.realm * 0.05; // 玩家境界越高，师傅成长越快
            const favorBonus = (npc.relationship.favor / 100) * 0.1; // 好感度越高，成长越快
            masterBonus = playerRealmBonus + favorBonus;
        } else if (npc.isGuestMaster) {
            // 客座师傅：成长速度较慢
            const favorBonus = (npc.relationship.favor / 100) * 0.05;
            masterBonus = favorBonus;
        }
        
        const totalSpeed = baseSpeed + bonusSpeed + masterBonus;
        
        // 增加突破进度（基于玩家的突破速度）
        const playerProgress = calculateBreakthroughProgress();
        npc.breakthroughProgress = (npc.breakthroughProgress || 0) + (playerProgress * totalSpeed);
        
        // 如果突破进度满，自动突破
        if (npc.breakthroughProgress >= 100) {
            npcBreakthrough(npcId);
        }
        
        // 如果达到渡劫期9层，自动飞升
        if (npc.realm >= 8 && npc.realmLevel >= 9 && !npc.hasAscended && npc.canAscend) {
            npcAscend(npcId);
        }
    }
}

// 计算玩家每次更新的突破进度
function calculateBreakthroughProgress() {
    const spiritPerSecond = calculateSpiritPerSecond();
    const currentRealm = gameData.player.isInImmortalWorld ? 
        immortalRealms[gameData.player.immortalRealm] : 
        realms[gameData.player.realm];
    
    if (!currentRealm) return 0;
    
    const requiredSpirit = currentRealm.requiredSpirit * Math.pow(1.5, gameData.player.realmLevel || gameData.player.immortalRealmLevel);
    return (spiritPerSecond / requiredSpirit) * 100 * (1 / 3600); // 每秒的进度
}

// NPC突破
function npcBreakthrough(npcId) {
    const npc = gameData.npcData[npcId];
    if (!npc) return;
    
    // 突破成功
    if (npc.realmLevel < 9) {
        npc.realmLevel++;
    } else {
        // 突破到下一境界
        npc.realm++;
        npc.realmLevel = 1;
        
        // 记录日志
        const realmName = realms[npc.realm]?.name || '未知境界';
        addLog(`<span class="log-success">${npc.name}突破到${realmName}！</span>`);
        
        // 如果玩家与NPC关系好，获得通知
        if (npc.relationship && npc.relationship.favor >= 40) {
            showNotification(`${npc.name}突破到${realmName}！`, 'success');
        }
    }
    
    npc.breakthroughProgress = 0;
}

// NPC飞升
function npcAscend(npcId) {
    const npc = gameData.npcData[npcId];
    if (!npc) return;
    
    npc.hasAscended = true;
    npc.ascensionTime = Date.now();
    
    // 如果玩家在仙界，NPC直接出现在仙界
    if (gameData.player.isInImmortalWorld) {
        npc.isInImmortalWorld = true;
        npc.immortalRealm = 0; // 地仙
        npc.immortalRealmLevel = 1;
        
        const starIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="#f1c40f" style="vertical-align: middle; margin-right: 4px;"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/></svg>';
        showNotification(`${npc.name}也飞升到仙界了！`, 'success');
        addLog(`<span class="log-important">${starIcon}${npc.name}成功飞升，来到仙界与你重逢！</span>`);
        
        // 关系值恢复80%
        if (npc.relationship) {
            npc.relationship.favor = Math.floor(npc.relationship.favor * 0.8);
        }
        
        // 触发重逢事件
        triggerNPCReunionEvent(npcId);
    } else {
        // 玩家还在凡间，记录NPC已飞升
        addLog(`<span class="log-important">${npc.name}已飞升仙界，期待未来重逢...</span>`);
        
        // 如果关系好，可以通过传讯符联系
        if (npc.relationship && npc.relationship.favor >= 60) {
            gameData.messageFromAscended = gameData.messageFromAscended || [];
            gameData.messageFromAscended.push({
                from: npcId,
                message: `${npc.name}：师兄/师姐，我已飞升仙界，期待与你重逢！`,
                time: Date.now()
            });
        }
    }
}

// 触发NPC重逢事件
function triggerNPCReunionEvent(npcId) {
    const npc = gameData.npcData[npcId];
    if (!npc) return;
    
    // 显示重逢对话
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.8); display: flex; align-items: center;
        justify-content: center; z-index: 2000;
    `;
    
    const card = document.createElement('div');
    card.style.cssText = `
        background: white; padding: 30px; border-radius: 8px;
        max-width: 500px; width: 90%; box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    `;
    
    card.innerHTML = `
        <div style="font-size: 24px; font-weight: 600; margin-bottom: 20px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 8px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#f1c40f"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/></svg>
            仙界重逢
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#f1c40f"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/></svg>
        </div>
        <div style="font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
            <strong>${npc.name}</strong>也飞升到了仙界！<br><br>
            "${npc.catchphrase || '终于再次见到你了！'}"<br><br>
            你们在仙界重逢，往日的情谊再次涌上心头...
        </div>
        <div style="background: #f0f0f0; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <div style="font-size: 14px; color: #666; margin-bottom: 10px;">关系变化：</div>
            <div style="font-size: 14px;">
                • 好感度恢复到 ${npc.relationship?.favor || 0}<br>
                • 可以继续培养关系<br>
                • 解锁仙界专属任务
            </div>
        </div>
        <button class="btn btn-primary" onclick="this.parentElement.parentElement.remove(); updateUI();">
            继续修炼
        </button>
    `;
    
    modal.appendChild(card);
    document.body.appendChild(modal);
}

// NPC互动
function interactWithNPC(npcId, interactionType) {
    const npc = gameData.npcData[npcId];
    const interaction = interactionTypes[interactionType];
    
    if (!npc || !interaction) {
        showNotification('无效的互动', 'error');
        return;
    }
    
    // 检查关系等级要求
    const currentLevel = getNPCRelationshipLevel(npcId);
    if (currentLevel < (interaction.requirements?.minLevel || 1)) {
        showNotification(`需要关系等级${interaction.requirements.minLevel}`, 'warning');
        return;
    }
    
    // 检查每日互动次数限制（不包括特殊事件）
    if (!interaction.special) {
        // 初始化每日互动计数
        if (!npc.dailyInteractionCount) {
            npc.dailyInteractionCount = 0;
            npc.dailyInteractionDate = new Date().toDateString();
        }
        
        // 检查是否是新的一天，如果是则重置计数
        const today = new Date().toDateString();
        if (npc.dailyInteractionDate !== today) {
            npc.dailyInteractionCount = 0;
            npc.dailyInteractionDate = today;
        }
        
        // 检查是否达到每日上限
        const dailyLimit = 10;
        if (npc.dailyInteractionCount >= dailyLimit) {
            showNotification(`今日与${npc.name}的互动次数已达上限（${dailyLimit}次）`, 'warning');
            return;
        }
    }
    
    // 检查冷却时间
    const lastInteraction = npc.lastInteractions?.[interactionType] || 0;
    const cooldownRemaining = interaction.cooldown - (Date.now() - lastInteraction);
    if (cooldownRemaining > 0) {
        const timeLeft = formatTime(Math.ceil(cooldownRemaining / 1000));
        showNotification(`冷却中，还需${timeLeft}`, 'warning');
        return;
    }
    
    // 检查资源
    if (interaction.cost) {
        for (let resource in interaction.cost) {
            if (gameData.player[resource] < interaction.cost[resource]) {
                showNotification(`${resource}不足`, 'warning');
                return;
            }
        }
        
        // 扣除资源
        for (let resource in interaction.cost) {
            gameData.player[resource] -= interaction.cost[resource];
        }
    }
    
    // 增加好感度
    npc.relationship = npc.relationship || { favor: 0, loyalty: 50, trust: 50, level: 1 };
    npc.relationship.favor = Math.min(100, npc.relationship.favor + interaction.favorGain);
    
    // 更新关系等级
    updateNPCRelationshipLevel(npcId);
    
    // 增加每日互动次数（不包括特殊事件）
    if (!interaction.special) {
        npc.dailyInteractionCount = (npc.dailyInteractionCount || 0) + 1;
    }
    
    // 记录互动
    npc.lastInteractions = npc.lastInteractions || {};
    npc.lastInteractions[interactionType] = Date.now();
    
    // 记录历史
    npc.relationshipHistory = npc.relationshipHistory || [];
    npc.relationshipHistory.push({
        action: interactionType,
        favor: interaction.favorGain,
        time: Date.now()
    });
    
    // 处理学习功法的特殊逻辑
    if (interactionType === 'learn_technique') {
        handleLearnTechnique(npcId);
        return; // 学习功法有自己的UI流程，直接返回
    }
    
    // 处理拜客座师傅的特殊逻辑
    if (interactionType === 'become_guest_master') {
        handleBecomeGuestMaster(npcId);
        return; // 拜客座师傅有自己的UI流程，直接返回
    }
    
    // 应用特殊效果
    if (interaction.effect) {
        if (interaction.effect.growthBonus) {
            npc.growthBonus = (npc.growthBonus || 0) + interaction.effect.growthBonus;
        }
        
        // 处理介绍新NPC的效果
        if (interaction.effect.meetNewNPC) {
            const introducedNPC = introduceNewNPC(npcId);
            if (introducedNPC && relationshipNPCs[introducedNPC]) {
                const handshakeIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle; margin-right: 4px;"><path d="M11,6H14L17,9V11.91L12.83,16.08L11,14.25V6M5,11V22H3V11H5M10,11V22H6V11H10M22,11V22H20V11H22M17,11V19.6L12.4,15L17,11Z"/></svg>';
                addLog(`<span class="log-important">${handshakeIcon}${npc.name}向你介绍了${relationshipNPCs[introducedNPC].name}！</span>`);
                showNotification(`认识了${relationshipNPCs[introducedNPC].name}`, 'success');
            } else {
                addLog(`${npc.name}表示暂时没有合适的人介绍给你`);
                showNotification('暂无可介绍的修士', 'info');
            }
        }
    }
    
    // 显示结果
    addLog(`与${npc.name}进行了「${interaction.name}」，好感度+${interaction.favorGain}`);
    showNotification(`好感度+${interaction.favorGain}`, 'success');

    // 若该互动包含对话，弹出对话框
    if (interaction.dialogue) {
        showNPCDialogue(npcId, interactionType);
    }
    
    // 检查是否升级
    const newLevel = getNPCRelationshipLevel(npcId);
    if (newLevel > currentLevel) {
        showRelationshipLevelUp(npcId, newLevel);
    }
    
    updateUI();
    saveGame();
}

// 显示NPC对话弹窗
function showNPCDialogue(npcId, interactionType) {
    const npcConfig = relationshipNPCs[npcId];
    if (!npcConfig) return;
    const level = getNPCRelationshipLevel(npcId);
    const modal = document.createElement('div');
    modal.style.cssText = `position: fixed; inset: 0; background: rgba(0,0,0,0.75); display: flex; align-items: center; justify-content: center; z-index: 2100;`;
    const card = document.createElement('div');
    card.style.cssText = `background: white; padding: 20px; border-radius: 8px; width: 90%; max-width: 520px; box-shadow: 0 10px 40px rgba(0,0,0,0.35);`;

    let playerLine, npcLine, extra;
    
    // 根据互动类型生成不同的对话内容
    switch(interactionType) {
        case 'greet':
            playerLine = '道友，近来可好？';
            npcLine = getNPCDialogueLine(npcId, level, interactionType) || npcConfig.catchphrase || '安好。';
            extra = '简单寒暄后，各自继续修行。';
            break;
        case 'chat':
            playerLine = '最近修炼如何？有无困惑之处？';
            npcLine = getNPCDialogueLine(npcId, level, interactionType) || npcConfig.catchphrase || '多交流，互相进步。';
            extra = '我们畅谈许久，彼此更加了解。';
            break;
        case 'observe':
            playerLine = '（你静静观察对方的修炼姿态与气息流转...）';
            npcLine = npcConfig.catchphrase || '...';
            extra = '观察学习让你对修炼有了新的领悟。';
            break;
        case 'gift':
            playerLine = '一点心意，不成敬意。';
            npcLine = level >= 3 ? '有心了，多谢。' : '客气了。';
            extra = `${npcConfig.name}收下了你的礼物，关系更进一步。`;
            break;
        case 'help_cultivate':
            playerLine = '我来助你修炼，以我灵力为引。';
            npcLine = level >= 4 ? '多谢相助，受益良多！' : '劳烦了。';
            extra = `你传输灵力助${npcConfig.name}修炼，对方修为精进。`;
            break;
        case 'spar':
            playerLine = '不如切磋一番，互相印证所学？';
            npcLine = level >= 3 ? '正合我意！' : '可以。';
            extra = `经过一番切磋，你们都有所收获。`;
            break;
        case 'ask_introduction':
            playerLine = '可否介绍几位道友相识？';
            npcLine = level >= 3 ? '自然可以，我这就安排。' : '容我想想...';
            extra = `${npcConfig.name}答应帮你引荐其他修士。`;
            break;
        default:
            playerLine = '...';
            npcLine = npcConfig.catchphrase || '...';
            extra = '互动完成。';
    }

    card.innerHTML = `
        <div style="display:flex; align-items:center; gap:8px; font-weight:600; font-size:18px; color:#2c3e50; margin-bottom:10px;">
            ${icons.getIcon('users')}与${npcConfig.name}的${interactionTypes[interactionType]?.name || '互动'}
        </div>
        <div style="background:#f8f9fa; padding:12px; border-radius:6px; margin-bottom:10px;">
            <div style="color:#34495e; margin-bottom:6px;">你：${playerLine}</div>
            <div style="color:#7f8c8d;">${npcConfig.name}：${npcLine}</div>
        </div>
        <div style="font-size:13px; color:#7f8c8d; margin-bottom:12px;">${extra}</div>
        <div style="text-align:right;">
            <button class="btn btn-primary" onclick="this.parentElement.parentElement.parentElement.remove()">好的</button>
        </div>
    `;

    modal.appendChild(card);
    document.body.appendChild(modal);
}

// 根据关系等级与互动类型获取一条对话
function getNPCDialogueLine(npcId, level, interactionType) {
    const npc = relationshipNPCs[npcId];
    if (!npc) return '';
    // 优先读取NPC专属台词，按等级匹配或降级
    if (npc.dialogues && npc.dialogues[interactionType]) {
        const dlg = npc.dialogues[interactionType];
        // 尝试当前等级或最接近的低等级
        for (let lv = level; lv >= 1; lv--) {
            if (dlg[lv] && dlg[lv].length > 0) {
                return dlg[lv][Math.floor(Math.random() * dlg[lv].length)];
            }
        }
    }
    // 兜底使用通用台词库
    const pool = getGenericDialoguePool(npc, interactionType, level);
    if (!pool || pool.length === 0) return '';
    return pool[Math.floor(Math.random() * pool.length)];
}

// 通用台词库（按角色、门派、关系等级提供默认台词）
function getGenericDialoguePool(npcConfig, interactionType, level) {
    const role = npcConfig.role || 'disciple';
    const sect = npcConfig.sect || 'rogue';
    const friendly = level >= 3;
    const veryClose = level >= 4;
    const pools = {
        observe: {
            base: ['...', '（默默观察）'],
            friendly: ['（气息沉稳，修为深厚）'],
            close: ['（已窥得其修炼之法）']
        },
        gift: {
            base: ['客气了。', '有心了。'],
            friendly: ['多谢，正需此物。'],
            close: ['你我不分彼此。']
        },
        help_cultivate: {
            base: ['劳烦了。'],
            friendly: ['多谢相助！'],
            close: ['受益良多，感激不尽。']
        },
        spar: {
            base: ['可以。', '来吧。'],
            friendly: ['正合我意！'],
            close: ['与你过招，痛快！']
        },
        ask_introduction: {
            base: ['容我想想...'],
            friendly: ['自然可以。'],
            close: ['我这就安排，包你满意。']
        },
        greet: {
            base: [
                '见礼。',
                '道友安好。',
                '今日风清气正，正宜修行。'
            ],
            friendly: [
                '好久不见，近来可还顺遂？',
                '见你气色更胜从前，可喜可贺。'
            ],
            close: [
                '见你如晤旧友，心甚慰。',
                '你来得正是时候。'
            ],
            sect: {
                sword: ['剑心不二，精进不休。'],
                alchemy: ['丹香袅袅，心神自定。'],
                formation: ['步步为营，方可稳固。'],
                buddhist: ['放下执念，方得自在。'],
                taoist: ['道法自然，随顺其心。'],
                demon: ['强者为尊，莫负此身。'],
                evil_cult: ['人心最难测，谨慎为上。'],
                blood_sect: ['血气汹涌，杀念渐起。'],
                merchant: ['有来有往，生意正旺。']
            },
            role: {
                master: ['修道贵在根基，切莫急躁。'],
                senior_sister: ['凡事不急不躁，稳中求进。'],
                senior_brother: ['多历练，少空谈。'],
                junior_brother: ['师兄/师姐，我们一起去修炼吧！'],
                junior_sister: ['我最近学了个新法门，想给你看。']
            }
        },
        chat: {
            base: [
                '修行路远，同道为伴。',
                '近来有所领悟，愿与你一述。'
            ],
            friendly: [
                '与你相谈，受益匪浅。',
                '有疑可直言，我尽力相助。'
            ],
            close: [
                '与你言语，颇有知己之感。',
                '若有难事，尽可来寻我。'
            ],
            sect: {
                sword: ['剑道贵在心明志坚。'],
                alchemy: ['丹道如人心，需细致温火。'],
                formation: ['阵法之妙，在乎变化。'],
                buddhist: ['诸行无常，缘起缘灭。'],
                taoist: ['无为而无不为。'],
                demon: ['力量才是最实在的凭依。'],
                evil_cult: ['机变百出，方能立足。'],
                blood_sect: ['血脉之力，亦可为道。'],
                merchant: ['天下熙熙，皆为利来。']
            },
            role: {
                master: ['你若稳扎稳打，前路自明。'],
                senior_sister: ['修行之外，亦要关照自身。'],
                senior_brother: ['有空可相互切磋一番。'],
                junior_brother: ['我最近在练基础，你能指点我吗？'],
                junior_sister: ['谢谢你一直以来的关照。']
            }
        }
    };
    const base = pools[interactionType] || pools.chat;
    let result = [...base.base];
    if (friendly) result = result.concat(base.friendly);
    if (veryClose) result = result.concat(base.close);
    if (base.sect[sect]) result = result.concat(base.sect[sect]);
    if (base.role[role]) result = result.concat(base.role[role]);
    return result;
}

// 获取NPC关系等级
function getNPCRelationshipLevel(npcId) {
    const npc = gameData.npcData[npcId];
    if (!npc || !npc.relationship) return 1;
    
    const favor = npc.relationship.favor;
    for (let level = 5; level >= 1; level--) {
        const levelData = relationshipLevels[level];
        if (favor >= levelData.minFavor) {
            return level;
        }
    }
    return 1;
}

// 更新NPC关系等级
function updateNPCRelationshipLevel(npcId) {
    const npc = gameData.npcData[npcId];
    if (!npc || !npc.relationship) return;
    
    const newLevel = getNPCRelationshipLevel(npcId);
    npc.relationship.level = newLevel;
}

// 显示关系等级提升
function showRelationshipLevelUp(npcId, newLevel) {
    const npc = gameData.npcData[npcId];
    const levelData = relationshipLevels[newLevel];
    
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.8); display: flex; align-items: center;
        justify-content: center; z-index: 2000;
    `;
    
    const card = document.createElement('div');
    card.style.cssText = `
        background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
        color: white; padding: 30px; border-radius: 8px;
        max-width: 500px; width: 90%; box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        text-align: center;
    `;
    
    card.innerHTML = `
        <div style="font-size: 32px; margin-bottom: 20px; display: flex; align-items: center; justify-content: center;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#ec407a"><path d="M12.1,18.55L10,16.45C5.4,12.36 2,9.28 2,5.5C2,3.5 3.5,2 5.5,2C6.74,2 7.96,2.54 8.88,3.46L12,6.58L15.12,3.46C16.04,2.54 17.26,2 18.5,2C20.5,2 22,3.5 22,5.5C22,9.28 18.6,12.36 14,16.45L12.1,18.55Z"/></svg>
        </div>
        <div style="font-size: 24px; font-weight: 600; margin-bottom: 20px;">
            关系提升！
        </div>
        <div style="font-size: 18px; margin-bottom: 20px;">
            与 <strong>${npc.name}</strong> 的关系提升到<br>
            <strong style="font-size: 24px;">${levelData.name}</strong>
        </div>
        <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <div style="font-size: 14px; opacity: 0.9; margin-bottom: 10px;">${levelData.description}</div>
            <div style="font-size: 14px;">解锁能力：</div>
            <div style="font-size: 14px;">${levelData.benefits.join('、')}</div>
        </div>
        <button class="btn" onclick="this.parentElement.parentElement.remove(); checkNPCRewards('${npcId}', ${newLevel});" 
                style="background: white; color: #3b82f6; font-weight: 600;">
            太好了！
        </button>
    `;
    
    modal.appendChild(card);
    document.body.appendChild(modal);
}

// 检查NPC奖励
function checkNPCRewards(npcId, level) {
    const npcConfig = relationshipNPCs[npcId];
    const npc = gameData.npcData[npcId];
    
    if (!npcConfig || !npc) return;
    
    // 检查好感度奖励
    const favor = npc.relationship.favor;
    if (npcConfig.rewards) {
        for (let rewardKey in npcConfig.rewards) {
            const requiredFavor = parseInt(rewardKey.replace('favor', ''));
            if (favor >= requiredFavor && !npc.receivedRewards?.[rewardKey]) {
                giveNPCReward(npcId, rewardKey);
            }
        }
    }
    
    updateUI();
}

// 给予NPC奖励
function giveNPCReward(npcId, rewardKey) {
    const npcConfig = relationshipNPCs[npcId];
    const npc = gameData.npcData[npcId];
    const reward = npcConfig.rewards[rewardKey];
    
    if (!reward) return;
    
    // 标记已领取
    npc.receivedRewards = npc.receivedRewards || {};
    npc.receivedRewards[rewardKey] = true;
    
    // 给予奖励
    if (reward.spiritualPower) {
        gameData.player.spiritualPower += reward.spiritualPower;
    }
    if (reward.spiritStone) {
        gameData.player.spiritStone += reward.spiritStone;
    }
    if (reward.pills) {
        gameData.player.pills += reward.pills;
    }
    if (reward.technique) {
        // 解锁功法
        gameData.techniques[reward.technique] = 1;
    }
    
    // 显示奖励
    showNotification(`获得奖励：${reward.description}`, 'success');
    addLog(`<span class="log-success">${npc.name}给予了你奖励：${reward.description}</span>`);
}

// 处理学习功法
function handleLearnTechnique(npcId) {
    const npc = gameData.npcData[npcId];
    const npcConfig = relationshipNPCs[npcId];
    
    if (!npc || !npcConfig) {
        showNotification('师傅信息错误', 'error');
        return;
    }
    
    // 获取可教授的功法
    const teachableTechniques = npcConfig.teachTechniques || [];
    if (teachableTechniques.length === 0) {
        showNotification('师傅暂无可传授的功法', 'info');
        updateUI();
        saveGame();
        return;
    }
    
    // 根据好感度解锁功法
    const favor = npc.relationship.favor;
    const availableTechniques = [];
    
    teachableTechniques.forEach((techId, index) => {
        // 好感度要求：前3个功法分别需要20/50/80
        const requiredFavor = index === 0 ? 20 : index === 1 ? 50 : 80;
        const isUnlocked = favor >= requiredFavor;
        const isLearned = gameData.learnedTechniques && gameData.learnedTechniques[techId];
        
        availableTechniques.push({
            id: techId,
            requiredFavor,
            isUnlocked,
            isLearned
        });
    });
    
    // 显示功法学习界面
    showTechniqueLearnModal(npcId, npcConfig, availableTechniques);
    
    // 更新UI
    updateUI();
    saveGame();
}

// 显示功法学习界面
function showTechniqueLearnModal(npcId, npcConfig, availableTechniques) {
    const npc = gameData.npcData[npcId];
    
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.85);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
    `;
    
    const card = document.createElement('div');
    card.style.cssText = `
        background: white;
        padding: 35px;
        border-radius: 12px;
        max-width: 700px;
        width: 90%;
        max-height: 85%;
        overflow-y: auto;
        box-shadow: 0 20px 60px rgba(0,0,0,0.5);
    `;
    
    // 使用统一的功法名称映射函数
    
    let html = '';
    
    html += `<div style="text-align: center; margin-bottom: 25px;">`;
    html += `<div style="font-size: 18px; font-weight: 600; color: #2c3e50; margin-bottom: 8px;">`;
    html += `<svg width="20" height="20" viewBox="0 0 24 24" fill="#f39c12" style="vertical-align: -3px; margin-right: 6px;">`;
    html += `<path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"/>`;
    html += `</svg>`;
    html += `向${npcConfig.name}请教功法`;
    html += `</div>`;
    html += `<div style="font-size: 13px; color: #7f8c8d;">`;
    html += `当前好感度：<strong style="color: #e74c3c;">${npc.relationship.favor}</strong>/100`;
    html += `</div>`;
    html += `</div>`;
    
    html += `<div style="margin-bottom: 20px; padding: 15px; background: #e3f2fd; border-radius: 8px; border-left: 4px solid #2196f3;">`;
    html += `<div style="font-size: 12px; color: #1565c0; line-height: 1.6;">`;
    html += `<svg width="14" height="14" viewBox="0 0 24 24" fill="#1565c0" style="vertical-align: -2px; margin-right: 4px;">`;
    html += `<path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>`;
    html += `</svg>`;
    html += `提升好感度可以解锁更多高级功法`;
    html += `</div>`;
    html += `</div>`;
    
    html += `<div style="display: grid; gap: 15px;">`;
    
    // 渲染功法列表
    availableTechniques.forEach(tech => {
        const techName = getTechniqueName(tech.id);
        
        html += `<div class="facility-item" style="padding: 20px; position: relative; ${!tech.isUnlocked ? 'opacity: 0.6;' : ''}">`;
        
        // 状态标签
        if (tech.isLearned) {
            html += `<div style="position: absolute; top: 15px; right: 15px; background: #28a745; color: white; padding: 4px 10px; border-radius: 12px; font-size: 11px; font-weight: 600;">`;
            html += `已学会`;
            html += `</div>`;
        } else if (!tech.isUnlocked) {
            html += `<div style="position: absolute; top: 15px; right: 15px; background: #6c757d; color: white; padding: 4px 10px; border-radius: 12px; font-size: 11px; font-weight: 600; display: flex; align-items: center; gap: 4px;">`;
            html += `<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"/></svg>`;
            html += `未解锁`;
            html += `</div>`;
        }
        
        html += `<div style="margin-bottom: 12px;">`;
        html += `<div style="font-size: 17px; font-weight: 600; color: #2c3e50; margin-bottom: 6px;">`;
        html += techName;
        html += `</div>`;
        html += `<div style="font-size: 12px; color: ${tech.isUnlocked ? '#27ae60' : '#e74c3c'};">`;
        html += `需要好感度：${tech.requiredFavor}`;
        html += `</div>`;
        html += `</div>`;
        
        // 学习按钮
        if (tech.isUnlocked && !tech.isLearned) {
            html += `<button class="btn btn-primary" onclick="learnTechniqueFromMaster('${npcId}', '${tech.id}'); this.parentElement.parentElement.parentElement.parentElement.remove();" style="width: 100%;">`;
            html += `学习此功法`;
            html += `</button>`;
        } else if (tech.isLearned) {
            html += `<div style="text-align: center; color: #28a745; font-size: 13px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 6px;">`;
            html += `<svg width="16" height="16" viewBox="0 0 24 24" fill="#28a745"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>`;
            html += `你已掌握此功法`;
            html += `</div>`;
        } else {
            html += `<div style="text-align: center; color: #6c757d; font-size: 13px;">`;
            html += `好感度不足，无法学习`;
            html += `</div>`;
        }
        
        html += `</div>`;
    });
    
    html += `</div>`;
    
    html += `<div style="margin-top: 25px; text-align: center;">`;
    html += `<button class="btn" onclick="this.parentElement.parentElement.parentElement.remove()" style="padding: 10px 30px;">`;
    html += `关闭`;
    html += `</button>`;
    html += `</div>`;
    
    card.innerHTML = html;
    modal.appendChild(card);
    document.body.appendChild(modal);
}

// 从师傅处学习功法
function learnTechniqueFromMaster(npcId, techniqueId) {
    const npcConfig = relationshipNPCs[npcId];
    
    if (!gameData.learnedTechniques) {
        gameData.learnedTechniques = {};
    }
    
    // 记录学习的功法
    gameData.learnedTechniques[techniqueId] = {
        learnedFrom: npcId,
        learnedAt: Date.now()
    };
    
    const techName = getTechniqueName(techniqueId);
    
    // 添加日志和通知
    const bookIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle; margin-right: 4px;"><path d="M18,22A2,2 0 0,0 20,20V4C20,2.89 19.1,2 18,2H12V9L9.5,7.5L7,9V2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18Z"/></svg>';
    addLog(`<span class="log-success">${bookIcon}你从${npcConfig.name}处学会了「${techName}」！</span>`);
    showNotification(`学会了${techName}！`, 'success');
    
    // 根据功法提升玩家属性
    if (typeof getTechniqueDetailedEffects === 'function') {
        const effects = getTechniqueDetailedEffects(techniqueId);
        if (effects) {
            effects.effects.forEach(effect => {
                switch (effect.type) {
                    case 'spiritualPower':
                        gameData.player.spiritualPower += effect.value;
                        break;
                    case 'attackBonus':
                        // 这里可以添加攻击力加成逻辑
                        break;
                    case 'movementSpeed':
                        // 这里可以添加移动速度加成逻辑
                        break;
                    // 可以根据需要添加更多效果类型
                }
            });
        }
    } else {
        // 备用方案：简单增加灵力
        gameData.player.spiritualPower += 500;
    }
    
    // 增加好感度
    const npc = gameData.npcData[npcId];
    if (npc) {
        npc.relationship.favor = Math.min(100, npc.relationship.favor + 5);
    }
    
    updateUI();
    saveGame();
}

// 处理拜客座师傅
function handleBecomeGuestMaster(npcId) {
    const npcConfig = relationshipNPCs[npcId];
    const npc = gameData.npcData[npcId];
    
    if (!npc || !npcConfig) {
        showNotification('NPC信息错误', 'error');
        return;
    }
    
    // 检查是否已经是正式师傅
    if (npc.isMaster) {
        showNotification('已经是你的正式师傅了', 'info');
        return;
    }
    
    // 检查是否已经是客座师傅
    if (npc.isGuestMaster) {
        showNotification('已经是你的客座师傅了', 'info');
        return;
    }
    
    // 检查好感度
    if (npc.relationship.favor < 60) {
        showNotification('好感度不足60，无法拜为客座师傅', 'warning');
        return;
    }
    
    // 检查资源
    if (gameData.player.spiritStone < 500) {
        showNotification('灵石不足500', 'warning');
        return;
    }
    
    if ((gameData.sectContribution || 0) < 50) {
        showNotification('门派贡献度不足50', 'warning');
        return;
    }
    
    // 扣除资源
    gameData.player.spiritStone -= 500;
    gameData.sectContribution -= 50;
    
    // 设置为客座师傅
    npc.isGuestMaster = true;
    npc.guestDiscipleshipDate = Date.now();
    npc.relationship.favor = Math.min(100, npc.relationship.favor + 10);
    
    // 记录到客座师傅列表
    if (!gameData.guestMasters) {
        gameData.guestMasters = [];
    }
    gameData.guestMasters.push(npcId);
    
    // 显示拜师仪式
    showGuestMasterCeremony(npcId, npcConfig);
}

// 显示客座师傅拜师仪式
function showGuestMasterCeremony(npcId, npcConfig) {
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
        z-index: 2001;
    `;
    
    const card = document.createElement('div');
    card.style.cssText = `
        background: white;
        padding: 35px;
        border-radius: 12px;
        max-width: 600px;
        width: 90%;
        box-shadow: 0 20px 60px rgba(0,0,0,0.5);
    `;
    
    let html = '';
    
    html += `<div style="text-align: center; margin-bottom: 25px;">`;
    html += `<svg width="48" height="48" viewBox="0 0 24 24" fill="#3b82f6" style="margin-bottom: 15px;"><path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"/></svg>`;
    html += `<h2 style="margin: 0 0 10px 0; font-size: 24px; color: #3b82f6;">`;
    html += `拜客座师傅`;
    html += `</h2>`;
    html += `</div>`;
    
    html += `<div style="background: #f8f9fa; padding: 20px; border-radius: 12px; margin-bottom: 25px;">`;
    html += `<div style="font-size: 13px; color: #7f8c8d; margin-bottom: 12px;">你恭敬地向${npcConfig.name}行礼</div>`;
    html += `<div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-bottom: 12px;">`;
    html += `<div style="font-size: 14px; color: #2c3e50; line-height: 1.8;">`;
    html += `"晚辈仰慕前辈修为，恳请拜入门下，学习贵派绝学！"`;
    html += `</div>`;
    html += `</div>`;
    
    html += `<div style="font-size: 13px; color: #7f8c8d; margin-bottom: 12px;">${npcConfig.name}微微颔首</div>`;
    html += `<div style="background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745;">`;
    html += `<div style="font-size: 14px; color: #155724; line-height: 1.8;">`;
    html += `"你有此心，我便收你为记名弟子。虽非正式门下，但只要你勤奋好学，我定倾囊相授！"`;
    html += `</div>`;
    html += `</div>`;
    html += `</div>`;
    
    html += `<div style="background: rgba(59,130,246,0.1); padding: 20px; border-radius: 12px; margin-bottom: 25px;">`;
    html += `<div style="font-size: 14px; font-weight: 600; color: #3b82f6; margin-bottom: 12px; text-align: center;">`;
    html += `客座师傅说明`;
    html += `</div>`;
    html += `<div style="font-size: 13px; color: #555; line-height: 2;">`;
    html += `<div style="display: flex; align-items: center; margin-bottom: 6px;">`;
    html += `<svg width="16" height="16" viewBox="0 0 24 24" fill="#3b82f6" style="margin-right: 8px; flex-shrink: 0;"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>`;
    html += `<span>可以学习客座师傅的所有功法</span>`;
    html += `</div>`;
    html += `<div style="display: flex; align-items: center; margin-bottom: 6px;">`;
    html += `<svg width="16" height="16" viewBox="0 0 24 24" fill="#3b82f6" style="margin-right: 8px; flex-shrink: 0;"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>`;
    html += `<span>可以拜多位客座师傅</span>`;
    html += `</div>`;
    html += `<div style="display: flex; align-items: center; margin-bottom: 6px;">`;
    html += `<svg width="16" height="16" viewBox="0 0 24 24" fill="#3b82f6" style="margin-right: 8px; flex-shrink: 0;"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>`;
    html += `<span>与正式师傅一样可以"请教功法"</span>`;
    html += `</div>`;
    html += `<div style="display: flex; align-items: center;">`;
    html += `<svg width="16" height="16" viewBox="0 0 24 24" fill="#e74c3c" style="margin-right: 8px; flex-shrink: 0;"><path d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/></svg>`;
    html += `<span>客座师傅的好感度提升速度较慢</span>`;
    html += `</div>`;
    html += `</div>`;
    html += `</div>`;
    
    html += `<div style="text-align: center;">`;
    html += `<button class="btn btn-primary" onclick="this.parentElement.parentElement.parentElement.remove(); updateUI();" style="padding: 12px 40px; font-size: 15px; font-weight: 600;">`;
    html += `完成拜师`;
    html += `</button>`;
    html += `</div>`;
    
    card.innerHTML = html;
    modal.appendChild(card);
    document.body.appendChild(modal);
    
    // 添加日志
    const graduationIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle; margin-right: 4px;"><path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"/></svg>';
    addLog(`<span class="log-success">${graduationIcon}你拜${npcConfig.name}为客座师傅！</span>`);
    showNotification(`拜${npcConfig.name}为客座师傅成功！`, 'success');
    
    updateUI();
    saveGame();
}

// 玩家成就影响师傅声望
function playerAchievementBoostMaster(achievementType, achievementLevel) {
    if (!gameData.masterId || !gameData.npcData[gameData.masterId]) return;
    
    const master = gameData.npcData[gameData.masterId];
    const masterName = relationshipNPCs[gameData.masterId]?.name || '师傅';
    
    // 根据成就类型给予不同的奖励
    let favorBonus = 0;
    let loyaltyBonus = 0;
    let growthBonus = 0;
    
    if (achievementType === 'realm_breakthrough') {
        // 玩家突破大境界，师傅感到欣慰
        favorBonus = 5 + achievementLevel * 2;
        growthBonus = 0.02;
    } else if (achievementType === 'combat_victory') {
        // 玩家战斗胜利，师傅感到骄傲
        favorBonus = 3 + achievementLevel;
        loyaltyBonus = 2;
    } else if (achievementType === 'contribution') {
        // 玩家门派贡献高，师傅脸上有光
        favorBonus = 8;
        loyaltyBonus = 5;
        growthBonus = 0.03;
    }
    
    // 应用奖励
    if (favorBonus > 0) {
        master.relationship.favor = Math.min(100, master.relationship.favor + favorBonus);
        addLog(`<span class="log-info">你的成就让${masterName}感到欣慰，好感度+${favorBonus}</span>`);
    }
    if (loyaltyBonus > 0) {
        master.relationship.loyalty = Math.min(100, master.relationship.loyalty + loyaltyBonus);
    }
    if (growthBonus > 0) {
        master.growthBonus = (master.growthBonus || 0) + growthBonus;
    }
    
    // 客座师傅也能获得一半的奖励
    if (gameData.guestMasters && gameData.guestMasters.length > 0) {
        for (let guestId of gameData.guestMasters) {
            const guest = gameData.npcData[guestId];
            if (guest) {
                guest.relationship.favor = Math.min(100, guest.relationship.favor + Math.floor(favorBonus / 2));
            }
        }
    }
}

// 初始化NPC数据（已改为按需初始化，只初始化已认识的NPC）
function initializeNPCData() {
    if (!gameData.npcData) {
        gameData.npcData = {};
    }
    
    // 确保 knownNPCs 存在
    if (!gameData.knownNPCs) {
        gameData.knownNPCs = [];
    }
    
    // 只初始化已认识的NPC
    for (let npcId of gameData.knownNPCs) {
        if (!gameData.npcData[npcId] && relationshipNPCs[npcId]) {
            const npcConfig = relationshipNPCs[npcId];
            gameData.npcData[npcId] = {
                id: npcId,
                name: npcConfig.name,
                realm: npcConfig.initialRealm,
                realmLevel: npcConfig.initialRealmLevel,
                breakthroughProgress: 0,
                growthSpeed: npcConfig.growthSpeed,
                growthBonus: 0,
                canAscend: npcConfig.canAscend,
                hasAscended: false,
                isInImmortalWorld: false,
                relationship: {
                    favor: 0,
                    loyalty: 50,
                    trust: 50,
                    level: 1
                },
                lastInteractions: {},
                relationshipHistory: [],
                receivedRewards: {}
            };
        }
    }
}

