/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

const Join = () => {

    return (
        <div className="history__center center">
            <div className="">
                <div className="history__wrap">
                    <h2 className="history__title h2" data-aos="animation-scale-top" data-aos-duration={600} style={{
                        
                    }}>Join the incentivized testnet</h2>
                    <div className="history__info">We're a growing family of 382,081 designers and makers from around the world</div>
                    <button className="history__btn btn btn_border">Find out more</button>
                </div>
            </div>
            <div className="history__bg">
                <div className="history__preview">
                    <img srcSet="images/figures-3.1@2x.png 2x" src="images/figures-3.1.png" alt />
                </div>
                <div className="history__preview" data-aos="animation-translate-down" data-aos-duration={1000}>
                    <img srcSet="images/figures-3.2@2x.png 2x" src="images/figures-3.2.png" alt />
                </div>
                <div className="history__preview" data-aos="animation-translate-down" data-aos-duration={1000}>
                    <img srcSet="images/figures-3.3@2x.png 2x" src="images/figures-3.3.png" alt />
                </div>
            </div>
        </div>
    )
}

export default Join;