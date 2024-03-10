import React from "react";
import Nav from "../Nav";
import teamSvg from "../../public/TEAM-1.png";
import Image from "next/image";
import styles from "/styles/PageTop.module.css";
// import EventHeadig from "../../public/events/event-heading.svg";
function TeamPageTop() {
  return (
    <div className="event-cont">
      <style jsx>{`
        .event-cont {
          background-repeat: no-repeat;
          background-image: url(/bg.jpeg);
          background-size: cover;
          box-shadow: rgb(0 0 0 / 55%) 0px 0px 0px 2000px inset;
        }
        .event_heading {
          width: 50vw
          padding-top: 10%;
          margin: auto;
          padding-bottom: 14%;
        }

        .event_img_container {
        
          width: 100%;

          
        }
        .team_img {
          width: 100%;
        }
        @media (max-width: 500px) : {
          .event_img_container {
            width: 80% !important;
            margin: auto;
          }
        }
      `}</style>
      {/* <Navbar /> */}
      <Nav />
      <div className={styles.event_heading}>
        <div className={styles.event_img_container} style={{}}>
          <Image
            className={styles.team_img}
            src={teamSvg}
            fill
            // sizes="100vw"
          />
        </div>
        {/* <Image src={EventHeadig} width={400} height={130} /> */}
      </div>
      {/* <div className={styles.event_heading}>
        <div className={styles.event_img_container} style={{}}>
          <Image className={styles.team_img} src={teamSvg} alt="teamSvg" />
        </div>
        {/* <Image src={EventHeadig} width={400} height={130} /> 
      </div> */}
    </div>
  );
}

export default TeamPageTop;
