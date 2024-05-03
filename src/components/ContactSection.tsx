import clsx from "clsx";
import { FormEvent, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";

function ContactSection() {
  const [subject, setSubject] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [isWrong, setIsWrong] = useState(false);

  function HandleSendEmail(event: FormEvent) {
    event.preventDefault();

    if (!subject || !message) {
      setIsWrong(true);
      return;
    } else {
      setIsWrong(false);
      const url = `mailto:isabela.mf.santos@gmail.com?subject=${subject}&body=${message}`;
      window.open(url);
    }
  }
  return (
    <div className="m-auto w-[80%] max-w-3xl pt-12" id="contact">
      <h1 className="font-archivo text-lg font-semibold text-primary-100">
        CONTATO
      </h1>
      <p className="text-primary-100">isabela.mf.santos@gmail.com</p>

      <form
        method="POST"
        encType="multipart/form-data"
        name="EmailForm"
        className="mt-10 flex flex-col gap-6"
        onSubmit={HandleSendEmail}
      >
        <label className={"flex flex-col"}>
          <p
            className={clsx("mb-2 ml-0 hidden text-sm text-primary-100", {
              block: isWrong && !subject,
            })}
          >
            Por favor preencha o campo*
          </p>
          <input
            type="text"
            placeholder="Assunto*"
            name="ContactName"
            value={subject}
            className={clsx(
              "h-12 border-2 border-gray-100",
              " bg-white-default px-3 py-6 text-base text-gray-100",
              {
                "border-2 border-primary-100 placeholder:text-primary-100":
                  isWrong && !subject,
              },
            )}
            onChange={(e) => setSubject(e.target.value)}
          />
        </label>
        <label className={clsx({ error: isWrong && !message })}>
          <p>Por favor preencha o campo*</p>
          <textarea
            placeholder="Sua mensagem*"
            name="ContactComment"
            value={message}
            className={clsx(
              "min-h-[8rem] min-w-full max-w-full",
              "border-2 border-solid border-gray-100 bg-white-default px-3 py-6 text-base text-gray-100",
              {
                "border-2 border-solid border-primary-100 placeholder:text-primary-100":
                  isWrong && !message,
              },
            )}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className={clsx(
            "h-16 cursor-pointer rounded bg-primary-100 text-white-default duration-500",
            "font-archivo text-2xl font-bold",
            "hover:bg-primary-50",
          )}
        >
          ENVIAR
        </button>
      </form>
      <p
        className={clsx(
          "mx-auto mb-0 mt-6 block font-archivo font-bold",
          "text-2xl text-primary-100 ",
        )}
      >
        OU
      </p>
      <a
        href="https://wa.me/5511978300757/?text=Oi%20isabela%20vim%20pelo%20site"
        target="_blank"
        rel="noreferrer"
        className={clsx(
          "mx-auto mb-0 mt-6 flex gap-2 font-archivo font-bold",
          "text-dark-25 no-underline",
        )}
      >
        Mande uma mensagem no{" "}
        <strong className=" flex gap-2 text-primary-100 underline">
          WhatsApp <BsWhatsapp />
        </strong>
      </a>
    </div>
  );
}

export { ContactSection };
