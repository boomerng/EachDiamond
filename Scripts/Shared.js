$(document).ready(function () {
    var thisYear = (new Date()).getFullYear();
    $("div.menu > ul > li").hover(
        function () {
            var ul = $(this).find("ul");
            if (ul != undefined);
            {
                ul.slideDown();
            }
        },
        function () {
            var ul = $(this).find("ul");
            if (ul != undefined);
            {
                ul.slideUp();
            }
        }
    );

    $(".copyRightEnglish").text('Copyright © ' + thisYear + ' Unauthorized duplication is a violation of copyright law.');
    $(".copyRightChinese").text('Copyright © ' + thisYear + ' 郑州益奇超硬材料有限公司 版权所有.');
});