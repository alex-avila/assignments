import React from 'react'
import './Footer.css'

const Footer = () => {
    const icons = {
        base: {
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            filter: 'invert(100%)',
        },
        twitter: {
            background: `url(icons/twitter-icon.svg)`
        },
        facebook: {
            background: `url(icons/facebook-icon.svg)`
        },
        github: {
            background: `url(icons/github-icon.svg)`
        }
    }
    return (
        <div className="footer">
            <span className="footer__divider"></span>
            <div className="footer__icons">
                <span className="footer__icon__container twitter-icon" >
                    <span className="footer__icon facebook-icon" style={{...icons.twitter, ...icons.base}}></span>
                </span>
                <span className="footer__icon__container facebook-icon">
                    <span className="footer__icon facebook-icon" style={{...icons.facebook, ...icons.base}}></span>
                </span>
                <span className="footer__icon__container github-icon">
                    <span className="footer__icon facebook-icon" style={{...icons.github, ...icons.base}}></span>
                </span>
            </div>
            <p className="footer__copyright">Copyright &copy; Your Website 2018</p>
        </div>
    )
}

export default Footer