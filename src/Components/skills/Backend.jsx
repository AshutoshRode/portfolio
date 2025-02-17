import React from 'react'

function Backend() {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frameworks & Libraries</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                    <i className='bx bxl-react skills-icon' ></i>
                        <div>
                            <h3 className="skills__name">React.js</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                    <i className='bx bxl-wordpress skills-icon' ></i>
                        <div>
                            <h3 className="skills__name">WordPress</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                    <i className='bx bxl-bootstrap skills-icon' ></i>
                        <div>
                            <h3 className="skills__name">BootStrap</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">

                    <div className="skills__data">
                    <i className='bx bxl-angular skills-icon' ></i>
                        <div>
                            <h3 className="skills__name">AngularJS</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    {/* <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">MySQL</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div> */}
                    <div className="skills__data">
                    <i className='bx bxl-tailwind-css skills-icon' ></i>
                        <div>
                            <h3 className="skills__name">Tailwind.CSS</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Backend
