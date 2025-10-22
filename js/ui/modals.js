// 模态框和弹窗相关功能

// 通用模态框显示函数
function showModal(title, content, buttons = []) {
    // 先移除所有现有的模态框
    const existingModals = document.querySelectorAll('[data-modal="true"]');
    existingModals.forEach(modal => modal.remove());
    
    // 创建一个完全独立的模态框
    const modal = document.createElement('div');
    modal.setAttribute('data-modal', 'true');
    
    // 使用内联样式，完全独立
    modal.style.position = 'fixed';
    modal.style.top = '0px';
    modal.style.left = '0px';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
    modal.style.zIndex = '999999';
    modal.style.display = 'block';
    modal.style.margin = '0';
    modal.style.padding = '0';
    modal.style.boxSizing = 'border-box';
    
    // 创建内容卡片
    const card = document.createElement('div');
    
    // 计算窗口中心位置
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const cardWidth = Math.min(600, window.innerWidth - 40);
    const cardHeight = Math.min(600, window.innerHeight - 40);
    
    card.style.position = 'absolute';
    card.style.left = (centerX - cardWidth / 2) + 'px';
    card.style.top = (centerY - cardHeight / 2) + 'px';
    card.style.width = cardWidth + 'px';
    card.style.maxHeight = cardHeight + 'px';
    card.style.backgroundColor = 'white';
    card.style.padding = '30px';
    card.style.borderRadius = '8px';
    card.style.boxShadow = '0 10px 40px rgba(0,0,0,0.5)';
    card.style.overflow = 'auto';
    card.style.boxSizing = 'border-box';
    
    let html = '';
    
    if (title) {
        html += `<div class="modal-header" style="margin-bottom: 20px;">`;
        html += `<h2 style="margin: 0; font-size: 20px; color: #2c3e50;">${title}</h2>`;
        html += `</div>`;
    }
    
    html += `<div class="modal-body">`;
    html += content;
    html += `</div>`;
    
    if (buttons && buttons.length > 0) {
        html += `<div class="modal-footer" style="margin-top: 20px; display: flex; gap: 10px; justify-content: flex-end;">`;
        buttons.forEach(btn => {
            const btnClass = btn.primary ? 'btn btn-primary' : 'btn';
            html += `<button class="${btnClass}" onclick="${btn.onclick}">${btn.text}</button>`;
        });
        html += `</div>`;
    }
    
    card.innerHTML = html;
    modal.appendChild(card);
    
    // 点击背景关闭（可选）
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // 确保模态框在页面最顶层，不受其他元素影响
    document.body.appendChild(modal);
    
    return modal;
}

// 关闭模态框
function closeModal() {
    // 关闭所有模态框
    const modals = document.querySelectorAll('[data-modal="true"]');
    modals.forEach(modal => {
        if (modal.parentElement) {
            modal.remove();
        }
    });
    
    // 也尝试通过ID关闭旧的模态框
    const specificModals = ['dungeonExplorationModal', 'sectModal'];
    specificModals.forEach(id => {
        const modal = document.getElementById(id);
        if (modal) {
            if (modal.parentElement) {
                modal.remove();
            }
        }
    });
}

