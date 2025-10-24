// SVG图标库
// 统一管理所有内联SVG图标，方便维护和复用
// 从legacy.js迁移并整合所有图标

const SVGIcons = {
    // ============ 基础图标 ============
    
    // 握手/结识
    handshake: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle; margin-right: 4px;">
            <path d="M11,6H14L17,9V11.91L12.83,16.08L11,14.25V6M5,11V22H3V11H5M10,11V22H6V11H10M22,11V22H20V11H22M17,11V19.6L12.4,15L17,11Z"/>
        </svg>
    `,
    
    // ============ UI控制图标 ============
    
    // 月亮（暗色模式）
    moon: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle;">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
    `,
    
    // 太阳（亮色模式）
    sun: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle;">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v6m0 6v6m8.66-11.66l-4.24 4.24m-4.24 4.24l-4.24 4.24m11.66-12.24l-4.24 4.24m-4.24 4.24l-4.24 4.24M23 12h-6m-6 0H1"/>
        </svg>
    `,
    
    // 设置齿轮
    settings: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" style="vertical-align: middle;">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 1v6m0 6v6m5.66-14l-3.54 3.54m0 4.92l-3.54 3.54M23 12h-6m-6 0H1m17.66 5.66l-3.54-3.54m-4.92 0l-3.54 3.54"/>
        </svg>
    `,
    
    // 键盘
    keyboard: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" style="vertical-align: middle;">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M7 16h10"/>
        </svg>
    `,
    
    // 保存
    save: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" style="vertical-align: middle;">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
            <polyline points="17 21 17 13 7 13 7 21"/>
            <polyline points="7 3 7 8 15 8"/>
        </svg>
    `,
    
    // 上传
    upload: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" style="vertical-align: middle;">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="17 8 12 3 7 8"/>
            <line x1="12" y1="3" x2="12" y2="15"/>
        </svg>
    `,
    
    // 下载
    download: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" style="vertical-align: middle;">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
    `,
    
    // 复制
    copy: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" style="vertical-align: middle;">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
        </svg>
    `,
    
    // 刷新
    refresh: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" style="vertical-align: middle;">
            <polyline points="23 4 23 10 17 10"/>
            <polyline points="1 20 1 14 7 14"/>
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
        </svg>
    `,
    
    // 信息
    info: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" style="vertical-align: middle;">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
        </svg>
    `,
    
    // 暂停
    pause: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle;">
            <rect x="6" y="4" width="4" height="16"/>
            <rect x="14" y="4" width="4" height="16"/>
        </svg>
    `,
    
    // 时钟
    clock: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" style="vertical-align: middle;">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
        </svg>
    `,
    
    // 主页
    home: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" style="vertical-align: middle;">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
    `,
    
    // 锁
    lock: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" style="vertical-align: middle;">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
    `,
    
    // 剪贴板
    clipboard: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" style="vertical-align: middle;">
            <rect x="8" y="2" width="8" height="4" rx="1"/>
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
        </svg>
    `,
    
    // 磁盘/存档
    disk: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle;">
            <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/>
        </svg>
    `,
    
    // 齿轮（填充版）
    gear: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle;">
            <path d="M12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65c-.04-.24-.25-.42-.5-.42h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66z"/>
        </svg>
    `,
    
    // 星星
    star: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" style="vertical-align: middle; margin-right: 4px;">
            <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/>
        </svg>
    `,
    
    // 剑
    sword: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" style="vertical-align: middle; margin-right: 4px;">
            <path d="M6.5,21L5,19.5L12,12.5L10.5,11L7,14.5L5.5,13L9,9.5L7.5,8L3,12.5L1.5,11L8,4.5L9.5,6L11,4.5L12.5,6L14,4.5L22,12.5L20.5,14L16,9.5L14.5,11L18,14.5L16.5,16L13,12.5L11.5,14L18.5,21H6.5Z"/>
        </svg>
    `,
    
    // 盾牌
    shield: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" style="vertical-align: middle; margin-right: 4px;">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
    `,
    
    // 奖杯
    trophy: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" style="vertical-align: middle; margin-right: 4px;">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6m12 5h1.5a2.5 2.5 0 0 0 0-5H18"/>
            <path d="M6 9h12v5a6 6 0 0 1-12 0V9z"/>
            <path d="M9 21h6m-3-4v4"/>
        </svg>
    `,
    
    // 闪耀/星光
    sparkles: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle; margin-right: 4px;">
            <path d="M12 0l1.5 6.5L20 8l-6.5 1.5L12 16l-1.5-6.5L4 8l6.5-1.5L12 0zm5 12l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"/>
        </svg>
    `,
    
    // 山峰
    mountain: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" style="vertical-align: middle; margin-right: 4px;">
            <path d="M3 20h18L12 4 3 20z"/>
            <path d="M6.5 20l5.5-9 5.5 9"/>
        </svg>
    `,
    
    // 闪电/雷电
    zap: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle; margin-right: 4px;">
            <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
        </svg>
    `,
    
    // 闪电（另一版本bolt）
    bolt: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle; margin-right: 4px;">
            <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
        </svg>
    `,
    
    // 靶心/目标
    target: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" style="vertical-align: middle; margin-right: 4px;">
            <circle cx="12" cy="12" r="10"/>
            <circle cx="12" cy="12" r="6"/>
            <circle cx="12" cy="12" r="2"/>
        </svg>
    `,
    
    // 烧杯/炼丹
    beaker: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" style="vertical-align: middle; margin-right: 4px;">
            <path d="M9 3h6v6l5 7c.61.8.61 2 0 2.8-.4.52-1 .82-1.65.82H5.65C4.74 19.62 4 18.88 4 18c0-.61.21-1.2.6-1.67L9 9V3z"/>
            <path d="M9 9h6"/>
        </svg>
    `,
    
    // 盒子/背包
    box: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" style="vertical-align: middle; margin-right: 4px;">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
            <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
    `,
    
    // 皇冠
    crown: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle; margin-right: 4px;">
            <path d="M12 2l3 6 6-3-3 9h-12l-3-9 6 3 3-6zm-8 18h16v2h-16v-2z"/>
        </svg>
    `,
    
    // 钻石
    diamond: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" style="vertical-align: middle; margin-right: 4px;">
            <path d="M6 2L2 8l10 14L22 8l-4-6H6z"/>
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
    people: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" style="vertical-align: middle; margin-right: 4px;">
            <path d="M16,13C15.71,13 15.38,13 15.03,13.05C16.19,13.89 17,15 17,16.5V19H23V16.5C23,14.17 18.33,13 16,13M8,13C5.67,13 1,14.17 1,16.5V19H15V16.5C15,14.17 10.33,13 8,13M8,11A3,3 0 0,0 11,8A3,3 0 0,0 8,5A3,3 0 0,0 5,8A3,3 0 0,0 8,11M16,11A3,3 0 0,0 19,8A3,3 0 0,0 16,5A3,3 0 0,0 13,8A3,3 0 0,0 16,11Z"/>
        </svg>
    `,
    
    // 建筑/门派
    temple: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" style="vertical-align: middle; margin-right: 4px;">
            <path d="M3,10L12,3L21,10H18V20H6V10H3Z"/>
        </svg>
    `,
    
    // 爪印/灵宠
    paw: (size = 16, color = '#1d4ed8') => `
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
    send: (size = 16, color = '#3b82f6') => `
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
        formation: `<svg width="16" height="16" viewBox="0 0 24 24" fill="#3b82f6" style="vertical-align: -2px; margin-right: 6px;"><path d="M12,2L22,8V16L12,22L2,16V8L12,2M12,4.15L4,9V15L12,19.85L20,15V9L12,4.15Z"/></svg>`,
        buddhist: `<svg width="16" height="16" viewBox="0 0 24 24" fill="#f39c12" style="vertical-align: -2px; margin-right: 6px;"><path d="M12,2A3,3 0 0,1 15,5A3,3 0 0,1 12,8A3,3 0 0,1 9,5A3,3 0 0,1 12,2M12,9C16.42,9 20,10.79 20,13V15H4V13C4,10.79 7.58,9 12,9Z"/></svg>`,
        taoist: `<svg width="16" height="16" viewBox="0 0 24 24" fill="#16a085" style="vertical-align: -2px; margin-right: 6px;"><path d="M12,2A10,10 0 0,1 22,12A5,5 0 0,1 17,17C14.79,17 13,15.21 13,13A3,3 0 0,0 10,10C7.79,10 6,11.79 6,14A5,5 0 0,0 11,19A10,10 0 0,1 2,12A5,5 0 0,1 7,7C9.21,7 11,8.79 11,11A3,3 0 0,0 14,14C16.21,14 18,12.21 18,10A5,5 0 0,0 13,5A10,10 0 0,1 12,2Z"/></svg>`,
        demon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="#1d4ed8" style="vertical-align: -2px; margin-right: 6px;"><path d="M12,2C10,4 8,5 6,5C6,7 7,9 9,10C8,12 8,14 9,16C7,17 6,19 6,21C8,21 10,20 12,18C14,20 16,21 18,21C18,19 17,17 15,16C16,14 16,12 15,10C17,9 18,7 18,5C16,5 14,4 12,2Z"/></svg>`,
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
    meditation: (size = 16, color = '#1d4ed8') => `
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
    users: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" style="vertical-align: middle; margin-right: 4px;">
            <path d="M16,13C15.71,13 15.38,13 15.03,13.05C16.19,13.89 17,15 17,16.5V19H23V16.5C23,14.17 18.33,13 16,13M8,13C5.67,13 1,14.17 1,16.5V19H15V16.5C15,14.17 10.33,13 8,13M8,11A3,3 0 0,0 11,8A3,3 0 0,0 8,5A3,3 0 0,0 5,8A3,3 0 0,0 8,11M16,11A3,3 0 0,0 19,8A3,3 0 0,0 16,5A3,3 0 0,0 13,8A3,3 0 0,0 16,11Z"/>
        </svg>
    `,
    
    // 剧情/故事线
    story: (size = 16, color = 'currentColor') => `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" style="vertical-align: middle; margin-right: 4px;">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
            <path d="M8,12H16M8,16H16M8,8H12"/>
        </svg>
    `
};

// 快捷函数 - 带样式的图标
const icon = {
    // 内联图标（用于文本中）
    inline: {
        // 基础图标
        handshake: () => SVGIcons.handshake(16),
        star: () => SVGIcons.star(16),
        sword: () => SVGIcons.sword(16),
        shield: () => SVGIcons.shield(16),
        lightning: () => SVGIcons.lightning(16),
        zap: () => SVGIcons.zap(16),
        bolt: () => SVGIcons.bolt(16),
        heart: () => SVGIcons.heart(16),
        person: () => SVGIcons.person(16),
        people: () => SVGIcons.people(16),
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
        users: () => SVGIcons.users(16),
        story: () => SVGIcons.story(16),
        
        // UI控制图标
        moon: () => SVGIcons.moon(16),
        sun: () => SVGIcons.sun(16),
        settings: () => SVGIcons.settings(16),
        keyboard: () => SVGIcons.keyboard(16),
        save: () => SVGIcons.save(16),
        upload: () => SVGIcons.upload(16),
        download: () => SVGIcons.download(16),
        copy: () => SVGIcons.copy(16),
        refresh: () => SVGIcons.refresh(16),
        info: () => SVGIcons.info(16),
        pause: () => SVGIcons.pause(16),
        clock: () => SVGIcons.clock(16),
        home: () => SVGIcons.home(16),
        lock: () => SVGIcons.lock(16),
        clipboard: () => SVGIcons.clipboard(16),
        disk: () => SVGIcons.disk(16),
        gear: () => SVGIcons.gear(16),
        
        // 游戏图标
        trophy: () => SVGIcons.trophy(16),
        sparkles: () => SVGIcons.sparkles(16),
        mountain: () => SVGIcons.mountain(16),
        target: () => SVGIcons.target(16),
        beaker: () => SVGIcons.beaker(16),
        box: () => SVGIcons.box(16),
        crown: () => SVGIcons.crown(16),
        diamond: () => SVGIcons.diamond(16)
    },
    
    // 大图标（用于标题、弹窗等）
    large: {
        star: () => SVGIcons.star(20),
        heart: () => SVGIcons.heart(28),
        people: () => SVGIcons.people(80),
        trophy: () => SVGIcons.trophy(24),
        sparkles: () => SVGIcons.sparkles(24)
    },
    
    // 门派图标
    sect: (sectKey) => SVGIcons.sects[sectKey] || '',
    
    // 状态图标
    check: () => SVGIcons.check(),
    close: () => SVGIcons.close(),
    bullet: () => SVGIcons.circle(8)
};

// 全局访问对象 - 提供灵活的图标获取方式
const icons = {
    // 通用获取方法
    getIcon: (iconName, size = 16, color = 'currentColor', style = '') => {
        if (SVGIcons[iconName]) {
            return SVGIcons[iconName](size, color).replace('style="vertical-align: middle; margin-right: 4px;"', `style="vertical-align: middle; margin-right: 4px; ${style}"`);
        }
        return '';
    },
    
    // 快捷访问原始SVG
    get: (iconName, size, color) => {
        return SVGIcons[iconName] ? SVGIcons[iconName](size, color) : '';
    },
    
    // 直接访问SVG对象
    svg: SVGIcons,
    
    // 快捷访问
    ...icon
};

// ============ 兼容legacy.js的函数 ============
// 这个函数用于替代legacy.js中硬编码的svgIcons对象
function getSvg(name) {
    // 处理特殊情况：sects是嵌套对象
    if (name.startsWith('sects.')) {
        const sectKey = name.split('.')[1];
        return SVGIcons.sects[sectKey] || '';
    }
    
    // 默认大小16px
    return SVGIcons[name] ? SVGIcons[name](16) : '';
}

// 为了兼容性，也导出原始对象
const svgIcons = {};
Object.keys(SVGIcons).forEach(key => {
    if (key === 'sects') {
        svgIcons[key] = SVGIcons[key];
    } else {
        svgIcons[key] = SVGIcons[key](16);
    }
});

