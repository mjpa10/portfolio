import { title } from "process";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Whatsapp",
    href: "https://wa.me/5581995600888",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/matheus-josee/",
  },
  {
    title: "Github",
    href: "https://github.com/mjpa10",
  },
  {
    title: "Email",
    href: "mailto:m.theus.jose.pereira@gmail.com",
  },
  {
    title: "Curriculo",
    href: "",
  },
];

export const Footer = () => {
  return (
    <footer className="lg:pt-26 md:pt-20 relative z-10 overflow-x-clip">
      <div className="absolute h-[300px] w-[1600px] bottom-0 left-1/2
      -translate-x-1/2 bg-emerald-300/30 -z-10
      [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] "></div>
      <div className="container">
        <div 
        className="border-t border-white/15 py-6 text-sm flex flex-col
         md:flex-row items-center md:justify-between gap-8"
         >
          <div 
          className="text-white/40"
          >&copy; 2025, Todos os direitos reservados.
          </div>  
        <nav className="flex flex-col md:flex-row items-center gap-8">
          {footerLinks.map((link) => (
            <a
              href={link.href}
              key={link.title}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex  items-center gap-1.5 relative z-10"
            >
              <span className="font-semibold">{link.title}</span>
              <ArrowUpRightIcon className="size-4"/>
            </a>
          ))}
        </nav>
        </div>
      </div>
    </footer>
  );
};
