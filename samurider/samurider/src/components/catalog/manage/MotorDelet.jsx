import { useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as MotorService from "../../../services/MotorService";
import { AuthContext } from "../../../contexts/AuthContext";

const MotorDelete = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    MotorService.remove(id, user.accessToken).then((response) => {
      if (response.ok) {
        console.log(response);
        navigate("/catalog");
      }
    });
  }, [id, user.accessToken, navigate]);

  return <></>;
};

export default MotorDelete;
