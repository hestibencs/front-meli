import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from '../components/layout';
import { ProductSearch } from '../pages/products/search';
import { ProductList } from '../pages/products/list';
import { ProductDetail } from '../pages/products/detail';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={ProductSearch} />
          <Route exact path="/items" component={ProductList} />
          <Route exact path="/items/:id" component={ProductDetail} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
