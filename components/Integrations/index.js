/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

const Integrations = () => {

    return (
        <div className="integrations__center center">
            <div className="integrations__wrap">
                <div className="stage">amazing features</div>
                <h2 className="integrations__title h2" data-aos="animation-scale-top" data-aos-duration={600}>Powerful integrations</h2>
                <div className="integrations__text">We're a growing family of 382,081 designers and makers from around the world</div>
            </div>
            <div className="integrations__list">
                <div className="integrations__row">
                <div className="integrations__col">
                    <div className="integrations__logo" data-aos="animation-scale-top" data-aos-duration={600}><img src="images/notion.svg" alt /></div>
                    <div className="integrations__logo" data-aos="animation-scale-top" data-aos-duration={600}><img src="images/figma.svg" alt /></div>
                </div>
                <div className="integrations__col">
                    <div className="integrations__logo" data-aos="animation-scale-top" data-aos-duration={600}><img src="images/atom.svg" alt /></div>
                    <div className="integrations__logo" data-aos="animation-scale-top" data-aos-duration={600}><img src="images/sketch.svg" alt /></div>
                    <div className="integrations__logo" data-aos="animation-scale-top" data-aos-duration={600}><img src="images/google.svg" alt /></div>
                </div>
                <div className="integrations__col">
                    <div className="integrations__logo" data-aos="animation-scale-top" data-aos-duration={600}><img src="images/dribbble.svg" alt /></div>
                    <div className="integrations__logo" data-aos="animation-scale-top" data-aos-duration={600} style={{"padding":"10px 0 0 10px"}}><img src="images/ui8.svg" alt /></div>
                </div>
                </div>
            </div>
            </div>
    )
}

export default Integrations;