import React from 'react'
import heroImg from './assets/computer.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            quas adipisci corrupti itaque, perspiciatis similique unde,
            perferendis delectus consequuntur pariatur magnam ipsum illo eius
            culpa reprehenderit iure repellendus enim distinctio.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  )
}

export default Hero
