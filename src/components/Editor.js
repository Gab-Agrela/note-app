"use client";

import { useContext, useEffect } from "react";
import { useEditor, EditorContent as EditorTipTap } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import { nanoid } from "nanoid";
import {
  FaBold,
  FaHeading,
  FaItalic,
  FaListOl,
  FaListUl,
  FaStrikethrough,
  FaUnderline,
} from "react-icons/fa";
import styled from "styled-components";
import parse from "html-react-parser";

import { ProjectContext } from "@/app/page";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <MenuBarContainer>
      <FaBold
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is_active" : ""}
      />
      <FaItalic
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is_active" : ""}
      />
      <FaUnderline
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive("underline") ? "is_active" : ""}
      />
      <FaStrikethrough
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is_active" : ""}
      />
      <FaHeading
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is_active" : ""}
      />
      <FaListUl
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is_active" : ""}
      />
      <FaListOl
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is_active" : ""}
      />
    </MenuBarContainer>
  );
};

export default function Editor({ setNoteContent }) {
  const [{ noteTitle, noteContent, noteId }, setState] =
    useContext(ProjectContext);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({
        placeholder: "Type here...",
      }),
    ],
    content: "",
    onBlur: ({ editor }) => {
      const html = editor.getHTML();
      setNoteContent(html);
    },
  });

  useEffect(() => {
    editor && editor.commands.setContent(noteContent || "");
  }, [noteTitle, noteContent, noteId]);

  const handleSubmit = () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const mountObject = {
      id: noteId || nanoid(),
      title: noteTitle,
      content: noteContent,
    };

    const noteWithoutEditedIdIfExists = noteId
      ? notes.filter((note) => note.id !== noteId)
      : notes;

    localStorage.setItem(
      "notes",
      JSON.stringify([...noteWithoutEditedIdIfExists, mountObject])
    );

    window.dispatchEvent(new Event("storage"));
    setState((prev) => ({
      ...prev,
      noteTitle: "",
      noteContent: "",
      noteId: "",
      showModal: !prev.showModal,
    }));
  };

  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      <ButtonContainer>
        <SubmitButton onClick={handleSubmit} disabled={!noteTitle?.length}>
          Save
        </SubmitButton>
      </ButtonContainer>
    </>
  );
}

const MenuBarContainer = styled.div`
  border-bottom: 2px solid gray;
  .is_active {
    color: dimgray;
  }
  svg {
    padding: 0 8px;
    cursor: pointer;
    :hover {
      color: dimgray;
    }
  }
`;

const EditorContent = styled(EditorTipTap)`
  height: 320px;
  overflow-y: auto;
  margin-top: 10px;
  border-bottom: 2px solid gray;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const SubmitButton = styled.button`
  width: 60px;
  padding: 5px;
  margin-top: 20px;
  background-color: transparent;
  border: 2px solid #aaa;
  border-radius: 25px;
  font-weight: 500;
  color: var(--font-color);
  cursor: pointer;
  :hover {
    border-color: dimgray;
    color: dimgray;
  }
  :disabled {
    border-color: dimgray;
    color: dimgray;
    :hover {
      cursor: not-allowed;
    }
  }
`;
