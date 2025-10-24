// 动态事件生成系统
// 根据玩家当前状态和游戏进度动态生成个性化事件

class DynamicEventGenerator {
    constructor() {
        this.recentEvents = []; // 最近触发的事件，防止重复
        this.maxRecentEvents = 10; // 记录最近10个事件
    }

    // 检查是否应该生成动态事件
    shouldGenerateDynamicEvent() {
        // 30%概率生成动态事件
        return Math.random() < 0.3;
    }

    // 生成动态事件
    generateEvent() {
        const playerState = this.getPlayerState();
        const possibleEvents = this.getPossibleEvents(playerState);

        if (possibleEvents.length === 0) return null;

        // 过滤最近已触发的事件
        const availableEvents = possibleEvents.filter(e => 
            !this.recentEvents.includes(e.id)
        );

        if (availableEvents.length === 0) {
            // 如果所有事件都在最近触发过，清空一半记录
            this.recentEvents = this.recentEvents.slice(this.recentEvents.length / 2);
            return this.generateEvent(); // 递归重试
        }

        // 按权重随机选择
        const event = this.weightedRandom(availableEvents);
        
        // 记录到最近事件
        this.recentEvents.push(event.id);
        if (this.recentEvents.length > this.maxRecentEvents) {
            this.recentEvents.shift();
        }

        return event;
    }

    // 获取玩家状态
    getPlayerState() {
        return {
            realm: gameData.player.realm,
            realmLevel: gameData.player.realmLevel,
            spiritStone: gameData.player.spiritStone,
            pills: gameData.player.pills,
            spiritualPower: gameData.player.spiritualPower,
            sect: gameData.sect,
            ascensionCount: gameData.ascensionCount || 0,
            isInImmortalWorld: gameData.player.isInImmortalWorld || false,
            totalDays: gameData.player.totalDays,
            hasMaster: !!gameData.masterId,
            hasCompanion: gameData.companionId ? true : false,
            npcCount: Object.keys(gameData.npcData || {}).length
        };
    }

    // 获取可能的事件
    getPossibleEvents(state) {
        const events = [];

        // === 练气期专属动态事件 ===
        if (state.realm === 0) {
            // 练气期修炼指导
            if (state.spiritualPower < 1000) {
                events.push({
                    id: 'beginner_guidance',
                    weight: 6,
                    ...this.createBeginnerGuidanceEvent(state)
                });
            }

            // 练气期资源匮乏
            if (state.spiritStone < 100) {
                events.push({
                    id: 'beginner_resource_help',
                    weight: 5,
                    ...this.createBeginnerResourceHelpEvent(state)
                });
            }

            // 练气期修炼感悟
            if (state.totalDays >= 10 && state.totalDays <= 50) {
                events.push({
                    id: 'beginner_insight',
                    weight: 4,
                    ...this.createBeginnerInsightEvent(state)
                });
            }

            // 练气期同道相遇
            if (state.npcCount < 2) {
                events.push({
                    id: 'beginner_companion',
                    weight: 5,
                    ...this.createBeginnerCompanionEvent(state)
                });
            }
        }

        // === 资源相关动态事件 ===
        if (state.spiritStone < 200 && state.realm >= 2) {
            events.push({
                id: 'poor_cultivator_help',
                weight: 5,
                ...this.createPoorCultivatorEvent(state)
            });
        }

        if (state.pills < 5 && state.realm >= 1) {
            events.push({
                id: 'herb_gathering',
                weight: 4,
                ...this.createHerbGatheringEvent(state)
            });
        }

        // === 境界相关事件 ===
        if (state.realmLevel >= 7 && state.realmLevel <= 9) {
            events.push({
                id: 'breakthrough_insight',
                weight: 6,
                ...this.createBreakthroughInsightEvent(state)
            });
        }

        // === 门派相关事件 ===
        if (state.sect && state.sect !== 'rogue') {
            events.push({
                id: 'sect_contribution',
                weight: 4,
                ...this.createSectContributionEvent(state)
            });
        }

        // === 社交相关事件 ===
        if (state.npcCount < 3 && state.realm >= 1) {
            events.push({
                id: 'cultivator_gathering',
                weight: 5,
                ...this.createCultivatorGatheringEvent(state)
            });
        }

        // === 修为进度相关 ===
        if (state.totalDays >= 100 && state.totalDays % 50 === 0) {
            events.push({
                id: 'cultivation_milestone',
                weight: 3,
                ...this.createCultivationMilestoneEvent(state)
            });
        }

        // === 仙界专属事件 ===
        if (state.isInImmortalWorld) {
            events.push({
                id: 'immortal_encounter',
                weight: 5,
                ...this.createImmortalEncounterEvent(state)
            });
        }

        return events;
    }

