import * as classNames from 'classnames'
import * as React from 'react'
import * as style from './travel.css'
import * as baseStyle from '../../assets/styles/base.css'
import { Footer } from '../../component/footer/footer'

export const Travel = (): JSX.Element => {
  return (
    <div>
      <div className={classNames(baseStyle.pageHeader, style.pageHeader)}>
        <h1>travel</h1>
      </div>

      <div className={style.travel}>
        <div>
          <p>There is freedom waiting for you, on the breezes of the sky,</p>
          <p>And you ask–</p>
          <p>“What if I fall?”</p>
          <p>oh but my darling,</p>
          <p>What if you fly?</p>
          <p>—–Erin Hanson</p>
        </div>

        <div />

        <div>
          <h3>My Travel</h3>

          <p>
            I was never a big traveler grew up in a village in China, I didn’t take my first trip overseas until I was
            24. No travel experience at all by myself as I was before I took the first international flight to Los
            Angeles all alone. After three years working in a financial company in Beijing, the calling for learning
            western culture is like a thunderstorm repeating over and over in my ears, at the same time my
            Ex-boyfriend(in Us) and I were suffering from a long distance relationship,he who was my whole universe at
            that time, I decided to further my study overseas in US. So, for my first trip overseas in 2014, I flew to
            Los Angeles. The road trip we did along the West Coast which was eye opening and life-changing. It opened me
            up to the possibilities of the world. From that moment on, I was hooked on travel.{' '}
          </p>

          <p>
            “Travel is rebellion in its purest form. We follow our heart. We free ourselves of labels. We lose control
            willingly. We trade a role for reality. We love the unfamiliar. We trust strangers. We own only what we can
            Carry. We search for better questions, not answers. We truly graduate. We, sometimes, choose never to come
            back.”
          </p>
          <div />
        </div>

        <div>
          <div>Take a peek inside MY Wonderworld</div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
