import React from 'react';
import { withRouter } from 'react-router-dom';
import icoFreeShipping from '../../assets/icons/ic_shipping.png';

import './style.scss';

class ProductItem extends React.Component {
    render() {
        return (
            <div onClick={this.props.onClick} className="product-item-container">
                <div className="product-item-container__product-img">
                    <img
                        className="product-item-container__product-img--img"
                        src={this.props.item.picture}
                        alt="Imagen Item"
                    />
                </div>
                <div className="product-item-container__info">
                    <div className="product-item-container__info--price">
                        $ {this.props.item.price.amount.toLocaleString()}
                        {this.props.item.free_shipping &&
                            (<img src={icoFreeShipping} alt="ico search" />)}
                    </div>
                    <div className="product-item-container__info--description">
                        {this.props.item.title}
                    </div>
                </div>
                <div className="product-item-container__city"></div>
            </div>
        );
    }
}

class ProductItemList extends React.Component {

    handleClick = (id) => {
        const { history } = this.props;
        history.push(`/items/${id}`);
    };

    render() {
        return (
            <div className="product-item-list-container container">
                {this.props.items.map((item, index) => {
                    return (
                        <div className="row" key={item.id}>
                            <div className="offset-1 col-10">
                                <div className="product-item-list-container__item">
                                    <ProductItem onClick={() => this.handleClick(item.id)} item={item} />
                                    {this.props.items.length !== index + 1 && (
                                        <div className="product-item-list-container__item--separator"></div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default withRouter(ProductItemList);