// 显示门派选择界面
function showSectSelection() {
    const sectModal = document.createElement('div');
    sectModal.id = 'sectModal';
    sectModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1001;
    `;
    
    const sectCard = document.createElement('div');
    sectCard.style.cssText = `
        background: white;
        padding: 30px;
        border-radius: 8px;
        max-width: 700px;
        width: 90%;
        max-height: 80%;
        overflow-y: auto;
        box-shadow: 0 10px 40px rgba(0,0,0,0.5);
    `;
    
    let html = '';
    
    html += `<h2 style="margin: 0 0 10px 0; font-size: 22px; color: #2c3e50;">选择门派</h2>`;
    html += `<p style="color: #7f8c8d; margin-bottom: 20px; font-size: 13px;">你已达到筑基期，可以选择加入一个门派，获得特殊加成</p>`;
    
    html += `<div style="background: #f0f8ff; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #3498db;">`;
    html += `<div style="font-size: 14px; font-weight: 600; color: #2c3e50; margin-bottom: 8px;">📖 门派分类</div>`;
    html += `<div style="font-size: 12px; color: #555; line-height: 1.6;">`;
    html += `<strong style="color: #27ae60;">正派</strong>：剑宗、丹宗、阵宗、佛宗 - 正义之道，帮助魔修会降低好感<br>`;
    html += `<strong style="color: #3498db;">中立</strong>：道宗、商会、散修 - 中立无争，不受阵营影响<br>`;
    html += `<strong style="color: #e74c3c;">反派</strong>：魔宗、邪教、血煞门 - 邪恶之道，会被正派敌视`;
    html += `</div>`;
    html += `</div>`;
    
    html += `<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">`;
    
    for (let sectId in sects) {
        const sect = sects[sectId];
        
        html += `<div class="facility-item" style="cursor: pointer; transition: all 0.2s;" 
                 onclick="joinSect('${sectId}')"
                 onmouseover="this.style.borderColor='${sect.color}'"
                 onmouseout="this.style.borderColor='#e0e0e0'">`;
        html += `<div style="font-size: 16px; font-weight: 600; color: ${sect.color}; margin-bottom: 8px;">`;
        html += sect.name;
        html += `</div>`;
        html += `<div style="font-size: 12px; color: #666; margin-bottom: 10px;">`;
        html += sect.desc;
        html += `</div>`;
        
        // 显示警告信息（如果有）
        if (sect.warning) {
            html += `<div style="font-size: 11px; color: #e74c3c; background: #fee; padding: 8px; border-radius: 4px; margin-bottom: 10px;">`;
            html += sect.warning;
            html += `</div>`;
        }
        
        html += `<div style="font-size: 11px; color: #27ae60;">`;
        
        // 显示加成
        if (sect.benefits.spiritualPowerBonus) {
            html += `<div>• 灵力获取 +${(sect.benefits.spiritualPowerBonus * 100).toFixed(0)}%</div>`;
        }
        if (sect.benefits.breakthroughBonus) {
            html += `<div>• 突破成功率 +${(sect.benefits.breakthroughBonus * 100).toFixed(0)}%</div>`;
        }
        if (sect.benefits.pillProduction) {
            html += `<div>• 丹房产出 +${sect.benefits.pillProduction}</div>`;
        }
        if (sect.benefits.spiritStoneBonus) {
            html += `<div>• 灵石获取 +${(sect.benefits.spiritStoneBonus * 100).toFixed(0)}%</div>`;
        }
        if (sect.benefits.facilityBonus) {
            html += `<div>• 设施效果 +${(sect.benefits.facilityBonus * 100).toFixed(0)}%</div>`;
        }
        if (sect.benefits.allBonus) {
            html += `<div>• 全属性 +${(sect.benefits.allBonus * 100).toFixed(0)}%</div>`;
        }
        
        html += `</div>`;
        html += `</div>`;
    }
    
    html += `</div>`;
    
    sectCard.innerHTML = html;
    sectModal.appendChild(sectCard);
    document.body.appendChild(sectModal);
}

