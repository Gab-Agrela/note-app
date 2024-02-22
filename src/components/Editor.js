"use client";

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
import { useContext } from "react";
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
  const [{ noteTitle, noteContent }, setState] = useContext(ProjectContext);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({
        placeholder: "Type here...",
      }),
    ],
    content: "",

    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setNoteContent(html);
    },
  });

  const handleSubmit = () => {
    const previousNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const mountObject = {
      id: nanoid(),
      title: noteTitle,
      content: noteContent,
    };
    localStorage.setItem(
      "notes",
      JSON.stringify([...previousNotes, mountObject])
    );
    window.dispatchEvent(new Event("storage"));
    setState((prev) => ({
      ...prev,
      noteTitle: "",
      noteContent: "",
      showModal: !prev.showModal,
    }));
    editor.commands.clearContent();
  };

  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      <ButtonContainer>
        <SubmitButton onClick={handleSubmit}>Save</SubmitButton>
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
`;
