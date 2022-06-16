import { configureStore } from "@reduxjs/toolkit";
import userSlice, { login } from "../redux/userSlice";
import { Provider } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { useRouter } from 'next/router'

//Create Our Store
const store = configureStore({
  reducer: {
    admin: userSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
//State Provider To Provide store state in our application
const StoreProvider = ({children}) => {
    const router = useRouter();
  //checking if user logged in or not
  useEffect(() => {
    const myFunc = () =>{
        const userData = localStorage.getItem("admin");
      if (userData) store.dispatch(login(JSON.parse(userData)));
    }
    myFunc()

  }, []);
  //when any error coming with axios it's showing to console to fix bug
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      const res = error.response;
      //Checking token is expire or not if token expire return automatic logout and return login page
      if (res?.data?.message?.includes("invalid token")) {
        return new Promise((response, reject) => {
          axios
            .get(`${process.env.NEXT_PUBLIC_PROXY_URL}/logout`)
            .then(({ data }) => {
              store.dispatch(login(data));
              localStorage.clear();
              router.push("/login")
            })
            .catch((err) => {
              console.log(err);
              reject(error);
            });
        });
      }
      return Promise.reject(error);
    }
  );

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;