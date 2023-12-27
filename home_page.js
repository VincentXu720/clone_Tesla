import { header } from "./share.js";
// home page
const imageTitle = document.querySelectorAll(".home_image_Title");
const imagesubtitle = document.querySelectorAll(".subtitle");
const customer = document.querySelectorAll(".customer");
const more = document.querySelectorAll(".more");
const reserve = document.querySelectorAll(".reserve");
const singlebutton = document.querySelectorAll(".singleButton");
const ButtonBox = document.querySelectorAll(".buttonBox");
const section = document.querySelectorAll('.home-content');
if (window.innerWidth <= 699) {
  imageTitle.forEach((imgTitle) => {
    imgTitle.style.opacity = 1;
    imgTitle.style.transitionDelay = 2 + "s";
    imgTitle.style.transform = "translateY(-15px)";
  });
  imagesubtitle.forEach((subtitle) => {
    subtitle.style.opacity = 1;
    subtitle.style.transitionDelay = 2.3 + "s";
    subtitle.style.transform = "translateY(-15px)";
  });
  customer.forEach((c) => {
    c.style.opacity = 1;
    c.style.transitionDelay = 2.8 + "s";
  });
  more.forEach((m) => {
    m.style.opacity = 1;
    m.style.transitionDelay = 2.8 + "s";
  });
  reserve.forEach((r) => {
    r.style.opacity = 1;
    r.style.transitionDelay = 2.8 + "s";
    r.style.transform = "translateY(-5px)";
  });
  singlebutton.forEach((button) => {
    button.style.opacity = 1;
    button.style.transitionDelay = 2.8 + "s";
    button.style.transform = "translateY(-5px)";
  });
  ButtonBox.forEach((button) => {
    button.style.opacity = 1;
    button.style.transitionDelay = 2.8 + "s";
    button.style.transform = "translateY(-15px)";
  });
} else if (window.innerWidth > 699) {
  imageTitle.forEach((imgTitle) => {
    imgTitle.style.opacity = 1;
    imgTitle.style.transitionDelay = 2 + "s";
    imgTitle.style.transform = "translateY(-15px)";
  });
  imagesubtitle.forEach((subtitle) => {
    subtitle.style.opacity = 1;
    subtitle.style.transitionDelay = 2.3 + "s";
    subtitle.style.transform = "translateY(-15px)";
  });
  customer.forEach((c) => {
    c.style.opacity = 1;
    c.style.transitionDelay = 2.6 + "s";
    c.style.transform = "translateX(10px)";
  });
  more.forEach((m) => {
    m.style.opacity = 1;
    m.style.transitionDelay = 2.7 + "s";
    m.style.transform = "translateX(-10px)";
  });
  reserve.forEach((r) => {
    r.style.opacity = 1;
    r.style.transitionDelay = 2.8 + "s";
    r.style.transform = "translateY(-5px)";
  });
  singlebutton.forEach((button) => {
    button.style.opacity = 1;
    button.style.transitionDelay = 2.8 + "s";
    button.style.transform = "translateY(-5px)";
  });
  ButtonBox.forEach((button) => {
    button.style.opacity = 1;
    button.style.transitionDelay = 2 + "s";
    button.style.transform = "translateY(-15px)";
  });
}

let curPage = 0;
const totalSection = section.length-1;
let scrolling = false;
window.addEventListener('wheel',(e)=>{
  scrolling = true;
  if(scrolling === true){
    console.log('yes')
    if(e.deltaY>0){
      ScrollDownMove()
    }else{
      ScrollUpMove()
    }
  }
  setTimeout(()=>{
    console.log('false');
    scrolling = false;
  },1000)
})
function ScrollUpMove(){
  if(curPage>0){
    console.log('減')
    curPage--;
    up(curPage);
  }
}
function ScrollDownMove(){
  if(curPage<totalSection){
    console.log('加')
    curPage++;
    down(curPage);
  }
}
function up(curPage){
  window.scrollTo({
    top:section[curPage].offsetTop,
    behavior:'smooth'
  });
}
function down(curPage){
  window.scrollTo({
    top:section[curPage].offsetTop,
    behavior:'smooth'
  });
}
section.forEach((sect)=>{
  console.log(sect.offsetTop)
})

// 判定值(使用者是否滑動)
// 當前值(判定使用者往上或往下滑動)
// if(判!=0){
//  if(當前值>判定值){
//       往上
//  }else{
//       往下
//       移動到內容offsetTop
//       for(i=0;i<home_content.length;i++){
//           home_content[i].offsetTop
//       }

//  }
// }