// 加入门派
function joinSect(sectId) {
    gameData.sect = sectId;
    const sect = sects[sectId];
    addLog(`<span class="log-success">${getSvg('temple')} 你加入了${sect.name}！</span>`);
    
    const modal = document.getElementById('sectModal');
    if (modal) {
        modal.remove();
    }
    
    // 散修无需选择师傅
    if (sectId === 'rogue') {
        showNotification('你选择了散修之路，自由自在！', 'success');
        renderSectContent();
        updateUI();
        saveGame();
        return;
    }
    
    // 加入门派成功，不再自动要求选择师傅
    showNotification(`成功加入${sect.name}！可以在门派界面选择拜师`, 'success');
    
    // 认识门派中的NPC（师兄师姐等）
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
    
    const npcSectKey = sectToNPCMapping[sectId];
    if (npcSectKey && typeof meetMultipleNPCs === 'function') {
        const sectNPCs = [];
        for (let npcId in relationshipNPCs) {
            if (relationshipNPCs[npcId].sect === npcSectKey) {
                sectNPCs.push(npcId);
            }
        }
        if (sectNPCs.length > 0) {
            meetMultipleNPCs(sectNPCs, '加入门派');
        }
    }
    
    renderSectContent();
    updateUI();
    saveGame();
}

// 显示选择师傅界面
function showMasterSelection(sectId) {
    const sect = sects[sectId];
    
    // 获取该门派的NPC
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
    
    const npcSectKey = sectToNPCMapping[sectId];
    
    if (!npcSectKey) {
        // 如果没有对应的NPC门派，直接完成加入
        renderSectContent();
        updateUI();
        saveGame();
        return;
    }
    
    // 获取可选的师傅（所有同门都可以选）
    const availableMasters = [];
    for (let npcId in relationshipNPCs) {
        const npc = relationshipNPCs[npcId];
        if (npc.sect === npcSectKey) {
            availableMasters.push({ id: npcId, config: npc });
        }
    }
    
    if (availableMasters.length === 0) {
        // 没有可用的师傅，直接完成加入
        renderSectContent();
        updateUI();
        saveGame();
        return;
    }
    
    // 创建选择师傅的模态框
    const masterModal = document.createElement('div');
    masterModal.id = 'masterSelectionModal';
    masterModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.85);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1003;
    `;
    
    const masterCard = document.createElement('div');
    masterCard.style.cssText = `
        background: white;
        padding: 35px;
        border-radius: 12px;
        max-width: 800px;
        width: 90%;
        max-height: 85%;
        overflow-y: auto;
        box-shadow: 0 15px 50px rgba(0,0,0,0.4);
    `;
    
    let html = '';
    
    html += `<div style="text-align: center; margin-bottom: 25px;">`;
    html += `<h2 style="margin: 0 0 10px 0; font-size: 24px; color: ${sect.color};">拜入${sect.name}</h2>`;
    html += `<p style="color: #7f8c8d; font-size: 14px; line-height: 1.6;">`;
    html += `作为新入门的弟子，你需要选择一位师傅<br>`;
    html += `师傅将指导你的修炼，传授独门功法，并在你需要时提供帮助`;
    html += `</p>`;
    html += `</div>`;
    
    html += `<div style="display: grid; gap: 20px;">`;
    
    // 渲染每个可选的师傅
    for (let master of availableMasters) {
        const npc = master.config;
        const roleNames = {
            master: '掌门',
            senior_brother: '师兄',
            senior_sister: '师姐',
            junior_brother: '师弟',
            junior_sister: '师妹'
        };
        const roleName = roleNames[npc.role] || npc.role;
        const realmName = realms[npc.initialRealm]?.name || '未知';
        
        html += `<div class="facility-item" style="padding: 25px; cursor: pointer; transition: all 0.3s; position: relative;"
                     onmouseover="this.style.borderColor='${sect.color}'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.15)';"
                     onmouseout="this.style.borderColor='#e0e0e0'; this.style.boxShadow='0 2px 8px rgba(0,0,0,0.1)';"
                     onclick="selectMaster('${sectId}', '${master.id}')">`;
        
        html += `<div style="position: absolute; top: 15px; right: 15px; background: ${sect.color}; color: white; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 600;">`;
        html += roleName;
        html += `</div>`;
        
        html += `<div style="margin-bottom: 15px;">`;
        html += `<div style="font-size: 20px; font-weight: 600; color: #2c3e50; margin-bottom: 8px;">`;
        html += npc.name;
        html += `</div>`;
        html += `<div style="font-size: 13px; color: #3498db; margin-bottom: 8px;">`;
        html += `境界：${realmName} 第${npc.initialRealmLevel}层`;
        html += `</div>`;
        html += `<div style="font-size: 13px; color: #7f8c8d; line-height: 1.6;">`;
        html += npc.appearance;
        html += `</div>`;
        html += `</div>`;
        
        html += `<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 15px;">`;
        html += `<div style="font-size: 12px; font-weight: 600; color: #2c3e50; margin-bottom: 8px;">性格特点</div>`;
        html += `<div style="font-size: 12px; color: #555; line-height: 1.6;">`;
        html += npc.personality;
        html += `</div>`;
        html += `</div>`;
        
        // 可教授功法
        if (npc.teachTechniques && npc.teachTechniques.length > 0) {
            html += `<div style="background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745;">`;
            html += `<div style="font-size: 12px; font-weight: 600; color: #155724; margin-bottom: 8px;">`;
            html += `<svg width="14" height="14" viewBox="0 0 24 24" fill="#155724" style="vertical-align: -2px; margin-right: 4px;"><path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"/></svg>`;
            html += `可传授功法`;
            html += `</div>`;
            html += `<div style="font-size: 11px; color: #155724; line-height: 1.8;">`;
            const techniqueNames = npc.teachTechniques.slice(0, 3).map(t => {
                return getTechniqueName(t);
            });
            html += techniqueNames.join('、');
            if (npc.teachTechniques.length > 3) {
                html += ` 等${npc.teachTechniques.length}种功法`;
            }
            html += `</div>`;
            html += `</div>`;
        }
        
        html += `<div style="text-align: center; margin-top: 20px; padding-top: 15px; border-top: 1px solid #e0e0e0;">`;
        html += `<div style="font-size: 13px; color: #27ae60; font-weight: 600;">`;
        html += `点击拜${roleName}为师`;
        html += `</div>`;
        html += `</div>`;
        
        html += `</div>`;
    }
    
    html += `</div>`;
    
    masterCard.innerHTML = html;
    masterModal.appendChild(masterCard);
    document.body.appendChild(masterModal);
}

