/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */


const Contact = () => {
    return (
        <div className="contact__center center">
            <div className="contact__bg">
                <div className="contact__preview">
                <img srcSet="images/figures-2.1@2x.png 2x" src="images/figures-2.1.png" alt />
                </div>
                <div className="contact__preview" data-aos="animation-translate-up" data-aos-duration={1000}>
                <img srcSet="images/figures-2.2@2x.png 2x" src="images/figures-2.2.png" alt />
                </div>
                <div className="contact__preview" data-aos="animation-translate-down" data-aos-duration={1000} data-aos-delay={400}>
                <img srcSet="images/figures-2.3@2x.png 2x" src="images/figures-2.3.png" alt />
                </div>
                <div className="contact__preview" data-aos="animation-translate-down" data-aos-duration={1000} data-aos-delay={800}>
                <img srcSet="images/figures-2.4@2x.png 2x" src="images/figures-2.4.png" alt />
                </div>
                <div className="contact__preview">
                <img srcSet="images/figures-2.5@2x.png 2x" src="images/figures-2.5.png" alt />
                </div>
            </div>
            <div className="contact__wrap">
                <h1 className="contact__title h2" data-aos="animation-scale-top" data-aos-duration={600}>Contact Us</h1>
                <div className="contact__info">Questions, bug reports, feedback.</div>
                <form className="contact__form">
                <div className="field">
                    <div className="field__label">Your email</div>
                    <div className="field__wrap">
                    <input className="field__input" type="email" placeholder="Enter your email" />
                    </div>
                </div>
                <div className="field">
                    <div className="field__label">Tell us what you need help with:</div>
                    <div className="field__wrap">
                    <textarea className="field__textarea" placeholder="Enter a topic, like “channel problem...”" defaultValue={""} />
                    </div>
                </div>
                <button className="contact__btn btn btn_orange">Send now</button>
                </form>
            </div>
            </div>
    )
}

export default Contact;