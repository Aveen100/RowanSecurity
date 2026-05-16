import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will get back to you within 24 hours.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: '📞',
      title: 'Phone',
      details: ['07405 428259'],
      description: 'Mon–Fri 8am–6pm, urgent enquiries welcome'
    },
    {
      icon: '📧',
      title: 'Email',
      details: ['rowan.secu@gmail.com'],
      description: 'We respond within 24 hours'
    },
    {
      icon: '📍',
      title: 'Office',
      details: ['9 Rectory Road', 'Manchester, M8 5EA'],
      description: 'Head office location'
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">
            Looking for reliable staffing solutions? Get in touch with our team for a free consultation and tailored quote
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="info-title">Contact Information</h3>
            <div className="info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="info-card">
                  <div className="info-icon">
                    <span className="info-emoji">{info.icon}</span>
                  </div>
                  <h4 className="info-title-small">{info.title}</h4>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="info-detail">{detail}</p>
                  ))}
                  <p className="info-description">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
