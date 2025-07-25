import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../../context/CaptainContext";
import axios from "axios";

const CaptainProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
      return;
    }
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.status === 200) {
          setCaptain(response.data.captain);
        }
      })
      .catch((error) => {
        console.error("Error fetching captain profile:", error);
        localStorage.removeItem("token");
        navigate("/captain-login");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [token, navigate, setCaptain]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
};

export default CaptainProtectWrapper;
