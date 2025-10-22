/**
 * 游戏常量配置
 * 集中管理所有魔法数字，方便调整游戏平衡性
 */

// ========== 基础游戏常量 ==========
const GAME_CONFIG = {
    // 自动保存
    AUTO_SAVE_INTERVAL: 30000,              // 自动保存间隔（毫秒）30秒
    
    // 日志系统
    MAX_LOG_ENTRIES: 100,                   // 最大日志条数
    
    // 随机事件
    EVENT_TRIGGER_CHANCE: 0.3,              // 随机事件触发概率 30%
    EVENT_MIN_INTERVAL: 60000,              // 事件最小间隔（毫秒）1分钟
};

// ========== 修炼系统 ==========
const CULTIVATION_CONFIG = {
    BASE_GAIN: 10,                          // 基础修炼获得灵力
    PILL_POWER: 100,                        // 每颗丹药提供的灵力
    PILL_BREAKTHROUGH_BONUS: 10,            // 丹药提升突破进度（%）
};

// ========== 突破系统 ==========
const BREAKTHROUGH_CONFIG = {
    BASE_SUCCESS_RATE: 0.7,                 // 基础突破成功率 70%
    FAIL_LOSS_RATE: 0.5,                    // 失败损失灵力比例 50%
    PROGRESS_PER_SPIRIT: 0.01,              // 每点灵力转化的突破进度（%）
};

// ========== 设施系统 ==========
const FACILITY_CONFIG = {
    // 灵脉
    VEIN_BASE_COST: 50,                     // 灵脉基础升级成本
    VEIN_COST_MULTIPLIER: 1.5,              // 成本倍率
    VEIN_BASE_PRODUCTION: 1,                // 基础产出/秒
    VEIN_PRODUCTION_GROWTH: 0.5,            // 每级增长
    
    // 丹房
    PILL_ROOM_BASE_COST: 500,
    PILL_ROOM_PRODUCTION_INTERVAL: 30000,   // 生产间隔（毫秒）30秒
    PILL_ROOM_BASE_OUTPUT: 1,               // 基础产出丹药数
    
    // 藏经阁
    LIBRARY_BASE_COST: 300,
    LIBRARY_SPIRIT_BONUS: 0.05,             // 每级灵力加成 5%
    LIBRARY_BREAKTHROUGH_BONUS: 0.05,       // 每级突破率加成 5%
    
    // 炼器房
    ARTIFACT_ROOM_BASE_COST: 1000,
    ARTIFACT_ROOM_EFFICIENCY_BONUS: 0.03,   // 每级全局效率加成 3%
    
    // 灵田
    FIELD_BASE_COST: 800,
    FIELD_PRODUCTION_INTERVAL: 60000,       // 生产间隔（毫秒）1分钟
    FIELD_BASE_OUTPUT: 10,                  // 基础产出灵石
    
    // 仙池
    IMMORTAL_POND_BASE_COST: 5000,
    IMMORTAL_POND_SPIRIT_BONUS: 0.5,        // 每级灵力加成 50%
    
    // 仙树
    CELESTIAL_TREE_BASE_COST: 10000,
    CELESTIAL_TREE_PRODUCTION_INTERVAL: 3600000, // 生产间隔（毫秒）1小时
};

// ========== 战斗系统 ==========
const COMBAT_CONFIG = {
    BASE_POWER_PER_REALM: 150,              // 每个境界基础战力
    BASE_POWER_PER_LEVEL: 20,               // 每层基础战力
    LIBRARY_POWER_BONUS: 10,                // 藏经阁每级战力加成
    ARTIFACT_ROOM_POWER_BONUS: 15,          // 炼器房每级战力加成
    
    // 战斗动画
    BATTLE_ANIMATION_DURATION: 3000,        // 战斗动画时长（毫秒）
    
    // 失败惩罚
    COMBAT_LOSS_PENALTY: 0.3,               // 战斗失败损失灵力 30%
    DUNGEON_LOSS_PENALTY: 0.3,              // 副本失败损失灵力 30%
};

// ========== 门派系统 ==========
const SECT_CONFIG = {
    UNLOCK_REALM: 1,                        // 解锁门派需要的境界（筑基期=1）
    WORSHIP_COST: 100,                      // 拜师需要的贡献度
    GUEST_MASTER_COST_STONE: 500,           // 拜客座师傅灵石成本
    GUEST_MASTER_COST_CONTRIBUTION: 50,     // 拜客座师傅贡献度成本
    GUEST_MASTER_FAVOR_REQUIRED: 60,        // 拜客座师傅需要的好感度
    
    MAX_TASK_SLOTS_BASE: 1,                 // 基础任务槽位数
    TASK_COOLDOWN: 60000,                   // 任务冷却时间（毫秒）
};

// ========== NPC关系系统 ==========
const NPC_CONFIG = {
    // 互动冷却
    INTERACTION_COOLDOWN: 60000,            // 基础互动冷却 1分钟
    GIFT_COOLDOWN: 86400000,                // 赠礼冷却 24小时
    HELP_CULTIVATE_COOLDOWN: 43200000,      // 帮助修炼冷却 12小时
    SPAR_COOLDOWN: 21600000,                // 切磋冷却 6小时
    
    // 好感度变化
    GREET_FAVOR: 1,                         // 问候好感度
    CHAT_FAVOR: 2,                          // 闲聊好感度
    GIFT_FAVOR: 10,                         // 赠礼好感度
    SPAR_FAVOR: 5,                          // 切磋好感度
    HELP_FAVOR: 8,                          // 帮助修炼好感度
    
    // 资源消耗
    GIFT_COST: 100,                         // 赠礼消耗灵石
    SPAR_COST: 50,                          // 切磋消耗灵力
    HELP_COST: 100,                         // 帮助修炼消耗灵力
    
    // 师傅系统
    LEARN_TECHNIQUE_COOLDOWN: 86400000,     // 学习功法冷却 24小时
    LEARN_TECHNIQUE_COST: 200,              // 学习功法消耗灵石
    MASTER_SPIRIT_BONUS: 0.1,               // 正式师傅灵力加成 10%
    GUEST_MASTER_SPIRIT_BONUS: 0.03,        // 客座师傅灵力加成 3%
    MAX_EFFECTIVE_GUEST_MASTERS: 5,         // 最多有效客座师傅数量
};

