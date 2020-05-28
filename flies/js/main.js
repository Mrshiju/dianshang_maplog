// 购买人数增加
window.onload = function() {
        let num = localStorage.getItem("num") ? localStorage.getItem("num") : 74256;
        if (num > 100000) {
            num = 74500;
        }
        let text = `${num}人已购买`;
        $(".info_price .origianl_price p:last").text(text);
        setInterval(function() {
            let a = $(".info_price .origianl_price p:last").text();
            var num = a.replace(/[^0-9]/ig, "");
            num++;
            let text = `${num}人已购买`;
            localStorage.setItem("num", num);
            $(".info_price .origianl_price p:last").text(text);
        }, 3000)
    
       //商品评价移动
        setInterval(function() {
            $(".custormer_comments ul li").animate({
                "top": -$('.custormer_comments ul li:first').height(),
                "opacity": ".6",
            }, 300, function() {
                $(this).animate({
                    opacity: "1"
                })
            })
            $(".custormer_comments ul").append($('.custormer_comments ul li:first'));
        }, 2000)


        // 移动事件
        var textDiv = document.getElementById("rollText");
        if (textDiv != null) {
            var textList = textDiv.getElementsByTagName("a");
            var height = $('.news_msg').height();
            if (textList.length > 1) {
                var textDat = textDiv.innerHTML;
                var br = textDat.toLowerCase().indexOf("<br",
                    textDat.toLowerCase().indexOf("<br") + 3);
                textDiv.innerHTML = textDat + textDat.substr(0,
                    br);
                textDiv.style.cssText = "position:absolute;top:0";
                var textDatH = textDiv.offsetHeight;
                MaxRoll();
            }
        }
    
        var minTime,
            maxTime,
            divTop,
            newTop = 0;
        function MinRoll() {
            newTop++;
            if (newTop <= divTop + height) {
                textDiv.style.top = "-" + newTop + "px";
            } else {
                clearInterval(minTime);
                maxTime = setTimeout(MaxRoll,
                    3000);
            }
        }
        
      function MaxRoll() {
          divTop = Math.abs(parseInt(textDiv.style.top));
          if (divTop >= 0 && divTop < textDatH - height) {
              minTime = setInterval(MinRoll,1);
          } else {
              textDiv.style.top = 0;
              divTop = 0;
              newTop = 0;
              MaxRoll();
          }
      }


      function countDown(now_time) {
          var EndTime = new Date(now_time);
          var NowTime = new Date();
          var t = EndTime.getTime() - NowTime.getTime();
          var d = 0;
          var h = 0;
          var m = 0;
          var s = 0;
          if (t >= 0) {
              d = Math.floor(t / 1000 / 60 / 60 / 24);
              h = Math.floor(t / 1000 / 60 / 60 % 24);
              m = Math.floor(t / 1000 / 60 % 60);
              s = Math.floor(t / 1000 % 60);
          } else {
              pop_tips({
                  type: '3',
                  msg: '该商品抢购已结束'
              });
              $('.buy_btn, .buy_now').removeClass('js_buy_now');
          }
          $('.js_count_d').html(d);
          $('.js_count_h').html(h);
          $('.js_count_m').html(m);
          $('.js_count_s').html(s);
          if ($('.js_meal_select .js_select li.on').length < 1 || $('.js_size_select .js_select li.on').length < 1) {
              $('#order_count').prop('disabled',
                  true);
          } else {
              $('#order_count').prop('disabled',
                  false);
          }
      }

      function GetRTime2(now_time,
          time) {
          var EndTime = now_time + time * 60 * 1000;
          var NowTime = new Date().getTime();
          var t = EndTime - NowTime;
          var d = 0;
          var h = 0;
          var m = 0;
          var s = 0;
          if (t >= 0) {
              d = Math.floor(t / 1000 / 60 / 60 / 24);
              h = Math.floor(t / 1000 / 60 / 60 % 24);
              m = Math.floor(t / 1000 / 60 % 60);
              s = Math.floor(t / 1000 % 60);
          }
          $('.js_count_d').html(d);
          $('.js_count_h').html(h);
          $('.js_count_m').html(m);
          $('.js_count_s').html(s);
      }

      //倒计时
      var now_time = new Date().getTime();
      setInterval(function() {
          GetRTime2(now_time,
              '106');
      }, 30);

      function getScrollTop() {
          var scrollTop = 0;
          if (document.documentElement && document.documentElement.scrollTop) {
              scrollTop = document.documentElement.scrollTop;
          } else if (document.body) {
              scrollTop = document.body.scrollTop;
          }
          return scrollTop;
      } // 锚点导航吸顶
      function forGuess() {
          var sct = getScrollTop();
          if ($('body').find('div.guess-like-box').length >
              0) {
              var pdImgTop = $('.products_imgs').offset().top;
              var opacityValue = (sct / 100).toFixed(1);
              if (opacityValue >= 1) opacityValue = 1;
              var subNavBox = $('.sub-nav-box');
              var guessLikeBox = $('.guess-like-box');
              var ccBoxTop = guessLikeBox.offset().top -
                  subNavBox.outerHeight();
              if (sct >= ccBoxTop) {
                  subNavBox.css({
                      opacity: opacityValue,
                      display: opacityValue > 0 ? 'flex' : 'none'
                  }).find('a:eq(2)').addClass('active').siblings('a').removeClass('active');
              } else if (sct >= pdImgTop -
                  $('.sub-nav-box').outerHeight()) {
                  subNavBox.css({
                      opacity: opacityValue,
                      display: opacityValue > 0 ? 'flex' : 'none'
                  }).find('a:eq(1)').addClass('active').siblings('a').removeClass('active');
              } else {
                  subNavBox.css({
                      opacity: opacityValue,
                      display: opacityValue > 0 ? 'flex' : 'none'
                  }).find('a:eq(0)').addClass('active').siblings('a').removeClass('active');
              }
          }
      }
      forGuess();
      // 模拟点击导航锚点 
      $('.sub-nav-box a').bind('click', function() {
          var _this = $(this);
          var _index = _this.index();
          if (_index === 0) {
              $("html,body").animate({
                  scrollTop: 0
              }, 500);
          } else if (_index === 1) {
              $("html,body").animate({
                  scrollTop: $('.products_imgs').offset().top - $('.sub-nav-box').outerHeight() + 1
              }, 500);
          } else if (_index === 2) {
              $("html,body").animate({
                  scrollTop: $('.guess-like-box').offset().top - $('.sub-nav-box').outerHeight() + 1
              }, 500);
          }
      });
      // 最新购买滚动脚本
      (function() {
              var list_new = "'罗** 正在购买这个商品','唐** 14分钟前购买成功','刘** 5分钟前购买成功','黄** 13分钟前购买成功','夏** 正在购买这个商品','涂** 21分钟前购买成功','郭** 30分钟前购买成功','伍** 24分钟前购买成功','曹** 正在购买这个商品','缪** 12分钟前购买成功','修** 11分钟前购买成功','周** 14分钟前购买成功','李** 正在购买这个商品','潮** 8分钟前购买成功','张** 15分钟前购买成功','白** 18分钟前购买成功','罗** 正在购买这个商品','郑** 3分钟前购买成功','余** 16分钟前购买成功','何** 25分钟前购买成功'";
              var list_new2 = list_new.substring(1,
                  list_new.length - 1).split('\',\'');
              var img = "'n3.jpg','n11.jpg','n23.jpg','n6.jpg','n5.jpg','n22.jpg','n17.jpg','n18.jpg','n10.jpg','n1.jpg','n12.jpg','n8.jpg','n13.jpg','n25.jpg','n9.jpg','n4.jpg','n7.jpg','n26.jpg','n2.jpg','n19.jpg'";
              var img2 = img.substring(1,
                  img.length - 1).split('\',\'');
              var testFn = {
                  list: list_new2, 
                  headLength: 20,
                  scrollHeight: 36,
                  top: 0,
                  totalLoop: 0,
                  wrapper: document.querySelector(".marquee-wrapper"),
                  container: document.querySelector("#marqueeContainer"),
                  init: function() {
                      this.wrapper && this.container && this.load(function() {
                              if (this.list && this.list.length) {
                                  if (this.container.innerHTML = this.createHTML(!0,
                                          0) + this.createHTML(!1,
                                          this.list.length),
                                      false) {
                                      document.querySelector(".pic-module") || (this.wrapper.style["margin-top"] = "0px")
                                  }
                                  this.run()
                              }
                          }
                          .bind(this))
                  },
                  createHTML: function(t, e) {
                      for (var n = "", r = 0; r < this.list.length; r++) {
                          var o = (r + e) * this.scrollHeight,
                              u = '<div><img src="http://sms-shop.oss-cn-beijing.aliyuncs.com/shopPicture/' + img2[r] + '" alt="" />' + this.list[r] + "</div>";
                          n += t ? 0 == r ? '<li style="opacity: 0; top: ' + o + 'px;">' + u + "</li>" : 1 == r ? '<li style="opacity: 0.9; top: ' + o + 'px;">' + u + "</li>" : 2 == r ? '<li style="opacity: 0.3; top: ' + o + 'px;">' + u + "</li>" : '<li style="top: ' + o + 'px;">' + u + "</li>" : '<li style="top: ' + o + 'px;">' + u + "</li>"
                      }
                      return n
                  },
                  load: function(t) {
                      t && t();
                  },
                  run: function() {
                      var t = this;
                      window.setInterval(function() {
                              t.updateUI(),
                                  t.totalLoop++
                          },
                          800)
                  },
                  updateUI: function() {
                      var t = 0;
                      if (this.totalLoop % this.list.length == 0 && this.totalLoop > 0)
                          for (; t < this.list.length;) this.container.querySelector("li").style.top = (this.list.length + t) * this.scrollHeight + "px",
                              this.container.appendChild(this.container.querySelector("li")),
                              t++;
                      var e = this.container.querySelectorAll("li");
                      for (t = 0; t < e.length; t++) {
                          var n = parseFloat(e[t].style.top);
                          n == this.scrollHeight ? e[t].style.opacity = 0 : n == 2 * this.scrollHeight ? e[t].style.opacity = .9 : n == 3 * this.scrollHeight && (e[t].style.opacity = .3), e[t].style.top = n - this.scrollHeight + "px"
                      }
                  }
              }
              testFn.init();
          }

      )();
}