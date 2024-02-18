import React from "react";
import s from "./style.module.scss";

export const Projects = () => {
  {
    /*https://mi-turno-web-deploy.vercel.app/*/
  }

  return (
    <div className={s.container}>
      <div
        className={s.subContainer}
        onClick={() => {
          window.open("https://tmdb-front-nine.vercel.app", "_blank");
        }}
        style={{
            background: "linear-gradient(to top right, #ebeed3, #bbdebd)"
          }}
      >
        <div className={s.scHalf} style={{ marginRight: "10px" }}>
          <h1>🎬 The Movie DataBase ↗️</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            explicabo praesentium, soluta ipsa et cupiditate laborum officia
            ipsum libero earum in quod at, nostrum quos quis voluptate officiis
            similique. Fugit. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Vel suscipit harum, commodi sequi dolores
            inventore. Vel dignissimos similique doloribus provident, id rerum
            veniam ea, eveniet corporis illo tenetur ipsa saepe.
          </p>
        </div>
        <div className={s.scHalf}>
          <img
            src="./tmdb_scs.png"
            width="100%"
            style={{
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            }}
          />
        </div>
      </div>

      <div
        className={s.subContainer}
        onClick={() => {
          window.open("https://mi-turno-web-deploy.vercel.app/", "_blank");
        }}
        style={{
            background: "linear-gradient(to top left, #f0e5fc, #d7b3f7)"
          }}
      >
        <div className={s.scHalf}>
          <img
            src="./mtw_scs.png"
            width="100%"
            style={{
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            }}
          />
        </div>
        <div className={s.scHalf} style={{ marginLeft: "10px" }}>
          <h1>📆 Mi turno web ↗️</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            explicabo praesentium, soluta ipsa et cupiditate laborum officia
            ipsum libero earum in quod at, nostrum quos quis voluptate officiis
            similique. Fugit. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Vel suscipit harum, commodi sequi dolores
            inventore. Vel dignissimos similique doloribus provident, id rerum
            veniam ea, eveniet corporis illo tenetur ipsa saepe.
          </p>
        </div>
      </div>

      <div
        className={s.subContainer}
        onClick={() => {
          window.open(
            "https://github.com/Dadario23/fast-delivery-front",
            "_blank"
          );
        }}
        style={{
            background: "linear-gradient(to top right, #eeeded, #ade0fa)"
          }}
      >
        <div className={s.scHalf} style={{ marginRight: "10px" }}>
          <h1>🛵 Fast Delivery (in Progress) ↗️</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            explicabo praesentium, soluta ipsa et cupiditate laborum officia
            ipsum libero earum in quod at, nostrum quos quis voluptate officiis
            similique. Fugit. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Vel suscipit harum, commodi sequi dolores
            inventore. Vel dignissimos similique doloribus provident, id rerum
            veniam ea, eveniet corporis illo tenetur ipsa saepe.
          </p>
        </div>
        <div className={s.scHalf}>
          <img
            src="./fastD_scsb.png"
            width="100%"
            style={{
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            }}
          />
        </div>
      </div>

      <h2>Another mini-projects:</h2>

      <div
        className={s.subContainer}
        
      >
        <div className={s.scTercio}>
          <a
            href="https://64c804bf2d66333b62576e26--magenta-faun-f9e969.netlify.app/"
            target="_blank"
          >
            <img
            className={s.img2}
              src="weather-2021-12-07.png"
            />
          </a>
          <h2>Weather Channel</h2>
        </div>
        <div className={s.scTercio}>
          <a href="https://bright-bonbon-0fc319.netlify.app/" target="_blank">
            <img
            className={s.img2}
              src="./reminders-2021-05-28.png"
            />
          </a>
          <h2>To Do List</h2>
        </div>
        <div className={s.scTercio}>
          <a
            href="https://64c70811457ce75636868ceb--remarkable-syrniki-fdecb4.netlify.app/"
            target="_blank"
          >
            <img
            className={s.img2}
              src="./colors.png"
            />
          </a>
          <h2>Color Game</h2>
        </div>
      </div>
    </div>
  );
};
