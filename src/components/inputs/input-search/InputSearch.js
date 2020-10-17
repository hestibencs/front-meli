import React from 'react';
import './style.scss';

import icoSearch from '../../../assets/icons/ic_Search.png'

class InputSearch extends React.Component {
    render() {
        return (
            <div className="input-search-container">
                <input
                    placeholder="Nunca dejes de buscar"
                    className="input-search-container__input"
                    onChange={this.props.onChange}
                    value={this.props.value}
                />
                <button className="input-search-container__button">
                    <img className="input-search-container__button--img" src={icoSearch} alt="ico search" />
                </button>
            </div>
        );
    }
}

export default InputSearch;
