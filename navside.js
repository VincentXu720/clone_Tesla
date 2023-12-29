import { header,backdrop,body} from "./share.js";
const NavItem = document.querySelectorAll(".nav-item");
const header_panel = document.querySelector(".header-panel");
const header_panel_content = document.querySelectorAll(".header-panel-content");
const productLink = document.querySelectorAll('.product-Links');

// product Image
const carImg = document.querySelectorAll(".car");
const powerImg = document.querySelectorAll(".power");
const chargeImg = document.querySelectorAll(".charge");
const storeImg = document.querySelectorAll(".store-item");


NavItem.forEach((items, index) => {
  const getpanel = window.getComputedStyle(header_panel_content[index]);
  const panelContent = getpanel.getPropertyValue("margin-top");
  const panelMargin = parseInt(panelContent);
  header_panel_content.forEach((content) => {
    content.classList.remove("active");
    content.style.top = '-' + '410px';
    content.style.opacity = 0;
  });
  header.style.opacity=1;
  items.addEventListener("mouseover", (e) => {

    header_panel_content.forEach((content) => {
      content.addEventListener('wheel',(e)=>{ // 防止事件冒泡
        e.stopPropagation();
      })
      content.classList.remove("active");
    });
    body.style.overflow = 'hidden';

    header_panel.classList.add("active");
    header_panel_content[index].classList.add("active"); // 索檢使用者移到的目標內容
    backdrop.classList.add("active");
    //  panel height
    const ContentHeight = header_panel_content[index].offsetHeight;
    header_panel.style.height = ContentHeight + panelMargin + 10 + "px";

    backdrop.addEventListener("mouseover", () => {
      header_panel.style.height='0px'
      header_panel.classList.remove("active");
      header_panel_content[index].classList.remove("active");
      backdrop.classList.remove("active");
      body.style.overflow="scroll";
    });

    let time = 0.5;
    switch (index) {
      case 0:
        productLink[index].classList.add("active")
        carTransition(time);
        console.log("car");
        break;
      case 1:
        productLink[index].classList.add("active")
        powerTransition(time);
        console.log("power");
        break;
      case 2:
        productLink[index].classList.add("active")
        chargeTransition(time);
        console.log("charge");
        break;
      case 4:
        storeTransition(time);
        console.log("store");
        break;
    }
  });
  function carTransition(time) {
    carImg.forEach((image) => {
      image.classList.add("active");
      image.style.transition = 1 + "s";
      image.style.transform = "translateY(5px)";
      image.style.transitionDelay = time + "s";
      time += 0.5;
      image.style.opacity = 1;
    });
  }
  function powerTransition(time) {
    powerImg.forEach((image) => {
      image.classList.add("active");
      image.style.transition = 1 + "s";
      image.style.transform = "translateY(5px)";
      image.style.transitionDelay = time + "s";
      time += 0.5;
      image.style.opacity = 1;
    });
  }
  function chargeTransition(time) {
    chargeImg.forEach((image) => {
      image.classList.add("active");
      image.style.transition = 1 + "s";
      image.style.transform = "translateY(5px)";
      image.style.transitionDelay = time + "s";
      time += 0.5;
      image.style.opacity = 1;
    });
  }
  function storeTransition(time) {
    storeImg.forEach((image) => {
      image.classList.add("active");
      image.style.transition = 1 + "s";
      image.style.transform = "translateY(5px)";
      image.style.transitionDelay = time + "s";
      time += 0.5;
      image.style.opacity = 1;
    });
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 1200) {
      header_panel_content.forEach((content) => {
        content.classList.remove("active");
        backdrop.classList.remove("active");
        header_panel.style.height="0px";
        body.style.overflow="scroll";
      });
    }
  });
});

