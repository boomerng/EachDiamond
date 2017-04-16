$(document).ready(function () {
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
});