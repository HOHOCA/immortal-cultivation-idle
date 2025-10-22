// 辅助工具函数

// 安全的数字运算
function safeNumber(num, defaultValue = 0) {
    if (typeof num !== 'number' || isNaN(num) || !isFinite(num)) {
        return defaultValue;
    }
    // 限制在安全整数范围内
    return Math.min(Number.MAX_SAFE_INTEGER, Math.max(-Number.MAX_SAFE_INTEGER, num));
}

// 安全的对象属性访问
function safeGet(obj, path, defaultValue = null) {
    try {
        const keys = path.split('.');
        let result = obj;
        
        for (let key of keys) {
            if (result === null || result === undefined || typeof result !== 'object') {
                return defaultValue;
            }
            result = result[key];
        }
        
        return result !== undefined ? result : defaultValue;
    } catch (error) {
        console.warn('安全访问属性失败:', path, error);
        return defaultValue;
    }
}

// 安全的对象属性设置
function safeSet(obj, path, value) {
    try {
        const keys = path.split('.');
        let current = obj;
        
        for (let i = 0; i < keys.length - 1; i++) {
            const key = keys[i];
            if (!(key in current) || typeof current[key] !== 'object') {
                current[key] = {};
            }
            current = current[key];
        }
        
        current[keys[keys.length - 1]] = value;
        return true;
    } catch (error) {
        console.warn('安全设置属性失败:', path, error);
        return false;
    }
}

// 深度克隆对象
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    
    if (obj instanceof Array) {
        return obj.map(item => deepClone(item));
    }
    
    const cloned = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key]);
        }
    }
    
    return cloned;
}

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 节流函数
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// 随机数生成
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

// 数组工具
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function getRandomItem(array) {
    if (!array || array.length === 0) return null;
    return array[randomInt(0, array.length - 1)];
}

function removeItem(array, item) {
    const index = array.indexOf(item);
    if (index > -1) {
        array.splice(index, 1);
        return true;
    }
    return false;
}

// 对象工具
function mergeObjects(target, source) {
    const result = { ...target };
    for (let key in source) {
        if (source.hasOwnProperty(key)) {
            if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
                result[key] = mergeObjects(result[key] || {}, source[key]);
            } else {
                result[key] = source[key];
            }
        }
    }
    return result;
}

function isEmpty(obj) {
    if (obj === null || obj === undefined) return true;
    if (typeof obj !== 'object') return false;
    return Object.keys(obj).length === 0;
}

// 字符串工具
function capitalize(str) {
    if (!str || typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function truncate(str, length) {
    if (!str || typeof str !== 'string') return '';
    if (str.length <= length) return str;
    return str.slice(0, length) + '...';
}

// 时间工具
function getCurrentTime() {
    return Date.now();
}

function addTime(ms) {
    return Date.now() + ms;
}

function timeDiff(start, end) {
    return end - start;
}

// 验证工具
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidNumber(value) {
    return typeof value === 'number' && !isNaN(value) && isFinite(value);
}

function isValidString(value) {
    return typeof value === 'string' && value.trim().length > 0;
}

// 数学工具
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function lerp(start, end, factor) {
    return start + (end - start) * factor;
}

function roundToDecimal(value, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
}

// 游戏相关工具
function calculateLevel(experience, baseExp = 100, growthRate = 1.2) {
    if (experience < baseExp) return 1;
    
    let level = 1;
    let totalExp = 0;
    let levelExp = baseExp;
    
    while (totalExp + levelExp <= experience) {
        totalExp += levelExp;
        level++;
        levelExp = Math.floor(levelExp * growthRate);
    }
    
    return level;
}

function getLevelProgress(experience, baseExp = 100, growthRate = 1.2) {
    const level = calculateLevel(experience, baseExp, growthRate);
    const levelStartExp = getLevelStartExp(level - 1, baseExp, growthRate);
    const levelEndExp = getLevelStartExp(level, baseExp, growthRate);
    const levelExp = levelEndExp - levelStartExp;
    const currentExp = experience - levelStartExp;
    
    return {
        level: level,
        progress: currentExp / levelExp,
        currentExp: currentExp,
        levelExp: levelExp
    };
}

function getLevelStartExp(level, baseExp = 100, growthRate = 1.2) {
    if (level <= 1) return 0;
    
    let totalExp = 0;
    let levelExp = baseExp;
    
    for (let i = 1; i < level; i++) {
        totalExp += levelExp;
        levelExp = Math.floor(levelExp * growthRate);
    }
    
    return totalExp;
}

// 颜色工具
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// 本地存储工具
function setLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        console.warn('设置本地存储失败:', key, error);
        return false;
    }
}

function getLocalStorage(key, defaultValue = null) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
        console.warn('获取本地存储失败:', key, error);
        return defaultValue;
    }
}

function removeLocalStorage(key) {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (error) {
        console.warn('删除本地存储失败:', key, error);
        return false;
    }
}

// 事件工具
function addEventListenerOnce(element, event, handler) {
    const onceHandler = (e) => {
        handler(e);
        element.removeEventListener(event, onceHandler);
    };
    element.addEventListener(event, onceHandler);
}

// 动画工具
function animateValue(element, start, end, duration, callback) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = lerp(start, end, progress);
        callback(current);
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// 初始化工具函数
function initHelpers() {
    // 为全局对象添加一些有用的方法
    if (typeof window !== 'undefined') {
        window.safeNumber = safeNumber;
        window.safeGet = safeGet;
        window.safeSet = safeSet;
        window.deepClone = deepClone;
        window.randomInt = randomInt;
        window.randomFloat = randomFloat;
        window.clamp = clamp;
        window.lerp = lerp;
    }
}
