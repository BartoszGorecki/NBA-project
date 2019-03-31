import React from 'react'
import Slider from 'react-slick'


const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    draggable: false,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
}

const generateSlides = ({slides}) => {
    if(slides) {
        return (
            <Slider {...settings}>
                {slides.map( item => {
                    return (
                        <div key={item.id} className="item_slider">
                            <div style={{ background: `url(images/covers/${item.cover})`}} className="slider-image"></div> 
                            <div className="caption">
                                <h4 style={{color: 'white'}}>{item.topic}</h4>
                                <p>{item.title}</p>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        )
    }
}

const Featured = (props) => {

    return (
        <div>
            {generateSlides(props)}
        </div>
    )
}

export default Featured