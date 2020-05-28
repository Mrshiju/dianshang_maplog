//-------------------------
//------初始公共变量-------
//-------------------------
const  MODILE ="debug";//默认模式：debug:测试；release:发布模式
const  DEAUTFUL_CID ="63278423232";//默认批次号
const  DEAUTFUL_MOBILE = "13111182711";//默认手机号码
const  DEAUTFUL_URL_REDIRECT = 'http://sms-yx-api-http.hanlonglyt.com/labelson/click.do';//默认跳转域名
const  DEAUTFUL_URL_SHOP = 'http://shop.hanlonglyt.com';//电商域名
const  DEAUTFUL_URL_LOG_CLICK = 'http://sms-yx-api-http.hanlonglyt.com/order/clicklog';//行为统计
const  DEAUTFUL_URL_SUBMIT = 'http://sms-yx-api-http.hanlonglyt.com/order/saveOrder';//下单

//-------------------------
//--------基础变量---------
//-------------------------
pcid = DEAUTFUL_CID;
mobile = DEAUTFUL_MOBILE;


//十六进制颜色随机
function color16() { 
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

/**
 * ------统计函数-------
 *
 *@param cid：批次号
 *@param mobile：手机号
 *@param msg：标签
 */
 function logclickAction(id,mobile,msg) {
	if(MODILE=="debug"){
	   console.log("pcid=="+id);
       console.log("mobile=="+mobile);
	   console.log("tag=="+msg);
	   console.log("url=="+DEAUTFUL_URL_LOG_CLICK);
	}
	 
    $.ajax({
        url: DEAUTFUL_URL_LOG_CLICK,
        data: `cid=${id}&mobile=${mobile}&tag=${msg}`,
        success: function() {}
    })
 }

 /**
 * ------统计函数-------
 * 号码和cid默认获取组装
 *@param msg：标签
 */
 function logclick(msg) {
   logclickAction(pcid,mobile,msg)
 }

 /**
 * ------获取传递参数-------
 * 号码和cid默认获取组装
 *@param name：参数名字
 */
 function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null){
	  return unescape(r[2]);
	} 
    return -1;
 }
 
 
 /**
  *------初始话cid和mobile参数-------
  *主要用作营销短信，第一次通过参数获取有用信息
  *
  */
 function setLocalParam(cid,mobiles){
	 
	 if(MODILE=="debug"){
	   console.log("---本地参数设置----");
	   console.log("pcid=="+cid);
       console.log("mobile=="+mobiles);
	}
	
	 if(cid!=-1){
		window.localStorage.removeItem("cid");
        window.localStorage.removeItem("mobile");
        window.localStorage.setItem("cid", cid);
        window.localStorage.setItem("mobile", mobiles);
		pcid = cid;
		mobile=mobiles;
	 }
 }
 
 /**
  *------获取本地参数-------
  *根据实际需求进行适当获取
  *
  */
 function getLocalParam(){
  if(window.localStorage && window.localStorage.length>0){//如果支持
	for(var i=0;i<window.localStorage.length;i++){
        var key=window.localStorage.key(i);
		var value = window.localStorage.getItem(key);
		if(value!=null && value!="null" && value!=""){
			if(key=="cid" ){
				pcid = value;
			}else if(key=="mobile"){
				mobile = value;
			}
		}
    }
   }
   if(pcid==null || pcid=="" || pcid=="null"){
	  pcid = DEAUTFUL_CID;
   }
  
   if(mobile==null){
	  mobile = DEAUTFUL_MOBILE;
   }
   
   if(MODILE=="debug"){
	  console.log("---通过Storage获取参数----");
	  console.log("pcid=="+pcid);
      console.log("mobile=="+mobile);
    }
}

 /**
  *------获取本地参数-------
  *根据实际需求进行适当获取
  *
  */
function init(){
	let mobiles = getQueryString("mobile");
    let cid = getQueryString("cid");
	if(MODILE=="debug"){
	  console.log("---初始化通过URL获取参数----");
	  console.log("cid=="+cid);
      console.log("mobile=="+mobile);
    }
	if(cid!=-1){//通过系统参数设置
	  setLocalParam(cid,mobiles);
	}else{//获取本地参数
	   getLocalParam();
	}
}

//下单函数
function subOrderAction(data,callback){
	if(MODILE=="debug"){
	  console.log("---订单提交----");
	  console.log("data=="+data);
      console.log("url=="+DEAUTFUL_URL_SUBMIT);
    }
	
	$.ajax({
        type: "post",
        url: DEAUTFUL_URL_SUBMIT,
        cache: false,
        async: false,
        data: data,
        success: callback
    })
}

//下单函数
function subOrder(callback,cid,pid,goodsid,userName,mobile,address,money,unit,num,comm,source,des){
	if(MODILE=="debug"){
	  console.log("---订单提交----");
	  console.log("cid=="+cid);
      console.log("pid=="+pid);
	  console.log("goodsid=="+goodsid);
	  console.log("userName=="+userName);
	  console.log("mobile=="+mobile);
	  console.log("address=="+address);
	  console.log("money=="+money);
	  console.log("unit=="+unit);
	  console.log("num=="+num);
	  console.log("comm=="+comm);
	  console.log("source=="+source);
	  console.log("des=="+des);
    }
	var data = `cid=${cid}&pid=${pid}&userName=${userName}&mobile=${mobile}&address=${address}&money=${money}&comm=${comm}&source=${source}&goodsid=${goodsid}&des=${des}&unit=${unit}&num=${num}`
    subOrderAction(data,callback)      
}

//初始化函数
 init();

//日志输出功能
if(MODILE=="debug"){
	console.log("---------------------");
	console.log("---初始化最终结果----");
	console.log("---------------------");
	console.log("pcid=="+pcid);
	console.log("mobile=="+mobile);
	console.log("---------------------");
	console.log("----------over-------");
	
}

