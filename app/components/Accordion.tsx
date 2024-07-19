"use client";

import { useState } from "react";
import AccordionEntry from "../interfaces/AccordionEntry";
import AccordionItem from "./AccordionItem";

interface AccordionProps {
  entries: AccordionEntry[];
}

export default function Accordion({ entries }: AccordionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
    undefined
  );

  return (
    <section className="flex flex-col gap-2">
      {entries.map((entry: AccordionEntry, index: number) => {
        const isSelected = selectedIndex === index;
        return (
          <AccordionItem
            key={index}
            index={index}
            title={entry.title}
            isOpen={isSelected}
            setSelectedIndex={setSelectedIndex}
          >
            {entry.children}
          </AccordionItem>
        );
      })}
    </section>
  );
}
