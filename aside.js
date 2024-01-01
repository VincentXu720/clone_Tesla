import { backdrop, body } from "./share.js";
// MenuBtn
const MenuBtn = document.querySelector("#menuBtn");
const aside = document.querySelector(".aside");
const closeBtn = document.querySelector(".close");

MenuBtn.addEventListener("click", () => {
  aside.addEventListener('wheel',(e)=>{
    body.style.overflow='hidden';
    e.stopPropagation();
  })
  
  openMenu();
});
closeBtn.addEventListener("click", () => {
  const title = document.querySelector(".title");
  const back = document.querySelector(".left-arrow");
  if(title && back){
    title.remove();
    back.remove();
  }
  aside.classList.remove("active");
  backdrop.classList.remove("active");
});
function openMenu() {
  aside.classList.add("active");
  backdrop.classList.add("active");
  originContent();
  processContent();
}
// aside Container(original)
function originContent() {
  const asideContainer = document.querySelector(".aside-container");
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
          </a>
      </li>
  </ol>
  `;
}
function buildHeader() {
  const title = document.createElement("h2");
  const back = document.createElement("button");
  const asideHeader = document.querySelector(".aside-header");
  title.classList.add("title");
  back.classList.add("left-arrow");
  asideHeader.appendChild(title);
  asideHeader.appendChild(back);
}
// back
function goback() {
  const title = document.querySelector(".title");
  const leftArrow = document.querySelector(".left-arrow");
  title.remove();
  leftArrow.remove();
  originContent();
  openMenu();
}

// 遞送index並改變aside內容
function processContent() {
  const itemList = document.querySelectorAll(".aside-list");
  const asideContainer = document.querySelector(".aside-container");
  itemList.forEach((items, index) => {
    const item = items.querySelector(".item");
    items.addEventListener("click", () => {   
      const title = document.querySelector(".title");
      const back = document.querySelector(".left-arrow");
      switch (index) {
        case 0:
          // header
          if (title && back) {
            title.innerHTML = `${item.textContent}`;
            back.innerHTML = `
              <span class="material-symbols-outlined">
                chevron_left
              </span>
            `;
          } else {
            buildHeader();
            const title = document.querySelector(".title");
            const back = document.querySelector(".left-arrow");
            title.innerHTML = `${item.textContent}`;
            back.innerHTML = `
              <span class="material-symbols-outlined">
                chevron_left
              </span>
            `;
          }
          // 創造內容
          asideContainer.innerHTML = `
            <section class="m-product">
              <div class="m-productImg carImg">
                  <div class="product-container">
                      <img class="M-car" src="assets/Model-S-nav.avif">
                      <div class="TextContainer">
                        <h3>Model S</h3>
                        <span>
                            <a href="">了解更多</a>
                            <a href="">訂購</a>
                        </span>
                      </div>
                  </div>
                  <div class="product-container">
                      <img class="M-car" src="assets/Model-3-nav.avif">
                      <div class="TextContainer">
                        <h3>Model 3</h3>
                        <span>
                          <a href="">了解更多</a>
                          <a href="">訂購</a>
                        </span>
                      </div>
                  </div>
                  <div class="product-container">
                      <img class="M-car" src="assets/Model-X-nav.avif">
                      <div class="TextContainer">
                        <h3>Model X</h3>
                        <span>
                            <a href="">了解更多</a>
                            <a href="">訂購</a>
                        </span>
                      </div>
                  </div>
                  <div class="product-container">
                      <img class="M-car" src="assets/Model-Y-nav.avif">
                      <div class="TextContainer">
                        <h3>Model Y</h3>
                        <span>
                            <a href="">了解更多</a>
                            <a href="">訂購</a>
                        </span>
                      </div>
                  </div>
                  <div class="product-container">
                      <img class="M-car" src="assets/Vehicles-Cybertruck.avif">
                      <div class="TextContainer">
                        <h3>Cybertruck</h3>
                        <span>
                            <a href="">了解更多</a>
                            <a href="">訂購</a>
                        </span>
                      </div>
                  </div>
              </div>
              <div class="product-Menu">
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
          // back button
          if(back){
            back.addEventListener('click',()=>{
              goback()
            })
          }else{
            const back = document.querySelector(".left-arrow");
            back.addEventListener("click",()=>{
              goback()
            })
          }
          break;
        case 1:
          // header
          if (title && back) {
            title.innerHTML = `${item.textContent}`;
            back.innerHTML = `
              <span class="material-symbols-outlined">
                chevron_left
              </span>
            `;
          } else {
            buildHeader();
            const title = document.querySelector(".title");
            const back = document.querySelector(".left-arrow");
            title.innerHTML = `${item.textContent}`;
            back.innerHTML = `
              <span class="material-symbols-outlined">
                chevron_left
              </span>
            `;
          }
          // Change Content
          asideContainer.innerHTML = `
            <section class="m-product">
              <div class="m-productImg power-m">
                  <div class="product-container">
                      <img class="M-power" src="assets/Powerwall-Global.avif">
                      <div class="TextContainer">
                        <h3>Powerwall</h3>
                        <span>
                            <a href="">了解更多</a>
                        </span>
                      </div>
                  </div>
                  <div class="product-container">
                      <img class="M-power" src="assets/Energy-Megapack.avif">
                      <div class="TextContainer">
                        <h3>Megapack</h3>
                        <span>
                            <a href="">了解更多</a>
                        </span>
                      </div>
                  </div>
              </div>
              <div class="product-Menu">
                  <ol>
                      <li><a href="">公共設施</a></li>
                      <li><a href="">商業用途</a></li>
                  </ol>
              </div>
            </section>
          `;
          // back button
          if(back){
            back.addEventListener('click',()=>{
              goback()
            })
          }else{
            const back = document.querySelector(".left-arrow");
            back.addEventListener("click",()=>{
              goback()
            })
          }
          break;
        case 2:
          // header
          if (title && back) {
            title.innerHTML = `${item.textContent}`;
            back.innerHTML = `
              <span class="material-symbols-outlined">
                chevron_left
              </span>
            `;
          } else {
            buildHeader();
            const title = document.querySelector(".title");
            const back = document.querySelector(".left-arrow");
            title.innerHTML = `${item.textContent}`;
            back.innerHTML = `
              <span class="material-symbols-outlined">
                chevron_left
              </span>
            `;
          }
          // Change Content
          asideContainer.innerHTML = `
            <section class="m-product">
              <div class="m-productImg charge-m">
                  <div class="product-container">
                      <img class="M-power" src="assets/Charging-Global.avif">
                      <div class="TextContainer">
                        <h3>充電</h3>
                        <span>
                            <a href="">了解更多</a>
                        </span>
                      </div>
                  </div>
                  <div class="product-container">
                      <img class="M-power" src="assets/Home-Charging-Global.avif">
                      <div class="TextContainer">
                        <h3>家用充電</h3>
                        <span>
                            <a href="">了解更多</a>
                            <a href="">線上商店</a>
                        </span>
                      </div>
                  </div>
                  <div class="product-container">
                      <img class="M-power" src="assets/Supercharging-APAC.avif">
                      <div class="TextContainer">
                        <h3>超級充電</h3>
                        <span>
                            <a href="">了解更多</a>
                            <a href="">尋找位置</a>
                        </span>
                      </div>
                  </div>
              </div>
              <div class="product-Menu">
                  <ol>
                      <li><a href="">旅程規劃程式</a></li>
                      <li><a href="">超級充電站票選</a></li>
                      <li><a href="">超級充電站合作</a></li>
                      <li><a href="">經營目的地充電站</a></li>
                  </ol>
              </div>
            </section>
          `;
          // back button
          if(back){
            back.addEventListener('click',()=>{
              goback()
            })
          }else{
            const back = document.querySelector(".left-arrow");
            back.addEventListener("click",()=>{
              goback()
            })
          }
          break;
        case 3:
          // header
          if (title && back) {
            title.innerHTML = `${item.textContent}`;
            back.innerHTML = `
              <span class="material-symbols-outlined">
                chevron_left
              </span>
            `;
          } else {
            buildHeader();
            const title = document.querySelector(".title");
            const back = document.querySelector(".left-arrow");
            title.innerHTML = `${item.textContent}`;
            back.innerHTML = `
              <span class="material-symbols-outlined">
                chevron_left
              </span>
            `;
          }
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
          // back button
          if(back){
            back.addEventListener('click',()=>{
              goback()
            })
          }else{
            const back = document.querySelector(".left-arrow");
            back.addEventListener("click",()=>{
              goback()
            })
          }
          break;
        case 6:
          Area();
      }
    });
  });
}
function Area() {
  const title = document.querySelector(".title");
  const back = document.querySelector(".left-arrow");
  const asideContainer = document.querySelector(".aside-container");
  if (title && back) {
    title.innerHTML = `
      Region & Language
    `;
    back.innerHTML = `
      <span class="material-symbols-outlined">
        chevron_left
      </span>
    `;
  } else {
    buildHeader();
    const title = document.querySelector(".title");
    const back = document.querySelector(".left-arrow");
    title.innerHTML = `
      Region & Language
    `;
    back.innerHTML = `
      <span class="material-symbols-outlined">
        chevron_left
      </span>
    `;
  }
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
  readArea();
  if (back) {
    back.addEventListener("click", () => {
      goback();
    });
  } else {
    const back = document.querySelector(".left-arrow");
    back.addEventListener("click", () => {
      goback();
    });
  }
}

