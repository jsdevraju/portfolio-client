import styles from "../styles/Home.module.css";
import Meta from "../src/components/meta/Meta";
import Typed from "typed.js";
import { useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const textRef = useRef();
  const router = useRouter();
  const text = useMemo(() => ["This is React Word !", "This works"]);

  useEffect(() => {
    const options = {
      stringsElement: "#typed-string",
      typeSpeed: 50,
      showCursor: true,
      // cursorChar: "|",
      backSpeed: 20,
      smartBackspace: false,
      shuffle: true,
      startDelay: 500,
      backDelay: 1000,
      loop: true,
      loopCount: Infinity,
    };

    const typed = new Typed(textRef.current, options);

    return () => {
      typed.destroy();
    };
  }, [text]);

  return (
    <>
      <Meta title="Razu Islam | Home" />
      <section className={styles.home}>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div className={styles.hero_content}>
            <h1 className={styles.name}>Hello 👋 I'm Razu Islam.</h1>
            <div id="typed-string">
              <h1 className="p1">Web Developer</h1>
              <p className="p2">Junior Front-End Developer</p>
              <p className="p2">Junior Mern Stack Developer</p>
              <p className="p3">Mobile App Developer</p>
              <p className="p4">Desktop App Developer</p>
              <p className="p5">Extension App Developer</p>
              <p className="p6">Package Manger Developer</p>
            </div>
            <h3
              style={{
                fontSize: "1.3em",
                marginTop: "0.5em",
                color: "#fff",
              }}
            >
              Freelance
              <span
                ref={textRef}
                style={{
                  color: "hotpink",
                  fontWeight: "bold",
                  marginLeft: "10px",
                }}
              ></span>
            </h3>
            <p className={styles.description}>
            Experienced Front-end development with over 1 years of experience in software industry. Excellent reputation for resolving problems and improving customer satisfaction. I'm a junior software developer to help you build on your product or software anything you want. As a developer it's my duty to help you. Recently I build some awesome software or product you can checkout my LinkedIn featured or checkout my portfolio. I will try to help people who need to build a product or people already have a product he need to redesign or fix some issue. I have with 1 years of experience in developing amazing product for people. My main stack is MERN stack but most of experience I greater in froent-development and I've really great experience with it. I can write clean and reusable codes.
            </p>
            <div
              style={{
                marginTop: "2em",
              }}
            >
              <a
                text="About Me"
                className="app_btn"
                type="button"
                style={{
                  marginTop: "1em",
                }}
                onClick={() => router.push("/about")}
              >
                About Me
              </a>
              <a
                className="app_btn"
                style={{
                  marginLeft: "1em",
                  cursor: "pointer",
                }}
                download
                href="https://www.docdroid.net/KJhnIw0/resume-pdf"
                target="_blank"
              >
                Download Cv
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
