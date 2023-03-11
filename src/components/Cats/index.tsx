import React, { useState, useEffect, useCallback } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import Categories from '../Categories';
import CatIMG from '../CatIMG';
import { fetchCategories } from '../../store/thunks/fetchCategories';
import { fetchCategoriedCats } from '../../store/thunks/fetchCategoriedCat';
import { RootState, AppDispatch } from '../../store/types';
import './styles.scss';

const Cats: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const { isLoading, categories, categoryId, cats, error } = useAppSelector(
    (state: RootState) => state.cats
  );

  const [page, setPage] = useState(1);

  const changePage = useCallback(() => {
    setPage(1);
  }, []);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategoriedCats({ id: categoryId, page }));
  }, [categoryId, page, dispatch]);

  const seeMoreCats = () => {
    setPage(page + 1);
  };

  return (
    <>
      <div className='categoriesFlexbox'>
        {categories?.map((category) => (
          <Categories key={category.id} {...category} changePage={changePage} />
        ))}
      </div>
      <div className='loadingDiv'>{isLoading && '...Loading'}</div>
      <div className='errorDiv'>
        {error && 'There was an error while fatching the data'}
      </div>
      <div className='catGrid'>
        {cats?.map((cat) => (
          <div key={cat.id}>
            <CatIMG url={cat.url} key={cat.id} />
          </div>
        ))}
        <button onClick={seeMoreCats} className='loadMoreBtn'>
          More cats please!
        </button>
      </div>
    </>
  );
};

export default Cats;
