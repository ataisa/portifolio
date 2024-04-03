import { projectsInfo } from "@/projectsApi";
import clsx from "clsx";
import { useMemo, useState } from "react";
import { IconType } from "react-icons";
import { MdApps, MdBarChart, MdManageSearch } from "react-icons/md";
import ProjectCard from "./ProjectCard";

const FilterButton = ({
  Icon,
  ...props
}: {
  onClick: () => void;
  selected: boolean;
  text: string;
  Icon: IconType;
}) => {
  return (
    <button
      onClick={props.onClick}
      className={clsx(
        "group relative flex h-full cursor-pointer content-center items-center gap-2",
        "justify-center",
        {
          " before:absolute before:bottom-0 before:h-1 before:w-full before:rounded before:bg-secondary-100 before:content-['']":
            props.selected,
        },
      )}
    >
      <Icon
        className={clsx(
          "fill-dark-100 text-xl duration-500 group-hover:fill-secondary-100",
          {
            "fill-secondary-100": props.selected,
          },
        )}
      />
      <p
        className={clsx(
          "text-xs uppercase text-dark-100 duration-500",
          "group-hover:text-secondary-100",
          {
            "text-secondary-100": props.selected,
          },
        )}
      >
        {props.text}
      </p>
    </button>
  );
};

function ProjectSection() {
  const [section, setSection] = useState("all");

  const projectsSelected = useMemo(() => {
    const res = projectsInfo.filter(
      (project) =>
        (project.tag === section ||
          project.tag === "all" ||
          section === "all") &&
        project,
    );
    return res;
  }, [section]);

  return (
    <section
      className={clsx(
        "flex w-full snap-start gap-20 bg-primary-linear pb-[5vh]",
      )}
      id="project"
    >
      <div className="m-auto w-[90vw] max-w-7xl pt-16 shadow-sm">
        <h1 className="mb-8 font-archivo text-2xl font-semibold uppercase text-white-ice lg:text-4xl">
          Projetos
        </h1>
        <div className="grid h-16 w-full grid-cols-3">
          <FilterButton
            onClick={() => setSection("all")}
            selected={section === "all"}
            Icon={MdApps}
            text="Todos"
          />
          <FilterButton
            onClick={() => setSection("BI")}
            selected={section === "BI"}
            Icon={MdBarChart}
            text="BI"
          />
          <FilterButton
            onClick={() => setSection("data")}
            selected={section === "data"}
            Icon={MdManageSearch}
            text="Dados"
          />
        </div>
        <div
          className={clsx(
            "flex flex-col flex-wrap",
            "max-h-[42rem] w-full",
            "mx-1 my-auto gap-8 overflow-y-auto px-8 py-5",
            "scrollbar",
          )}
        >
          {projectsSelected.map((project) => (
            <ProjectCard
              key={`${project.name}-${project.tag}`}
              imgUrl={project.imgUrl}
              name={project.name}
              about={project.about}
              projetoUrl={project.projetoUrl}
              downloadUrl={project?.downloadUrl}
              tecs={project.tecs}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { ProjectSection };
