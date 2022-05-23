import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Hometown Pickem",
  viewport: "width=device-width,initial-scale=1",
});

const themeMode = (localStorage.getItem("colorMode") ?? "light") as
  | "light"
  | "dark";

const theme = createTheme({
  palette: {
    mode: themeMode,
  },
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Outlet />
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
