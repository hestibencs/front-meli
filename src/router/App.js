import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Layout } from '../components/layout';
import { ProductSearch } from '../pages/products/search';
import { ProductList } from '../pages/products/list';
import { ProductDetail } from '../pages/products/detail';
import categoriesReducer from '../store/reducer/categories';
import { NotFound } from '../pages/not-found';

const store = createStore(
  categoriesReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={ProductSearch} />
            <Route exact path="/items" component={ProductList} />
            <Route exact path="/items/:id" component={ProductDetail} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
