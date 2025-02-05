import React from 'react'

function Tools() {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Tools & Platforms</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                    <i className='bx bxl-github skills-icon' ></i>
                        <div>
                            <h3 className="skills__name">Github</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data">
                    <i className='bx bxl-git skills-icon' ></i>
                        <div>
                            <h3 className="skills__name">Git</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                    <i className='bx bxl-visual-studio skills-icon' ></i>
                        <div>
                            <h3 className="skills__name">VS Code</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                 
                  
                    <div className="skills__data">
                        <i className="bx bx-badge-check skills-icon"></i>
                        <div>
                            <h3 className="skills__name">Elementor</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-badge-check skills-icon"></i>
                        <div>
                            <h3 className="skills__name">WPBakery</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tools
