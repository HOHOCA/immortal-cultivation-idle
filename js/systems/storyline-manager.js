// 剧情线管理系统
// 负责管理剧情进度、状态追踪和剧情推进

class StorylineManager {
    constructor() {
        this.storylines = {}; // 所有剧情线配置
        this.activeStorylines = {}; // 玩家当前激活的剧情线
    }

    // 初始化
    init(storylinesConfig) {
        this.storylines = storylinesConfig;
        
        // 从gameData加载玩家的剧情进度
        if (!gameData.storylines) {
            gameData.storylines = {};
        }
        this.activeStorylines = gameData.storylines;
    }

    // 检查是否可以开启某条剧情线
    canStartStoryline(storylineId) {
        const storyline = this.storylines[storylineId];
        if (!storyline) return false;

        // 已经在进行中
        if (this.activeStorylines[storylineId]) return false;

        // 检查境界要求
        if (storyline.minRealm && gameData.player.realm < storyline.minRealm) return false;
        if (storyline.maxRealm && gameData.player.realm > storyline.maxRealm) return false;

        // 检查飞升要求
        if (storyline.minAscension && gameData.ascensionCount < storyline.minAscension) return false;

        // 检查仙界要求
        if (storyline.requireImmortalWorld && !gameData.player.isInImmortalWorld) return false;

        // 检查前置剧情
        if (storyline.requireStorylines) {
            for (let reqId of storyline.requireStorylines) {
                if (!this.activeStorylines[reqId] || !this.activeStorylines[reqId].completed) {
                    return false;
                }
            }
        }

        // 自定义条件检查
        if (storyline.canStart && !storyline.canStart()) return false;

        return true;
    }

    // 开启新剧情线
    startStoryline(storylineId) {
        if (!this.canStartStoryline(storylineId)) return false;

        const storyline = this.storylines[storylineId];
        
        this.activeStorylines[storylineId] = {
            id: storylineId,
            stage: 0, // 当前进度（第几个节点）
            choices: [], // 历史选择记录
            completed: false,
            outcome: null,
            startTime: Date.now(),
            lastEventTime: Date.now(),
            variables: {} // 剧情变量
        };

        // 保存到gameData
        gameData.storylines = this.activeStorylines;
        
        console.log(`[剧情线] 开启: ${storyline.name}`);
        return true;
    }

    // 获取当前剧情线的当前节点事件
    getCurrentStageEvent(storylineId) {
        const active = this.activeStorylines[storylineId];
        if (!active || active.completed) return null;

        const storyline = this.storylines[storylineId];
        if (!storyline || !storyline.stages) return null;

        const currentStage = storyline.stages[active.stage];
        if (!currentStage) return null;

        // 检查节点的触发条件
        if (currentStage.canTrigger && !currentStage.canTrigger(active)) {
            return null;
        }

        return currentStage;
    }

    // 推进剧情（玩家做出选择后）
    progressStoryline(storylineId, choiceIndex) {
        const active = this.activeStorylines[storylineId];
        if (!active) return null;

        const storyline = this.storylines[storylineId];
        const currentStage = storyline.stages[active.stage];
        
        if (!currentStage || !currentStage.choices[choiceIndex]) {
            console.error(`[剧情线] 无效的选择: ${storylineId} - stage ${active.stage} - choice ${choiceIndex}`);
            return null;
        }

        const choice = currentStage.choices[choiceIndex];

        // 记录选择
        active.choices.push(choice.id || `stage${active.stage}_choice${choiceIndex}`);
        active.lastEventTime = Date.now();

        // 执行选择结果
        let result = null;
        if (choice.result) {
            result = choice.result(active);
        }

        // 更新剧情变量
        if (choice.variables) {
            for (let key in choice.variables) {
                if (typeof choice.variables[key] === 'function') {
                    active.variables[key] = choice.variables[key](active.variables[key]);
                } else {
                    active.variables[key] = (active.variables[key] || 0) + choice.variables[key];
                }
            }
        }

        // 确定下一个节点
        if (choice.nextStage !== undefined) {
            if (choice.nextStage === 'end') {
                // 剧情结束
                this.completeStoryline(storylineId, choice.outcome);
            } else if (choice.nextStage === 'current') {
                // 停留在当前节点（分支剧情）
            } else {
                // 跳转到指定节点
                active.stage = choice.nextStage;
            }
        } else {
            // 默认：进入下一个节点
            active.stage++;
            
            // 检查是否已经到达最后
            if (active.stage >= storyline.stages.length) {
                this.completeStoryline(storylineId, 'normal');
            }
        }

        // 保存
        gameData.storylines = this.activeStorylines;
        saveGame();

        return result;
    }

