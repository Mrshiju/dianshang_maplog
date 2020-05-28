//红包点开效果
$(document).ready(function() {
    if (window.localStorage.coupon) {
        $(".coupon").val(-window.localStorage.coupon);
        $(".price").val($(".price").val() - window.localStorage.coupon);
        toast(`您已经获得${window.localStorage.coupon}元商品抵用券`);
    } else {
        setTimeout(function() {
            $(".shade").css({
                "display": "block"
            });
        }, 800);
        $(".red").click(function() {
           logclick("国学经典八本书-红包优惠点击");
            $(this).addClass("shake");
            $(".close_btn").css({
                "display":"none"
            })
            setTimeout(function() {
                let redomnum = Math.round(Math.random() * (10 - 5) + 5);
                window.localStorage.setItem("coupon", redomnum);
                toast(`恭喜你获得${window.localStorage.coupon}元商品抵用券`);
                $(".shade").css({
                    "display": "none"
                });
                $(".coupon").val(-redomnum);
                $(".price").val($(".price").val() - redomnum);
            }, 1000);
        })
    }
});