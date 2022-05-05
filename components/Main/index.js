/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

const Main = () => {

    return (
        <div className="main__center center">
            <div className="main__wrap">
                <div className="stage">RISK-FREE 30 DAY TRIAL</div>
                <h1 className="main__title d1"><span data-aos="animation-scale-top" data-aos-duration={600}>The best way</span><span data-aos="animation-scale-top" data-aos-duration={600} data-aos-delay={200}>to organize </span><span data-aos="animation-scale-top" data-aos-duration={600} data-aos-delay={400}>your work.</span></h1>
                <div className="main__text">Organize your tasks, lists and reminders in one app.</div>
                <div className="main__btns">
                <button className="main__btn btn btn_orange">Join the Testnet</button>
                <button className="main__btn btn btn_border">
                    <svg className="icon icon-play">
                    <use xlinkHref="#icon-play" />
                    </svg><span>White paper</span>
                </button>
                </div>
            </div>
            <div className="main__bg" data-aos>
                <div className="main__preview"><img srcSet="images/figures-1.1@2x.png 2x" src="images/figures-1.1.png" alt /></div>
                <div className="main__preview"><img srcSet="images/figures-1.2@2x.png 2x" src="images/figures-1.2.png" alt /></div>
                <div className="main__preview"><img srcSet="images/figures-1.3@2x.png 2x" src="images/data/bike.png" alt /></div>
            </div>
            <div className="main__partners">
                <div className="main__info">Thousands of teams worldwide are using Solo</div>
                <div className="main__list">
                <div className="main__logo"><img src="images/rotashow.svg" alt /></div>
                <div className="main__logo"><img src="images/waves.svg" alt /></div>
                <div className="main__logo"><img src="images/rotashow.svg" alt /></div>
                <div className="main__logo"><img src="images/travelers.svg" alt /></div>
                <div className="main__logo"><img src="images/goldlines.svg" alt /></div>
                <div className="main__logo"><img src="images/velocity.svg" alt /></div>
                </div>
            </div>
        </div>
    )
}

export default Main;