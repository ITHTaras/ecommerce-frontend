import styled from "styled-components";
import { Badge, Box, Drawer, IconButton } from "@mui/material";
import { Search, ShoppingCartOutlined, Menu } from "@mui/icons-material";

import { Link } from "react-router-dom";
import { mobile, tablet } from "../responsive";
import { useState } from "react";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${tablet({ flex: "none" })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${tablet({ display: "none" })}
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${tablet({ display: "none" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Burger = styled.div`
  display: none;
  ${tablet({ display: "block" })}
`;

function Navbar() {
  const [drawer, setDrawer] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>UA</Language>
          <SearchContainer>
            <Input placeholder="Пошук" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            <Logo>TARASyk.</Logo>
          </Link>
        </Center>
        <Right>
          <Link
            to="/register"
            style={{ color: "black", textDecoration: "none" }}
          >
            <MenuItem>РЕЄСТРАЦІЯ</MenuItem>
          </Link>
          <Link to="/login" style={{ color: "black", textDecoration: "none" }}>
            <MenuItem>ВХІД</MenuItem>
          </Link>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <Link to="/cart">
                <ShoppingCartOutlined style={{ color: "black" }} />
              </Link>
            </Badge>
          </MenuItem>
        </Right>
        <Burger>
          <IconButton
            aria-label="Menu"
            onClick={() => setDrawer((prevDrawer) => !prevDrawer)}
          >
            <Menu></Menu>
          </IconButton>
        </Burger>
      </Wrapper>
      <Drawer
        anchor={"left"}
        open={drawer}
        onClose={() => setDrawer((prevDrawer) => !prevDrawer)}
      >
        <Box
          sx={{ width: "100vw" }}
          role="presentation"
          onClick={() => setDrawer((prevDrawer) => !prevDrawer)}
          onKeyDown={() => setDrawer((prevDrawer) => !prevDrawer)}
        >
          dsfdsf
        </Box>
      </Drawer>
    </Container>
  );
}

export default Navbar;
