import styled from 'styled-components';
import TextArea from 'antd/es/input/TextArea';

export const TextAreaCustom = styled(TextArea)`
    word-break: break-all;
    white-space: pre-wrap;
    user-select: none;
`;
