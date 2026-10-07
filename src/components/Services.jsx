import React, { useEffect, useState, useRef } from 'react'
import './Services.css'

const Services = () => {
  const [visibleCards, setVisibleCards] = useState([])
  const cardsRef = useRef([])

  const services = [
    {
      icon: '👁️',
      title: 'Waking Watch',
      description: '24/7 monitoring and rapid response services to protect your property during non-business hours and emergency situations.',
      features: ['24/7 Monitoring', 'Rapid Response', 'Property Checks', 'Emergency Response', 'Fire Alarm Response', 'Hybrid Solutions']
    },
    {
      icon: '🚨',
      title: 'Fire Wardens',
      description: 'Professional fire safety personnel trained to manage evacuation procedures and ensure building safety compliance.',
      features: ['Evacuation Management', 'Safety Training', 'Compliance Checks', 'Emergency Procedures', 'Building Safety', 'Staff Training']
    },
    {
      icon: '📹',
      title: 'CCTV Monitoring',
      description: 'Advanced surveillance systems with real-time monitoring and intelligent video analytics for comprehensive security coverage.',
      features: ['24/7 Monitoring', 'HD Cameras', 'Remote Access', 'Motion Detection', 'Video Analytics', 'Incident Recording']
    },
    {
      icon: '🛡️',
      title: 'Security Guards',
      description: 'Professional security personnel trained in the latest protocols, providing static security, mobile patrols, and emergency response.',
      features: ['Trained Personnel', 'Static Security', 'Mobile Patrols', 'Emergency Response', 'Access Control', '24/7 Availability']
    },
    {
      icon: '🔥',
      title: 'Fire Alarm Monitoring',
      description: 'Comprehensive fire alarm systems monitoring with immediate response capabilities to protect lives and property.',
      features: ['24/7 Monitoring', 'Immediate Response', 'System Maintenance', 'Compliance Testing', 'Alarm Verification', 'Emergency Protocols']
    },
    {
      icon: '🔑',
      title: 'Key Holding',
      description: 'Secure key management and emergency access services ensuring authorized personnel can access premises when needed.',
      features: ['Secure Storage', 'Emergency Access', 'Authorized Personnel', 'Access Logging', '24/7 Availability', 'Chain of Custody']
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.dataset.index)
            setVisibleCards(prev => [...new Set([...prev, cardIndex])])
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    // Use refs instead of DOM queries for better performance
    cardsRef.current.forEach(card => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="services">
      {/* Minimal background elements for performance */}
      <div className="grid-pattern"></div>

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
              ref={el => cardsRef.current[index] = el}
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
              onClick={() => document.getElementById('contact').scrollIntoView()}
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