function readArea() {
  const Linkarea = document.querySelectorAll(".LanLink");
  Linkarea.forEach((area, index) => {
    const AreaName = area.querySelector("li");
    area.addEventListener("click", () => {
      Country(AreaName);
    });
  });
}

function Country(AreaName) {
  const title = document.querySelector(".title");
  const back = document.querySelector(".left-arrow");
  const asideContainer = document.querySelector(".aside-container");
  const name = AreaName.textContent
  title.innerHTML = `${AreaName.textContent}`;
  back.innerHTML = `
        <span class="material-symbols-outlined">
          chevron_left
        </span>
      `;
  if(name === '北美'){
    asideContainer.innerHTML = `
              <ol class="country">
                <a><li>美國</li></a>
                <a class="bilingual">
                  <li>加拿大</li>
                  <span class="material-symbols-outlined arrow">
                    arrow_forward_ios
                  </span>
                </a>
                <a><li>墨西哥</li></a>
                <a class="bilingual">
                  <li>波多黎各</li>
                  <span class="material-symbols-outlined arrow">
                    arrow_forward_ios
                  </span>
                </a>
              </ol>
            `;
      readCountry(AreaName);
  }else if(name === '中東'){
    asideContainer.innerHTML = `
              <ol class="country">
                <a><li>以色列</li></a>
                <a class="bilingual">
                  <li>阿拉伯聯合大公國</li>
                  <span class="material-symbols-outlined arrow">
                    arrow_forward_ios
                  </span>
                </a>
                <a><li>約旦</li></a>
                <a class="bilingual">
                  <li>卡達</li>
                  <span class="material-symbols-outlined arrow">
                    arrow_forward_ios
                  </span>
                </a>
              </ol>
            `;
    readCountry(AreaName);
  }else if(name === "亞太地區"){
    asideContainer.innerHTML = `
      <ol class="country">
        <a><li>中國</li></a>
        <a class="bilingual">
          <li>香港</li>
          <span class="material-symbols-outlined arrow">
            arrow_forward_ios
          </span>
        </a>
        <a class="bilingual">
          <li>澳門</li>
          <span class="material-symbols-outlined arrow">
            arrow_forward_ios
          </span>
        </a>
        <a><li>台灣</li></a>
        <a><li>日本</li></a>
        <a><li>馬來西亞</li></a>
        <a><li>新加坡</li></a>
        <a class="bilingual">
          <li>泰國</li>
          <span class="material-symbols-outlined arrow">
            arrow_forward_ios
          </span>
        </a>
        <a><li>韓國</li></a>
        <a><li>澳大利亞</li></a>
        <a><li>新西蘭</li></a>
      </ol>
    `;
    readCountry(AreaName);
  }else if(name === "歐洲"){
    asideContainer.innerHTML = `
      <ol class="country">
        <a class="bilingual">
          <li>比利時</li>
          <span class="material-symbols-outlined arrow">
            arrow_forward_ios
          </span>
        </a>
        <a><li>捷克</li></a>
        <a><li>丹麥</li></a>
        <a><li>德國</li></a>
        <a><li>希臘</li></a>
        <a><li>西班牙</li></a>
        <a><li>法國</li></a>
        <a><li>克羅地亞</li></a>
        <a><li>匈牙利</li></a>
        <a><li>愛爾蘭</li></a>
        <a><li>冰島</li></a>
        <a><li>義大利</li></a>
        <a class="bilingual">
          <li>盧森堡</li>
          <span class="material-symbols-outlined arrow">
            arrow_forward_ios
          </span>
        </a>
        <a><li>荷蘭</li></a>
        <a><li>挪威</li></a>
        <a><li>奧地利</li></a>
        <a><li>波蘭</li></a>
        <a><li>葡萄牙</li></a>
        <a><li>羅馬尼亞</li></a>
        <a><li>斯洛維尼亞</li></a>
        <a class="bilingual">
          <li>瑞士</li>
          <span class="material-symbols-outlined arrow">
            arrow_forward_ios
          </span>
        </a>
        <a><li>瑞典</li></a>
        <a><li>芬蘭</li></a>
        <a><li>土耳其</li></a>
        <a><li>英國</li></a>
        <a><li>歐洲其他國家/地區</li></a>
      </ol>
    `;
    readCountry(AreaName);
  }
  back.addEventListener("click", () => {
    Area();
  });
}

