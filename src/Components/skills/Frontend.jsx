import React from 'react'

function Frontend() {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Languages</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                    <i className='bx bxl-html5 skills-icon'></i>
                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data">
                    <i className='bx bxl-css3 skills-icon'></i>
                        <div>
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data">
                    <i className='bx bxl-javascript skills-icon' ></i>
                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                 
                    <div className="skills__data">
                    <i className='bx bxl-php skills-icon' ></i>
                        <div>
                            <h3 className="skills__name">PHP</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                    <i className='bx bxl-c-plus-plus skills-icon' ></i>
                        <div>
                            <h3 className="skills__name">C++</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                    <i class='bx bxl-c-plus-plus skills-icon' ></i>
                        <div>
                            <h3 className="skills__name">C</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend
