import React from 'react';

import './style.scss';

class Button extends React.Component {
    render() {
        return (
            <button className="button-container">{this.props.children}</button>
        );
    }
}

export default Button;
