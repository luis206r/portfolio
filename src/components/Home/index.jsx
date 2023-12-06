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
                        
                        <div className={s.card} style={{
                            backgroundImage:'url("./github.jpg")', 
                            backgroundSize: 'cover', // ajusta el tamaño de la imagen para cubrir completamente el div
                            backgroundPosition: 'center',}} onClick={()=>{
                                window.open('https://www.github.com/luis206r', '_blank')
                            }}>
                                
                           <div className={s.bottomleft}>
                            
                             <img src = "./link.png" style={{width:"30px"}}/> 
                           </div>
                           
                        </div>
                        
                    </div>
                    
                </div>

                <div className={s.grid}>
                    <div className={s.x1}>
                        <div className={s.card}>
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
                    <div className={s.text}>
                                <h1>Main Skills:</h1>
                                <h2>🖌️ Front end</h2>
                                <list>
                                    <li><b>React environment</b></li>
                                    <li><b>React libraries</b></li>
                                    <li><b>Redux</b></li>
                                    <li><b>Axios</b> and <b>Fetch</b></li>
                                    <li>UI kits</li>
                                    <li>Route management</li>
                                    <li>Many other things</li>
                                </list>
                                
                                <h2>⚙️ Back end</h2>
                                <list>
                                    <li>Node JS</li>
                                    <li>Postgresql</li>
                                    <li>Sequelize</li>
                                    <li>Express</li>
                                    <li>Authentication methods</li>
                                    <li>And more</li>
                                </list>
                                </div>
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
