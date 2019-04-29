import * as classNames from 'classnames'
import * as React from 'react'
import * as style from './contact.css'
import * as baseStyle from '../../assets/styles/base.css'
import { Footer } from '../../component/footer/footer'

export const Contact = (): JSX.Element => {
  return (
    <div>
      <div className={classNames(baseStyle.pageHeader, style.pageHeader)}>
        <h1>contact</h1>
      </div>

      <div className={classNames(style.contact, baseStyle.layout)}>
        <div>
          <div>Looking Forward</div>
          <div>
            Please let me know if you have any questions either about my yoga classes, upcoming events or any other
            inquires you might have. I would also like to invite you to follow me on Facebook and Instagram for daily
            inspiration.
          </div>
        </div>

        <div>
          <div>
            <div>contact</div>
            <div>I would love to hear from you</div>
          </div>
          <div>
            <div>teresafei8@gmail.com</div>
            <div>+61 (411) 694 519</div>
          </div>
        </div>

        <div>
          <div />
          <div>
            <div>perth</div>
            <div>237 Adelaide Terrace, East Perth, WA 6000</div>
            <div>+61 411 694 519</div>
            <div>teresafei8@gmail.com</div>
          </div>
        </div>

        <div>
          <div>
            <div>social</div>
            <div>Follow me and stay updated with all the news and offers</div>
          </div>
        </div>

        <div>
          <div />
          <div>[wpforms id=1986]</div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
