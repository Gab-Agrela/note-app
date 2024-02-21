"use client";
import Header from "@/components/Header";
import NoteCard from "@/components/NoteCard";
import Footer from "@/components/Footer";
import styled from "styled-components";

export default function Home() {
  return (
    <MainContainer>
      <Header />
      <NoteCardContainer>
        <NoteCard
          title={"aaaaaa"}
          content={"adasdsadd dasdasd asdasd asdas dasd asda sdasdasd"}
        />
        <NoteCard
          title={"aaaaaa"}
          content={"adasdsadd dasdasd asdasd asdas dasd asda sdasdasd"}
        />
        <NoteCard
          title={"aaaaaa"}
          content={"adasdsadd dasdasd asdasd asdas dasd asda sdasdasd"}
        />
        <NoteCard
          title={"aaaaaa"}
          content={"adasdsadd dasdasd asdasd asdas dasd asda sdasdasd"}
        />
        <NoteCard
          title={"aaaaaa"}
          content={"adasdsadd dasdasd asdasd asdas dasd asda sdasdasd"}
        />
      </NoteCardContainer>
      <Footer />
    </MainContainer>
  );
}

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 95vh;
`;

const NoteCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  overflow: auto;
`;
