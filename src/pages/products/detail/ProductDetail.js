import React from 'react';
import { Breadcrumb } from '../../../components/breadcrumb';
import { Button } from '../../../components/button';

import './style.scss';

class ProductDetail extends React.Component {
    render() {
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
                                        src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
                                        alt="Imagen Item"
                                    />
                                </div>
                                <div className="product-detail-container__info">
                                    <div className="product-detail-container__info--quantity-sold">
                                        Nuevo - 234 vendidos
                                    </div>
                                    <div className="product-detail-container__info--product-name">
                                        Deco Reverse
                                        Sombrero Oxford
                                    </div>
                                    <div className="product-detail-container__info--price">
                                        $ 1.980
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
                                    Toca colocar mucho texto aqui, vamos a ver como nos va con eso
                                    Toca colocar mucho texto aqui, vamos a ver como nos va con eso
                                    Toca colocar mucho texto aqui, vamos a ver como nos va con eso
                                    Toca colocar mucho texto aqui, vamos a ver como nos va con eso
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="product-detail-container container">
                    <div className="row">
                        <div className="offset-1 col-7">
                            <img
                                className="product-detail-container__photos"
                                src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
                                alt="Imagen Item"
                            />
                        </div>
                        <div className="col-3">
                            <div className="product-detail-container__info">
                                <div className="product-detail-container__info--quantity-sold">
                                    Nuevo - 234 vendidos
                                </div>
                                <div className="product-detail-container__info--product-name">
                                    Deco Reverse
                                    Sombrero Oxford
                                </div>
                                <div className="product-detail-container__info--price">
                                    $ 1.980
                                </div>
                                <div className="product-detail-container__info--btn-buy">
                                    <button>Comprar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-1 col-10">
                            <div className="product-detail-container__description">
                                <div className="product-detail-container__description--title">
                                    Descripcion del Producto
                                </div>
                                <div className="product-detail-container__description--text">
                                    Toca colocar mucho texto aqui, vamos a ver como nos va con eso
                                    Toca colocar mucho texto aqui, vamos a ver como nos va con eso
                                    Toca colocar mucho texto aqui, vamos a ver como nos va con eso
                                    Toca colocar mucho texto aqui, vamos a ver como nos va con eso
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

            </React.Fragment>
        );
    }
}

export default ProductDetail;
