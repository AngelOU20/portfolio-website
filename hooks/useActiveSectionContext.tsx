import { ActiveSectionContext } from "@/context/activeSection";
import { useContext } from "react";

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveContext must be used within a ActiveSectionContextProvider"
    );
  }

  return context;
}
