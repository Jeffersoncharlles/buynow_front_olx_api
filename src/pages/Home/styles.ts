import styled from 'styled-components';

export const Container = styled.main`
    max-width: 64rem;//1024px
    margin: auto;

    h2{
        font-size:1.2rem ;
        color: #8d7140;
    }

    .list{
        display: flex;
        flex-wrap: wrap;

        article{
            width: 20%;
        }
    }

    .seeAllLink{
        color: #8d7140;
        font-weight: 500;
        display: inline-block;
        margin-top: 10px;

        transition: ease filter 0.3s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`;

export const SearchContainer = styled.section`
    background: #eef0f2;
    border-bottom: 1px solid #ccc;
    padding: 20px 0;
`;

export const SearchBox = styled.div`
    background: #edcb96;
        padding: 20px 15px;
        border-radius: 4px;
        box-shadow: 1px 1px 1px 0.3px rgba(0,0,0,0.2);
        display: flex;

        form{
            flex: 1;
            display: flex;

            input,select{
                height: 40px;
                border: 0;
                border-radius: 4px;
                font-size: 1.2rem;
                margin-right: 20px;
            }

            input {
                flex: 1;
                padding:0 10px ;

            }

            select {
                width: 100px;
            }

            button{
                border: 0;
                background: #8d7140;
                color: #ffffff;
                border-radius: 4px;
                font-size: 1.2rem;
                /* height: 40px; */
                padding: 0 20px;
                transition: ease filter 0.3s;

                    &:hover{
                        filter: brightness(0.9);
                    }
            }
        }
`;

export const CategoryList = styled.div`
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;

        .categoryItem{
            width: 25%;
            display: flex;
            align-items: center;
            color: #8d7140;
            text-decoration: none;
            height: 50px;
            margin-bottom: 10px;
            transition: ease filter 0.3s;

            &:hover{
                filter: brightness(0.9);
            }

            img{
                width: 45px;
                height: 45px;
                margin-right: 10px;
            }
        }
`;