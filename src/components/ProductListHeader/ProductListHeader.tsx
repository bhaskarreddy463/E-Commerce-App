import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import Style from './style';

interface IProps {
  titleName: string;
  onSearchChange?: Function;
}

const ProductListHeader: React.FC<IProps> = ({ titleName, onSearchChange }) => {
  const navigate = useNavigate();

  const handleCartButtonClick = () => {
    navigate('/cart');
  };

  return (
    <Style.ProductHeader>
      <h2>{titleName}</h2>
      {onSearchChange && (
        <Style.SearchInput>
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <input
            type='text'
            placeholder='Search for product'
            onChange={(e) => onSearchChange(e.target.value.toLowerCase())}
          />
        </Style.SearchInput>
      )}
      <Style.SearchCart>
        <Style.CartButton onClick={handleCartButtonClick}>
          Cart
          <FontAwesomeIcon icon={faShoppingCart} />
        </Style.CartButton>
      </Style.SearchCart>
    </Style.ProductHeader>
  );
}

export default ProductListHeader;
