import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTrail, animated } from 'react-spring'
import styled from 'styled-components'

const title = ['Idraki ', 'Muhamad']
const subtitle = ['Front-End', ' Developer ', '&', ' Designer']
const footerLinks = [
  { name: 'Github', url: 'https://github.com/idrakimuhamad' },
  { name: 'Dribbble', url: 'https://dribbble.com/idraki' },
  { name: 'CV', url: '/cv' }
]
const config = { mass: 5, tension: 2000, friction: 200 }

const TitleTrail = styled.div`
  position: relative;
  width: 100%;
  font-size: 5em;
  font-weight: 800;
  text-transform: uppercase;
  will-change: transform, opacity;
  overflow: hidden;
`

export default () => {
  const [toggle, set] = useState(false)

  const trail1 = useTrail(title.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : -40,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: -40, height: 0 }
  })

  const trail2 = useTrail(subtitle.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : -40,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: -40, height: 0 }
  })

  const trailFooter = useTrail(footerLinks.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : -40,
    from: { opacity: 0, x: -40 }
  })

  useEffect(() => {
    if (!toggle) set(!toggle)
  })

  return (
    <div className="has-background-light">
      <section className="hero is-light is-bold is-fullheight">
        <div className="hero-body">
          <div className="container">
            <TitleTrail className="title">
              {trail1.map(({ x, height, ...rest }, index) => (
                <animated.div
                  key={title[index]}
                  className="trails-text"
                  style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                  <animated.div style={{ height }}>{title[index]}</animated.div>
                </animated.div>
              ))}
            </TitleTrail>
            {/* <h1 className="title">Idraki Muhamad</h1> */}
            <h2 className="subtitle is-size-3">
              {trail2.map(({ x, height, ...rest }, index) => (
                <animated.span
                  key={subtitle[index]}
                  className="trails-text"
                  style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                  <animated.span style={{ height }}>{subtitle[index]}</animated.span>
                </animated.span>
              ))}
            </h2>
            {/* <h2 className="subtitle is-size-3">Front-End Developer & Designer</h2> */}
          </div>
        </div>
        <div className="hero-foot">
          <div className="container">
            <nav className="tabs">
              <ul>
                {trailFooter.map(({ x, ...rest }, index) => (
                  <animated.li
                    key={footerLinks[index].name}
                    className="trails-text"
                    style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                    <Link href={footerLinks[index].url} passHref>
                      <a>{footerLinks[index].name}</a>
                    </Link>
                  </animated.li>
                ))}
                {/* <li>
                  <Link href="https://github.com/idrakimuhamad" passHref>
                    <a>Github</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://dribbble.com/idraki" passHref>
                    <a>Dribbble</a>
                  </Link>
                </li>
                <li>
                  <Link href="/cv" passHref>
                    <a>CV</a>
                  </Link>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  )
}
