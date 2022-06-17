import styles from "./Navbar.module.css";
import Image from "next/image";
import profile from "../../asset/profile.jpg";
import Icon from "../icon/Icon";
import {
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaHome,
} from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { BiSlideshow } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { MdContactMail, MdSecurity } from "react-icons/md";
import { GoThreeBars } from "react-icons/go";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useState } from "react";
import Loader from "../loader/Loader";

const Navbar = () => {
  const router = useRouter();
  const { token } = useSelector((state) => state?.admin);
  const [show, setShow] = useState(false);

  const navItem = [
    {
      id: 1,
      text: "Home",
      url: "/",
      className: router.pathname == "/" ? "nav_links active" : "nav_links",
      icon: <FaHome size={22} />,
    },
    {
      id: 2,
      text: "About",
      url: "/about",
      className: router.pathname == "/about" ? "nav_links active" : "nav_links",
      icon: <SiAboutdotme size={22} />,
    },
    {
      id: 3,
      text: "Service",
      url: "/service",
      className:
        router.pathname == "/service" ? "nav_links active" : "nav_links",
      icon: <FiSettings size={22} />,
    },
    {
      id: 4,
      text: "Portfolio",
      url: "/portfolio",
      className:
        router.pathname == "/portfolio" ? "nav_links active" : "nav_links",
      icon: <BiSlideshow size={22} />,
    },
    {
      id: 5,
      text: "Contact",
      url: "/contact",
      className:
        router.pathname == "/contact" ? "nav_links active" : "nav_links",
      icon: <MdContactMail size={22} />,
    },
    {
      id: 6,
      text: "Login",
      url: "/login",
      className: router.pathname == "/login" ? "nav_links active" : "nav_links",
      icon: <MdSecurity size={22} />,
    },
  ];

  if (token)
    navItem.push({
      id: 7,
      text: "Dashboard",
      url: "/dashboard",
      className:
        router.pathname == "/dashboard" ? "nav_links active" : "nav_links",
      icon: <RiDashboardLine size={22} />,
    });

  if (token) navItem.splice(5, 1);

  return (
    <>
      <div className={styles.mobile_nav} onClick={() => setShow(!show)}>
        <GoThreeBars />
      </div>
      <div
        onClick={() => setShow(!show)}
        className={
          show ? `${styles.overlay} ${styles.overlayActive}` : styles.overlay
        }
      ></div>
      <nav
        className={
          show ? `${styles.navbar} ${styles.navbarActive}` : styles.navbar
        }
      >
        {/* Profile header */}
        <div className={styles.profile}>
          <Image
            className={styles.profileImg}
            width={100}
            height={100}
            style={{
              borderRadius: "100%",
            }}
            // loader={<Loader />}
            src={profile}
            alt="Razu Islam"
          />
          <div className={styles.social}>
            <Icon
              href="https://www.linkedin.com/in/md-razu-islam-48b848233"
              className={styles.icon}
              icon={<FaLinkedinIn />}
            />
            <Icon
              href="https://github.com/jsdevraju"
              className={styles.icon}
              icon={<FaGithub />}
            />
            <Icon
              href="https://www.youtube.com/channel/UCv54fMK_UR7SJX70W02usaA"
              className={styles.icon}
              icon={<FaYoutube />}
            />
            <Icon
              href="https://www.instagram.com/jsdevrazu"
              className={styles.icon}
              icon={<FaInstagram />}
            />
            <Icon
              href="https://www.facebook.com/islamraazu"
              className={styles.icon}
              icon={<FaFacebookF />}
            />
          </div>
        </div>
        {/* Menu Item */}
        <div className={styles.navItem}>
          <ul>
            {navItem.map(({ text, url, className, icon, id }) => (
              <li
                key={id}
                style={{
                  marginTop: "1.5em",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {icon}
                <Link href={url}>
                  <a className={className}>{text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Footer */}
        <div className={styles.copyRight}>
          <p>
            © Copyright {new Date().getFullYear()} owned by <b>Razu Islam</b>
          </p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
