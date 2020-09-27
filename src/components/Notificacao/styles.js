import styled from "styled-components";

export const Container = styled.div`
  width: 1200px;
`;

export const Content = styled.div`
  width: 250px !important;
  background: #fff;
  display: inline-block;
  position: relative;
  border-radius: 15px 15px 15px 15px;
  width: 300px;
  margin-top: 50px;
  margin-left: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s ease-out;
  :hover {
    transform: translateY(-10px) scale(1) translateZ(0);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  float: left;

  button {
    border: 0;
    background: none;
    font-size: 12px;
  }

  opacity: ${(props) => (props.past ? 0.6 : 1)};
`;

export const ContainerColor = styled.div`
  width: 10%;
  height: 100%;
  position: absolute;
  background: rgba(220, 233, 255, 0.48);
  border-radius: 15px 0px 0px 15px;
`;

export const Time = styled.li`
  padding: 20px;
  background: #fff;
  border-radius: 100px;
  strong {
    display: block;
    color: #7159c1;
    font-size: 20px;
    font-weight: normal;
  }
  span {
    display: block;
    margin-top: 3px;
    color: #7159c1;
  }

  h4 {
    text-align: justify left;
    margin-left: 5%;
  }

  h3 {
    text-align: justify left;
    margin-left: 5%;
  }
`;
