import React, { useState } from "react";
import "./NavBar.scss";

const NavBar = () => {
  const [navColorScroll, setNavColorScroll] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY > 80) {
      setNavColorScroll(true);
    } else {
      setNavColorScroll(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <nav className={navColorScroll ? "o-nav-arepa scrolled" : "o-nav-arepa"}>
      

        <div className="o-nav-right">
          <h2>.Lyrics</h2>
        </div>

      
      </nav>


     


    </>
  );
};

export default NavBar;
