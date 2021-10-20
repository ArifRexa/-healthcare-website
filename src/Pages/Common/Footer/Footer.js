import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <div className="footer-style mt-5 bg-primary text-light d-flex justify-content-center align-items-center">

                <div className=" text-center mt-2" fixed="bottom">
                    <h2>KBO Hospital Gulshan Location</h2><br />
                    <h6>

                    Plot 15, Road 71, Gulshan,<br />
                    Dhaka-1212 <br />
                    Bangladesh
                    Tel:
                    +8802 8836444
                    +8802 8836000 <br />
                    Fax: +88 02 8836446 <br />
                    Email: info@uhlbd.com
                    </h6><br />
                    <p> Copyright issue &copy; KBO-Hospital.com 2021 </p></div>
            </div>


        </div>
    );
};

export default Footer;