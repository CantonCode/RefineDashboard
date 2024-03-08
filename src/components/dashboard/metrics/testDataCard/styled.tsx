import styled from "@emotion/styled";

export const DataWrapper = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 5rem;
    }
`;
export const SubHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const Header = styled.div`
    display: flex;
    justify-content: normal;
    align-items: flex-start;
`;
export const Footer = styled.div`
    display: flex;
`;



export const HeaderNumbers = styled.div`
    font-size: 28px;
    
    line-height: 1.2;

    div {
        font-size: 20px;
    }

    img {
        margin-left: 5px;
    }

    @media screen and (max-width: 576px) {
        font-size: 30px;

        div {
            font-size: 20px;
        }
    }
`;
