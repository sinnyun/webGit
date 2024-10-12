

// 定义一个全局变量来存储内容
window.content = {
    // 首页
    biaoti: "欢迎来到我的网站",
    fenlei: "分类",
    内容: "这是内容说",


// 项目标题页面内容
work_t01_1:`
雅加达巴厘岛
`,
work_t01_2:`
新加坡数字代理商
`,

work_f01_1:"/ 平面设计",
work_f01_2:"用户界面/用户体验，网站-雅加达，2020年",

work_d01:"这是内容说说明说说明说明说明说",



// 项目标题页面内容
work_T02: "青城山项目",


// 项目标题页面内容
work_T03: "青城山项目",


//  项目标题页面内容
work_T04: "青城山项目",


// 项目标题页面内容
work_T05: "青城山项目",




};








// 确保 content.js 已经加载并且 window.content 已经定义
document.addEventListener('DOMContentLoaded', () => {
    for (const key in window.content) {
        // 使用 class 名称查找元素
        const elements = document.getElementsByClassName(key);
        for (let element of elements) {
            // 更新元素的 innerHTML
            element.innerHTML = window.content[key];
        }
    }
});

