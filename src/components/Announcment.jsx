import styled from "styled-components";

const Container = styled.div`
  background-color: teal;
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  padding: 13px;
`;

function Announcment() {
  return (
    <Container>
      Супер пропозиція! Безкоштовна доставка для товарів від 999₴.
    </Container>
  );
}

export default Announcment;
