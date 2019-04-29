import * as classNames from 'classnames'
import * as React from 'react'
import * as style from './yoga.css'
import * as baseStyle from '../../assets/styles/base.css'
import { Footer } from '../../component/footer/footer'

export const Yoga = (): JSX.Element => {
  return (
    <div>
      <div className={classNames(baseStyle.pageHeader, style.pageHeader)}>
        <h1>yoga</h1>
      </div>

      <Footer />
    </div>
  )
}
