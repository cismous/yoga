import * as classNames from 'classnames'
import * as React from 'react'
import * as style from './blog.css'
import * as baseStyle from '../../assets/styles/base.css'
import { Footer } from '../../component/footer/footer'

export const Blog = (): JSX.Element => {
  return (
    <div>
      <div className={classNames(baseStyle.pageHeader, style.pageHeader)}>
        <h1>blog</h1>
      </div>

      <Footer />
    </div>
  )
}
