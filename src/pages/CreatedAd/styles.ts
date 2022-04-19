import styled from 'styled-components';

export const Container = styled.div`
    max-width: 64rem;//1024px
    margin: 20px auto ;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    color: #6e5425;
    flex-direction: column;
    font-weight: 600;

    form {
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 4px;
        padding: 20px;
        box-shadow: 0px 0px 2px #999;
        max-width: 500px;
        
        input,select ,textarea{
            margin-bottom: 10px;
            margin-top: 2px;
            width: 100%;
            font-size: 1rem;
            padding: 5px;
            border: 1px solid #ddd;
            transition: all ease .3s;
        }

        label {
            button{
                color: #6e5425;
                background: #edcb96;
                padding: 10px 30px;
                border: 0;
                text-transform: uppercase;
                font-size: 1.2rem;
                font-weight: 600;
                margin-top: 25px;
                transition: ease filter  0.3s;

                &:hover{
                    filter: brightness(0.9);
                }
            }
        }
    } 
`;

export const Title = styled.div`

`;
export const Category = styled.div`

`;
export const Price = styled.div`

`;
export const PriceNegotiable = styled.div`
   
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 10px;
    
    
     label{
        margin-left: 250px; 
        margin-right: 10px;
        font-size: 1.2rem;
        font-weight: 500;
    }

    input{
        display: flex;
        flex: 1;
        /* margin-top: 15px; */
        cursor: pointer;
    }
`;
export const Description = styled.div`
    textarea{
        height: 150px;
        resize: none;
    }
`;

export const Imagens = styled.div`


`;