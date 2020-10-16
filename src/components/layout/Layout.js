import React from 'react';
import { Navbar } from '../navbar';

import './style.scss';

function Layout(props) {
    return (
        <div className="layout-container">
            <div className="layout-container__nav-bar">
                <Navbar />
            </div>
            <div className="layout-container__body">
                {props.children}
            </div>
        </div>
    );
}

export default Layout;
