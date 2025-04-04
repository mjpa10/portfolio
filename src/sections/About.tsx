import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import BookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import Map from "@/assets/images/map.jpg";
import SmileEmoji from "@/assets/images/SmileEmoji.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import PythonIcon from "@/assets/icons/python-svgrepo-com.svg";
import cSharpIcon from "@/assets/icons/c--4.svg";
import VueIcon from "@/assets/icons/vue-svgrepo-com.svg";
import NetIcon from "@/assets/icons/NET core.svg";
import DockerIcon from "@/assets/icons/docker-ar21.svg";
import MySqlIcon from "@/assets/icons/mysql-logo-svgrepo-com.svg";

const tollboxItems = [
  {
    title: "C Sharp",
    iconType: cSharpIcon,
  },
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: ".NET",
    iconType: NetIcon,
  },
  {
    title: "MySql",
    iconType: MySqlIcon,
  },
  {
    title: "Docker",
    iconType: DockerIcon,
  },
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Vue",
    iconType: VueIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },

];
const hobbies = [
  {
    title: "Jogar",
    emoji: "🎮",
    left: "50%",
    top: "68%",
  },
  {
    title: "Treinar",
    emoji: "🏋🏻",
    left: "50%",
    top: "15%",
  },
  {
    title: "Filmes",
    emoji: "🎬",
    left: "15%",
    top: "20%",
  },
  {
    title: "Comer",
    emoji: "🍔",
    left: "60%",
    top: "45%",
  },
  {
    title: "Musica",
    emoji: "🎶",
    left: "5%",
    top: "0%",
  },
  {
    title: "Estudar",
    emoji: "📚",
    left: "5%",
    top: "45%",
  },
  {
    title: "Animais",
    emoji: "🐶",
    left: "4%",
    top: "70%",
  },
];
export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="Sobre mim"
          title="Um vislumbre do meu mundo"
          description="Saiba mais sobre quem sou, o que faço e o que me inspira. "
        />
        <div className="mt-20 flex flex-col gap-8">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 gap-y-8 lg:gap-8 lg:grid-cols-2">
          <Card className="h-[320px] md:h-[240px] md:col-span-2 lg:col-span-2">
            <CardHeader
              title="Eu"
              description="Sou estudante de Engenharia da Computação e desenvolvedor Fullstack com experiência em C#, .NET, Vue.js e Python. Apaixonado por tecnologia,
               mergulhei cedo no mundo da programação e desenvolvimento de software. Atualmente, foco em Machine Learning, Inteligência Artificial e Segurança da Informação,
               sempre buscando aprimorar minhas habilidades e criar soluções inovadoras."
              descriptionClassName="md:max-w-none "
              className="items-center"/>
            <div className="w-40 mx-auto mt-2 md:mt-0">
              
            </div>
          </Card>
          <Card className="h-[320px] md:col-span-3 lg:col-span-2">
            <CardHeader
              title="Tecnologias"
              description="Veja as tecnologias e ferramentas que utilizo para criar experiências excepcionais"
              className="lg:pb-1 items-center "
              descriptionClassName=" md:max-w-none md:gap-4 md:py-3"
            />
            <ToolboxItems items={tollboxItems} className="" />
            <ToolboxItems
              items={tollboxItems}
              className="mt-6"
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
          <Card className="h-[320px] p-0 flex-col flex md:col-span-3 lg:col-span-2">
            <CardHeader
              title="Além do Código"
              description="Mais do que tecnologia: minhas paixões, hobbies e o que me inspira no dia a dia."
              className="px-6 py-6"
            />
            <div className="relative flex-1 ">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.title}
                  className="inline-flex gap-2 px-6 items-center
              bg-gradient-to-r from-emerald-300 to-sky-400 
              rounded-full py-1.5 absolute"
              style={{
                left: hobby.left,
                top: hobby.top,
              }}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image src={Map} alt="map" 
            className="
            h-full w-full object-cover
            "
            />
            <div className="absolute top-1/3 left-1/3 
            -translate-x-1/2 -translate-y-1/2 size-20
            flex items-center justify-center after:content-[''] after:absolute after:inset-0
            after:outline after:outline-2 after:-outline-offset-2 after:rounded-full
            after:outline-gray-950/30
            rounded-full bg-gradient-to-r from-emerald-300 to bg-sky-400">
            <Image src={SmileEmoji} alt="me" 
            className="size-16 "/>
            </div>
          </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
