import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Product = styled.div`
    width: calc(30% - 10px);
    padding-bottom: 20px;
    border: 1px solid #ddd;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 400px;
    height: 400px;
    margin: 0px 5px 30px 5px;
    .a {
        padding: 10px 10px;
    }
    img {
        max-width: 60%;
        height: 300px;
    }

    h3 {
        font-size: 18px;
        margin-top: 10px;
    }
`;

const PriceAddCart = styled.div`
    display: flex;
    justify-content: space-around;
    p {
        font-size: 16px;
        color: #777;
    }

    button {
        background-color: #ff9f00;
        color: white;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 5px;
        height: 35px;
        margin: auto 0px;
        svg {
            margin-right: 10px;
        }
    }
`;

const ChevronRightIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  color: #333; /* Adjust the color as needed */
`;

const ImageRightArrow = styled.div`
    position: relative;
`;

const StyledComponents = {
    Product,
    PriceAddCart,
    ChevronRightIcon,
    ImageRightArrow,
}

export default StyledComponents;