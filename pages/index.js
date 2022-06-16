import styles from "../styles/Home.module.css";
import Meta from "../src/components/meta/Meta";
import Button from "../src/components/button/Button";
import Typed from "typed.js";
import { useEffect, useMemo, useRef } from "react";
import { useRouter } from 'next/router';

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
              <p className="p3">Mobile App Developer</p>
              <p className="p4">Desktop App Developer</p>
              <p className="p5">Extension App Developer</p>
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
              As the junior front end developer I'm Razu Islam with 6 month
              experience. I love to build project. I'm experienced in HTML, CSS,
              Bootstrap, Tailwindcss, JavaScript, Jquery, React.js, React
              Native, Next.js, Firebase, Wordpress and so many other
              technologies. I have no experience to working industry level I'm
              try to hard work and achieve my goal. But I have build many
              project. You can checkout my profile as well. I can give my best
              to get the work done.
            </p>
            <Button
              text="About Me"
              className="app_btn"
              type="button"
              style={{
                marginTop: "1em",
              }}
              onClick={() => router.push("/about")}
            />
          </div>
        </div>
      </section>
    </>
  );
}
