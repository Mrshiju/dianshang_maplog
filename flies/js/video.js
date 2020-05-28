$(function() {
    $("#controlpic").click(function() {
        //此处写点击触发的操作
        $(this).css("display", "none");
        $("#controlpic1").css("display", 'none');
        $(".player").css("display","none");
        //1、取得播放器的对象
        var objVideo = $("#diveoID");
        objVideo.css("display", "block");
        //2、调用视频播放API
        objVideo.get(0).play();
        //视频停止API
        //objVideo.pause();
    });
});
$(function() {
    $(".player").click(function() {
        //此处写点击触发的操作
        $(this).css("display", "none");
        $("#controlpic").css("display", "none");
        $("#controlpic1").css("display", 'none');
        //1、取得播放器的对象
        var objVideo = $("#diveoID");
        objVideo.css("display", "block");
        //2、调用视频播放API
        objVideo.get(0).play();
        //视频停止API
        //objVideo.pause();
    });
});
$(function() {
    $("#controlpic1").click(function() {
        //此处写点击触发的操作
        $("#controlpic").css("display", "none ");
        $(this).css("display", "none ");
        //1、取得播放器的对象
        var objVideo = $("#diveoID");
        objVideo.css("display", "block ");
        //2、调用视频播放API
        objVideo.get(0).play();
        //视频停止API
        //objVideo.pause();
    });
});