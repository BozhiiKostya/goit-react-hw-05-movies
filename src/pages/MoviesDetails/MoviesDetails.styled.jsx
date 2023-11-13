import styled from 'styled-components';

export const StyledSection = styled.div`
  .link-details {
    display: block;
    width: 80px;
    height: 35px;
    border: 0.5px solid #3c3c3c;
    border-radius: 3px;
    text-align: center;
    font-size: 20px;
    margin-bottom: 10px;
    background-color: #f0dff9;
    color: #212121;
  }
  ul.list-details {
    display: flex;
    padding: 15px 0;
  }
  .item-details {
    font-size: 20px;
  }
  li.item-details:not(:last-child) {
    margin-right: 30px;
  }
  li {
    list-style: none;
  }
`;
