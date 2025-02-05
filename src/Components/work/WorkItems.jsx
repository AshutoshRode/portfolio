import React from 'react'

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className='work__img' />
      <h3 className="work__title">{item.title}</h3>
      <div className="work__button-box">
        <a href={item.link} target='_blank' className="work__button">
          <i className='bx bx-link-external' ></i>
          Demo
          <i className="bx bx-right-arrow-alt work__button-icon" ></i>
        </a>
        <a href={item.repo} target='_blank' className="work__button">
          <i className='bx bxl-github' ></i>
          Repository
          <i className="bx bx-right-arrow-alt work__button-icon" ></i>
        </a>
      </div>


    </div>
  )
}

export default WorkItems
