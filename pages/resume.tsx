import React, { useEffect } from "react";
import Router from "next/router";
const Resume = () => {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == "/resume") {
      Router.push("/resume.pdf");
    }
  });
  return null;
};

export default Resume;
