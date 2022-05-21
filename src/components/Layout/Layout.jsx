import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

import { Box, StyledInput, StyledPaper, StyledLogo } from "./styled";
import { useAppContext } from "AppContext";

import logo from "icons/github-icon.png"

const Layout = () => {
  const { handleChange, handleSubmit, userName } = useAppContext();

  return (
    <>
      <Box>
        <StyledLogo src={logo} alt="github-logo" />
        <StyledPaper
          component="form"
          onSubmit={handleSubmit}
        >
          <IconButton type="submit" aria-label="search" sx={{ ml: 1 }}>
            <SearchIcon />
          </IconButton>
          <StyledInput
            id="search"
            type="text"
            name="userName"
            value={userName}
            onChange={handleChange}
            placeholder="Enter GitHub username"
          />
        </StyledPaper>
      </Box>
    </>
  );
};

export default Layout;
