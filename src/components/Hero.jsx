import React, { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [heroCounters, setHeroCounters] = useState({
    clients: 0,
    monitoring: 0,
    experience: 0
  })
  useEffect(() => {
    setIsVisible(true)

    // Start hero counter animations immediately (no typing animation for now)
    setTimeout(() => {
      animateHeroCounter('clients', 500, 2500)
      animateHeroCounter('monitoring', 24, 1500)
      animateHeroCounter('experience', 15, 2000)
    }, 1000)
  }, [])

  const animateHeroCounter = (key, target, duration) => {
    const start = Date.now()
    const step = () => {
      const progress = Math.min((Date.now() - start) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)

      setHeroCounters(prev => ({
        ...prev,
        [key]: key === 'monitoring' ? Math.floor(easeOutQuart * target) + '/7' :
               Math.floor(easeOutQuart * target) + '+'
      }))

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }

  const scrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
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
            Professional security solutions for businesses and individuals across the UK.
            Trust, reliability, and cutting-edge technology for comprehensive protection.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToServices}>
              Our Services
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Get Quote
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
            <div className="stat-label">Monitoring</div>
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
