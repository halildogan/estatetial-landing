/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

const NetworkApp = () => {

    return (
        <div className="quality__center center">
            <div className="quality__body">
                <div className="quality__bg" />
                <div className="quality__gallery">
                <div className="quality__preview"><img srcSet="images/figures-2.1@2x.png 2x" src="images/figures-2.1.png" alt /></div>
                <div className="quality__preview" data-aos="animation-translate-up" data-aos-duration={1000}><img srcSet="images/figures-2.2@2x.png 2x" src="images/figures-2.2.png" alt /></div>
                <div className="quality__preview" data-aos="animation-translate-down" data-aos-duration={1000} data-aos-delay={400}><img srcSet="images/figures-2.3@2x.png 2x" src="images/figures-2.3.png" alt /></div>
                <div className="quality__preview" data-aos="animation-translate-down" data-aos-duration={1000} data-aos-delay={800}><img srcSet="images/figures-2.4@2x.png 2x" src="images/figures-2.4.png" alt /></div>
                <div className="quality__preview"><img srcSet="images/figures-2.5@2x.png 2x" src="images/figures-2.5.png" alt /></div>
                </div>
                <div className="quality__wrap">
                <h2 className="quality__title h2" data-aos="animation-scale-top" data-aos-duration={600}>Estatetial Network App</h2>
                <div className="quality__text">EN App is a blockchain-powered, decentralized platform for the global real estate industry. It offers a secure and transparent real estate network that connects people all over the world.</div>
                <button className="quality__btn btn btn_border">See more</button>
                </div>
            </div>
        </div>
    )
}

export default NetworkApp;