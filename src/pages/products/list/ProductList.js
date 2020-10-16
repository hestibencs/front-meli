import React from 'react';
import './style.scss';
import { Breadcrumb } from '../../../components/breadcrumb'
import { ProductItemList } from '../../../components/product-item-list';

class ProductList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Breadcrumb />
                <ProductItemList />
            </React.Fragment>
        );
    }
}

export default ProductList;
