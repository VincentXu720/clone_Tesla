// MenuBtn
const MenuBtn = document.querySelector("#menuBtn");
const aside = document.querySelector(".aside");
const menupanel = document.querySelector(".menu-panel");
const closeBtn = document.querySelector(".close");
// Moblie
const itemList = document.querySelectorAll(".aside-list");
const backBtn = document.querySelector(".left-arrow");
const asideHeader = document.querySelector(".aside-header");

MenuBtn.addEventListener("click", () => {
  openMenu();
});
closeBtn.addEventListener("click", () => {
  closeMenu();
});
function openMenu() {
  aside.classList.add("active");
  backdrop.classList.add("active");
  originContent();
  const itemList = document.querySelectorAll(".aside-list");
  processContent(itemList);
}
function closeMenu() {
  aside.classList.remove("active");
  backdrop.classList.remove("active");
}
// aside Container(original)
function originContent() {
  asideContainer = document.querySelector(".aside-container");
  asideContainer.innerHTML = `
    <ol>
      <li class="aside-list">
          <a class="aside-item">
              <h1 class="item">車輛</h1>
              <span class="material-symbols-outlined arrow">
                  arrow_forward_ios
              </span>
          </a>
      </li>
      <li class="aside-list">
          <a class="aside-item">
              <h1 class="item">能源</h1>
              <span class="material-symbols-outlined arrow">
                  arrow_forward_ios
              </span>
          </a>
      </li>
      <li class="aside-list">
          <a class="aside-item">
              <h1 class="item">充電</h1>
              <span class="material-symbols-outlined arrow">
                  arrow_forward_ios
              </span>
          </a>
      </li>
      <li class="aside-list">
          <a class="aside-item">
              <h1 class="item">探索</h1>
              <span class="material-symbols-outlined arrow">
                  arrow_forward_ios
              </span>
          </a>
      </li>
      <li class="aside-list">
          <a class="aside-item">
              <h1>線上商店</h1>
          </a>
      </li>
      <li class="aside-list">
          <a class="aside-item">
              <h1>支援</h1>
          </a>
      </li>
      <li class="aside-list">
          <a class="aside-item aside-item-language">
              <span class="material-symbols-outlined global">
                  language
              </span>
              <div class="language">
                  <h1>語言</h1>
                  <h2>中文</h1>
              </div>
              <span class="material-symbols-outlined arrow">
                      arrow_forward_ios
              </span>
          </a>
      </li>
      <li class="aside-list">
          <a class="aside-item aside-item-account">
              <span class="material-symbols-outlined account">
                  account_circle
              </span>
              <h1>帳戶</h1>
              <span class="material-symbols-outlined arrow">
                  arrow_forward_ios
              </span>
          </a>
      </li>
  </ol>
  `;
}
// 遞送index並改變aside內容
function processContent(List) {
  List.forEach((items, index) => {
    items.addEventListener("click", () => {
      checkItem(index);
    });
  });
}
// 確認使用者按到的ID並送ID、item給下一個function
function checkItem(ID) {
  const asideItem = document.querySelectorAll(".aside-list");
  asideItem.forEach((item, index) => {
    if (index === ID) {
      const ItemID = ID;
      solutionItem(ItemID, item);
      console.log(ItemID)
    }
  });
}
// 比對ID做不同的資料顯示
function solutionItem(ID, item) {
  const h2 = document.createElement("h2");
  const button = document.createElement("button");
  h2.classList.add("title");
  button.classList.add("left-arrow");
  const asideContainer = document.querySelector(".aside-container");
  switch (ID) {
    case 0:
      // header
      const car = item.textContent;
      h2.innerHTML = `
        ${car}
      `;
      button.innerHTML = `
        <span class="material-symbols-outlined">
          chevron_left
        </span>
      `;
      asideHeader.appendChild(h2);
      asideHeader.appendChild(button);
      // 創造內容
      asideContainer.innerHTML = `
        <section class="m-produce">
          <div class="m-produceImg carImg">
              <div class="produce-container">
                  <img class="M-car" src="assets/Model-S-nav.avif">
                  <h3>Model S</h3>
                  <span>
                      <a href="">了解更多</a>
                      <a href="">訂購</a>
                  </span>
              </div>
              <div class="produce-container">
                  <img class="M-car" src="assets/Model-3-nav.avif">
                  <h3>Model 3</h3>
                  <span>
                      <a href="">了解更多</a>
                      <a href="">訂購</a>
                  </span>
              </div>
              <div class="produce-container">
                  <img class="M-car" src="assets/Model-X-nav.avif">
                  <h3>Model X</h3>
                  <span>
                      <a href="">了解更多</a>
                      <a href="">訂購</a>
                  </span>
              </div>
              <div class="produce-container">
                  <img class="M-car" src="assets/Model-Y-nav.avif">
                  <h3>Model Y</h3>
                  <span>
                      <a href="">了解更多</a>
                      <a href="">訂購</a>
                  </span>
              </div>
              <div class="produce-container">
                  <img class="M-car" src="assets/Vehicles-Cybertruck.avif">
                  <h3>Cybertruck</h3>
                  <span>
                      <a href="">了解更多</a>
                      <a href="">訂購</a>
                  </span>
              </div>
          </div>
          <div class="produce-Menu">
              <ol>
                  <li><a href="">現貨車</a></li>
                  <li><a href="">認證中古車</a></li>
                  <li><a href="">預約試駕</a></li>
                  <li><a href="">車輛換購</a></li>
                  <li><a href="">企業用車</a></li>
                  <li><a href="">Cybertruck</a></li>
                  <li><a href="">Roadster</a></li>
              </ol>
          </div>
        </section>
      `;
      console.log(car);
      // content
      break;
    case 1:
      // header
      const power = item.textContent;
      h2.innerHTML = `
        ${power}
      `;
      button.innerHTML = `
        <span class="material-symbols-outlined">
          chevron_left
        </span>
      `;
      asideHeader.appendChild(h2);
      asideHeader.appendChild(button);
      // Change Content
      asideContainer.innerHTML = `
        <section class="m-produce">
          <div class="m-produceImg power">
              <div class="produce-container">
                  <img class="M-power" src="assets/Powerwall-Global.avif">
                  <h3>Powerwall</h3>
                  <span>
                      <a href="">了解更多</a>
                  </span>
              </div>
              <div class="produce-container">
                  <img class="M-power" src="assets/Energy-Megapack.avif">
                  <h3>Megapack</h3>
                  <span>
                      <a href="">了解更多</a>
                  </span>
              </div>
          </div>
          <div class="produce-Menu">
              <ol>
                  <li><a href="">公共設施</a></li>
                  <li><a href="">商業用途</a></li>
              </ol>
          </div>
        </section>
      `;
      console.log(power);
      // content
      break;
    case 2:
      // header
      const charge = item.textContent;
      h2.innerHTML = `
        ${charge}
      `;
      button.innerHTML = `
        <span class="material-symbols-outlined">
          chevron_left
        </span>
      `;
      asideHeader.appendChild(h2);
      asideHeader.appendChild(button);
      // Change Content
      asideContainer.innerHTML = `
        <section class="m-produce">
          <div class="m-produceImg charge">
              <div class="produce-container">
                  <img class="M-power" src="assets/Charging-Global.avif">
                  <h3>充電</h3>
                  <span>
                      <a href="">了解更多</a>
                  </span>
              </div>
              <div class="produce-container">
                  <img class="M-power" src="assets/Home-Charging-Global.avif">
                  <h3>家用充電</h3>
                  <span>
                      <a href="">了解更多</a>
                      <a href="">線上商店</a>
                  </span>
              </div>
              <div class="produce-container">
                  <img class="M-power" src="assets/Supercharging-APAC.avif">
                  <h3>超級充電</h3>
                  <span>
                      <a href="">了解更多</a>
                      <a href="">尋找位置</a>
                  </span>
              </div>
          </div>
          <div class="produce-Menu">
              <ol>
                  <li><a href="">旅程規劃程式</a></li>
                  <li><a href="">超級充電站票選</a></li>
                  <li><a href="">超級充電站合作</a></li>
                  <li><a href="">經營目的地充電站</a></li>
              </ol>
          </div>
        </section>
      `;
      console.log(charge);
      // content
      break;
    case 3:
      // header
      const explore = item.textContent;
      h2.innerHTML = `
        ${explore}
      `;
      button.innerHTML = `
        <span class="material-symbols-outlined">
          chevron_left
        </span>
      `;
      asideHeader.appendChild(h2);
      asideHeader.appendChild(button);
      // Change Content
      asideContainer.innerHTML = `
        <section class="Links">
          <div class="Links-list explore">
            <ol>
              <a href=""><li>預約試駕</li></a>
              <a href=""><li>車主分享</li></a>
              <a href=""><li>活動</li></a>
              <a href=""><li>影片</li></a>
              <a href=""><li>期間限定體驗</li></a>
              <a href=""><li>搜尋我們</li></a>
              <a href=""><li>旅程規劃程式</li></a>
              <a href=""><li>尋找鈑噴中心</li></a>
              <a href=""><li>尋找認證安裝廠商</li></a>
              <a href=""><li>關於我們</li></a>
              <a href=""><li>工作機會</li></a>
              <a href=""><li>投資者關係</li></a>
            </ol>
          <div>
        </section>
      `;
      break;
    case 6:
      h2.innerHTML = `
        Region & Language
      `;
      button.innerHTML = `
        <span class="material-symbols-outlined">
          chevron_left
        </span>
      `;
      asideHeader.appendChild(h2);
      asideHeader.appendChild(button);
      // Change Content
      asideContainer.innerHTML = `
        <section class="language">
          <div class="language-list">
            <ol>
              <a class="LanLink">
                <li>北美</li>
                <span class="material-symbols-outlined arrow">
                  arrow_forward_ios
                </span>
              </a>
              <a class="LanLink">
                <li>中東</li>
                <span class="material-symbols-outlined arrow">
                  arrow_forward_ios
                </span>
              </a>
              <a class="LanLink">
                <li>亞太地區</li>
                <span class="material-symbols-outlined arrow">
                  arrow_forward_ios
                </span>
              </a>
              <a class="LanLink">
                <li>歐洲</li>
                <span class="material-symbols-outlined arrow">
                  arrow_forward_ios
                </span>
              </a>
            </ol>
          <div>
        </section>
      `;
      break;
  }

  // 按關閉按鈕
  const closeBtn = document.querySelector(".close");
  closeBtn.addEventListener("click", () => {
    const title = document.querySelector(".title");
    const leftArrow = document.querySelector(".left-arrow");
    if (title) {
      title.remove();
    }
    if (leftArrow) {
      leftArrow.remove();
    }
    closeMenu();
  });
  // 按返回按鈕
  const leftArrow = document.querySelector(".left-arrow");
  leftArrow.addEventListener("click", () => {
    const title = document.querySelector(".title");
    const leftArrow = document.querySelector(".left-arrow");
    title.remove();
    leftArrow.remove();
    originContent();
    openMenu();
  });
  // Language
  const LanLink = document.querySelectorAll('.LanLink')
  LanLink.forEach((link,index)=>{
    link.addEventListener('click',()=>{
      switch(index){
        case 0:
          
        case 1:

        case 2:

        case 3:

      }
    })
  })
}

// moblie
window.addEventListener("resize", () => {
  if (window.innerWidth <= 1200) {
    // 導覽列會消失變成aside的導覽列
    // 改變header內容物(網頁上NAV改只有選單button)
    // 改變dialog內容物
    // dialog => header(aside的header)、導覽列
    // dialog => dialog.innerHTML = ''
    //           dialog.innerHTML = `<div class> <div class>`
  } else {
    // 改變header內容物
    // 改變dialog內容物
    // dialog => 導覽列
    // dialog => dialog.innerHTML = ''
    //           dialog.innerHTML = `<div class>`
  }
});
