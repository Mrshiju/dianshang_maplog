
		//产品id
        pid = document.form.product_id.value;
        $("#btn").click(function() {
            submitOnClick(pid);//log日志记录
           
           let changeColor = color16();
           $(this).css({
               "background": changeColor
           });
           
           //检查产品套餐
           var product = document.getElementsByName("product");
           if(!checkProduct(product)){
              return;
           }
           
           //检查产品颜色
           /*var yanse = document.getElementsByName("yanse");
           if(!checkProductColor(yanse)){
              return;
           }
           
           //检查产品尺寸
           var size = document.getElementsByName("chicun");
           if(!checkProductSize(size)){
             return;
           }
           */
           
           //用户名字
           var userName = document.form.name.value;
           if(!checkUserName(userName)){
              document.form.name.focus();
              return;
           }
           
           //用户手机号
           var userMobile = document.form.mob.value
           if(!checkUserMobile(userMobile)){
              document.form.mob.focus();
              return;
           }
           
           //省份
           var province = document.form.province.value;
           if(!checkUserProvince(province)){
               document.form.province.focus();
               return;
           }
           
           
           //地址
           var address = document.form.address.value;
           if(!checkUserAddress(address)){
               document.form.address.focus();
               return;
           }
           
           //数量
           let num = document.form.num2.value;
           if (num < 1) {
               alert("购买数量不能小于1");
               document.form.num2.focus();
               return false;
           }
            //防止重复提交
           $(this).attr("disabled", "disabled");
           
           //发送批次号
           let cid = pcid;
           //产品
           let products = $(".not3orderkuai .mouon input").val() ? $(".not3orderkuai .mouon input").val() : document.form.product.value;
           //套餐
           let sombo = $(".sombo ul .mouon input").attr("value") ? $(".sombo ul .mouon input").attr("value") : "";
           //颜色
           let color = $(".not3orderkuai1 .mouon input").val() ? $(".not3orderkuai1 .mouon input").val() : "";
           //尺码
           let size = $(".size .mouon input").val() ? $(".size .mouon input").val() : "";
           
           document.cookie = "username = userName;phone = userMobile ; adress = address";
           
           //产品描述
           let des = products;
           if (sombo != "") {
               des = products + "|" + sombo;
           }
           if (color != "") {
               des = products + "|" + color;
           }
           if (size != "") {
               des = products + "|" + size;
           }
           
           //跳转的Url链接
           var to_Url = "./price.html";
           if (pid == 1) {
             to_Url = "./read.html";
           } else {
             to_Url = "./price.html";
           }
           
           //固定
           let source = 1;
           let goodsid = 1;
           let comm= document.form.guest.value;
           let money= document.form.price.value;
           let city = document.form.city.value;
           let area = document.form.area.value;
           let address_city=province+"|"+city+"|"+area+"|"+address;
           let unit=68;
           //提交订单函数
           submitClick(cid,pid==1?"-1":cid,goodsid,userName,userMobile,address_city,money,unit,num,comm,source,des,to_Url);
           try { 
               new PCAS("province", "city", "area");
             } catch (ex) {}
       
        });
        $('.moreProduct').click(function() {
           orerOnClick(pid);
        });
        $(".buy_now").click(function() {
           buyOnClick(pid);
        });
        $(".buy_btn").click(function() {
           orerOnClick(pid);
       });
       function f(obj) {
           $(obj).addClass('mouon').siblings().removeClass('mouon');
       }