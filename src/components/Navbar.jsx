import React from 'react'

function Navbar(handleLogout) {
  return (
    <div><nav className="nav">
    <div className="heading">GalleryGo</div>
    <div className="list">
      <span className="gallery">Gallery</span>
      <span className="about">About</span>
      <span className="contact">Contact</span>
      <span className='logout' onClick={handleLogout}>logout</span>
    </div>
    <div className="hamburger" id="hamburger">☰</div>
  </nav></div>
  )
}

export default Navbar