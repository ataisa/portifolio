import { AnchorHTMLAttributes } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";
import { BackgroundBottom } from "./BackgroundBottom";
import { LeftLogo } from "./Logo";

type BaseButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  className?: ClassNameValue;
  text: string;
  href: string;
};
function BaseButton({ className, text, href, ...props }: BaseButtonProps) {
  return (
    <a
      href={href}
      className={twMerge(
        "rounded-lg px-6 py-3 font-archivo font-semibold uppercase text-white-ice",
        className,
      )}
      {...props}
    >
      {text}
    </a>
  );
}

function AboutSection() {
  return (
    <section
      className="relative mt-[12vh] flex w-full snap-end flex-col overflow-hidden pb-[10vw] align-top "
      id="about"
    >
      <main className="flex min-h-[60vh]">
        <aside className="flex w-full flex-col items-center gap-4">
          <div className="mx-auto text-center font-archivo">
            <h1 className=" text-6xl font-bold text-primary-100">
              Isabela Miranda
            </h1>
            <h2 className="text-5xl font-semibold text-dark-25">
              Analista de dados
            </h2>
          </div>
          <article
            className={twMerge(
              "flex w-10/12 flex-col gap-3 font-poppins text-dark-25  ",
              "md:ml-3 md:min-w-[30rem]",
            )}
          >
            <p>
              👋 Oi, me chamo Isabela tenho 21 anos e bem - vindo (a) ao meu
              site, nele tem meus projetos referente a profissão que quero
              seguir.
            </p>
            <p>
              Quero me tornar uma cientista de dados e atualmente busco
              experiência como analista.
            </p>
            <strong>✨ Fique a vontade ✨</strong>
          </article>
          <div className="mb-10 flex gap-8">
            <BaseButton
              href="/files/CV_2024-ISABELA-Analista-de-dados.pdf"
              className={twMerge(
                "border border-dark-100 text-dark-25",
                "hover:bg-dark-75 hover:text-white-pink-75",
              )}
              text="Baixar CV"
              download
            />
            <BaseButton
              href="#contact"
              className={twMerge(
                "border border-primary-100 bg-primary-100",
                "hover:bg-opacity-20 hover:text-primary-100",
              )}
              text="entrar em contato"
            />
          </div>
        </aside>
        <div
          className={twMerge(
            "absolute -right-[200vw]",
            "lg:relative lg:-right-[0vw] lg:h-full",
          )}
        >
          <LeftLogo />
        </div>
      </main>
      <footer className="absolute -bottom-[4vw] flex h-[24vw] w-full">
        <BackgroundBottom />

        <nav className="z-10 m-auto flex w-[50vw] max-w-lg justify-between gap-8">
          <a
            href="https://github.com/ataisa"
            target="_blank"
            className="group/git"
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.5033 5C16.2027 4.99358 3 17.8593 3 33.739C3 46.2963 11.2591 56.9706 22.7611 60.8908C24.3101 61.2699 24.0728 60.1967 24.0728 59.4641V54.4836C15.1283 55.5054 14.7657 49.7345 14.1659 48.7705C12.9531 46.7526 10.0858 46.2385 10.9427 45.2745C12.9794 44.2527 15.0557 45.5316 17.4616 48.9954C19.2018 51.5081 22.5964 51.084 24.3167 50.6663C24.6924 49.1561 25.4966 47.8065 26.604 46.759C17.3364 45.1395 13.4738 39.6257 13.4738 33.0707C13.4738 29.8896 14.5482 26.9656 16.6575 24.6071C15.3128 20.7191 16.7827 17.3902 16.9804 16.8953C20.8101 16.5612 24.7913 19.5687 25.1011 19.8065C27.2763 19.2346 29.7613 18.9325 32.5428 18.9325C35.3376 18.9325 37.8292 19.2474 40.0241 19.8258C40.769 19.2731 44.4602 16.6897 48.0196 17.0046C48.2107 17.4994 49.6476 20.7512 48.3821 24.5878C50.5177 26.9527 51.6053 29.9025 51.6053 33.09C51.6053 39.6578 47.7163 45.1781 38.4224 46.7719C39.2185 47.5351 39.8505 48.4454 40.2817 49.4495C40.7129 50.4536 40.9346 51.5314 40.9338 52.6199V59.8497C40.9865 60.428 40.9338 61 41.9225 61C53.5959 57.1634 62 46.412 62 33.7455C62 17.8593 48.7907 5 32.5033 5Z"
                fill="#FEF7F9"
                className="duration-200 ease-in group-hover/git:fill-secondary-100 "
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/isadatasciense/"
            target="_blank"
            className="group/git"
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33 2C16.4312 2 3 15.4312 3 32C3 48.5687 16.4312 62 33 62C49.5687 62 63 48.5687 63 32C63 15.4312 49.5687 2 33 2ZM25.6562 44.4344H19.5812V24.8844H25.6562V44.4344ZM22.5812 22.4844C20.6625 22.4844 19.4219 21.125 19.4219 19.4437C19.4219 17.7281 20.7 16.4094 22.6594 16.4094C24.6187 16.4094 25.8187 17.7281 25.8562 19.4437C25.8562 21.125 24.6187 22.4844 22.5812 22.4844ZM47.8437 44.4344H41.7687V33.6C41.7687 31.0781 40.8875 29.3656 38.6906 29.3656C37.0125 29.3656 36.0156 30.525 35.575 31.6406C35.4125 32.0375 35.3719 32.6 35.3719 33.1594V44.4312H29.2937V31.1187C29.2937 28.6781 29.2156 26.6375 29.1344 24.8812H34.4125L34.6906 27.5969H34.8125C35.6125 26.3219 37.5719 24.4406 40.85 24.4406C44.8469 24.4406 47.8437 27.1187 47.8437 32.875V44.4344Z"
                fill="#FEF7F9"
                className="duration-200 ease-in group-hover/git:fill-secondary-100 "
              />
            </svg>
          </a>
        </nav>
      </footer>
    </section>
  );
}

export { AboutSection };
