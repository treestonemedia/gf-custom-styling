(function ($) {
    $(window).load(function () {
        // Run code
    });

    $(document).ready(function () {

        var ta = document.querySelector('.gfs_short_p textarea');

        //ta.style.display = 'none';
        autosize(ta);
        $(ta).attr('rows', '1');
        //$('.gfs_sub_field textarea').css({'height':'auto'});
        //ta.style.display = 'block';
        autosize.update(ta);

        //$('.gfs_sub_field textarea').attr('rows','1');
        //$('.gfs_sub_field textarea').css({'height':'40px'});
        $(document).on('focus', '.gfs_short_p textarea', function () {
            $(this).attr('rows', '1');//.css({'height':'40px'});
            //$(this).css({'height':'40px'});
            autosize($(this));
            console.log(ta);
            //ta.style.display = 'block';
            //autosize.update(ta);
        });

        /* - animation*/
        $(document).on('click', '.gform_wrapper input[type="radio"], .gform_wrapper input[type="checkbox"], .gform_wrapper input[type="radio"] + label, .gform_wrapper input[type="checkbox"] + label', function () {
            $(this).parent().addClass('isActive').delay(350).queue(function () {
                $(this).removeClass("isActive").dequeue();
            });
        });

        $('.gform_wrapper .ginput_container_radio input[type="text"]').before("<label class='other-label'></label>");

    });/* end of jQuery document ready */

})(jQuery);
