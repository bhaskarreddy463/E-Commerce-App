import styled from "styled-components";

const ProductHeader = styled.div`
    width: 100%;
    display: flex;
    border-bottom: 1px solid #ccc;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
    position: fixed;
    justify-content: space-between;
    top: 0; 
    background-color: white;
    z-index: 999;
    h2 {
        margin-left: 50px;
    }
    button, input {
        display: block;
        font-size: 1.5em;
        font-weight: bold;
        height: 35px;
    }
`;

const SearchCart = styled.div`
    display: flex;
    margin-right: 50px;
    height: 35px;
    margin: auto 55px auto 10px;
`;

const SearchInput = styled.div`
    display: flex;
    width: 370px;
    height: 35px;
    margin: auto 10px;
    button {
        position: absolute;
        background: transparent;
        border: transparent;
        color: #757575;
    }
    input {
        padding-left: 40px;
        border: none;
        border-radius: 5px;
    }
`;

const CartButton = styled.button`
    background-color: transparent;
    border: none;
    color: #f44336;
    cursor: pointer;
    font-weight: 500 !important;
    svg {
        font-size: 25px;
    }
`;

const StyledComponents = {
    ProductHeader,
    SearchCart,
    CartButton,
    SearchInput,
}

export default StyledComponents;