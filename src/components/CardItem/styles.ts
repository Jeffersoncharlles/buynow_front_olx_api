import styled from 'styled-components';

export const Container = styled.article`
    max-width: 250px;
    max-height: 50%;
    padding: 2rem 1.5rem 1.5rem;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    background: #ffff;
    a{
        display: flex;
        flex-direction: column;
        div{
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
        }
        
    }

`;

export const ItemImage = styled.header`
    border-radius: 5px;

    img{
        width: 80%;
        object-fit: contain;
        margin-bottom: 1rem;
        transition: transform .3s;

        &:hover{
            transform: scale(1.1);
        }
    }
`;
export const ItemName = styled.h1`
    color: #8d7140;
    font-weight: bold;
`;
export const ItemPrice = styled.span`
    color: #000;
    font-weight: 500;
`;