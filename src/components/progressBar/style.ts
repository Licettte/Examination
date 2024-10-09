import styled from 'styled-components';

export const Item = styled('div')<{color: string}>`
    background-color: ${(props) => (props.color)};
    width: 50px;
    height: 10px; 
`;
