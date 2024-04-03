import clsx from "clsx";
import { IconType } from "react-icons";
import { MdBook, MdDashboard } from "react-icons/md";

type CardPropsType = {
  title: string;
  description: string;
  onClick: () => void;
  Icon: IconType;
  hasOpen: boolean;
};

const Card = ({
  title,
  description,
  Icon,
  onClick,
  hasOpen,
}: CardPropsType) => {
  return (
    <div
      className={clsx(
        "flex h-fit max-w-xs flex-col gap-6 rounded-3xl bg-white-default px-6 pt-12",
        {
          "pb-6 shadow-md": hasOpen,
          "rounded-b-none": !hasOpen,
        },
      )}
    >
      <div className="flex w-full">
        <Icon className="fill-dark-100 text-6xl" />
        <div className="flex w-full flex-col items-center">
          <p className="font-poppins uppercase text-dark-100">{title}</p>
          <button
            onClick={onClick}
            className="w-full max-w-[10rem] rounded-md bg-dark-100 px-4 py-1 text-white-ice"
          >
            {hasOpen ? "Ver menos" : "Ver mais"}
          </button>
        </div>
      </div>
      <div
        className={clsx("max-h-[0vh] w-full overflow-hidden duration-500", {
          "max-h-[20vh]": hasOpen,
        })}
      >
        <p className="font-poppins text-dark-100">{description}</p>
      </div>
    </div>
  );
};

const Cards = ({
  selectedCard,
  setSelectedCard,
}: {
  selectedCard: string;
  setSelectedCard: (value: "hardSkill" | "softSkill") => void;
}) => {
  return (
    <div className="absolute -top-32 left-0 right-0 flex justify-around gap-2">
      <Card
        title="hard-skill"
        Icon={MdDashboard}
        hasOpen={selectedCard === "hardSkill"}
        onClick={() => setSelectedCard("hardSkill")}
        description="Abaixo está alguns dos softwares que tenho conhecimentos e estudos."
      />
      <Card
        title="Soft-skill"
        Icon={MdBook}
        hasOpen={selectedCard === "softSkill"}
        onClick={() => setSelectedCard("softSkill")}
        description="Abaixo está umas das minhas habilidades e experiências que obtive no caminho."
      />
    </div>
  );
};

export { Cards };
