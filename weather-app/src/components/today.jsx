import React from "react";
import Search from './search'
import "./today.css";
import sn from "./wallpapers/snow.svg";
import sl from "./wallpapers/sleet.svg";
import h from "./wallpapers/hail.svg";
import t from "./wallpapers/thunderstorm.svg";
import hr from "./wallpapers/heavyrain.svg";
import lr from "./wallpapers/lightrain.svg";
import s from "./wallpapers/showers.svg";
import hc from "./wallpapers/heavycloud.svg";
import lc from "./wallpapers/lightcloud.svg";
import c from "./wallpapers/clear.svg";

export default function today(props) {
    const backgroundImage = [sn, sl, h, t, h, hr, lr, s, hc, lc, c];
    const backgroundImageIndex = [
        "sn",
        "sl",
        "h",
        "t",
        "h",
        "hr",
        "lr",
        "s",
        "hc",
        "lc",
        "c",
    ];
    function convertTime(date) {
        const event = new Date(date*1000);
        return event.toLocaleTimeString();
    }
    return (
        <div>
            <div
                style={{

                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                }}
            >
                <div style={{marginBottom: '20px'}} className="right-panel panel">
                    <Search onClick={props.onClick} />
                    <div>
                        <h4>{props.state.data.weather? props.state.data.weather[0].main : null}</h4>{" "}
                    </div>

                    <div>
                        Sun rise {convertTime(props.state.sun_rise)}{" "}
                        <i className="fas fa-sun"></i>
                    </div>
                    <div>
                        Sun set {convertTime(props.state.sun_set)}{" "}
                        <i className="fas fa-moon"></i>
                    </div>
                </div>
                
                <div className="left-panel panel">
                    <div className="date">
                        {props.state.date[0]}
                        <br />
                    </div>
                    <div className="city">{props.state.title}</div>
                    <div className="temp">{Math.floor(props.state.the_temp[0])}&deg;</div>
                </div>
                <img style={{
                    width: "130px",
                    height: 'intrinsic'
                }} 
                // src={backgroundImage[backgroundImageIndex.indexOf(props.state.data.weather_state_abbr)]}
                src = {c}
                 alt="" />

                
            </div>
        </div>
    );
}
