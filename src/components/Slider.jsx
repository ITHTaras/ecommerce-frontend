import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f3eaea;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "16px"};
  right: ${(props) => props.direction === "right" && "16px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.4;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Img = styled.img`
  max-width: 100%;
`;

const Info = styled.div`
  padding: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h2``;

const Desc = styled.p``;

function Slider() {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide>
          <Img src="https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2019/10/horseinsuit2.jpg" />
          <Info>
            <Title>Lorem, ipsum.</Title>
            <Desc>Lorem ipsum dolor sit amet.</Desc>
          </Info>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}

export default Slider;
