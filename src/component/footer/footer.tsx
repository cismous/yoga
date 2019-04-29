import { Link } from 'react-router-dom'
import * as React from 'react'
import * as style from './footer.css'
import { Facebook } from './img/facebook-f-brands'
import { Instagram } from './img/instagram-brands'

export const Footer = (): JSX.Element => {
  return (
    <footer className={style.footer}>
      <div className={style.footerBanner}>
        <div className={style.bannerDesc}>
          <div className={style.descItem}>Calm The Breath</div>
          <div className={style.descItem}>Clear Your Mind</div>
          <div className={style.descItem}>Open The Heart</div>
          <div className={style.descItem}>Conquer Your World</div>
        </div>
      </div>

      <div className={style.footerContent}>
        <div className={style.social}>
          <a
            className={style.facebook}
            href='https://www.facebook.com/xiaofangiyoga'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Facebook />
          </a>

          <a
            className={style.instagram}
            href='https://www.instagram.com/xiaofangiyoga/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Instagram />
          </a>
        </div>

        <div className={style.content}>
          <ul className={style.menu}>
            <li>
              <Link to={{ pathname: '/' }}>Home</Link>
            </li>

            <li>
              <Link to={{ pathname: '/blog' }}>Blog</Link>
            </li>

            <li>
              <Link to={{ pathname: '/about' }}>About</Link>
            </li>
          </ul>

          <div className={style.copyright}>Copyright © 2019. Cismous All rights reserved</div>
        </div>

        <div className={style.other} />
      </div>
    </footer>
  )
}
