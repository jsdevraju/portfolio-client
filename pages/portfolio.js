import styles from "../styles/Portfolio.module.css";
import Button from "../src/components/button/Button";
import PortfolioCard from "../src/components/portfolio/PortfolioCard.js";
import axios from "axios";
import { useEffect, useState } from "react";
import Meta from "../src/components/meta/Meta";
import Loader from "../src/components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { setPortfolio } from "../src/redux/portSlice";

const Portfolio = ({ portfolio }) => {
  const dispatch = useDispatch();
  const portfolios = useSelector((state) => state.port.port);


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

  useEffect(() =>{
    dispatch(setPortfolio(portfolio));
  }, [portfolio])

  return (
    <>
      <Meta title="Razu Islam | Portfolio" />
      {portfolios ? (
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

export const getServerSideProps = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_PROXY_URL}/portfolios`
  );
  console.log(data?.portfolio?.length)
  return { props: { portfolio: data?.portfolio } };
};

export default Portfolio;
