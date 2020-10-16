import React from 'react';

import './style.scss';

class Breadcrumb extends React.Component {
    render() {
        return (
            <div className="breadcrumb-container container">
                <div className="row">
                    <div className="breadcrumb-container__text offset-1 col-10">
                        Aqui va texto
                    </div>
                </div>
            </div>
        );
    }
}

export default Breadcrumb;
