import { useRouter } from "next/router";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const Protected = ({ children }) => {
  const { token } = useSelector((state) => state?.admin);
  const router = useRouter();
  useEffect(() => {
    if (!token) {
      toast.error("You are not authorized to view this page");
      router.push("/login");
    }
  }, []);
  return <>{children}</>;
};

export default Protected;
