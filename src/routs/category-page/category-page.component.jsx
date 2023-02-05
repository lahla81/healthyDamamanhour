import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';
import  Spinner  from '../../components/spinner/spinner.component';
import { selectCategoriesMap, selectIsCategoriesLoading } from '../../store/categories/category.selector';

const CategoryPage = () => {
  const categoriesMap = useSelector(selectCategoriesMap)
  const { category } = useParams();
  const isLoaging = useSelector(selectIsCategoriesLoading)
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className='text-center green-color'>{category.toUpperCase()}</h2>
      {
        isLoaging ? (<Spinner />) : (
          <div className='row my-2'>
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        )
      }
    </Fragment>
  );
};

export default CategoryPage;
