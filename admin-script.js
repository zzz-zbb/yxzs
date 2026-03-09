// 登录功能
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // 简单的登录验证（实际项目中应该使用后端API）
        if (username === 'admin' && password === 'admin123') {
            // 存储登录状态
            localStorage.setItem('loggedIn', 'true');
            // 跳转到专题看板
            window.location.href = 'dashboard.html';
        } else {
            alert('账号或密码错误，请重新输入');
        }
    });
}

// 管理后台功能
function initAdminPage() {
    // 检查登录状态
    if (!localStorage.getItem('loggedIn')) {
        window.location.href = 'login.html';
    }
    
    // 登出功能
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('loggedIn');
            window.location.href = 'login.html';
        });
    }
    
    // 导航切换 - 页面加载时根据当前URL设置活动状态
    const navItems = document.querySelectorAll('.nav-item');
    const currentPath = window.location.pathname;
    
    navItems.forEach(item => {
        const link = item.querySelector('a');
        if (link) {
            const linkPath = new URL(link.href).pathname;
            if (currentPath.includes(linkPath.split('/').pop())) {
                item.classList.add('active');
            }
        }
    });
    
    // 模态框功能
    const modals = document.querySelectorAll('.modal');
    const modalBtns = document.querySelectorAll('[data-modal]');
    const closeBtns = document.querySelectorAll('.close-btn');
    
    modalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
            }
        });
    });
    
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.classList.remove('active');
            }
        });
    });
    
    // 点击模态框外部关闭
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    });
    
    // 表单提交功能
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // 模拟表单提交
            alert('数据已保存');
            const modal = this.closest('.modal');
            if (modal) {
                modal.classList.remove('active');
            }
            // 刷新页面或更新数据
            location.reload();
        });
    });
    
    // 删除功能
    const deleteBtns = document.querySelectorAll('.btn-danger');
    deleteBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (confirm('确定要删除这条数据吗？')) {
                // 模拟删除操作
                alert('数据已删除');
                // 刷新页面或更新数据
                location.reload();
            }
        });
    });
}

// 初始化管理后台页面
if (window.location.pathname.includes('admin.html') || 
    window.location.pathname.includes('ip-management.html') || 
    window.location.pathname.includes('cultural-products-management.html') || 
    window.location.pathname.includes('cultural-relics-management.html') || 
    window.location.pathname.includes('smart-business-management.html') || 
    window.location.pathname.includes('visitor-management.html') || 
    window.location.pathname.includes('consumption-management.html')) {
    initAdminPage();
}

// 专题看板图表初始化
if (window.location.pathname.includes('dashboard.html')) {
    // 检查登录状态
    if (!localStorage.getItem('loggedIn')) {
        window.location.href = 'login.html';
    }
    
    // 初始化图表
    function initCharts() {
        // 核心IP数趋势图
        const ipChartCtx = document.getElementById('ipTrendChart');
        if (ipChartCtx) {
            new Chart(ipChartCtx, {
                type: 'line',
                data: {
                    labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
                    datasets: [{
                        label: '核心IP数',
                        data: [10, 12, 13, 14, 15, 16],
                        borderColor: '#64b5f6',
                        backgroundColor: 'rgba(100, 181, 246, 0.1)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
        
        // 重点文物数趋势图
        const relicsChartCtx = document.getElementById('relicsTrendChart');
        if (relicsChartCtx) {
            new Chart(relicsChartCtx, {
                type: 'line',
                data: {
                    labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
                    datasets: [{
                        label: '重点文物数',
                        data: [80, 82, 85, 87, 89, 90],
                        borderColor: '#4caf50',
                        backgroundColor: 'rgba(76, 175, 80, 0.1)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
        
        // 日均人数趋势图
        const visitorChartCtx = document.getElementById('visitorTrendChart');
        if (visitorChartCtx) {
            new Chart(visitorChartCtx, {
                type: 'line',
                data: {
                    labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
                    datasets: [{
                        label: '日均人数（万）',
                        data: [0.8, 0.9, 1.0, 1.1, 1.2, 1.28],
                        borderColor: '#ff9800',
                        backgroundColor: 'rgba(255, 152, 0, 0.1)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
        
        // 文创产品数趋势图
        const productsChartCtx = document.getElementById('productsTrendChart');
        if (productsChartCtx) {
            new Chart(productsChartCtx, {
                type: 'line',
                data: {
                    labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
                    datasets: [{
                        label: '文创产品数',
                        data: [70, 75, 80, 85, 90, 98],
                        borderColor: '#e91e63',
                        backgroundColor: 'rgba(233, 30, 99, 0.1)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
        
        // 销售统计饼图
        const salesChartCtx = document.getElementById('salesChart');
        if (salesChartCtx) {
            new Chart(salesChartCtx, {
                type: 'pie',
                data: {
                    labels: ['IP1产品', 'IP2产品', 'IP3产品', 'IP4产品', 'IP5产品'],
                    datasets: [{
                        data: [25000, 18000, 12000, 9500, 8200],
                        backgroundColor: [
                            '#64b5f6',
                            '#4caf50',
                            '#ff9800',
                            '#e91e63',
                            '#9c27b0'
                        ]
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            });
        }
    }
    
    // 页面加载完成后初始化图表
    window.addEventListener('load', initCharts);
}