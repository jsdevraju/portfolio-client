import styles from "../styles/Service.module.css";
import ServiceCard from "../src/components/serviceCard/ServiceCard";
import { SiWebflow } from "react-icons/si";
import { AiFillAppstore } from "react-icons/ai";
import { CgExtension } from "react-icons/cg";
import { FaNpm } from "react-icons/fa";
import Meta from "../src/components/meta/Meta";

const Service = () => {
  console.log('Hello Service')
  return (
    <>
      <Meta title="Razu Islam | Service" />
      <section className={styles.service}>
        <div className="container">
          <div className={styles.serviceContainer}>
            <h1 className="aboutText">My Service</h1>
            <div className={styles.wrapper}>
              <ServiceCard
                icon={<SiWebflow size={20} />}
                title={"Web Development"}
                sortDesc={
                  "I have build your dream full stack web application/products. I have already build a hugs of products. You can checkout my portfolio. I build web application, front-end, backend, Node Package Manger, Chrome Extension Development etc"
                }
                className={styles.serviceCard}
              />
              <ServiceCard
                icon={<AiFillAppstore size={20} />}
                title={"App Development"}
                sortDesc={
                  "I have build your dream full stack web application/products. I have already build a hugs of products. You can checkout my portfolio. I build web application, front-end, backend, Node Package Manger, Chrome Extension Development etc"
                }
                className={styles.serviceCard}
              />
              <ServiceCard
                icon={<CgExtension size={20} />}
                title={"Extension Development"}
                sortDesc={
                  "I have build your dream full stack web application/products. I have already build a hugs of products. You can checkout my portfolio. I build web application, front-end, backend, Node Package Manger, Chrome Extension Development etc"
                }
                className={styles.serviceCard}
              />
              <ServiceCard
                icon={<FaNpm size={20} />}
                title={"Node Package Manger Development"}
                sortDesc={
                  "I have build your dream full stack web application/products. I have already build a hugs of products. You can checkout my portfolio. I build web application, front-end, backend, Node Package Manger, Chrome Extension Development etc"
                }
                className={styles.serviceCard}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
