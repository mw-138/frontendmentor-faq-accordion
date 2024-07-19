"use client";

import Minus from "@/public/icon-minus.svg";
import Plus from "@/public/icon-plus.svg";
import Image from "next/image";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import { cn } from "../utils";

interface AccordionItemProps extends PropsWithChildren {
  index: number;
  title: string;
  isOpen: boolean;
  setSelectedIndex: Dispatch<SetStateAction<number | undefined>>;
}

export default function AccordionItem({
  index,
  title,
  isOpen,
  children,
  setSelectedIndex,
}: AccordionItemProps) {
  const contentRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else if (contentRef.current) {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isOpen]);

  return (
    <section className="flex-col w-full rounded-lg p-2 flex">
      <h2
        className="cursor-pointer font-[600] text-darkPurple hover:text-purple transition-colors duration-200 flex items-center justify-between"
        onClick={() => setSelectedIndex(isOpen ? undefined : index)}
      >
        {title}
        <Image
          src={isOpen ? Minus : Plus}
          width={0}
          height={0}
          alt="toggle indicator"
          className="h-fit w-8"
        />
      </h2>
      <section
        ref={contentRef}
        className={cn(
          `max-h-0 transition-max-height duration-200 overflow-hidden`,
          {
            "mt-4 h-fit": isOpen,
          }
        )}
      >
        {children}
      </section>
    </section>
  );
}
