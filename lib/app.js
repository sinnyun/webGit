function generateProjectList() {
    const projectList = document.getElementById('project-list');

    projects.forEach(project => {
        const listItem = document.createElement('li');
        listItem.className = 'active';


        // listItem.id = `list_${index + 1}`;
        // 创建内部 HTML 结构 <a href="${project.link}" class="hover-target" data-img="">
        listItem.innerHTML = `

            <img src="${project.img}" alt="${project.title}" >
           <a class="hover-target external_link" href="${project.link}" target="_blank" data-img="">
            
                <h2>${project.title}</h2>
                <strong>${project.tag}</strong>
       
         </a>
            
        `;

        projectList.appendChild(listItem);
    });
}

generateProjectList();


 // 懒加载图片 

 
  document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll('.lazy');
    const lazyLoad = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => {
      lazyLoad.observe(img);
    });
  });


//   菜单页面

// menu.js

// 创建一个函数，用于插入菜单


document.addEventListener('DOMContentLoaded',  function insertMenu() {
    const menuHTML = `

            <ol class="grid g3">
                <li class="link">
                    <a href="https://www.fleava.com/" class="inner_link hover-target"> HOME </a>
                    <img class="content__img" src="./image/nav1.png" alt="主页：主页说明">
                </li>
                <li class="link">
                    <a href="https://www.fleava.com/about" class="inner_link hover-target">WORK</a>
                    <img class="content__img" src="./image/nav2.png" alt="关于：关于的描述">
                </li>
                <li class="link">
                    <a href="https://www.fleava.com/expertise" class="inner_link hover-target"> ABOUT </a>
                    <img class="content__img" src="./image/nav3.png" alt="专长：关于的描述">
                </li>
            </ol>

            <div class="address">
                <div class="text">
                    <a href="/" class="menu-logo hover-target" title="" style="opacity: 1; transform: translate(3.5%, -50%);">
                        <div class="logo-wrap"></div>
                    </a>
                    <p>
                        <h5>CONTACT</h5> <br>
                        <strong>罗祥云 sinnyun</strong><br>
                        <dl>
                            <dt>CONCEPT</dt>
                            <dd>在路上<br>努力做一个不断求成长的设计师。</dd>
                        </dl>
                    </p>
                    <br>
                    <h5> CHENGDU, CHINA<br>
                        MAIL：<a class="hover-target external_link" href="mailto:l616631804@gmail.com" target="_blank" title="Facebook上的Fleava">l616631804@gmail.com</a>
                    </h5>
                </div>
            </div>

    `;

    // 将菜单插入到页面中，假设有一个具有 id="menuContainer" 的元素
    document.getElementById('menuContainer').innerHTML = menuHTML;
});

// 在页面加载完成后调用函数
window.onload = insertMenu;






// <div class="menu-tittle" style="background-image: url(${project.img}); height: 200px; width: 100%;"></div>
// <a class="hover-target external_link" href="${project.link}" target="_blank" data-img="">
 