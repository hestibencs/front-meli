import React from 'react';
import { Navbar } from '../navbar';

import './style.scss';

class Layout extends React.Component {
    render() {
        return (
            <div className="layout-container">
                <div className="layout-container__nav-bar">
                    <Navbar />
                </div>
                <div className="layout-container__body">
                    {/* <Breadcrumb /> */}
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout;
