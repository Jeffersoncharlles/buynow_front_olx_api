import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 43rem;//700px
    color: #6e5425;
    flex-direction: column;

    p{
        color: #ff0034;
    }
    

    form {
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 4px;
        padding: 20px;
        box-shadow: 0px 0px 2px #999;
        max-width: 500px;
        

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

export const Title = styled.h1``

export const Email = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    
     label{
        width: 200px;
        margin-right: 10px;
        font-size: 1.2rem;
        font-weight: 500;
    }

    input{
        width: 100%;
        font-size: 1.2rem;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
`
export const Password = styled.div`
    display: flex;
    align-items: center;
    
     label{
        width: 200px;
        margin-right: 10px;
        font-size: 1.2rem;
        font-weight: 500;
    }

    input{
        width: 100%;
        font-size: 1.2rem;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
`

export const Check = styled.div`
    display: flex;
    justify-content: flex-end;
    
    
     label{
        margin-top: 10px;
        margin-right: 10px;
        font-size: 1.2rem;
        font-weight: 500;
    }

    input{
        
        margin-top: 15px;
        cursor: pointer;
    }
`