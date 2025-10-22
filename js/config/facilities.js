// 设施定义

const facilitiesData = {
            spiritualVein: {
                name: '灵脉',
                desc: '提升灵力产出速度',
                baseCost: 50,
                costMultiplier: 1.45, // 降低成本增长
                getBenefit: (level) => `每秒 +${level} 灵力`
            },
            pillRoom: {
                name: '丹房',
                desc: '自动生产丹药',
                baseCost: 200,
                costMultiplier: 1.7, // 降低成本增长
                getBenefit: (level) => `每30秒 +1 丹药 (等级${level})`
            },
            library: {
                name: '藏经阁',
                desc: '提升突破成功率和灵力获取',
                baseCost: 500,
                costMultiplier: 1.85, // 降低成本增长
                getBenefit: (level) => `灵力获取 +${level * 5}%`
            },
            artifactRoom: {
                name: '炼器房',
                desc: '提升整体修炼效率',
                baseCost: 1000,
                costMultiplier: 2.0, // 降低成本增长
                getBenefit: (level) => `整体效率 +${level * 3}%`
            },
            spiritualField: {
                name: '灵田',
                desc: '种植灵药，获取额外资源',
                baseCost: 1500,
                costMultiplier: 2.2, // 降低成本增长
                getBenefit: (level) => `每分钟 +${level} 灵石`
            },
            immortalPond: {
                name: '仙池',
                desc: '仙界灵泉，大幅提升灵力产出',
                baseCost: 5000,
                costMultiplier: 3,
                requiredAscension: 1,
                getBenefit: (level) => `灵力产出 +${level * 50}%`
            },
            celestialTree: {
                name: '仙树',
                desc: '天地灵根，每小时产出珍贵资源',
                baseCost: 10000,
                costMultiplier: 3.5,
                requiredAscension: 2,
                getBenefit: (level) => `每小时 +${level * 10}灵石, +${level}丹药`
            }
        };