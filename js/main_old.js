
let getId = (id) => {
    return document.getElementById(id);
}

let getOffsetTop = (element) => {
    return Math.floor(element.offsetTop);
}

let getOffsetBottom = (element) => {
    return Math.floor(element.offsetBottom);
}

let getScrollHeight = (id, windowHeight) => {
    let element = getId(id);
    let elementOffsetTop = getOffsetTop(element);
    let elementHeight = element.offsetHeight;

    if (windowHeight > elementHeight) {
        return elementOffsetTop - ((windowHeight - elementHeight) / 2)
    }
    return elementOffsetTop;
}

let scrollButton = document.getElementById("section-button")
let footerElement = getId("footer");
let deviceHeight = window.innerHeight;
let deviceWidth = window.innerWidth;
let speed = 1000;

window.addEventListener("resize", () => {
    scrollButton = document.getElementById("section-button")
    footerElement = getId("footer");
    deviceHeight = window.innerHeight;
    deviceWidth = window.innerWidth;
})

///////////////////////////////////////////////////////////////////////
// セクション移動処理

$("#body").click(()=>{
    console.log("click")
    let position = $("#section-02").offset().top;
    console.log(position)
    $("#body").animate({"scrollTop": position}, speed, "swing");
});

scrollButton.addEventListener("click", function () {
    
    let nowHeight = document.documentElement.scrollTop;

    switch (true) {
        case nowHeight + (deviceHeight / 2) < getOffsetTop(getId("section-02")):
            window.scroll({
                top: getScrollHeight("section-02", deviceHeight),
                behavior: 'smooth'
            });
            break;
        case nowHeight + (deviceHeight / 2) < getOffsetTop(getId("section-03")):
            window.scroll({
                top: getScrollHeight("section-03", deviceHeight),
                behavior: 'smooth'
            });
            break;
        case nowHeight + (deviceHeight / 2) < getOffsetTop(getId("section-04")):
            window.scroll({
                top: getScrollHeight("section-04", deviceHeight),
                behavior: 'smooth'
            });
            break;
        case nowHeight < getOffsetTop(getId("section-05")):
            window.scroll({
                top: getScrollHeight("section-05", deviceHeight),
                behavior: 'smooth'
            });
            break;
        case nowHeight <= (getOffsetTop(getId("section-05")) + 2) && deviceWidth <= 960:
            window.scroll({
                top: getScrollHeight("section-05", deviceHeight) + (getId("section-05").offsetHeight - deviceHeight),
                behavior: 'smooth'
            });
            break;
        case nowHeight < getOffsetTop(getId("section-06")):
            window.scroll({
                top: getScrollHeight("section-06", deviceHeight),
                behavior: 'smooth'
            });
            break;
        case nowHeight + (deviceHeight / 2) < getOffsetTop(getId("section-07")):
            window.scroll({
                top: getScrollHeight("section-07", deviceHeight),
                behavior: 'smooth'
            });
            break;
        case nowHeight + (deviceHeight / 2) < getOffsetTop(getId("section-08")):
            window.scroll({
                top: getScrollHeight("section-08", deviceHeight),
                behavior: 'smooth'
            });
            break;
        case nowHeight + (deviceHeight / 2) < getOffsetTop(getId("section-09")):
            window.scroll({
                top: getScrollHeight("section-09", deviceHeight),
                behavior: 'smooth'
            });
            break;
        case nowHeight + (deviceHeight / 2) < getOffsetTop(getId("section-10")):
            window.scroll({
                top: getScrollHeight("section-10", deviceHeight),
                behavior: 'smooth'
            });
            break;
        case nowHeight + (deviceHeight / 2) < getOffsetTop(getId("section-11")):
            window.scroll({
                top: getScrollHeight("section-11", deviceHeight),
                behavior: 'smooth'
            });
            break;
        default:
            window.scroll({
                top: getScrollHeight("section-12", deviceHeight) + footerElement.offsetHeight,
                behavior: 'smooth'
            });
            break;
    }
})

///////////////////////////////////////////////
// 最下部でボタン非表示処理

const allHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  const mostBottom = allHeight - window.innerHeight;
  window.addEventListener('scroll', ()=> {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop >= mostBottom) {
          scrollButton.classList.add("hide")
      }else{
        scrollButton.classList.remove("hide")
      }
  });