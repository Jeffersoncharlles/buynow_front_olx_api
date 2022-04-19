import styled from 'styled-components';

export const Container = styled.header`
background: #fff;
height: 3.75rem;
border-bottom: 1px solid #ccc;
   .container{
       max-width: 64rem;//1024px
       margin: auto;
       display: flex;
       
        &-logo{
            flex: 1;//toda area disponível
            display: flex;
            align-items: center;
            font-size: 2rem;//32px
            font-weight: bold;
            height: 3.75rem;
            transition: ease filter 0.3s;

             span{
                color: #8d7140;
            }

            &:hover{
                filter: brightness(0.9);
            }
        }

        nav{
            padding-top:.62rem;//10px
            padding-bottom: .62rem;
            

            ul{
                height:2.5rem ;//40px
                
                
            }
            
            ul, li{
                list-style: none;
                margin:  0 1.25rem;
                padding: 0;
                display: flex;
                align-items: center;
                
                a {
                    color: #8d7140;
                    font-size: 1.2rem;
                    font-weight: 500;
                    transition: ease filter 0.3s;

                    &:hover{
                        filter: brightness(0.9);
                    }

                    &.created{
                        background: #ff8100;
                        color: #fff;
                        border-radius: 4px;
                        padding: 5px 10px;
                    }
                }
                button{
                    color: #8d7140;
                    font-size: 1.2rem;
                    font-weight: 500;
                    transition: ease filter 0.3s;
                    background: none        ;
                    border: 0;

                    &:hover{
                        filter: brightness(0.9);
                    }
                }

                
            }

            
        }
   } 
`;