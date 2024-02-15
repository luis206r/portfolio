import React, { useEffect, useState } from 'react'
import s from "./style.module.scss"
import { useLockBodyScroll } from '@uidotdev/usehooks'
import { IoClose } from "react-icons/io5";
import { Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';

export const Modal = ({onClose}) => {

    const [mostrarDiv, setMostrarDiv] = useState(false);

    useEffect(() => {
        setMostrarDiv(true);
      }, []);

      const handleHide = () => { 
        setMostrarDiv(false);
        setTimeout(() => {
            onClose();
          }, 500); 
      };

      useLockBodyScroll();

  return (
        <div className={`${s.modalContainer} ${mostrarDiv ? s.visible : s.hidden}`}>
            <div className={s.modal}>
                <header>
                    <div className={s.title}>
                        <h1>Contact me</h1>
                        <div className={s.customButtonClose}
                            onClick={handleHide}
                        >
                            <IoClose />
                        </div>
                    </div>
                    
                </header>
                <section>
                    <div className={s.customForm}>
                        <div className={s.inlineInputName}>
                            <Input placeholder='👷 first name'/>
                            &nbsp;&nbsp;
                            <Input placeholder='👷 last name'/>
                        </div>
                        <Input placeholder='🏢 company'/>
                        <Input placeholder='✉️ email'/>
                        <Input placeholder='✍️ subject'/>
                        <TextArea placeholder='📝 Contenido' rows={7}/>
                        
                    </div>
                </section>
                <div className={s.customButton}>
                    Submit
                </div>
            </div>
            
            
        </div>
  )
}