    // ===== 事件生成函数 =====

    createPoorCultivatorEvent(state) {
        return {
            name: '贫困修士',
            desc: `你的灵石只剩${state.spiritStone}块，几乎无法维持修炼。一位商人正好路过...`,
            type: 'trade',
            choices: [
                {
                    text: '出售丹药换取灵石（5丹药→200灵石）',
                    canChoose: () => gameData.player.pills >= 5,
                    result: () => {
                        gameData.player.pills -= 5;
                        gameData.player.spiritStone += 200;
                        return '商人很满意，支付了200块灵石';
                    }
                },
                {
                    text: '接受商人的小任务（消耗200灵力）',
                    canChoose: () => gameData.player.spiritualPower >= 200,
                    result: () => {
                        gameData.player.spiritualPower -= 200;
                        const gain = 150 + state.realm * 30;
                        gameData.player.spiritStone += gain;
                        return `完成任务，获得${gain}灵石`;
                    }
                },
                {
                    text: '婉拒',
                    result: () => '你选择继续艰苦修炼'
                }
            ]
        };
    }

    createHerbGatheringEvent(state) {
        return {
            name: '采药机会',
            desc: '你发现附近山上有一些灵药，可以采集制作丹药...',
            type: 'opportunity',
            choices: [
                {
                    text: '花时间采集（消耗300灵力）',
                    canChoose: () => gameData.player.spiritualPower >= 300,
                    result: () => {
                        gameData.player.spiritualPower -= 300;
                        const pillGain = 3 + Math.floor(state.realm / 2);
                        gameData.player.pills += pillGain;
                        return `采集成功，获得${pillGain}枚丹药`;
                    }
                },
                {
                    text: '购买采药工具（100灵石）',
                    canChoose: () => gameData.player.spiritStone >= 100,
                    result: () => {
                        gameData.player.spiritStone -= 100;
                        const pillGain = 5 + Math.floor(state.realm / 2);
                        gameData.player.pills += pillGain;
                        return `使用工具效率更高，获得${pillGain}枚丹药`;
                    }
                },
                {
                    text: '放弃',
                    result: () => '你选择不采集'
                }
            ]
        };
    }

    createBreakthroughInsightEvent(state) {
        return {
            name: '突破契机',
            desc: `你已达到${getRealms()[state.realm].name}第${state.realmLevel}层，隐约感觉到突破的契机...`,
            type: 'opportunity',
            choices: [
                {
                    text: '全力冲击突破（消耗50%灵力和3丹药）',
                    canChoose: () => gameData.player.spiritualPower >= 1000 && gameData.player.pills >= 3,
                    result: () => {
                        gameData.player.spiritualPower *= 0.5;
                        gameData.player.pills -= 3;
                        const progressGain = 20 + Math.floor(Math.random() * 20);
                        gameData.player.breakthroughProgress = Math.min(100,
                            gameData.player.breakthroughProgress + progressGain);
                        return `全力冲击，突破进度+${progressGain}%`;
                    }
                },
                {
                    text: '稳扎稳打继续修炼',
                    result: () => {
                        const powerGain = 500 + state.realm * 200;
                        gameData.player.spiritualPower += powerGain;
                        gameData.player.breakthroughProgress = Math.min(100,
                            gameData.player.breakthroughProgress + 10);
                        return `稳步修炼，灵力+${formatNumber(powerGain)}，突破进度+10%`;
                    }
                }
            ]
        };
    }

    createSectContributionEvent(state) {
        const sectName = sects[state.sect]?.name || '宗门';
        return {
            name: '宗门任务',
            desc: `${sectName}发布了一个适合你的任务...`,
            type: 'opportunity',
            choices: [
                {
                    text: '接受任务（消耗40%灵力）',
                    canChoose: () => gameData.player.spiritualPower >= 500,
                    result: () => {
                        gameData.player.spiritualPower *= 0.6;
                        const stoneGain = 200 + state.realm * 50;
                        const pillGain = 2 + Math.floor(state.realm / 3);
                        gameData.player.spiritStone += stoneGain;
                        gameData.player.pills += pillGain;
                        
                        // 增加宗门贡献度
                        if (!gameData.sectContribution) gameData.sectContribution = 0;
                        gameData.sectContribution += 10;
                        
                        return `任务完成！获得${stoneGain}灵石、${pillGain}丹药，宗门贡献度+10`;
                    }
                },
                {
                    text: '婉拒',
                    result: () => '你选择专注于自己的修炼'
                }
            ]
        };
    }

