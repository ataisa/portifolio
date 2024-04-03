"use client";

import { useState, useEffect, MutableRefObject, RefObject } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const LinkNav = ({
  text,
  href,
  onClick,
}: {
  text: string;
  href: string;
  onClick: () => void;
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={twMerge("font-archivo text-lg font-bold text-primary-100")}
    >
      {text}
    </a>
  );
};

function Nav({ scrollRef }: { scrollRef: RefObject<HTMLElement> }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!scrollRef.current) return;
    const handleScroll = () => {
      setPrevScrollPos((prevScroll) => {
        if (!scrollRef.current) return prevScroll;
        setVisible(scrollRef?.current?.scrollTop > prevScroll);
        return scrollRef.current.scrollTop;
      });
    };

    scrollRef.current.addEventListener("scroll", handleScroll);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => scrollRef.current?.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, scrollRef]);

  const SectionsNav = [
    { name: "Sobre", ref: "#about", id: 0 },
    { name: "Habilidades", ref: "#skill", id: 1 },
    { name: "Projetos", ref: "#project", id: 2 },
    { name: "Contato", ref: "#contact", id: 3 },
  ];

  return (
    <nav
      className={twMerge(
        "relative z-30 flex items-end justify-between bg-white-pink-100",
        "fixed top-0 text-dark-25 transition-all duration-500 ease-in",
        "h-[10vh] w-full px-[2%]",
        "lg:justify-end lg:gap-8 lg:px-[10%]",
        clsx({
          "-top-24": !!visible,
        }),
      )}
    >
      {SectionsNav.map((section) => (
        <LinkNav
          href={section.ref}
          text={section.name}
          key={section.name}
          onClick={() => setSelected(section.id)}
        />
      ))}
      <span
        className={clsx(
          "absolute h-[2px] w-full bg-primary-100 transition-all duration-300 ",
          {
            "lg:right-[9.8%] lg:w-[5rem]": selected === 3,
            "lg:right-[calc(6rem+9.8%)] lg:w-[5.6rem]": selected === 2,
            "lg:right-[calc(12.5rem+9.8%)] lg:w-[7.6rem]": selected === 1,
            "lg:right-[calc(20.5rem+9.8%)] lg:w-[4.7rem]": selected === 0,
          },
        )}
      ></span>
    </nav>
  );
}

export { Nav };
