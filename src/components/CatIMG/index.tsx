import React from 'react';
import './styles.scss';
import { CatIMGProps } from '../../store/types';

const CatIMG: React.FC<CatIMGProps> = ({ url, key }) => {
  return (
    <div className='cat-container' key={key}>
      <img src={url} alt='cat-img' className='cat-container-image' />
    </div>
  );
};

export default React.memo(CatIMG);
