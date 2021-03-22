import styled from 'styled-components';
const WrapContent = styled.div`
background-color: #F1F5F8;
height: 100vh;
display: grid;
grid-template-rows: 100px 1fr;
    .header {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        #input {
            width: 270px;
            height: 30px;
            font-size: 16px;
            appearance: none;
            border: none;
            padding: 5px 10px;
            border-radius: 4px 0 0 4px;
        }
        .btn-submit {
            width: 102px;
            background-color: #49A6E9;
            height: 40px;
            outline: none;
            border: none;
            border-radius:  0 4px 4px 0;
            color: #fff;
            font-size: 19px;
        }
    }
    .title-page {
        color: #102a42;
        font-size: 28px;
        line-height: 28px;
        font-weight: 700;
        letter-spacing: 4px;
    }
    .bound-color {
        min-height: calc(100% - 100px);
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(223.33px,1fr));
        grid-template-rows: repeat(auto-fit,minmax(96px,1fr));
        color: #000000;
        #text {
            margin-top: 45px;
        }
        p { margin-top: 6px;}
        .color {
            display: flex;
            flex-direction: column;
            align-items:flex-start;
            justify-content: flex-start;
            position: relative;
            
        }
        article {
            padding: 1rem 2rem;
            cursor: pointer;
            font-size: 1rem;
            text-transform: none;
                /* & :nth-child(1) {
                    display: none!important;
                } */
                /* & :not(:last-child) {
                    display: none!important;
                } */
                & .percent-value {
                    display: block!important;
                }
        }
        .color-light {
            color: #ffffff;
        }
    }

`;
export {WrapContent}