import React from 'react'
import { Navbar } from '../Navbar'
import s from "./style.module.scss"

export const Home = () => {
  return (
    <div>
        <Navbar/>
       
        {/* <div className={s.header}>
            <div className={s.imageDiv}>
                <img className={s.imageProf} src="./zyro-image2.png"/>
            </div>
            <h1>Luis Robledo</h1>
        </div> */}
        <div className={s.bigcontainer}>
            <div className={s.container}>
                <div className={s.grid}>
                    <div className={s.x2}>
                        <div className={s.card}>
                            <div className={s.info}>
                                <img className={s.imageProf} src="./zyro-image2.png"/>
                                <div className={s.text}>
                                <h1>About me:</h1>
                                <p>I'm a <b>Fullstack Developer</b> and also a <b>Computer Science student</b> from Lima, Perú. I'm interested in Node, React, C++, Startups, games and music 🕹️🎧</p>
                                </div>
                                
                            </div>
                        
                        </div>
                    </div>
                    <div className={s.x1}>
                        
                        <div className={s.card}>
                            contenido
                        
                        </div>
                    </div>
                    
                </div>

                <div className={s.grid}>
                    <div className={s.x1}>
                        <div className={s.card}>
                           contenido
                        </div>
                    </div>
                    <div className={s.x2}>
                        <div className={s.card}>
                        <img src="https://skillicons.dev/icons?i=git,bootstrap,cpp,java,css,discord,express,sequelize,github,html,js,linux,md,materialui,mysql,nextjs,postgres,nodejs,postman,py,react,redux,vscode&perline=9"/>
                        </div>
                    </div> 
                </div> 

                <div className={s.grid}>
                    <div className={s.x2}>
                        <div className={s.card}>
                            contenido
                        </div>
                    </div>
                    <div className={s.x1}>
                        <div className={s.card}>
                            contenido
                        </div>
                    </div> 
                </div> 

            </div>



            <div className={s.container}>
                <div className={s.v}>
                    <div className={s.card}>
                        contenido
                    </div>
                </div>

                <div className={s.x1}>
                        <div className={s.card}>
                            contenido
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}
