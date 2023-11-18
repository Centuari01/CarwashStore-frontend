import React from "react";
import "./Body.css";
import Image from "next/image";
import Link from "next/link";

const Body = () => {
  return (
    <div className="Body--Parent">
      <div className="Heading--Container">
        <div className="flex flex-col">
          <p className="Tittle">The cleaning you deserve.</p>
        </div>

        <div className="Buttons-Container">
          <Link href="/contact" className="Button">
            and we Provide
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Body;
