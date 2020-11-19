import React from "react";
import "./style.css";
import campfire from "../../img/campfire.gif";
// import { render } from "@testing-library/react";
import reviewsIcon from "../../img/star.png";
import milestoneIcon from "../../img/milestone_icon.jpg";
import TimelineIcon from "../../img/timeline-icon3.PNG"
import Reviews from "../MainProfile/Reviews";
import Trips from "../MainProfile/Trips";
import Milestones from "../MainProfile/MilestonesComponent";
import Timeline from "../MainProfile/Timeline";


const MainProfile = (props) => {
    // let userName = props.user.name;
    let userSelectedOption = props.userSelection;

    let icon;
    let content;
    switch (userSelectedOption) {
        case "Trips":
            icon = <img src={campfire} className="contentTitleIcon" alt="profile" />
            content = <Trips />
            break;
        case "Reviews":
            icon = <img src={reviewsIcon} className="contentTitleIcon" alt="stars" />
            content = <Reviews />
            break;
        case "Milestones":
            icon = <img src={milestoneIcon} className="contentTitleIcon" alt="mountain badge" />
            content = <Milestones />
            break;
        case "Timeline":
            icon = <img src={TimelineIcon} className="contentTitleIcon" alt="timeline" />
            content = <Timeline />
            break;
        default: <></>
            break;
    }
    return <>
        <div className="contentAreaStyle" style={{marginBottom:"20%"}}>
            {icon}
            <h3 style={{ textAlign: "start", verticalAlign: "middle", marginTop: "1%", padding: ".5%", display: "inline-block" }}>{userSelectedOption}</h3>
            <hr style={{marginLeft:"3%", marginRight:"3%"}}/>
            {content}
        </div>
        <div>
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        </div>
    </>;
}

export default MainProfile;