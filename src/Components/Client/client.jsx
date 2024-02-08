import React from 'react';
import './client.scss';

import Footer from "../footer/footer";

const Client = () => {
    return (
        <>

            <div className='client-container'>
                <div className='client-heading'>
                    <p>Our <span>Client</span></p>
                </div>
                <img src={require("../../Assets/Client/handshake.gif")} className="handshake" alt="Handshake" loading="lazy" />

                <div className="sponsorship-logo">
                    <img src={require("../../Assets/Client/Astro.png")} alt='Logo of Astro Company' className='main-logo' loading="lazy" />
                    <div className="other-logos">
                        <img src={require("../../Assets/Client/softhat.png")} alt='Logo of Softhat Company' loading="lazy" />
                        <img src={require("../../Assets/Client/ing.png")} alt='Logo of ING Skills Academy' loading="lazy" />
                    </div>
                </div>
            </div>


            <div className="max">
                <Footer />
            </div>
        </>

    );
};

export default Client;