    createCultivatorGatheringEvent(state) {
        return {
            name: '修士聚会',
            desc: '你听说附近有修士们的聚会，可以结识新朋友...',
            type: 'opportunity',
            choices: [
                {
                    text: '参加聚会（消耗50灵石）',
                    canChoose: () => gameData.player.spiritStone >= 50,
                    result: () => {
                        gameData.player.spiritStone -= 50;
                        
                        // 尝试结识NPC
                        if (typeof meetRandomNPC === 'function' && Math.random() < 0.6) {
                            const npcId = meetRandomNPC();
                            if (npcId && relationshipNPCs[npcId]) {
                                return `<span class="log-success">你在聚会上结识了${relationshipNPCs[npcId].name}！</span>`;
                            }
                        }
                        
                        const powerGain = 300 + state.realm * 100;
                        gameData.player.spiritualPower += powerGain;
                        return `聚会很愉快，交流中获得一些修炼心得，灵力+${formatNumber(powerGain)}`;
                    }
                },
                {
                    text: '不参加',
                    result: () => '你选择独自修炼'
                }
            ]
        };
    }

    createCultivationMilestoneEvent(state) {
        return {
            name: '修炼里程碑',
            desc: `你已修炼${state.totalDays}天，回顾过往，感慨万千...`,
            type: 'opportunity',
            choices: [
                {
                    text: '总结经验',
                    result: () => {
                        const powerGain = state.totalDays * 10;
                        const pillGain = Math.floor(state.totalDays / 50);
                        gameData.player.spiritualPower += powerGain;
                        gameData.player.pills += pillGain;
                        return `<span class="log-success">🎉 修炼里程碑！灵力+${formatNumber(powerGain)}，丹药+${pillGain}</span>`;
                    }
                }
            ]
        };
    }

    createImmortalEncounterEvent(state) {
        return {
            name: '仙界奇遇',
            desc: '仙界的灵气比凡界浓郁百倍，你的修炼速度大增...',
            type: 'opportunity',
            choices: [
                {
                    text: '吸收仙气',
                    result: () => {
                        const powerGain = 5000 + state.realm * 1000;
                        gameData.player.spiritualPower += powerGain;
                        gameData.player.breakthroughProgress = Math.min(100,
                            gameData.player.breakthroughProgress + 15);
                        return `仙气入体，灵力暴增+${formatNumber(powerGain)}，突破进度+15%`;
                    }
                },
                {
                    text: '寻找仙石',
                    result: () => {
                        const stoneGain = 10 + state.ascensionCount * 5;
                        gameData.player.immortalStone = (gameData.player.immortalStone || 0) + stoneGain;
                        return `发现${stoneGain}块仙石！`;
                    }
                }
            ]
        };
    }

    // ===== 练气期专属动态事件生成函数 =====

    createBeginnerGuidanceEvent(state) {
        return {
            name: '修炼指导',
            desc: '一位路过的修士看到你在修炼，主动上前指导...',
            type: 'opportunity',
            choices: [
                {
                    text: '虚心接受指导',
                    result: () => {
                        const powerGain = 300;
                        gameData.player.spiritualPower += powerGain;
                        return `修士传授了你一些修炼技巧，你的修炼效率提升了。<br><br><span class="log-success">灵力+${powerGain}</span>`;
                    }
                },
                {
                    text: '询问修炼心得',
                    result: () => {
                        const powerGain = 200;
                        const pillGain = 2;
                        gameData.player.spiritualPower += powerGain;
                        gameData.player.pills += pillGain;
                        return `修士分享了一些修炼心得，还给了你几枚丹药。<br><br><span class="log-success">灵力+${powerGain}，丹药+${pillGain}</span>`;
                    }
                },
                {
                    text: '婉拒指导',
                    result: () => {
                        return '你选择继续自己的修炼方式。';
                    }
                }
            ]
        };
    }

