import * as React from 'react'
import * as style from './content-block.css'

interface Props {
  imgPosition: 'left' | 'right'
  img: string
  title: string
  content?: string
  link: string
  children?: React.ReactNode
}

export const ContentBlock: React.FunctionComponent<Props> = (props: Props): JSX.Element => {
  const img = (
    <div className={style.img}>
      <img src={props.img} />
    </div>
  )

  return (
    <div className={style.contentBlock}>
      {props.imgPosition === 'left' ? img : null}

      <div className={style.content}>
        <div className={style.title}>{props.title}</div>
        {props.children ? props.children : <div className={style.text}>{props.content}</div>}
        <div className={style.learnMore}>LEARN MORE</div>
      </div>

      {props.imgPosition === 'right' ? img : null}
    </div>
  )
}
