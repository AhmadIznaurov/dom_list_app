import React from "react";

export const Album = ({ album }) => {
  return (
    <li className="list-group-item">
      <span className="spanic-international">
        {album.title}
        <img
          src="https://www.connect-wit.ru/wp-content/uploads/2023/01/mts.jpg"
          alt="img"
        />
      </span>
    </li>
  );
};
