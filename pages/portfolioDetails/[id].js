import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Loader from "../../src/components/loader/Loader";
import Comment from "../../src/components/comment/Comment";
import { useRouter } from "next/router";
import axios from "axios";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TelegramShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
  TelegramIcon,
  RedditIcon,
} from "react-share";
import Button from "../../src/components/button/Button";
import toast from "react-hot-toast";
import Meta from "../../src/components/meta/Meta";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setComment } from "../../src/redux/commentSlice";
import { setLike } from "../../src/redux/likSlice";

const PortfolioDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const like = useSelector((state) => state.like.like);
  const comment = useSelector((state) => state.comment.comment);

  useEffect(() => {
    const getSingleData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_PROXY_URL}/portfolio/${id}`
        );
        setData(data?.portfolio);
        dispatch(setLike(data?.portfolio?.reactBy));
        dispatch(setComment(data?.portfolio?.comments))
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    id && getSingleData();
  }, [id]);

  const addReactToPost = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_PROXY_URL}/like/${id}`);
      toast.success("Liked Added");
      setLoading(false);
      dispatch(setLike(data?.portfolio?.reactBy))
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const addCommentToPost = async () => {
    setLoading(true);
    try {
     const { data } = await axios.post(`${process.env.NEXT_PUBLIC_PROXY_URL}/comment/${id}`, {
        text,
      });
      setText("")
      toast.success("Comment Added");
      setLoading(false);
      dispatch(setComment(data?.portfolio?.comments))
      console.log(data?.portfolio?.comments)
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    setShareUrl(document.URL);
  }, []);


  return (
    <>
      <Meta
        title={`Razu Islam | ${
          data?.name === undefined ? `loading...` : data?.name
        }`}
      />
      {loading ? (
        <Loader />
      ) : (
        <section className={styles.portfolioDetails}>
          <div className="container">
            <div className={styles.portContainer}>
              <div className={styles.portImg}>
                {data?.img && (
                  <Image
                    src={data?.img}
                    alt="Razu Islam"
                    width={1000}
                    height={500}
                    // loader={<Loader />}
                  />
                )}
              </div>
              <h1 className={styles.text}>
                Application Name: <span>{data?.name}</span>
              </h1>
             <div style={{
              display:"flex",
              justifyContent:"space-between",
              alignItems:"center",
              flexWrap:"wrap"
             }}>
             <a
                className={styles.liveDemo}
                href={data?.liveDemo}
                target="_blank"
                rel="noreferrer"
              >
                Visit: {data?.liveDemo}
              </a>
              <p>Build Date: {data?.buildDate}</p>
             </div>
              <Button
                onClick={addReactToPost}
                text="Like"
                type="button"
                className="app_btn"
                style={{
                  marginTop: "1em",
                  cursor: "pointer",
                }}
              />
              <div className={styles.like_commnet}>
                <p>
                  Like: <span>{like?.length}</span>
                </p>
                <p>
                  Comment: <span>{comment?.length}</span>
                </p>
              </div>
              <div className={styles.description}>
                <p>{data?.description}</p>
              </div>
              {/* Share  */}
              <div className={styles.social}>
                <FacebookShareButton url={shareUrl}>
                  <FacebookIcon size={40} />
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl}>
                  <TwitterIcon size={40} />
                </TwitterShareButton>
                <LinkedinShareButton url={shareUrl}>
                  <LinkedinIcon size={40} />
                </LinkedinShareButton>
                <PinterestShareButton url={shareUrl}>
                  <PinterestIcon size={40} />
                </PinterestShareButton>
                <RedditShareButton url={shareUrl}>
                  <RedditIcon size={40} />
                </RedditShareButton>
                <TelegramShareButton url={shareUrl}>
                  <TelegramIcon size={40} />
                </TelegramShareButton>
              </div>
              {/* All COmment */}
              {/* Comment Area */}
              <div className={styles.comment}>
                <form onSubmit={addCommentToPost}>
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    name="comment"
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                  <Button text="Submit" type="submit" className="app_btn" />
                </form>
              </div>
              <div className={styles.comment_main}>
                {comment &&
                  comment?.map((comment, index) => (
                    <Comment key={index} comment={comment} />
                  ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PortfolioDetails;
