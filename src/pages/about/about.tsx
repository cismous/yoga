import * as classNames from 'classnames'
import * as React from 'react'
import * as style from './about.css'
import * as baseStyle from '../../assets/styles/base.css'
import { ContentBlock } from '../../component/content-block/content-block'
import { Footer } from '../../component/footer/footer'
import * as imgMyMission from './img/my-mission.jpeg'
import * as imgEducation from './img/education.jpg'

export const About = (): JSX.Element => {
  return (
    <div>
      <div className={classNames(baseStyle.pageHeader, style.pageHeader)}>
        <h1>our values</h1>
      </div>

      <div className={style.about}>
        <div className={baseStyle.layout}>
          <div className={style.intro}>
            Yoga has been such an amazing teacher,a best friend and a loving soulmate in my life. What was at first an
            “escape“and a medicine for a broken heart became a ritual that led me to a path of understanding more about
            myself and a journey of self-exploration. It guided me to honor my body and my sour in a way that I had
            never done before. I learnt how to expand my limit in terms of movement by coordinating with my breath,and
            by controlling my breath thus conquer my emotion.The subtle changes appeared little by little along the
            practice,not only physically but more mentally led me to become more aware of myself at a profound level. If
            you let ,yoga will heal you.Before yoga for a long period of time,I was completely shut after the
            termination of my first and only relationship I had in my life which I have devoted my whole heart to,I was
            lost,broken and was living a life to fulfill other’s expectations. Then came yoga, I learnt through yoga
            asana that I can communicate with my body by listening to their needs,noticing the feeling whenever I have
            different movements or sensations as our body always have information for us.That kind of understanding
            allows me to be more patient to myself in terms of not only certain posture I am not ready for but also life
            goals in general.
          </div>
        </div>

        <div className={baseStyle.layout}>
          <ContentBlock
            title='My Yoga Education'
            content='My mission is to spread sunshine and happiness,
          to inspire people like you from all over the world for the path and the gifts that yoga holds for us.
          I honor a chance to support you to become the best version of yourself,
          to share what I have learnt along the yoga journey and my travel,
          to step into your power and your full potential.
          We all are meant to shine and be a light in this world,
          to serve others and co-create a peaceful place of loving kindness on our planet earth.'
            link='#'
            img={imgEducation}
            imgPosition='right'
          />
        </div>

        <div className={baseStyle.layout}>
          <ContentBlock title='My Mission' link='#' img={imgMyMission} imgPosition='right'>
            <ul>
              <li>Hatha Yoga (200 hrs. Yoga Alliance) in Ashram Yoga with Atma, Coromandel, New Zealand/2017</li>
              <li>
                Ashtanga Vinyasa Yoga (300 hrs. Yoga Alliance) with Ramesh Shetty in Mysore Ashtanga Yoga Shala, Mysore,
                India/2018
              </li>
              <li>Pranayama&alt; Meditation with Sarcha in Yogahub, Perth, WA</li>
            </ul>
            <div>Additional Education:</div>
            <ul>
              <li>Jazz Dance (1 year), Flying Dance Studio, Wuhan, China</li>
              <li>Thai Yoga Bodywork (60hrs.) Mysore, India/2018</li>
            </ul>
          </ContentBlock>
        </div>

        <div className={style.intro}>
          <div className={style.introImg}>
            <h3>I Am Here For You</h3>
          </div>

          <div className={classNames(baseStyle.layout, style.introText)}>
            I Am Here For You I will appreciate a chance to provide inspired support and informed guidance to you
            pursuing varied and changing aims whether is a way to relax and reduce stress from living in a world of
            high-pressure jobs, relationship challenges or the interest in inner harmony, balance, and a sense of
            overall well-being or seeking a sense of spiritual connection or growth. I would love to create safe and
            nurturing yoga classes where you can explore and experience anew the body, mind and spirit. I would
            recommend you to preserve a regular practice to allow amazing things to happen.New sensations arise in the
            body. Just as breathing becomes a profound tool of awareness,the mind becomes clearer and stronger. Emotions
            even out, the heart opens, and the spirit soars. You simply feel better-more vibrant, more alive. I am here
            for you, to create beautiful spaces for an amazing transformation.
          </div>

          <div className={style.learnMore}>Learn more</div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
