import styled from 'styled-components';
const Wrap = styled.div`
    height: 100%;
    /* min-height: calc(100% - 100px); */
    .bound {
        height: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(223.33px,1fr));
        grid-template-rows: repeat(auto-fit,minmax(96px,1fr));
        color: #000000;
        .light-color {
            color: #000000;
            /* padding-left: 30px; */
        }
        p {
            margin-left: 30px;
        }
        
    }

`;
export {Wrap}