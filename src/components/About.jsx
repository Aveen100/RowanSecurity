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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
      { threshold: 0.3 }
    )

    const element = document.getElementById('about')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

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
      title: 'Protection First',
      description: 'Your safety and security are our top priorities in every solution we provide.'
    },
    {
      icon: '⚡',
      title: 'Rapid Response',
      description: 'Quick deployment and immediate action when security matters most.'
    },
    {
      icon: '🎯',
      title: 'Precision & Accuracy',
      description: 'Tailored solutions designed specifically for your unique security needs.'
    },
    {
      icon: '🤝',
      title: 'Trust & Reliability',
      description: 'Building lasting relationships through consistent, dependable service.'
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
                With over 15 years of experience in the security industry, Rowan Security UK Limited
                has established itself as a trusted partner for businesses and individuals seeking
                comprehensive security solutions across the United Kingdom.
              </p>
              <p>
                Our team of certified security professionals combines cutting-edge technology with
                proven methodologies to deliver unparalleled protection. We understand that each
                client has unique security requirements, which is why we provide customized solutions
                that adapt to your specific needs.
              </p>
              <p>
                From initial consultation to ongoing maintenance and support, we ensure that your
                security systems remain effective, up-to-date, and fully operational around the clock.
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
