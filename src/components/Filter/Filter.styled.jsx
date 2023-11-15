import styled from '@emotion/styled';

export const InputFilter = styled.input`
  margin-left: auto;
  width: 100%;
  height: 30px;
  border: 0;
  box-shadow: 0 4px 11px 0 rgb(37 44 97 / 15%),
    0 1px 3px 0 rgb(93 100 148 / 20%);
  transition: all 0.2s ease-out;
  background-image: linear-gradient(180deg, #fff, #f5f5fa);
  :focus {
    box-shadow: 0 8px 22px 0 rgb(37 44 97 / 15%),
      0 4px 6px 0 rgb(93 100 148 / 20%);
  }
  :focus-visible {
    outline: none;
  }
  ::placeholder {
    color: gb(72, 76, 122);
    margin-left: 50px;
  }
`;
