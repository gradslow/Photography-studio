jQuery(function($)
    {
        $.scrollTo(0);
        $('#header-button').click(function() { $.scrollTo($('#copyright'), 10000); });
    }
);