    createBeginnerResourceHelpEvent(state) {
        return {
            name: '资源援助',
            desc: `你的灵石只剩${state.spiritStone}块，几乎无法维持修炼。一位善良的修士正好路过...`,
            type: 'opportunity',
            choices: [
                {
                    text: '请求帮助',
                    result: () => {
                        const stoneGain = 150;
                        gameData.player.spiritStone += stoneGain;
                        return `修士同情你的处境，给了你一些灵石。<br><br><span class="log-success">获得${stoneGain}灵石</span>`;
                    }
                },
                {
                    text: '用丹药换取灵石',
                    canChoose: () => gameData.player.pills >= 2,
                    result: () => {
                        gameData.player.pills -= 2;
                        const stoneGain = 200;
                        gameData.player.spiritStone += stoneGain;
                        return `修士用灵石换取了你的丹药。<br><br><span class="log-success">获得${stoneGain}灵石</span>`;
                    }
                },
                {
                    text: '婉拒帮助',
                    result: () => {
                        const powerGain = 100;
                        gameData.player.spiritualPower += powerGain;
                        return `你选择自力更生，继续艰苦修炼。<br><br><span class="log-success">灵力+${powerGain}</span>`;
                    }
                }
            ]
        };
    }

    createBeginnerInsightEvent(state) {
        return {
            name: '修炼感悟',
            desc: `你已修炼${state.totalDays}天，对修仙有了新的感悟...`,
            type: 'opportunity',
            choices: [
                {
                    text: '深入感悟（消耗150灵力）',
                    canChoose: () => gameData.player.spiritualPower >= 150,
                    result: () => {
                        gameData.player.spiritualPower -= 150;
                        const progressGain = 12;
                        gameData.player.breakthroughProgress = Math.min(100,
                            gameData.player.breakthroughProgress + progressGain);
                        return `你深入感悟，对修炼有了更深的理解。<br><br><span class="log-success">突破进度+${progressGain}%</span>`;
                    }
                },
                {
                    text: '记录感悟',
                    result: () => {
                        const powerGain = 250;
                        gameData.player.spiritualPower += powerGain;
                        return `你记录下了这次感悟，对修炼有了新的认识。<br><br><span class="log-success">灵力+${powerGain}</span>`;
                    }
                }
            ]
        };
    }

    createBeginnerCompanionEvent(state) {
        return {
            name: '同道相遇',
            desc: '你遇到了一个同境界的修士，他看起来也很年轻...',
            type: 'opportunity',
            choices: [
                {
                    text: '主动交流',
                    result: () => {
                        const powerGain = 200;
                        gameData.player.spiritualPower += powerGain;
                        
                        // 尝试结识NPC
                        if (typeof meetRandomNPC === 'function' && Math.random() < 0.4) {
                            const npcId = meetRandomNPC();
                            if (npcId && relationshipNPCs[npcId]) {
                                return `<span class="log-success">你在交流中结识了${relationshipNPCs[npcId].name}！</span><br><br>灵力+${powerGain}`;
                            }
                        }
                        
                        return `你们进行了友好的交流，互相学习。<br><br><span class="log-success">灵力+${powerGain}</span>`;
                    }
                },
                {
                    text: '邀请一起修炼',
                    canChoose: () => gameData.player.spiritualPower >= 100,
                    result: () => {
                        gameData.player.spiritualPower -= 100;
                        const powerGain = 400;
                        gameData.player.spiritualPower += powerGain;
                        return `你们一起修炼，效率大大提升！<br><br><span class="log-success">灵力+${powerGain}</span>`;
                    }
                },
                {
                    text: '保持距离',
                    result: () => {
                        const powerGain = 100;
                        gameData.player.spiritualPower += powerGain;
                        return `你选择保持距离，继续独自修炼。<br><br><span class="log-success">灵力+${powerGain}</span>`;
                    }
                }
            ]
        };
    }

    // 加权随机选择
    weightedRandom(events) {
        const totalWeight = events.reduce((sum, e) => sum + (e.weight || 1), 0);
        let random = Math.random() * totalWeight;
        
        for (let event of events) {
            random -= (event.weight || 1);
            if (random <= 0) {
                return event;
            }
        }
        
        return events[0]; // 兜底
    }
}

// 创建全局实例
const dynamicEventGenerator = new DynamicEventGenerator();

