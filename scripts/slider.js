$('.responsive').slick(
    {
        dots: false,
        infinite: true,
        // autoplay:true,
        // autoplaySpeed: 4000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive:
            [
                {
                    breakpoint: 992,
                    settings:
                        {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: false
                        }
                },
                {
                    breakpoint: 768,
                    settings:
                        {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                },
                {
                    breakpoint: 576,
                    settings:
                        {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                }
            ]
    });
