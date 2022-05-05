/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

const Advantages = () => {

    return (
        <div className="advantages__center center">
            <div className="advantages__head">
            <div className="advantages__photo"><img srcSet="images/figures@2x.png 2x" src="images/figures.png" alt /></div>
            <div className="stage">amazing features</div>
            <h2 className="advantages__title h2" data-aos="animation-scale-top" data-aos-duration={600}>See what you can do in one app</h2>
            </div>
            <div className="advantages__list">
            <div className="advantages__item">
                <div className="advantages__bg">
                <div className="advantages__preview"><img srcSet="images/advantages-pic-1@2x.png 2x" src="images/advantages-pic-1.png" alt /></div>
                <div className="advantages__preview" data-aos="animation-scale-top" data-aos-duration={800}><img srcSet="images/cube@2x.png 2x" src="images/cube.png" alt /></div>
                <div className="advantages__preview" data-aos="animation-scale-top" data-aos-duration={800} data-aos-delay={400}><img srcSet="images/ball@2x.png 2x" src="images/ball.png" alt /></div>
                </div>
                <div className="advantages__wrap">
                <div className="advantages__icon" data-aos="animation-scale-top" data-aos-duration={800}><img srcSet="images/cursor@2x.png 2x" src="images/cursor.png" alt /></div>
                <div className="advantages__info" data-aos="animation-scale-top" data-aos-duration={800} data-aos-delay={400}>Stay focused whenever, wherever</div>
                <div className="advantages__text">We're a growing family of 382,081 designers and makers from around the world</div>
                <button className="advantages__btn btn btn_border">Watch how it work</button>
                </div>
            </div>
            <div className="advantages__item">
                <div className="advantages__bg">
                <div className="advantages__preview"><img srcSet="images/advantages-pic-2@2x.png 2x" src="images/advantages-pic-2.png" alt /></div>
                <div className="advantages__preview" data-aos="animation-scale-top" data-aos-duration={800}><img srcSet="images/triangle@2x.png 2x" src="images/triangle.png" alt /></div>
                <div className="advantages__preview" data-aos="animation-scale-top" data-aos-duration={800} data-aos-delay={400}><img srcSet="images/cube@2x.png 2x" src="images/cube.png" alt /></div>
                </div>
                <div className="advantages__wrap">
                <div className="advantages__icon" data-aos="animation-scale-top" data-aos-duration={800}><img srcSet="images/chat@2x.png 2x" src="images/chat.png" alt /></div>
                <div className="advantages__info" data-aos="animation-scale-top" data-aos-duration={800} data-aos-delay={400}>Share files at the right time</div>
                <div className="advantages__text">We're a growing family of 382,081 designers and makers from around the world</div>
                <button className="advantages__btn btn btn_border">Get Solo Desktop</button>
                </div>
            </div>
            <div className="advantages__item">
                <div className="advantages__bg">
                <div className="advantages__preview"><img srcSet="images/advantages-pic-3@2x.png 2x" src="images/advantages-pic-3.png" alt /></div>
                <div className="advantages__preview" data-aos="animation-scale-top" data-aos-duration={800}><img srcSet="images/cube@2x.png 2x" src="images/cube.png" alt /></div>
                <div className="advantages__preview" data-aos="animation-scale-top" data-aos-duration={800} data-aos-delay={400}><img srcSet="images/ball@2x.png 2x" src="images/ball.png" alt /></div>
                </div>
                <div className="advantages__wrap">
                <div className="advantages__icon" data-aos="animation-scale-top" data-aos-duration={800}><img srcSet="images/plane@2x.png 2x" src="images/plane.png" alt /></div>
                <div className="advantages__info" data-aos="animation-scale-top" data-aos-duration={800} data-aos-delay={400}>Collaborate from anywhere</div>
                <div className="advantages__text">We're a growing family of 382,081 designers and makers from around the world</div>
                <button className="advantages__btn btn btn_border">Schedule a demo</button>
                </div>
            </div>
            </div>
        </div>  
    )
}

export default Advantages;