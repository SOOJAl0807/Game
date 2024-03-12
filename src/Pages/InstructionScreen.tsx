import React from "react";
import { Link } from "react-router-dom";

export const InstructionScreen = () => {
  return (
    <div className="page-content center">
     <p><ul><strong>Instruction</strong></ul></p>
     <br></br>
     <br></br>
     <p>1. You have to find the Matching Cards From both pair.</p>
     <p>2. Matching Records Should be like A-Apple, D-Dog.</p>
      <Link
        to={"/activity"}
        className="button inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
        Play
      </Link>
    </div>
  );
};