// 选择师傅并拜师
function selectMaster(sectId, masterId) {
    const sect = sects[sectId];
    const masterConfig = relationshipNPCs[masterId];
    
    if (!masterConfig) {
        showNotification('师傅信息错误', 'error');
        return;
    }
    
    // 关闭选择师傅的模态框
    const masterModal = document.getElementById('masterSelectionModal');
    if (masterModal) {
        masterModal.remove();
    }
    
    // 获取该门派的NPC键
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
    
    const npcSectKey = sectToNPCMapping[sectId];
    
    // 认识师傅
    meetNPC(masterId, '拜师');
    
    // 设置为师傅并增加初始好感度
    if (!gameData.npcData[masterId]) {
        initializeNPCData();
    }
    
    gameData.npcData[masterId].isMaster = true;
    gameData.npcData[masterId].relationship.favor = 20; // 初始好感度20
    gameData.npcData[masterId].relationship.loyalty = 60; // 初始忠诚度60
    gameData.npcData[masterId].relationship.trust = 60; // 初始信任度60
    
    // 记录拜师时间
    gameData.npcData[masterId].discipleshipDate = Date.now();
    
    // 自动认识同门的其他成员（除了自己的师傅）
    for (let npcId in relationshipNPCs) {
        const npc = relationshipNPCs[npcId];
        if (npc.sect === npcSectKey && npcId !== masterId) {
            meetNPC(npcId, '入门相识');
            // 同门师兄弟姐妹初始好感度+5
            if (gameData.npcData[npcId]) {
                gameData.npcData[npcId].relationship.favor = 5;
            }
        }
    }
    
    // 记录玩家的师傅ID
    gameData.masterId = masterId;
    
    // 查找师傅所属的堂口并记录（sect已在函数开头声明）
    if (sect.divisions) {
        for (let divisionId in sect.divisions) {
            const division = sect.divisions[divisionId];
            if (division.master === masterId) {
                gameData.divisionId = divisionId;
                gameData.divisionName = division.name;
                gameData.divisionContribution = 0; // 初始化堂口贡献度
                break;
            }
        }
    }
    
    // 显示拜师仪式
    showDiscipleshipCeremony(sectId, masterId);
}

