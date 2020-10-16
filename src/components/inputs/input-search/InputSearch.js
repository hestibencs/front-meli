import React from 'react';
import './style.scss';

import icoSearch from '../../../assets/icons/ic_Search.png'

class InputSearch extends React.Component {
    render() {
        return (
            <div className="input-search-container">
                <input placeholder="Nunca dejes de buscar" className="input-search-container__input" />
                <div className="input-search-container__icon">
                    <img className="input-search-container__icon--img" src={icoSearch} alt="ico search" />
                </div>
            </div>
        );
    }
}

export default InputSearch;
