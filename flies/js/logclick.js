//表单提价提示
function logclick(msg) {
    let cid = window.localStorage.getItem("cid");
    let mobiles = window.localStorage.getItem("mobiles");
    data = `cid=${cid}&mobile=${mobiles}&tag=${msg}`;
    $.ajax({
        url: "http://sms-yx-api-http.hanlonglyt.com/order/clicklog",
        data: data,
        success: function() {

        }
    })
}