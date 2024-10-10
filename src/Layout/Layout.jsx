import AppRoutes from "AppRoutes/AppRoutes";
import { useThemeMode } from "Hooks/themeColor";
import React from "react";
import { ThemeProvider } from "styled-components";

const Layout = () => {
  const { theme } = useThemeMode();
  return (
    <div>
      {" "}
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </div>
  );
};

export default Layout;
