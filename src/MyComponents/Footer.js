import React from 'react'

 const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "70vh",
    width: "100%",
  }
  return (
    <div>
      <footer className="bg-dark text-light py-3" style={footerStyle}>
        <p className="text-center">
          &copy; {new Date().getFullYear()} My Todo List. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
export default Footer;


