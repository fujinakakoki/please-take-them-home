/////// jquery利用

// 定数
const fadeOutTime = 500;
const scrollSpeed = 1800;
const autoSwipeSpeed = 6000;
const maxSpWidth = 960;
const main = $("#main");
const page = $("html")
const body = $("body")

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

let scrollFlag = true;
let isPushBackToTop = false;

let lockUserScroll = () => { body.css("overflow", "hidden") }

let unlockUserScroll = () => { body.css("overflow", "visible") }

// 完全ロード後処理
$(window).on("load", () => {
    lockUserScroll()
    $(".loading").css("opacity", 0);
    $(".loading").delay(fadeOutTime).queue(function () {
        $(this).css("display", "none");
    }).dequeue();
})

// サイズ更新
let updateSectionSize = (windowHeight, windowWidth) => {
    // セクションスクロールサイズ取得
    section02_position = Math.floor($("#section-02").offset().top);
    section03_position = Math.floor($("#section-03").offset().top);
    section04_position = Math.floor($("#section-04").offset().top);
    section05_position = Math.floor($("#section-05").offset().top);
    section05_position_bottom = Math.floor($("#section-05").offset().top + $("#section-05").height());
    section06_position = Math.floor($("#section-06").offset().top);
    section06_position_bottom = Math.floor($("#section-06").offset().top + $("#section-06").height());
    if (windowHeight > $("#section-06").height()) {
        section06_position = Math.floor(section06_position - ((windowHeight - $("#section-06").height()) / 2));
    }
    section07_position = Math.floor($("#section-07").offset().top);
    moveSize = $(".image-07").width() - windowWidth;
    section08_position = Math.floor($("#section-08").offset().top);
    section08_position_bottom = Math.floor($("#section-08").offset().top + $("#section-08").height());
    if (windowHeight > $("#section-08").height()) {
        section08_position = Math.floor(section08_position - ((windowHeight - $("#section-08").height()) / 2));
    }
    section09_position = Math.floor($("#section-09").offset().top);
    section10_position = Math.floor($("#section-10").offset().top);
    section11_position = Math.floor($("#section-11").offset().top);
    section12_position = Math.floor($("#section-12").offset().top);
}

// ロード、リサイズ時処理
$(window).on("load resize", () => {
    scrollFlag = true
    windowWidth = Math.floor($(window).width());
    isSp = windowWidth <= maxSpWidth;

    // 画像のsrc変更
    if (isSp) {
        $(".image-02").attr("src", "./image/image_02_sp.png").removeClass("pc").addClass("sp")
        $(".image-03").attr("src", "./image/image_03_sp.png").removeClass("pc").addClass("sp")
        $(".image-04-02").attr("src", "./image/image_04_02_sp.png").removeClass("pc").addClass("sp")
        $(".image-06").attr("src", "./image/image_06_sp.png").removeClass("pc").addClass("sp")
        $(".image-09").attr("src", "./image/image_09_sp.png").removeClass("pc").addClass("sp")
    } else {
        $(".image-02").attr("src", "./image/image_02.png").removeClass("sp").addClass("pc")
        $(".image-03").attr("src", "./image/image_03.png").removeClass("sp").addClass("pc")
        $(".image-04-02").attr("src", "./image/image_04_02.png").removeClass("sp").addClass("pc")
        $(".image-06").attr("src", "./image/image_06.png").removeClass("sp").addClass("pc")
        $(".image-09").attr("src", "./image/image_09.png").removeClass("sp").addClass("pc")
    }

    windowHeight = Math.floor($(window).height());
    pageBottom = Math.floor(page.height());

    updateSectionSize(windowHeight, windowWidth);
});

