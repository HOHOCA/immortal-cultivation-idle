// 门派定义

const sects = {
            sword_sect: {
                name: '剑宗',
                desc: '以剑道闻名天下，攻击力强大',
                benefits: {
                    spiritualPowerBonus: 0.3,
                    breakthroughBonus: 0.05
                },
                color: '#3498db',
                requiredRealm: 1,
                tasks: ['patrol_mission', 'demon_hunt', 'sect_competition'],
                // 堂口/峰头细分
                divisions: {
                    sword_heart: {
                        name: '剑心峰',
                        desc: '注重剑道基础和剑心淬炼，稳扎稳打',
                        master: 'zhang_jianxin', // 张剑心
                        focus: '基础修炼',
                        bonus: { breakthroughBonus: 0.08 }
                    },
                    sword_intent: {
                        name: '剑意峰',
                        desc: '注重剑意领悟和攻击技巧，杀伐果断',
                        master: 'li_ruxue', // 李如雪
                        focus: '攻击修炼',
                        bonus: { spiritualPowerBonus: 0.35 }
                    },
                    sword_soul: {
                        name: '剑魂峰',
                        desc: '注重剑魂凝聚和剑法感悟，以柔克刚',
                        master: 'wang_xiaohu', // 王小虎
                        focus: '感悟修炼',
                        bonus: { allBonus: 0.15 }
                    }
                }
            },
            pill_sect: {
                name: '丹宗',
                desc: '精通炼丹之术，资源丰富',
                benefits: {
                    pillProduction: 2,
                    spiritStoneBonus: 0.5
                },
                color: '#e74c3c',
                requiredRealm: 1,
                tasks: ['collect_herbs', 'refine_pills', 'research_recipe'],
                divisions: {
                    pill_refining: {
                        name: '炼丹堂',
                        desc: '专精丹药炼制，丹成率高',
                        master: 'chen_yaowang', // 陈药王
                        focus: '炼丹技艺',
                        bonus: { pillProduction: 3 }
                    },
                    herb_garden: {
                        name: '药园',
                        desc: '专精药材种植和采集，资源丰富',
                        master: 'zhao_qingya', // 赵清雅
                        focus: '药材收集',
                        bonus: { spiritStoneBonus: 0.6 }
                    },
                    formula_research: {
                        name: '丹方阁',
                        desc: '专精丹方研究和创新，独门配方',
                        master: 'sun_xiaoyao', // 孙小药
                        focus: '配方研究',
                        bonus: { allBonus: 0.12, pillProduction: 1 }
                    }
                }
            },
            formation_sect: {
                name: '阵宗',
                desc: '擅长阵法，攻守兼备',
                benefits: {
                    spiritualPowerBonus: 0.2,
                    facilityBonus: 0.2
                },
                color: '#9b59b6',
                requiredRealm: 1,
                tasks: ['maintain_formation', 'study_array', 'defend_sect'],
                divisions: {
                    attack_formation: {
                        name: '攻阵堂',
                        desc: '专精进攻阵法，杀伐之道',
                        master: 'liu_zhentian', // 刘阵天
                        focus: '攻击阵法',
                        bonus: { spiritualPowerBonus: 0.28 }
                    },
                    defense_formation: {
                        name: '守阵堂',
                        desc: '专精防御阵法，固若金汤',
                        master: 'zhou_zhenxin', // 周阵心
                        focus: '防御阵法',
                        bonus: { facilityBonus: 0.3 }
                    },
                    illusion_formation: {
                        name: '幻阵堂',
                        desc: '专精幻阵奇术，变化莫测',
                        master: 'wu_zhenzi', // 吴阵子
                        focus: '幻阵技巧',
                        bonus: { allBonus: 0.15 }
                    }
                }
            },
            rogue: {
                name: '散修',
                desc: '不受门派约束，自由自在',
                benefits: {
                    allBonus: 0.1
                },
                color: '#95a5a6',
                requiredRealm: 0,
                tasks: [] // 散修无门派任务
            },
            
            // ==================== 新增门派 ====================
            buddhist_sect: {
                name: '佛宗',
                desc: '慈悲为怀，普度众生，擅长治疗与防护',
                benefits: {
                    spiritualPowerBonus: 0.25,
                    breakthroughBonus: 0.08,
                    pillProduction: 1
                },
                color: '#f39c12',
                requiredRealm: 1,
                tasks: ['meditation_practice', 'save_people', 'buddha_teaching'],
                divisions: {
                    meditation: {
                        name: '禅修院',
                        desc: '专精禅定修炼，静心悟道',
                        master: 'jue_yuan', // 觉远大师
                        focus: '禅定修炼',
                        bonus: { breakthroughBonus: 0.12 }
                    },
                    precepts: {
                        name: '戒律堂',
                        desc: '专精佛法修行，心境平和',
                        master: 'jing_kong', // 净空
                        focus: '佛法修行',
                        bonus: { spiritualPowerBonus: 0.3 }
                    },
                    salvation: {
                        name: '普渡阁',
                        desc: '专精救度众生，慈悲为怀',
                        master: 'xiao_sha', // 小沙弥
                        focus: '慈悲之道',
                        bonus: { allBonus: 0.15, pillProduction: 2 }
                    }
                }
            },
            
            taoist_sect: {
                name: '道宗',
                desc: '顺应天道，无为而治，平衡全面发展',
                benefits: {
                    allBonus: 0.15,
                    spiritualPowerBonus: 0.15,
                    facilityBonus: 0.15
                },
                color: '#16a085',
                requiredRealm: 1,
                tasks: ['comprehend_tao', 'alchemy_practice', 'talisman_making'],
                divisions: {
                    tao_nature: {
                        name: '清虚殿',
                        desc: '专精道法自然，天人合一',
                        master: 'qing_xu', // 清虚道人
                        focus: '道法自然',
                        bonus: { allBonus: 0.2 }
                    },
                    freedom: {
                        name: '逍遥谷',
                        desc: '专精无为而治，随心所欲',
                        master: 'ling_yun', // 凌云
                        focus: '逍遥自在',
                        bonus: { spiritualPowerBonus: 0.2, facilityBonus: 0.2 }
                    },
                    talisman: {
                        name: '符箓阁',
                        desc: '专精符箓道术，变化万千',
                        master: 'xuan_ji', // 玄机
                        focus: '符箓道术',
                        bonus: { spiritualPowerBonus: 0.18, breakthroughBonus: 0.05 }
                    }
                }
            },
            
            demon_sect: {
                name: '魔宗',
                desc: '崇尚力量，强者为尊，快速提升但有风险',
                benefits: {
                    spiritualPowerBonus: 0.5,
                    breakthroughBonus: 0.1,
                    allBonus: 0.2
                },
                color: '#8e44ad',
                requiredRealm: 1,
                tasks: ['demon_cultivation', 'absorb_power', 'conquest'],
                warning: `${getSvg('alert')} 魔道修炼会降低正派NPC好感`,
                divisions: {
                    demon_palace: {
                        name: '魔神殿',
                        desc: '专精魔道修炼，至强之力',
                        master: 'mo_yan', // 魔焱
                        focus: '魔神之力',
                        bonus: { spiritualPowerBonus: 0.6, breakthroughBonus: 0.12 }
                    },
                    blood_evil: {
                        name: '血煞堂',
                        desc: '专精血煞之道，杀伐果断',
                        master: 'xue_sha', // 血煞
                        focus: '血煞之道',
                        bonus: { allBonus: 0.25, spiritualPowerBonus: 0.45 }
                    },
                    illusion_demon: {
                        name: '幻魔阁',
                        desc: '专精魔道幻术，变化莫测',
                        master: 'mo_ling', // 魔灵
                        focus: '幻魔之术',
                        bonus: { spiritualPowerBonus: 0.5, facilityBonus: 0.15 }
                    }
                }
            },
            
            evil_cult: {
                name: '邪教',
                desc: '阴险狡诈，善用心术，获得特殊能力',
                benefits: {
                    spiritualPowerBonus: 0.4,
                    spiritStoneBonus: 0.6,
                    facilityBonus: 0.25
                },
                color: '#2c3e50',
                requiredRealm: 1,
                tasks: ['mind_control_practice', 'conspiracy', 'dark_ritual'],
                warning: `${getSvg('alert')} 邪教弟子会被正派敌视`,
                divisions: {
                    evil_arts: {
                        name: '邪术堂',
                        desc: '专精邪术修炼，控心之道',
                        master: 'xie_zun', // 邪尊
                        focus: '邪术修炼',
                        bonus: { spiritualPowerBonus: 0.5, facilityBonus: 0.3 }
                    },
                    charm: {
                        name: '魅惑阁',
                        desc: '专精魅惑之术，操纵人心',
                        master: 'gui_mei', // 鬼魅
                        focus: '魅惑之术',
                        bonus: { spiritStoneBonus: 0.8, spiritualPowerBonus: 0.35 }
                    },
                    shadow: {
                        name: '暗影殿',
                        desc: '专精暗影刺杀，无声无息',
                        master: 'yin_ying', // 阴影
                        focus: '暗影之道',
                        bonus: { allBonus: 0.2, spiritualPowerBonus: 0.35 }
                    }
                }
            },
            
            blood_sect: {
                name: '血煞门',
                desc: '嗜血成性，以杀戮之道快速成长',
                benefits: {
                    spiritualPowerBonus: 0.6,
                    breakthroughBonus: 0.15,
                    allBonus: 0.25
                },
                color: '#c0392b',
                requiredRealm: 1,
                tasks: ['blood_cultivation', 'slaughter', 'blood_ritual'],
                warning: `${getSvg('alert')} 血道修炼需要杀戮，会被所有正派追杀`,
                divisions: {
                    blood_god: {
                        name: '血神殿',
                        desc: '专精血神之道，吞噬万物',
                        master: 'xue_wuya', // 血无涯
                        focus: '血神修炼',
                        bonus: { spiritualPowerBonus: 0.7, breakthroughBonus: 0.18 }
                    },
                    slaughter: {
                        name: '杀戮堂',
                        desc: '专精杀伐之道，以战养战',
                        master: 'sha_qianren', // 杀千刃
                        focus: '杀伐之道',
                        bonus: { allBonus: 0.3, spiritualPowerBonus: 0.55 }
                    },
                    blood_eye: {
                        name: '血瞳阁',
                        desc: '专精血瞳之术，洞察一切',
                        master: 'xue_tong', // 血瞳
                        focus: '血瞳之术',
                        bonus: { spiritualPowerBonus: 0.6, breakthroughBonus: 0.15 }
                    }
                }
            },
            
            merchant_guild: {
                name: '商会',
                desc: '以商养武，资源获取能力极强',
                benefits: {
                    spiritStoneBonus: 1.0,
                    pillProduction: 3,
                    facilityBonus: 0.3
                },
                color: '#d35400',
                requiredRealm: 1,
                tasks: ['trading', 'business_deal', 'treasure_hunting'],
                divisions: {
                    commerce: {
                        name: '商道总会',
                        desc: '专精商业经营，财源广进',
                        master: 'qian_duoduo', // 钱多多
                        focus: '商道经营',
                        bonus: { spiritStoneBonus: 1.2, facilityBonus: 0.35 }
                    },
                    treasure: {
                        name: '珍宝阁',
                        desc: '专精鉴宝寻宝，奇珍异宝',
                        master: 'jin_linglong', // 金玲珑
                        focus: '鉴宝寻宝',
                        bonus: { spiritStoneBonus: 1.0, pillProduction: 4 }
                    },
                    trading: {
                        name: '交易所',
                        desc: '专精物资交易，互通有无',
                        master: 'xiao_fugui', // 小富贵
                        focus: '物资交易',
                        bonus: { allBonus: 0.2, spiritStoneBonus: 0.8 }
                    }
                }
            }
        };

