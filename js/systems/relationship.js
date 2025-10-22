// 人际关系系统
// 处理人际关系界面显示和互动

// 渲染人际关系面板
function renderRelationshipsPanel() {
    const container = document.getElementById('relationshipsContent');
    if (!container) return;
    
    // 初始化NPC数据
    if (!gameData.npcData) {
        initializeNPCData();
    }
    
    // 确保 knownNPCs 存在
    if (!gameData.knownNPCs) {
        gameData.knownNPCs = [];
    }
    
    let html = '';
    
    // 如果还没认识任何NPC，显示提示
    if (gameData.knownNPCs.length === 0) {
        html = `
            <div style="text-align: center; padding: 60px 20px; color: #7f8c8d;">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="#95a5a6" style="margin-bottom: 20px;">
                    <path d="M16,13C15.71,13 15.38,13 15.03,13.05C16.19,13.89 17,15 17,16.5V19H23V16.5C23,14.17 18.33,13 16,13M8,13C5.67,13 1,14.17 1,16.5V19H15V16.5C15,14.17 10.33,13 8,13M8,11A3,3 0 0,0 11,8A3,3 0 0,0 8,5A3,3 0 0,0 5,8A3,3 0 0,0 8,11M16,11A3,3 0 0,0 19,8A3,3 0 0,0 16,5A3,3 0 0,0 13,8A3,3 0 0,0 16,11Z"/>
                </svg>
                <div style="font-size: 20px; font-weight: 600; margin-bottom: 10px;">暂无认识的修士</div>
                <div style="font-size: 14px; line-height: 1.8;">
                    加入门派、完成任务或遇到随机事件时<br>
                    会结识新的修士
                </div>
            </div>
        `;
        container.innerHTML = html;
        return;
    }
    
    // 按门派分组显示NPC
    const sectGroups = {
        sword: { name: '剑宗（正派）', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="#3498db" style="vertical-align: -2px; margin-right: 6px;"><path d="M6.5,21L5,19.5L12,12.5L10.5,11L7,14.5L5.5,13L9,9.5L7.5,8L3,12.5L1.5,11L8,4.5L9.5,6L11,4.5L12.5,6L14,4.5L22,12.5L20.5,14L16,9.5L14.5,11L18,14.5L16.5,16L13,12.5L11.5,14L18.5,21H6.5Z"/></svg>', npcs: [] },
        alchemy: { name: '丹宗（正派）', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="#e74c3c" style="vertical-align: -2px; margin-right: 6px;"><path d="M7,2V3H9V7.59L3.05,13.54C2.37,14.22 2,15.1 2,16C2,17.86 3.5,19.36 5.36,19.36H18.64C20.5,19.36 22,17.86 22,16C22,15.1 21.63,14.22 20.95,13.54L15,7.59V3H17V2H7Z"/></svg>', npcs: [] },
        formation: { name: '阵宗（正派）', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="#3b82f6" style="vertical-align: -2px; margin-right: 6px;"><path d="M12,2L22,8V16L12,22L2,16V8L12,2M12,4.15L4,9V15L12,19.85L20,15V9L12,4.15Z"/></svg>', npcs: [] },
        buddhist: { name: '佛宗（正派）', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="#f39c12" style="vertical-align: -2px; margin-right: 6px;"><path d="M12,2A3,3 0 0,1 15,5A3,3 0 0,1 12,8A3,3 0 0,1 9,5A3,3 0 0,1 12,2M12,9C16.42,9 20,10.79 20,13V15H4V13C4,10.79 7.58,9 12,9Z"/></svg>', npcs: [] },
        taoist: { name: '道宗（中立）', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="#16a085" style="vertical-align: -2px; margin-right: 6px;"><path d="M12,2A10,10 0 0,1 22,12A5,5 0 0,1 17,17C14.79,17 13,15.21 13,13A3,3 0 0,0 10,10C7.79,10 6,11.79 6,14A5,5 0 0,0 11,19A10,10 0 0,1 2,12A5,5 0 0,1 7,7C9.21,7 11,8.79 11,11A3,3 0 0,0 14,14C16.21,14 18,12.21 18,10A5,5 0 0,0 13,5A10,10 0 0,1 12,2Z"/></svg>', npcs: [] },
        demon: { name: '魔宗（反派）', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="#1d4ed8" style="vertical-align: -2px; margin-right: 6px;"><path d="M12,2C10,4 8,5 6,5C6,7 7,9 9,10C8,12 8,14 9,16C7,17 6,19 6,21C8,21 10,20 12,18C14,20 16,21 18,21C18,19 17,17 15,16C16,14 16,12 15,10C17,9 18,7 18,5C16,5 14,4 12,2Z"/></svg>', npcs: [] },
        evil_cult: { name: '邪教（反派）', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="#2c3e50" style="vertical-align: -2px; margin-right: 6px;"><path d="M12,2L2,7V17L12,22L22,17V7L12,2M12,4.15L20,8.5V15.5L12,19.85L4,15.5V8.5L12,4.15M12,7A2,2 0 0,0 10,9A2,2 0 0,0 12,11A2,2 0 0,0 14,9A2,2 0 0,0 12,7Z"/></svg>', npcs: [] },
        blood_sect: { name: '血煞门（反派）', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="#c0392b" style="vertical-align: -2px; margin-right: 6px;"><path d="M12,2C12,2 6,9 6,13A6,6 0 0,0 12,19A6,6 0 0,0 18,13C18,9 12,2 12,2Z"/></svg>', npcs: [] },
        merchant: { name: '商会（中立）', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="#d35400" style="vertical-align: -2px; margin-right: 6px;"><path d="M3,3H21V7H3V3M3,9H21V21H3V9M8,12V18H10V12H8M14,12V18H16V12H14Z"/></svg>', npcs: [] }
    };
    
    // 分类NPC（只显示已认识的）
    for (let npcId of gameData.knownNPCs) {
        const npcConfig = relationshipNPCs[npcId];
        if (!npcConfig) continue; // 跳过不存在的NPC
        
        const npc = gameData.npcData[npcId];
        
        if (sectGroups[npcConfig.sect]) {
            sectGroups[npcConfig.sect].npcs.push({ id: npcId, config: npcConfig, data: npc });
        }
    }
    
    // 渲染每个门派的NPC
    for (let sectId in sectGroups) {
        const sect = sectGroups[sectId];
        if (sect.npcs.length === 0) continue;
        
        html += `
            <div style="margin-bottom: 30px;">
                <div style="font-size: 18px; font-weight: 600; color: #2c3e50; margin-bottom: 15px; 
                            padding-bottom: 10px; border-bottom: 2px solid #3498db; display: flex; align-items: center; gap: 6px;">
                    <span>${sect.icon || ''}</span>
                    <span>${sect.name}</span>
                </div>
                <div style="display: grid; gap: 15px;">
        `;
        
        // 渲染NPC卡片
        for (let npcInfo of sect.npcs) {
            html += renderNPCCard(npcInfo.id, npcInfo.config, npcInfo.data);
        }
        
        html += `
                </div>
            </div>
        `;
    }
    
    container.innerHTML = html;
}

// 渲染单个NPC卡片
function renderNPCCard(npcId, npcConfig, npcData) {
    const relationship = npcData?.relationship || { favor: 0, level: 1 };
    const levelData = relationshipLevels[relationship.level];
    const realmName = realms[npcData?.realm || 0]?.name || '炼气期';
    const realmLevel = npcData?.realmLevel || 1;
    
    // 计算好感度进度
    const currentLevelData = relationshipLevels[relationship.level];
    const nextLevelData = relationshipLevels[Math.min(5, relationship.level + 1)];
    const progressInLevel = relationship.favor - currentLevelData.minFavor;
    const levelRange = currentLevelData.maxFavor - currentLevelData.minFavor;
    const progressPercent = Math.min(100, (progressInLevel / levelRange) * 100);
    
    // 判断NPC状态
    let statusText = '';
    let statusColor = '#27ae60';
    if (npcData?.hasAscended && !npcData.isInImmortalWorld) {
        statusText = '已飞升（可通过传讯符联系）';
        statusColor = '#f39c12';
    } else if (npcData?.hasAscended && npcData.isInImmortalWorld) {
        statusText = '在仙界';
        statusColor = '#3b82f6';
    }
    
    // 计算今日剩余互动次数
    const today = new Date().toDateString();
    const dailyLimit = 10;
    let dailyRemaining = dailyLimit;
    
    if (npcData?.dailyInteractionDate === today) {
        const count = npcData.dailyInteractionCount || 0;
        dailyRemaining = Math.max(0, dailyLimit - count);
    }
    
    return `
        <div class="facility-item" style="padding: 20px;">
            <!-- NPC头部信息 -->
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                <div style="flex: 1;">
                    <div style="font-size: 18px; font-weight: 600; color: #2c3e50; margin-bottom: 5px;">
                        ${npcConfig.name}
                        ${npcData?.isMaster ? `
                            <span style="display: inline-flex; align-items: center; background: linear-gradient(135deg, #f39c12, #e67e22); 
                                         color: white; padding: 4px 10px; border-radius: 12px; font-size: 11px; font-weight: 600; 
                                         margin-left: 8px; box-shadow: 0 2px 8px rgba(243,156,18,0.3);">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="white" style="margin-right: 4px;">
                                    <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"/>
                                </svg>
                                正式师傅
                            </span>
                        ` : npcData?.isGuestMaster ? `
                            <span style="display: inline-flex; align-items: center; background: linear-gradient(135deg, #3b82f6, #1d4ed8); 
                                         color: white; padding: 4px 10px; border-radius: 12px; font-size: 11px; font-weight: 600; 
                                         margin-left: 8px; box-shadow: 0 2px 8px rgba(59,130,246,0.3);">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="white" style="margin-right: 4px;">
                                    <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"/>
                                </svg>
                                客座师傅
                            </span>
                        ` : `
                            <span style="font-size: 12px; color: #7f8c8d; font-weight: normal; margin-left: 8px;">
                                ${getRoleDisplayName(npcConfig.role)}
                            </span>
                        `}
                    </div>
                    <div style="font-size: 12px; color: #7f8c8d; margin-bottom: 8px;">
                        ${npcConfig.appearance}
                    </div>
                    <div style="font-size: 13px; color: #3498db; margin-bottom: 5px;">
                        境界：${realmName} 第${realmLevel}层
                    </div>
                    ${statusText ? `
                        <div style="font-size: 12px; color: ${statusColor}; font-weight: 600;">
                            ${statusText}
                        </div>
                    ` : ''}
                </div>
                <div style="text-align: right;">
                    <div style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); 
                                color: white; padding: 8px 15px; border-radius: 20px; font-size: 14px; 
                                font-weight: 600; margin-bottom: 8px;">
                        ${levelData.name}
                    </div>
                    <div style="font-size: 12px; color: #7f8c8d;">
                        好感度: ${relationship.favor}/100
                    </div>
                    <div style="font-size: 11px; color: ${dailyRemaining > 3 ? '#27ae60' : dailyRemaining > 0 ? '#f39c12' : '#e74c3c'}; margin-top: 4px;">
                        今日互动: ${dailyRemaining}/${dailyLimit}
                    </div>
                </div>
            </div>
            
            <!-- 好感度进度条 -->
            <div style="margin-bottom: 15px;">
                <div style="display: flex; justify-content: space-between; font-size: 11px; color: #7f8c8d; margin-bottom: 5px;">
                    <span>${levelData.name}</span>
                    <span>${relationship.level < 5 ? `下一级: ${nextLevelData.name}` : '已达最高'}</span>
                </div>
                <div class="progress-bar" style="height: 12px;">
                    <div class="progress-fill" style="width: ${progressPercent}%; background: linear-gradient(90deg, #3b82f6, #1d4ed8);">
                    </div>
                </div>
            </div>
            
            <!-- NPC简介 -->
            <div style="background: #f8f9fa; padding: 12px; border-radius: 5px; margin-bottom: 15px;">
                <div style="font-size: 12px; color: #555; line-height: 1.6;">
                    ${npcConfig.appearance}
                </div>
            </div>
            
            <!-- 互动按钮 -->
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; margin-bottom: 15px;">
                ${Object.keys(interactionTypes).map(interactionType => 
                    renderInteractionButton(npcId, interactionType, npcData)
                ).join('')}
            </div>
            
            <!-- 详细信息按钮 -->
            <button class="btn" onclick="showNPCDetails('${npcId}')" style="width: 100%; margin-top: 10px;">
                查看详细信息
            </button>
        </div>
    `;
}

// 渲染互动按钮
function renderInteractionButton(npcId, interactionType, npcData) {
    const interaction = interactionTypes[interactionType];
    if (!interaction) return '';
    
    // 检查是否是师傅专属互动
    if (interaction.requirements?.masterOnly && !npcData?.isMaster && !npcData?.isGuestMaster) {
        return ''; // 非师傅不显示师傅专属互动
    }
    
    // 检查是否可以成为客座师傅
    if (interaction.requirements?.canBecomeGuest) {
        // 已经是正式师傅或客座师傅，不显示此按钮
        if (npcData?.isMaster || npcData?.isGuestMaster) {
            return '';
        }
        // 已经有正式师傅才能拜客座师傅
        if (!gameData.masterId) {
            return '';
        }
        // NPC必须可以教授功法
        const npcConfig = relationshipNPCs[npcId];
        if (!npcConfig || !npcConfig.teachTechniques || npcConfig.teachTechniques.length === 0) {
            return '';
        }
        // 好感度必须≥60
        if ((npcData?.relationship?.favor || 0) < 60) {
            return '';
        }
    }
    
    const relationship = npcData?.relationship || { level: 1 };
    const canInteract = relationship.level >= (interaction.requirements?.minLevel || 1);
    
    // 检查每日互动次数（不包括特殊事件）
    let reachedDailyLimit = false;
    if (!interaction.special && npcData) {
        const today = new Date().toDateString();
        const dailyLimit = 10;
        
        // 检查日期是否匹配
        if (npcData.dailyInteractionDate === today) {
            const count = npcData.dailyInteractionCount || 0;
            reachedDailyLimit = count >= dailyLimit;
        }
    }
    
    // 检查冷却
    const lastInteraction = npcData?.lastInteractions?.[interactionType] || 0;
    const cooldownRemaining = interaction.cooldown - (Date.now() - lastInteraction);
    const isOnCooldown = cooldownRemaining > 0;
    
    // 检查资源
    let hasResources = true;
    if (interaction.cost) {
        for (let resource in interaction.cost) {
            if (gameData.player[resource] < interaction.cost[resource]) {
                hasResources = false;
                break;
            }
        }
    }
    
    const disabled = !canInteract || isOnCooldown || !hasResources || reachedDailyLimit;
    
    let buttonText = interaction.name;
    if (reachedDailyLimit) {
        buttonText += ' (今日已达上限)';
    } else if (isOnCooldown) {
        const timeLeft = formatTime(Math.ceil(cooldownRemaining / 1000));
        buttonText += ` (${timeLeft})`;
    } else if (!canInteract) {
        buttonText += ` (需要关系${interaction.requirements.minLevel})`;
    } else if (!hasResources) {
        buttonText += ' (资源不足)';
    } else {
        // 显示好感度增加
        buttonText += ` (+${interaction.favorGain})`;
    }
    
    return `
        <button class="btn" onclick="interactWithNPC('${npcId}', '${interactionType}')" 
                ${disabled ? 'disabled' : ''} 
                title="${interaction.description}">
            ${buttonText}
        </button>
    `;
}

// 获取角色显示名称
function getRoleDisplayName(role) {
    const roleNames = {
        master: '掌门',
        senior_sister: '师姐',
        senior_brother: '师兄',
        junior_sister: '师妹',
        junior_brother: '师弟'
    };
    return roleNames[role] || role;
}

// 显示NPC详细信息
function showNPCDetails(npcId) {
    const npcConfig = relationshipNPCs[npcId];
    const npcData = gameData.npcData[npcId];
    
    if (!npcConfig || !npcData) return;
    
    const relationship = npcData.relationship || { favor: 0, level: 1, loyalty: 50, trust: 50 };
    const levelData = relationshipLevels[relationship.level];
    const realmName = realms[npcData.realm]?.name || '炼气期';
    
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.8); display: flex; align-items: center;
        justify-content: center; z-index: 2000; overflow-y: auto; padding: 20px;
    `;
    
    const card = document.createElement('div');
    card.style.cssText = `
        background: white; padding: 30px; border-radius: 8px;
        max-width: 700px; width: 100%; max-height: 90vh; overflow-y: auto;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    `;
    
    card.innerHTML = `
        <div style="font-size: 24px; font-weight: 600; margin-bottom: 20px; text-align: center;">
            ${npcConfig.name} 的详细信息
        </div>
        
        <!-- 基本信息 -->
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <div style="font-size: 16px; font-weight: 600; margin-bottom: 15px;">基本信息</div>
            <div style="font-size: 14px; line-height: 1.8;">
                <strong>门派：</strong>${sectGroupsMap[npcConfig.sect]?.name || npcConfig.sect}<br>
                <strong>身份：</strong>${getRoleDisplayName(npcConfig.role)}<br>
                <strong>境界：</strong>${realmName} 第${npcData.realmLevel}层<br>
                <strong>外貌：</strong>${npcConfig.appearance}
            </div>
        </div>
        
        <!-- 背景故事 -->
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <div style="font-size: 16px; font-weight: 600; margin-bottom: 15px;">背景故事</div>
            <div style="font-size: 14px; line-height: 1.8; color: #555;">
                ${npcConfig.backstory}
            </div>
        </div>
        
        <!-- 关系状态 -->
        <div style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); 
                    color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <div style="font-size: 16px; font-weight: 600; margin-bottom: 15px;">关系状态</div>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; font-size: 14px;">
                <div>
                    <div style="opacity: 0.8; margin-bottom: 5px;">关系等级</div>
                    <div style="font-size: 20px; font-weight: 600;">${levelData.name}</div>
                </div>
                <div>
                    <div style="opacity: 0.8; margin-bottom: 5px;">好感度</div>
                    <div style="font-size: 20px; font-weight: 600;">${relationship.favor}/100</div>
                </div>
                <div>
                    <div style="opacity: 0.8; margin-bottom: 5px;">忠诚度</div>
                    <div style="font-size: 20px; font-weight: 600;">${relationship.loyalty}/100</div>
                </div>
                <div>
                    <div style="opacity: 0.8; margin-bottom: 5px;">信任度</div>
                    <div style="font-size: 20px; font-weight: 600;">${relationship.trust}/100</div>
                </div>
            </div>
        </div>
        
        <!-- 喜好与厌恶 -->
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-bottom: 20px;">
            <div style="background: #d4edda; padding: 15px; border-radius: 8px;">
                <div style="font-size: 14px; font-weight: 600; color: #155724; margin-bottom: 10px; display: flex; align-items: center;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#155724" style="margin-right: 6px;">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
                    </svg>
                    喜欢
                </div>
                <div style="font-size: 13px; color: #155724; line-height: 1.6;">
                    ${npcConfig.likes.map(like => `<div style="display: flex; align-items: center; margin-bottom: 4px;"><svg width="8" height="8" viewBox="0 0 24 24" fill="#155724" style="margin-right: 6px; flex-shrink: 0;"><circle cx="12" cy="12" r="10"/></svg><span>${like}</span></div>`).join('')}
                </div>
            </div>
            <div style="background: #f8d7da; padding: 15px; border-radius: 8px;">
                <div style="font-size: 14px; font-weight: 600; color: #721c24; margin-bottom: 10px; display: flex; align-items: center;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#721c24" style="margin-right: 6px;">
                        <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
                    </svg>
                    厌恶
                </div>
                <div style="font-size: 13px; color: #721c24; line-height: 1.6;">
                    ${npcConfig.dislikes.map(dislike => `<div style="display: flex; align-items: center; margin-bottom: 4px;"><svg width="8" height="8" viewBox="0 0 24 24" fill="#721c24" style="margin-right: 6px; flex-shrink: 0;"><circle cx="12" cy="12" r="10"/></svg><span>${dislike}</span></div>`).join('')}
                </div>
            </div>
        </div>
        
        <!-- 可教授功法 -->
        ${npcConfig.teachTechniques && npcConfig.teachTechniques.length > 0 ? `
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <div style="font-size: 16px; font-weight: 600; margin-bottom: 15px;">可教授功法</div>
            <div style="font-size: 14px; color: #555;">
                ${npcConfig.teachTechniques.map(tech => {
                    // 使用统一的功法名称映射函数
                    const techName = getTechniqueName(tech);
                    return `• ${techName}`;
                }).join('<br>')}
            </div>
        </div>
        ` : ''}
        
        <!-- 关系历史 -->
        ${npcData.relationshipHistory && npcData.relationshipHistory.length > 0 ? `
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <div style="font-size: 16px; font-weight: 600; margin-bottom: 15px;">最近互动记录</div>
            <div style="max-height: 150px; overflow-y: auto;">
                ${npcData.relationshipHistory.slice(-10).reverse().map(record => `
                    <div style="font-size: 13px; padding: 8px; border-bottom: 1px solid #e0e0e0;">
                        ${interactionTypes[record.action]?.name || record.action} 
                        <span style="color: #27ae60;">+${record.favor}</span>
                        <span style="float: right; color: #7f8c8d;">${formatTime((Date.now() - record.time) / 1000)}前</span>
                    </div>
                `).join('')}
            </div>
        </div>
        ` : ''}
        
        <button class="btn btn-primary" onclick="this.parentElement.parentElement.remove();" style="width: 100%;">
            关闭
        </button>
    `;
    
    modal.appendChild(card);
    document.body.appendChild(modal);
}

// 门派分组（用于显示）
const sectGroupsMap = {
    sword: { name: '剑宗' },
    alchemy: { name: '丹宗' },
    formation: { name: '阵宗' },
    buddhist: { name: '佛宗' },
    taoist: { name: '道宗' },
    demon: { name: '魔宗' },
    evil_cult: { name: '邪教' },
    blood_sect: { name: '血煞门' },
    merchant: { name: '商会' }
};

