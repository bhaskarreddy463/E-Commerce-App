import styled from "styled-components";

const DetailHeader = styled.div`
    width: 100%;
    display: flex;
    border-bottom: 1px solid #ccc;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
    position: fixed;
    justify-content: space-between;
    top: 0; 
    background-color: white;
    h2 {
        margin-left: 50px;
    }
`;

const ProductDetail = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
    margin-top: 70px;
    background-color: #f1f3f6;
`;

const DetailContent = styled.div`
        display: flex;
        background-color: #fff;
        border: 1px solid #e0e0e0;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        overflow: hidden;
`;

const DetailImages = styled.div`
    flex: 1;
    padding: 20px;
    width: 350px;

    img {
        max-width: 100%;
        height: auto;
    }
`;

const ProductDetailInfo = styled.div`
    flex: 2;
    padding: 20px;

    h2 {
        font-size: 24px;
        margin-bottom: 10px;
    }

    p {
        font-size: 16px;
        color: #333;
        margin-bottom: 10px;
    }
`;

const AddCartBtn = styled.button`
    background-color: #ff9f00;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 30px;
    svg {
        margin-right: 10px;
    }
`;

const StyledComponents = {
    DetailHeader,
    ProductDetail,
    DetailContent,
    DetailImages,
    ProductDetailInfo,
    AddCartBtn,
}

export default StyledComponents;