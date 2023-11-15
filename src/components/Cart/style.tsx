import styled from "styled-components";

const CartHeader = styled.div`
    width: 100%;
    display: flex;
    border-bottom: 1px solid #ccc;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
    position: fixed;
    justify-content: space-between;
    top: 0; 
    z-index: 999;
    background-color: white;
    h2 {
        margin-left: 50px;
    }
`;

const TitlePrice = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 20px;
    height: 100%;
    span {
        font-weight: bold;
    }
`;

const CartPage = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
    margin-top: 70px;
    height: 100vh;
    background-color: #f1f3f6;
`;

const ProductDesc = styled.div`
    display: flex;
    align-items: start;
`;

const CartProduct = styled.li`
    display: flex;
    justify-content: space-between;
    border: 1px solid #ddd;
    padding: 30px;
    background-color: #ffffff;
    margin-bottom: 20px;
    position: relative;
`;

const CrossMark = styled.button`
    background-color: transparent;
    border: none;
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 20px;
    cursor: pointer;
`;

const QuantityControls = styled.div`
    margin: auto 0px 10px 0px;
    button {
        background-color: #830000;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        height: 30px;
        width: 30px;
    }
`;

const MinusButton = styled.button`
    background-color: #830000;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    height: 30px;
    width: 30px;
    margin-right: 10px;
    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

const PlusButton = styled.button`
    background-color: #830000;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    height: 30px;
    width: 30px;
    margin-left: 10px;
    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

const RemoveButton = styled.button`
    background-color: #830000;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin: auto 0px 5px 20px;
`;

const StyledComponents = {
    CartHeader,
    CartPage,
    CartProduct,
    ProductDesc,
    RemoveButton,
    QuantityControls,
    TitlePrice,
    MinusButton,
    PlusButton,
    CrossMark,
}

export default StyledComponents;
