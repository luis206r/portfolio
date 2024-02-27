import React, { useEffect, useState } from "react";
import s from "./style.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { Modal } from "../Modal";
import { motion } from "framer-motion";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const onClickButton = (e, dir) => {
    e.preventDefault();
    navigate(dir);
  };
  const [showModal, setShowModal] = useState(false);

  const handleClickContact = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
    >
      <div className={s.container}>
        {showModal && <Modal onClose={closeModal} />}
        <div>
          <p className={s.navItem}>~ Luis R ~</p>
        </div>

        <div className={s.navContentCenter}>
          <div
            className={s.customButton}
            style={{
              backgroundColor: `${
                location.pathname === "/home" ? "#1596f1" : ""
              }`,
              color: `${location.pathname === "/home" ? "white" : ""}`,
              cursor: "pointer",
            }}
            type="button"
            onClick={(e) => onClickButton(e, "/home")}
          >
            Home
          </div>
          <div
            className={s.customButton}
            style={{
              backgroundColor: `${
                location.pathname === "/projects" ? "#1596f1" : ""
              }`,
              color: `${location.pathname === "/projects" ? "white" : ""}`,
              cursor: "pointer",
            }}
            type="button"
            onClick={(e) => onClickButton(e, "/projects")}
          >
            Projects
          </div>
          <div
            className={s.customButton}
            style={{
              backgroundColor: `${
                location.pathname === "/about" ? "#1596f1" : ""
              }`,
              color: `${location.pathname === "/about" ? "white" : ""}`,
              cursor: "pointer",
            }}
            type="button"
            onClick={(e) => onClickButton(e, "/about")}
          >
            About
          </div>
        </div>

        <div className={s.navItem}>
          <div
            className={s.customButton}
            style={{ margin: "0px" }}
            onClick={handleClickContact}
          >
            Contact
          </div>
        </div>
      </div>
    </motion.div>
  );
};
