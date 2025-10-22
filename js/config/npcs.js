// NPC角色定义（人际关系系统）
// 每个NPC都有具体的姓名、性格、背景故事、口头禅等

const relationshipNPCs = {
    // ==================== 剑宗 ====================
    zhang_jianxin: {
        id: 'zhang_jianxin',
        name: '张剑心',
        sect: 'sword',
        role: 'master', // 掌门
        // 专属对话
        dialogues: {
            greet: {
                1: ['剑需常磨，人亦如是。', '修道贵在根基。'],
                2: ['稳扎稳打，切莫急躁。'],
                3: ['你最近的基础打得不错。'],
                4: ['气息凝练有成，再进一步。'],
                5: ['剑心通明，勿忘本心。']
            },
            chat: {
                1: ['基础不牢，地动山摇。', '先从站桩呼吸开始。'],
                2: ['每日一式，不可间断。'],
                3: ['可与同门多切磋。'],
                4: ['心念如剑，剑意可成。'],
                5: ['你的剑道，已有自家风骨。']
            }
        },
        
        // 外貌特征
        appearance: '中年男子，左眼有一道剑伤，眼神锐利',
        
        // 性格特点
        personality: '严厉但公正，重视基础修炼。年轻时曾因急功近利走火入魔，现在特别重视基础',
        
        // 口头禅
        catchphrase: '基础不牢，地动山摇',
        
        // 特殊习惯
        habits: '每天黎明时分在练剑台练剑，风雨无阻',
        
        // 背景故事
        backstory: '年轻时为了快速提升修为，强行突破境界，结果走火入魔，差点丧命。被师父救回后，深刻认识到基础的重要性。现在对弟子要求严格，但只要弟子品行端正、基础扎实，他会倾囊相授。',
        
        // 初始属性
        initialRealm: 5, // 金丹期
        initialRealmLevel: 8,
        growthSpeed: 0.2, // 成长速度（相对玩家）
        canAscend: true,
        
        // 任务类型
        taskTypes: ['cultivation_basic', 'discipline', 'sword_practice'],
        
        // 喜好
        likes: ['勤奋修炼', '品行端正', '尊师重道'],
        dislikes: ['急功近利', '投机取巧', '不尊师长'],
        
        // 教授的功法
        teachTechniques: ['basic_sword', 'sword_mastery', 'heaven_sword'],
        
        // 奖励物品
        rewards: {
            favor30: { spiritualPower: 100, description: '传授基础剑法心得' },
            favor60: { technique: 'sword_mastery', description: '传授剑道精通' },
            favor90: { technique: 'heaven_sword', spiritStone: 500, description: '传授天剑诀' }
        }
    },
    
    li_ruxue: {
        id: 'li_ruxue',
        name: '李如雪',
        sect: 'sword',
        role: 'senior_sister', // 大师姐
        dialogues: {
            greet: {
                1: ['道友安。', '愿你心存正义。'],
                3: ['见你精神更胜往昔。'],
                4: ['剑随心走，心向光明。'],
                5: ['路虽远，吾辈不负。']
            },
            chat: {
                1: ['细雨润物，善念自生。'],
                2: ['正义虽迟但到。'],
                3: ['若需帮忙，尽管说。'],
                4: ['与汝畅谈，心甚慰。'],
                5: ['有你相助，心中有光。']
            }
        },
        
        appearance: '清秀女子，长发如雪，眼神中带着淡淡的忧伤',
        personality: '温柔体贴，但内心坚强。家族被魔修所害，对魔修深恶痛绝',
        catchphrase: '正义虽迟但到',
        habits: '每月十五会在后山祭拜家人',
        backstory: '原本是大家闺秀，父母双亲、兄弟姐妹都被魔修所害，只剩下她一人。被张剑心救下后加入剑宗，发誓要除尽天下魔修，为家人报仇。虽然经历了巨大的痛苦，但她依然保持着温柔善良的本性。',
        
        initialRealm: 4, // 元婴期
        initialRealmLevel: 5,
        growthSpeed: 0.25,
        canAscend: true,
        
        taskTypes: ['demon_slaying', 'justice', 'protect_weak'],
        likes: ['正义感', '帮助弱者', '对魔修态度坚决'],
        dislikes: ['自私自利', '与魔修有瓜葛', '见死不救'],
        
        teachTechniques: ['righteous_sword', 'demon_slaying'],
        rewards: {
            favor30: { pills: 5, description: '赠送修炼丹药' },
            favor60: { technique: 'righteous_sword', description: '传授正气剑法' },
            favor90: { artifact: 'snow_sword', spiritStone: 1000, description: '赠送如雪剑' }
        },
        
        // 特殊剧情
        specialEvents: {
            help_demon: { favor: -30, loyalty: -50, event: 'sister_betrayal' },
            slay_demon: { favor: +20, loyalty: +15, event: 'sister_gratitude' }
        }
    },
    
    wang_xiaohu: {
        id: 'wang_xiaohu',
        name: '王小虎',
        sect: 'sword',
        role: 'junior_brother', // 小师弟
        dialogues: {
            greet: {
                1: ['师兄/师姐好！', '一起修炼吗？'],
                2: ['我最近更努力啦！'],
                3: ['等我变强了带你冒险！'],
                4: ['我已经不怕了！'],
                5: ['我们一定能成为强者！']
            },
            chat: {
                1: ['我在练基础…真的很难。'],
                2: ['谢谢你鼓励我。'],
                3: ['下次带我去历练吧！'],
                4: ['我一定会保护大家。'],
                5: ['一起去更远的地方！']
            }
        },
        
        appearance: '少年模样，虎头虎脑，眼神中充满好奇',
        personality: '年轻气盛，容易冲动，但心地善良。出身贫寒，特别珍惜修炼机会',
        catchphrase: '师兄，我们去冒险吧！',
        habits: '喜欢收集各种奇怪的石头和植物',
        backstory: '出身贫寒农家，父母都是普通农民。因为修炼天赋被张剑心发现，被收为弟子。虽然基础差，但非常勤奋刻苦，对师门充满感激之情。',
        
        initialRealm: 1, // 炼气期
        initialRealmLevel: 3,
        growthSpeed: 0.4, // 成长速度快
        canAscend: true,
        
        taskTypes: ['adventure', 'resource_gathering', 'growth_guidance'],
        likes: ['冒险', '分享资源', '鼓励支持'],
        dislikes: ['小气吝啬', '打击积极性', '过于保守'],
        
        teachTechniques: [], // 还没有可教的功法
        rewards: {
            favor30: { spiritStone: 50, description: '分享采集的灵石' },
            favor60: { special: 'loyal_companion', description: '成为忠实伙伴' },
            favor90: { special: 'sworn_brother', description: '结拜兄弟' }
        },
        
        // 成长事件
        growthEvents: {
            help_grow: { growthSpeed: 0.5, event: 'rapid_growth' },
            ignore: { growthSpeed: 0.2, event: 'slow_growth' },
            criticize: { favor: -10, event: 'discouraged' }
        }
    },
    
    // ==================== 丹宗 ====================
    chen_yaowang: {
        id: 'chen_yaowang',
        name: '陈药王',
        sect: 'alchemy',
        role: 'master',
        dialogues: {
            greet: {
                1: ['丹药如人，需用心炼制。'],
                2: ['药材三分毒，切勿乱服。'],
                3: ['你的丹道悟性不错。'],
                4: ['火候到了，便是金丹。'],
                5: ['你已可独当一面。']
            },
            chat: {
                1: ['炼丹需耐心，急不得。'],
                2: ['药性相生相克，需细辨。'],
                3: ['我这有本古方，你可一观。'],
                4: ['与你论丹，颇有心得。'],
                5: ['九转金丹之秘，可与你一说。']
            }
        },
        
        appearance: '老者模样，须发皆白，双手因长期炼丹而粗糙',
        personality: '学识渊博，但有些固执。对丹药有独特的理解',
        catchphrase: '丹药如人，需用心炼制',
        habits: '每天黄昏时分会在丹房前打坐，感受丹药的灵气',
        backstory: '研究丹药数十年，曾炼制出传说中的"九转金丹"，但因此招来杀身之祸，家人被害。隐姓埋名多年后重出江湖，创立丹宗，致力于培养新一代炼丹师。',
        
        initialRealm: 6, // 化神期
        initialRealmLevel: 3,
        growthSpeed: 0.15,
        canAscend: true,
        
        taskTypes: ['alchemy', 'herb_gathering', 'formula_research'],
        likes: ['对炼丹有兴趣', '用心炼丹', '研究丹方'],
        dislikes: ['急功近利', '粗心大意', '浪费药材'],
        
        teachTechniques: ['basic_alchemy', 'master_alchemy', 'nine_turn_pill'],
        rewards: {
            favor30: { pills: 10, description: '赠送珍贵丹药' },
            favor60: { technique: 'master_alchemy', description: '传授炼丹大师心得' },
            favor90: { formula: 'nine_turn_pill', description: '传授九转金丹配方' }
        }
    },
    
    zhao_qingya: {
        id: 'zhao_qingya',
        name: '赵清雅',
        sect: 'alchemy',
        role: 'senior_sister',
        dialogues: {
            greet: {
                1: ['细节决定成败。'],
                2: ['每一步都需谨慎。'],
                3: ['你的手法更娴熟了。'],
                4: ['可与我共研丹方。'],
                5: ['不愧是我看重的人。']
            },
            chat: {
                1: ['炼丹前需净手焚香。'],
                2: ['药材配比需精准。'],
                3: ['这个新配方你试过吗？'],
                4: ['创新需建立在基础之上。'],
                5: ['愿与你共研丹道。']
            }
        },
        
        appearance: '中年女子，气质优雅，双手修长',
        personality: '细心谨慎，追求完美。家族世代炼丹，对丹道有独特理解',
        catchphrase: '细节决定成败',
        habits: '每次炼丹前都会仔细检查每一个细节',
        backstory: '出身炼丹世家，从小耳濡目染。对丹道有独特的理解，经常创新丹方。虽然谨慎，但在关键时刻会大胆尝试新的配方。',
        
        initialRealm: 4,
        initialRealmLevel: 7,
        growthSpeed: 0.22,
        canAscend: true,
        
        taskTypes: ['herb_cultivation', 'formula_innovation', 'quality_control'],
        likes: ['细心谨慎', '创新精神', '追求完美'],
        dislikes: ['粗心大意', '敷衍了事', '不求上进'],
        
        teachTechniques: ['herb_cultivation', 'formula_innovation'],
        rewards: {
            favor30: { herbs: 20, description: '分享珍贵药材' },
            favor60: { technique: 'formula_innovation', description: '传授丹方创新心得' },
            favor90: { special: 'research_partner', description: '成为研究伙伴' }
        }
    },
    
    sun_xiaoyao: {
        id: 'sun_xiaoyao',
        name: '孙小药',
        sect: 'alchemy',
        role: 'junior_brother',
        dialogues: {
            greet: {
                1: ['这个药材我见过！'],
                2: ['师兄/师姐，要看我的药园吗？'],
                3: ['我又认识新药材了！'],
                4: ['师父夸我进步快！'],
                5: ['我找到好多好药材！']
            },
            chat: {
                1: ['师父教了我好多药材名字。'],
                2: ['药园里有好多宝贝。'],
                3: ['我把最好的药材留给你！'],
                4: ['以后你炼丹我帮你找药材！'],
                5: ['以后你要药材找我就行！']
            }
        },
        
        appearance: '少年模样，皮肤黝黑，眼神中充满好奇',
        personality: '活泼好动，好奇心强。从小在药园长大，对药材有天然敏感',
        catchphrase: '这个药材我见过！',
        habits: '喜欢在药园里观察各种药材的生长',
        backstory: '从小是孤儿，被陈药王收养在药园中。虽然年纪小，但对药材有天然的敏感，能一眼认出数百种药材。',
        
        initialRealm: 0,
        initialRealmLevel: 8,
        growthSpeed: 0.45,
        canAscend: true,
        
        taskTypes: ['herb_identification', 'garden_management', 'herb_trading'],
        likes: ['分享药材知识', '帮助管理药园', '认可他的能力'],
        dislikes: ['忽视他', '破坏药材', '小看他'],
        
        teachTechniques: ['herb_master'],
        rewards: {
            favor30: { herbs: 10, description: '分享药材' },
            favor60: { special: 'herb_discount', description: '药材交易优惠' },
            favor90: { special: 'herb_supplier', description: '成为专属药材供应商' }
        }
    },
    
    // ==================== 阵宗 ====================
    liu_zhentian: {
        id: 'liu_zhentian',
        name: '刘阵天',
        sect: 'formation',
        role: 'master',
        dialogues: {
            greet: {
                1: ['阵法如棋，需步步为营。'],
                2: ['谨慎为上。'],
                3: ['你的心思细腻。'],
                4: ['阵法之道，在于应变。'],
                5: ['可与我共研大阵。']
            },
            chat: {
                1: ['布阵不可有一丝差错。'],
                2: ['一失足成千古恨。'],
                3: ['此阵之妙，在于变化。'],
                4: ['防御与攻击，需兼顾。'],
                5: ['天地大阵，可传与你。']
            }
        },
        
        appearance: '中年男子，眼神深邃，双手因长期布阵而粗糙',
        personality: '沉默寡言，但心思缜密。对阵法有独特理解',
        catchphrase: '阵法如棋，需步步为营',
        habits: '每天深夜会在阵台前研究阵法',
        backstory: '专精阵法，但性格孤僻。年轻时曾用阵法困住过强大的敌人，保护了门派，但因此失去了最好的朋友——那个朋友被困在阵法中无法脱身。从此他更加谨慎，对阵法的威力心存敬畏。',
        
        initialRealm: 5,
        initialRealmLevel: 9,
        growthSpeed: 0.18,
        canAscend: true,
        
        taskTypes: ['formation_setup', 'formation_research', 'formation_maintenance'],
        likes: ['对阵法有兴趣', '谨慎小心', '深入研究'],
        dislikes: ['急功近利', '轻视阵法', '鲁莽行事'],
        
        teachTechniques: ['basic_formation', 'master_formation', 'heaven_earth_formation'],
        rewards: {
            favor30: { spiritStone: 200, description: '传授基础阵法' },
            favor60: { technique: 'master_formation', description: '传授阵法大师心得' },
            favor90: { technique: 'heaven_earth_formation', description: '传授天地大阵' }
        }
    },
    
    zhou_zhenxin: {
        id: 'zhou_zhenxin',
        name: '周阵心',
        sect: 'formation',
        role: 'senior_sister',
        dialogues: {
            greet: {
                1: ['防御是最好的攻击。'],
                2: ['稳守方能进取。'],
                3: ['你懂得保全自身。'],
                4: ['结界之术，愿与你共研。'],
                5: ['你已可独守一方。']
            },
            chat: {
                1: ['结界之术，贵在稳固。'],
                2: ['先保护自己，再护他人。'],
                3: ['我可传你防御阵法。'],
                4: ['防御阵需层层叠加。'],
                5: ['你值得我倾囊相授。']
            }
        },
        
        appearance: '中年女子，气质冷静，眼神中带着智慧',
        personality: '冷静理性，善于分析。专精防御阵法',
        catchphrase: '防御是最好的攻击',
        habits: '每次布阵前都会仔细分析地形和敌人',
        backstory: '专精防御阵法，保护门派安全。曾用防御阵法抵挡住魔修大军的进攻，但阵法被破时，她的丈夫为了保护她而牺牲。从此她更加专注于防御阵法的研究。',
        
        initialRealm: 4,
        initialRealmLevel: 6,
        growthSpeed: 0.23,
        canAscend: true,
        
        taskTypes: ['defense_formation', 'formation_upgrade', 'security_patrol'],
        likes: ['重视防御', '冷静分析', '保护他人'],
        dislikes: ['鲁莽冒进', '忽视防御', '自大轻敌'],
        
        teachTechniques: ['defense_formation', 'barrier_master'],
        rewards: {
            favor30: { special: 'formation_protection', description: '获得阵法保护' },
            favor60: { technique: 'barrier_master', description: '传授结界精通' },
            favor90: { special: 'permanent_protection', description: '获得永久阵法保护' }
        }
    },
    
    wu_zhenzi: {
        id: 'wu_zhenzi',
        name: '吴阵子',
        sect: 'formation',
        role: 'junior_brother',
        dialogues: {
            greet: {
                1: ['我...我能行吗？'],
                2: ['我会努力的。'],
                3: ['谢谢你一直鼓励我！'],
                4: ['我现在有信心了！'],
                5: ['我不会再退缩了！']
            },
            chat: {
                1: ['阵法好难...我总是出错。'],
                2: ['我会继续练习的。'],
                3: ['有你指点，我进步好多。'],
                4: ['我布的阵法，你看看如何？'],
                5: ['我会成为阵法大师的！']
            }
        },
        
        appearance: '少年模样，眼神中带着求知欲，但有些怯懦',
        personality: '勤奋好学，但缺乏自信。对阵法充满好奇',
        catchphrase: '我...我能行吗？',
        habits: '喜欢在阵台前练习基础阵法',
        backstory: '刚入门不久，对阵法充满好奇。虽然勤奋，但总是怀疑自己的能力，需要鼓励和支持。',
        
        initialRealm: 1,
        initialRealmLevel: 1,
        growthSpeed: 0.42,
        canAscend: true,
        
        taskTypes: ['basic_formation', 'formation_practice', 'formation_theory'],
        likes: ['鼓励支持', '认可能力', '耐心指导'],
        dislikes: ['打击自信', '嘲笑', '忽视'],
        
        teachTechniques: [],
        rewards: {
            favor30: { spiritStone: 30, description: '分享修炼心得' },
            favor60: { special: 'confidence_boost', description: '建立自信' },
            favor90: { special: 'formation_genius', description: '成为阵法天才' }
        },
        
        growthEvents: {
            encourage: { growthSpeed: 0.6, confidence: +50, event: 'confidence_growth' },
            criticize: { growthSpeed: 0.2, confidence: -30, event: 'lose_confidence' }
        }
    },
    
    // ==================== 佛宗 ====================
    jue_yuan: {
        id: 'jue_yuan',
        name: '觉远大师',
        sect: 'buddhist',
        role: 'master',
        dialogues: {
            greet: {
                1: ['阿弥陀佛，善哉善哉。'],
                2: ['施主安好。'],
                3: ['佛性渐显，可喜可贺。'],
                4: ['慈悲心已生，可敬可贺。'],
                5: ['你已悟得慈悲之心。']
            },
            chat: {
                1: ['放下执念，心自清明。'],
                2: ['万物皆有佛性。'],
                3: ['佛法无边，普度众生。'],
                4: ['与你论佛，甚得我心。'],
                5: ['佛祖庇佑，你我同行。']
            }
        },
        
        appearance: '慈眉善目的老僧，身披金色袈裟，眼神平和',
        personality: '慈悲为怀，普度众生。相信万物皆有佛性，从不杀生',
        catchphrase: '阿弥陀佛，善哉善哉',
        habits: '每日清晨在佛堂念经，从不间断',
        backstory: '曾是凡人，因目睹战乱而出家。修行百年，悟得佛法真谛。创立佛宗，以佛法普度众生，教导弟子慈悲为怀。',
        
        initialRealm: 6,
        initialRealmLevel: 5,
        growthSpeed: 0.15,
        canAscend: true,
        
        taskTypes: ['meditation', 'save_people', 'buddha_teaching'],
        likes: ['慈悲心', '救人于危难', '参悟佛法'],
        dislikes: ['滥杀无辜', '贪婪欲望', '执念不放'],
        
        teachTechniques: ['buddha_palm', 'zen_meditation', 'buddha_light'],
        rewards: {
            favor30: { spiritualPower: 200, description: '传授佛门心法' },
            favor60: { technique: 'zen_meditation', description: '传授禅定功' },
            favor90: { special: 'buddha_blessing', description: '获得佛祖庇佑' }
        }
    },
    
    jing_kong: {
        id: 'jing_kong',
        name: '净空',
        sect: 'buddhist',
        role: 'senior_brother',
        dialogues: {
            greet: {
                1: ['放下执念，方得自在。'],
                2: ['施主慧根深厚。'],
                3: ['见你心境更平和。'],
                4: ['佛法精进，可喜。'],
                5: ['你已得般若智慧。']
            },
            chat: {
                1: ['静坐参禅，可明心性。'],
                2: ['诸行无常，缘起缘灭。'],
                3: ['一切随缘，勿强求。'],
                4: ['佛理深奥，需悟非学。'],
                5: ['愿与你共参佛理。']
            }
        },
        
        appearance: '年轻僧人，面容清秀，眉宇间透着智慧',
        personality: '温和谦逊，但内心坚定。对佛法理解深刻',
        catchphrase: '放下执念，方得自在',
        habits: '喜欢在竹林中静坐参禅',
        backstory: '出身书香门第，因看破红尘而出家。年纪轻轻便参悟佛法真谛，深得觉远大师器重。',
        
        initialRealm: 4,
        initialRealmLevel: 8,
        growthSpeed: 0.24,
        canAscend: true,
        
        taskTypes: ['buddhist_debate', 'help_sentient', 'purification'],
        likes: ['参悟真理', '帮助他人', '内心平和'],
        dislikes: ['执着于物', '争强好胜', '暴力冲突'],
        
        teachTechniques: ['compassion_heart', 'wisdom_light'],
        rewards: {
            favor30: { pills: 8, description: '赠送佛门丹药' },
            favor60: { technique: 'wisdom_light', description: '传授般若智慧' },
            favor90: { special: 'enlightenment', description: '获得顿悟机会' }
        }
    },
    
    xiao_sha: {
        id: 'xiao_sha',
        name: '小沙弥',
        sect: 'buddhist',
        role: 'junior_brother',
        dialogues: {
            greet: {
                1: ['师兄，这是为什么呀？'],
                2: ['师兄好！'],
                3: ['师兄你又来看我啦！'],
                4: ['我学会新的佛经了！'],
                5: ['我最喜欢师兄了！']
            },
            chat: {
                1: ['师父说要好好修行。'],
                2: ['我会乖乖的。'],
                3: ['你能陪我玩吗？'],
                4: ['我会好好保护师兄的！'],
                5: ['长大了我要保护你！']
            }
        },
        
        appearance: '小和尚，圆圆的脸蛋，大大的眼睛，十分可爱',
        personality: '天真活泼，好奇心重。虽然年幼但善良纯真',
        catchphrase: '师兄，这是为什么呀？',
        habits: '喜欢偷偷下山玩耍，但每次都会回来',
        backstory: '是个孤儿，被觉远大师收养。虽然还小，但对佛法有天然的亲近感。',
        
        initialRealm: 0,
        initialRealmLevel: 5,
        growthSpeed: 0.5,
        canAscend: true,
        
        taskTypes: ['play_together', 'protect_him', 'teach_buddhism'],
        likes: ['陪他玩', '保护他', '教他知识'],
        dislikes: ['凶他', '吓唬他', '不理他'],
        
        teachTechniques: [],
        rewards: {
            favor30: { spiritStone: 80, description: '分享找到的灵石' },
            favor60: { special: 'pure_heart', description: '获得纯净之心' },
            favor90: { special: 'buddha_child', description: '成为佛子守护者' }
        },
        
        growthEvents: {
            protect: { favor: +20, growthSpeed: 0.6, event: 'grateful' },
            ignore_danger: { favor: -30, trust: -40, event: 'lose_trust' }
        }
    },
    
    // ==================== 道宗 ====================
    qing_xu: {
        id: 'qing_xu',
        name: '清虚道人',
        sect: 'taoist',
        role: 'master',
        dialogues: {
            greet: {
                1: ['道法自然，顺其自然。'],
                2: ['无为而治。'],
                3: ['你已窥得天道一二。'],
                4: ['道心渐明。'],
                5: ['天人合一，可期矣。']
            },
            chat: {
                1: ['无为而无不为。'],
                2: ['顺势而为，不可强求。'],
                3: ['观星象，悟天道。'],
                4: ['道法三千，殊途同归。'],
                5: ['道剑相赠，望君珍之。']
            }
        },
        
        appearance: '仙风道骨，须发飘飘，手持拂尘，气质出尘',
        personality: '顺应天道，无为而治。追求天人合一，与世无争',
        catchphrase: '道法自然，顺其自然',
        habits: '喜欢在山顶观星象，感悟天道',
        backstory: '年轻时游历天下，遍访名山。顿悟大道真谛后，创立道宗，传授道法。',
        
        initialRealm: 6,
        initialRealmLevel: 8,
        growthSpeed: 0.16,
        canAscend: true,
        
        taskTypes: ['comprehend_tao', 'alchemy_tao', 'observation'],
        likes: ['感悟天道', '顺其自然', '清静无为'],
        dislikes: ['逆天而行', '强求不得', '心浮气躁'],
        
        teachTechniques: ['tao_nature', 'five_thunder', 'immortal_sword'],
        rewards: {
            favor30: { spiritualPower: 300, description: '传授道法心得' },
            favor60: { technique: 'five_thunder', description: '传授五雷正法' },
            favor90: { artifact: 'tao_sword', description: '赠送道剑' }
        }
    },
    
    ling_yun: {
        id: 'ling_yun',
        name: '凌云',
        sect: 'taoist',
        role: 'senior_sister',
        dialogues: {
            greet: {
                1: ['随心而行，快意江湖。'],
                2: ['逍遥自在。'],
                3: ['与你同游，甚好。'],
                4: ['你我志趣相投。'],
                5: ['愿与你共赴天涯。']
            },
            chat: {
                1: ['束缚太多，不如逍遥。'],
                2: ['天地广阔，何处不可去？'],
                3: ['下次一起云游四方？'],
                4: ['御剑飞行，可传与你。'],
                5: ['你我结为道侣，可好？']
            }
        },
        
        appearance: '白衣飘飘的女道士，清丽脱俗，气质空灵',
        personality: '洒脱不羁，追求自由。对道法有独特理解',
        catchphrase: '随心而行，快意江湖',
        habits: '喜欢云游四方，不拘一格',
        backstory: '本是世家千金，厌倦世俗束缚而入道。修行道法后，更加洒脱自在。',
        
        initialRealm: 5,
        initialRealmLevel: 3,
        growthSpeed: 0.26,
        canAscend: true,
        
        taskTypes: ['travel_world', 'help_people', 'tao_comprehension'],
        likes: ['自由洒脱', '行侠仗义', '游历山水'],
        dislikes: ['束缚拘谨', '虚伪做作', '勾心斗角'],
        
        teachTechniques: ['cloud_walking', 'sword_flight'],
        rewards: {
            favor30: { pills: 12, description: '分享道门丹药' },
            favor60: { technique: 'cloud_walking', description: '传授云游术' },
            favor90: { special: 'tao_companion', description: '成为道侣' }
        }
    },
    
    xuan_ji: {
        id: 'xuan_ji',
        name: '玄机',
        sect: 'taoist',
        role: 'junior_brother',
        dialogues: {
            greet: {
                1: ['这个原理好有趣！'],
                2: ['我又有新发现了！'],
                3: ['我又想到新法子了！'],
                4: ['符箓之术，变化无穷！'],
                5: ['我们一起研究新道术吧！']
            },
            chat: {
                1: ['符箓之术，变化无穷。'],
                2: ['道术的原理很奇妙。'],
                3: ['你看我这个符箓画得如何？'],
                4: ['我可以教你符箓术。'],
                5: ['我们可以一起创新！']
            }
        },
        
        appearance: '少年道士，聪明伶俐，双目有神',
        personality: '聪慧好学，喜欢钻研。对各种道术都充满兴趣',
        catchphrase: '这个原理好有趣！',
        habits: '喜欢研究各种道术和法阵',
        backstory: '天赋异禀的道童，从小对道术有极高的悟性。虽然年轻，但已经掌握了多种道术。',
        
        initialRealm: 2,
        initialRealmLevel: 1,
        growthSpeed: 0.48,
        canAscend: true,
        
        taskTypes: ['research_tao', 'talisman_making', 'formation_study'],
        likes: ['研究道术', '创新尝试', '交流心得'],
        dislikes: ['墨守成规', '不求甚解', '轻视他'],
        
        teachTechniques: ['talisman_art'],
        rewards: {
            favor30: { spiritStone: 100, description: '分享研究成果' },
            favor60: { special: 'talisman_master', description: '成为符箓大师' },
            favor90: { special: 'tao_genius', description: '道术天才' }
        }
    },
    
    // ==================== 魔宗 ====================
    mo_yan: {
        id: 'mo_yan',
        name: '魔焱',
        sect: 'demon',
        role: 'master',
        dialogues: {
            greet: {
                1: ['弱肉强食，适者生存。'],
                2: ['强者为尊。'],
                3: ['你有成为强者的资质。'],
                4: ['力量即正义。'],
                5: ['随我称霸天下！']
            },
            chat: {
                1: ['力量才是唯一真理。'],
                2: ['弱者不配活着。'],
                3: ['正道虚伪，不足为惧。'],
                4: ['魔功至上。'],
                5: ['魔体可成，天下无敌。']
            }
        },
        
        appearance: '黑袍加身，眼神凌厉，周身散发着强大的魔气',
        personality: '霸道强势，崇尚力量。认为强者为尊，弱者当灭',
        catchphrase: '弱肉强食，适者生存',
        habits: '每日修炼魔功，吞噬他人修为',
        backstory: '曾是正道弟子，因被正道出卖而入魔。创立魔宗，以力量为尊，不择手段。',
        
        initialRealm: 7,
        initialRealmLevel: 2,
        growthSpeed: 0.18,
        canAscend: true,
        
        taskTypes: ['kill_righteous', 'absorb_power', 'conquest'],
        likes: ['强大的力量', '无情冷酷', '敢于挑战'],
        dislikes: ['软弱可欺', '仁慈怜悯', '背叛欺骗'],
        
        teachTechniques: ['demon_power', 'blood_sacrifice', 'soul_devouring'],
        rewards: {
            favor30: { spiritualPower: 500, description: '传授魔功心法' },
            favor60: { technique: 'demon_power', description: '传授魔神功' },
            favor90: { special: 'demon_body', description: '获得魔体' }
        },
        
        specialEvents: {
            help_righteous: { favor: -50, loyalty: -80, event: 'betrayal' },
            kill_enemy: { favor: +25, loyalty: +20, event: 'approval' }
        }
    },
    
    xue_sha: {
        id: 'xue_sha',
        name: '血煞',
        sect: 'demon',
        role: 'senior_brother',
        dialogues: {
            greet: {
                1: ['血债血偿！'],
                2: ['实力为上。'],
                3: ['你有种，我看好你。'],
                4: ['讲义气的人不多了。'],
                5: ['兄弟，我们一起杀出去！']
            },
            chat: {
                1: ['实力至上，讲究义气。'],
                2: ['对兄弟两肋插刀。'],
                3: ['正道欠我的，要一一讨回。'],
                4: ['血煞功，可传与你。'],
                5: ['血盟兄弟，生死相随。']
            }
        },
        
        appearance: '魁梧壮汉，满脸横肉，双眼血红',
        personality: '嗜血好战，残忍无情。但对自己人讲义气',
        catchphrase: '血债血偿！',
        habits: '喜欢收集敌人的鲜血炼制血丹',
        backstory: '家族被正道灭门，只身一人逃出。入魔宗后修炼血煞魔功，发誓要报仇雪恨。',
        
        initialRealm: 5,
        initialRealmLevel: 7,
        growthSpeed: 0.28,
        canAscend: true,
        
        taskTypes: ['blood_battle', 'revenge', 'power_absorption'],
        likes: ['实力至上', '讲究义气', '敢于战斗'],
        dislikes: ['虚伪正道', '软弱无能', '背信弃义'],
        
        teachTechniques: ['blood_magic', 'berserk'],
        rewards: {
            favor30: { pills: 15, description: '赠送血丹' },
            favor60: { technique: 'blood_magic', description: '传授血煞功' },
            favor90: { special: 'blood_brother', description: '结为血盟兄弟' }
        }
    },
    
    mo_ling: {
        id: 'mo_ling',
        name: '魔灵',
        sect: 'demon',
        role: 'junior_sister',
        dialogues: {
            greet: {
                1: ['嘻嘻，好好玩~'],
                2: ['你来啦~'],
                3: ['你又来陪我玩啦！'],
                4: ['你最好了~'],
                5: ['我最喜欢你了~']
            },
            chat: {
                1: ['我的力量很强的！'],
                2: ['你不要怕我嘛。'],
                3: ['你不怕我真好。'],
                4: ['幻术可以给你看~'],
                5: ['我们签订魔约吧！']
            }
        },
        
        appearance: '娇小玲珑的少女，但眼神中透着邪魅',
        personality: '天真中带着邪恶，可爱却危险。喜欢捉弄他人',
        catchphrase: '嘻嘻，好好玩~',
        habits: '喜欢用魔法捉弄人',
        backstory: '天生魔体，从小就有强大的魔力。被魔焱收为弟子，教导她如何运用力量。',
        
        initialRealm: 3,
        initialRealmLevel: 5,
        growthSpeed: 0.45,
        canAscend: true,
        
        taskTypes: ['demon_play', 'power_test', 'mischief'],
        likes: ['陪她玩', '认可她的力量', '有趣的事'],
        dislikes: ['说教', '限制她', '看不起她'],
        
        teachTechniques: ['illusion_magic'],
        rewards: {
            favor30: { spiritStone: 120, description: '分享魔石' },
            favor60: { technique: 'illusion_magic', description: '传授幻术' },
            favor90: { special: 'demon_contract', description: '签订魔约' }
        },
        
        growthEvents: {
            play_with: { favor: +15, growthSpeed: 0.55, event: 'happy' },
            reject: { favor: -20, event: 'angry' }
        }
    },
    
    // ==================== 邪教 ====================
    xie_zun: {
        id: 'xie_zun',
        name: '邪尊',
        sect: 'evil_cult',
        role: 'master',
        dialogues: {
            greet: {
                1: ['人心，才是最好的武器。'],
                2: ['聪明人知道该怎么做。'],
                3: ['你很聪明。'],
                4: ['邪术不邪，看怎么用。'],
                5: ['随我掌控天下人心。']
            },
            chat: {
                1: ['邪术不邪，只看用途。'],
                2: ['人心难测，需善用之。'],
                3: ['人心叵测，需善防范。'],
                4: ['控心之术，可授与你。'],
                5: ['邪教印记，可授予你。']
            }
        },
        
        appearance: '神秘人物，总是戴着面具，看不清真容',
        personality: '阴险狡诈，善于心计。喜欢玩弄人心',
        catchphrase: '人心，才是最好的武器',
        habits: '喜欢在暗处观察他人',
        backstory: '真实身份成谜，创立邪教，以邪术控制他人。目的不明，但实力强大。',
        
        initialRealm: 7,
        initialRealmLevel: 5,
        growthSpeed: 0.17,
        canAscend: true,
        
        taskTypes: ['mind_control', 'conspiracy', 'dark_ritual'],
        likes: ['聪明狡诈', '服从命令', '为达目的不择手段'],
        dislikes: ['愚蠢鲁莽', '违抗命令', '心慈手软'],
        
        teachTechniques: ['mind_control', 'dark_curse', 'soul_manipulation'],
        rewards: {
            favor30: { spiritualPower: 400, description: '传授邪术心法' },
            favor60: { technique: 'mind_control', description: '传授控心术' },
            favor90: { special: 'evil_mark', description: '获得邪教印记' }
        }
    },
    
    gui_mei: {
        id: 'gui_mei',
        name: '鬼魅',
        sect: 'evil_cult',
        role: 'senior_sister',
        dialogues: {
            greet: {
                1: ['小哥哥，陪人家玩玩嘛~'],
                2: ['你来了呀~'],
                3: ['你还挺有意思的呢~'],
                4: ['你很特别~'],
                5: ['你已被我完全魅惑了~']
            },
            chat: {
                1: ['听我的话，乖~'],
                2: ['人家会对你好的~'],
                3: ['你很有价值。'],
                4: ['魅术想不想学？'],
                5: ['永远听我的话，好吗？']
            }
        },
        
        appearance: '妖艳女子，一颦一笑都透着诱惑',
        personality: '妩媚诱惑，善于魅惑。实则心狠手辣',
        catchphrase: '小哥哥，陪人家玩玩嘛~',
        habits: '喜欢魅惑男子为她效力',
        backstory: '修炼魅惑之术，无数男子拜倒在她石榴裙下。实则冷血无情，利用完就会抛弃。',
        
        initialRealm: 5,
        initialRealmLevel: 9,
        growthSpeed: 0.25,
        canAscend: true,
        
        taskTypes: ['seduce', 'manipulation', 'betrayal'],
        likes: ['听她的话', '为她卖命', '有价值的人'],
        dislikes: ['不识抬举', '反抗她', '没用的人'],
        
        teachTechniques: ['charm_art', 'seduction'],
        rewards: {
            favor30: { pills: 10, description: '赠送媚药' },
            favor60: { technique: 'charm_art', description: '传授魅术' },
            favor90: { special: 'bewitched', description: '被她完全魅惑' }
        },
        
        specialEvents: {
            resist_charm: { favor: -10, respect: +20, event: 'intrigued' },
            fall_for_charm: { favor: +5, control: +30, event: 'controlled' }
        }
    },
    
    yin_ying: {
        id: 'yin_ying',
        name: '阴影',
        sect: 'evil_cult',
        role: 'junior_brother',
        dialogues: {
            greet: {
                1: ['嘿嘿...疼吗？'],
                2: ['你...又来了。'],
                3: ['你...不怕我？'],
                4: ['你真的...理解我？'],
                5: ['你是唯一理解我的人。']
            },
            chat: {
                1: ['暗影中才安全...'],
                2: ['痛苦...好熟悉。'],
                3: ['谢谢你...不嘲笑我。'],
                4: ['暗影步...教你吗？'],
                5: ['我们一起...永不分离。']
            }
        },
        
        appearance: '瘦弱少年，总是躲在阴影中',
        personality: '阴暗扭曲，心理变态。喜欢折磨他人',
        catchphrase: '嘿嘿...疼吗？',
        habits: '喜欢躲在暗处观察，然后突然出现吓人',
        backstory: '从小被虐待，心理扭曲。被邪尊收养后，学会了邪术，开始报复社会。',
        
        initialRealm: 2,
        initialRealmLevel: 8,
        growthSpeed: 0.42,
        canAscend: true,
        
        taskTypes: ['torture', 'assassination', 'dark_deeds'],
        likes: ['理解他的痛苦', '陪他杀戮', '不评判他'],
        dislikes: ['同情怜悯', '正义说教', '轻视嘲笑'],
        
        teachTechniques: ['shadow_walk', 'poison_art'],
        rewards: {
            favor30: { spiritStone: 90, description: '分享暗杀所得' },
            favor60: { technique: 'shadow_walk', description: '传授暗影步' },
            favor90: { special: 'dark_companion', description: '成为暗影伙伴' }
        },
        
        growthEvents: {
            understand: { favor: +25, loyalty: +30, event: 'grateful' },
            judge: { favor: -35, event: 'hatred' }
        }
    },
    
    // ==================== 血煞门 ====================
    xue_wuya: {
        id: 'xue_wuya',
        name: '血无涯',
        sect: 'blood_sect',
        role: 'master',
        dialogues: {
            greet: {
                1: ['鲜血，才是最美的颜色！'],
                2: ['杀戮即修行。'],
                3: ['你的杀气渐浓。'],
                4: ['血煞之道，无上法门。'],
                5: ['血神体，可期！']
            },
            chat: {
                1: ['杀戮即修行。'],
                2: ['血祭可提升修为。'],
                3: ['血煞之道，无上法门。'],
                4: ['血海滔天，吞噬万物。'],
                5: ['血神体成，天下谁敌？']
            }
        },
        
        appearance: '血袍覆身，周身血气环绕，眼神癫狂',
        personality: '嗜血成性，以杀戮为乐。修炼需吞噬生命',
        catchphrase: '鲜血，才是最美的颜色！',
        habits: '每日都要杀戮，否则会暴走',
        backstory: '修炼禁术血神功，需要吞噬大量生命。已经杀戮无数，被正道通缉。创立血煞门，聚集同道。',
        
        initialRealm: 7,
        initialRealmLevel: 7,
        growthSpeed: 0.19,
        canAscend: true,
        
        taskTypes: ['mass_killing', 'blood_ritual', 'hunt'],
        likes: ['杀戮', '鲜血', '强大'],
        dislikes: ['弱小', '仁慈', '束缚'],
        
        teachTechniques: ['blood_god', 'life_devouring', 'blood_sea'],
        rewards: {
            favor30: { spiritualPower: 600, description: '传授血神功' },
            favor60: { technique: 'blood_god', description: '传授血神诀' },
            favor90: { special: 'blood_god_body', description: '获得血神体' }
        }
    },
    
    sha_qianren: {
        id: 'sha_qianren',
        name: '杀千刃',
        sect: 'blood_sect',
        role: 'senior_brother',
        dialogues: {
            greet: {
                1: ['一刀一个，痛快！'],
                2: ['强者才配活。'],
                3: ['你是强者。'],
                4: ['痛快杀戮。'],
                5: ['兄弟，杀个痛快！']
            },
            chat: {
                1: ['刀要每日磨。'],
                2: ['杀人如割草。'],
                3: ['弱者不配活。'],
                4: ['杀戮刀法，传你。'],
                5: ['血刃赠你，好好用。']
            }
        },
        
        appearance: '刀疤脸，全身伤痕累累，杀气腾腾',
        personality: '杀戮狂人，视杀人如草芥。但尊重强者',
        catchphrase: '一刀一个，痛快！',
        habits: '每天都要磨刀，刀是他的生命',
        backstory: '天生杀性，从小就喜欢杀戮。正道容不下他，加入血煞门后如鱼得水。',
        
        initialRealm: 6,
        initialRealmLevel: 3,
        growthSpeed: 0.27,
        canAscend: true,
        
        taskTypes: ['slaughter', 'challenge_strong', 'blood_bath'],
        likes: ['强者', '杀戮', '磨刀'],
        dislikes: ['弱者', '逃跑', '求饶'],
        
        teachTechniques: ['killing_blade', 'blood_frenzy'],
        rewards: {
            favor30: { pills: 18, description: '赠送血丹' },
            favor60: { technique: 'killing_blade', description: '传授杀戮刀法' },
            favor90: { artifact: 'blood_blade', description: '赠送血刃' }
        }
    },
    
    xue_tong: {
        id: 'xue_tong',
        name: '血瞳',
        sect: 'blood_sect',
        role: 'junior_sister',
        dialogues: {
            greet: {
                1: ['血血的，好漂亮~'],
                2: ['你的血...很好看。'],
                3: ['你不怕我！'],
                4: ['你懂我...'],
                5: ['我们血脉相连了~']
            },
            chat: {
                1: ['我能看到血液流动...'],
                2: ['血的颜色...好美。'],
                3: ['你的血，很漂亮。'],
                4: ['血瞳术...教你吗？'],
                5: ['永远和你在一起！']
            }
        },
        
        appearance: '少女模样，双眼血红，嘴角总挂着诡异的笑',
        personality: '疯狂嗜血，但保有一丝童真。矛盾而危险',
        catchphrase: '血血的，好漂亮~',
        habits: '喜欢用鲜血作画',
        backstory: '天生血瞳，能看到他人血液流动。被血煞门收养，修炼血道。虽然嗜血，但内心渴望被理解。',
        
        initialRealm: 3,
        initialRealmLevel: 8,
        growthSpeed: 0.46,
        canAscend: true,
        
        taskTypes: ['blood_art', 'hunt_prey', 'blood_play'],
        likes: ['陪她玩血', '理解她', '不害怕她'],
        dislikes: ['害怕她', '说她可怕', '限制她'],
        
        teachTechniques: ['blood_eye', 'blood_control'],
        rewards: {
            favor30: { spiritStone: 110, description: '分享血晶' },
            favor60: { technique: 'blood_eye', description: '传授血瞳术' },
            favor90: { special: 'blood_bond', description: '血脉相连' }
        },
        
        growthEvents: {
            accept: { favor: +30, growthSpeed: 0.6, event: 'happy_tears' },
            fear: { favor: -40, event: 'heartbroken' }
        }
    },
    
    // ==================== 商会 ====================
    qian_duoduo: {
        id: 'qian_duoduo',
        name: '钱多多',
        sect: 'merchant',
        role: 'master',
        dialogues: {
            greet: {
                1: ['生意嘛，和气生财。'],
                2: ['客气客气。'],
                3: ['你是个识货的人。'],
                4: ['生意兴隆啊。'],
                5: ['我们合伙做生意吧！']
            },
            chat: {
                1: ['诚信为本，童叟无欺。'],
                2: ['有钱能使鬼推磨。'],
                3: ['这笔生意，稳赚不赔。'],
                4: ['商道即人道。'],
                5: ['商业伙伴，利益共享。']
            }
        },
        
        appearance: '富态中年，满脸笑容，浑身珠光宝气',
        personality: '精明商人，唯利是图。但讲究信用和诚信',
        catchphrase: '生意嘛，和气生财',
        habits: '每天都在计算收支，精打细算',
        backstory: '白手起家的商业奇才，建立庞大商业帝国。创立商会，以商养武，实力不容小觑。',
        
        initialRealm: 6,
        initialRealmLevel: 1,
        growthSpeed: 0.20,
        canAscend: true,
        
        taskTypes: ['trading', 'business_deal', 'resource_gathering'],
        likes: ['赚钱', '诚信交易', '商业头脑'],
        dislikes: ['赊账', '欠债不还', '破坏规矩'],
        
        teachTechniques: ['merchant_way', 'treasure_eye', 'negotiation'],
        rewards: {
            favor30: { spiritStone: 500, description: '赠送灵石' },
            favor60: { special: 'vip_discount', description: '获得贵宾折扣' },
            favor90: { special: 'business_partner', description: '成为商业伙伴' }
        }
    },
    
    jin_linglong: {
        id: 'jin_linglong',
        name: '金玲珑',
        sect: 'merchant',
        role: 'senior_sister',
        dialogues: {
            greet: {
                1: ['这笔生意，稳赚不赔。'],
                2: ['你好呀。'],
                3: ['你很有眼光。'],
                4: ['珍宝识得。'],
                5: ['宝库对你开放。']
            },
            chat: {
                1: ['珍宝需慧眼识之。'],
                2: ['商场如战场。'],
                3: ['我有件宝物，你可一观。'],
                4: ['鉴宝之术，愿传与你。'],
                5: ['鉴宝之术，传你可也。']
            }
        },
        
        appearance: '美艳女子，珠光宝气，雍容华贵',
        personality: '精明能干，善于交际。外柔内刚，手段高明',
        catchphrase: '这笔生意，稳赚不赔',
        habits: '喜欢收集各种珍宝',
        backstory: '商会大小姐，从小在商海浸淫。不仅貌美，而且头脑精明，是商会的得力干将。',
        
        initialRealm: 5,
        initialRealmLevel: 5,
        growthSpeed: 0.24,
        canAscend: true,
        
        taskTypes: ['auction', 'treasure_hunting', 'business_expansion'],
        likes: ['珍宝', '生意', '有眼光的人'],
        dislikes: ['穷鬼', '欠债', '不守信用'],
        
        teachTechniques: ['appraisal', 'treasure_finding'],
        rewards: {
            favor30: { pills: 20, description: '赠送高级丹药' },
            favor60: { technique: 'appraisal', description: '传授鉴宝术' },
            favor90: { special: 'treasure_access', description: '获得宝库权限' }
        }
    },
    
    xiao_fugui: {
        id: 'xiao_fugui',
        name: '小富贵',
        sect: 'merchant',
        role: 'junior_brother',
        dialogues: {
            greet: {
                1: ['客官，要不要看看这个？'],
                2: ['欢迎光临！'],
                3: ['今天又赚了好多！'],
                4: ['你来得正好！'],
                5: ['跟你做生意最开心！']
            },
            chat: {
                1: ['师父说要诚信经商。'],
                2: ['做生意要童叟无欺。'],
                3: ['我有个好买卖，要不要？'],
                4: ['讨价还价是艺术。'],
                5: ['以后咱们一起发财！']
            }
        },
        
        appearance: '机灵少年，笑容灿烂，讨人喜欢',
        personality: '聪明伶俐，能说会道。虽然年轻但很会做生意',
        catchphrase: '客官，要不要看看这个？',
        habits: '喜欢到处收购和售卖各种物品',
        backstory: '孤儿，被钱多多收养。天生商业头脑，跟着师父学习经商之道。',
        
        initialRealm: 1,
        initialRealmLevel: 5,
        growthSpeed: 0.44,
        canAscend: true,
        
        taskTypes: ['small_business', 'item_trading', 'bargaining'],
        likes: ['做生意', '讨价还价', '赚钱'],
        dislikes: ['亏本', '被骗', '不尊重他'],
        
        teachTechniques: ['bargaining'],
        rewards: {
            favor30: { spiritStone: 200, description: '分享交易利润' },
            favor60: { special: 'trade_network', description: '获得交易网络' },
            favor90: { special: 'business_genius', description: '商业天才' }
        },
        
        growthEvents: {
            teach_business: { favor: +15, growthSpeed: 0.55, event: 'learn_fast' },
            cheat: { favor: -50, trust: -80, event: 'never_trust' }
        }
    }
};

