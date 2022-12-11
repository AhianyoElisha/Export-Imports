import React from 'react'
import ExportImg from "../../assets/info.png"
import Label from "../../assets/Museum.svg"
import "./exports.css"
import leafImg1 from '../../assets/leaf-branch-2.png'
import leafImg2 from '../../assets/leaf-branch-3.png'

const Exports = () => {
  return (
    <section className="export section" id="export">
      <div className="export__container container grid">
        <div className="image__stack">
          <img src={ExportImg} alt="" className="export__img" />
          <div className="image__hero">
            <div className="hero">
              <h3 className="hero__title">
                Dedication Team
              </h3>
              <p className="hero__description">We have 10 years experience of providing our customers with 
              excellence and commitment</p>
            </div>
          </div>
        </div>
        <div className="export__data">
          <a href='#' className="export__title">Welcome to Mange Exports <i className="uil uil -arrow-right"></i></a>
          <h1 className="export__subtitle">We supply products for your consumption</h1>
          <p className="export__description">Providing full range of high quality services</p>
          <div className="export__label">
            <div className="main__export">
              <img src={Label} alt="" className="label__img" />
              <span className="main__hero">Private Label Products</span>
            </div>
            <p className="label__description">We develop our own brand goods</p>
          </div>
        </div>
      </div>
      <img src={leafImg1} alt="export" className="export__leaf-1" />
      <img src={leafImg2} alt="export" className="export__leaf-2" />
    </section>
  )
}

export default Exports