function readCountry(AreaName) {
  const bilingual = document.querySelectorAll(".bilingual");
  bilingual.forEach((multi, index) => {
    multi.addEventListener("click", () => {
      const countryname = multi.querySelector("li")
      if(AreaName.textContent === '北美') {
        NorthAmerica(AreaName,countryname)
      }else if(AreaName.textContent === '中東'){
        MiddelEast(AreaName,countryname)
      }else if(AreaName.textContent === '亞太地區'){
        Asia(AreaName,countryname)
      }else if(AreaName.textContent === '歐洲'){
        Europe(AreaName,countryname)
      }
    });
  });
}
// // 多語言國家
function NorthAmerica(AreaName,countryname) {
  const title = document.querySelector(".title");
  const back = document.querySelector(".left-arrow");
  const asideContainer = document.querySelector(".aside-container");
  const countryLanguage = countryname.textContent
  title.innerHTML = `${countryLanguage}`;
  back.innerHTML = `
    <span class="material-symbols-outlined">
      chevron_left
    </span>
  `;
  if(countryLanguage === '加拿大'){
    asideContainer.innerHTML = `
      <ol class="multiLan">
        <a><li>英語</li></a>
        <a><li>法語</li></a>
      </ol>
    `;
  }else if(countryLanguage === '波多黎各'){
    asideContainer.innerHTML = `
      <ol class="multiLan">
        <a><li>英語</li></a>
        <a><li>西班牙語</li></a>
      </ol>
    `;
  }
  if (back) {
    const backname = AreaName
    back.addEventListener("click", () => {
      Country(backname);
    });
  }
}

