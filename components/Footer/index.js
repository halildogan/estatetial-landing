/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

const Footer = () => {

    return (
        <div>
            <img  src="images/data/Group_people.svg" style={{
                marginBottom: "100px"
            }} />
            <div className="footer__center center">
                <div className="footer__body">
                <div className="footer__wrap"><a className="footer__logo" href="index.html"><img className="footer__pic footer__pic_dark" src="images/data/logo.svg" alt /><img className="footer__pic footer__pic_light" src="images/logo-light.png" alt /></a>
                    <div className="footer__text">Join millions of people who organize work and life with Solo App.</div>
                </div>
                <div className="footer__line">
                    <div className="footer__downloads"><a className="footer__download" href="#"><img src="images/google-play.svg" alt /></a><a className="footer__download" href="#"><img src="images/app-store.svg" alt /></a></div>
                    <div className="footer__nav"><a className="footer__link" href="downloads.html">Downloads</a><a className="footer__link" href="pricing.html">Pricing</a><a className="footer__link" href="features.html">Features</a><a className="footer__link" href="about-us.html">About Us</a><a className="footer__link" href="contact.html">Contact</a></div>
                </div>
                </div>
                <div className="footer__bottom">
                <div className="footer__copyright">© Estatetial Corp.</div>
                <div className="footer__social"><a className="footer__link" href="#">
                    <svg className="icon icon-facebook">
                        <use xlinkHref="#icon-facebook" />
                    </svg></a><a className="footer__link" href="#">
                    <svg className="icon icon-twitter">
                        <use xlinkHref="#icon-twitter" />
                    </svg></a><a className="footer__link" href="#">
                    <svg className="icon icon-instagram">
                        <use xlinkHref="#icon-instagram" />
                    </svg></a></div>
                </div>
            </div>
            <label className="switch js-switch-theme">
                <input className="switch__input" type="checkbox" /><span className="switch__in"><span className="switch__box" /><span className="switch__icon switch__icon_dark">
                    <svg className="icon icon-dark">
                    <use xlinkHref="#icon-dark" />
                    </svg></span><span className="switch__icon switch__icon_light">
                    <svg className="icon icon-light">
                    <use xlinkHref="#icon-light" />
                    </svg></span></span>
            </label>
        </div>
    )
}

export default Footer;