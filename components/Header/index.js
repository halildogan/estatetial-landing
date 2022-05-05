/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { list } from "./menu"
const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

const renderMenuName = (e) => {

    if(e === 'about'){
        return (
            'About Us'
        ) 
    }
    return (
        capitalize(e)
    )
}
export const Header = () => {
    return (
        <header className="header">
        <div className="header__center center">
          <a className="header__logo" href="/">
            <img className="header__pic header__pic_dark" src="images/data/logo.svg" alt />
            <img className="header__pic header__pic_light" src="images/data/logo.svg" alt />
          </a>
          <div className="header__wrapper" style={{
              display: "block"
          }}>
            <nav className="header__nav" style={{
                float: "right"
            }}>
                <a className="header__link" href={`/`}>Home</a>
                {list?.map((menu, index) => <a key={index} className="header__link" href={`/${menu}`}>{renderMenuName(menu)}</a>)}
            </nav>
            {/* <div className="header__btns">
              <a className="header__btn btn btn_transparent js-popup-open" href="#popup-sign-in" data-effect="mfp-zoom-in">Login</a>
              <a className="header__btn btn btn_orange js-popup-open" href="#popup-sign-up" data-effect="mfp-zoom-in">Sign up</a>
            </div> */}
            <picture className="header__preview">
              <source media="(max-width: 767px)" srcSet="images/header-pic-mobile@2x.png, images/header-pic-mobile@2x.png 2x" />
              <img srcSet="images/header-pic@2x.png 2x" src="images/header-pic.png" alt />
            </picture>
          </div>
          <button className="header__burger" />
        </div>
      </header>
    )
}