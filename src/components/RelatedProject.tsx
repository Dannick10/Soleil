"use client";
import Image from "next/image";
import Link from "next/link";

type relatedProjects = {
  title: string;
  status: string;
  image: string;
  link: string;
};

const RelatedProjects = () => {
  const patch = "/images/relatedprojects";
  const projects: relatedProjects[] = [
    {
      title: "One Park Perdizes",
      status: "Pronto para morar | Perdizes",
      image: `${patch}/nativtatuape.jpg`,
      link: "https://www.lavvi.com.br/empreendimentos/one-park-perdizes",
    },
    {
      title: "Nativ Tatuapé",
      status: "Pronto para Morar | Tatuapé",
      image: `${patch}/oneparkperdizes.jpg`,
      link: "https://www.lavvi.com.br/empreendimentos/nativ-tatuape",
    },
    {
      title: "Wonder By Praças da Cidade | Brás",
      status: "Pronto para Morar | Brás",
      image: `${patch}/pracamooca.jpg`,
      link: "https://www.lavvi.com.br/empreendimentos/wonder-by-pracas-da-cidade",
    },
    {
      title: "Praça Mooca | Brás",
      status: "Pronto para Morar | Brás",
      image: `${patch}/wonderbypracasdacidade.jpg`,
      link: "https://www.lavvi.com.br/empreendimentos/praca-mooca",
    },
  ];

  return (
    <section className="py-4">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <svg
            width="160"
            height="4"
            viewBox="0 0 160 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto my-4"
          >
            <rect width="160" height="4" fill="#B89355" />
          </svg>
          <h2 className="text-2xl font-light secondaryText mb-2">
            Empreendimentos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-4">
          {projects.map((project, index) => (
            <Link href={project.link} target="_blank" key={index}>
            <div className="group cursor-pointer">
              <div className="relative w-60 h-60 overflow-hidden mb-3">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
              </div>
              <h3 className="text-base font-medium secondaryText">
                {project.title}
              </h3>
              <p className="text-xs text-gray-500">{project.status}</p>
            </div>
                  </Link>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link href={"https://www.lavvi.com.br/empreendimentos"} target="_blank">
          <button className="btnPrimary">Veja todos os empreendimentos</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects;
