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
  const [loadedData, setLoadedData] = useState([]);

  const allCategories = [
    "all",
    ...new Set(portfolio?.map((item) => item.category)),
  ];
  const [portData, setPortData] = useState(portfolio);
  const [categories, setCategories] = useState(allCategories);
  

  const filterItems = (category) => {
    if (category === "all") {
      setPortData(portfolio);
      setLoadedData(createPagination(portfolio));
      return;
    }
    const newItems = portfolio?.filter((item) => item?.category === category);
    setPortData(newItems);
    setLoadedData(createPagination(newItems));
  };

  const createPagination = (items, limit = 6, offset = 0) => {
    let arr = [];
    items?.forEach((item, index) => {
      if (index >= offset && index < offset + limit) {
        arr.push(item);
      }
    });
    return arr;
  };

  const loadMore = () => {
    if (loadedData?.length >= portData?.length) return;
    const newProducts = createPagination(portData, 6, loadedData?.length)
    setLoadedData([...loadedData, ...newProducts]);
  };

  useEffect(() => {
    setLoadedData(createPagination(portData))
    return () => {
      setLoadedData()
    }
  }, []);

  useEffect(() => {
    dispatch(setPortfolio(portfolio));
  }, [portfolio]);

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
              {loadedData &&
                loadedData?.map((data) => (
                  <PortfolioCard
                    key={data?._id}
                    data={data}
                    className={styles.portCard}
                  />
                ))}
            </div>
            {/* Loading More Button */}
            {loadedData?.length != portData?.length && (
              <div
                style={{
                  marginTop: "2em",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  onClick={loadMore}
                  text={"Load More"}
                  className="app_btn"
                  style={{
                    cursor: "pointer",
                  }}
                />
              </div>
            )}
          </div>
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_PROXY_URL}/portfolios`
  );
  console.log(data?.portfolio?.length);
  return { props: { portfolio: data?.portfolio } };
};

export default Portfolio;
