// 页面加载完成后隐藏加载动画并触发淡入效果
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loading').classList.add('hidden');
        
        // 触发淡入效果
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('visible');
            }, index * 100);
        });
    }, 1000);
});

// DOM加载完成后绑定事件
document.addEventListener('DOMContentLoaded', function() {
    // 绑定文创产品更多按钮点击事件
    const moreBtn = document.getElementById('culturalProductsMoreBtn');
    if (moreBtn) {
        moreBtn.addEventListener('click', openCulturalProductsModal);
        console.log('Button click event bound successfully');
    } else {
        console.error('More button not found');
    }
    
    // 绑定关闭按钮点击事件
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeCulturalProductsModal);
        console.log('Close button click event bound successfully');
    }
});

// 实时更新日期时间
function updateDateTime() {
    const now = new Date();
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    document.getElementById('dateTime').textContent = now.toLocaleString('zh-CN', options);
}

// 初始化更新日期时间
updateDateTime();
setInterval(updateDateTime, 1000);

// 图表默认配置
const chartDefaults = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
        duration: 2000,
        easing: 'easeOutQuart'
    },
    plugins: {
        legend: {
            labels: {
                color: '#90caf9'
            }
        },
        tooltip: {
            backgroundColor: 'rgba(14, 26, 45, 0.8)',
            titleColor: '#64b5f6',
            bodyColor: '#e6f1ff',
            borderColor: 'rgba(100, 181, 246, 0.3)',
            borderWidth: 1
        }
    },
    scales: {
        x: {
            grid: {
                color: 'rgba(100, 181, 246, 0.1)'
            },
            ticks: {
                color: '#90caf9'
            }
        },
        y: {
            grid: {
                color: 'rgba(100, 181, 246, 0.1)'
            },
            ticks: {
                color: '#90caf9'
            }
        }
    }
};

// IP授权收入金字塔图
const ipRevenueCtx = document.getElementById('ipRevenueChart').getContext('2d');
const ipRevenueChart = new Chart(ipRevenueCtx, {
    type: 'bar',
    data: {
        labels: ['IP5', 'IP4', 'IP3', 'IP2', 'IP1'],
        datasets: [{
            label: '授权收入 (万元)',
            data: [50, 120, 200, 350, 500],
            backgroundColor: 'rgba(100, 181, 246, 0.7)',
            borderColor: 'rgba(100, 181, 246, 1)',
            borderWidth: 1
        }]
    },
    options: {
        ...chartDefaults,
        indexAxis: 'y'
    }
});

