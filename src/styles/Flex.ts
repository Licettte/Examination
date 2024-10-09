import styled from 'styled-components';

export const Flex = styled('div')<{
  align?: string;
  justify?: string;
  dir?: string;
  gap?: number;
  wrap?: string;
  margin?: number;
}>`
  display: flex;
  align-items: ${(props) => props.align || 'center'};
  justify-content: ${(props) => props.justify || 'unset'};
  flex-direction: ${props => props.dir || 'row'};
  gap: ${props => props.gap || 0}px;
  ${props => props.wrap ? `flex-wrap: ${props.wrap}`: ''};
    margin: ${props => props.margin || 0}px;
`;
