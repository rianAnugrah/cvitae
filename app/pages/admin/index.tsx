import { Editor, Frame, Element } from "@craftjs/core";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { NextSeo } from "next-seo";
import React, { useEffect, useState } from "react";

import { Viewport, RenderNode } from "../../../components/editor";
import { Container, Text } from "../../../components/selectors";
import { Button } from "../../../components/selectors/Button";
import { Custom1, OnlyButtons } from "../../../components/selectors/Custom1";
import { Custom2, Custom2VideoDrop } from "../../../components/selectors/Custom2";
import { Custom3, Custom3BtnDrop } from "../../../components/selectors/Custom3";
import { Video } from "../../../components/selectors/Video";
import axios from "axios";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "acumin-pro",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

function App() {
  const [json, setJson] = useState(null);
  // Load save state from server on page load
  useEffect(() => {
    axios.get("http://localhost:3000/pages/1").then((res) => {
      console.log("JSON", JSON.parse(res.data.data));
      setJson(JSON.parse(res.data.data));
    });
    // setJson(json);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="h-full h-screen">
        <NextSeo
          title="Craft.js"
          description="A React framework for building drag-n-drop page editors."
          canonical="https://craft.js.org/"
          twitter={{
            site: "craft.js.org",
            cardType: "summary_large_image",
          }}
        />
        <Editor
          resolver={{
            Container,
            Text,
            Custom1,
            Custom2,
            Custom2VideoDrop,
            Custom3,
            Custom3BtnDrop,
            OnlyButtons,
            Button,
            Video,
          }}
          enabled={false}
          onRender={RenderNode}
        >
          <Viewport>{json && <Frame json={json}>{/*  */}</Frame>}</Viewport>
        </Editor>
      </div>
    </ThemeProvider>
  );
}

export default App;
