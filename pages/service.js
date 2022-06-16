import styles from "../styles/Service.module.css";
import ServiceCard from "../src/components/serviceCard/ServiceCard";
import { SiWebflow } from "react-icons/si";
import { AiFillAppstore } from "react-icons/ai";
import { CgExtension } from "react-icons/cg";
import Meta from "../src/components/meta/Meta";

const Service = () => {
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
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
                }
                className={styles.serviceCard}
              />
              <ServiceCard
                icon={<AiFillAppstore size={20} />}
                title={"App Development"}
                sortDesc={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
                }
                className={styles.serviceCard}
              />
              <ServiceCard
                icon={<CgExtension size={20} />}
                title={"Extension Development"}
                sortDesc={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
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
