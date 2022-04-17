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
        }

        .adInfos{
            padding: 10px;
            .adName{
                margin-bottom: 20px;
            }

            .adDescription{

            }
        }
    }

    .RightSide{
        width: 250px;

        .padding{
            padding: 10px;
        }
    }
`;

export const Box = styled.div`
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    margin-bottom: 20px;
`;

export const SkeletonFake = styled.div<ISkeletonFake>`
    background: #ddd;
    height:${({ height }) => height || 20}px;
`;