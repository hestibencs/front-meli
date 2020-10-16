import React from 'react';
import './style.scss';

import logoML from '../../assets/img/Logo_ML@2x.png.png.png'
import { InputSearch } from '../inputs/input-search';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar-container container">
                <div className="row">
                    <div className="navbar-container__search offset-1 col-10">
                        <img className="navbar-container__search--logo" src={logoML} alt="Logo Mercado Libre" />
                        <div className="navbar-container__search--input">
                            <InputSearch />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Navbar;
