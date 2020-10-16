import React from 'react';
import { withRouter } from 'react-router-dom';

import './style.scss';

class ProductItem extends React.Component {
    render() {
        return (
            <div onClick={this.props.onClick} className="product-item-container">
                <div className="product-item-container__product-img">
                    <img
                        className="product-item-container__product-img--img"
                        src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
                        alt="Imagen Item"
                    />
                </div>
                <div className="product-item-container__info">
                    <div className="product-item-container__info--price">
                        $ 1.980
                    </div>
                    <div className="product-item-container__info--description">
                        Pajarraco es el que se esta mostrando
                    </div>
                    <div className="product-item-container__info--state">
                        Completo Unico!
                    </div>
                </div>
                <div className="product-item-container__city">
                    Capital Federal
                </div>
            </div>
        );
    }
}

class ProductItemList extends React.Component {

    handleClick = e => {
        e.preventDefault();
        const { history } = this.props;
        history.push(`/items/7`);
    };

    render() {
        return (
            <div className="product-item-list-container container">
                <div className="row">
                    <div className="offset-1 col-10">
                        <div className="product-item-list-container__item">
                            <ProductItem onClick={this.handleClick} />
                            <div className="product-item-list-container__item--separator"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ProductItemList);
