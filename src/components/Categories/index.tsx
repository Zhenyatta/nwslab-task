import React, { useCallback } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { setCategoryId } from '../../store/slices/catsSlice';
import { CategoriesProps } from '../../store/types';
import './styles.scss';

const Categories: React.FC<CategoriesProps> = ({ name, id, changePage }) => {
  const dispatch = useAppDispatch();

  const getCategoryCat = useCallback(() => {
    changePage();
    dispatch(setCategoryId(id));
  }, [changePage, dispatch, id]);

  return (
    <button onClick={getCategoryCat} className='catCategoryBtn'>
      {name}
    </button>
  );
};

export default Categories;
