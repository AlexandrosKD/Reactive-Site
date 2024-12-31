import RootLayout from "../layouts/rootLayouts";
import React from "react";
import "../styles/pages/home.css";

export default function Home() {
  return (
    <RootLayout>
      <div className="introduce">
        Hello! My name is Alexandros Kesidis.
        <br />
        <p className="introduceParagraph">
          I'm a junior programmer. One of the languages I'm learning is Java,
          with projects like:
        </p>
      </div>
    </RootLayout>
  );
}