// IP传播影响力饼图
const ipInfluenceCtx = document.getElementById('ipInfluenceChart').getContext('2d');
const ipInfluenceChart = new Chart(ipInfluenceCtx, {
    type: 'pie',
    data: {
        labels: ['社交媒体', '短视频', '新闻报道', '线下活动', '其他'],
        datasets: [{
            data: [35, 25, 20, 15, 5],
            backgroundColor: [
                'rgba(100, 181, 246, 0.7)',
                'rgba(76, 175, 80, 0.7)',
                'rgba(255, 193, 7, 0.7)',
                'rgba(244, 67, 54, 0.7)',
                'rgba(156, 39, 176, 0.7)'
            ],
            borderColor: [
                'rgba(100, 181, 246, 1)',
                'rgba(76, 175, 80, 1)',
                'rgba(255, 193, 7, 1)',
                'rgba(244, 67, 54, 1)',
                'rgba(156, 39, 176, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: chartDefaults
});

// 文创销售排名top5横向柱形图
const culturalProductsCtx = document.getElementById('culturalProductsChart').getContext('2d');
const culturalProductsChart = new Chart(culturalProductsCtx, {
    type: 'bar',
    data: {
        labels: ['IP1产品A', 'IP2产品B', 'IP3产品C', 'IP4产品D', 'IP5产品E'],
        datasets: [{
            label: '销售个数',
            data: [1820, 1250, 980, 820, 750],
            backgroundColor: 'rgba(76, 175, 80, 0.7)',
            borderColor: 'rgba(76, 175, 80, 1)',
            borderWidth: 1
        }]
    },
    options: {
        ...chartDefaults,
        indexAxis: 'y'
    }
});

// 重点文物监测柱形图
const culturalRelicsCtx = document.getElementById('culturalRelicsChart').getContext('2d');
const culturalRelicsChart = new Chart(culturalRelicsCtx, {
    type: 'bar',
    data: {
        labels: ['文物1', '文物2', '文物3', '文物4', '文物5'],
        datasets: [{
            label: '监测指数',
            data: [95, 88, 92, 78, 90],
            backgroundColor: 'rgba(255, 193, 7, 0.7)',
            borderColor: 'rgba(255, 193, 7, 1)',
            borderWidth: 1
        }]
    },
    options: chartDefaults
});

// 客流统计分析柱形图
const visitorCtx = document.getElementById('visitorChart').getContext('2d');
const visitorChart = new Chart(visitorCtx, {
    type: 'bar',
    data: {
        labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        datasets: [{
            label: '日均人数',
            data: [8500, 9200, 8800, 10500, 12800, 18500, 16200],
            backgroundColor: 'rgba(100, 181, 246, 0.7)',
            borderColor: 'rgba(100, 181, 246, 1)',
            borderWidth: 1
        }]
    },
    options: chartDefaults
});

// 消费分析图表
const consumptionCtx = document.getElementById('consumptionChart').getContext('2d');
const consumptionChart = new Chart(consumptionCtx, {
    type: 'line',
    data: {
        labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
        datasets: [{
            label: '消费金额 (万元)',
            data: [120, 150, 180, 220, 280, 350],
            borderColor: 'rgba(76, 175, 80, 1)',
            backgroundColor: 'rgba(76, 175, 80, 0.1)',
            tension: 0.4,
            fill: true
        }]
    },
    options: chartDefaults
});

// 数字文创产品图表
const digitalProductsCtx = document.getElementById('digitalProductsChart').getContext('2d');
const digitalProductsChart = new Chart(digitalProductsCtx, {
    type: 'pie',
    data: {
        labels: ['数字藏品', '虚拟体验', '在线课程', '数字出版物', '其他'],
        datasets: [{
            data: [40, 25, 15, 12, 8],
            backgroundColor: [
                'rgba(100, 181, 246, 0.7)',
                'rgba(76, 175, 80, 0.7)',
                'rgba(255, 193, 7, 0.7)',
                'rgba(244, 67, 54, 0.7)',
                'rgba(156, 39, 176, 0.7)'
            ],
            borderColor: [
                'rgba(100, 181, 246, 1)',
                'rgba(76, 175, 80, 1)',
                'rgba(255, 193, 7, 1)',
                'rgba(244, 67, 54, 1)',
                'rgba(156, 39, 176, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: chartDefaults
});

// 文创产品销量双轴图表
function initCulturalProductsDualChart() {
    const ctx = document.getElementById('culturalProductsDualChart').getContext('2d');
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['IP1产品A', 'IP2产品B', 'IP3产品C', 'IP4产品D', 'IP5产品E'],
            datasets: [
                {
                    label: '销售个数',
                    data: [1820, 1250, 980, 820, 750],
                    backgroundColor: 'rgba(100, 181, 246, 0.7)',
                    borderColor: 'rgba(100, 181, 246, 1)',
                    borderWidth: 1,
                    yAxisID: 'y'
                },
                {
                    label: '销售额 (万元)',
                    data: [25, 18, 12, 9.5, 8.2],
                    type: 'line',
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    borderColor: 'rgba(76, 175, 80, 1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#90caf9'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(14, 26, 45, 0.8)',
                    titleColor: '#64b5f6',
                    bodyColor: '#e6f1ff',
                    borderColor: 'rgba(100, 181, 246, 0.3)',
                    borderWidth: 1
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(100, 181, 246, 0.1)'
                    },
                    ticks: {
                        color: '#90caf9'
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    grid: {
                        color: 'rgba(100, 181, 246, 0.1)'
                    },
                    ticks: {
                        color: '#90caf9'
                    },
                    title: {
                        display: false,
                        text: '销售个数',
                        color: '#90caf9'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    grid: {
                        drawOnChartArea: false
                    },
                    ticks: {
                        color: '#90caf9'
                    },
                    title: {
                        display: false,
                        text: '销售额 (万元)',
                        color: '#90caf9'
                    }
                }
            }
        }
    });
}

// 模态框控制函数
window.openCulturalProductsModal = function() {
    document.getElementById('culturalProductsModal').style.display = 'block';
    // 初始化双轴图表
    initCulturalProductsDualChart();
};

window.closeCulturalProductsModal = function() {
    document.getElementById('culturalProductsModal').style.display = 'none';
    // 销毁图表实例，避免内存泄漏
    const chart = Chart.getChart('culturalProductsDualChart');
    if (chart) {
        chart.destroy();
    }
};

// 商圈月均消费金额图表
function initBusinessDistrictChart() {
    const ctx = document.getElementById('businessDistrictChart').getContext('2d');
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日', '11日', '12日', '13日', '14日', '15日', '16日', '17日', '18日', '19日', '20日', '21日', '22日', '23日', '24日', '25日', '26日', '27日', '28日', '29日', '30日'],
            datasets: [{
                label: '消费金额 (万元)',
                data: [12, 19, 15, 17, 22, 25, 28, 26, 24, 20, 18, 22, 26, 29, 32, 30, 28, 31, 35, 33, 30, 28, 25, 22, 24, 27, 29, 31, 33, 35],
                backgroundColor: 'rgba(255, 193, 7, 0.7)',
                borderColor: 'rgba(255, 193, 7, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#90caf9'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(14, 26, 45, 0.8)',
                    titleColor: '#64b5f6',
                    bodyColor: '#e6f1ff',
                    borderColor: 'rgba(100, 181, 246, 0.3)',
                    borderWidth: 1
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(100, 181, 246, 0.1)'
                    },
                    ticks: {
                        color: '#90caf9',
                        maxRotation: 45,
                        minRotation: 45
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(100, 181, 246, 0.1)'
                    },
                    ticks: {
                        color: '#90caf9'
                    },
                    title: {
                        display: false,
                        text: '消费金额 (万元)',
                        color: '#90caf9'
                    }
                }
            }
        }
    });
}

// 商圈模态框控制函数
window.openBusinessDistrictModal = function() {
    document.getElementById('businessDistrictModal').style.display = 'block';
    // 初始化商圈消费图表
    initBusinessDistrictChart();
};

window.closeBusinessDistrictModal = function() {
    document.getElementById('businessDistrictModal').style.display = 'none';
    // 销毁图表实例，避免内存泄漏
    const chart = Chart.getChart('businessDistrictChart');
    if (chart) {
        chart.destroy();
    }
};

// 点击模态框外部关闭
window.onclick = function(event) {
    const culturalModal = document.getElementById('culturalProductsModal');
    const businessModal = document.getElementById('businessDistrictModal');
    if (event.target == culturalModal) {
        closeCulturalProductsModal();
    } else if (event.target == businessModal) {
        closeBusinessDistrictModal();
    }
};