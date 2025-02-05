import React from 'react'

function info() {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about_icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle"> 8 Months Working</span>
      </div>
      <div className="about__box">
        <i className="bx bx-briefcase-alt about_icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">10 + projects</span>
      </div>
      <div className="about__box">
        <i className="bx bxs-graduation about_icon"></i>
        <h3 className="about__title"> B.E. </h3>
        <span className="about__subtitle">Computer </span>
      </div>
    </div>

  )
}

export default info
