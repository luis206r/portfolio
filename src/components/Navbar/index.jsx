import React from 'react'
import s from "./style.module.scss"

export const Navbar = () => {
  return (
    <div className={s.container}>
        <div>
        <p className={s.navItem}> Luis R</p>
        </div>

        <div className={s.navContentCenter}>
            <div className={s.navItemCenter}>
                Home
            </div>
            <div className={s.navItemCenter}>
                Projects
            </div>
            <div className={s.navItemCenter}>
                About
            </div>
        </div>

        <p className={s.navItem}> Contact</p>

    </div>
  )
}
