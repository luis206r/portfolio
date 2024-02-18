import React from "react";
import s from "./style.module.scss";
import { FaCity } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import { IoCalendarNumber } from "react-icons/io5";
import { MdWork } from "react-icons/md";

export const About = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.subContainer}>
          
            <div className={s.head}>
              <div className={s.head1}>
                <div>
                <img src="./prof-transformed.png" className={s.imgProf} />
                <div className={s.head1Info}>
                <div>
                <h1>Luis Roledo</h1>
                <p> <MdWork /> &nbsp; Full Stack Dev</p>
                <p> <FaCity /> &nbsp; Lima, Perú</p>
                <p> <PiStudentBold />&nbsp; CS-UTEC</p>
                <p> <IoCalendarNumber />&nbsp; 22 years</p>
                </div>
                </div>
              </div>
              </div>
              <div className={s.head2}>
                <div>
                  <h1>Main Skills</h1>
                  <img src="https://skillicons.dev/icons?i=git,bootstrap,cpp,java,css,tailwind,ts,discord,nextjs,docker,express,sequelize,github,html,js,linux,md,r,matlab,androidstudio,bash,materialui,mysql,postgres,nodejs,postman,py,react,redux,vscode&perline=10" />
                  <p>
                    Git · Bootsrap · antd · R · C++ · Java · Css · Sass ·
                    Tailwind · Typescript · NextJS · Docker · Express ·
                    Sequelize · Github · HTML · JavaScript · Linux · MarkDown ·
                    MaterialUI · MySQL · PostgresSQL · NodeJS · PostMan · Python
                    · React · Redux · VSCode
                  </p>
                

                
                  <h1>Want to learn</h1>
                  <img src="https://skillicons.dev/icons?i=net,swift,cs,angular,django,azure,googlecloud,php&perline=15" />
                  <p>
                    .Net · Swift · C# · Angular · DJango · Azure · GoogleCloud ·
                    PHP · Lavarel
                  </p>
                  </div>
              </div>
            </div>
            <div className={s.line}/>
            <div className={s.info}>
            <p>
              I have experience in Full-Stack development with participation in
              key projects, and I possess extensive knowledge in different
              programming languages, frameworks, and databases. I studied
              Computer Science, where I acquired the basics of programming,
              algorithm design, data structures, among others. Additionally, I
              completed a coding bootcamp (a 7-month intensive program) focused
              on acquiring practical skills and experience in web development,
              both on the client side (front-end) and on the server side
              (back-end), utilizing current technologies. I have an interest in
              software development, web development, startups, and video games.
              I consider myself a person tolerant of pressure and frustration,
              with the ability to learn quickly, and I enjoy working in a team.
            </p>

            <p>
              I genuinely enjoy working as a Front-End developer with React (my
              favorite library is Ant Design), but I also know how to implement
              the Backend side. The majority of projects in which I have
              participated have been developed with Postgresql, Express, and
              Sequelize. Additionally, I am familiar with working with MySQL,
              and I have been learning MongoDBand AWS.
            </p>

            <p>
              As a Computer Science student, I believe that before starting to
              code, we need to solve the problem and, of course, consider the
              best way to implement an algorithm or program. This means that I
              always choose the most optimal approach, in terms of execution or
              computational cost.
            </p>
          </div>
        </div>

        <div className={s.subContainer}></div>
        <div className={s.subContainer}></div>
      </div>
      <footer className={s.footer}>hola</footer>
    </>
  );
};
