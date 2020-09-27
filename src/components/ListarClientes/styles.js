import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  position: relative;
  margin-left: 100px;
  top: 100px;
  max-width: 1200px;
`;

export const CardPosition = styled.div`
  display: inline-block;
  position: relative;
  margin-right: 50px;
  margin-bottom: 50px;
  border-radius: 20px;
  transition: all 0.3s ease-out;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  :hover {
    transform: translateY(-10px) scale(1) translateZ(0);
  }

  span {
    font-size: 12px;
  }
`;

export const TitlePosition = styled.div`
  display: flex;
  margin-top: 15px;
  & > * {
    margin-right: 15px;
    margin-top: -15px;
  }
`;
