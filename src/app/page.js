"use client";

import { createContext, useEffect, useState } from "react";
import styled from "styled-components";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NoNote from "@/components/NoNotes";
import NoteCard from "@/components/NoteCard";

export const ProjectContext = createContext();

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [state, setState] = useState({
    noteTitle: "",
    noteContent: "",
    noteId: "",
    showModal: false,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("storage", () => {
        setNotes(JSON.parse(localStorage.getItem("notes")));
      });
      setNotes(JSON.parse(localStorage.getItem("notes")));
    }
  }, []);

  return (
    <ProjectContext.Provider value={[state, setState]}>
      <MainContainer>
        <Header />
        {notes?.length ? (
          <NoteCardContainer>
            {notes.map(({ title, content, id }) => (
              <NoteCard title={title} content={content} key={id} id={id} />
            ))}
          </NoteCardContainer>
        ) : (
          <NoNote />
        )}
        <Footer />
      </MainContainer>
    </ProjectContext.Provider>
  );
}

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 95dvh;
`;

const NoteCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  overflow: auto;
`;
