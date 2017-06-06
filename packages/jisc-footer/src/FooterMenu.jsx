import FooterMenuItem from "./FooterMenuItem";
import React from "react";

const items = [
  ["Security"],
  ["Cloud"],
  ["Connectivity"],
  ["Email"],
  ["Access and identity", "management"],
  ["Internet and IP", "services"],
  ["Procurement"],
  ["Telecoms"],
  ["Videoconferencing"]
];

const FooterMenu = () =>
  <div className="col span-6">
    <div className="linklist linklist--2col">
      <div className="linklist__title v-pad-small-mobile">
        <h3>{`Network & IT services`}</h3>
      </div>

      <ul>
        {items.map(item => <FooterMenuItem item={item} key={item} />)}
      </ul>
    </div>
  </div>;

export default FooterMenu;
