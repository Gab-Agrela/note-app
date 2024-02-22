"use client";

import Header from "@/components/Header";
import NoteCard from "@/components/NoteCard";
import Footer from "@/components/Footer";
import styled from "styled-components";
import NoNote from "@/components/NoNotes";
import { useEffect, useState } from "react";

export default function Home() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("storage", () => {
        setNotes(JSON.parse(localStorage.getItem("notes")));
      });
      setNotes(JSON.parse(localStorage.getItem("notes")));
    }
  }, []);

  return (
    <MainContainer>
      <Header />
      {notes ? (
        <NoteCardContainer>
          {notes.map(({ title, content, id }) => (
            <NoteCard title={title} content={content} key={id} />
          ))}
        </NoteCardContainer>
      ) : (
        <NoNote />
      )}
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
