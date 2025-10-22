// SVG图标库
// 统一管理所有内联SVG图标，方便维护和复用

const SVGIcons = {
    // ============ 基础图标 ============
    
    // 握手/结识
    handshake: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle; margin-right: 4px;">
            <path d="M11,6H14L17,9V11.91L12.83,16.08L11,14.25V6M5,11V22H3V11H5M10,11V22H6V11H10M22,11V22H20V11H22M17,11V19.6L12.4,15L17,11Z"/>
        </svg>
    `,
    
    // 星星
    star: (size = 16, color = '#f1c40f') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle; margin-right: 4px;">
            <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/>
        </svg>
    `,
    
    // 剑
    sword: (size = 16, color = '#3498db') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle; margin-right: 4px;">
            <path d="M6.5,21L5,19.5L12,12.5L10.5,11L7,14.5L5.5,13L9,9.5L7.5,8L3,12.5L1.5,11L8,4.5L9.5,6L11,4.5L12.5,6L14,4.5L22,12.5L20.5,14L16,9.5L14.5,11L18,14.5L16.5,16L13,12.5L11.5,14L18.5,21H6.5Z"/>
        </svg>
    `,
    
    // 闪电
    lightning: (size = 16, color = '#f1c40f') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle; margin-right: 4px;">
            <path d="M13,3L4,14H12L11,21L20,10H12L13,3Z"/>
        </svg>
    `,
    
    // 心形/爱心
    heart: (size = 16, color = '#ec407a') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle; margin-right: 4px;">
            <path d="M12.1,18.55L10,16.45C5.4,12.36 2,9.28 2,5.5C2,3.5 3.5,2 5.5,2C6.74,2 7.96,2.54 8.88,3.46L12,6.58L15.12,3.46C16.04,2.54 17.26,2 18.5,2C20.5,2 22,3.5 22,5.5C22,9.28 18.6,12.36 14,16.45L12.1,18.55Z"/>
        </svg>
    `,
    
    // 人物
    person: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle; margin-right: 4px;">
            <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
        </svg>
    `,
    
    // 多人/群组
    people: (size = 16, color = '#95a5a6') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle; margin-right: 4px;">
            <path d="M16,13C15.71,13 15.38,13 15.03,13.05C16.19,13.89 17,15 17,16.5V19H23V16.5C23,14.17 18.33,13 16,13M8,13C5.67,13 1,14.17 1,16.5V19H15V16.5C15,14.17 10.33,13 8,13M8,11A3,3 0 0,0 11,8A3,3 0 0,0 8,5A3,3 0 0,0 5,8A3,3 0 0,0 8,11M16,11A3,3 0 0,0 19,8A3,3 0 0,0 16,5A3,3 0 0,0 13,8A3,3 0 0,0 16,11Z"/>
        </svg>
    `,
    
    // 建筑/门派
    temple: (size = 16, color = '#2c3e50') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle; margin-right: 4px;">
            <path d="M3,10L12,3L21,10H18V20H6V10H3Z"/>
        </svg>
    `,
    
    // 爪印/灵宠
    paw: (size = 16, color = '#8e44ad') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle; margin-right: 4px;">
            <path d="M4.5,9A1.5,1.5 0 0,1 6,10.5A1.5,1.5 0 0,1 4.5,12A1.5,1.5 0 0,1 3,10.5A1.5,1.5 0 0,1 4.5,9M9,7A1.5,1.5 0 0,1 10.5,8.5A1.5,1.5 0 0,1 9,10A1.5,1.5 0 0,1 7.5,8.5A1.5,1.5 0 0,1 9,7M15,7A1.5,1.5 0 0,1 16.5,8.5A1.5,1.5 0 0,1 15,10A1.5,1.5 0 0,1 13.5,8.5A1.5,1.5 0 0,1 15,7M19.5,9A1.5,1.5 0 0,1 21,10.5A1.5,1.5 0 0,1 19.5,12A1.5,1.5 0 0,1 18,10.5A1.5,1.5 0 0,1 19.5,9M12,12C9.5,12 6,13.5 6,16C6,17.66 8.34,19 12,19C15.66,19 18,17.66 18,16C18,13.5 14.5,12 12,12Z"/>
        </svg>
    `,
    
    // 树
    tree: (size = 16, color = '#27ae60') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle; margin-right: 4px;">
            <path d="M12,2A7,7 0 0,1 19,9A7,7 0 0,1 12,16A7,7 0 0,1 5,9A7,7 0 0,1 12,2M11,17H13V22H11V17Z"/>
        </svg>
    `,
    
    // 火焰
    fire: (size = 16, color = '#e74c3c') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle; margin-right: 4px;">
            <path d="M17.66,11.2C17.24,10.32 16.68,9.5 16,8.8C14.54,7.27 13.5,5.5 13,4C12.5,5.5 11.46,7.27 10,8.8C9.32,9.5 8.76,10.32 8.34,11.2C7.5,12.89 7.5,14.5 8.31,15.97C9.23,17.64 10.96,18.84 13,19.22V22H11V24H13H15V22H13V19.22C15.04,18.84 16.77,17.64 17.69,15.97C18.5,14.5 18.5,12.89 17.66,11.2Z"/>
        </svg>
    `,
    
    // 飞镖/发送
    send: (size = 16, color = '#9b59b6') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle; margin-right: 4px;">
            <path d="M2,22L23,13L2,4V10L17,13L2,16V22Z"/>
        </svg>
    `,
    
    // 警告/求助
    alert: (size = 16, color = '#e74c3c') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle; margin-right: 4px;">
            <path d="M11,15H13V17H11V15M11,7H13V13H11V7M1,21H23L12,2"/>
        </svg>
    `,
    
    // ============ 门派图标 ============
    
    sects: {
        sword: `<svg width="16" height="16" viewBox="0 0 24 24" fill="#3498db" style="vertical-align: -2px; margin-right: 6px;"><path d="M6.5,21L5,19.5L12,12.5L10.5,11L7,14.5L5.5,13L9,9.5L7.5,8L3,12.5L1.5,11L8,4.5L9.5,6L11,4.5L12.5,6L14,4.5L22,12.5L20.5,14L16,9.5L14.5,11L18,14.5L16.5,16L13,12.5L11.5,14L18.5,21H6.5Z"/></svg>`,
        alchemy: `<svg width="16" height="16" viewBox="0 0 24 24" fill="#e74c3c" style="vertical-align: -2px; margin-right: 6px;"><path d="M7,2V3H9V7.59L3.05,13.54C2.37,14.22 2,15.1 2,16C2,17.86 3.5,19.36 5.36,19.36H18.64C20.5,19.36 22,17.86 22,16C22,15.1 21.63,14.22 20.95,13.54L15,7.59V3H17V2H7Z"/></svg>`,
        formation: `<svg width="16" height="16" viewBox="0 0 24 24" fill="#9b59b6" style="vertical-align: -2px; margin-right: 6px;"><path d="M12,2L22,8V16L12,22L2,16V8L12,2M12,4.15L4,9V15L12,19.85L20,15V9L12,4.15Z"/></svg>`,
        buddhist: `<svg width="16" height="16" viewBox="0 0 24 24" fill="#f39c12" style="vertical-align: -2px; margin-right: 6px;"><path d="M12,2A3,3 0 0,1 15,5A3,3 0 0,1 12,8A3,3 0 0,1 9,5A3,3 0 0,1 12,2M12,9C16.42,9 20,10.79 20,13V15H4V13C4,10.79 7.58,9 12,9Z"/></svg>`,
        taoist: `<svg width="16" height="16" viewBox="0 0 24 24" fill="#16a085" style="vertical-align: -2px; margin-right: 6px;"><path d="M12,2A10,10 0 0,1 22,12A5,5 0 0,1 17,17C14.79,17 13,15.21 13,13A3,3 0 0,0 10,10C7.79,10 6,11.79 6,14A5,5 0 0,0 11,19A10,10 0 0,1 2,12A5,5 0 0,1 7,7C9.21,7 11,8.79 11,11A3,3 0 0,0 14,14C16.21,14 18,12.21 18,10A5,5 0 0,0 13,5A10,10 0 0,1 12,2Z"/></svg>`,
        demon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="#8e44ad" style="vertical-align: -2px; margin-right: 6px;"><path d="M12,2C10,4 8,5 6,5C6,7 7,9 9,10C8,12 8,14 9,16C7,17 6,19 6,21C8,21 10,20 12,18C14,20 16,21 18,21C18,19 17,17 15,16C16,14 16,12 15,10C17,9 18,7 18,5C16,5 14,4 12,2Z"/></svg>`,
        evil_cult: `<svg width="16" height="16" viewBox="0 0 24 24" fill="#2c3e50" style="vertical-align: -2px; margin-right: 6px;"><path d="M12,2L2,7V17L12,22L22,17V7L12,2M12,4.15L20,8.5V15.5L12,19.85L4,15.5V8.5L12,4.15M12,7A2,2 0 0,0 10,9A2,2 0 0,0 12,11A2,2 0 0,0 14,9A2,2 0 0,0 12,7Z"/></svg>`,
        blood_sect: `<svg width="16" height="16" viewBox="0 0 24 24" fill="#c0392b" style="vertical-align: -2px; margin-right: 6px;"><path d="M12,2C12,2 6,9 6,13A6,6 0 0,0 12,19A6,6 0 0,0 18,13C18,9 12,2 12,2Z"/></svg>`,
        merchant: `<svg width="16" height="16" viewBox="0 0 24 24" fill="#d35400" style="vertical-align: -2px; margin-right: 6px;"><path d="M3,3H21V7H3V3M3,9H21V21H3V9M8,12V18H10V12H8M14,12V18H16V12H14Z"/></svg>`
    },
    
    // ============ 状态图标 ============
    
    // 勾选/喜欢
    check: (size = 14, color = '#155724') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: -2px; margin-right: 4px;">
            <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
        </svg>
    `,
    
    // 叉叉/厌恶
    close: (size = 14, color = '#721c24') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: -2px; margin-right: 4px;">
            <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
        </svg>
    `,
    
    // 圆点/列表项
    circle: (size = 8, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle; margin-right: 6px;">
            <circle cx="12" cy="12" r="10"/>
        </svg>
    `,
    
    // 礼物/奖励
    gift: (size = 16, color = '#e74c3c') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle; margin-right: 4px;">
            <path d="M20,6H17.82C17.93,5.69 18,5.35 18,5A3,3 0 0,0 15,2C13.95,2 13.04,2.54 12.5,3.35L12,4L11.5,3.34C10.96,2.54 10.05,2 9,2A3,3 0 0,0 6,5C6,5.35 6.07,5.69 6.18,6H4A2,2 0 0,0 2,8V11A2,2 0 0,0 4,13H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V13H20A2,2 0 0,0 22,11V8A2,2 0 0,0 20,6M15,4A1,1 0 0,1 16,5A1,1 0 0,1 15,6A1,1 0 0,1 14,5A1,1 0 0,1 15,4M9,4A1,1 0 0,1 10,5A1,1 0 0,1 9,6A1,1 0 0,1 8,5A1,1 0 0,1 9,4M4,8V11H7V8H4M17,19H7V13H17V19M20,11H17V8H20V11Z"/>
        </svg>
    `,
    
    // 冥想/修炼
    meditation: (size = 16, color = '#8e44ad') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle; margin-right: 4px;">
            <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10Z"/>
        </svg>
    `,
    
    // 书本/功法
    book: (size = 16, color = '#27ae60') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle; margin-right: 4px;">
            <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19M17,12H7V10H17V12M15,16H7V14H15V16M17,8H7V6H17V8Z"/>
        </svg>
    `,
    
    // 金币/财富
    coin: (size = 16, color = '#f1c40f') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle; margin-right: 4px;">
            <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10Z"/>
        </svg>
    `,
    
    // 列表/任务
    list: (size = 16, color = '#3498db') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle; margin-right: 4px;">
            <path d="M9,5V9H21V5H9M9,19H7V17H9V19M9,15H7V13H9V15M9,11H7V9H9V11M9,7H7V5H9V7M11,5V9H21V5H11M11,11H21V9H11V11M11,13H21V15H11V13M11,17H21V19H11V17M3,5V9H5V5H3M3,11H5V13H3V11M3,15H5V17H3V15M3,19H5V21H3V19Z"/>
        </svg>
    `,
    
    // 建筑/设施
    building: (size = 16, color = '#95a5a6') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle; margin-right: 4px;">
            <path d="M12,3L2,12H5V20H19V12H22L12,3M12,5.69L18,11V18H15V14H9V18H6V11L12,5.69Z"/>
        </svg>
    `,
    
    // 用户群组
    users: (size = 16, color = '#95a5a6') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle; margin-right: 4px;">
            <path d="M16,13C15.71,13 15.38,13 15.03,13.05C16.19,13.89 17,15 17,16.5V19H23V16.5C23,14.17 18.33,13 16,13M8,13C5.67,13 1,14.17 1,16.5V19H15V16.5C15,14.17 10.33,13 8,13M8,11A3,3 0 0,0 11,8A3,3 0 0,0 8,5A3,3 0 0,0 5,8A3,3 0 0,0 8,11M16,11A3,3 0 0,0 19,8A3,3 0 0,0 16,5A3,3 0 0,0 13,8A3,3 0 0,0 16,11Z"/>
        </svg>
    `
};

