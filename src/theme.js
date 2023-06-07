import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#548c2f",
      contrastText: "rgba(255,255,255,0.87)",
    },
    secondary: {
      main: "#E84045",
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        h1: {
          fontFamily: "Indie Flower",
        },
        h2: {
          fontFamily: "Indie Flower",
        },
        p: {
          fontFamily: "Roboto",
        },
      },
    },
  },
});

export default theme;
