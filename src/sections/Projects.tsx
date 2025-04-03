import VueDotnet from "@/assets/images/Agenda_Vue_Dotnet.png";
import CalendarioSwagger from "@/assets/images/Swagger_Calendario.jpg";
import FrontVue from "@/assets/images/front_vue.jpg";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Github",
    year: "2024",
    title: "Agenda Vue Dotnet",
    results: [
      { title: "Gerenciamento completo de contatos com CRUD" },
      { title: "Validação de e-mails e telefones para garantir a unicidade" },
      { title: "Aplicação toda funcionando em Docker " },
    ],
    link: "https://github.com/mjpa10/Agenda_Vue_Dotnet.git",
    image: VueDotnet,
  },
  {
    company: "Github",
    year: "2024",
    title: ".NET Calendario",
    results: [
      {
        title:
          "CRUD completo para lembretes com diferentes frequências(diária, semanal, mensal, anual)",
      },
      { title: "JWT para autenticação e autorização de usuários na API" },
      { title: "Entity Framework Core, MySQL, AutoMapper, Swagger" },
    ],
    link: "https://github.com/mjpa10/.NET_Calendario",
    image: CalendarioSwagger,
  },
  {
    company: "Github",
    year: "2024",
    title: "Agenda Web",
    results: [
      { title: "Criação, leitura, atualização e exclusão (CRUD) de contatos" },
      { title: "Navegação entre diferentes páginas da aplicação" },
      { title: "espostas dinâmicas com base em requisições à API." },
    ],
    link: "https://github.com/mjpa10/Vue.js_Agenda",
    image: FrontVue,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-20 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Resultados do Mundo Real"
          title="Projetos em Destaque"
          description="Soluções desenvolvidas com tecnologia de ponta para entregar performance, inovação e eficiência."
        />

        <div className="flex flex-col md:mt-20 mt-10 gap-20 ">
          {portfolioProjects.map((project) => (
            <Card
              key={project.title}
              className=" px-8 pt-8 pb-0 md:px-10 md:pt-12 lg:pt-16 lg:px-20 "
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div
                    className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex
              gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text"
                  >
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title} </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="bg-white text-gray-950 h-12 w-full md:w-auto px-6
            rounded-xl font-semibold inline-flex items-center justify-center
            gap-2 mt-8"
                    >
                      <span>Visitar Projeto</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full
                    lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
