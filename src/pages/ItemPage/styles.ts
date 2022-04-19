import styled from 'styled-components';

interface ISkeletonFake {
    height?: number
}

export const Container = styled.main`
    max-width: 64rem;//1024px
    margin: 20px auto ;
    display: flex;

    .LeftSide{
        flex: 1;
        margin-right: 20px;

        .adImage{
            padding: 10px;
            width: 320px;
            height: 320px;
            margin-right: 20px;

            img{
                display: flex;
                align-items: center;
                justify-content: center;
                background-size:cover;
                height: 320px;
            }
        }

        .adInfos{
            flex:1;

            .adName{
                margin-bottom: 20px;

                h2{
                    margin: 0;
                    margin-top: 20px;
                }

                small{
                    color: #9999;
                }
            }

            .adDescription{
                small{
                    color: #9999;
                }
            }
        }
    }

    .RightSide{
        width: 250px;

        .price{
            span{
                color: #ff8100;
                display: block;
                font-size: 27px;
                font-weight: bold;
            }
        }

        .padding{
            padding: 10px;
        }

        a{
            background: #ff8100;
            color: #fff;
            border-radius: 4px;
            height: 30px;
            box-shadow: 0px 0px 4px #999;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            margin-bottom: 20px;
            transition: ease-in filter 0.3s;
            

            &:hover{
                filter: brightness(0.9);
                
            }
        }

        .createdBy{
            display: block;

            strong{
                display: block;
            }
            small{
                display: block;
                color: #999;
                margin-top: 10px;
            }
        }
    }
`;

export const Box = styled.div`
    display: flex;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    margin-bottom: 20px;
`;

export const SkeletonFake = styled.div<ISkeletonFake>`
    background: #ddd;
    height:${({ height }) => height || 20}px;
`;