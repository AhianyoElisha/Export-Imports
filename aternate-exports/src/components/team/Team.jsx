import React from 'react'
import Team1 from "../../assets/team1.png"
import Team2 from "../../assets/team2.png"
import "./team.css"


const Team = () => {
  return (
    <section className="team section" id="team">
        <div className="team__container container">
            <div className="team__header">
                <h3 className="team__subtitle">Meet us</h3>
                <div className="team__title">OUT TEAM</div>
                <a href="#" className="spec button">LEARN MORE
                <i className="ri-arrow-right-line"></i></a>
            </div>
            <div className="team__card">
                <div className="team__outline">
                    <img  src={Team1} className="team__image" alt=""/>
                    <div className="team__member">
                        <h3 className="member__name">Elvis Presley</h3>
                        <p className="member__position">CEO</p>
                    </div>
                    <div className="team__social">
                    <i className="ri-instagram-line"></i> 
                    </div>
                </div>
            </div>
            <div className="team__card">
                <div className="team__outline">
                    <img  src={Team2} className="team__image" alt=""/>
                    <div className="team__member">
                        <h3 className="member__name">Sarah Lawson</h3>
                        <p className="member__position">Logistics Director</p>
                    </div>
                    <div className="team__social">
                    <i className="ri-instagram-line"></i> 
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team