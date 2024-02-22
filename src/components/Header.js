"use client";
import styled from "styled-components";
import { CiSearch, CiLight, CiDark } from "react-icons/ci";
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
    document.documentElement.style.setProperty(
      "--font-color",
      mappedThemeColors[theme]
    );
    setTheme(!theme);
  };
  return (
    <HeaderContainer>
      <p>Notes</p>
      <Navigation>
        {!theme ? (
          <CiLight size="38px" onClick={handleTheme} />
        ) : (
          <CiDark size="34px" onClick={handleTheme} />
        )}
        <CiSearch size="38px" />
      </Navigation>
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
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  svg {
    padding: 0 8px;
    cursor: pointer;
  }
`;
