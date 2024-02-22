import React, { useEffect, useRef, useState } from "react";
import s from "./style.module.scss";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import { IoClose } from "react-icons/io5";
import { Form, Input, Popover, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import emailjs from "@emailjs/browser";
import { CiCircleAlert } from "react-icons/ci";
import { LoadingOutlined } from "@ant-design/icons";
import { FaUser } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";

export const Modal = ({ onClose }) => {
  const form = useRef();
  const [mostrarDiv, setMostrarDiv] = useState(false);
  const [mostrarPopEmail, setMostrarPopEmail] = useState(false);
  const [sumbitClickable, setSubmitClickable] = useState(true);
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

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    subject: "",
    body: "",
  });

  const [formStatus, setFormStatus] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    subject: "",
    body: "",
  });

  document.addEventListener('keydown', (event)=>{
    if (event.key === 'Escape') {
        handleHide();
      }
  })

  const validateEmail = (value) => {
    const emailRegex = /^[A-Za-z0-9+_.-]+@(.+)$/;
    if (!emailRegex.test(value)) {
      return false;
    } else {
        return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitClickable(false);
    let send=true;
    //email validator
    if(formValues.email!=""){
        if(!validateEmail(formValues.email)){
            setMostrarPopEmail(true);
            send=false;
        }
    }

    //void inputs
    const keys = Object.keys(formStatus);
    const arr = keys.filter((a)=>formValues[`${a}`]==="");
    if(arr.length>0) {
        message.error("Complete the form");
        setFormStatus(prevFormStatus => {
            const updatedFormStatus = { ...prevFormStatus };
            arr.forEach(k => {
              updatedFormStatus[k] = "error";
            });
            return updatedFormStatus;
          });
        send=false;
    }
    
    if(!send) 
    {
        setSubmitClickable(true);    
        return;
    }

    emailjs
      .sendForm("service_wk2m1vg", "template_vicebb9", form.current, {
        publicKey: "uuNFg1MOjHmtCVxUq",
      })
      .then(() => {
        message.success("Mail sent!");
        handleHide();
        setSubmitClickable(true);
      })
      .catch((err) => {
        message.error("Something went wrong...");
        console.error(err);
        setSubmitClickable(true);
      });
  };

  const onChangeInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    if(formStatus[`${name}`]==="error" && value!=""){
        setFormStatus({...formStatus, [`${name}`]:""});
    }
    if(mostrarPopEmail){
      setMostrarPopEmail(false);
    }
  };

  useEffect(() => {
    setMostrarDiv(true);
  }, []);

  const handleHide = () => {
    setMostrarPopEmail(false);
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
            <div className={s.customButtonClose} onClick={handleHide}>
              <IoClose />
            </div>
          </div>
        </header>
        <section>
          <form  ref={form} className={s.customForm}>
            <div className={s.inlineInputName}>
              <Input
                status={formStatus.firstName}
                placeholder="first name"
                prefix={<><FaUser />&nbsp;&nbsp;</>}
                value={formValues.firstName}
                name="firstName"
                onChange={onChangeInput}
                size="large"
                className={`${isDarkMode ? s.antdInputDark:''}`}
              />
              &nbsp;&nbsp;
              <Input
              status={formStatus.lastName}
                placeholder="last name"
                prefix={<><FaUser />&nbsp;&nbsp;</>}
                value={formValues.lastName}
                name="lastName"
                onChange={onChangeInput}
                size="large"
                className={`${isDarkMode ? s.antdInputDark:''}`}
              />
            </div>
            <Input
            status={formStatus.company}
              type="text"
              placeholder="company"
              prefix={<><FaBuilding />&nbsp;&nbsp;</>}
              value={formValues.company}
              name="company"
              onChange={onChangeInput}
              size="large"
              className={`${isDarkMode ? s.antdInputDark:''}`}
            />
            <Popover
                title={<span className={s.popOverTitle}><CiCircleAlert />
                &nbsp; Insert a valid email</span>}
                open={mostrarPopEmail}
                placement="topLeft"
                //content={<p><i>'example@example.com'</i></p>}
            >
            <Input
            status={formStatus.email}
              type="email"
              placeholder="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              prefix={<><IoMail />&nbsp;&nbsp;</>}
              value={formValues.email}
              name="email"
              onChange={onChangeInput}
              required
              size="large"
              className={`${isDarkMode ? s.antdInputDark:''}`}
            />
            </Popover>
            <Input
              status={formStatus.subject}
              type="subject"
              placeholder="subject"
              prefix={<><FaQuestionCircle />&nbsp;&nbsp;</>}
              value={formValues.subject}
              name="subject"
              onChange={onChangeInput}
              size="large"
              className={`${isDarkMode ? s.antdInputDark:''}`}
            />
            <TextArea
              status={formStatus.body}
              placeholder="Body"
              rows={7}
              value={formValues.body}
              name="body"
              onChange={onChangeInput}
              size="large"
              className={`${isDarkMode ? s.antdInputDark:''}`}
            />
            <div
              type="submit"
              className={`${sumbitClickable ? s.customButton : s.customButtonN}`}
              onClick={handleSubmit}
              size="large"
            >
                {sumbitClickable ? "Submit" : <LoadingOutlined style={{height:"22px"}}/>}
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
