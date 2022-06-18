import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { Transition, TransitionStatus } from "react-transition-group";
import ScrollViewContainer from "../components/ScrollViewContainer";

const TransistionPage: NextPage = () => {
  return (
    <div>
      <ScrollViewContainer className="p-2 flex flex-col gap-2">
        <h1 className="text-center text-2xl font-bold">Reid Cole</h1>
        <h1 className="text-center text-2xl font-bold">Web Developer</h1>
      </ScrollViewContainer>
    </div>
  );
};

export default TransistionPage;
