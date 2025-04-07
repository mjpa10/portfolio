import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <section id="contato">
    <div className="py-16 pt-12 lg:py-24 lg:pt-20 ">
      <div className="container">
        <div
          className="bg-gradient-to-r from-emerald-300 to-sky-400
      text-gray-900 py-8 px-10 rounded-3xl md:text-left text-center relative overflow-hidden
      z-0"
        >
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Vamos criar algo incrivel juntos?
              </h2>
              <p className="text-sm mt-2 md:text-base">
              Precisa de um desenvolvedor Fullstack com experiência?
               Entre em contato e vamos discutir como posso contribuir para o seu projeto!
              </p>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/matheus-josee/"
                className="text-white bg-gray-900 inline-flex items-center
               px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 "
               target="_blank"
               rel="noopener noreferrer">
                <span className="font-semibold">Entre em contato</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};
