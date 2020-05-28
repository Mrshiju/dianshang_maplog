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
 * @param moreClickshow: 更多商品是否生成
 * @param color: 产品颜色
 * @param numbers :数量
 * @param couponMoney : 优惠金额
 * @param videoshow ： 是否视频
 */
var TITLE,
    TOPNAV,
    CURRENT_PRICE,
    ORIGIANL_PRICE,
    PRODUCT,
    evaluateData,
    rolltextData,
    productImgs,
    bannerImag,
    PRODUCT_ID,
    moreClick,
    color,
    numbers,
    couponMoney,
    videoshow,
    //产品id
    PRODUCT_ID = '12';
        //标题
        TITLE = '必读好书';
        //顶部导航栏
        TOPNAV = "必读好书";
        //现价
        CURRENT_PRICE = ["78","99"];   
        //多个产品价格
        PRODUCT_PRICE = [];     //多个产品多个价格 单个不写
        //原价
        ORIGIANL_PRICE ="￥248";
        //商品名称
        PRODUCT = ["按摩机器人","牙刷"];    
        //评价页
        evaluateData = ["涂**(135****1278) 收到图书，很满意这次购书，合作伙伴都说价廉物美。下次需要再来。",
        "李**(131****2711) 只是女儿知道点巜庄子》前几句，说很有意思，叫我买这书看看，于是就买了这九大本。书质量对得起价格，相对一杯奶茶来说太值了 ",
        "张**(187****2471) 比较全面，基本的国学知识大全","赵**(178****6521) 书很好，店家包的也很严实。没有损坏，内容看了很不错。所以回复的也晚了",
        "史**(158****7432) 书没有塑封，但保存得很好。书也满意。全五星",
        "赵**(135****1122) 不错好书，就不知道什么时候能看完了","毛**(139****1895) 印刷清晰，纸张不错，淡淡的油墨味，很赞",
        "王**(156****1136) 第二次购买了，挺好的",
        "慕容**(157****0032) 质量非常好，与卖家描述的完全一致，非常满意,真的很喜欢，完全超出期望值， 发货速度 非常快，包装非常仔细、严实， 物流公司服务 态度很好，运送速度很快，很满意的 一次购物，已经推荐亲朋好友了。"];
        //购买人数数据
        rolltextData = ["王**(138****1775) 刚刚订购成功!",
        "唐**(133****1319) 刚刚订购成功!",
        "刘**(138****1066) 刚刚订购成功!",
        "黄**(135****1899) 刚刚订购成功!",
        "何**(139****1591) 刚刚订购成功!",
        "涂**(135****1278) 刚刚订购成功!",
        "郭**(139****1886) 刚刚订购成功!",
        "伍**(139****1489) 刚刚订购成功!",
        "徐**(180****1660) 刚刚订购成功!",
        "缪**(135****1777) 刚刚订购成功!",
        "修**(139****1895) 刚刚订购成功!",
        "周**(156****1136) 刚刚订购成功!",
        "施**(133****1689) 刚刚订购成功!",
        "潮**(189****1986) 刚刚订购成功!",
        "张**(136****1885) 刚刚订购成功!",
        "白**(139****1098) 刚刚订购成功!",
        "田**(177****1366) 刚刚订购成功!",
        "郑**(183****1666) 刚刚订购成功!",
        "余**(138****1891) 刚刚订购成功!",
        "何**(139****1489) 刚刚订购成功!"];
        //商品图片
        productImgs = ["https://sms-shop.oss-cn-beijing.aliyuncs.com/shopPicture/0%20%281%29.gif","https://sms-shop.oss-cn-beijing.aliyuncs.com/shopPicture/0.gif","https://sms-shop.oss-cn-beijing.aliyuncs.com/shopPicture/product.png"]
        //主图介绍
        bannerImag = ["https://sms-shop.oss-cn-beijing.aliyuncs.com/shopPicture/product-top%20%282%29.jpg"];
   
        moreClick = ["https://sms-shop.oss-cn-beijing.aliyuncs.com/shopPicture/nav.png"];

        //更多商品是否生成
        moreClickshow = 'show';     //没有更多设为hiden
        //产品颜色
        color = ["棕色","蓝色"];
        //是否生成数量
        numbers = 'show';         //show生成   hidden不生成

        //优惠券金额
        couponMoney = '-25';
        //是否视频
        videoshow = 'show';   //show 生成    hidden 不生成