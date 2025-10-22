// 境界定义

const realms = [
            { 
                name: '炼气期', 
                maxLevel: 9, 
                spiritRequired: 500, 
                multiplier: 1,
                story: '这是修仙的起点，感受天地灵气，引气入体...'
            },
            { 
                name: '筑基期', 
                maxLevel: 9, 
                spiritRequired: 10000, 
                multiplier: 2,
                story: '灵气凝聚丹田，筑就道基。从此踏入真正的修仙之路，寿元大增。'
            },
            { 
                name: '金丹期', 
                maxLevel: 9, 
                spiritRequired: 200000, 
                multiplier: 4,
                story: '丹田之气凝结成丹，金光闪烁。神识初显，可御器飞行，已非凡人可比。'
            },
            { 
                name: '元婴期', 
                maxLevel: 9, 
                spiritRequired: 5000000, 
                multiplier: 8,
                story: '金丹破碎，元婴诞生。元神凝实，神通显化，寿可千载。'
            },
            { 
                name: '化神期', 
                maxLevel: 9, 
                spiritRequired: 150000000, 
                multiplier: 16,
                story: '元婴化神，与天地感应更深。法则初显，神通莫测，已是一方强者。'
            },
            { 
                name: '炼虚期', 
                maxLevel: 9, 
                spiritRequired: 5000000000, 
                multiplier: 32,
                story: '炼虚合道，返璞归真。虚空挪移，撕裂空间，修为通天。'
            },
            { 
                name: '合体期', 
                maxLevel: 9, 
                spiritRequired: 200000000000, 
                multiplier: 64,
                story: '天人合一，道法自然。举手投足间蕴含天地之力，已近仙道。'
            },
            { 
                name: '大乘期', 
                maxLevel: 9, 
                spiritRequired: 10000000000000, 
                multiplier: 128,
                story: '大道圆满，功德大成。只差一步，便可飞升成仙。'
            },
            { 
                name: '渡劫期', 
                maxLevel: 9, 
                spiritRequired: 600000000000000, 
                multiplier: 256,
                story: '引天劫降临，以劫炼身。渡过此劫，便可飞升仙界！'
            }
        ];

const immortalRealms = [
            {
                name: '地仙',
                maxLevel: 9,
                spiritRequired: 50000000000000000,
                multiplier: 512,
                story: '飞升成功！你踏入仙界，成为地仙。凡界的一切都已远去，新的修炼之路在脚下延展...'
            },
            {
                name: '天仙',
                maxLevel: 9,
                spiritRequired: 5000000000000000000,
                multiplier: 1024,
                story: '突破至天仙，掌控天地法则。仙界诸多秘境向你敞开...'
            },
            {
                name: '真仙',
                maxLevel: 9,
                spiritRequired: 600000000000000000000,
                multiplier: 2048,
                story: '真仙之境，已脱离生死轮回。不朽的道路在前方...'
            },
            {
                name: '金仙',
                maxLevel: 9,
                spiritRequired: 80000000000000000000000,
                multiplier: 4096,
                story: '证得金仙果位，寿与天齐。仙界亿万年，不过弹指一挥间...'
            },
            {
                name: '大罗金仙',
                maxLevel: 9,
                spiritRequired: 12000000000000000000000000,
                multiplier: 8192,
                story: '大罗金仙，超脱时空，不在五行之中。你已站在仙道巅峰...'
            }
        ];
