"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

const PROJECT_ID = "wlsd3xkupd";

export default function ClarityInit() {
  useEffect(() => {
    Clarity.init(PROJECT_ID);
  }, []);

  return null;
}
