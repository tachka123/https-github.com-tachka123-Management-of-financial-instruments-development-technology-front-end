import React, { PropsWithChildren } from "react";
import "./s.css";

const PageWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className={"pageWrapper"}>
      {children}
    </div>
  );
};

export default PageWrapper;