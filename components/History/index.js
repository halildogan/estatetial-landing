/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

const History = () => {

    return (
        <div className="history__center center">
            <div className="history__container">
            <div className="history__wrap">
                <div className="stage">easily find what you’re looking for</div>
                <h2 className="history__title h2" data-aos="animation-scale-top" data-aos-duration={600}>History you can see and search</h2>
                <div className="history__info">We're a growing family of 382,081 designers and makers from around the world</div>
                <button className="history__btn btn btn_border">Learn more</button>
            </div>
            </div>
            <div className="history__bg">
            <div className="history__preview"><img srcSet="images/figures-3.1@2x.png 2x" src="images/figures-3.1.png" alt /></div>
            <div className="history__preview" data-aos="animation-translate-down" data-aos-duration={1000}><img srcSet="images/figures-3.2@2x.png 2x" src="images/figures-3.2.png" alt /></div>
            <div className="history__preview" data-aos="animation-translate-down" data-aos-duration={1000}><img srcSet="images/figures-3.3@2x.png 2x" src="images/figures-3.3.png" alt /></div>
            </div>
        </div>
    )
}

export default History;