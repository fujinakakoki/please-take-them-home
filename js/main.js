
let scrollButton = document.getElementById("section-button")

let flag = true;

scrollButton.addEventListener("click", function () {

    let section02 = Math.floor(document.getElementById("section-02").offsetTop);
    let section03 = Math.floor(document.getElementById("section-03").offsetTop);
    let section04 = Math.floor(document.getElementById("section-04").offsetTop);
    let section05 = Math.floor(document.getElementById("section-05").offsetTop);
    let section06 = Math.floor(document.getElementById("section-06").offsetTop);
    let section07 = Math.floor(document.getElementById("section-07").offsetTop);
    let section08 = Math.floor(document.getElementById("section-08").offsetTop);
    let section09 = Math.floor(document.getElementById("section-09").offsetTop);
    let section10 = Math.floor(document.getElementById("section-10").offsetTop);
    let section11 = Math.floor(document.getElementById("section-11").offsetTop);
    let section12 = Math.floor(document.getElementById("section-12").offsetTop);

    let nowHeight = document.documentElement.scrollTop;

    if (flag) {
        flag = false;
        switch (true) {
            case nowHeight < section02:
                window.scroll({
                    top: section02,
                    behavior: 'smooth'
                });
                // console.log("now" + nowHeight)
                // console.log("02: " + section02);
                break;
            case nowHeight < section03:
                window.scroll({
                    top: section03,
                    behavior: 'smooth'
                });
                // console.log("now" + nowHeight)
                // console.log("03: " + section03);
                break;
            case nowHeight < section04:
                window.scroll({
                    top: section04,
                    behavior: 'smooth'
                });
                // console.log("now" + nowHeight)
                // console.log("04: " + section04)
                break;
            case nowHeight < section05:
                window.scroll({
                    top: section05,
                    behavior: 'smooth'
                });
                // console.log("now" + nowHeight)
                // console.log("05: " + section05)
                break;
            case nowHeight < section06:
                window.scroll({
                    top: section06,
                    behavior: 'smooth'
                });
                // console.log("now" + nowHeight)
                // console.log("05: " + section06)
                break;
            case nowHeight < section07:
                window.scroll({
                    top: section07,
                    behavior: 'smooth'
                });
                break;
            case nowHeight < section08:
                window.scroll({
                    top: section08,
                    behavior: 'smooth'
                });
                break;
            case nowHeight < section09:
                window.scroll({
                    top: section09,
                    behavior: 'smooth'
                });
                break;
            case nowHeight < section10:
                window.scroll({
                    top: section10,
                    behavior: 'smooth'
                });
                break;
            case nowHeight < section11:
                window.scroll({
                    top: section11,
                    behavior: 'smooth'
                });
                break;
            default:
                window.scroll({
                    top: section12,
                    behavior: 'smooth'
                });
                break;
        }
        flag = true;
    }
})