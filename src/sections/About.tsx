import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import BookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import Map from "@/assets/images/map.jpg";
import SmileEmoji from "@/assets/images/SmileEmoji.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const tollboxItems = [
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
    title: "Chrome",
    iconType: ChromeIcon,
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
    left: "4%",
    top: "70%",
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
    left: "50%",
    top: "68%",
  },
];
/* linha 98 */
export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="Sobre mim"
          title="A Glimpse Into My World"
          description="Aprenda mais sobre quem eu sou,o que faço e o que me inspira "
        />
        <div className="mt-20 flex flex-col gap-8">
      <div className="grid md:grid-cols-5 grid-cols-1 gap-8">
          <Card className="h-[320px] md:col-span-2">
            <CardHeader
              title="My Reads"
              description="explore the books shaping my perpectives"
            />
            <div className="w-40 mx-auto mt-2 md:mt-0">
              <Image src={BookImage} alt="book cover" />
            </div>
          </Card>
          <Card className="h-[320px] md:col-span-3">
            <CardHeader
              title="My Tollbox"
              description="EXplorre the technologies and tools i use to craft excepcional experiences"
              className=""
            />
            <ToolboxItems items={tollboxItems} className="" />
            <ToolboxItems
              items={tollboxItems}
              className="mt-6"
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <Card className="h-[320px] p-0 flex-col flex col-span-3">
            <CardHeader
              title="Beyond the code"
              description="Explore myn interets and hobbies beyonde the"
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
          <Card className="h-[320px] p-0 relative col-span-2">
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
