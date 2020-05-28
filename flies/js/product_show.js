 //主图图片
 var banner = document.getElementsByClassName("banner")[0];
 productimgShow(bannerImag,banner,"img");

 //视频展示
 setvideo(banner);
 //更多商品展示

 var moreProduct = document.getElementsByClassName("moreProduct")[0];
 productimgShow(moreClick,moreProduct,'img');
 //更多商品是否显示
 moreClicksave(moreProduct);

 //商品图片展示
 var productimg = document.getElementsByClassName("public_images")[0];
 productimgShow(productImgs,productimg,"img");
 
 //产品id设置
 var productid = document.getElementsByName("product_id")[0];
 setproductid(productid);

 //评价页加载
 var evaluateContainer = document.getElementById("evaluateContainer");
 evaluateShow(evaluateData,evaluateContainer,"li");
 
 //购买人数滚动
 var rollText = document.getElementById("rollText");
 evaluateShow(rolltextData,rollText,"a");
 
 //标题加载
 var title = document.getElementsByTagName("title")[0];
 settitle(title);

 var topnav = document.getElementById("new-title-style");
 settopnav(topnav);
 
 //现价
var current_price = document.getElementById("current_price");
setcurrent(current_price);


//原价
var origianl_price = document.getElementsByClassName("origianl_price")[0];
var origianl_price_span = origianl_price.getElementsByTagName("span")[0];
setorigianl(origianl_price_span);

//商品金额
var Price = document.getElementsByName("price")[0];
setprice(Price);
 
//产品设置
var productFat = document.getElementsByClassName("not3orderkuai")[0];
var productNum = productFat.getElementsByTagName("ul")[0];
setproductbox(productNum);

var product = productFat.getElementsByClassName("h100a");
setproduct(product);

var productinput = document.getElementsByName("product");
setproductinput(productinput);

var productinputs = document.getElementsByName("product");
setpricealt(productinputs);

//产品颜色
var not3orderkuai1 = document.getElementsByClassName("not3orderkuai1")[0];
var productColor = not3orderkuai1.getElementsByTagName("ul")[0];
setProductcolor(productColor);

var product_color = productColor.getElementsByClassName("h100a");
setColor(product_color);

var colorinput = document.getElementsByName("product_color");
setColoralt(colorinput);

//产品数量是否生成
var numberInput = document.getElementsByName("num2")[0];
var numberShow = numberInput.parentNode.parentNode;
setNumshow(numberShow);

//产品优惠生成
var couponInput = document.getElementsByName("coupon")[0];
setCouponmoney(couponInput);

