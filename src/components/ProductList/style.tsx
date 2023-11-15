import styled from 'styled-components';

const ProductsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f1f3f6;
`;

const ListParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 100px 20px;

  @media (min-width: 768px) {
    margin: 100px 50px;
  }
`;

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;

  @media (max-width: 1200px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    padding: 0 10px; /* Adjust padding for smaller screens */
  }
`;

const StyledComponents = {
  ProductsPage,
  ListParentContainer,
  ProductListContainer,
};

export default StyledComponents;
