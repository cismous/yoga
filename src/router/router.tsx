import { Location } from 'history'
import * as classNames from 'classnames'
import * as React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from '../pages/home/home'
import { Yoga } from '../pages/yoga/yoga'
import { About } from '../pages/about/about'
import { Blog } from '../pages/blog/blog'
import { Contact } from '../pages/contact/contact'
import { Travel } from '../pages/travel/travel'
import * as style from './router.css'
import { Header } from '../component/header/header'

export const AppRouter: React.FunctionComponent = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Route
        render={(props: { location: Location }) => {
          return (
            <div className={style.router}>
              <Header />

              <div className={style.routerContent}>
                <TransitionGroup className={style.transitionGroup}>
                  <CSSTransition
                    key={props.location.key}
                    classNames={classNames(style.transitionPage, 'fade')}
                    timeout={500}
                  >
                    <Switch location={props.location}>
                      <Route exact path='/' component={Home} />

                      <Route exact path='/yoga' component={Yoga} />

                      <Route exact path='/about' component={About} />

                      <Route exact path='/travel' component={Travel} />

                      <Route exact path='/contact' component={Contact} />

                      <Route exact path='/blog' component={Blog} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </div>
            </div>
          )
        }}
      />
    </BrowserRouter>
  )
}
