// src/ScrollSpy/ScrollSpy.stories.js
import React from "react";
import ScrollSpy from "../components/ScrollSpy";
import ScrollspyPane from "../components/ScrollSpy/ScrollspyPane";

export default {
  title: "Components/ScrollSpy",
  component: ScrollSpy,
};

export const Default = () => (
  <ScrollSpy onClick={() => alert("Clicked!")}>
    <ScrollspyPane title="First Section"></ScrollspyPane>
    <ScrollspyPane title="Second Section"></ScrollspyPane>
    <ScrollspyPane title="Third Section"></ScrollspyPane>
    <ScrollspyPane title="Fourth Section"></ScrollspyPane>
  </ScrollSpy>
);
