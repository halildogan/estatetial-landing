/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

const WalletCard = () => {

    return (
        <div className="quality__center center">
            <div className="quality__body">
                <div className="quality__bg" />
                 <div className="quality__wrap">
                    <h2 className="quality__title h2" data-aos="animation-scale-top" data-aos-duration={600}>EN  Wallet</h2>
                    <div className="quality__text">Manage your digital identity, data, and assets all in one cross-chain wallet.</div>
                    <button className="quality__btn btn btn_border">See more</button>
                </div>
                <div className="quality__wrap">
                    <h2 className="quality__title h2" data-aos="animation-scale-top" data-aos-duration={600}>EN ID</h2>
                    <div className="quality__text">Own your data. Manage your identity and assests.</div>
                    <button className="quality__btn btn btn_border">See more</button>
                </div>
            </div>
        </div>
    )
}

export default WalletCard;