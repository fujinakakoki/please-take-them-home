///////// jquery利用

// 定数

const fadeOutTime = 500;
const scrollSpeed = 1800;
const autoSwipeSpeed = 6000;
const maxSpWidth = 960;

// 変数

let windowHeight,
    windowWidth,
    pageBottom,
    isSp,
    section02_position,
    section03_position,
    section04_position,
    section05_position,
    section05_position_bottom,
    section06_position,
    section06_position_bottom,
    section07_position,
    section08_position,
    section08_position_bottom,
    section09_position,
    section10_position,
    section11_position,
    section12_position,
    moveSize;

// ロード後処理
function disableScroll(event) {
    event.preventDefault();
}
document.addEventListener('touchmove', disableScroll, {passive: false});
document.addEventListener('wheel', disableScroll, {passive: false});

$(window).on("load", () => {
    // なんかfadeOut()がiOSで効かなかったので応急処理
    $(".loading").css("opacity", 0);
    $(".loading").delay(fadeOutTime).queue(function () {
        $(this).css("display", "none");
        document.removeEventListener('touchmove', disableScroll);
        document.removeEventListener('wheel', disableScroll);
    });
})

// ロード、リサイズ時処理

$(window).on("load resize", () => {
    let windowHeight = Math.floor($(window).height());
    let windowWidth = Math.floor($(window).width());
    let pageBottom = Math.floor($("html").height());
    let isSp = windowWidth <= maxSpWidth;

    // 画像のsrc変更
    if(isSp){
        $(".image-02").attr("src", "./image/image_02_sp.png").removeClass("pc").addClass("sp")
        $(".image-03").attr("src", "./image/image_03_sp.png").removeClass("pc").addClass("sp")
        $(".image-04-02").attr("src", "./image/image_04_02_sp.png").removeClass("pc").addClass("sp")
        $(".image-06").attr("src", "./image/image_06_sp.png").removeClass("pc").addClass("sp")
        $(".image-09").attr("src", "./image/image_09_sp.png").removeClass("pc").addClass("sp")
    }else{
        $(".image-02").attr("src", "./image/image_02.png").removeClass("sp").addClass("pc")
        $(".image-03").attr("src", "./image/image_03.png").removeClass("sp").addClass("pc")
        $(".image-04-02").attr("src", "./image/image_04_02.png").removeClass("sp").addClass("pc")
        $(".image-06").attr("src", "./image/image_06.png").removeClass("sp").addClass("pc")
        $(".image-09").attr("src", "./image/image_09.png").removeClass("sp").addClass("pc")
    }

    // セクションスクロール
    if ($("#section-02").length) {
        section02_position = Math.floor($("#section-02").offset().top);
    }
    if ($("#section-03").length) {
        section03_position = Math.floor($("#section-03").offset().top);
    }
    if ($("#section-04").length) {
        section04_position = Math.floor($("#section-04").offset().top);
    }
    if ($("#section-05").length) {
        section05_position = Math.floor($("#section-05").offset().top);
        section05_position_bottom = Math.floor($("#section-05").offset().top + $("#section-05").height());
    }
    if ($("#section-06").length) {
        section06_position = Math.floor($("#section-06").offset().top);
        section06_position_bottom = Math.floor($("#section-06").offset().top + $("#section-06").height());
    }
    if ($("#section-07").length) {
        section07_position = Math.floor($("#section-07").offset().top);
    }
    if ($(".image-07").length) {
        moveSize = $(".image-07").width() - windowWidth;
    }
    if ($("#section-08").length) {
        section08_position = Math.floor($("#section-08").offset().top);
        section08_position_bottom = Math.floor($("#section-08").offset().top + $("#section-08").height());
    }
    if ($("#section-09").length) {
        section09_position = Math.floor($("#section-09").offset().top);
    }
    if ($("#section-10").length) {
        section10_position = Math.floor($("#section-10").offset().top);
    }
    if ($("#section-11").length) {
        section11_position = Math.floor($("#section-11").offset().top);
    }
    if ($("#section-12").length) {
        section12_position = Math.floor($("#section-12").offset().top);
    }
});

//// クリックスクロール処理

$("#main").on("click", () => {
    let nowPosition = $(window).scrollTop();


    switch (true) {
        case nowPosition < section02_position:
            $("html").animate({ scrollTop: section02_position }, scrollSpeed, "swing");
            break;
        case nowPosition < section03_position:
            $("html").animate({ scrollTop: section03_position }, scrollSpeed, "swing");
            break;
        case nowPosition < section04_position:
            $("html").animate({ scrollTop: section04_position }, scrollSpeed, "swing");
            break;
        case nowPosition < section05_position:
            $("html").animate({ scrollTop: section05_position }, scrollSpeed, "swing");
            break;
        case nowPosition < section05_position_bottom - windowHeight && isSp:
            $("html").animate({ scrollTop: section05_position_bottom - windowHeight }, 1200, "swing");
            break;
        case nowPosition + (windowHeight / 2) < section06_position:
            $("html").animate({ scrollTop: section06_position_bottom - windowHeight }, scrollSpeed, "swing");
            break;
        case nowPosition < section07_position:
            $("html").animate({ scrollTop: section07_position }, scrollSpeed, "swing");
            $(".image-07").animate({ "right": -moveSize + "px" })
            break;
        case nowPosition < section08_position_bottom - windowHeight:
            $("html").animate({ scrollTop: section08_position_bottom - windowHeight }, scrollSpeed, "swing");
            break;
        case nowPosition + (windowHeight / 2) < section09_position:
            if (isSp) {
                $("html").animate({ scrollTop: section09_position - ((windowHeight - $("#section-09").height()) / 2 - 100) }, scrollSpeed, "swing");
            } else {
                $("html").animate({ scrollTop: section09_position }, scrollSpeed, "swing");
            }
            break;
        case nowPosition + (windowHeight / 2) < section10_position:
            $("html").animate({ scrollTop: section10_position + (($("#section-10").height() - windowHeight) / 2) }, scrollSpeed, "swing");
            break;
        case nowPosition + (windowHeight / 2) < section11_position:
            $("html").animate({ scrollTop: section11_position }, scrollSpeed, "swing");
            break;
        default:
            $("html").animate({ scrollTop: pageBottom - windowHeight }, scrollSpeed, "swing");
            break;
    }
});
