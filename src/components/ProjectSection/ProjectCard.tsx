import { IconType } from "react-icons/lib";

import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  imgUrl: string | StaticImageData;
  name: string;
  about: string;
  projetoUrl: string;
  downloadUrl?: string;
  tecs: IconType[];
}

function ProjectCard({
  imgUrl,
  name,
  about,
  projetoUrl,
  downloadUrl,
  tecs,
}: ProjectCardProps) {
  return (
    <div
      className={clsx(
        "relative flex flex-col justify-between",
        "h-60 w-80 p-2",
        "overflow-hidden rounded-xl bg-white-default duration-200",
        "hover:px-4 hover:py-2",
        "after:absolute after:bottom-[-3px] after:left-0 after:content-['']",
        "after:h-[5px] after:w-full after:rounded-b-sm after:bg-secondary-100",
        "group",
      )}
    >
      <Image
        className={clsx(
          "absolute left-0 top-0 z-10  duration-500",
          "h-[74%] w-full rounded-sm object-cover",
          "group-hover:left-2 group-hover:top-4 group-hover:h-[38%] group-hover:w-[48%] group-hover:rounded-lg",
        )}
        src={imgUrl}
        width={250}
        height={250}
        alt={`${name}-img`}
      />
      <div className="bg cardScroll flex max-h-[50%] justify-end overflow-auto duration-200">
        <p className=" h-full w-[8.6rem]  text-sm font-light text-dark-25">
          {about}
        </p>
      </div>
      <div className={clsx("flex max-w-full items-end")}>
        <div
          className={clsx(
            "flex flex-1 flex-col items-start justify-between",
            "h-12 max-w-[10rem] duration-700",
            "group-hover:h-full",
          )}
        >
          <h1
            className={clsx(
              "max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm uppercase text-dark-100",
              "group-hover:whitespace-normal",
            )}
          >
            {name}
          </h1>
          <div className={clsx("flex max-h-7 flex-wrap gap-4 duration-700")}>
            {tecs?.map((TecIcon) => (
              <div
                className={clsx(
                  "flex items-center justify-center",
                  "mt-1 h-6 w-6",
                  "rounded-md bg-white-default shadow-md",
                )}
                key={TecIcon?.name}
              >
                <TecIcon className="fill-primary-100" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center gap-4">
          <a
            href={downloadUrl}
            target="_blank"
            rel="noreferrer"
            className={clsx(
              "flex h-10 w-36 cursor-pointer content-center items-center justify-center rounded-xl no-underline",
              "rounded-sm bg-primary-100 font-archivo text-xs font-semibold uppercase text-white-default",
              "duration-500 hover:border-0 hover:bg-primary-100/70 hover:text-white-ice",
              {
                " cursor-not-allowed opacity-40": !downloadUrl,
              },
            )}
          >
            BAIXAR
          </a>
          <a
            href={projetoUrl}
            target="_blank"
            rel="noreferrer"
            className={clsx(
              "flex h-10 w-36 cursor-pointer content-center items-center justify-center rounded-xl no-underline",
              "rounded-sm border-2 border-primary-100 font-archivo text-xs font-semibold uppercase text-primary-100",
              "duration-500 hover:border-0 hover:bg-primary-100 hover:text-white-ice",
            )}
          >
            Ver
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
