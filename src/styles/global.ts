import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
        outline: none;
    }

    html {
        font-size: 20px;
    }

    body {
        margin: auto;
        max-width: 1110px;
        height: 100%;
        background-color: #000316;
        color: antiquewhite;
    }

    a {
        color: inherit;
        text-decoration: inherit;
        cursor: pointer;
    }

    ul {
        list-style: none;
        margin: 0;
        flex-wrap: wrap;
    }

    li {
        padding: 0
    }

    button {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        font-size: inherit;
        font-weight: inherit;
    }

    img {
        vertical-align: top;
    }

    h3 {
        font-size: 1.75rem;
    }

    .ant-radio-wrapper {
        color: antiquewhite;
        font-size: 1rem;
    }

    .ant-checkbox + span {
        color: antiquewhite;
        font-size: 1rem;
    }

    .ant-checkbox-checked .ant-checkbox-inner {
        background-color: #3c02a0;
        border-color: #3c02a0;
    }

    .ant-radio-wrapper .ant-radio-checked .ant-radio-inner {
        background-color: #3c02a0;
        border-color: #3c02a0;
    }

    .ant-checkbox-wrapper:hover .ant-checkbox-inner,
    .ant-checkbox:hover .ant-checkbox-inner,
    .ant-checkbox-input:focus + .ant-checkbox-inner {
        background-color: #74007e !important;
        border-color: #ffffff !important;
    }
`;
