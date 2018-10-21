import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import ListItem from "./ListItem";

const photo = {
  title: "Demo title",
  by: "Alexander",
  image: "https://picsum.photos/600/400/?random",
  likes: 10,
  authorRating: 20
};

storiesOf("ListItem", module)
  .add("default", () => (
    <ListItem photo={photo} onChecked={action("checked")} />
  ))
  .add("no likes", () => (
    <ListItem photo={{ ...photo, likes: 0 }} onChecked={action("checked")} />
  ))
  .add("checked", () => (
    <ListItem photo={photo} onChecked={action("checked")} checked />
  ));
