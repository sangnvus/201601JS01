<!-- begin register-->
jQuery(document).ready(function() {

    $('.register form').submit(function(){
        $(this).find("label[for='firstname']").html('Tên');
        $(this).find("label[for='lastname']").html('Họ');
        $(this).find("label[for='confirm']").html('Xác nhận mật khẩu');
        $(this).find("label[for='username']").html('Tài khoản');
        $(this).find("label[for='email']").html('Email');
        $(this).find("label[for='password']").html('Mật khẩu');
        ////
        var firstname = $(this).find('input#firstname').val();
        var lastname = $(this).find('input#lastname').val();
        var username = $(this).find('input#username').val();
        var email = $(this).find('input#email').val();
        var password = $(this).find('input#password').val();
        if(lastname == '') {
            $(this).find("label[for='lastname']").append("<span style='display:none' class='red'> - Please enter your last name.</span>");
            $(this).find("label[for='lastname'] span").fadeIn('medium');
            return false;
        }
        if(firstname == '') {
            $(this).find("label[for='firstname']").append("<span style='display:none' class='red'> - Please enter your first name.</span>");
            $(this).find("label[for='firstname'] span").fadeIn('medium');
            return false;
        }

        if(username == '') {
            $(this).find("label[for='username']").append("<span style='display:none' class='red'> - Please enter a valid username.</span>");
            $(this).find("label[for='username'] span").fadeIn('medium');
            return false;
        }
        if(email == '') {
            $(this).find("label[for='email']").append("<span style='display:none' class='red'> - Please enter a valid email.</span>");
            $(this).find("label[for='email'] span").fadeIn('medium');
            return false;
        }
        if(password == '') {
            $(this).find("label[for='password']").append("<span style='display:none' class='red'> - Please enter a valid password.</span>");
            $(this).find("label[for='password'] span").fadeIn('medium');
            return false;
        }
        if(confirm == '') {
            $(this).find("label[for='confirm']").append("<span style='display:none' class='red'> - Password doesn't match.</span>");
            $(this).find("label[for='confirm'] span").fadeIn('medium');
            return false;
        }
    });


});
<!-- end register-->

<!--begin: create plant-->


<!--end: create plant-->

<!--begin: edit medicinal plant and remedy article-->
$(document).ready(function(){
    $("#edit").click(function(){
      $("#note").attr("readonly", false);
      $("#note1").attr("readonly", false);
      $("#note2").attr("readonly", false);
      $("#note3").attr("readonly", false);
      $("#note4").attr("readonly", false);
      $("#note5").attr("readonly", false);
      $("#note6").attr("readonly", false);
    });
    $("#save").click(function(){
      $("#note").attr("readonly", true);
      $("#note1").attr("readonly", true);
      $("#note2").attr("readonly", true);
      $("#note3").attr("readonly", true);
      $("#note4").attr("readonly", true);
      $("#note5").attr("readonly", true);
      $("#note6").attr("readonly", true);
    });
});
<!--end: edit medicinal plant and remedy article-->

<!-- begin: searchable-->
$(document).ready(function () {
    (function ($) {

        $('#filter').keyup(function () {
            var rex = new RegExp($(this).val(), 'i');
            $('.searchable .searchable-item').hide();
            $('.searchable .searchable-item').filter(function () {
                return rex.test($(this).text());
            }).show();

        })
    }(jQuery));
});
<!-- end: searchable-->
<!-- begin: search herb medicinal plant, remedy -->
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
<!-- end: search herb medicinal plant, remedy-->
