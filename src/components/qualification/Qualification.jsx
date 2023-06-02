import React from 'react'
import "./qualification.css"

const Qualification = () => {
  return (
    <section className="qualification section">
         <h2 className="section__title">Qualification</h2>
         <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className="qualification__button qualification__active button--flex"> 
                   <i className="uil uil-graduation-cap qualification__icon"></i>Education
                </div>
            </div>

            <div className="qualification__sections">
              <div className="qualification__content qualification__content-active">

                 <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">
                        KIET GROUP OF INSTITUTIONS, AKTU- DELHI NCR
                        </h3>
                        <span className="qualification__subtitle">B.TECH in Computer Science: 7.9 CGPA (till 4th sem)</span>
                        <div className="qualification__calender"> <i className="uil uil-calendar-alt"></i> November 2020 - July 2024 </div>
                    </div>

                    <div>
                      <span className="qualification__rounder"></span>
                      <span className="qualification__line"></span>
                    </div>

                 </div>

                 <div className="qualification__data">
                   <div></div>
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>

                     <div>
                        <h3 className="qualification__title">ARMY PUBLIC SCHOOL, NEW CANTT, PRAYAGRAJ, UTTAR PRADESH (CBSE)</h3>
                        <span className="qualification__subtitle">INTERMEDIATE IN PCM : 79.2 %</span>
                        <div className="qualification__calender"> <i className="uil uil-calendar-alt"></i>April 2018 – April 2019 </div>
                    </div>
                 </div>

                 <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">KENDRIYA VIDYALAYA, NEW CANTT, PRAYAGRAJ, UTTAR PRADESH (CBSE)</h3>
                        <span className="qualification__subtitle">MATRICULATE : 9.4 CGPA</span>
                        <div className="qualification__calender"> <i className="uil uil-calendar-alt"></i> April 2016– April 2017 </div>
                    </div>

                    <div>
                      <span className="qualification__rounder"></span>
                      <span className="qualification__line"></span>
                    </div>

                 </div>

              </div>
            </div>

        </div>
    </section>
   
  )
}

export default Qualification
