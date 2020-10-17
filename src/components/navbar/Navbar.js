import React from 'react';
import './style.scss';

import logoML from '../../assets/img/Logo_ML@2x.png.png.png'
import { InputSearch } from '../inputs/input-search';
import { withRouter } from 'react-router-dom';
// import { Link, Redirect, useHistory } from 'react-router-dom';

class Navbar extends React.Component {

    state = {
        form: {
            search: ''
        }
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                search: e.target.value,
            },
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { history } = this.props;
        history.push(`/items?search=${this.state.form.search}`);
    };

    render() {
        return (
            <div className="navbar-container container">
                <div className="row">
                    <div className="navbar-container__search offset-1 col-10">
                        <img className="navbar-container__search--logo" src={logoML} alt="Logo Mercado Libre" />
                        <div className="navbar-container__search--input">
                            <form onSubmit={this.handleSubmit}>
                                <InputSearch
                                    onChange={this.handleChange}
                                    formValues={this.state.form.search}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Navbar);
