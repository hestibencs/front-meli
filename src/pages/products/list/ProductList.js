import React from 'react';
import { connect } from "react-redux";
import './style.scss';
import { Breadcrumb } from '../../../components/breadcrumb'
import { ProductItemList } from '../../../components/product-item-list';
import { api } from '../../../utils'
import { withRouter } from 'react-router-dom';
import { setCategories } from '../../../store/actions/categories';

class ProductList extends React.Component {

    state = {
        loading: true,
        error: null,
        data: {
            categories: null,
            items: null
        },
    };

    componentDidMount() {
        const { location } = this.props;
        const { search } = location;
        const queryJson = this.urlToJson(search);
        this.fetchData(!!queryJson.search ? queryJson.search : '');
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.search !== prevProps.location.search) {
            const { location } = this.props;
            const { search } = location;
            const queryJson = this.urlToJson(search);
            this.fetchData(!!queryJson.search ? queryJson.search : '');
        }
    }

    urlToJson = (query) => {
        const search = query.substring(1);
        return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    }

    fetchData = async (query) => {
        this.setState({ loading: true, error: null });

        try {
            const data = await api.items.list(query);
            this.setState({ loading: false, data: data });
            this.props.setCategories(this.state.data.categories);
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }

    basicContainer = (content) => {
        return (
            <div className="container">
                <div className="row">
                    <div className="offset-1">
                        {content}
                    </div>
                </div>
            </div>
        )
    }

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
                <ProductItemList items={this.state.data.items} />
            </React.Fragment>
        );
    }
}

export default withRouter(
    connect(
        null,
        { setCategories }
    )(ProductList)
);
