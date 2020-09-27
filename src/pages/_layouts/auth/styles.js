import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 350px;
  text-align: center;

  img {
    widht: 100px;
    height: 100px;
  }

  form {
    background: #e9ecef;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    height: 350px;
    border: 1px;
    border-radius: 15px;

    input {
      background: #ffffff;
      border: 0;
      border-radius: 4px;
      height: 48px;
      padding: 15px;
      color: #000000;

      margin: 60px 5px 10px;
      margin-bottom: 0px;
      &::placeholder {
        color: rgba(1, 1, 1, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: center;
      margin: 15px 0px 0px;
      margin-bottom: -20px;
      font-weight: bold;
    }

    button {
      margin: 40px 5px 0;
      height: 44px;
      background: #3b9eff;
      font-weight: normal;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, "#3b9eff")};
      }
    }

    a {
      color: #000000;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
