import React from 'react';
import { connect } from "react-redux";


import './style.scss';

class Breadcrumb extends React.Component {
    render() {
        return (
            <div className="breadcrumb-container container">
                <div className="row">
                    <div className="breadcrumb-container__text offset-1 col-10">
                        {this.props.categories.map((category, index) => {
                            return (<React.Fragment key={index}>
                                {this.props.categories.length === index + 1 ?
                                    <strong>{category}</strong> : `${category} > `}
                            </React.Fragment>)
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default
    connect(({ categories }) => {
        return { categories };
    })(Breadcrumb);
