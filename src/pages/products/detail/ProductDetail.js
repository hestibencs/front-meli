import React from 'react';
import { withRouter } from 'react-router-dom';
import { Breadcrumb } from '../../../components/breadcrumb';
import { Button } from '../../../components/button';
import { api } from '../../../utils';

import './style.scss';

class ProductDetail extends React.Component {

    state = {
        loading: true,
        error: null,
        data: {
            item: null
        },
    };

    componentDidMount() {
        const { match } = this.props;
        this.fetchData(match.params.id);
    }

    fetchData = async (id) => {
        this.setState({ loading: true, error: null });

        try {
            const data = await api.items.detail(id);
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

    render() {

        if (this.state.loading === true) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="offset-1 col-10">
                            Loading...
                        </div>
                    </div>
                </div>
            )
        }

        if (this.state.error) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="offset-1 col-10">
                            Error: {this.state.error.message}
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <React.Fragment>
                <Breadcrumb />
                <div className="container">
                    <div className="row">
                        <div className="offset-1 col-10">
                            <div className="product-detail-container">
                                <div className="product-detail-container__photos">
                                    <img
                                        className="product-detail-container__photos--img"
                                        src={this.state.data.item.picture}
                                        alt="Imagen Item"
                                    />
                                </div>
                                <div className="product-detail-container__info">
                                    <div className="product-detail-container__info--quantity-sold">
                                        {this.state.data.item.condition} - {this.state.data.item.sold_quantity} vendidos
                                    </div>
                                    <div className="product-detail-container__info--product-name">
                                        {this.state.data.item.title}
                                    </div>
                                    <div className="product-detail-container__info--price">
                                        $ {this.state.data.item.price.amount.toLocaleString()}
                                        <span>{
                                            this.state.data.item.price.decimals === 0 ?
                                                '00' : this.state.data.item.price.decimals
                                        }</span>
                                    </div>
                                    <div className="product-detail-container__info--btn-buy">
                                        <Button>Comprar</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-1 col-10">
                            <div className="product-detail-description">
                                <div className="product-detail-description--title">
                                    Descripcion del Producto
                                </div>
                                <div className="product-detail-description--text">
                                    {this.state.data.item.description}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(ProductDetail);
