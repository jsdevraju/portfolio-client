import styles from "../styles/Dashboard.module.css";
import Meta from "../src/components/meta/Meta";
import Button from "../src/components/button/Button";
import axios from "axios";
import Loader from "../src/components/loader/Loader";
import { useEffect, useState } from "react";
import { login } from "../src/redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import Input from "../src/components/input/Input";
import { storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Protected from "../src/components/protected/Protected";

const initialState = {
  project: "",
  complete: "",
  working: "",
  satisfied: "",
};

const portAdd = {
  name: "",
  description: "",
  buildDate: "",
  technology: "",
  liveDemo: "",
  category: "",
};

const Dashboard = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState(null);
  const [progress, setProgress] = useState(null);
  const [technology, setTechnology] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const [fromData, setFormData] = useState(initialState);
  const [createPort, setCreatePort] = useState(portAdd);
  const { token } = useSelector((state) => state?.admin);
  const projectId = data?.project[0]?._id;
  const { name, description, buildDate, liveDemo, category } = createPort;
  const { project, complete, working, satisfied } = fromData;

  createPort.img = img;
  portAdd.technology = technology?.split(" ");

  const handleLogout = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_PROXY_URL}/logout`
      );
      toast.success(data?.message);
      dispatch(login(data));
      localStorage.clear();
      router.push("/login");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...fromData, [e.target.name]: e.target.value });
    setCreatePort({ ...createPort, [e.target.name]: e.target.value });
  };

  const uploadFile = (e) => {
    const storageRef = ref(storage, `portfolio/${e.target.files[0].name}`);
    const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        return toast.error(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setImg(downloadUrl);
        });
      }
    );
  };

  const handleAddPortFolio = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_PROXY_URL}/add/portfolio`,
        createPort,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          credentials: true,
        }
      );
      setLoading(false);
      toast.success("Portfolio Added Successfully");
      router.push("/portfolio");
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  const handleUpdateProject = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.put(
        `${process.env.NEXT_PUBLIC_PROXY_URL}/project/${projectId}`,
        fromData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          credentials: true,
        }
      );
      setFormData({ ...data?.project });
      setLoading(false);
      toast.success("Update Successfully");
      router.push("/");
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    setFormData({ ...data?.project[0] });
  }, []);

  return (
    <>
    <Protected>
      {token ? <Meta title="Razu Islam | Admin Dashboard" /> : <Meta title="Razu Islam | loading..." />}
      {loading ? (
        <Loader />
      ) : (
        <section className={styles.dashboard}>
          <div className="container">
            <div className={styles.dashboardContainer}>
              <h1 className="aboutText">Welcome Admin</h1>
              <Button
                onClick={handleLogout}
                type="button"
                text="Logout"
                className="app_btn"
              />
            </div>
            <div className={styles.portfolio}>
              {/* Add Project Form */}
              <form
                className={styles.portfolioForm}
                onSubmit={handleUpdateProject}
              >
                <div className={styles.form_control}>
                  <label htmlFor="project">Add Project</label>
                  <Input
                    type="text"
                    id="project"
                    name="project"
                    value={project}
                    onChange={handleChange}
                    placeholder="Add Project"
                  />
                </div>
                <div className={styles.form_control}>
                  <label htmlFor="complete">Add Complete</label>
                  <Input
                    type="text"
                    id="complete"
                    name="complete"
                    value={complete}
                    onChange={handleChange}
                    placeholder="Add Complete"
                  />
                </div>
                <div className={styles.form_control}>
                  <label htmlFor="working">Add Working</label>
                  <Input
                    type="text"
                    id="working"
                    name="working"
                    value={working}
                    onChange={handleChange}
                    placeholder="Add Working"
                  />
                </div>
                <div className={styles.form_control}>
                  <label htmlFor="satisfied">Add Satisfied</label>
                  <Input
                    type="text"
                    id="satisfied"
                    name="satisfied"
                    value={satisfied}
                    onChange={handleChange}
                    placeholder="Add Satisfied"
                  />
                </div>
                <Button
                  type="submit"
                  text="Add Project"
                  className="app_btn"
                  style={{
                    width: "100%",
                  }}
                />
              </form>
              {/* Create A skills */}
              <div className={styles.addPort}>
                <h1 className="aboutText">Welcome Admin Add Your Portfolio</h1>
                <form
                  className={styles.portfolioAdd}
                  onSubmit={handleAddPortFolio}
                >
                  <div className={styles.form_control}>
                    <label htmlFor="name">Add Project Name</label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={handleChange}
                      placeholder="Add Project Name"
                    />
                  </div>
                  <div className={styles.form_control}>
                    {!img ? (
                      <>
                        <label htmlFor="img">Upload Thumbnails</label>
                        <Input
                          type="file"
                          id="img"
                          name="img"
                          onChange={uploadFile}
                          accept="image/*"
                        />
                      </>
                    ) : (
                      <div>
                        <img src={img} alt="Razu Islam" />
                      </div>
                    )}
                  </div>
                  <div className={styles.form_control}>
                    <label htmlFor="description">Add Project Description</label>
                    <textarea
                      type="text"
                      id="description"
                      name="description"
                      value={description}
                      onChange={handleChange}
                      placeholder="Add description"
                      cols="30"
                      rows="10"
                    />
                  </div>
                  <div className={styles.form_control}>
                    <label htmlFor="buildDate">Add buildDate</label>
                    <Input
                      type="text"
                      id="buildDate"
                      name="buildDate"
                      value={buildDate}
                      onChange={handleChange}
                      placeholder="Add buildDate"
                    />
                  </div>
                  <div className={styles.form_control}>
                    <label htmlFor="technology">Add technology</label>
                    <Input
                      type="text"
                      id="technology"
                      name="technology"
                      value={technology}
                      onChange={(e) => setTechnology(e.target.value)}
                      placeholder="Add technology"
                    />
                  </div>
                  <div className={styles.form_control}>
                    <label htmlFor="liveDemo">Add liveDemo</label>
                    <Input
                      type="text"
                      id="liveDemo"
                      name="liveDemo"
                      value={liveDemo}
                      onChange={handleChange}
                      placeholder="Add liveDemo"
                    />
                  </div>
                  <div className={styles.form_control}>
                    <label htmlFor="category">Add category</label>
                    <Input
                      type="text"
                      id="category"
                      name="category"
                      value={category}
                      onChange={handleChange}
                      placeholder="Add category"
                    />
                  </div>
                  <Button
                    type="submit"
                    text="Add Portfolio"
                    className="app_btn"
                    style={{
                      width: "100%",
                    }}
                  />
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
      </Protected>
    </>
  );
};

export const getStaticProps = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_PROXY_URL}/projects`
  );
  return { props: { data } };
};

export default Dashboard;
