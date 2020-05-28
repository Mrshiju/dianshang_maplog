//-------------------------
//------公共函数-------
//本函数主要是点击统计相关
//主要依赖commom.js函数
//-------------------------


/**
 * ------获取产品-------
 *
 *@param pid：产品id
 *@return 产品名称
 */
function getPro(pid) {
    var pro = "无";
    switch (pid) {
        case "1":
            pro = "国学经典"
            break;
        case "2":
            pro = "按摩仪"
            break;
        case "3":
            pro = "儿童图书"
            break;
        case "4":
            pro = "机器除尘器"
			break;
		case "7":
            pro = "国学经典7"
			break;
		case "8":
            pro = "国学经典8"
			break;
        case "9":
            pro = "国学经典9"
			break;
        case "10":
            pro = "国学经典10"
			break;
    }
    return pro;
}

/**
 * ------立即购买点击-------
 *@param pid：产品id
 */
function buyOnClick(pid){
    logclick(getPro(pid) + "-立即购买点击");
}


/**
 * ------立即下单点击-------
 *@param pid：产品id
 */
function orerOnClick(pid){
    logclick(getPro(pid) + "-立即下单，疯抢中点击");
}


/**
 * ------更多商品点击-------
 *@param pid：产品id
 */
function moreOnClick(pid){
    logclick(getPro(pid) + "-更多商品点击");
}


/**
 * ------提交订单点击-------
 *@param pid：产品id
 */
function submitOnClick(pid){
    logclick(getPro(pid) + "-提交订单点击");
}


/**
 * ------返回首页点击-------
 *@param pid：产品id
 */
function backOnClick(pid){
    logclick(getPro(pid) + "-返回首页点击");
}


/**
 * -----自定义点击入口-------
 *@param pid：产品id
 *@param msg：tag内容
 */
function defOnClick(pid,msg){
    logclick(getPro(pid) + "-"+msg);
}

/**
 * -----自定义点击入口-------
 *@param msg：tag内容
 */
function defOnClick(msg){
    logclick(msg);
}

//-------订单相关--------

/**
 * -----数值校验函数-------
 *@param domValue：数值选项
 */
function checkDom(domValue){
    try {
        if (domValue.length >0) {
            for (var i = 0; i < domValue.length; i++) {
                if (domValue[i].checked) {
                   return true;
                }
            }
        }
    } catch (err) {
       console.log(err.message);
	}
    return false;
}

/**
 * -----检查产品套餐-------
 *@param msg：tag内容
 */
function checkProduct(productSet){
	let result = checkDom(productSet);
	if(!result){
	  alert("请选择要购买的商品或者套餐");
	  return false;
	}
    return result;
}

/**
 * -----产品颜色检查-------
 *@param msg：tag内容
 */
function checkProductColor(productColor){
   let result = checkDom(productColor);
	if(!result){
	  alert("请选择要的购买颜色");
	  return false;
	}
    return result;
}

/**
 * -----产品尺寸检查-------
 *@param msg：tag内容
 */
function checkProductSize(productSize){
   let result = checkDom(productSize);
	if(!result){
	  alert("请选择要的购买尺码");
	  return false;
	}
    return result;
}

/**
 * -----产品赠品检查-------
 *@param msg：tag内容
 */
function checkProductAdd(productAdd){
   let result = checkDom(productAdd);
	if(!result){
	  alert("请选择要的赠品");
	  return false;
	}
    return result;
}

/**
 * -----产品赠品颜色检查-------
 *@param msg：tag内容
 */
function checkProductAddColor(productAddColor){
   let result = checkDom(productAddColor);
	if(!result){
	  alert("请选择要的赠品颜色");
	  return false;
	}
    return result;
}

/**
 * -----产品赠品尺寸检查-------
 *@param msg：tag内容
 */
function checkProductAddSize(productAddSize){
   let result = checkDom(productAddSize);
	if(!result){
	  alert("请选择要的赠品尺码");
	  return false;
	}
    return result;
}


/**
 * -----产品数量检查-------
 *@param msg：tag内容
 */
function checkProductCount(productAddSize){
   let result = checkDom(productAddSize);
	if(!result){
	  alert("请选择要的赠品尺码");
	  return false;
	}
    return result;
}

/**
 * -----用户姓名检查-------
 *@param userName：用户名
 */
function checkUserName(userName){
	var result =true;
	try{
		if (userName== "") {
		   alert('请填写姓名！');
		   return false;
		}
		var name = /^[\u4e00-\u9fa5]{2,6}$/;
		if (!name.test(userName)) {
		  alert('姓名格式不正确，请重新填写！');
		   return false;
		}
	}catch (err) {
		result = false;
       console.log(err.message);
	}
	return result;
}

/**
 * -----用户手机号检查-------
 *@param userMobile：手机号码
 */
function checkUserMobile(userMobile){
	var result =true;
	try{
		if (userMobile== "") {
		   alert('请填写手机号码！');
		   return false;
		}
		var form = /^1[3,4,5,6,7,8,9]\d{9}$/;
		if (!form.test(userMobile)) {
			alert('手机号码格式不正确，请重新填写！');
			return false;
		}
	}catch (err) {
	   result = false;
       console.log(err.message);
	}
	return result;
}

/**
 * -----用户省份检查-------
 *@param province：省份内容
 */
function checkUserProvince(province){
	var result =true;
	try{
		if (province== "") {
		   alert('请选择所在地区！');
		   return false;
		}
	}catch (err) {
	   result = false;
       console.log(err.message);
	}
	return result;
}

/**
 * -----用户地址检查-------
 *@param address：地址
 */
function checkUserAddress(address){
	var result =true;
	try{
		if (address== "") {
		   alert('请填写详细地址！');
		   result = false;
		}
	}catch (err) {
	   result = false;
       console.log(err.message);
	}
	return result;
}

/**
 * ------订单的提交真是路径------
 *@param cid：批次号
 *@param pid：产品号；如果pid！=1 则cid
 *@param userName：用户名
 *@param mobile：手机号
 *@param address：地址
 *@param money：金额
 *@param unit：单价
 *@param num：数量
 *@param comm：评价
 *@param source：来源
 *@param des：描述
 *@param reUrl：重定向链接地址
 */
function submitClick(cid,pid,goodsid,userName,mobile,address,money,unit,num,comm,source,des,reUrl){
    subOrder(function callback(res){
	    if (res.result == 'ok') {
            alert("您已下单成功");
            window.location.href = reUrl;
        } else {
            alert("购买失败,请重新购买")
        }
    },cid,pid,goodsid,userName,mobile,address,money,unit,num,comm,source,des);
}

/**
 * ------评价及最新购买展示------
 * @param evaluate: 用户评价
 * @param container: 评价容器
 * @param dom:增加元素
 */
function evaluateShow(evaluate,container,dom){
	for (let index = 0; index < evaluate.length; index++) {
		const element = evaluate[index];
		let  evaluateList = document.createElement(dom);
		evaluateList.innerText = element;
		container.appendChild(evaluateList);
	}
}

/**
 * ------商品展示------
 * @param images: 商品图片
 * @param container: 评价容器
 * @param dom:增加元素
 */
function productimgShow(images,container,dom) {
	for (let index = 0; index < images.length; index++) {
		const element = images[index];
		let  evaluateList = document.createElement(dom);
		evaluateList.src = element;
		container.appendChild(evaluateList);	
	}	
}