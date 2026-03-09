// 数据管理器 - 使用localStorage存储所有模块数据
const DataManager = {
    // 初始化默认数据
    initDefaultData() {
        // IP效能数据
        if (!localStorage.getItem('ipRevenueData')) {
            localStorage.setItem('ipRevenueData', JSON.stringify([
                { name: 'IP1', revenue: 500 },
                { name: 'IP2', revenue: 350 },
                { name: 'IP3', revenue: 200 },
                { name: 'IP4', revenue: 120 },
                { name: 'IP5', revenue: 50 }
            ]));
        }
        
        if (!localStorage.getItem('ipInfluenceData')) {
            localStorage.setItem('ipInfluenceData', JSON.stringify([
                { channel: '社交媒体', percentage: 35 },
                { channel: '短视频', percentage: 25 },
                { channel: '新闻报道', percentage: 20 },
                { channel: '线下活动', percentage: 15 },
                { channel: '其他', percentage: 5 }
            ]));
        }
        
        // 文创产品数据
        if (!localStorage.getItem('culturalProductsData')) {
            localStorage.setItem('culturalProductsData', JSON.stringify([
                { name: 'IP1产品A', ip: 'IP1', sales: 1820, buyers: 1200, amount: 25000 },
                { name: 'IP2产品B', ip: 'IP2', sales: 1250, buyers: 980, amount: 18000 },
                { name: 'IP3产品C', ip: 'IP3', sales: 980, buyers: 850, amount: 12000 },
                { name: 'IP4产品D', ip: 'IP4', sales: 820, buyers: 720, amount: 9500 },
                { name: 'IP5产品E', ip: 'IP5', sales: 750, buyers: 680, amount: 8200 }
            ]));
        }
        
        // 重点文物数据
        if (!localStorage.getItem('culturalRelicsData')) {
            localStorage.setItem('culturalRelicsData', JSON.stringify([
                { name: '文物1', index: 95 },
                { name: '文物2', index: 88 },
                { name: '文物3', index: 92 },
                { name: '文物4', index: 78 },
                { name: '文物5', index: 90 }
            ]));
        }
        
        // 智慧商圈数据
        if (!localStorage.getItem('businessDistrictData')) {
            localStorage.setItem('businessDistrictData', JSON.stringify({
                merchantCount: 1.28,
                onlineCoverage: 98,
                monthlySales: 2.5,
                controlCenterA: 96
            }));
        }
        
        if (!localStorage.getItem('dailyConsumptionData')) {
            localStorage.setItem('dailyConsumptionData', JSON.stringify([
                12, 19, 15, 17, 22, 25, 28, 26, 24, 20, 18, 22, 26, 29, 32, 
                30, 28, 31, 35, 33, 30, 28, 25, 22, 24, 27, 29, 31, 33, 35
            ]));
        }
        
        // 客流统计数据
        if (!localStorage.getItem('visitorData')) {
            localStorage.setItem('visitorData', JSON.stringify([
                { day: '周一', count: 8500 },
                { day: '周二', count: 9200 },
                { day: '周三', count: 8800 },
                { day: '周四', count: 10500 },
                { day: '周五', count: 12800 },
                { day: '周六', count: 18500 },
                { day: '周日', count: 16200 }
            ]));
        }
        
        // 消费分析数据
        if (!localStorage.getItem('consumptionData')) {
            localStorage.setItem('consumptionData', JSON.stringify([
                { month: '1月', amount: 120 },
                { month: '2月', amount: 150 },
                { month: '3月', amount: 180 },
                { month: '4月', amount: 220 },
                { month: '5月', amount: 280 },
                { month: '6月', amount: 350 }
            ]));
        }
        
        // 核心指标数据
        if (!localStorage.getItem('coreMetricsData')) {
            localStorage.setItem('coreMetricsData', JSON.stringify({
                coreIpCount: 15,
                culturalRelicsCount: 89,
                dailyVisitors: 1.28,
                culturalProductsCount: 98
            }));
        }
    },
    
    // 获取数据
    getData(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    },
    
    // 设置数据
    setData(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    
    // IP效能管理
    getIpRevenueData() {
        return this.getData('ipRevenueData') || [];
    },
    
    setIpRevenueData(data) {
        this.setData('ipRevenueData', data);
    },
    
    getIpInfluenceData() {
        return this.getData('ipInfluenceData') || [];
    },
    
    setIpInfluenceData(data) {
        this.setData('ipInfluenceData', data);
    },
    
    // 文创产品管理
    getCulturalProductsData() {
        return this.getData('culturalProductsData') || [];
    },
    
    setCulturalProductsData(data) {
        this.setData('culturalProductsData', data);
    },
    
    // 重点文物管理
    getCulturalRelicsData() {
        return this.getData('culturalRelicsData') || [];
    },
    
    setCulturalRelicsData(data) {
        this.setData('culturalRelicsData', data);
    },
    
    // 智慧商圈管理
    getBusinessDistrictData() {
        return this.getData('businessDistrictData') || {};
    },
    
    setBusinessDistrictData(data) {
        this.setData('businessDistrictData', data);
    },
    
    getDailyConsumptionData() {
        return this.getData('dailyConsumptionData') || [];
    },
    
    setDailyConsumptionData(data) {
        this.setData('dailyConsumptionData', data);
    },
    
    // 客流统计管理
    getVisitorData() {
        return this.getData('visitorData') || [];
    },
    
    setVisitorData(data) {
        this.setData('visitorData', data);
    },
    
    // 消费分析管理
    getConsumptionData() {
        return this.getData('consumptionData') || [];
    },
    
    setConsumptionData(data) {
        this.setData('consumptionData', data);
    },
    
    // 核心指标管理
    getCoreMetricsData() {
        return this.getData('coreMetricsData') || {};
    },
    
    setCoreMetricsData(data) {
        this.setData('coreMetricsData', data);
    }
};

// 初始化数据
DataManager.initDefaultData();

// 导出数据管理器
window.DataManager = DataManager;
