import React, { useEffect, useState } from "react";
import s from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { FaPaintBrush } from "react-icons/fa";
import { FaServer } from "react-icons/fa6";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const matchMediaDark = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(matchMediaDark.matches);
  
    const handleChange = (event) => {
      setIsDarkMode(event.matches);
    };
  
    matchMediaDark.addListener(handleChange);
  
    return () => {
      matchMediaDark.removeListener(handleChange);
    };
  }, []);


  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <div className={s.bigcontainer}>
        <div className={s.container}>
          <div className={s.grid}>
            <div className={s.x2}>
              <div className={s.card}
                 style={{
                  background: `linear-gradient(to top right, ${!isDarkMode ? '#eeeded, #ade0fa' : '#314e55,#21a9a8'} )`
                }}
              >
                <div className={s.info}>
                  <img className={s.imageProf} src="./zyro-image2.png" />
                  <div className={s.text}>
                    <h1>About me:</h1>
                    <p>
                      I'm a <b>Fullstack Developer</b> and also a <b>Computer Science student</b> from Lima, Perú. I'm interested in Node, React, C++, Startups, games and music 🕹️🎧
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.x1}>
              <div
                className={s.card}
                style={{
                  backgroundImage: 'url("./github.jpg")',
                  backgroundSize: "cover", // ajusta el tamaño de la imagen para cubrir completamente el div
                  backgroundPosition: "center",
                }}
                onClick={() => {
                  window.open("https://www.github.com/luis206r", "_blank");
                }}
              >
                <div className={s.bottomleft}>
                  <img src="./link.png" style={{ width: "30px" }} />
                </div>
              </div>
            </div>
          </div>

          <div className={s.grid}>
            <div className={s.x1}>
              <div className={s.card}
                style={{
                  color:"white",
                  background: "linear-gradient(to top right, #1761fe, #777aec)"
                }}
              >
                <div className={s.text}>
                  <h2>Programming Laguages and IDE's:</h2>
                  <list>
                    <li>C++</li>
                    <li>Python</li>
                    <li>Javascript</li>
                    <li>Java</li>
                    <li>Clion</li>
                    <li>Pycharm</li>
                    <li>Vscode</li>
                  </list>
                </div>
              </div>
            </div>
            <div className={s.x2}>
              <div className={s.card}
                style={{
                  backgroundImage: 'url("./projects2.webp")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  padding:"0px",
                }}
                onClick={(e)=>{e.preventDefault(); navigate("/projects")}}
              >
                {/* <img src="https://skillicons.dev/icons?i=git,bootstrap,cpp,java,css,discord,express,sequelize,github,html,js,linux,md,materialui,mysql,nextjs,postgres,nodejs,postman,py,react,redux,vscode&perline=9" /> */}
                <div className={s.middleInsideCard}>
                  <h1>See my projects &nbsp;<BsArrowUpRightCircleFill /></h1>
                </div>

              </div>
            </div>
          </div>
          <div className={s.grid}>
            <div className={s.x2}>
              <div className={s.card}
                style={{
                  color:"white",
                  background: `linear-gradient(to top right, ${!isDarkMode ? '#5acbf5, #55e9cb' : '#2a6b6b,#4fba4d'})`
                }}
              >
              <img src="https://skillicons.dev/icons?i=git,bootstrap,cpp,java,css,tailwind,ts,discord,nextjs,docker,express,sequelize,github,html,js,linux,md,materialui,mysql,nextjs,postgres,nodejs,postman,py,react,redux,vscode&perline=9" /> 
              </div>
            </div>
            <div className={s.x1}>
              <div
                className={s.card}
                style={{
                  backgroundImage: 'url("./linkedin2.svg")',
                  backgroundSize: "cover", // ajusta el tamaño de la imagen para cubrir completamente el div
                  backgroundPosition: "center",
                  backgroundColor: "#0b86ca",
                }}
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/luis-robledo-7723a01b6",
                    "_blank"
                  );
                }}
              >
                <div className={s.bottomleft}>
                  <img src="./link.png" style={{ width: "30px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.container}>
          <div className={s.v}>
            <div className={s.card}
              style={{
                background: `linear-gradient(to top, ${!isDarkMode? '#ddc3fc, #90c5fb':'#521638,#004d79'})`
              }}
            >
              <div className={s.text}>
                <h1>Main Skills:</h1>
                <h2><FaPaintBrush /> &nbsp; Front end</h2>
                <list>
                  <li>
                    <b>ReactJs</b>
                  </li>
                  <li>
                    <b>NextJs</b>
                  </li>
                  <li>
                    <b>Redux</b>
                  </li>
                  <li>
                    <b>Axios</b> and <b>Fetch</b>
                  </li>
                  <li>Tailwind, Boostrap, Bulma</li>
                  <li>Sass</li>
                  <li><b>Antd</b>, MaterialUI</li>
                </list>
                <h2><FaServer /> &nbsp; Back end</h2>
                <list>
                  <li><b>Node JS</b></li>
                  <li>Postgresql</li>
                  <li>My SQL</li>
                  <li>Sequelize</li>
                  <li>Express</li>
                  <li>bcrpyt, JWT</li>
                  <li>jest, supertest</li>
                </list>
              </div>
            </div>
          </div>
          <div className={s.x1}>
            <div className={s.card} style={{ padding: "0px ", margin: "0px" }}>
              <div
                className={s.appleMusicCard}
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
              >
                <div
                  className={`${s.fondo} ${isHovered ? s.blur : ""}`}
                  style={{
                    background: "linear-gradient(to bottom, #fd4f62, #fd375b)",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundImage: 'url("./apple-music.svg")',
                      backgroundSize: "cover", // ajusta el tamaño de la imagen para cubrir completamente el div
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>
                <iframe
                  allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                  style={{
                    width: "100%",
                    //maxWidth: 800,
                    overflow: "hidden",
                    height: "100%",
                    border: 0,
                    borderRadius: 30,
                  }}
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                  src={`https://embed.music.apple.com/pe/playlist/favs/pl.u-NpXmzemC4JDAb1r?l=en-GB${isDarkMode ?'?theme=dark' : ''}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
