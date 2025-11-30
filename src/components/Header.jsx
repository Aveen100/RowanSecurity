import React, { useState, useEffect, useCallback, useRef } from 'react'
import logo from '../assets/RowanSecurity2.png'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scrollTimeoutRef = useRef(null)

  const handleScroll = useCallback(() => {
    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      cancelAnimationFrame(scrollTimeoutRef.current)
    }

    // Use requestAnimationFrame for smooth throttling
    scrollTimeoutRef.current = requestAnimationFrame(() => {
      setIsScrolled(window.scrollY > 50)
    })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) {
        cancelAnimationFrame(scrollTimeoutRef.current)
      }
    }
  }, [handleScroll])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="nav-container">
          <div className="logo-container">
            <img src={logo} alt="Rowan Security UK Limited" className="logo" />
          </div>

          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a onClick={() => scrollToSection('hero')} className="nav-link">Home</a>
            <a onClick={() => scrollToSection('services')} className="nav-link">Services</a>
            <a onClick={() => scrollToSection('about')} className="nav-link">About</a>
            <a onClick={() => scrollToSection('contact')} className="nav-link">Contact</a>
          </div>

          <div className="nav-toggle" onClick={toggleMenu}>
            <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