    // 完成剧情线
    completeStoryline(storylineId, outcome = 'normal') {
        const active = this.activeStorylines[storylineId];
        if (!active) return;

        active.completed = true;
        active.outcome = outcome;
        active.completedTime = Date.now();

        const storyline = this.storylines[storylineId];
        
        console.log(`[剧情线] 完成: ${storyline.name} - 结局: ${outcome}`);

        // 发放奖励
        if (storyline.outcomes && storyline.outcomes[outcome]) {
            const outcomeData = storyline.outcomes[outcome];
            if (outcomeData.rewards) {
                this.applyRewards(outcomeData.rewards);
            }
        }

        // 保存
        gameData.storylines = this.activeStorylines;
        saveGame();
    }

    // 应用奖励
    applyRewards(rewards) {
        if (rewards.spiritStone) {
            gameData.player.spiritStone += rewards.spiritStone;
        }
        if (rewards.spiritualPower) {
            gameData.player.spiritualPower += rewards.spiritualPower;
        }
        if (rewards.pills) {
            gameData.player.pills += rewards.pills;
        }
        if (rewards.breakthroughProgress) {
            gameData.player.breakthroughProgress = Math.min(100, 
                gameData.player.breakthroughProgress + rewards.breakthroughProgress);
        }
        if (rewards.techniques) {
            if (!gameData.learnedTechniques) gameData.learnedTechniques = {};
            for (let tech of rewards.techniques) {
                gameData.learnedTechniques[tech] = {
                    learnedFrom: 'storyline',
                    learnedAt: Date.now()
                };
            }
        }
        if (rewards.title) {
            if (!gameData.titles) gameData.titles = [];
            if (!gameData.titles.includes(rewards.title)) {
                gameData.titles.push(rewards.title);
            }
        }
    }

    // 检查是否应该触发剧情事件
    shouldTriggerStorylineEvent() {
        // 遍历所有进行中的剧情线
        for (let storylineId in this.activeStorylines) {
            const active = this.activeStorylines[storylineId];
            if (active.completed) continue;

            const storyline = this.storylines[storylineId];
            if (!storyline) continue;

            // 检查练气期剧情是否应该强制结束
            if (storyline.maxRealm === 0 && gameData.player.realm >= 1) {
                this.completeStoryline(storylineId, 'reached_basement');
                continue;
            }

            const currentStage = storyline.stages[active.stage];
            if (!currentStage) continue;

            // 检查触发条件
            if (currentStage.canTrigger && !currentStage.canTrigger(active)) {
                continue;
            }

            // 检查冷却时间
            const timeSinceLastEvent = Date.now() - active.lastEventTime;
            const cooldown = currentStage.cooldown || 0;
            
            if (timeSinceLastEvent < cooldown) {
                continue;
            }

            // 可以触发
            return storylineId;
        }

        return null;
    }

    // 尝试开启新剧情线
    tryStartNewStoryline() {
        // 获取所有可以开启的剧情线
        const availableStorylines = [];
        
        for (let storylineId in this.storylines) {
            if (this.canStartStoryline(storylineId)) {
                const storyline = this.storylines[storylineId];
                availableStorylines.push({
                    id: storylineId,
                    priority: storyline.priority || 1
                });
            }
        }

        if (availableStorylines.length === 0) return null;

        // 按优先级排序
        availableStorylines.sort((a, b) => b.priority - a.priority);

        // 优先级加权随机
        const totalWeight = availableStorylines.reduce((sum, s) => sum + s.priority, 0);
        let random = Math.random() * totalWeight;
        
        for (let storyline of availableStorylines) {
            random -= storyline.priority;
            if (random <= 0) {
                this.startStoryline(storyline.id);
                return storyline.id;
            }
        }

        return null;
    }

    // 获取剧情线状态摘要
    getStorylineSummary(storylineId) {
        const active = this.activeStorylines[storylineId];
        const storyline = this.storylines[storylineId];
        
        if (!active || !storyline) return null;

        // 计算已完成的阶段数
        let completedStages = active.stage;
        if (active.completed) {
            completedStages = storyline.stages.length;
        }
        
        return {
            name: storyline.name,
            category: storyline.category,
            stage: active.stage,
            completedStages: completedStages,
            totalStages: storyline.stages.length,
            completed: active.completed,
            outcome: active.outcome,
            progress: Math.floor((completedStages / storyline.stages.length) * 100)
        };
    }

    // 获取所有剧情线状态
    getAllStorylines() {
        const result = [];
        
        for (let storylineId in this.activeStorylines) {
            const summary = this.getStorylineSummary(storylineId);
            if (summary) {
                result.push(summary);
            }
        }

        return result;
    }
}

// 创建全局实例
const storylineManager = new StorylineManager();

