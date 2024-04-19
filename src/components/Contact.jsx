import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
      <div className="block">
        <p className="title">
          contact me at
        </p>
        <div className="links">
          <a href="mailto:moanaofmotunui23@gmail.com"><FaEnvelope className='
          email icon'/></a>
          <a href="https://github.com/tariqfaria23"><FaGithub className='git icon'/></a>
          <a href="https://www.linkedin.com/in/tariqfaria23/"><FaLinkedin className='linkedin icon'/></a>
        </div>
      </div>
    </div>
  )
}

export default Contact