// 显示拜师仪式
function showDiscipleshipCeremony(sectId, masterId) {
    const sect = sects[sectId];
    const masterConfig = relationshipNPCs[masterId];
    const roleNames = {
        master: '掌门',
        senior_brother: '师兄',
        senior_sister: '师姐'
    };
    const roleName = roleNames[masterConfig.role] || '师傅';
    
    // 创建拜师仪式模态框
    const ceremonyModal = document.createElement('div');
    ceremonyModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1004;
        animation: fadeIn 0.5s ease;
    `;
    
    const ceremonyCard = document.createElement('div');
    ceremonyCard.style.cssText = `
        background: linear-gradient(135deg, ${sect.color}15, ${sect.color}05);
        padding: 40px;
        border-radius: 16px;
        max-width: 600px;
        width: 90%;
        box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        border: 2px solid ${sect.color}40;
        animation: slideUp 0.6s ease;
    `;
    
    let html = '';
    
    html += `<div style="text-align: center; margin-bottom: 30px;">`;
    html += `<div style="font-size: 48px; margin-bottom: 15px;">🙏</div>`;
    html += `<h2 style="margin: 0 0 10px 0; font-size: 28px; color: ${sect.color}; font-weight: 700;">`;
    html += `拜师仪式`;
    html += `</h2>`;
    html += `<div style="font-size: 14px; color: #7f8c8d;">`;
    html += sect.name;
    html += `</div>`;
    html += `</div>`;
    
    // 拜师剧情
    html += `<div style="background: white; padding: 25px; border-radius: 12px; margin-bottom: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">`;
    
    html += `<div style="margin-bottom: 20px;">`;
    html += `<div style="font-size: 13px; color: #95a5a6; margin-bottom: 8px;">你恭敬地向${masterConfig.name}行礼</div>`;
    html += `<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid ${sect.color};">`;
    html += `<div style="font-size: 14px; color: #2c3e50; line-height: 1.8;">`;
    html += `"弟子愿拜${roleName}为师，恳请${roleName}指点修行之道！"`;
    html += `</div>`;
    html += `</div>`;
    html += `</div>`;
    
    // 根据不同的师傅角色生成不同的收徒台词
    let acceptanceWords = '';
    if (masterConfig.role === 'master') {
        acceptanceWords = `"既然你有此心，本座便收你为徒。望你勤勉修行，不负师门期望！"`;
    } else if (masterConfig.role === 'senior_brother') {
        acceptanceWords = `"师弟/师妹，以后咱们就是同门了，修行路上互相扶持！"`;
    } else if (masterConfig.role === 'senior_sister') {
        acceptanceWords = `"师弟/师妹，日后我会尽心指导你的修行，有什么不懂的尽管来问。"`;
    }
    
    html += `<div style="margin-bottom: 20px;">`;
    html += `<div style="font-size: 13px; color: #95a5a6; margin-bottom: 8px;">${masterConfig.name}正式收你为徒</div>`;
    html += `<div style="background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #28a745;">`;
    html += `<div style="font-size: 14px; color: #155724; line-height: 1.8;">`;
    html += acceptanceWords;
    html += `</div>`;
    html += `</div>`;
    html += `</div>`;
    
    html += `<div style="text-align: center; font-size: 13px; color: #27ae60; font-weight: 600;">`;
    html += `你正式拜入${masterConfig.name}门下！`;
    html += `</div>`;
    
    html += `</div>`;
    
    // 拜师奖励
    html += `<div style="background: rgba(255,255,255,0.95); padding: 20px; border-radius: 12px; margin-bottom: 25px;">`;
    html += `<div style="font-size: 14px; font-weight: 600; color: #2c3e50; margin-bottom: 12px; text-align: center;">`;
    html += `🎁 拜师礼`;
    html += `</div>`;
    html += `<div style="font-size: 13px; color: #555; line-height: 2; text-align: left;">`;
    html += `<div style="display: flex; align-items: center; margin-bottom: 6px;">`;
    html += `<svg width="16" height="16" viewBox="0 0 24 24" fill="#27ae60" style="margin-right: 8px; flex-shrink: 0;"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>`;
    html += `<span>与${masterConfig.name}的初始好感度：<strong style="color: #27ae60;">20</strong></span>`;
    html += `</div>`;
    html += `<div style="display: flex; align-items: center; margin-bottom: 6px;">`;
    html += `<svg width="16" height="16" viewBox="0 0 24 24" fill="#3498db" style="margin-right: 8px; flex-shrink: 0;"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>`;
    html += `<span>认识了同门的其他师兄师姐</span>`;
    html += `</div>`;
    html += `<div style="display: flex; align-items: center; margin-bottom: 6px;">`;
    html += `<svg width="16" height="16" viewBox="0 0 24 24" fill="#9b59b6" style="margin-right: 8px; flex-shrink: 0;"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>`;
    html += `<span>可向师傅学习独门功法</span>`;
    html += `</div>`;
    html += `<div style="display: flex; align-items: center;">`;
    html += `<svg width="16" height="16" viewBox="0 0 24 24" fill="#e74c3c" style="margin-right: 8px; flex-shrink: 0;"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>`;
    html += `<span>随着关系提升，师傅会传授更强的功法</span>`;
    html += `</div>`;
    html += `</div>`;
    html += `</div>`;
    
    html += `<div style="text-align: center;">`;
    html += `<button class="btn btn-primary" onclick="completeDiscipleship()" style="padding: 12px 40px; font-size: 15px; font-weight: 600;">`;
    html += `开始修炼之路`;
    html += `</button>`;
    html += `</div>`;
    
    ceremonyCard.innerHTML = html;
    ceremonyModal.appendChild(ceremonyCard);
    document.body.appendChild(ceremonyModal);
    
    // 添加淡入和滑入动画
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideUp {
            from { 
                opacity: 0;
                transform: translateY(30px);
            }
            to { 
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    // 添加日志
    addLog(`<span class="log-success">🙏 你正式拜${masterConfig.name}为师！</span>`);
    showNotification(`拜${masterConfig.name}为师成功！`, 'success');
}

// 完成拜师流程
function completeDiscipleship() {
    // 关闭拜师仪式模态框
    const ceremonyModals = document.querySelectorAll('[style*="z-index: 1004"]');
    ceremonyModals.forEach(modal => modal.remove());
    
    // 更新UI
    renderSectContent();
    updateUI();
    saveGame();
    
    // 显示提示
    showNotification('拜师完成！可以在人际关系中与师傅互动', 'success');
}

// 显示飞升选项（已在 legacy.js 中实现，功能更完整）

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
        z-index: 1001;
    `;
    
    const card = document.createElement('div');
    card.style.cssText = `
        background: white;
        padding: 30px;
        border-radius: 8px;
        max-width: 600px;
        width: 90%;
        max-height: 80%;
        overflow-y: auto;
    `;
    
    card.innerHTML = `
        <h2 style="margin: 0 0 20px 0; font-size: 20px; color: #2c3e50;">游戏设置</h2>
        
        <div style="margin-bottom: 25px;">
            <h3 style="font-size: 16px; margin-bottom: 15px;">自动设置</h3>
            
            <div style="margin-bottom: 15px; padding: 15px; background: ${gameData.darkMode ? '#383838' : '#f5f5f5'}; border-radius: 6px;">
                <label style="display: flex; align-items: center; cursor: pointer;">
                    <input type="checkbox" ${gameData.autoSettings.autoUpgrade ? 'checked' : ''} 
                           onchange="gameData.autoSettings.autoUpgrade = this.checked; saveGame();" 
                           style="margin-right: 10px;">
                    <div>
                        <div style="font-weight: 600;">自动升级设施</div>
                        <div style="font-size: 12px; color: #7f8c8d;">自动升级设施到最高等级</div>
                    </div>
                </label>
            </div>
            
            <div style="margin-bottom: 15px; padding: 15px; background: ${gameData.darkMode ? '#383838' : '#f5f5f5'}; border-radius: 6px;">
                <label style="display: flex; align-items: center; cursor: pointer;">
                    <input type="checkbox" ${gameData.autoSettings.autoBreakthrough ? 'checked' : ''} 
                           onchange="gameData.autoSettings.autoBreakthrough = this.checked; saveGame();" 
                           style="margin-right: 10px;">
                    <div>
                        <div style="font-weight: 600;">自动突破境界</div>
                        <div style="font-size: 12px; color: #7f8c8d;">达到突破条件时自动突破</div>
                    </div>
                </label>
            </div>
            
            <div style="margin-bottom: 15px; padding: 15px; background: ${gameData.darkMode ? '#383838' : '#f5f5f5'}; border-radius: 6px;">
                <label style="display: flex; align-items: center; cursor: pointer;">
                    <input type="checkbox" ${gameData.autoSettings.autoSectTask ? 'checked' : ''} 
                           onchange="gameData.autoSettings.autoSectTask = this.checked; saveGame();" 
                           style="margin-right: 10px;">
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
                    <input type="checkbox" ${gameData.darkMode ? 'checked' : ''} 
                           onchange="toggleDarkMode(); this.checked = gameData.darkMode;" 
                           style="margin-right: 10px;">
                    <div>
                        <div style="font-weight: 600;">深色模式</div>
                        <div style="font-size: 12px; color: #7f8c8d;">使用深色主题</div>
                    </div>
                </label>
            </div>
        </div>
        
        <div style="text-align: center;">
            <button class="btn btn-primary" onclick="this.parentElement.parentElement.parentElement.remove()">
                关闭
            </button>
        </div>
    `;
    
    modal.appendChild(card);
    document.body.appendChild(modal);
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
        z-index: 1001;
    `;
    
    const card = document.createElement('div');
    card.style.cssText = `
        background: white;
        padding: 30px;
        border-radius: 8px;
        max-width: 500px;
        width: 90%;
        max-height: 80%;
        overflow-y: auto;
    `;
    
    card.innerHTML = `
        <h2 style="margin: 0 0 20px 0; font-size: 20px; color: #2c3e50;">快捷键帮助</h2>
        
        <div style="margin-bottom: 20px;">
            <h3 style="font-size: 16px; margin-bottom: 10px; color: #2c3e50;">游戏快捷键</h3>
            <div style="font-size: 14px; line-height: 1.8;">
                <div><strong>空格键</strong> - 修炼</div>
                <div><strong>B键</strong> - 突破境界</div>
                <div><strong>P键</strong> - 使用丹药</div>
                <div><strong>A键</strong> - 切换自动模式</div>
                <div><strong>D键</strong> - 切换深色模式</div>
                <div><strong>S键</strong> - 保存游戏</div>
                <div><strong>L键</strong> - 加载游戏</div>
                <div><strong>?键</strong> - 显示此帮助</div>
            </div>
        </div>
        
        <div style="text-align: center;">
            <button class="btn btn-primary" onclick="this.parentElement.parentElement.parentElement.remove()">
                关闭
            </button>
        </div>
    `;
    
    modal.appendChild(card);
    document.body.appendChild(modal);
}
