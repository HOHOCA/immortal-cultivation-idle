// 随机事件定义

const randomEvents = {
            // 奇遇事件
            mysterious_elder: {
                name: '神秘前辈',
                desc: '你在修炼时遇到一位神秘的前辈，他似乎对你颇有好感...',
                type: 'opportunity',
                minRealm: 0,
                choices: [
                    {
                        text: '恭敬请教修炼之道',
                        result: () => {
                            const gain = Math.floor(gameData.player.spiritualPower * 0.2 + 100);
                            gameData.player.spiritualPower += gain;
                            return `前辈指点了你一些修炼要诀，灵力增加 ${formatNumber(gain)} 点`;
                        }
                    },
                    {
                        text: '请求赐予灵石',
                        result: () => {
                            const gain = 50 + gameData.player.realm * 20;
                            gameData.player.spiritStone += gain;
                            return `前辈欣赏你的坦诚，赠予 ${gain} 块灵石`;
                        }
                    },
                    {
                        text: '婉拒，独自修炼',
                        result: () => {
                            return '前辈赞许地点点头，送你一句：修仙之路，贵在自强';
                        }
                    }
                ]
            },
            
            ancient_ruins: {
                name: '古迹遗址',
                desc: '你发现了一处上古遗址，里面隐约有宝光闪烁...',
                type: 'opportunity',
                minRealm: 1,
                choices: [
                    {
                        text: '深入探索（消耗30%灵力）',
                        canChoose: () => gameData.player.spiritualPower > 100,
                        result: () => {
                            gameData.player.spiritualPower *= 0.7;
                            const stoneGain = 100 + gameData.player.realm * 50;
                            const pillGain = 3 + Math.floor(gameData.player.realm / 2);
                            gameData.player.spiritStone += stoneGain;
                            gameData.player.pills += pillGain;
                            gameData.materials = gameData.materials || { ironOre: 0, cloth: 0, spiritCrystal: 0 };
                            const matGain = 2 + Math.floor(gameData.player.realm / 3);
                            gameData.materials.ironOre = (gameData.materials.ironOre || 0) + matGain;
                            gameData.materials.spiritCrystal = (gameData.materials.spiritCrystal || 0) + Math.floor(matGain / 2);
                            return `你在遗址中找到了 ${stoneGain} 块灵石、${pillGain} 枚丹药、${matGain}个铁矿和${Math.floor(matGain/2)}个灵晶！`;
                        }
                    },
                    {
                        text: '小心翼翼地收集外围资源',
                        result: () => {
                            const gain = 30 + gameData.player.realm * 10;
                            gameData.player.spiritStone += gain;
                            return `你谨慎地收集了一些资源，获得 ${gain} 块灵石`;
                        }
                    }
                ]
            },
            
            spiritual_beast: {
                name: '灵兽现世',
                desc: '一只灵兽出现在你面前，它似乎受了重伤...',
                type: 'opportunity',
                minRealm: 2,
                choices: [
                    {
                        text: '消耗丹药救治（需要5枚丹药）',
                        canChoose: () => gameData.player.pills >= 5,
                        result: () => {
                            gameData.player.pills -= 5;
                            const stoneGain = 200 + gameData.player.realm * 30;
                            gameData.player.spiritStone += stoneGain;
                            gameData.player.spiritualPower += 500;
                            return `灵兽感激地留下了 ${stoneGain} 块灵石和一些灵力精华（+500灵力）`;
                        }
                    },
                    {
                        text: '无视离开',
                        result: () => {
                            return '你选择不多管闲事';
                        }
                    }
                ]
            },
            
            demon_attack: {
                name: '魔修袭击',
                desc: '一个魔修发现了你的修炼之处，正在靠近...',
                type: 'crisis',
                minRealm: 1,
                choices: [
                    {
                        text: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M6.5,21L5,19.5L12,12.5L10.5,11L7,14.5L5.5,13L9,9.5L7.5,8L3,12.5L1.5,11L8,4.5L9.5,6L11,4.5L12.5,6L14,4.5L22,12.5L20.5,14L16,9.5L14.5,11L18,14.5L16.5,16L13,12.5L11.5,14L18.5,21H6.5Z"/></svg>正面迎战（战斗）',
                        result: () => {
                            // 触发战斗事件
                            gameData.currentEvent = null; // 清除当前事件
                            showDemonBattle();
                            return '你决定与魔修正面一战！';
                        }
                    },
                    {
                        text: '消耗灵力抵抗（损失50%灵力）',
                        result: () => {
                            const loss = Math.floor(gameData.player.spiritualPower * 0.5);
                            gameData.player.spiritualPower *= 0.5;
                            return `经过一番苦战，你击退了魔修，但消耗了 ${formatNumber(loss)} 灵力`;
                        }
                    },
                    {
                        text: '花费灵石请求援助（100灵石）',
                        canChoose: () => gameData.player.spiritStone >= 100,
                        result: () => {
                            gameData.player.spiritStone -= 100;
                            return '附近的修士赶来相助，击退了魔修';
                        }
                    },
                    {
                        text: '破财消灾（损失30%灵石）',
                        result: () => {
                            const loss = Math.floor(gameData.player.spiritStone * 0.3);
                            gameData.player.spiritStone = Math.floor(gameData.player.spiritStone * 0.7);
                            return `你损失了 ${loss} 块灵石，魔修满意地离开了`;
                        }
                    }
                ]
            },
            
            enlightenment: {
                name: '顿悟时刻',
                desc: '修炼中你突然有所感悟，仿佛触摸到了天道的一角...',
                type: 'opportunity',
                minRealm: 0,
                choices: [
                    {
                        text: '静心感悟（需要5枚丹药）',
                        canChoose: () => gameData.player.pills >= 5,
                        result: () => {
                            gameData.player.pills -= 5;
                            const gain = Math.floor(gameData.player.spiritualPower * 0.5);
                            gameData.player.spiritualPower += gain;
                            gameData.player.breakthroughProgress = Math.min(100, gameData.player.breakthroughProgress + 20);
                            return `你进入深层次的顿悟，灵力增加 ${formatNumber(gain)}，突破进度提升20%`;
                        }
                    },
                    {
                        text: '继续修炼',
                        result: () => {
                            const gain = Math.floor(gameData.player.spiritualPower * 0.2);
                            gameData.player.spiritualPower += gain;
                            return `你获得了一些感悟，灵力增加 ${formatNumber(gain)}`;
                        }
                    }
                ]
            },
            
            traveling_merchant: {
                name: '云游商人',
                desc: '一个云游商人经过此地，带来了一些稀奇的货物...',
                type: 'trade',
                minRealm: 0,
                choices: [
                    {
                        text: '购买丹药（80灵石→5丹药）',
                        canChoose: () => gameData.player.spiritStone >= 80,
                        result: () => {
                            gameData.player.spiritStone -= 80;
                            gameData.player.pills += 5;
                            return '你购买了5枚丹药';
                        }
                    },
                    {
                        text: '购买修炼心得（150灵石）',
                        canChoose: () => gameData.player.spiritStone >= 150,
                        result: () => {
                            gameData.player.spiritStone -= 150;
                            const gain = 1000 + gameData.player.realm * 300;
                            gameData.player.spiritualPower += gain;
                            return `你购买了修炼心得，灵力增加 ${formatNumber(gain)}`;
                        }
                    },
                    {
                        text: '不购买',
                        result: () => {
                            return '你婉拒了商人的推销';
                        }
                    }
                ]
            },
            
            secret_realm: {
                name: '秘境开启',
                desc: '附近出现了一处秘境入口，机缘与危险并存...',
                type: 'opportunity',
                minRealm: 2,
                choices: [
                    {
                        text: '进入秘境（消耗40%灵力）',
                        canChoose: () => gameData.player.spiritualPower > 100,
                        result: () => {
                            gameData.player.spiritualPower *= 0.6;
                            const rand = Math.random();
                            if (rand < 0.6) {
                                const stoneGain = 300 + gameData.player.realm * 80;
                                const pillGain = 5 + Math.floor(gameData.player.realm / 2);
                                gameData.player.spiritStone += stoneGain;
                                gameData.player.pills += pillGain;
                                return `你获得了丰厚的收获：${stoneGain}灵石和${pillGain}枚丹药`;
                            } else if (rand < 0.9) {
                                const gain = Math.floor(gameData.player.spiritualPower * 0.8);
                                gameData.player.spiritualPower += gain;
                                return `你在秘境中感悟良多，灵力增加 ${formatNumber(gain)}`;
                            } else {
                                gameData.player.breakthroughProgress = 100;
                                return `${getSvg('zap')} 你在秘境中得到传承，突破进度直接达到100%！`;
                            }
                        }
                    },
                    {
                        text: '谨慎观察',
                        result: () => {
                            const gain = 50 + gameData.player.realm * 20;
                            gameData.player.spiritStone += gain;
                            return `你在外围找到了一些资源，获得${gain}灵石`;
                        }
                    }
                ]
            },
            
            heaven_material: {
                name: '天材地宝',
                desc: '你发现了一株罕见的灵药，散发着浓郁的灵气...',
                type: 'opportunity',
                minRealm: 0,
                choices: [
                    {
                        text: '立即服用',
                        result: () => {
                            const gain = 200 + gameData.player.realm * 100;
                            gameData.player.spiritualPower += gain;
                            return `灵药入体，灵力大增 +${formatNumber(gain)}`;
                        }
                    },
                    {
                        text: '收藏起来（换取灵石）',
                        result: () => {
                            const gain = 100 + gameData.player.realm * 50;
                            gameData.player.spiritStone += gain;
                            return `你将灵药卖给了商人，获得 ${gain} 块灵石`;
                        }
                    }
                ]
            },
            
            fellow_cultivator: {
                name: '同道中人',
                desc: '你遇到了一位同境界的修士，他提出切磋交流...',
                type: 'opportunity',
                minRealm: 1,
                choices: [
                    {
                        text: '友好切磋',
                        result: () => {
                            const gain = Math.floor(gameData.player.spiritualPower * 0.3);
                            gameData.player.spiritualPower += gain;
                            gameData.player.breakthroughProgress = Math.min(100, gameData.player.breakthroughProgress + 10);
                            return `切磋收获颇丰，灵力+${formatNumber(gain)}，突破进度+10%`;
                        }
                    },
                    {
                        text: '婉拒离开',
                        result: () => {
                            return '你婉拒了对方的邀请';
                        }
                    }
                ]
            },
            
            treasure_competition: {
                name: '争夺宝物',
                desc: '一件宝物出世，多人争夺，你是否参与？',
                type: 'crisis',
                minRealm: 2,
                choices: [
                    {
                        text: `${getSvg('sword')} 参与争夺（PvP战斗）`,
                        result: () => {
                            // 触发PvP战斗事件
                            gameData.currentEvent = null; // 清除当前事件
                            showTreasureBattle();
                            return '你决定参与宝物争夺战！';
                        }
                    },
                    {
                        text: '奋力争夺（消耗60%灵力）',
                        canChoose: () => gameData.player.spiritualPower > 200,
                        result: () => {
                            gameData.player.spiritualPower *= 0.4;
                            if (Math.random() < 0.4) {
                                const gain = 500 + gameData.player.realm * 150;
                                gameData.player.spiritStone += gain;
                                return `${getSvg('star')} 你成功夺得宝物，获得 ${gain} 块灵石！`;
                            } else {
                                return '激烈争夺中你未能取胜，但平安离开';
                            }
                        }
                    },
                    {
                        text: '旁观不参与',
                        result: () => {
                            return '你选择明哲保身，不参与争夺';
                        }
                    }
                ]
            },
            
            cultivation_insight: {
                name: '修炼感悟',
                desc: '静坐修炼时，你突然有所领悟...',
                type: 'opportunity',
                minRealm: 0,
                choices: [
                    {
                        text: '深入感悟',
                        result: () => {
                            gameData.player.breakthroughProgress = Math.min(100, gameData.player.breakthroughProgress + 15);
                            return '你陷入深度感悟，突破进度+15%';
                        }
                    },
                    {
                        text: '继续正常修炼',
                        result: () => {
                            const gain = 100 + gameData.player.realm * 50;
                            gameData.player.spiritualPower += gain;
                            return `你继续修炼，灵力+${formatNumber(gain)}`;
                        }
                    }
                ]
            },
            
            strange_fog: {
                name: '诡异迷雾',
                desc: '一团迷雾笼罩了你的修炼之地，其中似有异常...',
                type: 'crisis',
                minRealm: 1,
                choices: [
                    {
                        text: '进入探查',
                        result: () => {
                            if (Math.random() < 0.5) {
                                const gain = 200 + gameData.player.realm * 80;
                                gameData.player.spiritStone += gain;
                                return `迷雾中你发现了隐藏的宝藏，获得 ${gain} 灵石`;
                            } else {
                                const loss = Math.floor(gameData.player.spiritualPower * 0.3);
                                gameData.player.spiritualPower *= 0.7;
                                return `迷雾中有诡异力量，损失了 ${formatNumber(loss)} 灵力`;
                            }
                        }
                    },
                    {
                        text: '离开此地',
                        result: () => {
                            return '你谨慎地避开了迷雾区域';
                        }
                    }
                ]
            },
            
            inner_demon: {
                name: '心魔劫',
                desc: '修炼中心魔出现，考验你的道心...',
                type: 'crisis',
                minRealm: 3,
                choices: [
                    {
                        text: '消耗丹药压制（需要10枚丹药）',
                        canChoose: () => gameData.player.pills >= 10,
                        result: () => {
                            gameData.player.pills -= 10;
                            gameData.player.breakthroughProgress = Math.min(100, gameData.player.breakthroughProgress + 25);
                            return '你成功克服心魔，道心更加坚定，突破进度+25%！';
                        }
                    },
                    {
                        text: '凭意志抵抗',
                        result: () => {
                            if (Math.random() < 0.6) {
                                gameData.player.breakthroughProgress = Math.min(100, gameData.player.breakthroughProgress + 15);
                                return '你凭借坚定意志战胜了心魔，突破进度+15%';
                            } else {
                                const loss = Math.floor(gameData.player.spiritualPower * 0.4);
                                gameData.player.spiritualPower *= 0.6;
                                gameData.player.breakthroughProgress = Math.max(0, gameData.player.breakthroughProgress - 10);
                                return `心魔难以抵挡，灵力-${formatNumber(loss)}，突破进度-10%`;
                            }
                        }
                    }
                ]
            },
            
            immortal_scripture: {
                name: '仙经残卷',
                desc: '你偶然得到一卷残缺的仙经...',
                type: 'opportunity',
                minRealm: 4,
                choices: [
                    {
                        text: '潜心研读（消耗200灵石）',
                        canChoose: () => gameData.player.spiritStone >= 200,
                        result: () => {
                            gameData.player.spiritStone -= 200;
                            const gain = Math.floor(gameData.player.spiritualPower * 0.5);
                            gameData.player.spiritualPower += gain;
                            gameData.player.breakthroughProgress = 100;
                            return `你参透仙经奥义！灵力+${formatNumber(gain)}，突破进度直接达到100%！`;
                        }
                    },
                    {
                        text: '卖给藏经阁',
                        result: () => {
                            const gain = 300 + gameData.player.realm * 100;
                            gameData.player.spiritStone += gain;
                            return `藏经阁高价收购，获得 ${gain} 灵石`;
                        }
                    }
                ]
            },
            
            material_mine: {
                name: '材料矿脉',
                desc: '你发现了一处矿脉，蕴含丰富的炼器材料...',
                type: 'opportunity',
                minRealm: 0,
                choices: [
                    {
                        text: '采集材料（消耗100灵力）',
                        canChoose: () => gameData.player.spiritualPower >= 100,
                        result: () => {
                            gameData.player.spiritualPower -= 100;
                            gameData.materials = gameData.materials || { ironOre: 0, cloth: 0, spiritCrystal: 0 };
                            const ironGain = 5 + Math.floor(gameData.player.realm / 2);
                            const clothGain = 3 + Math.floor(gameData.player.realm / 3);
                            const crystalGain = 1 + Math.floor(gameData.player.realm / 4);
                            gameData.materials.ironOre = (gameData.materials.ironOre || 0) + ironGain;
                            gameData.materials.cloth = (gameData.materials.cloth || 0) + clothGain;
                            gameData.materials.spiritCrystal = (gameData.materials.spiritCrystal || 0) + crystalGain;
                            return `采集成功：铁矿×${ironGain}，布料×${clothGain}，灵晶×${crystalGain}！`;
                        }
                    },
                    {
                        text: '放弃',
                        result: () => '你选择离开'
                    }
                ]
            },
            
            artifact_discovery: {
                name: '法宝现世',
                desc: '你发现了一件法宝，似乎与你有缘...',
                type: 'opportunity',
                minRealm: 1,
                choices: [
                    {
                        text: '炼化法宝（消耗500灵石）',
                        canChoose: () => gameData.player.spiritStone >= 500,
                        result: () => {
                            gameData.player.spiritStone -= 500;
                            gameData.materials = gameData.materials || { ironOre: 0, cloth: 0, spiritCrystal: 0 };
                            const matGain = 3 + gameData.player.realm;
                            gameData.materials.spiritCrystal = (gameData.materials.spiritCrystal || 0) + matGain;
                            // 随机获得一个符合境界的法宝
                            const availableArtifacts = Object.keys(artifacts).filter(id => 
                                artifacts[id].requiredRealm <= gameData.player.realm &&
                                !gameData.artifacts.includes(id)
                            );
                            if (availableArtifacts.length > 0) {
                                const artifactId = availableArtifacts[Math.floor(Math.random() * availableArtifacts.length)];
                                gameData.artifacts.push(artifactId);
                                return `<span><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"currentColor\" style=\"vertical-align: -2px; margin-right: 4px;\"><path d=\"M6.5,21L5,19.5L12,12.5L10.5,11L7,14.5L5.5,13L9,9.5L7.5,8L3,12.5L1.5,11L8,4.5L9.5,6L11,4.5L12.5,6L14,4.5L22,12.5L20.5,14L16,9.5L14.5,11L18,14.5L16.5,16L13,12.5L11.5,14L18.5,21H6.5Z\"/></svg>你成功炼化了 ${artifacts[artifactId].name}，并获得${matGain}个灵晶！</span>`;
                            } else {
                                gameData.player.spiritualPower += 1000;
                                return `法宝与你无缘，但获得了1000灵力和${matGain}个灵晶`;
                            }
                        }
                    },
                    {
                        text: '放弃',
                        result: () => {
                            return '你选择离开';
                        }
                    }
                ]
            },
            
            // === 飞升专属事件 ===
            immortal_meeting: {
                name: '<svg width="14" height="14" viewBox="0 0 24 24" fill="#f1c40f" style="vertical-align: -2px; margin-right: 4px;"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/></svg>仙人相会',
                desc: '你遇到了一位真正的仙人，他来自仙界...',
                type: 'opportunity',
                minRealm: 0,
                minAscension: 1,
                choices: [
                    {
                        text: '请教仙道',
                        result: () => {
                            const gain = Math.floor(gameData.player.spiritualPower * (0.5 + gameData.ascensionCount * 0.1));
                            gameData.player.spiritualPower += gain;
                            gameData.player.breakthroughProgress = 100;
                            return `仙人传授了仙界修炼之法！灵力+${formatNumber(gain)}，突破进度100%`;
                        }
                    },
                    {
                        text: '离开',
                        result: () => {
                            const gain = 500 + gameData.ascensionCount * 200;
                            gameData.player.spiritStone += gain;
                            return `仙人赠予你${gain}块仙石作为缘分`;
                        }
                    }
                ]
            },
            
            celestial_fragment: {
                name: '<svg width="14" height="14" viewBox="0 0 24 24" fill="#f1c40f" style="vertical-align: -2px; margin-right: 4px;"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/></svg>仙界碎片',
                desc: '仙界与凡界的空间裂缝出现，可以获取仙界资源...',
                type: 'opportunity',
                minRealm: 2,
                minAscension: 2,
                choices: [
                    {
                        text: '进入仙界碎片（消耗1000灵力）',
                        canChoose: () => gameData.player.spiritualPower >= 1000,
                        result: () => {
                            gameData.player.spiritualPower -= 1000;
                            const stoneGain = 1000 + gameData.ascensionCount * 300;
                            const pillGain = 10 + gameData.ascensionCount * 3;
                            gameData.player.spiritStone += stoneGain;
                            gameData.player.pills += pillGain;
                            return `<span><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"#f1c40f\" style=\"vertical-align: -2px; margin-right: 4px;\"><path d=\"M13,3L4,14H12L11,21L20,10H12L13,3Z\"/></svg>仙界碎片中获得：${stoneGain}灵石，${pillGain}丹药！</span>`;
                        }
                    },
                    {
                        text: '观望',
                        result: () => {
                            const gain = 300 + gameData.ascensionCount * 100;
                            gameData.player.spiritStone += gain;
                            return `你获得了一些散落的仙界灵气，转化为${gain}灵石`;
                        }
                    }
                ]
            },
            
            past_life_memory: {
                name: '<svg width="14" height="14" viewBox="0 0 24 24" fill="#f1c40f" style="vertical-align: -2px; margin-right: 4px;"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/></svg>前世记忆',
                desc: '飞升后的你偶尔会回忆起前世的修炼经历...',
                type: 'opportunity',
                minRealm: 0,
                minAscension: 1,
                choices: [
                    {
                        text: '沉浸于回忆',
                        result: () => {
                            const multiplier = 1 + gameData.ascensionCount * 0.3;
                            const gain = Math.floor(gameData.player.spiritualPower * multiplier);
                            gameData.player.spiritualPower += gain;
                            return `前世经验让你修炼速度暴增！灵力+${formatNumber(gain)}`;
                        }
                    },
                    {
                        text: '继续修炼',
                        result: () => {
                            const gain = 1000 * gameData.ascensionCount;
                            gameData.player.spiritualPower += gain;
                            return `你从记忆中获得一些感悟，灵力+${formatNumber(gain)}`;
                        }
                    }
                ]
            },
            
            // 灵宠相关事件
            pet_encounter: {
                name: '<svg width="14" height="14" viewBox="0 0 24 24" fill="#8e44ad" style="vertical-align: -2px; margin-right: 4px;"><path d="M4.5,9A1.5,1.5 0 0,1 6,10.5A1.5,1.5 0 0,1 4.5,12A1.5,1.5 0 0,1 3,10.5A1.5,1.5 0 0,1 4.5,9M9,7A1.5,1.5 0 0,1 10.5,8.5A1.5,1.5 0 0,1 9,10A1.5,1.5 0 0,1 7.5,8.5A1.5,1.5 0 0,1 9,7M15,7A1.5,1.5 0 0,1 16.5,8.5A1.5,1.5 0 0,1 15,10A1.5,1.5 0 0,1 13.5,8.5A1.5,1.5 0 0,1 15,7M19.5,9A1.5,1.5 0 0,1 21,10.5A1.5,1.5 0 0,1 19.5,12A1.5,1.5 0 0,1 18,10.5A1.5,1.5 0 0,1 19.5,9M12,12C9.5,12 6,13.5 6,16C6,17.66 8.34,19 12,19C15.66,19 18,17.66 18,16C18,13.5 14.5,12 12,12Z"/></svg>灵宠相遇',
                desc: '一只灵兽幼崽出现在你面前，它似乎很喜欢你...',
                type: 'opportunity',
                minRealm: 1,
                choices: [
                    {
                        text: '收为灵宠（消耗300灵石）',
                        canChoose: () => gameData.player.spiritStone >= 300,
                        result: () => {
                            gameData.player.spiritStone -= 300;
                            // 随机获得符合境界的灵宠
                            const availablePets = Object.keys(pets).filter(id => {
                                const pet = pets[id];
                                const realmOk = !pet.requiredRealm || pet.requiredRealm <= gameData.player.realm;
                                const ascensionOk = !pet.requiredAscension || pet.requiredAscension <= gameData.ascensionCount;
                                return realmOk && ascensionOk && !gameData.pets.includes(id);
                            });
                            
                            if (availablePets.length > 0) {
                                const petId = availablePets[Math.floor(Math.random() * availablePets.length)];
                                gameData.pets.push(petId);
                                return `<span><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"#8e44ad\" style=\"vertical-align: -2px; margin-right: 4px;\"><path d=\"M4.5,9A1.5,1.5 0 0,1 6,10.5A1.5,1.5 0 0,1 4.5,12A1.5,1.5 0 0,1 3,10.5A1.5,1.5 0 0,1 4.5,9M9,7A1.5,1.5 0 0,1 10.5,8.5A1.5,1.5 0 0,1 9,10A1.5,1.5 0 0,1 7.5,8.5A1.5,1.5 0 0,1 9,7M15,7A1.5,1.5 0 0,1 16.5,8.5A1.5,1.5 0 0,1 15,10A1.5,1.5 0 0,1 13.5,8.5A1.5,1.5 0 0,1 15,7M19.5,9A1.5,1.5 0 0,1 21,10.5A1.5,1.5 0 0,1 19.5,12A1.5,1.5 0 0,1 18,10.5A1.5,1.5 0 0,1 19.5,9M12,12C9.5,12 6,13.5 6,16C6,17.66 8.34,19 12,19C15.66,19 18,17.66 18,16C18,13.5 14.5,12 12,12Z\"/></svg>恭喜！你收获了灵宠：${pets[petId].name}（${pets[petId].rarity}）</span>`;
                            } else {
                                gameData.player.spiritStone += 300;
                                gameData.player.spiritualPower += 500;
                                return '灵兽与你无缘，但你获得了500灵力作为补偿（灵石已返还）';
                            }
                        }
                    },
                    {
                        text: '放它离开',
                        result: () => {
                            const gain = 100 + gameData.player.realm * 30;
                            gameData.player.spiritStone += gain;
                            return `灵兽感激你的善意，留下了${gain}块灵石`;
                        }
                    }
                ]
            },
            
            // ==================== 仙界专属事件 ====================
            immortal_dao_comprehension: {
                name: '<svg width="14" height="14" viewBox="0 0 24 24" fill="#f1c40f" style="vertical-align: -2px; margin-right: 4px;"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/></svg>仙道顿悟',
                desc: '在仙界修炼，你突然领悟了仙道真谛...',
                type: 'opportunity',
                minRealm: 0,
                requireImmortalWorld: true,
                choices: [
                    {
                        text: '深入参悟（消耗50仙石）',
                        canChoose: () => (gameData.player.immortalStone || 0) >= 50,
                        result: () => {
                            gameData.player.immortalStone -= 50;
                            const gain = Math.floor(gameData.player.spiritualPower * 2);
                            gameData.player.spiritualPower += gain;
                            gameData.player.breakthroughProgress = 100;
                            return `<span><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"#f1c40f\" style=\"vertical-align: -2px; margin-right: 4px;\"><path d=\"M13,3L4,14H12L11,21L20,10H12L13,3Z\"/></svg>仙道顿悟！灵力暴增+${formatNumber(gain)}，突破进度直达100%！</span>`;
                        }
                    },
                    {
                        text: '继续修炼',
                        result: () => {
                            const gain = Math.floor(gameData.player.spiritualPower * 0.5);
                            gameData.player.spiritualPower += gain;
                            return `获得一些感悟，灵力+${formatNumber(gain)}`;
                        }
                    }
                ]
            },
            
            immortal_treasure: {
                name: '<svg width="14" height="14" viewBox="0 0 24 24" fill="#f1c40f" style="vertical-align: -2px; margin-right: 4px;"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/></svg>仙界宝库',
                desc: '你发现了一座隐藏的仙界宝库...',
                type: 'opportunity',
                minRealm: 0,
                requireImmortalWorld: true,
                choices: [
                    {
                        text: '全力探索（消耗30%灵力）',
                        canChoose: () => gameData.player.spiritualPower > 1000,
                        result: () => {
                            gameData.player.spiritualPower *= 0.7;
                            const stoneGain = 5000 + gameData.player.immortalRealm * 2000;
                            const immortalStoneGain = 50 + gameData.player.immortalRealm * 20;
                            const daoFruitGain = 3 + Math.floor(gameData.player.immortalRealm / 2);
                            gameData.player.spiritStone += stoneGain;
                            gameData.player.immortalStone = (gameData.player.immortalStone || 0) + immortalStoneGain;
                            gameData.player.daoFruit = (gameData.player.daoFruit || 0) + daoFruitGain;
                            return `<span><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"#f1c40f\" style=\"vertical-align: -2px; margin-right: 4px;\"><path d=\"M13,3L4,14H12L11,21L20,10H12L13,3Z\"/></svg>仙宝无数！获得${stoneGain}灵石、${immortalStoneGain}仙石、${daoFruitGain}道果！</span>`;
                        }
                    },
                    {
                        text: '小心翼翼地收集',
                        result: () => {
                            const gain = 2000 + gameData.player.immortalRealm * 500;
                            gameData.player.spiritStone += gain;
                            return `谨慎收集，获得${gain}灵石`;
                        }
                    },
                    {
                        text: '离开',
                        result: () => {
                            return '你选择不冒险';
                        }
                    }
                ]
            },
            
            immortal_challenge: {
                name: '<svg width="14" height="14" viewBox="0 0 24 24" fill="#f1c40f" style="vertical-align: -2px; margin-right: 4px;"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/></svg>仙人挑战',
                desc: '一位仙人向你发起挑战，这是证明自己的机会...',
                type: 'opportunity',
                minRealm: 0,
                requireImmortalWorld: true,
                choices: [
                    {
                        text: '接受挑战（消耗5000灵力）',
                        canChoose: () => gameData.player.spiritualPower >= 5000,
                        result: () => {
                            gameData.player.spiritualPower -= 5000;
                            const powerLevel = calculateCombatPower();
                            if (Math.random() < 0.6) {
                                const stoneGain = 10000 + gameData.player.immortalRealm * 3000;
                                const immortalStoneGain = 100 + gameData.player.immortalRealm * 30;
                                gameData.player.spiritStone += stoneGain;
                                gameData.player.immortalStone = (gameData.player.immortalStone || 0) + immortalStoneGain;
                                gameData.player.breakthroughProgress = Math.min(100, gameData.player.breakthroughProgress + 50);
                                return `<span><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"currentColor\" style=\"vertical-align: -2px; margin-right: 4px;\"><path d=\"M6.5,21L5,19.5L12,12.5L10.5,11L7,14.5L5.5,13L9,9.5L7.5,8L3,12.5L1.5,11L8,4.5L9.5,6L11,4.5L12.5,6L14,4.5L22,12.5L20.5,14L16,9.5L14.5,11L18,14.5L16.5,16L13,12.5L11.5,14L18.5,21H6.5Z\"/></svg>挑战成功！获得${stoneGain}灵石、${immortalStoneGain}仙石，突破进度+50%！</span>`;
                            } else {
                                return '挑战失败，但你获得了宝贵的经验...';
                            }
                        }
                    },
                    {
                        text: '婉拒挑战',
                        result: () => {
                            const gain = 1000;
                            gameData.player.spiritStone += gain;
                            return `仙人赞赏你的谦逊，赠予${gain}灵石`;
                        }
                    }
                ]
            },
            
            // 五行相关事件
            element_trial: {
                name: '<svg width="14" height="14" viewBox="0 0 24 24" fill="#e74c3c" style="vertical-align: -2px; margin-right: 4px;"><path d="M17.66,11.2C17.24,10.32 16.68,9.5 16,8.8C14.54,7.27 13.5,5.5 13,4C12.5,5.5 11.46,7.27 10,8.8C9.32,9.5 8.76,10.32 8.34,11.2C7.5,12.89 7.5,14.5 8.31,15.97C9.23,17.64 10.96,18.84 13,19.22V22H11V24H13H15V22H13V19.22C15.04,18.84 16.77,17.64 17.69,15.97C18.5,14.5 18.5,12.89 17.66,11.2Z"/></svg>五行试炼',
                desc: '你遇到了五行试炼之地，可以提升属性强度...',
                type: 'opportunity',
                minRealm: 2,
                choices: [
                    {
                        text: '参加试炼（消耗20仙石）',
                        canChoose: () => (gameData.player.immortalStone || 0) >= 20 && gameData.player.element !== 'none',
                        result: () => {
                            if (gameData.player.element === 'none') {
                                return '你尚未觉醒五行属性，无法参加试炼';
                            }
                            gameData.player.immortalStone -= 20;
                            gameData.player.elementPower = (gameData.player.elementPower || 1) + 1;
                            const element = elementsData[gameData.player.element];
                            return `<span><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"#f1c40f\" style=\"vertical-align: -2px; margin-right: 4px;\"><path d=\"M13,3L4,14H12L11,21L20,10H12L13,3Z\"/></svg>试炼成功！${element.name}属性强度提升至Lv.${gameData.player.elementPower}！</span>`;
                        }
                    },
                    {
                        text: '放弃',
                        result: () => {
                            return '你选择离开试炼之地';
                        }
                    }
                ]
            },
            
            dao_fruit_tree: {
                name: '<svg width="14" height="14" viewBox="0 0 24 24" fill="#27ae60" style="vertical-align: -2px; margin-right: 4px;"><path d="M12,2A7,7 0 0,1 19,9A7,7 0 0,1 12,16A7,7 0 0,1 5,9A7,7 0 0,1 12,2M11,17H13V22H11V17Z"/></svg>道果神树',
                desc: '你发现了一棵结满道果的神树...',
                type: 'opportunity',
                minRealm: 4,
                choices: [
                    {
                        text: '虔诚祈祷',
                        result: () => {
                            const fruitGain = 1 + Math.floor(Math.random() * 3);
                            gameData.player.daoFruit = (gameData.player.daoFruit || 0) + fruitGain;
                            return `神树感应到你的诚心，赐予${fruitGain}枚道果！`;
                        }
                    },
                    {
                        text: '强行采摘（消耗1000灵力）',
                        canChoose: () => gameData.player.spiritualPower >= 1000,
                        result: () => {
                            gameData.player.spiritualPower -= 1000;
                            if (Math.random() < 0.7) {
                                const fruitGain = 3 + Math.floor(Math.random() * 4);
                                gameData.player.daoFruit = (gameData.player.daoFruit || 0) + fruitGain;
                                return `强行采摘成功！获得${fruitGain}枚道果`;
                            } else {
                                gameData.player.spiritualPower *= 0.5;
                                return '神树反噬！损失了大量灵力...';
                            }
                        }
                    },
                    {
                        text: '离开',
                        result: () => {
                            const stoneGain = 500;
                            gameData.player.spiritStone += stoneGain;
                            return `你拾取了一些掉落的灵石：${stoneGain}`;
                        }
                    }
                ]
            },
            
            // ==================== NPC相遇事件 ====================
            meet_cultivator: {
                name: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle; margin-right: 4px;"><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/></svg>偶遇修士',
                desc: '修炼途中，你偶遇了一位修士...',
                type: 'opportunity',
                minRealm: 0,
                choices: [
                    {
                        text: '上前攀谈',
                        result: () => {
                            if (typeof meetRandomNPC === 'function') {
                                const metNPC = meetRandomNPC();
                                if (metNPC && relationshipNPCs[metNPC]) {
                                    return `你结识了${relationshipNPCs[metNPC].name}！`;
                                } else {
                                    const gain = 50 + gameData.player.realm * 20;
                                    gameData.player.spiritStone += gain;
                                    return `对方与你交流了一些修炼心得，获得${gain}灵石`;
                                }
                            }
                            return '你与对方交流了一番';
                        }
                    },
                    {
                        text: '保持距离',
                        result: () => {
                            return '你选择不多管闲事';
                        }
                    }
                ]
            },
            
            meet_sect_member: {
                name: '<svg width="14" height="14" viewBox="0 0 24 24" fill="#2c3e50" style="vertical-align: -2px; margin-right: 4px;"><path d="M3,10L12,3L21,10H18V20H6V10H3Z"/></svg>遇到同门',
                desc: '在宗门附近，你遇到了一位同门师兄弟...',
                type: 'opportunity',
                minRealm: 1,
                choices: [
                    {
                        text: '上前结识',
                        canChoose: () => gameData.sect && gameData.sect !== 'rogue',
                        result: () => {
                            if (!gameData.sect || gameData.sect === 'rogue') {
                                return '你还未加入门派';
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
                            if (npcSectKey && typeof meetRandomNPC === 'function') {
                                const metNPC = meetRandomNPC(npcSectKey);
                                if (metNPC && relationshipNPCs[metNPC]) {
                                    return `<span><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"currentColor\" style=\"vertical-align: -2px; margin-right: 4px;\"><path d=\"M11,6H14L17,9V11.91L12.83,16.08L11,14.25V6M5,11V22H3V11H5M10,11V22H6V11H10M22,11V22H20V11H22M17,11V19.6L12.4,15L17,11Z\"/></svg>你结识了同门${relationshipNPCs[metNPC].name}！</span>`;
                                }
                            }
                            
                            const gain = 100 + gameData.player.realm * 30;
                            gameData.player.spiritStone += gain;
                            return `与同门交流，获得${gain}灵石`;
                        }
                    },
                    {
                        text: '继续修炼',
                        result: () => {
                            const gain = 50 + gameData.player.realm * 20;
                            gameData.player.spiritualPower += gain;
                            return `专注修炼，灵力+${formatNumber(gain)}`;
                        }
                    }
                ]
            },
            
            sect_gathering: {
                name: '<svg width="14" height="14" viewBox="0 0 24 24" fill="#9b59b6" style="vertical-align: -2px; margin-right: 4px;"><path d="M2,22L23,13L2,4V10L17,13L2,16V22Z"/></svg>门派聚会',
                desc: '宗门举办聚会，众多弟子齐聚一堂...',
                type: 'opportunity',
                minRealm: 1,
                choices: [
                    {
                        text: '参加聚会（消耗100灵石）',
                        canChoose: () => gameData.player.spiritStone >= 100 && gameData.sect && gameData.sect !== 'rogue',
                        result: () => {
                            if (!gameData.sect || gameData.sect === 'rogue') {
                                return '你还未加入门派';
                            }
                            
                            gameData.player.spiritStone -= 100;
                            
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
                            let meetCount = 0;
                            
                            // 聚会可以认识多个NPC
                            if (npcSectKey && typeof getUnknownNPCs === 'function' && typeof meetNPC === 'function') {
                                const unknownNPCs = getUnknownNPCs(npcSectKey);
                                const meetAmount = Math.min(2, unknownNPCs.length);
                                
                                for (let i = 0; i < meetAmount; i++) {
                                    const randomIndex = Math.floor(Math.random() * unknownNPCs.length);
                                    const npcId = unknownNPCs.splice(randomIndex, 1)[0];
                                    if (meetNPC(npcId, '门派聚会')) {
                                        meetCount++;
                                    }
                                }
                            }
                            
                            if (meetCount > 0) {
                                return `<span><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"#9b59b6\" style=\"vertical-align: -2px; margin-right: 4px;\"><path d=\"M2,22L23,13L2,4V10L17,13L2,16V22Z\"/></svg>聚会收获颇丰！结识了${meetCount}位同门</span>`;
                            } else {
                                const gain = 200;
                                gameData.player.spiritStone += gain;
                                return `聚会很愉快，获得${gain}灵石作为礼物`;
                            }
                        }
                    },
                    {
                        text: '婉拒',
                        result: () => {
                            return '你专注于修炼，婉拒了邀请';
                        }
                    }
                ]
            },
            
            help_cultivator: {
                name: '<svg width="14" height="14" viewBox="0 0 24 24" fill="#e74c3c" style="vertical-align: -2px; margin-right: 4px;"><path d="M11,15H13V17H11V15M11,7H13V13H11V7M1,21H23L12,2"/></svg>修士求助',
                desc: '一位修士遇到了困难，向你求助...',
                type: 'opportunity',
                minRealm: 1,
                choices: [
                    {
                        text: '伸出援手（消耗200灵力）',
                        canChoose: () => gameData.player.spiritualPower >= 200,
                        result: () => {
                            gameData.player.spiritualPower -= 200;
                            
                            // 有几率认识一个NPC
                            if (Math.random() < 0.7 && typeof meetRandomNPC === 'function') {
                                const metNPC = meetRandomNPC();
                                if (metNPC && relationshipNPCs[metNPC]) {
                                    return `<span><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"#f1c40f\" style=\"vertical-align: -2px; margin-right: 4px;\"><path d=\"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27Z\"/></svg>对方感激不尽！你结识了${relationshipNPCs[metNPC].name}，初始好感+10</span>`;
                                }
                            }
                            
                            const stoneGain = 300 + gameData.player.realm * 50;
                            gameData.player.spiritStone += stoneGain;
                            return `对方感激地赠送了${stoneGain}灵石`;
                        }
                    },
                    {
                        text: '婉拒离开',
                        result: () => {
                            return '你选择不多管闲事';
                        }
                    }
                ]
            },
            
            cross_sect_exchange: {
                name: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M11,6H14L17,9V11.91L12.83,16.08L11,14.25V6M5,11V22H3V11H5M10,11V22H6V11H10M22,11V22H20V11H22M17,11V19.6L12.4,15L17,11Z"/></svg>门派交流',
                desc: '各大门派举办交流大会，你是否参加？',
                type: 'opportunity',
                minRealm: 2,
                choices: [
                    {
                        text: '参加交流（消耗500灵石）',
                        canChoose: () => gameData.player.spiritStone >= 500,
                        result: () => {
                            gameData.player.spiritStone -= 500;
                            
                            let meetCount = 0;
                            
                            // 可以认识其他门派的NPC
                            if (typeof getUnknownNPCs === 'function' && typeof meetNPC === 'function') {
                                const unknownNPCs = getUnknownNPCs();
                                const meetAmount = Math.min(3, unknownNPCs.length);
                                
                                for (let i = 0; i < meetAmount; i++) {
                                    const randomIndex = Math.floor(Math.random() * unknownNPCs.length);
                                    const npcId = unknownNPCs.splice(randomIndex, 1)[0];
                                    if (meetNPC(npcId, '门派交流大会')) {
                                        meetCount++;
                                    }
                                }
                            }
                            
                            if (meetCount > 0) {
                                const powerGain = 1000 + gameData.player.realm * 300;
                                gameData.player.spiritualPower += powerGain;
                                return `<span><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"#f1c40f\" style=\"vertical-align: -2px; margin-right: 4px;\"><path d=\"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27Z\"/></svg>交流收获巨大！结识了${meetCount}位其他门派的修士，灵力+${formatNumber(powerGain)}</span>`;
                            } else {
                                const powerGain = 2000;
                                gameData.player.spiritualPower += powerGain;
                                return `交流获得了许多修炼心得，灵力+${formatNumber(powerGain)}`;
                            }
                        }
                    },
                    {
                        text: '不参加',
                        result: () => {
                            return '你选择专心修炼';
                        }
                    }
                ]
            },
            
            // ==================== 拜师相关事件 ====================
            master_guidance: {
                name: '师傅指点',
                desc: '师傅看你修炼勤奋，主动传授了你一些修炼心得...',
                type: 'opportunity',
                minRealm: 1,
                canTrigger: () => {
                    return gameData.masterId && gameData.npcData[gameData.masterId] && 
                           gameData.npcData[gameData.masterId].relationship.favor >= 30;
                },
                choices: [
                    {
                        text: '虚心领教',
                        result: () => {
                            const master = gameData.npcData[gameData.masterId];
                            const powerGain = 1500 + gameData.player.realm * 500;
                            gameData.player.spiritualPower += powerGain;
                            master.relationship.favor = Math.min(100, master.relationship.favor + 10);
                            const masterName = relationshipNPCs[gameData.masterId].name;
                            return `${masterName}的指点让你受益匪浅！灵力+${formatNumber(powerGain)}，好感度+10`;
                        }
                    },
                    {
                        text: '表示已经掌握',
                        result: () => {
                            const master = gameData.npcData[gameData.masterId];
                            master.relationship.favor = Math.max(0, master.relationship.favor - 5);
                            const masterName = relationshipNPCs[gameData.masterId].name;
                            return `${masterName}似乎有些失望，好感度-5`;
                        }
                    }
                ]
            },
            
            master_test: {
                name: '师门考核',
                desc: '师傅决定考核你的修炼成果，看你是否有所长进...',
                type: 'opportunity',
                minRealm: 2,
                canTrigger: () => {
                    return gameData.masterId && gameData.npcData[gameData.masterId] && 
                           gameData.npcData[gameData.masterId].relationship.favor >= 40;
                },
                choices: [
                    {
                        text: '接受考核（消耗50%灵力）',
                        canChoose: () => gameData.player.spiritualPower >= 1000,
                        result: () => {
                            gameData.player.spiritualPower *= 0.5;
                            const master = gameData.npcData[gameData.masterId];
                            const masterName = relationshipNPCs[gameData.masterId].name;
                            
                            // 根据境界判定考核结果
                            const success = gameData.player.realm >= 3 || Math.random() > 0.3;
                            
                            if (success) {
                                const stoneGain = 300 + gameData.player.realm * 100;
                                const pillGain = 5 + gameData.player.realm;
                                gameData.player.spiritStone += stoneGain;
                                gameData.player.pills += pillGain;
                                master.relationship.favor = Math.min(100, master.relationship.favor + 15);
                                return `你通过了考核！${masterName}非常满意，赏赐${stoneGain}灵石、${pillGain}丹药，好感度+15`;
                            } else {
                                master.relationship.favor = Math.min(100, master.relationship.favor + 5);
                                return `虽未完全达到要求，但${masterName}认可了你的努力，好感度+5`;
                            }
                        }
                    },
                    {
                        text: '请求缓期',
                        result: () => {
                            const master = gameData.npcData[gameData.masterId];
                            const masterName = relationshipNPCs[gameData.masterId].name;
                            return `${masterName}同意了你的请求，让你继续修炼`;
                        }
                    }
                ]
            },
            
            master_in_danger: {
                name: '师傅遇险',
                desc: '得知师傅在外历练时遇到了危险，需要援助！',
                type: 'crisis',
                minRealm: 3,
                canTrigger: () => {
                    return gameData.masterId && gameData.npcData[gameData.masterId] && 
                           gameData.npcData[gameData.masterId].relationship.favor >= 50;
                },
                choices: [
                    {
                        text: '立即前往救援（消耗80%灵力和500灵石）',
                        canChoose: () => gameData.player.spiritualPower >= 2000 && gameData.player.spiritStone >= 500,
                        result: () => {
                            gameData.player.spiritualPower *= 0.2;
                            gameData.player.spiritStone -= 500;
                            const master = gameData.npcData[gameData.masterId];
                            const masterName = relationshipNPCs[gameData.masterId].name;
                            
                            master.relationship.favor = Math.min(100, master.relationship.favor + 30);
                            master.relationship.loyalty = Math.min(100, master.relationship.loyalty + 20);
                            master.relationship.trust = Math.min(100, master.relationship.trust + 20);
                            
                            // 奖励一个高级功法
                            const masterConfig = relationshipNPCs[gameData.masterId];
                            if (masterConfig.teachTechniques && masterConfig.teachTechniques.length > 0) {
                                const technique = masterConfig.teachTechniques[0];
                                if (!gameData.learnedTechniques) gameData.learnedTechniques = {};
                                if (!gameData.learnedTechniques[technique]) {
                                    gameData.learnedTechniques[technique] = {
                                        learnedFrom: gameData.masterId,
                                        learnedAt: Date.now()
                                    };
                                    return `<span class="log-success">你及时赶到并救下了${masterName}！${masterName}非常感激，传授了你一门绝学，好感度+30，忠诚度+20，信任度+20</span>`;
                                }
                            }
                            
                            const powerGain = 3000;
                            gameData.player.spiritualPower += powerGain;
                            return `你及时赶到并救下了${masterName}！${masterName}非常感激，好感度+30，忠诚度+20，信任度+20，灵力+${formatNumber(powerGain)}`;
                        }
                    },
                    {
                        text: '通知门派求援',
                        result: () => {
                            const master = gameData.npcData[gameData.masterId];
                            const masterName = relationshipNPCs[gameData.masterId].name;
                            master.relationship.favor = Math.max(0, master.relationship.favor - 10);
                            master.relationship.trust = Math.max(0, master.relationship.trust - 15);
                            return `门派及时派人救回了${masterName}，但他对你有些失望，好感度-10，信任度-15`;
                        }
                    },
                    {
                        text: '不管不问',
                        result: () => {
                            const master = gameData.npcData[gameData.masterId];
                            const masterName = relationshipNPCs[gameData.masterId].name;
                            master.relationship.favor = Math.max(0, master.relationship.favor - 30);
                            master.relationship.loyalty = Math.max(0, master.relationship.loyalty - 30);
                            master.relationship.trust = 0;
                            return `${masterName}虽然脱险，但对你极度失望，好感度-30，忠诚度-30，信任度归零`;
                        }
                    }
                ]
            },
            
            master_breakthrough: {
                name: '师傅突破',
                desc: '师傅即将突破境界，需要护法以防走火入魔...',
                type: 'opportunity',
                minRealm: 3,
                canTrigger: () => {
                    return gameData.masterId && gameData.npcData[gameData.masterId] && 
                           gameData.npcData[gameData.masterId].relationship.favor >= 60;
                },
                choices: [
                    {
                        text: '全力护法（消耗50%灵力）',
                        canChoose: () => gameData.player.spiritualPower >= 1000,
                        result: () => {
                            gameData.player.spiritualPower *= 0.5;
                            const master = gameData.npcData[gameData.masterId];
                            const masterName = relationshipNPCs[gameData.masterId].name;
                            
                            // 师傅成功突破
                            if (master.realmLevel < 9) {
                                master.realmLevel++;
                            } else if (master.realm < 8) {
                                master.realm++;
                                master.realmLevel = 1;
                            }
                            
                            master.relationship.favor = Math.min(100, master.relationship.favor + 20);
                            master.relationship.loyalty = 100;
                            
                            const powerGain = 2000 + gameData.player.realm * 500;
                            gameData.player.spiritualPower += powerGain;
                            
                            return `在你的护法下，${masterName}成功突破！他对你充满感激，好感度+20，忠诚度达到满值，并传授你修炼心得（灵力+${formatNumber(powerGain)}）`;
                        }
                    },
                    {
                        text: '婉拒，认为自己能力不足',
                        result: () => {
                            const masterName = relationshipNPCs[gameData.masterId]?.name || '师傅';
                            return `${masterName}理解你的担忧，另请他人护法`;
                        }
                    }
                ]
            },
            
            master_gift: {
                name: '师傅馈赠',
                desc: '师傅看你修炼刻苦，准备赠送你一些修炼资源...',
                type: 'opportunity',
                minRealm: 1,
                canTrigger: () => {
                    return gameData.masterId && gameData.npcData[gameData.masterId] && 
                           gameData.npcData[gameData.masterId].relationship.favor >= 70;
                },
                choices: [
                    {
                        text: '欣然接受',
                        result: () => {
                            const stoneGain = 500 + gameData.player.realm * 150;
                            const pillGain = 10 + gameData.player.realm * 2;
                            gameData.player.spiritStone += stoneGain;
                            gameData.player.pills += pillGain;
                            
                            const master = gameData.npcData[gameData.masterId];
                            master.relationship.favor = Math.min(100, master.relationship.favor + 5);
                            
                            const masterName = relationshipNPCs[gameData.masterId].name;
                            return `收到了${masterName}赠送的${stoneGain}灵石和${pillGain}丹药，好感度+5`;
                        }
                    },
                    {
                        text: '谢绝，表示要靠自己努力',
                        result: () => {
                            const master = gameData.npcData[gameData.masterId];
                            master.relationship.favor = Math.min(100, master.relationship.favor + 10);
                            
                            const powerGain = 1000;
                            gameData.player.spiritualPower += powerGain;
                            
                            const masterName = relationshipNPCs[gameData.masterId].name;
                            return `${masterName}对你的态度非常赞赏，好感度+10，并指点了你一些修炼心得（灵力+${formatNumber(powerGain)}）`;
                        }
                    }
                ]
            },
            
            master_ascension_invitation: {
                name: '师傅飞升邀约',
                desc: '师傅即将飞升，希望你能一同飞升，共赴仙界...',
                type: 'opportunity',
                minRealm: 7,
                canTrigger: () => {
                    if (!gameData.masterId || !gameData.npcData[gameData.masterId]) return false;
                    const master = gameData.npcData[gameData.masterId];
                    // 师傅达到渡劫期8层以上，好感度90+，忠诚度80+
                    return master.realm >= 8 && master.realmLevel >= 8 && 
                           master.relationship.favor >= 90 && 
                           master.relationship.loyalty >= 80 &&
                           !master.hasAscended;
                },
                choices: [
                    {
                        text: '与师傅共同飞升（需要渡劫期9层）',
                        canChoose: () => gameData.player.realm >= 8 && gameData.player.realmLevel >= 9,
                        result: () => {
                            const masterName = relationshipNPCs[gameData.masterId]?.name || '师傅';
                            
                            // 师傅一起飞升
                            const master = gameData.npcData[gameData.masterId];
                            master.hasAscended = true;
                            master.ascensionTime = Date.now();
                            master.isInImmortalWorld = true;
                            master.immortalRealm = 0;
                            master.immortalRealmLevel = 1;
                            
                            // 玩家获得特殊奖励
                            gameData.player.spiritStone = Math.floor(gameData.player.spiritStone * 0.7); // 保留70%灵石（比普通飞升多20%）
                            gameData.player.pills = Math.floor(gameData.player.pills * 0.7); // 保留70%丹药
                            
                            if (!gameData.player.immortalStone) gameData.player.immortalStone = 0;
                            if (!gameData.player.daoFruit) gameData.player.daoFruit = 0;
                            
                            gameData.player.immortalStone += 200; // 获得200仙石（比普通飞升多100）
                            gameData.player.daoFruit += 3; // 获得3道果（比普通飞升多2）
                            
                            // 师徒羁绊加成
                            gameData.masterBond = true; // 永久标记
                            
                            // 玩家飞升
                            gameData.player.isInImmortalWorld = true;
                            gameData.player.immortalRealm = 0;
                            gameData.player.immortalRealmLevel = 1;
                            gameData.ascensionCount = (gameData.ascensionCount || 0) + 1;
                            
                            return `<span class="log-success">${getSvg('star')} 你与${masterName}共同飞升！获得师徒羁绊加成：保留70%资源，获得200仙石和3道果，解锁永久"师徒同心"加成（全属性+5%）！</span>`;
                        }
                    },
                    {
                        text: '祝师傅飞升顺利，自己继续修炼',
                        result: () => {
                            const master = gameData.npcData[gameData.masterId];
                            const masterName = relationshipNPCs[gameData.masterId]?.name || '师傅';
                            
                            // 师傅独自飞升
                            master.hasAscended = true;
                            master.ascensionTime = Date.now();
                            
                            return `${masterName}独自飞升了，临别前赠送了你一些修炼资源作为纪念`;
                        }
                    }
                ]
            }
    };