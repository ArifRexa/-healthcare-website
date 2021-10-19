import React from 'react';
import notFound from "../../images/nai.gif"
import "./NotFound.css"

const NotFound = () => {
    return (
        <div>
            <div className="notFound-page-style">

                <img src={notFound} alt="" className="notFound-style mt-5" />
                <h4 className="text-center">No Result Found</h4>
            </div>

        </div>
    );
};

export default NotFound;