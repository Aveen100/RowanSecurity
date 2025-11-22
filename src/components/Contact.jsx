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
      details: ['+44 20 1234 5678', '+44 161 987 6543'],
      description: 'Mon-Fri: 9AM-6PM'
    },
    {
      icon: '📧',
      title: 'Email',
      details: ['info@rowansecurity.co.uk', 'support@rowansecurity.co.uk'],
      description: 'We respond within 24 hours'
    },
    {
      icon: '📍',
      title: 'Office',
      details: ['123 Security Street', 'London, EC1A 1BB', 'United Kingdom'],
      description: 'Visit us for consultations'
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Ready to enhance your security? Contact our experts for a free consultation
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
