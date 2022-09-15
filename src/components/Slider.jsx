import { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  overflow: hidden;
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
  display: flex;
  transform: translateX(${(props) => props.slideId * -100}vw);
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Img = styled.img`
  object-fit: cover;
  object-position: 0 0;
  width: 100vw;
  height: 100vh;
`;

const Info = styled.div`
  color: #fff;
  text-align: center;
  padding: 50px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #dad1d155;
  border-radius: 14px;
`;

const Title = styled.h2``;

const Desc = styled.p``;

function Slider() {
  const [slideId, setSlideId] = useState(0);

  const handleClick = (side) => {
    if (side === 0) {
      setSlideId(slideId > 0 ? slideId - 1 : 2);
    } else {
      setSlideId(slideId < 2 ? slideId + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick(0)}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideId={slideId}>
        <Slide>
          <Img src="https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2019/10/horseinsuit2.jpg" />
          <Info>
            <Title>Lorem, ipsum.</Title>
            <Desc>Lorem ipsum dolor sit amet.</Desc>
          </Info>
        </Slide>

        <Slide>
          <Img src="https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2019/10/horseinsuit2.jpg" />
          <Info>
            <Title>Lorem, ipsum.</Title>
            <Desc>Lorem ipsum dolor sit amet.</Desc>
          </Info>
        </Slide>

        <Slide>
          <Img src="https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2019/10/horseinsuit2.jpg" />
          <Info>
            <Title>Lorem, ipsum.</Title>
            <Desc>Lorem ipsum dolor sit amet.</Desc>
          </Info>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick(1)}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}

export default Slider;
