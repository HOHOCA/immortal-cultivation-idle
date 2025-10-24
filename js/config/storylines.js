// 剧情线配置文件
// 定义所有剧情线的内容、节点、选择和结局

const storylinesConfig = {
    // ========== 剧情线1：神秘传承 ==========
    mysterious_inheritance: {
        name: '神秘传承',
        desc: '一个古老修仙世家的最后传承',
        category: 'adventure', // 类型：adventure冒险/sect宗门/relationship关系/cultivation修炼
        minRealm: 1, // 筑基期开始
        maxRealm: 5, // 元婴期结束
        priority: 3, // 优先级（越高越容易触发）
        
        stages: [
            // ===== 第1节点：偶遇落魄修士 =====
            {
                id: 'stage_1',
                name: '偶遇落魄修士',
                desc: '你在城镇外的小路上，发现一位衣衫褴褛的修士倒在路边，身上有伤...',
                type: 'opportunity',
                
                choices: [
                    {
                        id: 'help',
                        text: '出手相助（消耗3枚丹药）',
                        canChoose: () => gameData.player.pills >= 3,
                        result: (active) => {
                            gameData.player.pills -= 3;
                            active.variables.npcTrust = 30;
                            active.variables.savedNpc = true;
                            return '你用丹药为修士疗伤，他虚弱地睁开眼睛，眼中闪过感激之色："多谢道友救命之恩..."';
                        },
                        variables: { npcTrust: 30 },
                        nextStage: 1 // 进入第2节点
                    },
                    {
                        id: 'observe',
                        text: '冷眼旁观',
                        result: (active) => {
                            active.variables.coldBlooded = true;
                            return '你选择不多管闲事，修士艰难地爬起来，踉跄着离开了...';
                        },
                        nextStage: 'end', // 剧情结束
                        outcome: 'cold_ending'
                    },
                    {
                        id: 'rob',
                        text: '趁机劫掠（需要：魔道门派或境界≥4）',
                        canChoose: () => {
                            const isDemon = gameData.sect && (gameData.sect === 'demon_sect' || 
                                          gameData.sect === 'evil_cult' || gameData.sect === 'blood_sect');
                            return isDemon || gameData.player.realm >= 4;
                        },
                        result: (active) => {
                            const loot = 100 + gameData.player.realm * 50;
                            gameData.player.spiritStone += loot;
                            active.variables.robbed = true;
                            active.variables.enemy = true;
                            return `你趁人之危掠夺了${loot}块灵石，修士怨恨地看了你一眼后逃走了...`;
                        },
                        nextStage: 10, // 进入复仇分支
                        outcome: 'revenge_branch'
                    }
                ]
            },
            
            // ===== 第2节点：夜半追杀 =====
            {
                id: 'stage_2',
                name: '夜半追杀',
                desc: '当夜，你在休息时听到外面传来打斗声。推开门一看，那位修士正被三名黑衣人追杀！',
                type: 'crisis',
                canTrigger: (active) => active.variables.savedNpc === true,
                
                choices: [
                    {
                        id: 'protect',
                        text: '拼死保护修士（消耗70%灵力）',
                        canChoose: () => gameData.player.spiritualPower >= 500,
                        result: (active) => {
                            const loss = Math.floor(gameData.player.spiritualPower * 0.7);
                            gameData.player.spiritualPower *= 0.3;
                            active.variables.npcTrust += 50;
                            active.variables.protected = true;
                            return `激战之后，你成功击退了黑衣人，但修士身受重伤。他虚弱地说："多谢...道友...两次救命之恩，我必有厚报..."（消耗灵力${formatNumber(loss)}）`;
                        },
                        variables: { npcTrust: 50 },
                        nextStage: 2 // 进入第3节点
                    },
                    {
                        id: 'hide',
                        text: '躲在暗处观察',
                        result: (active) => {
                            active.variables.watchedCapture = true;
                            return '你躲在暗处观察。修士最终不敌被抓走，你听到黑衣人说："带回去逼问传承令牌的下落！"';
                        },
                        nextStage: 5, // 进入营救分支
                        outcome: 'rescue_branch'
                    },
                    {
                        id: 'escape',
                        text: '见势不妙逃跑',
                        result: (active) => {
                            active.variables.escaped = true;
                            const gain = 50 + gameData.player.realm * 20;
                            gameData.player.spiritStone += gain;
                            return `你选择逃离此地。第二天听说修士被杀，你在现场发现了一块发光的令牌...（获得${gain}灵石）`;
                        },
                        nextStage: 8, // 进入争夺令牌分支
                        outcome: 'token_fight'
                    }
                ]
            },
            
            // ===== 第3节点：疗伤与秘密 =====
            {
                id: 'stage_3',
                name: '疗伤与秘密',
                desc: '你将修士带回住处疗伤。在昏迷中，他不断呓语："传承...不能落入魔手...玄天诀..."',
                type: 'opportunity',
                canTrigger: (active) => active.variables.protected === true,
                
                choices: [
                    {
                        id: 'full_heal',
                        text: '消耗5枚丹药全力救治',
                        canChoose: () => gameData.player.pills >= 5,
                        result: (active) => {
                            gameData.player.pills -= 5;
                            active.variables.npcTrust = 100;
                            active.variables.fullyHealed = true;
                            
                            // 学会特殊功法
                            if (!gameData.learnedTechniques) gameData.learnedTechniques = {};
                            gameData.learnedTechniques['xuantian_basic'] = {
                                learnedFrom: 'mysterious_heir',
                                learnedAt: Date.now()
                            };
                            
                            return `经过你的悉心照料，修士完全康复。他感激涕零："道友大恩大德，无以为报。我乃玄天世家最后血脉，愿将家族传承【玄天诀·初篇】传授于你！"<br><br><span class="log-success">${getSvg('sparkles')} 学会了特殊功法【玄天诀·初篇】（修炼速度+15%）</span>`;
                        },
                        variables: { npcTrust: 70 },
                        nextStage: 3 // 进入守护者分支
                    },
                    {
                        id: 'partial_heal',
                        text: '只给1枚丹药应付',
                        canChoose: () => gameData.player.pills >= 1,
                        result: (active) => {
                            gameData.player.pills -= 1;
                            active.variables.npcTrust += 10;
                            const gain = 300 + gameData.player.realm * 100;
                            gameData.player.spiritStone += gain;
                            return `你只给了一枚丹药。修士勉强恢复，但留下了隐疾。他说："多谢道友，日后必有所报。"他留下${gain}灵石作为谢礼后离开了...`;
                        },
                        nextStage: 'end',
                        outcome: 'weak_friendship'
                    },
                    {
                        id: 'demand_payment',
                        text: '要求他交出传承作为报酬',
                        result: (active) => {
                            active.variables.npcTrust = -50;
                            return '修士脸色大变："道友救我是为了传承？！"他失望地离开了，从此再无音讯...';
                        },
                        nextStage: 'end',
                        outcome: 'betrayal'
                    }
                ]
            },
            
            // ===== 第4节点：传承守护者 =====
            {
                id: 'stage_4',
                name: '传承守护者',
                desc: '获得传承消息不胫而走，正邪两道都盯上了你。你必须做出选择...',
                type: 'crisis',
                canTrigger: (active) => active.variables.fullyHealed === true,
                cooldown: 5000, // 5秒后才能触发（游戏时间）
                
                choices: [
                    {
                        id: 'hide_cultivate',
                        text: '低调隐藏，苦修传承（需要10天）',
                        result: (active) => {
                            active.variables.cultivation_days = 0;
                            active.variables.choosing_hide = true;
                            return '你决定找一个隐蔽的地方苦修传承。这将需要10天时间，期间可能会遭遇袭击...';
                        },
                        nextStage: 4, // 进入苦修系列事件
                        outcome: 'cultivation_path'
                    },
                    {
                        id: 'join_righteous',
                        text: '主动联系正道大派寻求庇护（消耗500灵石）',
                        canChoose: () => gameData.player.spiritStone >= 500,
                        result: (active) => {
                            gameData.player.spiritStone -= 500;
                            active.variables.faction = 'righteous';
                            
                            // 获得称号
                            if (!gameData.titles) gameData.titles = [];
                            gameData.titles.push('正道传人');
                            
                            return '你加入了正道联盟，获得了庇护。<br><br><span class="log-success">获得称号【正道传人】</span><br><br>但魔道对你恨之入骨，从此你将经常遭遇魔修袭击...';
                        },
                        nextStage: 'end',
                        outcome: 'righteous_alliance'
                    },
                    {
                        id: 'join_demon',
                        text: '主动找到魔道，交换利益',
                        canChoose: () => {
                            const isDemon = gameData.sect && (gameData.sect === 'demon_sect' || 
                                          gameData.sect === 'evil_cult' || gameData.sect === 'blood_sect');
                            return isDemon || gameData.player.realm >= 4;
                        },
                        result: (active) => {
                            active.variables.faction = 'demon';
                            
                            // 获得称号
                            if (!gameData.titles) gameData.titles = [];
                            gameData.titles.push('魔道同盟');
                            
                            const gain = 1000 + gameData.player.realm * 300;
                            gameData.player.spiritStone += gain;
                            
                            return `你与魔道达成协议，共享部分传承。<br><br><span class="log-success">获得称号【魔道同盟】，获得${gain}灵石</span><br><br>但正道将你列为追杀对象...`;
                        },
                        nextStage: 'end',
                        outcome: 'demon_alliance'
                    }
                ]
            },
            
            // ===== 第5节点：苦修系列（循环事件）=====
            {
                id: 'stage_5',
                name: '苦修传承',
                desc: '你在隐蔽处修炼传承...',
                type: 'opportunity',
                canTrigger: (active) => active.variables.choosing_hide === true,
                
                choices: [
                    {
                        id: 'continue_cultivate',
                        text: '继续修炼',
                        result: (active) => {
                            active.variables.cultivation_days = (active.variables.cultivation_days || 0) + 1;
                            
                            // 每次修炼获得进度
                            const powerGain = 500 + gameData.player.realm * 200;
                            gameData.player.spiritualPower += powerGain;
                            gameData.player.breakthroughProgress = Math.min(100, 
                                gameData.player.breakthroughProgress + 5);
                            
                            // 随机事件
                            const rand = Math.random();
                            let eventText = '';
                            
                            if (rand < 0.3) {
                                // 遭遇魔修
                                const loss = Math.floor(gameData.player.spiritualPower * 0.2);
                                gameData.player.spiritualPower *= 0.8;
                                eventText = `<br><br>${getSvg('alert')} 一名魔修发现了你的踪迹！激战后将其击退，但消耗了${formatNumber(loss)}灵力。`;
                            } else if (rand < 0.4) {
                                // 正道修士拜访
                                const stoneGain = 200;
                                gameData.player.spiritStone += stoneGain;
                                eventText = `<br><br>${getSvg('sparkles')} 一位正道修士路过，钦佩你的坚持，赠予${stoneGain}灵石。`;
                            }
                            
                            // 检查是否完成
                            if (active.variables.cultivation_days >= 10) {
                                active.variables.cultivation_complete = true;
                                return `第${active.variables.cultivation_days}天修炼：灵力+${formatNumber(powerGain)}，突破进度+5%${eventText}<br><br><span class="log-success">🎉 传承修炼完成！你完全掌握了【玄天诀·初篇】的精髓！</span>`;
                            }
                            
                            return `第${active.variables.cultivation_days}天修炼：灵力+${formatNumber(powerGain)}，突破进度+5%${eventText}<br><br>还需${10 - active.variables.cultivation_days}天完成修炼。`;
                        },
                        nextStage: (active) => {
                            if (active.variables.cultivation_complete) {
                                return 'end'; // 修炼完成，剧情结束
                            }
                            return 4; // 继续停留在当前节点
                        },
                        outcome: 'cultivation_complete'
                    },
                    {
                        id: 'give_up',
                        text: '放弃修炼',
                        result: (active) => {
                            const days = active.variables.cultivation_days || 0;
                            return `你修炼了${days}天后放弃了。虽然没有完全掌握传承，但也有所收获。`;
                        },
                        nextStage: 'end',
                        outcome: 'cultivation_abandoned'
                    }
                ]
            },
            
            // ===== 第6节点：营救分支（如果选择观望）=====
            {
                id: 'stage_6',
                name: '潜入魔修据点',
                desc: '你暗中跟踪黑衣人，发现了他们的据点。要营救那位修士吗？',
                type: 'crisis',
                canTrigger: (active) => active.variables.watchedCapture === true,
                
                choices: [
                    {
                        id: 'rescue',
                        text: '潜入营救（消耗60%灵力）',
                        canChoose: () => gameData.player.spiritualPower >= 1000,
                        result: (active) => {
                            gameData.player.spiritualPower *= 0.4;
                            
                            const success = Math.random() < 0.6;
                            if (success) {
                                active.variables.npcTrust = 60;
                                const reward = 800 + gameData.player.realm * 200;
                                gameData.player.spiritStone += reward;
                                return `你成功救出了修士！他感激不尽，赠予你${reward}灵石和一些修炼心得。`;
                            } else {
                                return '营救失败，你在混乱中逃脱，但修士已经遇害...';
                            }
                        },
                        nextStage: 'end',
                        outcome: (active) => active.variables.npcTrust > 0 ? 'rescue_success' : 'rescue_failed'
                    },
                    {
                        id: 'leave',
                        text: '离开此地',
                        result: () => {
                            return '你选择不冒险。几天后听说那位修士已经遇害，传承下落不明...';
                        },
                        nextStage: 'end',
                        outcome: 'abandoned'
                    }
                ]
            },
            
            // ===== 第11节点：复仇分支（如果选择劫掠）=====
            {
                id: 'stage_11',
                name: '仇人现世',
                desc: '20天后，你正在修炼时，一个熟悉的身影出现在你面前。是那位修士！他实力大增，眼中满是怒火...',
                type: 'crisis',
                canTrigger: (active) => {
                    if (!active.variables.robbed) return false;
                    const daysPassed = Math.floor((Date.now() - active.startTime) / 1000 / 60 / 60 / 24);
                    return daysPassed >= 20;
                },
                
                choices: [
                    {
                        id: 'fight',
                        text: '接受挑战（战斗）',
                        result: (active) => {
                            const playerPower = calculateCombatPower();
                            const enemyPower = 1000 + gameData.player.realm * 500;
                            
                            if (playerPower > enemyPower * 1.2) {
                                // 胜利
                                gameData.player.spiritualPower *= 0.5;
                                const loot = 500 + gameData.player.realm * 150;
                                gameData.player.spiritStone += loot;
                                
                                // 获得传承碎片
                                if (!gameData.learnedTechniques) gameData.learnedTechniques = {};
                                gameData.learnedTechniques['xuantian_fragment'] = {
                                    learnedFrom: 'battle',
                                    learnedAt: Date.now()
                                };
                                
                                return `激战之后，你险胜。修士临死前将传承令牌摔碎："宁可毁掉，也不给你..."<br><br>你捡起了碎片，获得了部分传承知识。<br><br><span class="log-success">获得【玄天诀·残篇】，${loot}灵石</span>`;
                            } else {
                                // 失败
                                const loss = Math.floor(gameData.player.spiritualPower * 0.5);
                                const stoneLoss = Math.floor(gameData.player.spiritStone * 0.3);
                                gameData.player.spiritualPower *= 0.5;
                                gameData.player.spiritStone *= 0.7;
                                return `你不敌修士，身受重伤。他说："这次饶你一命，但若再犯，定取你性命！"<br><br>损失${formatNumber(loss)}灵力，${stoneLoss}灵石`;
                            }
                        },
                        nextStage: 'end',
                        outcome: 'revenge_battle'
                    },
                    {
                        id: 'apologize',
                        text: '赔礼道歉（需要双倍灵石）',
                        canChoose: (active) => {
                            const amount = (100 + gameData.player.realm * 50) * 2;
                            return gameData.player.spiritStone >= amount;
                        },
                        result: (active) => {
                            const amount = (100 + gameData.player.realm * 50) * 2;
                            gameData.player.spiritStone -= amount;
                            return `你诚恳地道歉，并赔偿${amount}灵石。修士沉默良久后接受了，转身离去："望你今后行事多思量..."`;
                        },
                        nextStage: 'end',
                        outcome: 'reconciliation'
                    }
                ]
            }
        ],
        
        // 所有可能的结局
        outcomes: {
            cold_ending: {
                name: '冷眼旁观',
                desc: '你选择了不介入他人之事',
                rewards: {}
            },
            weak_friendship: {
                name: '一面之交',
                desc: '你与修士结下了浅薄的善缘',
                rewards: {
                    spiritStone: 300
                }
            },
            betrayal: {
                name: '背信弃义',
                desc: '你的贪婪让你失去了一次机缘',
                rewards: {}
            },
            righteous_alliance: {
                name: '正道传人',
                desc: '你加入了正道联盟，成为传承守护者',
                rewards: {
                    spiritStone: 2000,
                    spiritualPower: 5000,
                    breakthroughProgress: 30
                }
            },
            demon_alliance: {
                name: '魔道同盟',
                desc: '你与魔道合作，走上了另一条道路',
                rewards: {
                    spiritStone: 3000,
                    spiritualPower: 4000
                }
            },
            cultivation_complete: {
                name: '传承新主',
                desc: '你完全掌握了玄天世家的传承',
                rewards: {
                    spiritualPower: 10000,
                    breakthroughProgress: 50,
                    pills: 20
                }
            },
            cultivation_abandoned: {
                name: '半途而废',
                desc: '你放弃了完整的传承修炼',
                rewards: {
                    spiritualPower: 3000
                }
            },
            rescue_success: {
                name: '舍身相救',
                desc: '你冒险救出了修士',
                rewards: {
                    spiritStone: 1000,
                    spiritualPower: 3000
                }
            },
            rescue_failed: {
                name: '营救失败',
                desc: '你未能救出修士',
                rewards: {}
            },
            abandoned: {
                name: '袖手旁观',
                desc: '你选择了明哲保身',
                rewards: {}
            },
            revenge_battle: {
                name: '因果报应',
                desc: '恶有恶报，善有善报',
                rewards: {}
            },
            reconciliation: {
                name: '化干戈为玉帛',
                desc: '你用诚意化解了恩怨',
                rewards: {}
            }
        }
    },

    // ========== 剧情线2：宗门风云 ==========
    sect_politics: {
        name: '宗门风云',
        desc: '宗门内部势力斗争，你的选择将决定宗门未来',
        category: 'sect',
        minRealm: 2,
        maxRealm: 6,
        priority: 2,
        canStart: () => {
            return gameData.sect && gameData.sect !== 'rogue';
        },

        stages: [
            {
                id: 'stage_1',
                name: '暗流涌动',
                desc: '你发现宗门内两位长老似乎关系紧张，弟子们也分成了两派...',
                type: 'opportunity',

                choices: [
                    {
                        id: 'investigate',
                        text: '暗中调查',
                        result: (active) => {
                            active.variables.investigated = true;
                            return '经过调查，你发现这是一场权力斗争：大长老稳健保守，二长老激进改革。';
                        },
                        nextStage: 1
                    },
                    {
                        id: 'report_master',
                        text: '向师父汇报',
                        canChoose: () => gameData.masterId,
                        result: (active) => {
                            return '师父告诫你不要多管闲事，专心修炼。但你已经注意到了这场风波...';
                        },
                        nextStage: 1
                    },
                    {
                        id: 'ignore',
                        text: '专心修炼不管闲事',
                        result: (active) => {
                            const powerGain = 1000 + gameData.player.realm * 300;
                            gameData.player.spiritualPower += powerGain;
                            return `你选择明哲保身，灵力+${formatNumber(powerGain)}`;
                        },
                        nextStage: 'end',
                        outcome: 'neutral'
                    }
                ]
            },

            {
                id: 'stage_2',
                name: '选择阵营',
                desc: '两位长老分别找到你，希望你支持他们...',
                type: 'crisis',

                choices: [
                    {
                        id: 'elder_first',
                        text: '支持大长老（稳健派）',
                        result: (active) => {
                            active.variables.faction = 'elder_first';
                            const reward = 500 + gameData.player.realm * 100;
                            gameData.player.spiritStone += reward;
                            gameData.player.pills += 10;
                            return `大长老赠予你${reward}灵石和10枚丹药作为支持`;
                        },
                        nextStage: 2
                    },
                    {
                        id: 'elder_second',
                        text: '支持二长老（改革派）',
                        result: (active) => {
                            active.variables.faction = 'elder_second';
                            const powerGain = 3000 + gameData.player.realm * 1000;
                            gameData.player.spiritualPower += powerGain;
                            return `二长老传授你一些修炼心得，灵力+${formatNumber(powerGain)}`;
                        },
                        nextStage: 2
                    },
                    {
                        id: 'neutral',
                        text: '保持中立',
                        result: (active) => {
                            active.variables.faction = 'neutral';
                            return '你选择不站队，但这可能让你两边不讨好...';
                        },
                        nextStage: 2
                    }
                ]
            },

            {
                id: 'stage_3',
                name: '权力之争',
                desc: '宗门大会召开，长老们的矛盾公开化了...',
                type: 'crisis',

                choices: [
                    {
                        id: 'support_faction',
                        text: '公开支持你的阵营',
                        canChoose: (active) => active.variables.faction !== 'neutral',
                        result: (active) => {
                            const isFirstWin = Math.random() < 0.5;
                            const myFaction = active.variables.faction;

                            if ((myFaction === 'elder_first' && isFirstWin) || 
                                (myFaction === 'elder_second' && !isFirstWin)) {
                                // 支持的一方胜利
                                const reward = 2000 + gameData.player.realm * 500;
                                gameData.player.spiritStone += reward;
                                gameData.player.breakthroughProgress = Math.min(100,
                                    gameData.player.breakthroughProgress + 30);

                                if (!gameData.titles) gameData.titles = [];
                                const title = myFaction === 'elder_first' ? '宗门元老' : '改革先锋';
                                if (!gameData.titles.includes(title)) {
                                    gameData.titles.push(title);
                                }

                                return `<span class="log-success">你支持的一方获胜！获得称号【${title}】，${reward}灵石，突破进度+30%</span>`;
                            } else {
                                // 支持的一方失败
                                return '你支持的一方失败了，但你在宗门中学到了很多...';
                            }
                        },
                        nextStage: 'end',
                        outcome: (active) => {
                            return active.variables.faction === 'elder_first' ? 'elder_first_end' : 'elder_second_end';
                        }
                    },
                    {
                        id: 'mediate',
                        text: '尝试调解双方',
                        result: (active) => {
                            const success = Math.random() < 0.3;
                            if (success) {
                                if (!gameData.titles) gameData.titles = [];
                                if (!gameData.titles.includes('和平使者')) {
                                    gameData.titles.push('和平使者');
                                }
                                const reward = 3000;
                                gameData.player.spiritStone += reward;
                                return `<span class="log-success">奇迹发生！你成功调解了双方，宗门和平延续。获得称号【和平使者】，${reward}灵石</span>`;
                            } else {
                                return '你的调解未能成功，但你的善意得到了认可。';
                            }
                        },
                        nextStage: 'end',
                        outcome: 'mediation'
                    }
                ]
            }
        ],

        outcomes: {
            neutral: {
                name: '明哲保身',
                desc: '你选择不卷入宗门斗争',
                rewards: {}
            },
            elder_first_end: {
                name: '守旧胜利',
                desc: '宗门维持传统，稳健发展',
                rewards: {
                    spiritStone: 2000,
                    spiritualPower: 5000
                }
            },
            elder_second_end: {
                name: '革新成功',
                desc: '宗门开始改革，充满活力',
                rewards: {
                    spiritualPower: 8000,
                    breakthroughProgress: 20
                }
            },
            mediation: {
                name: '和平使者',
                desc: '你化解了宗门危机',
                rewards: {
                    spiritStone: 3000,
                    pills: 20
                }
            }
        }
    },

    // ========== 剧情线3：仙缘情深 ==========
    immortal_romance: {
        name: '仙缘情深',
        desc: '在修仙路上遇到命中注定之人',
        category: 'relationship',
        minRealm: 2,
        priority: 3,

        stages: [
            {
                id: 'stage_1',
                name: '初次相遇',
                desc: '在一次秘境探险中，你遇到了一位特别的修士。你们并肩作战，化解危机...',
                type: 'opportunity',

                choices: [
                    {
                        id: 'talk',
                        text: '主动攀谈',
                        result: (active) => {
                            active.variables.favor = 30;
                            active.variables.metCompanion = true;
                            return '你们聊得很投机，对方对你印象不错。好感度：30';
                        },
                        nextStage: 1
                    },
                    {
                        id: 'observe',
                        text: '暗中观察',
                        result: (active) => {
                            active.variables.favor = 10;
                            active.variables.metCompanion = true;
                            return '你暗中观察对方，了解了一些基本信息。好感度：10';
                        },
                        nextStage: 1
                    },
                    {
                        id: 'leave',
                        text: '直接离开',
                        result: () => {
                            return '你选择离开，与这段缘分擦肩而过...';
                        },
                        nextStage: 'end',
                        outcome: 'missed'
                    }
                ]
            },

            {
                id: 'stage_2',
                name: '渐生情愫',
                desc: '之后你们多次偶遇，渐渐熟悉起来...',
                type: 'opportunity',

                choices: [
                    {
                        id: 'adventure_together',
                        text: '邀请一起历练（消耗500灵力）',
                        canChoose: () => gameData.player.spiritualPower >= 500,
                        result: (active) => {
                            gameData.player.spiritualPower -= 500;
                            active.variables.favor += 30;
                            const reward = 800 + gameData.player.realm * 200;
                            gameData.player.spiritStone += reward;
                            return `并肩作战让你们的关系更近一步。好感度+30，获得${reward}灵石`;
                        },
                        nextStage: 2
                    },
                    {
                        id: 'gift',
                        text: '赠送礼物（200灵石）',
                        canChoose: () => gameData.player.spiritStone >= 200,
                        result: (active) => {
                            gameData.player.spiritStone -= 200;
                            active.variables.favor += 20;
                            return '对方欣然接受了你的礼物。好感度+20';
                        },
                        nextStage: 2
                    },
                    {
                        id: 'wait',
                        text: '保持距离观望',
                        result: (active) => {
                            active.variables.favor += 5;
                            return '你们保持着若即若离的关系。好感度+5';
                        },
                        nextStage: 2
                    }
                ]
            },

            {
                id: 'stage_3',
                name: '患难与共',
                desc: '对方遇到了生命危险，你会如何选择？',
                type: 'crisis',

                choices: [
                    {
                        id: 'save',
                        text: '不顾一切相救（消耗80%灵力）',
                        canChoose: () => gameData.player.spiritualPower >= 1000,
                        result: (active) => {
                            gameData.player.spiritualPower *= 0.2;
                            active.variables.favor += 50;
                            active.variables.saved = true;

                            if (active.variables.favor >= 80) {
                                // 成为道侣
                                if (!gameData.titles) gameData.titles = [];
                                if (!gameData.titles.includes('神仙眷侣')) {
                                    gameData.titles.push('神仙眷侣');
                                }
                                active.variables.companion = true;
                                return '<span class="log-success">💕 你们经历生死，感情升华，结为道侣！获得称号【神仙眷侣】（修炼速度+20%）</span>';
                            } else {
                                return `你成功救下了对方，ta对你充满感激。好感度+50（当前${active.variables.favor}）`;
                            }
                        },
                        nextStage: 'end',
                        outcome: (active) => active.variables.companion ? 'true_love' : 'deep_bond'
                    },
                    {
                        id: 'help',
                        text: '量力而行帮助（消耗50%灵力）',
                        canChoose: () => gameData.player.spiritualPower >= 500,
                        result: (active) => {
                            gameData.player.spiritualPower *= 0.5;
                            active.variables.favor += 20;
                            return `你尽力帮助，对方虽有受伤但平安无事。好感度+20（当前${active.variables.favor}）`;
                        },
                        nextStage: 'end',
                        outcome: 'friendship'
                    },
                    {
                        id: 'find_help',
                        text: '去寻找帮手',
                        result: (active) => {
                            active.variables.favor -= 20;
                            return '等你带人回来时，对方已被他人所救，ta对你有些失望...好感度-20';
                        },
                        nextStage: 'end',
                        outcome: 'regret'
                    }
                ]
            }
        ],

        outcomes: {
            missed: {
                name: '擦肩而过',
                desc: '你错过了一段仙缘',
                rewards: {}
            },
            true_love: {
                name: '比翼双飞',
                desc: '你们成为道侣，共同修炼',
                rewards: {
                    spiritualPower: 10000,
                    breakthroughProgress: 30,
                    pills: 20
                }
            },
            deep_bond: {
                name: '患难之交',
                desc: '你们建立了深厚的友谊',
                rewards: {
                    spiritualPower: 5000,
                    spiritStone: 1000
                }
            },
            friendship: {
                name: '普通好友',
                desc: '你们成为了朋友',
                rewards: {
                    spiritStone: 500
                }
            },
            regret: {
                name: '遗憾错过',
                desc: '关键时刻的犹豫让你失去了这段缘分',
                rewards: {}
            }
        }
    },

    // ========== 剧情线4：天命之战 ==========
    destiny_war: {
        name: '天命之战',
        desc: '发现自己是天命之子，必须面对宿命',
        category: 'cultivation',
        minRealm: 7, // 渡劫期
        priority: 5,

        stages: [
            {
                id: 'stage_1',
                name: '天命觉醒',
                desc: '你突破到渡劫期时，感受到了来自天道的呼唤。一个声音告诉你：你是天选之人...',
                type: 'opportunity',

                choices: [
                    {
                        id: 'accept',
                        text: '接受天命',
                        result: (active) => {
                            active.variables.acceptedDestiny = true;
                            if (!gameData.titles) gameData.titles = [];
                            if (!gameData.titles.includes('天选之子')) {
                                gameData.titles.push('天选之子');
                            }
                            gameData.player.breakthroughProgress = Math.min(100,
                                gameData.player.breakthroughProgress + 40);
                            return `<span class="log-success">${getSvg('sparkles')} 你接受了天命！获得称号【天选之子】（全属性+10%），突破进度+40%</span>`;
                        },
                        nextStage: 1
                    },
                    {
                        id: 'refuse',
                        text: '拒绝天命，逆天而行',
                        result: (active) => {
                            active.variables.againstDestiny = true;
                            if (!gameData.titles) gameData.titles = [];
                            if (!gameData.titles.includes('逆天者')) {
                                gameData.titles.push('逆天者');
                            }
                            return `<span class="log-important">${getSvg('zap')} 你选择逆天！获得称号【逆天者】（修炼速度+30%，但天劫难度翻倍）</span>`;
                        },
                        nextStage: 1
                    },
                    {
                        id: 'question',
                        text: '质疑天命的真实性',
                        result: (active) => {
                            active.variables.questioned = true;
                            return '你开始调查"天命"的真相...';
                        },
                        nextStage: 2 // 进入真相分支
                    }
                ]
            },

            {
                id: 'stage_2',
                name: '天命试炼',
                desc: '天道降下试炼，考验你的实力和道心...',
                type: 'crisis',
                canTrigger: (active) => active.variables.acceptedDestiny || active.variables.againstDestiny,

                choices: [
                    {
                        id: 'pass_trial',
                        text: '全力应对试炼（消耗90%灵力）',
                        canChoose: () => gameData.player.spiritualPower >= 10000,
                        result: (active) => {
                            gameData.player.spiritualPower *= 0.1;
                            const success = Math.random() < 0.7;

                            if (success) {
                                gameData.player.breakthroughProgress = 100;
                                const reward = 50000;
                                gameData.player.spiritualPower += reward;
                                return `<span class="log-success">${getSvg('star')} 试炼成功！你的境界得到巨大提升，灵力+${formatNumber(reward)}，突破进度达到100%！</span>`;
                            } else {
                                return '试炼失败，但你获得了宝贵的经验...';
                            }
                        },
                        nextStage: 'end',
                        outcome: (active) => {
                            return active.variables.acceptedDestiny ? 'destiny_fulfilled' : 'against_heaven';
                        }
                    }
                ]
            },

            {
                id: 'stage_3',
                name: '揭开真相',
                desc: '经过调查，你发现"天命"并非天道意志，而是上古大能设下的局...',
                type: 'opportunity',
                canTrigger: (active) => active.variables.questioned,

                choices: [
                    {
                        id: 'break_conspiracy',
                        text: '打破阴谋',
                        result: (active) => {
                            if (!gameData.titles) gameData.titles = [];
                            if (!gameData.titles.includes('破局者')) {
                                gameData.titles.push('破局者');
                            }
                            gameData.player.breakthroughProgress = 100;
                            const reward = 100000;
                            gameData.player.spiritualPower += reward;
                            return `<span class="log-success">${getSvg('zap')} 你打破了上古阴谋！获得称号【破局者】，灵力暴增+${formatNumber(reward)}，突破进度100%！</span>`;
                        },
                        nextStage: 'end',
                        outcome: 'truth_revealed'
                    }
                ]
            }
        ],

        outcomes: {
            destiny_fulfilled: {
                name: '天命归位',
                desc: '你完成了天命，成为守护者',
                rewards: {
                    spiritualPower: 50000,
                    breakthroughProgress: 50,
                    pills: 50
                }
            },
            against_heaven: {
                name: '逆天成功',
                desc: '你打破了天命的束缚',
                rewards: {
                    spiritualPower: 80000,
                    breakthroughProgress: 50
                }
            },
            truth_revealed: {
                name: '真相大白',
                desc: '你揭穿了上古阴谋',
                rewards: {
                    spiritualPower: 100000,
                    spiritStone: 10000
                }
            }
        }
    },

    // ========== 练气期剧情线1：初入仙途 ==========
    beginner_path: {
        name: '初入仙途',
        desc: '踏上修仙之路的第一步，寻找属于自己的机缘',
        category: 'cultivation',
        minRealm: 0, // 练气期开始
        maxRealm: 0, // 严格限制在练气期
        priority: 4, // 高优先级
        
        stages: [
            {
                id: 'stage_1',
                name: '初遇仙缘',
                desc: '你在山中修炼时，遇到一位老修士，他看出你身具灵根，眼中闪过一丝赞许...',
                type: 'opportunity',
                
                choices: [
                    {
                        id: 'humble_learn',
                        text: '虚心请教修炼之道',
                        result: (active) => {
                            active.variables.mentorFavor = 30;
                            const powerGain = 200;
                            gameData.player.spiritualPower += powerGain;
                            return `老修士见你虚心好学，传授了一些修炼心得。<br><br><span class="log-success">灵力+${powerGain}</span>`;
                        },
                        nextStage: 1
                    },
                    {
                        id: 'show_off',
                        text: '展示自己的修炼成果',
                        result: (active) => {
                            active.variables.mentorFavor = 10;
                            const powerGain = 100;
                            gameData.player.spiritualPower += powerGain;
                            return `老修士点点头："不错，但还需努力。"<br><br><span class="log-success">灵力+${powerGain}</span>`;
                        },
                        nextStage: 1
                    },
                    {
                        id: 'ignore',
                        text: '继续自己的修炼',
                        result: () => {
                            return '你选择独自修炼，老修士默默离开了...';
                        },
                        nextStage: 'end',
                        outcome: 'missed_opportunity'
                    }
                ]
            },
            
            {
                id: 'stage_2',
                name: '修炼指导',
                desc: '老修士决定指导你的修炼，但需要你完成一个考验来证明你的决心...',
                type: 'opportunity',
                canTrigger: (active) => active.variables.mentorFavor >= 20,
                
                choices: [
                    {
                        id: 'accept_challenge',
                        text: '接受考验（消耗50%灵力）',
                        canChoose: () => gameData.player.spiritualPower >= 500,
                        result: (active) => {
                            const originalPower = gameData.player.spiritualPower;
                            gameData.player.spiritualPower *= 0.5;
                            active.variables.mentorFavor += 40;
                            active.variables.passedTest = true;
                            
                            // 学会基础功法
                            if (!gameData.learnedTechniques) gameData.learnedTechniques = {};
                            gameData.learnedTechniques['basic_meditation'] = {
                                learnedFrom: 'mysterious_mentor',
                                learnedAt: Date.now()
                            };
                            
                            const powerLoss = originalPower - gameData.player.spiritualPower;
                            return `你通过了考验！老修士满意地点头，传授了你【基础冥想术】。<br><br><span class="log-success">${getSvg('sparkles')} 学会特殊功法【基础冥想术】（修炼速度+10%）</span><br><br>消耗灵力${formatNumber(powerLoss)}`;
                        },
                        nextStage: 2
                    },
                    {
                        id: 'decline',
                        text: '婉拒考验',
                        result: (active) => {
                            active.variables.mentorFavor -= 10;
                            const powerGain = 300;
                            gameData.player.spiritualPower += powerGain;
                            return `老修士有些失望，但还是给了你一些建议。<br><br><span class="log-success">灵力+${powerGain}</span>`;
                        },
                        nextStage: 'end',
                        outcome: 'partial_guidance'
                    }
                ]
            },
            
            {
                id: 'stage_3',
                name: '离别赠言',
                desc: '老修士要离开了，他给了你最后的建议和一件小礼物...',
                type: 'opportunity',
                canTrigger: (active) => active.variables.passedTest === true,
                
                choices: [
                    {
                        id: 'grateful_farewell',
                        text: '表达感激之情',
                        result: (active) => {
                            const reward = 500 + gameData.player.realm * 200;
                            gameData.player.spiritStone += reward;
                            gameData.player.pills += 5;
                            
                            // 设置剧情标记
                            if (!gameData.storylineFlags) gameData.storylineFlags = {};
                            gameData.storylineFlags.hadBeginnerGuidance = true;
                            
                            return `老修士欣慰地笑了："记住，修仙路上，心性比天赋更重要。"<br><br>他留下了一些灵石和丹药作为临别赠礼。<br><br><span class="log-success">获得${reward}灵石，5枚丹药</span>`;
                        },
                        nextStage: 'end',
                        outcome: 'full_guidance'
                    },
                    {
                        id: 'ask_identity',
                        text: '询问老修士的身份',
                        result: (active) => {
                            const reward = 300;
                            gameData.player.spiritStone += reward;
                            
                            return `老修士神秘地笑了笑："有缘自会再见。"说完便消失在了云雾中。<br><br><span class="log-success">获得${reward}灵石</span>`;
                        },
                        nextStage: 'end',
                        outcome: 'mysterious_mentor'
                    }
                ]
            }
        ],
        
        outcomes: {
            missed_opportunity: {
                name: '错失机缘',
                desc: '你错过了与前辈交流的机会',
                rewards: {
                    spiritualPower: 100
                }
            },
            partial_guidance: {
                name: '浅尝辄止',
                desc: '你获得了部分指导',
                rewards: {
                    spiritualPower: 500,
                    pills: 2
                }
            },
            full_guidance: {
                name: '名师指点',
                desc: '你得到了完整的修炼指导',
                rewards: {
                    spiritualPower: 1000,
                    pills: 8,
                    breakthroughProgress: 15
                }
            },
            mysterious_mentor: {
                name: '神秘导师',
                desc: '你遇到了一位神秘的导师',
                rewards: {
                    spiritualPower: 800,
                    spiritStone: 300,
                    pills: 3
                }
            }
        }
    },

    // ========== 练气期剧情线2：奇遇机缘 ==========
    fortuitous_encounter: {
        name: '奇遇机缘',
        desc: '在修炼路上遇到的各种机缘和挑战',
        category: 'adventure',
        minRealm: 0,
        maxRealm: 0, // 严格限制在练气期
        priority: 3,
        
        stages: [
            {
                id: 'stage_1',
                name: '灵草现世',
                desc: '你发现了一株罕见的灵草，散发着淡淡的灵气，但旁边有一只守护灵兽在打盹...',
                type: 'opportunity',
                
                choices: [
                    {
                        id: 'fight_guardian',
                        text: '与守护兽战斗（消耗30%灵力）',
                        canChoose: () => gameData.player.spiritualPower >= 300,
                        result: (active) => {
                            const originalPower = gameData.player.spiritualPower;
                            gameData.player.spiritualPower *= 0.7;
                            const success = Math.random() < 0.6;
                            
                            if (success) {
                                const pillGain = 5;
                                gameData.player.pills += pillGain;
                                active.variables.herbCollected = true;
                                const powerLoss = originalPower - gameData.player.spiritualPower;
                                return `成功击败守护兽！你获得了珍贵的灵草。<br><br><span class="log-success">获得${pillGain}枚丹药</span><br><br>消耗灵力${formatNumber(powerLoss)}`;
                            } else {
                                const powerLoss = originalPower - gameData.player.spiritualPower;
                                return `守护兽太强，你受了轻伤，但学到了战斗经验。<br><br>消耗灵力${formatNumber(powerLoss)}`;
                            }
                        },
                        nextStage: 1
                    },
                    {
                        id: 'steal_herb',
                        text: '悄悄偷取灵草',
                        result: (active) => {
                            const success = Math.random() < 0.4;
                            if (success) {
                                const pillGain = 3;
                                gameData.player.pills += pillGain;
                                active.variables.herbCollected = true;
                                return `你成功偷取了灵草，没有被发现！<br><br><span class="log-success">获得${pillGain}枚丹药</span>`;
                            } else {
                                const loss = Math.floor(gameData.player.spiritualPower * 0.2);
                                gameData.player.spiritualPower -= loss;
                                return `被守护兽发现，它愤怒地攻击了你！<br><br><span class="log-error">损失${loss}灵力</span>`;
                            }
                        },
                        nextStage: 1
                    },
                    {
                        id: 'leave_peacefully',
                        text: '离开此地',
                        result: () => {
                            const powerGain = 150;
                            gameData.player.spiritualPower += powerGain;
                            return `你选择不冒险，离开了此地。但这次经历让你对修炼有了新的感悟。<br><br><span class="log-success">灵力+${powerGain}</span>`;
                        },
                        nextStage: 'end',
                        outcome: 'peaceful_choice'
                    }
                ]
            },
            
            {
                id: 'stage_2',
                name: '灵草炼化',
                desc: '你获得了灵草，现在需要决定如何处理它...',
                type: 'opportunity',
                canTrigger: (active) => active.variables.herbCollected === true,
                
                choices: [
                    {
                        id: 'immediate_use',
                        text: '立即服用灵草',
                        result: (active) => {
                            const powerGain = 800;
                            gameData.player.spiritualPower += powerGain;
                            gameData.player.breakthroughProgress = Math.min(100, 
                                gameData.player.breakthroughProgress + 10);
                            
                            return `你直接服用了灵草，感受到体内灵力大增！<br><br><span class="log-success">灵力+${powerGain}，突破进度+10%</span>`;
                        },
                        nextStage: 'end',
                        outcome: 'herb_master'
                    },
                    {
                        id: 'careful_process',
                        text: '小心处理灵草（消耗100灵石）',
                        canChoose: () => gameData.player.spiritStone >= 100,
                        result: (active) => {
                            gameData.player.spiritStone -= 100;
                            const pillGain = 8;
                            gameData.player.pills += pillGain;
                            
                            return `你小心地处理了灵草，制作成了更有效的丹药。<br><br><span class="log-success">获得${pillGain}枚丹药</span>`;
                        },
                        nextStage: 'end',
                        outcome: 'herb_master'
                    }
                ]
            }
        ],
        
        outcomes: {
            peaceful_choice: {
                name: '明哲保身',
                desc: '你选择了安全的道路',
                rewards: {
                    spiritualPower: 300,
                    pills: 1
                }
            },
            herb_master: {
                name: '采药高手',
                desc: '你成功获得了灵草',
                rewards: {
                    pills: 5,
                    spiritualPower: 500
                }
            }
        }
    },

    // ========== 练气期剧情线3：寻师问道 ==========
    mentor_seeking: {
        name: '寻师问道',
        desc: '寻找合适的师父，踏上真正的修仙之路',
        category: 'relationship',
        minRealm: 0,
        maxRealm: 0, // 严格限制在练气期
        priority: 2,
        
        stages: [
            {
                id: 'stage_1',
                name: '听闻仙师',
                desc: '你听说附近有一位隐士高人，决定前去拜访...',
                type: 'opportunity',
                
                choices: [
                    {
                        id: 'respectful_visit',
                        text: '恭敬地前去拜访',
                        result: (active) => {
                            active.variables.mentorImpression = 40;
                            const powerGain = 150;
                            gameData.player.spiritualPower += powerGain;
                            return `隐士见你态度恭敬，愿意与你交谈。<br><br><span class="log-success">灵力+${powerGain}</span>`;
                        },
                        nextStage: 1
                    },
                    {
                        id: 'direct_approach',
                        text: '直接说明来意',
                        result: (active) => {
                            active.variables.mentorImpression = 20;
                            return '隐士看了你一眼，没有多说什么。';
                        },
                        nextStage: 1
                    },
                    {
                        id: 'observe_first',
                        text: '先暗中观察',
                        result: (active) => {
                            active.variables.mentorImpression = 10;
                            active.variables.observed = true;
                            return '你暗中观察了隐士的修炼，学到了一些技巧。';
                        },
                        nextStage: 1
                    }
                ]
            },
            
            {
                id: 'stage_2',
                name: '师父考验',
                desc: '隐士决定考验你的资质和心性...',
                type: 'crisis',
                canTrigger: (active) => active.variables.mentorImpression >= 15,
                
                choices: [
                    {
                        id: 'accept_all_tests',
                        text: '接受所有考验（消耗60%灵力）',
                        canChoose: () => gameData.player.spiritualPower >= 400,
                        result: (active) => {
                            gameData.player.spiritualPower *= 0.4;
                            active.variables.mentorImpression += 50;
                            active.variables.passedAllTests = true;
                            
                            // 获得师父认可
                            if (!gameData.storylineFlags) gameData.storylineFlags = {};
                            gameData.storylineFlags.hasMentorRecognition = true;
                            
                            return `你通过了所有考验！隐士满意地点头："你是个好苗子。"<br><br><span class="log-success">获得师父认可</span>`;
                        },
                        nextStage: 2
                    },
                    {
                        id: 'selective_tests',
                        text: '选择性接受考验',
                        result: (active) => {
                            active.variables.mentorImpression += 20;
                            const powerGain = 200;
                            gameData.player.spiritualPower += powerGain;
                            return `你选择了适合自己的考验，隐士表示理解。<br><br><span class="log-success">灵力+${powerGain}</span>`;
                        },
                        nextStage: 'end',
                        outcome: 'partial_recognition'
                    }
                ]
            },
            
            {
                id: 'stage_3',
                name: '师父指点',
                desc: '隐士决定指点你的修炼，但不会收你为徒...',
                type: 'opportunity',
                canTrigger: (active) => active.variables.passedAllTests === true,
                
                choices: [
                    {
                        id: 'grateful_accept',
                        text: '感激地接受指点',
                        result: (active) => {
                            const powerGain = 1000;
                            const stoneGain = 300;
                            gameData.player.spiritualPower += powerGain;
                            gameData.player.spiritStone += stoneGain;
                            
                            // 学会修炼技巧
                            if (!gameData.learnedTechniques) gameData.learnedTechniques = {};
                            gameData.learnedTechniques['efficient_cultivation'] = {
                                learnedFrom: 'hermit_mentor',
                                learnedAt: Date.now()
                            };
                            
                            return `隐士传授了你一些修炼技巧，你的修炼效率大大提升！<br><br><span class="log-success">${getSvg('sparkles')} 学会【高效修炼法】（修炼速度+15%）</span><br><br>灵力+${powerGain}，灵石+${stoneGain}`;
                        },
                        nextStage: 'end',
                        outcome: 'mentor_guidance'
                    },
                    {
                        id: 'ask_for_more',
                        text: '请求更多指导',
                        result: (active) => {
                            active.variables.mentorImpression -= 10;
                            const powerGain = 500;
                            gameData.player.spiritualPower += powerGain;
                            return `隐士摇头："贪多嚼不烂，先把这些掌握好。"<br><br><span class="log-success">灵力+${powerGain}</span>`;
                        },
                        nextStage: 'end',
                        outcome: 'mentor_guidance'
                    }
                ]
            }
        ],
        
        outcomes: {
            partial_recognition: {
                name: '部分认可',
                desc: '你获得了隐士的部分认可',
                rewards: {
                    spiritualPower: 600,
                    pills: 3
                }
            },
            mentor_guidance: {
                name: '师父指点',
                desc: '你得到了隐士的修炼指导',
                rewards: {
                    spiritualPower: 1200,
                    spiritStone: 400,
                    pills: 6,
                    breakthroughProgress: 20
                }
            }
        }
    }
};

