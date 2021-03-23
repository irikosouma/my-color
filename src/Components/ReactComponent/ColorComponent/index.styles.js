import styled from 'styled-components';
const Wrap = styled.div`
    .bound {
        height: 100%;
    /* max-height: calc(100% - 100px); */
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(223.33px,1fr));
        grid-template-rows: repeat(auto-fit,minmax(96px,1fr));
        color: #000000;
        background-color: antiquewhite;
    }

`;
export {Wrap}