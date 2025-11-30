import React, { useEffect, useState } from 'react'
import './About.css'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleValues, setVisibleValues] = useState([])
  const [counters, setCounters] = useState({
    clients: 0,
    experience: 0,
    support: 0,
    uptime: 0
  })

  useEffect(() => {
    // Fallback: Show content after a delay on mobile devices to prevent blank screens
    const mobileFallback = setTimeout(() => {
      if (!isVisible && window.innerWidth <= 768) {
        setIsVisible(true)
        animateCounter('clients', 500, 2000)
        animateCounter('experience', 15, 1500)
        animateCounter('support', 24, 1000)
        animateCounter('uptime', 100, 1200)

        values.forEach((_, index) => {
          setTimeout(() => {
            setVisibleValues(prev => [...new Set([...prev, index])])
          }, index * 200)
        })
      }
    }, 1000) // Show after 1 second if intersection observer hasn't triggered

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            clearTimeout(mobileFallback) // Clear fallback if intersection observer triggers
            setIsVisible(true)

            // Start counter animations
            animateCounter('clients', 500, 2000)
            animateCounter('experience', 15, 1500)
            animateCounter('support', 24, 1000)
            animateCounter('uptime', 100, 1200)

            // Animate value cards with stagger
            values.forEach((_, index) => {
              setTimeout(() => {
                setVisibleValues(prev => [...new Set([...prev, index])])
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.2 } // Lower threshold for better mobile detection
    )

    const element = document.getElementById('about')
    if (element) observer.observe(element)

    return () => {
      observer.disconnect()
      clearTimeout(mobileFallback)
    }
  }, [isVisible])

  const animateCounter = (key, target, duration) => {
    const start = Date.now()

    const step = () => {
      const progress = Math.min((Date.now() - start) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)

      setCounters(prev => ({
        ...prev,
        [key]: key === 'support' ? Math.floor(easeOutQuart * target) + '/7' :
               key === 'uptime' ? Math.floor(easeOutQuart * target) + '%' :
               Math.floor(easeOutQuart * target) + (key === 'clients' ? '+' : '+')
      }))

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }

  const values = [
    {
      icon: '🛡️',
      title: '24/7 Protection',
      description: 'Round-the-clock security services ensuring your business is protected at all times.'
    },
    {
      icon: '⚡',
      title: 'Rapid Response',
      description: 'Immediate action and emergency response when security matters most.'
    },
    {
      icon: '👁️',
      title: 'Advanced Monitoring',
      description: 'State-of-the-art surveillance and monitoring systems for comprehensive coverage.'
    },
    {
      icon: '🔥',
      title: 'Fire Safety Excellence',
      description: 'Professional fire safety management and compliance with industry standards.'
    }
  ]

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className={`about-content ${isVisible ? 'animate-in' : ''}`}>
          <div className="about-text">
            <h2 className="about-title">About Rowan Security UK Limited</h2>
            <div className="about-description">
              <p>
                Rowan Security UK Limited has been providing security to businesses across the UK since 2003.
                We offer a comprehensive range of professional security services designed to protect your business,
                assets, and people with the highest standards of reliability and professionalism.
              </p>
              <p>
                From our base in the UK, we manage a team of experienced security professionals who help businesses
                of all sectors and sizes operate smoothly and securely. Our expertise spans waking watch services,
                fire safety management, CCTV monitoring, security personnel, and comprehensive alarm systems.
              </p>
              <p>
                At Rowan Security, we're your one-stop solution for all security needs. Whether you require security
                guards, fire wardens, key holding services, or advanced monitoring systems, we provide tailored packages
                to meet your specific requirements with a single point of contact for your convenience.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">{counters.clients}</div>
                <div className="stat-text">Satisfied Clients</div>
              </div>
              <div className="stat">
                <div className="stat-number">{counters.experience}</div>
                <div className="stat-text">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">{counters.support}</div>
                <div className="stat-text">Support Available</div>
              </div>
              <div className="stat">
                <div className="stat-number">{counters.uptime}</div>
                <div className="stat-text">Uptime Guarantee</div>
              </div>
            </div>
          </div>

          <div className="about-values">
            <h3 className="values-title">Our Core Values</h3>
            <div className="values-grid">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`value-card ${visibleValues.includes(index) ? 'visible' : ''}`}
                >
                  <div className="value-icon">
                    <span className="value-emoji">{value.icon}</span>
                  </div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
