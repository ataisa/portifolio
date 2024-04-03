import clsx from "clsx";
import Image from "next/image";
import { IconType } from "react-icons";

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

const SoftSkillSection = () => {
  return (
    <>
      <div className="flex max-w-md flex-1 flex-col gap-4">
        <SubTitle text="Minha historia" />

        <p className="font-poppins text-sm text-dark-25">
          Desde dos 5 anos de idade sou apaixonada por tecnologia e artes, tanto
          que minha primeira experiência foi o mundo do design digital, até que
          descobri o front end e investi nele. Pouco tempo depois consegui um
          estágio onde tinha análise de dados e percebi nele que pode ter duas
          coisas que amo tecnologia e artes. Desde então venho estudado e
          aprimorando no assunto, atualmente procuro uma vaga em dados para ter
          meu crescimento.
        </p>
      </div>
      <div className="flex max-w-md  flex-col gap-4  text-dark-25">
        <SubTitle text="Habilidades" />
        <ul className="ml-4 list-disc">
          <li>Criatividade</li>
          <li>Resolução de problemas</li>
          <li>Flexibilidade</li>
          <li>Resiliência</li>
        </ul>
      </div>
      <div className="flex max-w-md flex-1 flex-col gap-4">
        <SubTitle text="Projeto em destaque" />
        <div className="flex gap-2">
          <div className="w-full overflow-hidden rounded-xl">
            <Image
              width={200}
              height={200}
              className="w-full object-contain object-bottom"
              src="/images/projetos/mudandoAsPecas.jpeg"
              alt="imagem do projeto"
            />
          </div>
        </div>
        <div className="flex flex-col font-poppins text-dark-25">
          <h3 className="text-lg uppercase">Mudando as peças</h3>
          <p className="text-sm font-light">
            Apresentação de pitch do app mobile &quot;Mudando as peças&quot;. Eu
            criadora do app tive como objetivo ajudar o público infantil com
            TEA/TDAH, o app tinha telas interativas e educacionais que ajudam no
            desenvolvimento infantil.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-start gap-2">
          <a
            className={clsx(
              "rounded-xl bg-dark-25 px-12 py-3 text-white-default duration-500",
              "hover:opacity-80",
            )}
            href="https://www.linkedin.com/posts/isadatasciense_oportunidade-autismo-tea-activity-7008581765850140673-HRa1?utm_source=share&utm_medium=member_android"
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

export { SoftSkillSection };
