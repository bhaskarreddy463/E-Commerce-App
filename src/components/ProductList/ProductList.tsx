import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';
import { fetchProducts } from '../../redux/actions';
import Product from '../Product/Product';
import Style from './style';
import ProductListHeader from '../ProductListHeader/ProductListHeader';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.root.products);
  const [query, setQuery] = React.useState('');
  const debouncedSetQuery = debounce((value) => setQuery(value), 300);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products && products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Style.ProductsPage>
      <ProductListHeader titleName='Product Listing' onSearchChange={debouncedSetQuery} />
      <Style.ListParentContainer>
        <Style.ProductListContainer>
          {filteredProducts && filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Style.ProductListContainer>
      </Style.ListParentContainer>
    </Style.ProductsPage>
  );
}

export default ProductList;
