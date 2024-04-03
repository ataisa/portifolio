import { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import { RiFileExcel2Fill } from "react-icons/ri";
import {
  SiAnaconda,
  SiJupyter,
  SiMysql,
  SiPowerbi,
  SiPython,
} from "react-icons/si";

export type projectInfoType = {
  imgUrl: StaticImageData | string;
  name: string;
  about: string;
  projetoUrl: string;
  downloadUrl?: string;
  tecs: IconType[];
  tag: "BI" | "data" | "all";
};

const projectsInfo: projectInfoType[] = [
  {
    imgUrl: "/images/projetos/mudandoAsPecas.jpeg",
    name: "Mudando as Peças",
    about: "um desafio de css feito com objetivo de testar conhecimento",
    projetoUrl:
      "https://www.linkedin.com/posts/isadatasciense_oportunidade-autismo-tea-activity-7008581765850140673-HRa1?utm_source=share&utm_medium=member_android",
    tecs: [],
    tag: "all",
  },

  {
    imgUrl: "/images/projetos/rh.jpeg",
    name: "DASHBOARDS RECURSOS HUMANOS",
    about:
      "Nesse dashboard mostra a pesquisa de satisfação dos candidatos da empresa em relação ao processo seletivo e o ambiente de trabalho. ",
    projetoUrl:
      "https://www.linkedin.com/posts/isadatasciense_satisfaaexaetodascolaboradores-rh-culturaorganizacional-activity-7177014893722689536-i9BL?utm_source=share&utm_medium=member_android",
    tecs: [RiFileExcel2Fill, SiPowerbi],
    tag: "BI",
    downloadUrl: "files/projetos/RecursosHumanos.pbix",
  },
  {
    imgUrl: "/images/projetos/logistica.jpeg",
    name: "DASHBOARD LOGÍSTICA",
    about:
      "Nesse dashboard mostra além do faturamento, como também a forma de entrega e motivo de devolução.",
    projetoUrl:
      "https://www.linkedin.com/posts/isadatasciense_logaedstica-faturamento-gestaetodeentregas-activity-7176275744673697792-OkpT?utm_source=share&utm_medium=member_android",
    tecs: [RiFileExcel2Fill, SiPowerbi],
    tag: "BI",
    downloadUrl: "files/projetos/Logistica.pbix",
  },
  {
    imgUrl: "/images/projetos/vendas.jpeg",
    name: "DASHBOARD VENDAS",
    about: "Nesse dashboard mostra onde mais vende, e qual gerente vende mais.",
    projetoUrl:
      "https://www.linkedin.com/posts/isadatasciense_acompanhamentodevendas-businessintelligence-activity-7178172582142107649-9WgV?utm_source=share&utm_medium=member_android",
    tecs: [RiFileExcel2Fill, SiPowerbi],
    tag: "BI",
    downloadUrl: "files/projetos/Vendedores.pbix",
  },

  {
    imgUrl: "/images/projetos/gestaoDeProjetos.jpeg",
    name: "GESTÃO DE PROJETO",
    about:
      "Nesse dashboard mostra além da planta interativa, também como gastos entre os cômodos e investimentos.",
    projetoUrl:
      "https://www.linkedin.com/posts/isadatasciense_powerbi-businessintelligence-projeto-activity-7169760090969751553-8jKt?utm_source=share&utm_medium=member_android",
    tecs: [RiFileExcel2Fill, SiPowerbi],
    tag: "BI",
    downloadUrl: "files/projetos/GestaoDeProjetos.pbix",
  },

  {
    imgUrl: "/images/projetos/covid19.jpeg",
    name: "DASHBOARD COVID19",
    about:
      "Esse dashboard já e conectado ao banco que montei, nele mostra onde mais teve casos confirmados e a comparação de óbito pra ter a noção da fatalidade que causa.",
    projetoUrl:
      "https://www.linkedin.com/posts/isadatasciense_covid19-coronavirus-brasil-activity-7180942069492813825-c9hQ?utm_source=share&utm_medium=member_desktop",
    tecs: [RiFileExcel2Fill, SiPowerbi],
    tag: "BI",
    downloadUrl: "files/projetos/COVID19.pbix",
  },

  {
    imgUrl: "/images/projetos/scriptExportacao.jpeg",
    name: "SCRIPT EXPORTAÇÃO",
    about: "Script feito pra fazer backup do banco em CSV",
    projetoUrl:
      "https://www.linkedin.com/posts/isadatasciense_covid19-coronavirus-brasil-activity-7180587224520933376-H-mx?utm_source=share&utm_medium=member_android",
    tecs: [SiAnaconda, SiJupyter, SiPython],
    tag: "data",
    downloadUrl: "files/projetos/COVID19EXPORT.ipynb",
  },

  {
    imgUrl: "/images/projetos/databaseCovid19.jpeg",
    name: "BANCO DE DADOS COVID19",
    about:
      "Banco criado com API do governo para ter maiores informações sobre o acontecimento",
    projetoUrl:
      "https://www.linkedin.com/posts/isadatasciense_covid19-coronavirus-brasil-activity-7180557025171365888-_Wry?utm_source=share&utm_medium=member_android",
    tecs: [SiMysql],
    tag: "data",
  },
];

export { projectsInfo };