function MiddelEast(AreaName,countryname) {
  const title = document.querySelector(".title");
  const back = document.querySelector(".left-arrow");
  const asideContainer = document.querySelector(".aside-container");
  const countryLanguage = countryname.textContent
  title.innerHTML = `${countryLanguage}`;
  back.innerHTML = `
    <span class="material-symbols-outlined">
      chevron_left
    </span>
  `;
  if(countryLanguage === '阿拉伯聯合大公國'){
    asideContainer.innerHTML = `
      <ol class="multiLan">
        <a><li>英語</li></a>
        <a><li>阿拉伯語</li></a>
      </ol>
    `;
  }else if(countryLanguage === '卡達'){
    asideContainer.innerHTML = `
      <ol class="multiLan">
        <a><li>英語</li></a>
        <a><li>阿拉伯語</li></a>
      </ol>
    `;
  }
  if (back) {
    const backname = AreaName
    back.addEventListener("click", () => {
      Country(backname);
    });
  }
}

function Asia(AreaName,countryname) {
  const title = document.querySelector(".title");
  const back = document.querySelector(".left-arrow");
  const asideContainer = document.querySelector(".aside-container");
  const countryLanguage = countryname.textContent
  title.innerHTML = `${countryLanguage}`;
  back.innerHTML = `
    <span class="material-symbols-outlined">
      chevron_left
    </span>
  `;
  if(countryLanguage === '香港'){
    asideContainer.innerHTML = `
      <ol class="multiLan">
        <a><li>中文</li></a>
        <a><li>英語</li></a>
      </ol>
    `;
  }else if(countryLanguage === '澳門'){
    asideContainer.innerHTML = `
      <ol class="multiLan">
        <a><li>中文</li></a>
        <a><li>英語</li></a>
      </ol>
    `;
  }else if(countryLanguage === '泰國'){
    asideContainer.innerHTML = `
      <ol class="multiLan">
        <a><li>泰語</li></a>
        <a><li>英語</li></a>
      </ol>
    `;
  }
  if (back) {
    const backname = AreaName
    back.addEventListener("click", () => {
      Country(backname);
    });
  }
}

function Europe(AreaName,countryname) {
  const title = document.querySelector(".title");
  const back = document.querySelector(".left-arrow");
  const asideContainer = document.querySelector(".aside-container");
  const countryLanguage = countryname.textContent
  title.innerHTML = `${countryLanguage}`;
  back.innerHTML = `
    <span class="material-symbols-outlined">
      chevron_left
    </span>
  `;
  if(countryLanguage === '比利時'){
    asideContainer.innerHTML = `
      <ol class="multiLan">
        <a><li>荷蘭語</li></a>
        <a><li>法語</li></a>
      </ol>
    `;
  }else if(countryLanguage === '盧森堡'){
    asideContainer.innerHTML = `
      <ol class="multiLan">
        <a><li>法語</li></a>
        <a><li>德語</li></a>
      </ol>
    `;
  }else if(countryLanguage === '瑞士'){
    asideContainer.innerHTML = `
      <ol class="multiLan">
        <a><li>法語</li></a>
        <a><li>德語</li></a>
        <a><li>義大利語</li></a>
      </ol>
    `;
  }
  if (back) {
    const backname = AreaName
    back.addEventListener("click", () => {
      Country(backname);
    });
  }
}


