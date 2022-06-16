import styles from "../styles/About.module.css";
import Image from "next/image";
import profile from "../src/asset/profile.jpg";
import AboutInfo from "../src/components/aboutInfo/AboutInfo";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Meta from "../src/components/meta/Meta";
import CountProject from "../src/components/countProject/CountProject";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../src/components/loader/Loader";

const About = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [skill, setSkill] = useState([]);
  useEffect(() => {
    const getSkill = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_PROXY_URL}/skills`
        );
        setSkill(data?.skills);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getSkill();
  }, []);

  return (
    <>
      <Meta title="Razu Islam | About" />
      {loading ? (
        <Loader />
      ) : (
        <section className={styles.about}>
          <div className="container">
            <div className={styles.aboutContainer}>
              <h1 className="aboutText">
                Hello 👋 My name is Razu Islam.
              </h1>
              <div className={styles.wrapper}>
                <div className={styles.aboutImg}>
                  <Image
                    src={profile}
                    alt="Razu Islam"
                    width={300}
                    height={300}
                    style={{
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className={styles.aboutInfo}>
                  <h1 className={styles.aboutCompany}>I am at Own Company.</h1>
                  <p className={styles.aboutDescription}>
                    As the junior front end developer I'm Razu Islam with 6
                    month experience. I love to build project. I'm experienced
                    in HTML, CSS, Bootstrap, Tailwindcss, JavaScript, Jquery,
                    React.js, React Native, Next.js, Firebase, Wordpress and so
                    many other technologies. I have no experience to working
                    industry level I'm try to hard work and achieve my goal. But
                    I have build many project. You can checkout my profile as
                    well. I can give my best to get the work done.
                  </p>
                  <div className={styles.work}>
                    <AboutInfo
                      title="Working Since"
                      sort="2022"
                      className={styles.workInfo}
                      icon={<AiOutlineDoubleRight />}
                    />
                    <AboutInfo
                      title="Website"
                      sort="https://devcoded.com"
                      className={styles.workInfo}
                      icon={<AiOutlineDoubleRight />}
                    />
                    <AboutInfo
                      title="Degree"
                      sort="Inter Passed in CSE"
                      className={styles.workInfo}
                      icon={<AiOutlineDoubleRight />}
                    />
                    <AboutInfo
                      title="Worked With"
                      sort="Startups Companies"
                      className={styles.workInfo}
                      icon={<AiOutlineDoubleRight />}
                    />
                    <AboutInfo
                      title="Email"
                      sort="islamrajulearn.dev@gmail.com"
                      className={styles.workInfo}
                      icon={<AiOutlineDoubleRight />}
                    />
                    <AboutInfo
                      title="Freelance"
                      sort="Available"
                      className={styles.workInfo}
                      icon={<AiOutlineDoubleRight />}
                    />
                    <AboutInfo
                      title="Remote"
                      sort="Available"
                      className={styles.workInfo}
                      icon={<AiOutlineDoubleRight />}
                    />
                    <AboutInfo
                      title="Onsite"
                      sort="Available"
                      className={styles.workInfo}
                      icon={<AiOutlineDoubleRight />}
                    />
                  </div>
                </div>
              </div>
              {/* Project Info */}
              <div className={styles.projectInfo}>
                <CountProject
                  className={styles.countProject}
                  title="Project"
                  number={Number(data[0]?.project)}
                />
                <CountProject
                  className={styles.countProject}
                  title="Working"
                  number={Number(data[0]?.working)}
                />
                <CountProject
                  className={styles.countProject}
                  title="Satisfied"
                  number={Number(data[0]?.satisfied)}
                />
                <CountProject
                  className={styles.countProject}
                  title="Complete"
                  number={Number(data[0]?.complete)}
                />
              </div>
              {/* Skills */}
              <div className={styles.skillInfo}>
                <h1 className="aboutText">
                  Skills, Tools & Technologies
                </h1>
                <p>
                  Through My Worklife I have worked with/in these things below
                  and counting on....
                </p>
                <AboutInfo
                  title="Platforms"
                  sort={skill[0]?.platforms?.map((item, index) => (
                    <p key={index}>{item},</p>
                  ))}
                  className={styles.workInfo}
                  icon={<AiOutlineDoubleRight />}
                />
                <AboutInfo
                  title="Backend"
                  sort={skill[0]?.backend?.map((item, index) => (
                    <p key={index}>{item},</p>
                  ))}
                  className={styles.workInfo}
                  icon={<AiOutlineDoubleRight />}
                />
                <AboutInfo
                  title="Cache"
                  sort={
                    skill[0]?.cache?.length === 0 ? (
                      <p>learning soon</p>
                    ) : (
                      skill[0]?.cache?.map((item, index) => (
                        <p key={index}>{item},</p>
                      ))
                    )
                  }
                  className={styles.workInfo}
                  icon={<AiOutlineDoubleRight />}
                />
                <AboutInfo
                  title="Clouds"
                  sort={
                    skill[0]?.coluds?.length === 0 ? (
                      <p>learning soon</p>
                    ) : (
                      skill[0]?.coluds?.map((item, index) => (
                        <p key={index}>{item},</p>
                      ))
                    )
                  }
                  className={styles.workInfo}
                  icon={<AiOutlineDoubleRight />}
                />
                <AboutInfo
                  title="Datatransport"
                  sort={
                    skill[0]?.datatransport?.length === 0 ? (
                      <p>learning soon</p>
                    ) : (
                      skill[0]?.datatransport?.map((item, index) => (
                        <p key={index}>{item},</p>
                      ))
                    )
                  }
                  className={styles.workInfo}
                  icon={<AiOutlineDoubleRight />}
                />
                <AboutInfo
                  title="Desktop App"
                  sort={
                    skill[0]?.desktopapp?.length === 0 ? (
                      <p>learning soon</p>
                    ) : (
                      skill[0]?.desktopapp?.map((item, index) => (
                        <p key={index}>{item},</p>
                      ))
                    )
                  }
                  className={styles.workInfo}
                  icon={<AiOutlineDoubleRight />}
                />
                <AboutInfo
                  title="Frontend"
                  sort={
                    skill[0]?.frontend?.length === 0 ? (
                      <p>learning soon</p>
                    ) : (
                      skill[0]?.frontend?.map((item, index) => (
                        <p key={index}>{item},</p>
                      ))
                    )
                  }
                  className={styles.workInfo}
                  icon={<AiOutlineDoubleRight />}
                />
                <AboutInfo
                  title="Languages"
                  sort={
                    skill[0]?.languages?.length === 0 ? (
                      <p>learning soon</p>
                    ) : (
                      skill[0]?.languages?.map((item, index) => (
                        <p key={index}>{item},</p>
                      ))
                    )
                  }
                  className={styles.workInfo}
                  icon={<AiOutlineDoubleRight />}
                />
                <AboutInfo
                  title="Markups"
                  sort={
                    skill[0]?.markups?.length === 0 ? (
                      <p>learning soon</p>
                    ) : (
                      skill[0]?.markups?.map((item, index) => (
                        <p key={index}>{item},</p>
                      ))
                    )
                  }
                  className={styles.workInfo}
                  icon={<AiOutlineDoubleRight />}
                />
                <AboutInfo
                  title="Misc"
                  sort={
                    skill[0]?.misc?.length === 0 ? (
                      <p>learning soon</p>
                    ) : (
                      skill[0]?.misc?.map((item, index) => (
                        <p key={index}>{item},</p>
                      ))
                    )
                  }
                  className={styles.workInfo}
                  icon={<AiOutlineDoubleRight />}
                />
                <AboutInfo
                  title="Mobile App"
                  sort={
                    skill[0]?.mobileapp?.length === 0 ? (
                      <p>learning soon</p>
                    ) : (
                      skill[0]?.mobileapp?.map((item, index) => (
                        <p key={index}>{item},</p>
                      ))
                    )
                  }
                  className={styles.workInfo}
                  icon={<AiOutlineDoubleRight />}
                />
                <AboutInfo
                  title="NoSQL DB"
                  sort={
                    skill[0]?.nosqldb?.length === 0 ? (
                      <p>learning soon</p>
                    ) : (
                      skill[0]?.nosqldb?.map((item, index) => (
                        <p key={index}>{item},</p>
                      ))
                    )
                  }
                  className={styles.workInfo}
                  icon={<AiOutlineDoubleRight />}
                />
                <AboutInfo
                  title="SQL DB"
                  sort={
                    skill[0]?.sqldb?.length === 0 ? (
                      <p>learning soon</p>
                    ) : (
                      skill[0]?.sqldb?.map((item, index) => (
                        <p key={index}>{item},</p>
                      ))
                    )
                  }
                  className={styles.workInfo}
                  icon={<AiOutlineDoubleRight />}
                />
                <AboutInfo
                  title="Web Service"
                  sort={
                    skill[0]?.webservice?.length === 0 ? (
                      <p>learning soon</p>
                    ) : (
                      skill[0]?.webservice?.map((item, index) => (
                        <p key={index}>{item},</p>
                      ))
                    )
                  }
                  className={styles.workInfo}
                  icon={<AiOutlineDoubleRight />}
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export const getStaticProps = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_PROXY_URL}/projects`
  );

  return { props: { data: data?.project } };
};

export default About;
