import { useState } from "react";

import { Cards } from "./Cards";
import { HardSkillSection } from "./HardSkillSection";
import { SoftSkillSection } from "./SoftSkillSection";

type sections = "hardSkill" | "softSkill";

function SkillSection() {
  const [selectedSection, setSelectedSection] = useState<sections>("hardSkill");

  const selections = {
    hardSkill: <HardSkillSection />,
    softSkill: <SoftSkillSection />,
  };

  return (
    <section
      className="flex w-full snap-start flex-col gap-40 bg-primary-25 "
      id="skill"
    >
      <div className="flex w-full justify-center pt-24 lg:justify-start lg:pl-[10%]">
        <h1 className="font-archivo text-5xl font-bold text-dark-25">
          Habilidades
        </h1>
      </div>
      <main className="relative flex flex-col gap-10 bg-secondary-25 md:rounded-t-[2rem]">
        <Cards
          selectedCard={selectedSection}
          setSelectedCard={setSelectedSection}
        />
        <div className="flex justify-center gap-6 px-10 pb-2 pt-36">
          {selections[selectedSection]}
        </div>
        <div className="h-20 bg-projects-bg bg-bottom bg-repeat-x"></div>
      </main>
    </section>
  );
}

export { SkillSection };
