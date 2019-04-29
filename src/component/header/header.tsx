import * as classNames from 'classnames'
import * as React from 'react'
import * as style from './header.css'
import { Link } from 'react-router-dom'

const navList = [
  {
    pathname: '/',
    text: 'Home',
  },
  {
    pathname: '/yoga',
    text: 'Yoga',
  },
  {
    pathname: '/travel',
    text: 'Travel',
  },
  {
    pathname: '/blog',
    text: 'Blog',
  },
  {
    pathname: '/about',
    text: 'About',
  },
  {
    pathname: '/contact',
    text: 'Contact',
  },
]

export const Header = (): JSX.Element => {
  const [hasScrolled, setScrollState] = React.useState(true)
  React.useEffect(() => {
    const updateStyle = (): void => {
      setScrollState(window.scrollY >= 10)
    }

    window.addEventListener('scroll', updateStyle)

    return function cleanup() {
      window.removeEventListener('resize', updateStyle)
    }
  })

  return (
    <div className={classNames(style.headerWrapper, { [style.headerWrapperScroll]: hasScrolled })}>
      <div className={style.header}>
        {navList.map(nav => (
          <Link className={style.item} key={nav.pathname} to={nav.pathname}>
            <div>
              <span>{nav.text}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
