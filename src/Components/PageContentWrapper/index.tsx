import React, { PropsWithChildren } from "react";
import "./s.css";

interface PageContentWrapperProps extends PropsWithChildren {

}

const PageContentWrapper = ({ children }: PageContentWrapperProps) => {
  return (
    <div className={"pageContentWrapper"}>
      {children}
    </div>
  );
};

export default PageContentWrapper;