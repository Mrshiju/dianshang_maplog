//???
let num = $('.num2').val() != '' ? $('.num2').val() : 0;
let price = $('.not3orderkuai ul .mouon input').attr("alt ");
$(".up1").click(function() {
    let price = $('.not3orderkuai ul .mouon input').attr("alt");
    let num = $('.num2').val();
    num++;
    $('.num2').val(num);
    let prices = num * price;
    if(document.form.coupon.value){
        prices = prices + document.form.coupon.value*1;
    }
    $(".price").val(prices);
});
$(".down1").click(function() {
    let num = $('.num2').val();
    let price = $('.not3orderkuai ul .mouon input').attr("alt");
    if (num <= 1) {
        return
    };
    num--;
    $('.num2').val(num);
    let prices = num * price;
    if(document.form.coupon.value){
        prices = prices + document.form.coupon.value*1;
    }
    $(".price").val(prices);
});
$(".num2").on('keyup', function() {
    var str = $(this).val();
    if(str <= 0){
        return false;
    }
    prices = $(".num2").val() * $('.not3orderkuai ul .mouon input').attr("alt");
    if(document.form.coupon.value){
        prices = prices + document.form.coupon.value*1;
    }
    $('.price').val(prices);
});