import React from "react";
import DevPennyUi from "../assets/portfolio/DevPennyUi.jpg";
import ModelCourosalWebSite from "../assets/portfolio/ModelCourosalWebSite.jpg";
import MusicSiteUi from "../assets/portfolio/MusicSiteUi.jpg";
import EdedinUi from "../assets/portfolio/EdedinUi.jpg";
import ELearningUi from "../assets/portfolio/ELearningUi.jpg";
import UiDesign1 from "../assets/portfolio/UiDesign1.jpg";
import Trello from "../assets/portfolio/Trello.jpg";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Trello,
      href: "https://trello-2-0-build-gunal-01.vercel.app/",
      codeLink: "https://github.com/gunal-01/trello-app",
    },
    {
      id: 2,
      src: ModelCourosalWebSite,
      href: "https://www.figma.com/proto/2j6scjjBiqKrdLmTjIKLFI/model-courosal-website?page-id=0%3A1&node-id=32-480&starting-point-node-id=32%3A480&t=k7wd2ezg84tZzu5a-1",
    },
    {
      id: 3,
      src: UiDesign1,
      href: "https://www.figma.com/proto/LqiEJ0FS5sZXd9LyT8dSZ9/Splash-Screen-project?page-id=0%3A1&node-id=8-9&viewport=105%2C-226%2C0.26&t=CpSZ2yyaY217uD1w-1&scaling=min-zoom&starting-point-node-id=6%3A2",
    },
    {
      id: 4,
      src: MusicSiteUi,
      href:"https://www.figma.com/proto/0CQ70SyNwGDhubFEzwOqVd/demo-site_02?page-id=0%3A1&node-id=1-27&starting-point-node-id=1%3A27&scaling=scale-down&t=W4DkWvJN6HDeDqnU-1",
    },
    {
      id: 5,
      src: ELearningUi,
      href:"",
    },
    {
      id: 6,
      src: DevPennyUi,
      href: "",
    },
    {
      id: 7,
      src: EdedinUi,
      href: "",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, codeLink}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                ) : (
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                )}
              {codeLink ? (
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                  >
                    Code
                  </a>
                ) : (
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
