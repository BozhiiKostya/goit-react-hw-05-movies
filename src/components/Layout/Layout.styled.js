import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;

  .header {
    padding: 10px 20px;
    background-color: #f0dff9;
    border: 2px solid #3c3c3c;
  }

  .header-link {
    display: inline-block;
    min-width: 60px;
    min-height: 30px;
    padding: 4px 8px;
    background-color: black;
    color: white;
    border-radius: 3px;
    border: 2px solid #3c3c3c;
    text-align: center;
    font-size: 20px;
  }

  .header-link:not(:last-child) {
    margin-right: 20px;
  }
  .header-link.active {
    background-color: white;
    color: #3c3c3c;
  }

  .main {
    padding: 20px 0 20px 20px;
    background-color: #fff;
    border: 2px solid #3c3c3c;
    border-top: none;
  }
`;
