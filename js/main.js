///////// jquery利用

// 定数

const fadeOutTime = 500;
const scrollSpeed = 1000;
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
    section07_position,
    section08_position,
    section08_position_bottom,
    section09_position,
    section10_position,
    section11_position,
    section12_position,
    moveSize;

// ロード後処理

$(window).on("load", ()=>{
    // なんかfadeOut()がiOSで効かなかったので応急処理
    $(".loading").css("opacity", 0);
    $(".loading").delay(fadeOutTime).queue(function(){
        $(this).css("display", "none");
    });
})

// ロード、リサイズ時処理

$(window).on("load resize", () => {
    windowHeight = Math.floor( $(window).height());
    windowWidth = Math.floor( $(window).width());
    pageBottom = Math.floor($("html").height());
    isSp = windowWidth <= maxSpWidth;
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
    }
    if ($("#section-07").length) {
        section07_position = Math.floor($("#section-07").offset().top);
    }
    if( $(".image-07").length){
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

//// スクロール処理

$("#main").on("click",() => {
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
            $("html").animate({ scrollTop: section05_position_bottom - windowHeight }, scrollSpeed, "swing");
            break;
        case nowPosition < section06_position:
            $("html").animate({ scrollTop: section06_position }, scrollSpeed, "swing");
            break;
        case nowPosition < section07_position:
            $("html").animate({ scrollTop: section07_position }, scrollSpeed, "swing");
            $(".image-07").animate({"right": -moveSize + "px"})
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
