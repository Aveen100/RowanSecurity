import React, { useEffect, useState } from 'react'
import './Services.css'

const Services = () => {
  const [visibleCards, setVisibleCards] = useState([])

  const services = [
    {
      icon: '🔒',
      title: 'Security Consulting',
      description: 'Expert security assessments and strategic planning to protect your business assets and reduce vulnerabilities.',
      features: ['Risk Assessment', 'Security Audits', 'Strategic Planning', 'Compliance Review']
    },
    {
      icon: '📹',
      title: 'CCTV Systems',
      description: 'Advanced surveillance solutions with 24/7 monitoring and intelligent video analytics for comprehensive coverage.',
      features: ['HD Cameras', 'Night Vision', 'Remote Access', 'Motion Detection']
    },
    {
      icon: '🚪',
      title: 'Access Control',
      description: 'Modern access control systems with biometric authentication, key cards, and mobile credentials.',
      features: ['Biometric Access', 'Smart Locks', 'Visitor Management', 'Time & Attendance']
    },
    {
      icon: '👥',
      title: 'Security Personnel',
      description: 'Professional security guards and personnel trained in the latest security protocols and emergency response.',
      features: ['Trained Guards', 'Event Security', 'Patrol Services', 'Emergency Response']
    },
    {
      icon: '🛡️',
      title: 'Cyber Security',
      description: 'Comprehensive digital protection against cyber threats, data breaches, and online vulnerabilities.',
      features: ['Network Security', 'Data Protection', 'Incident Response', 'Security Training']
    },
    {
      icon: '🏢',
      title: 'Commercial Security',
      description: 'Complete security solutions for businesses including office complexes, retail spaces, and industrial facilities.',
      features: ['Site Surveys', 'Custom Solutions', 'Maintenance', '24/7 Support']
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.dataset.index)
            // Add staggered delay for more dramatic effect
            setTimeout(() => {
              setVisibleCards(prev => [...new Set([...prev, cardIndex])])
            }, cardIndex * 150) // 150ms stagger between cards
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before fully visible
      }
    )

    const cards = document.querySelectorAll('.service-card')
    cards.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="services">
      {/* Existing shapes */}
      <div className="bg-shape-1"></div>
      <div className="bg-shape-2"></div>
      <div className="bg-shape-3"></div>

      {/* Animated particles */}
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      <div className="particle particle-4"></div>
      <div className="particle particle-5"></div>

      {/* Wave backgrounds */}
      <div className="wave-bg wave-1"></div>
      <div className="wave-bg wave-2"></div>
      <div className="wave-bg wave-3"></div>

      {/* Animated grid pattern */}
      <div className="grid-pattern"></div>

      {/* Floating circles */}
      <div className="float-circle-1"></div>
      <div className="float-circle-2"></div>
      <div className="float-circle-3"></div>
      <div className="float-circle-4"></div>

      {/* Geometric shapes */}
      <div className="geo-shape-1"></div>
      <div className="geo-shape-2"></div>
      <div className="geo-shape-3"></div>

      {/* Dots pattern */}
      <div className="dots-pattern"></div>

      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Our Security Services</h2>
          <p className="services-subtitle">
            Comprehensive security solutions tailored to protect your business, assets, and people
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              className={`service-card ${visibleCards.includes(index) ? 'visible' : ''}`}
            >
              <div className="service-icon">
                <span className="icon-emoji">{service.icon}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="feature-item"
                    style={{ '--feature-index': featureIndex }}
                  >
                    <span className="feature-dot"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="service-btn">Learn More</button>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <div className="cta-content">
            <h3>Need a Custom Security Solution?</h3>
            <p>Contact our experts to discuss your specific security requirements</p>
            <button
              className="cta-btn"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
