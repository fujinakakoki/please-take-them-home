
let scrollButton = document.getElementById("section-button")

scrollButton.addEventListener("click", function () {

    let deviceHeight = window.innerHeight;
    let deviceWidth = window.innerWidth;
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
                top: getScrollHeight("section-12", deviceHeight) + getId("footer").offsetHeight,
                behavior: 'smooth'
            });
            break;
    }
})

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
    console.log(element);
    let elementOffsetTop = getOffsetTop(element);
    console.log(elementOffsetTop);
    let elementHeight = element.offsetHeight;
    console.log(elementHeight)

    console.log(elementHeight)

    if (windowHeight > elementHeight) {
        return elementOffsetTop - ((windowHeight - elementHeight) / 2)
    }
    return elementOffsetTop;
}