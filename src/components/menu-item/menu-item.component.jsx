import React from "react";
import { Link } from "react-router-dom";

import './menu-item.style.scss';

const MenuItem = ({title, arTitle, imageUrl, size}) => (
    <Link className="col-6 col-md-4 col-lg-3 main-color" to={`shop/${title}`}>
        <div className={`${size} menu-item`}>
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="content">
                <h1 className="title main-color">{arTitle.toUpperCase()}</h1>
                <span className="subtitle green-color">SHOP NOW</span>
            </div>
        </div>
    </Link>
)

export default MenuItem;