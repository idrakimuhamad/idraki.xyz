import Link from 'next/link'
// import Container from 'react-bulma-components/lib/components/container'
// import Heading from 'react-bulma-components/lib/components/heading'
// import Hero from 'react-bulma-components/lib/components/hero'
// import Navbar from 'react-bulma-components/lib/components/navbar'

export default () => (
  <div className="has-background-light">
    <section className="hero is-light is-bold is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Idraki Muhamad</h1>
          <h2 className="subtitle is-size-3">Front-End Developer & Designer</h2>
        </div>
      </div>
      <div className="hero-foot">
        <div className="container">
          <nav className="tabs">
            <ul>
              <li>
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
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  </div>
)
