import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ContrastChecker  from "./ContrastChecker";

export default {
    title: "Card/ContrastChecker",
    component: ContrastChecker,
  } as ComponentMeta<typeof ContrastChecker>;
  
  const Template: ComponentStory<typeof ContrastChecker> = (args) => <ContrastChecker {...args} />;
  
  export const First = Template.bind({});
  First.args = {
    colorName: "#275165",
    colorHex: "First Example",
  };
  
  /*export const Second = Template.bind({});
  Second.args = {
    colorName: "#4079a2",
    colorHex: "Second Example",
  };
  
  export const Third = Template.bind({});
  Third.args = {
    colorName: "#178db3",
    colorHex: "Third Example",
  };
  
  export const Fourth = Template.bind({});
  Fourth.args = {
    colorName: "#d63900",
    colorHex: "Fourth Example",
  };*/