const sectTasks = {
            // 剑宗任务
            patrol_mission: {
                name: '巡山任务',
                desc: '巡视宗门周边，清除妖兽',
                duration: 90, // 1.5分钟（已优化）
                rewards: { contribution: 10, spiritStone: 50 },
                cost: { spiritualPower: 200 }
            },
            demon_hunt: {
                name: '斩妖除魔',
                desc: '猎杀作恶的妖魔',
                duration: 180, // 3分钟（已优化）
                rewards: { contribution: 25, spiritStone: 150, pills: 2 },
                cost: { spiritualPower: 500 }
            },
            sect_competition: {
                name: '宗门比武',
                desc: '参加宗门内部切磋',
                duration: 60, // 1分钟（已优化）
                rewards: { contribution: 15, spiritualPower: 1000 },
                cost: { spiritualPower: 300 }
            },
            
            // 丹宗任务
            collect_herbs: {
                name: '采集灵药',
                desc: '前往灵山采集炼丹材料',
                duration: 80, // 1.3分钟（已优化）
                rewards: { contribution: 8, spiritStone: 40, pills: 3 },
                cost: { spiritualPower: 150 }
            },
            refine_pills: {
                name: '炼制丹药',
                desc: '为宗门炼制丹药',
                duration: 150, // 2.5分钟（已优化）
                rewards: { contribution: 20, spiritStone: 100, pills: 5 },
                cost: { spiritStone: 50 }
            },
            research_recipe: {
                name: '研究丹方',
                desc: '研究新的丹药配方',
                duration: 200, // 3.3分钟（已优化）
                rewards: { contribution: 30, spiritStone: 200 },
                cost: { spiritStone: 100 }
            },
            
            // 阵宗任务
            maintain_formation: {
                name: '维护阵法',
                desc: '维护宗门护山大阵',
                duration: 90, // 1.5分钟（已优化）
                rewards: { contribution: 12, spiritStone: 60 },
                cost: { spiritualPower: 200 }
            },
            study_array: {
                name: '研习阵道',
                desc: '学习更高深的阵法',
                duration: 180, // 3分钟（已优化）
                rewards: { contribution: 25, spiritualPower: 1500 },
                cost: { spiritStone: 80 }
            },
            defend_sect: {
                name: '守护宗门',
                desc: '协助防御外敌入侵',
                duration: 120, // 2分钟（已优化）
                rewards: { contribution: 20, spiritStone: 120, pills: 2 },
                cost: { spiritualPower: 400 }
            },
            
            // 魔宗任务
            demon_cultivation: {
                name: '魔道修炼',
                desc: '修炼魔道功法，快速提升实力',
                duration: 90, // 1.5分钟（已优化）
                rewards: { contribution: 15, spiritStone: 80, spiritualPower: 800 },
                cost: { spiritualPower: 300 }
            },
            absorb_power: {
                name: '吸收力量',
                desc: '通过特殊方式吸收他人灵力',
                duration: 180, // 3分钟（已优化）
                rewards: { contribution: 25, spiritStone: 200, spiritualPower: 1500 },
                cost: { spiritualPower: 500 }
            },
            conquest: {
                name: '征服',
                desc: '征服其他修士，展现魔道威严',
                duration: 240, // 4分钟（已优化）
                rewards: { contribution: 40, spiritStone: 300, pills: 3 },
                cost: { spiritualPower: 800 }
            },
            
            // 佛宗任务
            meditation_practice: {
                name: '禅修悟道',
                desc: '在佛堂中静心禅修，领悟佛法真谛',
                duration: 120, // 2分钟（已优化）
                rewards: { contribution: 12, spiritualPower: 800, breakthroughProgress: 5 },
                cost: { spiritualPower: 200 }
            },
            save_people: {
                name: '普度众生',
                desc: '下山救助苦难百姓，传播佛法',
                duration: 180, // 3分钟（已优化）
                rewards: { contribution: 20, spiritStone: 100, pills: 3 },
                cost: { spiritualPower: 300 }
            },
            buddha_teaching: {
                name: '佛法讲经',
                desc: '为弟子们讲解佛法，提升宗门修为',
                duration: 150, // 2.5分钟（已优化）
                rewards: { contribution: 18, spiritualPower: 1200 },
                cost: { spiritStone: 60 }
            },
            
            // 道宗任务
            comprehend_tao: {
                name: '悟道参玄',
                desc: '参悟天道，领悟自然法则',
                duration: 140, // 2.3分钟（已优化）
                rewards: { contribution: 15, spiritualPower: 1000, allBonus: 0.02 },
                cost: { spiritualPower: 250 }
            },
            alchemy_practice: {
                name: '炼丹修行',
                desc: '炼制道家丹药，辅助修炼',
                duration: 200, // 3.3分钟（已优化）
                rewards: { contribution: 22, spiritStone: 120, pills: 4 },
                cost: { spiritStone: 80 }
            },
            talisman_making: {
                name: '制作符箓',
                desc: '制作护身符箓，增强宗门防御',
                duration: 120, // 2分钟（已优化）
                rewards: { contribution: 14, spiritStone: 80, facilityBonus: 0.05 },
                cost: { spiritualPower: 180 }
            },
            
            // 商会任务
            trading: {
                name: '商业贸易',
                desc: '进行商业贸易，赚取灵石',
                duration: 120, // 2分钟（已优化）
                rewards: { contribution: 10, spiritStone: 200, pills: 2 },
                cost: { spiritStone: 50 }
            },
            business_deal: {
                name: '商务谈判',
                desc: '与其他势力进行商务谈判',
                duration: 160, // 2.7分钟（已优化）
                rewards: { contribution: 18, spiritStone: 300, facilityBonus: 0.06 },
                cost: { spiritualPower: 200 }
            },
            treasure_hunting: {
                name: '寻宝探险',
                desc: '寻找珍稀宝物，增加商会财富',
                duration: 200, // 3.3分钟（已优化）
                rewards: { contribution: 25, spiritStone: 400, pills: 5, spiritualPower: 1000 },
                cost: { spiritualPower: 300, spiritStone: 80 }
            }
        };

const sectShop = {
            contribution_pill: {
                name: '门派丹药',
                desc: '兑换门派特制丹药',
                cost: { contribution: 50 },
                reward: { pills: 10 }
            },
            contribution_stone: {
                name: '灵石奖励',
                desc: '兑换灵石',
                cost: { contribution: 30 },
                reward: { spiritStone: 200 }
            },
            contribution_technique: {
                name: '门派秘传',
                desc: '学习门派独门功法',
                cost: { contribution: 100 },
                reward: { spiritualPower: 5000, breakthroughProgress: 20 }
            },
            master_teaching: {
                name: '师尊传授',
                desc: '请求师尊指点修炼',
                cost: { contribution: 80 },
                reward: { breakthroughProgress: 30 }
            }
        };
