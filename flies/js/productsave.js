 /**
 * -----商品信息------
 * @param TITLE : 标题
 * @param TOPNAV: 顶部标题
 * @param CURRENT_PRICE: 现价
 * @param ORIGIANL_PRICE: 原价
 * @param PRODUCT: 商品名称
 * @param evaluateData:评价页加载
 * @param rolltextData:购买人数加载
 * @param productImgs:商品详情图片
 * @param bannerImag:顶部主图
 * @param PRODUCT_ID:产品id
 * @param moreClick : 更多点击
 * @param video : 是否视频
 * @param videoShow : 视频地址
 */

     //标题函数
    function settitle(TITLEdom){
        TITLEdom.innerHTML = TITLE;
    }
    //顶部标题函数
    function settopnav(TOPNAVdom){
        TOPNAVdom.innerHTML = TOPNAV;
    }
    //现价函数
    function setcurrent(CURRENT_PRICEdom){
        CURRENT_PRICEdom.innerHTML = CURRENT_PRICE[0];
    }
    //原价函数
    function setorigianl(ORIGIANL_PRICEdom){
        ORIGIANL_PRICEdom.innerHTML = ORIGIANL_PRICE;
    }
    //产品设置

    //产品数量设置  多个产品多个li
    function setproductbox(dom){ 
        if(PRODUCT.length == 1){
            let li = document.createElement("li");
            let input = document.createElement("input");
            let div = document.createElement("div");
            li.classList.add('mouon');
            input.type = "radio";
            input.name = "product";
            div.classList.add('h100a');
            li.appendChild(input);
            li.appendChild(div);
            dom.appendChild(li);
        } else{
            for(let i = 0 ; i < PRODUCT.length ; i ++){
                let li = document.createElement("li");
                let input = document.createElement("input");
                let div = document.createElement("div");
                if(i == 0){
                    li.classList.add("mouon");
                    input.setAttribute("checked",'');
                }
                input.type = "radio";
                input.name = "product";
                div.classList.add('h100a');
                li.appendChild(input);
                li.appendChild(div);
                dom.appendChild(li);
            }
        }
    }
    function setproduct(PRODUCTdom){
        for(let i = 0; i < PRODUCTdom.length ; i++){
            PRODUCTdom[i].innerHTML = PRODUCT[i];
        }
    }
    //产平价格设置
    function setprice(dom){
        if(couponMoney != ''){
            dom.value = CURRENT_PRICE[0]*1 + couponMoney*1;
        }else{
            dom.value = CURRENT_PRICE[0];
        }
    }
    //产品alt设置
    function setpricealt(dom){
        for(let i = 0 ; i < dom.length ; i ++){
            dom[i].alt = CURRENT_PRICE[i];
        }
        // dom.alt = CURRENT_PRICE;
    }
    //产品input框设置
    function setproductinput(dom){
        for(let i =0 ; i < dom.length ; i ++){
            dom[i].value = PRODUCT[i];
        }
    }
    //产品id设置
    function setproductid(dom) {
        dom.value = PRODUCT_ID
    }
    //更多商品生成
    function moreClicksave(dom){
        if(moreClickshow == "show"){
            dom.style.cssText = "display:block;width:3rem;height:2rem;position: absolute;z-index:99;top: 0.8rem;right: 0rem;position: fixed;opacity: 0.8;";
        }else{
            dom.style.cssText = "display:none";
        }
    }

    //产品颜色生成
    function setProductcolor(dom){
        if(color.length){
            for (let i = 0; i < color.length; i++) {
                let li = document.createElement("li");
                let input = document.createElement("input");
                let div = document.createElement("div");
                if(i == 0){
                    li.classList.add("mouon");
                    input.setAttribute("checked",'');
                }
                input.type = "radio";
                input.name = "product_color";
                div.classList.add('h100a');
                li.appendChild(input);
                li.appendChild(div);
                dom.appendChild(li);
            }
        }else{
             dom.parentNode.parentNode.style.cssText = "display:none";
        }
    }

    //产品颜色设置
    function setColor(dom){
        for(let i = 0; i < color.length ; i ++){
            dom[i].innerHTML = color[i];
        }
    }
    //颜色alt设置
    function setColoralt(dom){
        for(let i = 0; i < color.length ; i ++){
            dom[i].value = color[i];
            dom[i].alt = CURRENT_PRICE[0];
        }
    }

    //产品数量是否生成
    function setNumshow(dom){
        if(numbers == 'show'){
            dom.style.cssText = "display:block"
        }else{
            dom.style.cssText = "display:none"
        }
    }

    //优惠券金额
    function setCouponmoney(dom){
        if(couponMoney != ''){
            dom.value = couponMoney
        }else{
            dom.parentNode.parentNode.style.cssText = "display:none";
        }
    }

    //视频是否生成
    function setvideo(dom){
        if(videoShow == "show"){
            /**
             * @param player    视频盒子
             * @param playImg   视频引导图片
             * @param videoBox  视频video容器
             * @param playDiv   视频点击容器
             */
            let player = document.createElement("div");
            let playImg = document.createElement("img");
            let videoBox = document.createElement("video");
            let playDiv = document.createElement("div");
            let source = document.createElement("source");
            let banner = document.getElementsByClassName("banner")[0];
            bannerImg = banner.getElementsByTagName("img")[0];
            banner.style.cssText = 'position: relative;height:100%;width:100%';
            bannerImg.id = 'controlpic';
            player.classList.add("player");
            player.style.cssText = 'position: absolute;width: 4rem;height: 1.1rem;border:white solid 1px; border-radius: .5rem;left: 50%;top: 50%;margin-left: -1.5rem;background-color:rgba(195, 162, 162, .4);color: black'
            playImg.src = 'https://sms-shop.oss-cn-beijing.aliyuncs.com/cleanerP/timg.jpg';
            playImg.id = 'controlpic1';
            playImg.style.cssText = 'width: 1rem;height:1rem;background-color: white;border-radius: 50%;float: left;';
            playDiv.style.cssText = 'color:white;width: 2.5rem;height: 1.1rem;line-height: 1.1rem; float: left;text-align: center;font-size: .3rem;';
            playDiv.innerHTML = '点击播放视频';
            videoBox.style.cssText = 'display: none;width:100%;height:100%';
            videoBox.id = 'diveoID';
            videoBox.controls = 'controls';
            videoBox.autoplay = 'autoplay';
            videoBox.setAttribute("webkit-playsinline",'true');
            videoBox.setAttribute("x-webkit-airplay",'allow');
            source.src = videoUrl;
            source.type = "video/mp4";
            dom.appendChild(player);
            player.appendChild(playImg);
            player.appendChild(playDiv);
            dom.appendChild(videoBox);
            videoBox.appendChild(source);
            let script = document.createElement("script");
            script.setAttribute("src",'../flies/js/video.js');
            document.body.appendChild(script);
        }
    };