// 快捷函数 - 带样式的图标
const icon = {
    // 内联图标（用于文本中）
    inline: {
        handshake: () => SVGIcons.handshake(16),
        star: () => SVGIcons.star(16),
        sword: () => SVGIcons.sword(16),
        lightning: () => SVGIcons.lightning(16),
        heart: () => SVGIcons.heart(16),
        person: () => SVGIcons.person(16),
        temple: () => SVGIcons.temple(16),
        paw: () => SVGIcons.paw(16),
        tree: () => SVGIcons.tree(16),
        fire: () => SVGIcons.fire(16),
        send: () => SVGIcons.send(16),
        alert: () => SVGIcons.alert(16),
        gift: () => SVGIcons.gift(16),
        meditation: () => SVGIcons.meditation(16),
        book: () => SVGIcons.book(16),
        coin: () => SVGIcons.coin(16),
        list: () => SVGIcons.list(16),
        building: () => SVGIcons.building(16),
        users: () => SVGIcons.users(16)
    },
    
    // 大图标（用于标题、弹窗等）
    large: {
        star: () => SVGIcons.star(20),
        heart: () => SVGIcons.heart(28),
        people: () => SVGIcons.people(80)
    },
    
    // 门派图标
    sect: (sectKey) => SVGIcons.sects[sectKey] || '',
    
    // 状态图标
    check: () => SVGIcons.check(),
    close: () => SVGIcons.close(),
    bullet: () => SVGIcons.circle(8)
};

// 全局访问对象
const icons = {
    getIcon: (iconName, size = 16, color = 'currentColor', style = '') => {
        if (SVGIcons[iconName]) {
            return SVGIcons[iconName](size, color).replace('style="vertical-align: middle; margin-right: 4px;"', `style="vertical-align: middle; margin-right: 4px; ${style}"`);
        }
        return '';
    }
};

