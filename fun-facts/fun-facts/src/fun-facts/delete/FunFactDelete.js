import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import * as FunFactsService from "../../services/FunFactsService.js";
import { AuthContext } from "../../contexts/AuthContext.js";

export const FunFactDelete = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    FunFactsService.remove(id, user.accessToken).then((response) => {
      if (response.ok) {
        navigate("/fun-facts");
      }
    });
  }, [id]);

  return <></>;
};

export default FunFactDelete;
