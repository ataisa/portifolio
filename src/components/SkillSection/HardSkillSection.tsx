import clsx from "clsx";
import Image from "next/image";
import { IconType } from "react-icons";
import { FaDatabase } from "react-icons/fa";
import { RiFileExcel2Fill } from "react-icons/ri";
import {
  SiApachehadoop,
  SiJupyter,
  SiMysql,
  SiPowerbi,
  SiPython,
  SiR,
} from "react-icons/si";

function Skill({ text, Icon }: { text: string; Icon: IconType }) {
  return (
    <li className="flex max-w-[5rem] flex-col items-center justify-center gap-2 rounded-xl px-4 py-2 shadow-md shadow-dark-100/25">
      <Icon className="fill-dark-100 text-4xl" />
      <p className="font-light text-dark-100">{text}</p>
    </li>
  );
}
function SideIcons({ Icon }: { Icon: IconType }) {
  return (
    <li className="rounded-md  bg-dark-100 p-2 ">
      <Icon className="fill-white-ice text-xs" />
    </li>
  );
}

function SubTitle({ text }: { text: string }) {
  return <h2 className="font-semibold text-dark-100">{text}</h2>;
}

const HardSkillSection = () => {
  return (
    <>
      <div className="flex max-w-md flex-1 flex-col gap-4">
        <SubTitle text="Habilidades" />
        <ul className="flex flex-wrap gap-3">
          <Skill text="power BI" Icon={SiPowerbi} />
          <Skill text="Excel" Icon={RiFileExcel2Fill} />
          <Skill text="MySQL" Icon={SiMysql} />
          <Skill text="Python" Icon={SiPython} />
          <Skill text="Jupyter" Icon={SiJupyter} />
        </ul>
      </div>
      <div className="flex max-w-md flex-1 flex-col gap-4 ">
        <SubTitle text="Em estudo" />
        <ul className="flex flex-wrap gap-3">
          <Skill Icon={SiApachehadoop} text="Hadoop" />
          <Skill Icon={FaDatabase} text="big data" />
          <Skill Icon={SiR} text="R" />
        </ul>
      </div>
      <div className="flex max-w-md flex-1 flex-col gap-4">
        <SubTitle text="Projeto em destaque" />
        <div className="flex gap-4">
          <div className="w-full overflow-hidden rounded-xl bg-primary-25">
            <Image
              className="w-full object-fill"
              width={200}
              height={200}
              src="/images/projetos/vendas.jpeg"
              alt="imagem do projeto"
            />
          </div>
          <ul className="flex w-fit flex-col flex-wrap items-end gap-4">
            <SideIcons Icon={SiPowerbi} />
            <SideIcons Icon={RiFileExcel2Fill} />
          </ul>
        </div>
        <div className="flex flex-col gap-2 font-poppins text-dark-25">
          <h3 className="text-lg uppercase">Dashboard de vendas</h3>
          <p className="text-sm font-light">
            Esse Dashboard apresenta além dos gerentes que mais vendeu, como
            também a região, também fiz versão mobile pra melhorar visualização
            no celular.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-start gap-2">
          <a
            className={clsx(
              "rounded-xl bg-dark-25 px-12 py-3 text-white-default duration-500",
              "hover:opacity-80",
            )}
            href="https://www.linkedin.com/posts/isadatasciense_acompanhamentodevendas-businessintelligence-activity-7178172582142107649-9WgV?utm_source=share&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
          >
            Ver Projeto
          </a>
        </div>
      </div>
    </>
  );
};

export { HardSkillSection };
