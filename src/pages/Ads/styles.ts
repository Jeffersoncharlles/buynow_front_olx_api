import styled from 'styled-components';

export const Container = styled.div`
    max-width: 64rem;//1024px
    margin: 20px auto ;
    margin-top: 20px;
    display: flex;
`;

export const LeftSide = styled.section`
    width: 250px;
    margin-right: 10px;

    label{
        display: block;
        margin: 10px 0;
    }

    input,select{
        width: 100%;
        height: 40px;
        border: 2px solid #8d7140;
        border-radius: 4px;
        font-size: 1rem;
        padding: 10px;
    }

    ul, li {
        margin: 0;
        padding:  0;
        list-style: none;

        > li {
            display: flex;
            align-items: center;
            padding: 10px;
            border-radius: 4px;
            color: #121221;
            cursor: pointer;

            img {
                width: 25px;
                height: 25px;
                margin-right: 5px;
            }

            &:hover{
                background: #8d7140;
                color: #fff;
            }

            &.active{
                background: #8d7140;
                color: #fff;
            }
        }
    }
`;
export const RightSide = styled.section`
    flex: 1;

    h2{
        margin-top:  0;
        font-size: 1.1rem;
    }

    >p{
        padding: 30px;
        text-align: center;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px 0;
        p{
            width: 30px;
            height: 30px;
            border: 1px solid #Ddd;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            margin-right: 4px;

            &:hover{
                filter: brightness(0.9);
            }

            &.active{
                background: #ccc;
            }
        }

        
    }

    article{
        display: flex;
        flex-wrap: wrap;

        article{
            width: 25%;
        }
    }
`;