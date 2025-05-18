import Image from "next/image";

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          Sobre mim
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/icons/road-card.png"
                className="hidden rounded-[15px] dark:block"
                alt="payments illustration dark"
                width={1207}
                height={929}
              />
              <Image
                src="/payments-light.png"
                className="rounded-[15px] shadow dark:hidden"
                alt="payments illustration light"
                width={1207}
                height={929}
              />
            </div>
          </div>

          <div className="relative space-y-4">
            <p className="text-muted-foreground">
              {" "}
              <span className="text-accent-foreground font-bold">
                Sou uma pessoa naturalmente curiosa
              </span>{" "}
              — sempre buscando entender como as coisas funcionam e aprender algo novo no processo.
            </p>
            <p className="text-muted-foreground">
              Gosto de pensar com calma, analisar as situações com cuidado e encontrar soluções com lógica e pensamento crítico. Também acredito muito no valor das boas relações no dia a dia de trabalho — conversar, ouvir, trocar ideias e construir junto. Aprender com os mais experientes é algo que valorizo muito e sempre busco nas minhas leituras e no dia a dia.
            </p>

            <div className="pt-6">
              <blockquote className="border-l-4 pl-4">
                <p>
                  Agradeço bastante pela oportunidade de poder retornar à Fenasbac. Estou muito feliz em fazer parte do time novamente e comprometido em dar o meu melhor. Contem comigo para contribuir com dedicação e entusiasmo. O carinho de todos vocês comigo é algo que jamais deixarei de valorizar.
                </p>

                <div className="mt-6 space-y-3">
                  <cite className="block font-small">Pedro Nunes <br /> Futuro Desenvolvedor Front End (e quem sabe fullstack!)</cite>
                  <img
                    className="dark:invert"
                    src="/icons/logo-fenasbac-new.png"
                    alt="Nvidia Logo"
                    style={{ width: "120px", height: "60px" }}
                  />
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
