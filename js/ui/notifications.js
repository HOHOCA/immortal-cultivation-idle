// 通知和消息系统

// 显示通知
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 6px;
        color: white;
        font-weight: 500;
        z-index: 1000;
        max-width: 300px;
        word-wrap: break-word;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        animation: slideInRight 0.3s ease-out;
    `;
    
    // 根据类型设置颜色
    const colors = {
        success: '#27ae60',
        warning: '#f39c12',
        error: '#e74c3c',
        info: '#3498db'
    };
    
    notification.style.backgroundColor = colors[type] || colors.info;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // 3秒后自动移除
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// 添加日志
function addLog(message) {
    const logContainer = document.getElementById('eventLog');
    if (!logContainer) return;
    
    const logEntry = document.createElement('div');
    logEntry.style.cssText = `
        padding: 8px 12px;
        margin-bottom: 4px;
        border-radius: 4px;
        font-size: 13px;
        line-height: 1.4;
        background: ${gameData.darkMode ? '#2c3e50' : '#ecf0f1'};
        color: ${gameData.darkMode ? '#ecf0f1' : '#2c3e50'};
        border-left: 3px solid #3498db;
        animation: fadeIn 0.3s ease-in;
    `;
    
    logEntry.innerHTML = message;
    
    // 限制日志条目数量
    const maxEntries = gameData.maxLogEntries || 100;
    while (logContainer.children.length >= maxEntries) {
        logContainer.removeChild(logContainer.firstChild);
    }
    
    logContainer.appendChild(logEntry);
    
    // 自动滚动到底部
    logContainer.scrollTop = logContainer.scrollHeight;
}

// 创建粒子容器
function createParticleContainer() {
    if (document.getElementById('particleContainer')) return;
    
    const container = document.createElement('div');
    container.id = 'particleContainer';
    container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
    `;
    
    document.body.appendChild(container);
}

// 创建粒子效果
function createParticle(x, y, color = '#3498db') {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: ${color};
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
    `;
    
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    
    document.getElementById('particleContainer').appendChild(particle);
    
    // 动画效果
    const animation = particle.animate([
        { 
            transform: 'translate(0, 0) scale(1)', 
            opacity: 1 
        },
        { 
            transform: `translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px) scale(0)`, 
            opacity: 0 
        }
    ], {
        duration: 1000,
        easing: 'ease-out'
    });
    
    animation.onfinish = () => {
        if (particle.parentElement) {
            particle.remove();
        }
    };
}

// 显示成就通知
function showAchievementNotification(achievement) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 20px 30px;
        border-radius: 8px;
        text-align: center;
        z-index: 2000;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        animation: achievementPop 0.5s ease-out;
    `;
    
    notification.innerHTML = `
        <div style="font-size: 24px; margin-bottom: 10px;">🏆</div>
        <div style="font-size: 18px; font-weight: 600; margin-bottom: 5px;">成就解锁！</div>
        <div style="font-size: 16px; margin-bottom: 10px;">${achievement.name}</div>
        <div style="font-size: 12px; opacity: 0.9;">${achievement.desc}</div>
    `;
    
    document.body.appendChild(notification);
    
    // 3秒后自动移除
    setTimeout(() => {
        notification.style.animation = 'achievementFadeOut 0.5s ease-in';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 500);
    }, 3000);
}

// 显示突破效果
function breakthroughEffect() {
    const colors = ['#e74c3c', '#f39c12', '#f1c40f', '#2ecc71', '#3498db', '#9b59b6'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const x = window.innerWidth / 2 + (Math.random() - 0.5) * 200;
            const y = window.innerHeight / 2 + (Math.random() - 0.5) * 200;
            const color = colors[Math.floor(Math.random() * colors.length)];
            createParticle(x, y, color);
        }, i * 50);
    }
}

// 显示升级效果
function upgradeEffect(element) {
    const rect = element.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createParticle(x, y, '#27ae60');
        }, i * 30);
    }
}

// 添加CSS动画
function addNotificationStyles() {
    if (document.getElementById('notification-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes achievementPop {
            0% {
                transform: translate(-50%, -50%) scale(0);
                opacity: 0;
            }
            50% {
                transform: translate(-50%, -50%) scale(1.1);
                opacity: 1;
            }
            100% {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
            }
        }
        
        @keyframes achievementFadeOut {
            from {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
            }
            to {
                transform: translate(-50%, -50%) scale(0.8);
                opacity: 0;
            }
        }
        
        @keyframes pulse {
            0%, 100% {
                opacity: 1;
            }
            50% {
                opacity: 0.5;
            }
        }
    `;
    
    document.head.appendChild(style);
}

// 初始化通知系统
function initNotificationSystem() {
    addNotificationStyles();
    createParticleContainer();
}
