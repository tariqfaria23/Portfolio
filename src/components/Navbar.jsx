import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <span className="rect-1"></span>
        <span className="rect-2"></span>
        <span className="square"></span>
        <span className="text">F.</span>
      </div>
      <div className="links">
        <a href="#skills">skills</a>
        <a href="#projects">my projects</a>
        <a href="#contact">contact me</a>
      </div>
    </nav>
  )
}

export default Navbar
