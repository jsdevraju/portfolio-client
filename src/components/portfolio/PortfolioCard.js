import { useRouter } from "next/router";

const PortfolioCard = ({ data, className }) => {
  const router = useRouter();

  return (
    <>
      <div
        className={className}
        onClick={() => router.push(`/portfolioDetails/${data?._id}`)}
      >
        <img src={data?.img} alt={"Razu Islam"} className="portImg" />
        <div className="portInfo">
          <h4>{data?.name}</h4>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
