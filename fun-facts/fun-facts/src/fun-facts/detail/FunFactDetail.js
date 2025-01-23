import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import * as FunFactsService from "../../services/FunFactsService.js";
import { AuthContext } from "../../contexts/AuthContext.js";

const FunFactDetail = () => {
  const [funFact, setFunFact] = useState({});
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  useEffect(() => {
    FunFactsService.getOne(id).then((res) => setFunFact(res));
  }, [id]);

  let isCurrentUser = funFact._ownerId === user._id;

  return (
    <section id="details">
      <div id="details-wrapper">
        <img id="details-img" src={funFact.imageUrl} alt="example1" />
        <p id="details-category">{funFact.category}</p>
        <div id="info-wrapper">
          <div id="details-description">
            <p id="description">{funFact.description}</p>
            <p id="more-info">{funFact.moreInfo}</p>
          </div>
          <h3>
            Likes:<span id="likes">0</span>
          </h3>

          <div id="action-buttons">
            {isCurrentUser && (
              <>
                <Link to="/" id="edit-btn">
                  Edit
                </Link>
                <Link to="/" id="delete-btn">
                  Delete
                </Link>
              </>
            )}
            {user && (
              <a href="" id="like-btn">
                Like
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFactDetail;
