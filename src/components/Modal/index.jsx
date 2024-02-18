import React, { useEffect, useRef, useState } from "react";
import s from "./style.module.scss";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import { IoClose } from "react-icons/io5";
import { Form, Input, Popover, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import emailjs from "@emailjs/browser";
import { CiCircleAlert } from "react-icons/ci";
import { LoadingOutlined } from "@ant-design/icons";


export const Modal = ({ onClose }) => {
  const form = useRef();
  const [mostrarDiv, setMostrarDiv] = useState(false);
  const [mostrarPopEmail, setMostrarPopEmail] = useState(false);
  const [sumbitClickable, setSubmitClickable] = useState(true);
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
                prefix={"👷"}
                value={formValues.firstName}
                name="firstName"
                onChange={onChangeInput}
                size="large"
              />
              &nbsp;&nbsp;
              <Input
              status={formStatus.lastName}
                placeholder="last name"
                prefix={"👷"}
                value={formValues.lastName}
                name="lastName"
                onChange={onChangeInput}
                size="large"
              />
            </div>
            <Input
            status={formStatus.company}
              type="text"
              placeholder="company"
              prefix={"🏢"}
              value={formValues.company}
              name="company"
              onChange={onChangeInput}
              size="large"
            />
            <Popover
                title={<span style={{ color: 'red',display:"flex", alignItems:"center"}}><CiCircleAlert />
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
              prefix={"✉️"}
              value={formValues.email}
              name="email"
              onChange={onChangeInput}
              required
              size="large"
            />
            </Popover>
            <Input
              status={formStatus.subject}
              type="subject"
              placeholder="subject"
              prefix={"❔"}
              value={formValues.subject}
              name="subject"
              onChange={onChangeInput}
              size="large"
            />
            <TextArea
              status={formStatus.body}
              placeholder="Body"
              rows={7}
              prefix={"📝"}
              value={formValues.body}
              name="body"
              onChange={onChangeInput}
              size="large"
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
