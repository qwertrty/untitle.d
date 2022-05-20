let priceList = $('.view-contect').find('.responsive');
let totalPrice = 0;
$.each(priceList,function(i,price){
    totalPrice += parseInt($(price).text())
});
$('.total_price').text(totalPrice);