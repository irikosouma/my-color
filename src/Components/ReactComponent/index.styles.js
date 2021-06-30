import styled from 'styled-components';
const WrapContent = styled.div`

/* background-color: #F1F5F8;
height: 100vh;
display: grid;
grid-template-rows: 100px 1fr;
    .header-content {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .bound-input {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            }
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
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
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
    } */
    //end code 
    @media only screen and (min-width: 50px) {
        background-color: #F1F5F8;
        height: 100vh;
        display: grid;
        grid-template-rows: 70px 1fr;
        .bound-input {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            #input {
                max-width: 213px;
            }
            .btn-submit {
                min-width: 62px;
                height: 20px;
                font-size: 12px;
            }
        }
        .title-page {
            color: #102a42;
            font-size: 16px;
            line-height: 28px;
            font-weight: 700;
            letter-spacing: 4px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    .bound-color {
        min-height: calc(100% - 100px);
    }
    }
    @media only screen and (max-width: 616px) {
        background-color: #F1F5F8;
        height: 100vh;
        display: grid;
        grid-template-rows: 100px 1fr;
        .header-content {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            .bound-input {
                display: flex;
                align-items: center;
                justify-content: center;
            }
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
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
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
            font-size: 20px;
            line-height: 28px;
            font-weight: 700;
        }
        .bound-color {
            min-height: calc(100% - 100px);
        }
    }
    @media only screen and (min-width: 615px) {
        background-color: #F1F5F8;
        height: 100vh;
        display: grid;
        grid-template-rows: 100px 1fr;
        .bound-input {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            #input {
                max-width: 270px;
            }
            .btn-submit {
                max-width: 102px;
                height: 40px;
                font-size: 19px;
            }
        }
        .header-content {
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
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
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
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            color: #102a42;
            font-size: 28px;
            line-height: 28px;
            font-weight: 700;
        }
        .bound-color {
            min-height: calc(100% - 100px);
        }
    }
    

`;
export {WrapContent}