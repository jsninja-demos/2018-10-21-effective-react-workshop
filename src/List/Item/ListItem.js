import React from "react";
import Plate from "arui-feather/plate";
import Heading from "arui-feather/heading";
import Checkbox from "arui-feather/checkbox";
import cx from "classnames";

import "./ListItem.css";

export default ({ photo, checked, onChecked }) => (
  <Plate theme="alfa-on-color" size="xl" className={cx({ selected: checked })}>
    <Heading size="s">
      <Checkbox checked={checked} onChange={onChecked} />
      &nbsp;
      {photo.title}
    </Heading>
    <img className="image" src={photo.image} />
    <div>
      by{" "}
      <strong>
        {photo.by}({photo.authorRating})
      </strong>
    </div>
    <div className="footer">
      <p>{photo.likes ? `Likes: ${photo.likes}` : "No likes"}</p>
    </div>
  </Plate>
);
