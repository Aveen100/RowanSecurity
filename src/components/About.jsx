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
        animateCounter('support', 2000, 1000)
        animateCounter('uptime', 50, 1200)

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
            animateCounter('support', 2000, 1000)
            animateCounter('uptime', 50, 1200)

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
        [key]: key === 'uptime' ? Math.floor(easeOutQuart * target) + '+' :
               Math.floor(easeOutQuart * target) + '+'
      }))

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }

  const values = [
    {
      icon: '✅',
      title: 'Full Compliance',
      description: 'Every worker we supply is fully vetted, right-to-work checked, and compliant with UK employment law.'
    },
    {
      icon: '⚡',
      title: 'Fast Deployment',
      description: 'Rapid turnaround on staffing requests — we supply reliable workers at short notice to meet your deadlines.'
    },
    {
      icon: '🤝',
      title: 'Dedicated Partnership',
      description: 'We work as an extension of your business, understanding your needs and delivering consistent workforce solutions.'
    },
    {
      icon: '🏆',
      title: 'Quality Workforce',
      description: 'Pre-screened, experienced, and motivated workers who are ready to contribute from day one.'
    }
  ]

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className={`about-content ${isVisible ? 'animate-in' : ''}`}>
          <div className="about-text">
            <h2 className="about-title">About Rowan Solutions UK Limited</h2>
            <div className="about-description">
              <p>
                Rowan Solutions UK Limited is a leading labour provider and employment agency serving businesses
                across the UK since 2003. We specialise in supplying skilled, compliant, and reliable workers to
                industries including warehousing, logistics, manufacturing, healthcare, and hospitality.
              </p>
              <p>
                From our base in Manchester, we manage a large pool of pre-vetted workers who are ready to
                integrate seamlessly into your operations. Our dedicated account managers ensure every placement
                is handled with professionalism, from initial briefing through to on-site management.
              </p>
              <p>
                At Rowan Solutions, we are more than just a staffing agency — we are your workforce partner.
                Whether you need temporary cover, a permanent hire, or a fully managed on-site labour solution,
                we tailor our services to meet your exact requirements with a single point of contact.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">{counters.clients}</div>
                <div className="stat-text">Client Businesses</div>
              </div>
              <div className="stat">
                <div className="stat-number">{counters.experience}</div>
                <div className="stat-text">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">{counters.support}</div>
                <div className="stat-text">Workers Placed</div>
              </div>
              <div className="stat">
                <div className="stat-number">{counters.uptime}</div>
                <div className="stat-text">Industries Served</div>
              </div>
            </div>
          </div>

          <div className="about-values">
            <h3 className="values-title">Why Choose Us</h3>
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
