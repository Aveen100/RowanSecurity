import React, { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Static counter values for better performance
  const heroCounters = {
    clients: '500+',
    monitoring: '24/7',
    experience: '15+'
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView()
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className={`hero-text ${isVisible ? 'animate-in' : ''}`}>
          <h1 className="hero-title">
            <span className="hero-title-main">Securing Your</span>
            <span className="hero-title-secondary">Future Today</span>
          </h1>
          <p className="hero-subtitle">
            Professional security services including waking watch, fire wardens, CCTV monitoring,
            security guards, fire alarm monitoring, and key holding across the UK.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToServices}>
              Our Services
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView()}>
              Get Free Quote
            </button>
          </div>
        </div>
        <div className={`hero-stats ${isVisible ? 'animate-in-delay' : ''}`}>
          <div className="stat-item">
            <div className="stat-number">{heroCounters.clients}</div>
            <div className="stat-label">Clients Protected</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{heroCounters.monitoring}</div>
            <div className="stat-label">24/7 Monitoring</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{heroCounters.experience}</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-text">Scroll to explore</div>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

export default Hero
