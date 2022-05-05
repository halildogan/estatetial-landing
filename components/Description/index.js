/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

const Description = () => {

    return (
        <div className="description__center center">
            <div className="description__row">
            <div className="description__wrap">
                <div className="stage">amazing features</div>
                <h2 className="description__title h2" data-aos="animation-scale-top" data-aos-duration={600}>Your busy life deserves this</h2>
                <div className="description__text">We're a growing family of 382,081 designers and makers from around the world</div>
                <button className="description__btn btn btn_border">Launch Solo Desktop App</button>
            </div>
            <div className="description__bg">
                <div className="description__preview"><img srcSet="images/figures-4.1@2x.png 2x" src="images/figures-4.1.png" alt /></div>
                <div className="description__preview" data-aos="animation-translate-down" data-aos-duration={1000}><img srcSet="images/figures-4.2@2x.png 2x" src="images/figures-4.2.png" alt /></div>
                <div className="description__preview" data-aos="animation-translate-down" data-aos-duration={1000}><img srcSet="images/figures-4.3@2x.png 2x" src="images/figures-4.3.png" alt /></div>
            </div>
            </div>
            <div className="description__row">
            <div className="description__wrap">
                <div className="stage">amazing features</div>
                <h2 className="description__title h2" data-aos="animation-scale-top" data-aos-duration={600}>Never forget anything,  ever again</h2>
                <div className="description__text">We're a growing family of 382,081 designers and makers from around the world</div>
                <button className="description__btn btn btn_border">Find out more</button>
            </div>
            <div className="description__bg">
                <div className="description__preview"><img srcSet="images/figures-5.1@2x.png 2x" src="images/figures-5.1.png" alt /></div>
                <div className="description__preview" data-aos="animation-translate-down" data-aos-duration={1000}><img srcSet="images/figures-5.2@2x.png 2x" src="images/figures-5.2.png" alt /></div>
            </div>
            </div>
        </div>
    )
}

export default Description;