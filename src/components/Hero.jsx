import React, { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Static counter values for better performance
  const heroCounters = {
    clients: '500+',
    workers: '2000+',
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
            <span className="hero-title-main">Your Trusted</span>
            <span className="hero-title-secondary">Labour & Staffing Partner</span>
          </h1>
          <p className="hero-subtitle">
            Connecting businesses with skilled, compliant, and dedicated workers across industrial,
            warehousing, logistics, healthcare, and hospitality sectors throughout the UK.
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
            <div className="stat-label">Client Businesses</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{heroCounters.workers}</div>
            <div className="stat-label">Workers Placed</div>
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
