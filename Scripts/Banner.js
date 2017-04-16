var currentBanner = 0;
var banners = [];
banners[0] = 'Content/Images/banners/1.jpg';
banners[1] = 'Content/Images/banners/2.jpg';
banners[2] = 'Content/Images/banners/3.jpg';
banners[3] = 'Content/Images/banners/4.jpg';
banners[4] = 'Content/Images/banners/5.jpg';

function changeBanner() {
    currentBanner++;
    if (currentBanner > 4)
        currentBanner = 0;
    $('#imgBanner').attr("src", banners[currentBanner]);
    $('#imgBanner').show(5000);
    setTimeout(changeBanner, 10000);
}

$(document).ready(function () {
    setTimeout(changeBanner, 10000);

    $('#imgBanner').click(function () {
        currentBanner++;
        if (currentBanner > 4)
            currentBanner = 0;
        $('#imgBanner').attr("src", banners[currentBanner]);
    });
});
