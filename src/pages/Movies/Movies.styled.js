import styled from 'styled-components';

export const StyledSection = styled.div`
  .movies-form {
    display: inline-flex;
    height: 30px;
  }
  .movies-input {
    min-width: 300px;
    height: 100%;
    padding: 4px 8px;
    border: 2px solid #3c3c3c;
  }
  .movies-button {
    height: 100%;
    background-color: black;
    color: white;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border: 2px solid #3c3c3c;
    padding: 4px 6px;
    font-size: 15px;
  }
  .movies-button:active {
    background-color: white;
    color: #3c3c3c;
  }
`;
