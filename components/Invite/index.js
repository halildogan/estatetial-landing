/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

const Invite = () => {

    return (
        <div className="invite__center center">
            <div className="invite__container">
            <div className="invite__bg"></div>
            <div className="invite__wrap">
                <h2 className="invite__title d1" data-aos="animation-scale-top" data-aos-duration="600">Get started with Solo today</h2>
                <div className="invite__text">Just invite your team, Solo does all the heavy-lifting.</div>
                <button className="invite__btn btn btn_orange">Try it free</button>
            </div>
            <div className="invite__gallery">
                <div className="invite__preview"><img srcSet="images/figures-7.1@2x.png 2x" src="images/figures-7.1.png"  /></div>
                <div className="invite__preview" data-aos="animation-translate-down" data-aos-duration="1000"><img srcSet="images/figures-7.2@2x.png 2x" src="images/figures-7.2.png" /></div>
            </div>
            </div>
        </div>
    )
}

export default Invite;