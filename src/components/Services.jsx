import React, { useEffect, useState, useRef } from 'react'
import './Services.css'

const Services = () => {
  const [visibleCards, setVisibleCards] = useState([])
  const cardsRef = useRef([])

  const services = [
    {
      icon: '🏭',
      title: 'Industrial & Warehouse Staffing',
      description: 'Reliable supply of experienced warehouse operatives, pickers, packers, and forklift drivers to keep your operations running at full capacity.',
      features: ['Pickers & Packers', 'Forklift Operators', 'Warehouse Operatives', 'Short & Long Term', 'Flexible Shifts', 'Same-Day Cover']
    },
    {
      icon: '🚛',
      title: 'Logistics & Distribution',
      description: 'Experienced logistics personnel including drivers, dispatch staff, and transport administrators to support your supply chain.',
      features: ['Delivery Drivers', 'Dispatch Operatives', 'Transport Admin', 'HGV Support', 'Multi-Drop Routes', 'Nationwide Cover']
    },
    {
      icon: '🏥',
      title: 'Healthcare Staffing',
      description: 'Qualified and DBS-checked healthcare professionals for NHS trusts, care homes, and private healthcare providers across the UK.',
      features: ['Care Assistants', 'Support Workers', 'DBS Checked', 'NHS Compliant', 'Registered Nurses', 'Temporary & Permanent']
    },
    {
      icon: '🍽️',
      title: 'Hospitality Staffing',
      description: 'Experienced hospitality staff for hotels, restaurants, events, and catering companies — available at short notice for any shift.',
      features: ['Chefs & Kitchen Staff', 'Front of House', 'Bar Staff', 'Event Crew', 'Housekeeping', 'Flexible Booking']
    },
    {
      icon: '📋',
      title: 'On-Site Management',
      description: 'Dedicated on-site supervisors and team leaders who integrate directly into your operations to manage and coordinate your workforce.',
      features: ['Dedicated Supervisors', 'Team Leaders', 'Attendance Reporting', 'Performance Monitoring', 'Shift Coordination', 'Direct Communication']
    },
    {
      icon: '💼',
      title: 'Payroll & Compliance',
      description: 'Fully managed payroll, right-to-work checks, and employment compliance services so you can focus on running your business.',
      features: ['Right-to-Work Checks', 'Managed Payroll', 'Holiday Pay', 'PAYE & Umbrella', 'IR35 Compliance', 'Weekly Pay']
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
          <h2 className="services-title">Our Staffing Services</h2>
          <p className="services-subtitle">
            Flexible workforce solutions tailored to your industry — from temporary cover to fully managed on-site staffing
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
            <h3>Need a Tailored Staffing Solution?</h3>
            <p>Speak with our team to discuss your workforce requirements — we'll build the right solution for your business</p>
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
