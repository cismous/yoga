import * as classNames from 'classnames'
import * as React from 'react'
import * as style from './home.css'
import { Footer } from '../../component/footer/footer'

const getWidth = (): number => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
const getHeight = (): number =>
  window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
export const Home = (): JSX.Element => {
  const [navIndex, updateNavIndex] = React.useState(0)
  const [width, setWidth] = React.useState(getWidth)
  const [height, setHeight] = React.useState(getHeight)

  const bannerStyle = React.useMemo(
    () => ({
      height,
    }),
    [width, height],
  )

  React.useEffect(() => {
    const updateStyle = (): void => {
      setWidth(getWidth())
      setHeight(getHeight())
    }
    window.addEventListener('resize', updateStyle)
    return () => window.removeEventListener('resize', updateStyle)
  })

  return (
    <div className={style.home}>
      <div style={bannerStyle} className={style.bannerWrapper}>
        <div className={style.banner}>
          <div
            style={bannerStyle}
            className={classNames(style.bannerImg, style.bannerImg1, { [style.bannerImgActive]: navIndex === 0 })}
          >
            <div className={style.bannerDesc}>
              <h3>
                DO YOUR PRACTICE AND <br /> ALL IS COMING
              </h3>
            </div>
          </div>

          <div
            style={bannerStyle}
            className={classNames(style.bannerImg, style.bannerImg2, { [style.bannerImgActive]: navIndex === 1 })}
          >
            <div className={style.bannerDesc}>
              <h3>
                TAKING YOGA BEYOND <br /> THE MAT training
              </h3>
            </div>
          </div>

          <div
            style={bannerStyle}
            className={classNames(style.bannerImg, style.bannerImg3, { [style.bannerImgActive]: navIndex === 2 })}
          >
            <div className={style.bannerDesc}>
              <h3>
                YOU CANNOT DO YOGA <br /> YOGA IS YOUR NATURAL STATE
              </h3>
            </div>
          </div>
        </div>

        <div className={style.nav}>
          <div
            onClick={() => updateNavIndex(0)}
            className={classNames(style.navItem, { [style.navItemActive]: navIndex === 0 })}
          >
            <span>1</span>
          </div>

          <div
            onClick={() => updateNavIndex(1)}
            className={classNames(style.navItem, { [style.navItemActive]: navIndex === 1 })}
          >
            <span>2</span>
          </div>

          <div
            onClick={() => updateNavIndex(2)}
            className={classNames(style.navItem, { [style.navItemActive]: navIndex === 2 })}
          >
            <span>3</span>
          </div>
        </div>
      </div>

      <div className={style.banner1}>
        <p>Welcome Home</p>
        <p>“A journey of a thousand miles begins with a single step.” </p>
        <p>–Lao Tzu</p>
      </div>

      <div className={style.banner2}>
        <p className={style.banner2Content}>
          Hi, my name is Xiaofang from China, living in Australia, I am a dedicated yogi, passionate yoga teacher with
          advanced training in Ashtanga Vinyasa, inspired by my teachers, yogic friends along with my travels, I work on
          providing classes which spread sunshine to my students as well as lead them to the path of feeling stronger
          both physically and mentally. Motivating them to find their healthiest and best version of self by creating
          and adapting powerful teaching plans,sharing all I have learnt from the yoga world and bring forth a love and
          respect for the art of yoga. I continued to dive into the teachings, philosophy, anatomy and practice of yoga.
          Not only as a physical practice, but more an adventure, exploration for self-realization, and working on
          becoming the best version of myself.
        </p>
      </div>

      <div className={style.banner3}>
        <div className={style.banner3Content}>
          <h3>Call For Asian Friends</h3>

          <p>
            Whether you are a beginner or an expert yogi, young or old, from the far East or West, the ancient art of
            yoga is for absolutely everyone. I was shocked to realize while practicing in studio in western countries,
            seldom did I see Asian students. Where are you my Asian friends, it is time to show up to yoga classes and
            start the inner journey,get yourself on one of my yoga class for a range of mental and physical benefits.
            Private yoga sessions are also available and customized to ensure you meet your health goals and develop the
            areas you wish to improve on.
          </p>
        </div>

        <div className={style.banner3Img} />
      </div>

      <div className={style.banner4}>
        <div className={style.banner4Img} />

        <div className={style.banner4Content}>
          <h3>Call For Asian Friends</h3>

          <p>
            Whether you are a beginner or an expert yogi, young or old, from the far East or West, the ancient art of
            yoga is for absolutely everyone. I was shocked to realize while practicing in studio in western countries,
            seldom did I see Asian students. Where are you my Asian friends, it is time to show up to yoga classes and
            start the inner journey,get yourself on one of my yoga class for a range of mental and physical benefits.
            Private yoga sessions are also available and customized to ensure you meet your health goals and develop the
            areas you wish to improve on.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
