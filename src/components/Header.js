"use client";
import styled from "styled-components";
import { CiSun, CiSearch } from "react-icons/ci";
import { MdOutlineNightlightRound } from "react-icons/md";
import { useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState(false);
  const mappedThemeColors = {
    false: "#252525",
    true: "#ffffff",
  };
  const handleTheme = () => {
    document.documentElement.style.setProperty(
      "--bg-color",
      mappedThemeColors[!theme]
    );
    console.log("a");
    document.documentElement.style.setProperty(
      "--font-color",
      mappedThemeColors[theme]
    );
    setTheme(!theme);
  };
  return (
    <HeaderContainer>
      <p>Notes</p>
      <nav>
        <button onClick={handleTheme}>
          {!theme ? (
            <CiSun size="38px" color={mappedThemeColors[!theme]} />
          ) : (
            <MdOutlineNightlightRound
              size="34px"
              color={mappedThemeColors[!theme]}
            />
          )}
        </button>
        <button>
          <CiSearch size="38px" color={mappedThemeColors[!theme]} />
        </button>
      </nav>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 38px;
    padding-left: 10px;
  }
  nav {
    display: flex;
    flex-direction: row;
    button {
      background-color: transparent;
      border: none;
      padding: 0px 8px;
      cursor: pointer;
    }
  }
`;
