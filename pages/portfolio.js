import styles from "../styles/Portfolio.module.css";
import Button from "../src/components/button/Button";
import PortfolioCard from "../src/components/portfolio/PortfolioCard.js";
import axios from "axios";
import { useState } from "react";
import Meta from "../src/components/meta/Meta";
import Loader from "../src/components/loader/Loader";

const Portfolio = ({ portfolio }) => {
  const allCategories = [
    "all",
    ...new Set(portfolio?.map((item) => item.category)),
  ];
  const [portData, setPortData] = useState(portfolio);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setPortData(portfolio);
      return;
    }
    const newItems = portfolio?.filter((item) => item?.category === category);
    setPortData(newItems);
  };

  return (
    <>
      <Meta title="Razu Islam | Portfolio" />
      {portfolio ? (
        <section className={styles.portfolio}>
        <div className="container">
          <h1 className="aboutText">Portfolio</h1>
          <div className={styles.portfolioFilter}>
            {categories &&
              categories?.map((category, index) => (
                <Button
                  onClick={() => filterItems(category)}
                  key={index}
                  text={category}
                  className="app_btn"
                />
              ))}
          </div>
          <div className={styles.portfolioItem}>
            {portData &&
              portData?.map((data) => (
                <PortfolioCard
                  key={data?._id}
                  data={data}
                  className={styles.portCard}
                />
              ))}
          </div>
        </div>
      </section>
      ) : <Loader />}
    </>
  );
};

export const getStaticProps = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_PROXY_URL}/portfolios`
  );
  return { props: { portfolio: data?.portfolio } };
};

export default Portfolio;
