import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { categories } from "../../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  @media only screen and (max-width: 380px) {
  }
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

function Categories() {
  return (
    <Container>
      {categories.map((category) => {
        return <CategoryItem item={category} key={category.id} />;
      })}
    </Container>
  );
}

export default Categories;