//// クリックスクロール処理
let scrollSection = (nowPosition) => {
    scrollFlag = false;
    lockUserScroll()
    updateSectionSize(windowHeight, windowWidth);
    new Promise((resolve) => {
        switch (true) {
            // s02へ移動
            case nowPosition < section02_position:
                page.animate({ scrollTop: section02_position }, scrollSpeed, "swing")
                    .delay(scrollSpeed).queue(function () { scrollFlag = true; resolve(); }).dequeue();

                // console.log("02:" + section02_position);
                break;
            // s03へ移動
            case nowPosition >= section02_position && nowPosition < section03_position:
                page.animate({ scrollTop: section03_position }, scrollSpeed, "swing")
                    .delay(scrollSpeed).queue(function () { scrollFlag = true; resolve(); }).dequeue();

                // console.log("03:" + section03_position);
                break;
            // s04へ移動
            case nowPosition >= section03_position && nowPosition < section04_position:
                page.animate({ scrollTop: section04_position }, scrollSpeed, "swing")
                    .delay(scrollSpeed).queue(function () { scrollFlag = true; resolve(); }).dequeue();
                // console.log("04:" + section04_position);
                break;
            // s05へ移動
            case nowPosition >= section04_position && nowPosition < section05_position:
                page.animate({ scrollTop: section05_position }, scrollSpeed, "swing")
                    .delay(scrollSpeed).queue(function () { scrollFlag = true; resolve(); }).dequeue();
                // console.log("05:" + section05_position);
                break;
            // s06へ移動
            case nowPosition >= section05_position && nowPosition < section06_position:
                // 現在地点がsection05を最後まで表示していない場合は05を最後まで表示する
                if ((nowPosition + windowHeight) < section05_position_bottom) {
                    page.animate({ scrollTop: section05_position_bottom - windowHeight }, 1200, "swing")
                        .delay(1200).queue(function () { scrollFlag = true; resolve(); }).dequeue();
                } else {
                    page.animate({ scrollTop: section06_position }, scrollSpeed, "swing")
                        .delay(scrollSpeed).queue(function () { scrollFlag = true; resolve(); }).dequeue();
                }
                // console.log("06:" + section06_position);
                break;
            // s07へ移動 + 画像を自動スクロール
            case nowPosition >= section06_position && nowPosition < section07_position:
                // 現在地点がsectrion06と同じか下、かつsection06を最後まで表示していない場合は06を最後まで表示する
                if ((nowPosition + windowHeight) < section06_position_bottom) {
                    page.animate({ scrollTop: section06_position_bottom - windowHeight }, scrollSpeed, "swing")
                        .delay(scrollSpeed).queue(function () { scrollFlag = true; resolve(); }).dequeue();
                } else if ($(".image-07").width() > windowWidth) {
                    // 画像サイズが画面幅を超過している場合は07移動後に画像をスクロールする
                    page.animate({ scrollTop: section07_position }, scrollSpeed, "swing");
                    $(".image-07").animate({ "right": -moveSize + "px" })
                        .delay(scrollSpeed + autoSwipeSpeed).queue(() => { scrollFlag = true; resolve();}).dequeue();
                } else {
                    page.animate({ scrollTop: section07_position }, scrollSpeed, "swing")
                        .delay(scrollSpeed).queue(() => { scrollFlag = true; resolve(); }).dequeue();
                }
                // console.log("07:" + section07_position + ", move:" + moveSize);
                break;
            // s08へ移動
            case nowPosition >= section07_position && nowPosition < section08_position:
                // 現在位置がsection07と同じか下、かつsection08を最後まで表示していない場合
                if ((nowPosition + windowHeight) < section08_position_bottom) {
                    page.animate({ scrollTop: section08_position_bottom - windowHeight }, scrollSpeed, "swing")
                        .delay(scrollSpeed).queue(() => { scrollFlag = true; resolve(); }).dequeue();
                } else {
                    page.animate({ scrollTop: section08_position }, scrollSpeed, "swing")
                        .delay(scrollSpeed).queue(() => { scrollFlag = true; resolve(); }).dequeue();
                }
                // console.log("08:" + section08_position);
                break;
            // s09へ移動（section08の最後を表示しており、かつ現在位置+画面の半分がs09より上の場合）
            case (nowPosition + windowHeight) >= section08_position_bottom && nowPosition + (windowHeight / 2) < section09_position:
                if (isSp) {
                    page.animate({ scrollTop: section09_position - ((windowHeight - $("#section-09").height()) / 2 - 100) }, scrollSpeed, "swing")
                        .delay(scrollSpeed).queue(() => { scrollFlag = true; resolve(); }).dequeue();
                    // console.log("09_sp:" + section09_position);
                } else {
                    page.animate({ scrollTop: section09_position }, scrollSpeed, "swing")
                        .delay(scrollSpeed).queue(() => { scrollFlag = true; resolve(); }).dequeue();
                    // console.log("09:" + section09_position);
                }
                break;
            case nowPosition + (windowHeight / 2) < section10_position:
                page.animate({ scrollTop: section10_position + (($("#section-10").height() - windowHeight) / 2) }, scrollSpeed, "swing")
                    .delay(scrollSpeed).queue(() => { scrollFlag = true; resolve(); }).dequeue();
                // console.log("10:" + section10_position);
                break;
            case nowPosition + (windowHeight / 2) < section11_position:
                page.animate({ scrollTop: section11_position }, scrollSpeed, "swing")
                    .delay(scrollSpeed).queue(() => { scrollFlag = true; resolve(); }).dequeue();
                // console.log("11" + section11_position);
                break;
            case nowPosition < Math.floor(page.height()) - windowHeight:
                page.animate({ scrollTop: Math.floor(page.height()) - windowHeight }, scrollSpeed, "swing")
                    .delay(scrollSpeed).queue(() => { scrollFlag = true; resolve(); }).dequeue();
                // console.log("bottom:" + (Math.floor(page.height()) - windowHeight));
                // console.log("page" + (Math.floor(page.height()) - windowHeight))
                break;
            default:
                break;
        }
    }).then(() => {
        if (isPushBackToTop) {
            unlockUserScroll()
        }
    })
}

// 画面クリック処理
main.on("click", () => {
    let nowPosition = $(window).scrollTop();
    if (scrollFlag) {
        scrollSection(nowPosition)
    }

});

// 戻るボタン押下
//// メインスクロール処理（click）より優先度をあげるためにmouseupにしている
$(".back-to-top").on("mouseup", () => {
    scrollFlag = false;
    isPushBackToTop = true;
    $(".image-07").animate({ "right": "0px" });
    page.animate({ scrollTop: 0 }, scrollSpeed, "swing")
        .delay(scrollSpeed).queue(() => {
            scrollFlag = true
            unlockUserScroll()
        }).dequeue();
});
