$(document).ready(function(){
    //Referances 
    //jQuery Cookie : https://github.com/carhartl/jquery-cookie
    //Modal : http://getbootstrap.com/javascript/#modals
    var my_cookie = $.cookie($('.modal-check').attr('name'));
    if (my_cookie && my_cookie == "true") {
        $(this).prop('checked', my_cookie);
        console.log('checked checkbox');
    }
    else{
        $('#myModal').modal('show');
        console.log('uncheck checkbox');
    }

    $(".modal-check").change(function() {
        $.cookie($(this).attr("name"), $(this).prop('checked'), {
            path: '/',
            expires: 1
        });
    });
});

   