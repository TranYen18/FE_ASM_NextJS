/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from './adminLayout.module.scss';
import React, { useEffect, useRef, useState } from 'react'
import { IoChatbubbleOutline, IoHelpOutline, IoHomeOutline, IoLockClosedOutline, IoLogoOctocat, IoLogOutOutline, IoMenuOutline, IoPeopleOutline, IoSearchOutline, IoSettingsOutline } from 'react-icons/io5'
import { LayoutProps } from '../../../models/layout';


const AdminLayout = ({children}: LayoutProps) => {
  const navigationElement = useRef<HTMLDivElement>(null);
  const mainElement = useRef<HTMLDivElement>(null);
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    const navigationE = navigationElement.current!;
    const mainE = mainElement.current!;
    if (toggle) {
      navigationE.classList.toggle(styles.active);
      mainE.classList.toggle(styles.active);
    }
    else{
      navigationE.classList.remove(styles.active);
      mainE.classList.remove(styles.active);
    }
  }, [toggle])


  return (
    <>
{/* =============== Navigation ================ */}
<div className={styles.container}>
  <div ref={navigationElement} className={styles.navigation}>
    <ul>
      <li>
        <a href="#">
          <span className={styles.icon}>
            <IoLogoOctocat className={styles.io} />
          </span>
          <span className={styles.title}>Brand Name</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className={styles.icon}>
            <IoHomeOutline className={styles.io} />
          </span>
          <span className={styles.title}>Dashboard</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className={styles.icon}>
            <IoPeopleOutline className={styles.io} />
          </span>
          <span className={styles.title}>Customers</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className={styles.icon}>
            <IoChatbubbleOutline className={styles.io} />
          </span>
          <span className={styles.title}>Messages</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className={styles.icon}>
            <IoHelpOutline className={styles.io} />
          </span>
          <span className={styles.title}>Help</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className={styles.icon}>
            <IoSettingsOutline className={styles.io} />
          </span>
          <span className={styles.title}>Settings</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className={styles.icon}>
            <IoLockClosedOutline className={styles.io} />
          </span>
          <span className={styles.title}>Password</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className={styles.icon}>
            <IoLogOutOutline className={styles.io} />
          </span>
          <span className={styles.title}>Sign Out</span>
        </a>
      </li>
    </ul>
  </div>
  {/* ========================= Main ==================== */}
  <div ref={mainElement} className={styles.main}>
    <div className={styles.topbar}>
      <div onClick={() => setToggle(!toggle)} className={styles.toggle}>
        <IoMenuOutline className={styles.io} />
      </div>
      <div className={styles.search}>
        <label>
          <input type="text" placeholder="Search here" />
          <IoSearchOutline className={styles.io} />
        </label>
      </div>
      <div className={styles.user}>
        <img src="https://i.postimg.cc/DymsM897/customer01.jpg" />
      </div>
    </div>

    <div className={styles.content}>
    {children}
    </div>
  </div>
</div>

    </>
  )
}

export default AdminLayout