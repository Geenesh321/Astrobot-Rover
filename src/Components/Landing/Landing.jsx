import React, { useState, useEffect } from "react";
import "./landing.scss";

import Social from "../Social/social";
import Testimonial from "../Testimonial/testimonial"
import Client from "../Client/client";

const Landing = () => {
    const [scrollValue, setScrollValue] = useState(0);
    const handleScroll = () => {
        setScrollValue(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className="land_Container">

                <img alt="Logo-Astrobot" src={require("/Astrobot-Rover/Frontend/src/Assets/Landing/Logo1.png")} className="logo" />

                <div className="land_Img">
                    <img
                        alt=""
                        src={require("/Astrobot-Rover/Frontend/src/Assets/Landing/space.jpg")}
                        className="image"
                        loading="lazy"
                    />

                    <img
                        alt=""
                        src={require("/Astrobot-Rover/Frontend/src/Assets/Landing/tress.png")}
                        className="image"
                        loading="lazy"
                        style={{
                            top: `${20 - scrollValue * 0.484}px`,
                        }}
                    />

                    <img
                        alt=""
                        src={require("/Astrobot-Rover/Frontend/src/Assets/Landing/river.png")}
                        className="image"
                        loading="lazy"
                    />
                    <img
                        alt=""
                        src={require("/Astrobot-Rover/Frontend/src/Assets/Landing/rock-left.png")}
                        className="image"
                        loading="lazy"
                    />

                    <img
                        alt=""
                        src={require("/Astrobot-Rover/Frontend/src/Assets/Landing/rock-right.png")}
                        className="image"
                        loading="lazy"
                    />
                    <img
                        alt=""
                        src={require("/Astrobot-Rover/Frontend/src/Assets/Landing/bridge-left.png")}
                        className="image"
                        loading="lazy"
                        style={{
                            left: `${210 - scrollValue * 0.484}px`,
                        }} />
                    <img
                        alt=""
                        src={require("/Astrobot-Rover/Frontend/src/Assets/Landing/bridge-right.png")}
                        className="image"
                        loading="lazy"
                        style={{
                            left: `${60 + scrollValue * 0.25}px`,
                        }} />

                    <img
                        alt=""
                        src={require("/Astrobot-Rover/Frontend/src/Assets/Landing/pigeon.png")}
                        className="image"
                        loading="lazy"
                        style={{
                            top: `${-65 - scrollValue * 0.55}px`,
                            left: `${60 + scrollValue * 0.25}px`
                        }} />

                    <img
                        alt=""
                        src={require("/Astrobot-Rover/Frontend/src/Assets/Landing/pegion2.png")}
                        className="image"
                        loading="lazy"
                        style={{
                            left: `${210 - scrollValue * 0.484}px`,
                            top: `${135 - scrollValue * 0.182}px`,
                        }} />
                </div>

                <div className="land_text"
                    style={{ top: `calc(40% + ${scrollValue * 0.8}px)` }}>
                    <h2>Fusing Dreams and Tech into </h2>
                    <span>Tomorrow's Reality</span>
                </div>
            </div>
            <Social />

            <div className='Welcome'>
                <h1>“Welcome to the Astrobot Explorer”</h1>
                <p>"Embark on a journey of innovation and discovery with our advanced space
                    rover, designed to chart new territories and unveil the mysteries
                    of the universe." </p>
            </div>

            <Testimonial />
            <Client />
        </>
    );
};


export default Landing;
