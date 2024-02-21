"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
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
import Placeholder from "@tiptap/extension-placeholder";

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

export default function Editor() {
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
      console.log(html);
    },
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
        style={{
          height: "320px",
          overflowY: "auto",
          marginTop: "10px",
        }}
      />
    </div>
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