// NPC关系等级定义
const relationshipLevels = {
    1: { 
        name: '陌生', 
        minFavor: 0, 
        maxFavor: 10, 
        benefits: [],
        description: '你们只是刚刚认识'
    },
    2: { 
        name: '认识', 
        minFavor: 11, 
        maxFavor: 30, 
        benefits: ['basic_talk', 'simple_task'],
        description: '可以进行基本交流和简单任务'
    },
    3: { 
        name: '友好', 
        minFavor: 31, 
        maxFavor: 60, 
        benefits: ['gift', 'advice', 'resource_sharing'],
        description: '可以赠送礼物、获得建议、共享资源'
    },
    4: { 
        name: '亲密', 
        minFavor: 61, 
        maxFavor: 85, 
        benefits: ['teach_skill', 'combat_support', 'special_task'],
        description: '可以学习技能、获得战斗支援、接取特殊任务'
    },
    5: { 
        name: '挚友', 
        minFavor: 86, 
        maxFavor: 100, 
        benefits: ['full_support', 'secret_techniques', 'ascension_together'],
        description: '获得全面支持、秘传功法、可以一起飞升'
    }
};

// 互动类型定义
const interactionTypes = {
    // 基础互动（等级1可用）
    greet: {
        name: '简单问候',
        favorGain: 1,
        cost: {},
        cooldown: 180000, // 3分钟
        description: '向对方打个招呼，表示友好',
        requirements: { minLevel: 1 },
        dialogue: true
    },
    observe: {
        name: '观察学习',
        favorGain: 1,
        cost: {},
        cooldown: 180000, // 3分钟
        description: '默默观察对方的行为，学习经验',
        requirements: { minLevel: 1 },
        dialogue: true
    },
    
    // 正面互动（等级2+）
    gift: {
        name: '赠送礼物',
        favorGain: 6,
        cost: { spiritStone: 100 },
        cooldown: 180000, // 3分钟
        description: '赠送灵石表达心意',
        requirements: { minLevel: 2 },
        dialogue: true
    },
    chat: {
        name: '闲聊',
        favorGain: 2,
        cost: {},
        cooldown: 180000, // 3分钟
        description: '与对方聊天增进感情',
        requirements: { minLevel: 2 },
        dialogue: true
    },
    help_cultivate: {
        name: '帮助修炼',
        favorGain: 5,
        cost: { spiritualPower: 100 },
        cooldown: 180000, // 3分钟
        description: '帮助对方修炼，增加对方成长速度',
        requirements: { minLevel: 3 },
        effect: { growthBonus: 0.1 },
        dialogue: true
    },
    spar: {
        name: '切磋武艺',
        favorGain: 5,
        cost: { spiritualPower: 50 },
        cooldown: 180000, // 3分钟
        description: '与对方切磋，增进了解',
        requirements: { minLevel: 3 },
        dialogue: true
    },
    ask_introduction: {
        name: '请求介绍',
        favorGain: 3,
        cost: { spiritStone: 50 },
        cooldown: 180000, // 3分钟
        description: '请对方介绍认识其他修士',
        requirements: { minLevel: 3 },
        effect: { meetNewNPC: true },
        dialogue: true
    },
    
    learn_technique: {
        name: '请教功法',
        favorGain: 5,
        cost: { spiritStone: 200 },
        cooldown: 86400000, // 24小时冷却
        description: '向师傅请教功法，可能学到新的技能',
        requirements: { minLevel: 3, masterOnly: true },
        special: true,
        dialogue: true
    },
    
    become_guest_master: {
        name: '拜为客座师傅',
        favorGain: 10,
        cost: { spiritStone: 500, sectContribution: 50 },
        cooldown: 0, // 一次性
        description: '拜为客座师傅，可以学习其功法（需要好感度60+）',
        requirements: { minLevel: 4, canBecomeGuest: true },
        special: true,
        dialogue: true
    },
    
    // 特殊事件
    birthday: {
        name: '生日祝福',
        favorGain: 20,
        cost: { spiritStone: 200 },
        cooldown: 86400000, // 24小时冷却
        description: '在对方生日时送上祝福',
        requirements: { minLevel: 3 },
        special: true
    },
    crisis_help: {
        name: '危机援助',
        favorGain: 30,
        cost: { spiritStone: 500, pills: 5 },
        cooldown: 86400000, // 24小时冷却
        description: '在对方遇到危机时伸出援手',
        requirements: { minLevel: 3 },
        special: true
    },
    achievement_congratulate: {
        name: '成就祝贺',
        favorGain: 10,
        cost: {},
        cooldown: 86400000, // 24小时冷却
        description: '祝贺对方的成就',
        requirements: { minLevel: 2 },
        special: true
    }
};

