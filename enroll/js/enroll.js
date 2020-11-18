$(function(){
    $(".Enrollmentxieyi-open").click(function(){
        $(".Enrollmentxieyi").slideToggle(500);
    })
    $(".sub").click(function(){
        var nam=$("input[name=username]").val()
        var pwd=$("input[name=userpwd]").val()
        var cla=$("input[name=userclass]").val()
        var ty=$("input[name=type]").val()
        $.ajax({
            url:'http://www.qhdlink-student.top/student/login.php',
            data:{username:nam,userpwd:pwd,userclass:cla,type:ty},
            type:'post',
            success:function(data){
                if(data=="ok"){
                    alert("登录成功")
                    
                    $("#name-tip").css("display","none")
                    $("#pwd-tip").css("display","none")
                    $("#class-tip").css("display","none")
                }else{
                    // alert("输入信息错误")
                    var nam=$("input[name=username]").val()
                    var pwd=$("input[name=userpwd]").val()
                    var cla=$("input[name=userclass]").val()

                    if(/^\w{3}$/.test(nam)){
                        $("#name-tip").css("display","none")
                    }else{
                        $("#name-tip").css("display","inline-block")
                    }
                    if(/^\d{8}$/.test(pwd)){
                        $("#pwd-tip").css("display","none")
                    }else{
                        $("#pwd-tip").css("display","inline-block")
                    }
                    if(/^\d{2}$/.test(cla)){
                        $("#class-tip").css("display","none")
                    }else{
                        $("#class-tip").css("display","inline-block")
                    }
                }
                // console.log(data)
            }
        })
    })
})