// ========== 五行系统 ==========
const ELEMENT_CONFIG = {
    UNLOCK_REALM: 1,                        // 解锁五行需要的境界（筑基期）
    UPGRADE_COST: 10,                       // 提升属性消耗仙石
    POWER_INCREASE_PER_LEVEL: 0.1,          // 每级属性强度提升 10%
    COUNTER_DAMAGE_BONUS: 0.2,              // 相克伤害加成 20%
};

// ========== 飞升系统 ==========
const ASCENSION_CONFIG = {
    MIN_REALM: 8,                           // 最低飞升境界（渡劫期=8）
    MIN_REALM_LEVEL: 9,                     // 最低境界层数
    
    SPIRIT_BONUS_PER_ASCENSION: 0.5,        // 每次飞升灵力加成 50%
    RESOURCE_KEEP_RATE: 0.5,                // 普通飞升保留资源 50%
    MASTER_ASCENSION_KEEP_RATE: 0.7,        // 师徒共同飞升保留 70%
    
    INITIAL_SPIRIT_STONE: 50,               // 飞升后初始灵石
    IMMORTAL_STONE_REWARD: 100,             // 飞升仙石奖励
    DAO_FRUIT_REWARD: 1,                    // 飞升道果奖励
    
    // 师徒共同飞升
    MASTER_ASCENSION_IMMORTAL_STONE: 200,   // 师徒飞升仙石奖励
    MASTER_ASCENSION_DAO_FRUIT: 3,          // 师徒飞升道果奖励
    MASTER_ASCENSION_BONUS: 0.05,           // 师徒同心加成 5%
    
    // 仙界解锁
    IMMORTAL_WORLD_UNLOCK: 3,               // 需要飞升次数解锁仙界
};

// ========== 成就系统 ==========
const ACHIEVEMENT_CONFIG = {
    // 速度类成就时间限制（天）
    GENIUS_TIME_LIMIT: 100,                 // 天赋异禀：100天内筑基
    PRODIGY_TIME_LIMIT: 500,                // 修仙奇才：500天内金丹
    SPEEDRUN_TIME_LIMIT: 300,               // 速通传说：300天内元婴
};

// ========== 炼制系统 ==========
const CRAFTING_CONFIG = {
    // 基础成功率
    BASE_SUCCESS_RATE: {
        basic: 0.8,                         // 基础法宝 80%
        intermediate: 0.6,                  // 中级法宝 60%
        advanced: 0.4,                      // 高级法宝 40%
        legendary: 0.2,                     // 传说法宝 20%
    },
    
    // 技能加成
    SKILL_BONUS_PER_LEVEL: {
        basic: 0.05,                        // 基础炼器每级 +5%
        advanced: 0.04,                     // 高级炼器每级 +4%
        master: 0.03,                       // 大师炼器每级 +3%
        legendary: 0.02,                    // 传说炼器每级 +2%
    },
    
    MAX_SUCCESS_RATE: 0.95,                 // 最高成功率 95%
    FACILITY_BONUS_PER_LEVEL: 0.01,         // 炼器房每级 +1%
};

// ========== 天赋系统 ==========
const TALENT_CONFIG = {
    DAO_FRUIT_TO_POINT: 1,                  // 1道果兑换1天赋点
    
    // 天赋点消耗
    COST: {
        tier1: 1,                           // 基础天赋
        tier2: 2,                           // 进阶天赋
        tier3: 3,                           // 高级天赋
        tier4: 5,                           // 至尊天赋
    },
};

// ========== 副本系统 ==========
const DUNGEON_CONFIG = {
    // 副本内资源
    INITIAL_HP: 1000,                       // 初始生命值
    INITIAL_EXPLORATION_POINTS: 5,          // 初始探索点
    
    // 难度系数范围
    DIFFICULTY_RANGE: {
        min: 0.7,
        max: 2.0,
    },
    
    // 奖励系数范围
    REWARD_RANGE: {
        min: 0.8,
        max: 2.0,
    },
};

// ========== UI配置 ==========
const UI_CONFIG = {
    // 更新频率
    UI_UPDATE_INTERVAL: 100,                // UI更新间隔（毫秒）
    
    // 动画时长
    NOTIFICATION_DURATION: 3000,            // 通知显示时长
    MODAL_FADE_DURATION: 300,               // 模态框淡入淡出时长
    
    // 进度条动画
    PROGRESS_BAR_TRANSITION: 300,           // 进度条过渡时长（毫秒）
    
    // 数字格式化
    LARGE_NUMBER_THRESHOLD: 10000,          // 大数字简化阈值（显示为 10K）
};

// ========== 调试配置 ==========
const DEBUG_CONFIG = {
    ENABLE_CONSOLE_LOG: true,               // 是否启用控制台日志
    ENABLE_PERFORMANCE_MONITOR: false,      // 是否启用性能监控
    SHOW_DEBUG_INFO: false,                 // 是否显示调试信息
};

// ========== 所有配置已在上方声明为全局变量 ==========
// 不需要导出，直接在浏览器中使用即可
// 例如：GAME_CONFIG, CULTIVATION_CONFIG 等

