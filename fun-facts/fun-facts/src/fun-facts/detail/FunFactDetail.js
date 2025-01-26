import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import * as FunFactsService from "../../services/FunFactsService.js";
import { AuthContext } from "../../contexts/AuthContext.js";
import * as LikeService from "../../services/LikeService.js";

const FunFactDetail = () => {
  const [funFact, setFunFact] = useState({});
  const [funFactLike, setFunFactLike] = useState({ isLiked: false, count: 0 });
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  useEffect(() => {
    FunFactsService.getOne(id).then((res) => setFunFact(res));
  }, [id]);

  useEffect(() => {
    LikeService.getTotalLikes(id, user.accessToken).then((response) =>
      setFunFactLike((state) => ({
        ...state,
        count: response,
      }))
    );
  }, [id]);

  useEffect(() => {
    LikeService.getUserLike(id, user._id, user.accessToken).then((response) =>
      setFunFactLike((state) => ({
        ...state,
        isLiked: response == 1 ? true : false,
      }))
    );
  }, [id, user._id]);

  const likeHeandler = () => {
    const factId = { factId: id };
    LikeService.postLike(factId, user.accessToken).then((response) => {
      if (response.ok) {
        setFunFactLike((state) => ({ isLiked: true, count: state.count + 1 }));
      }
    });
  };

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
            Likes:<span id="likes">{funFactLike.count}</span>
          </h3>

          <div id="action-buttons">
            {isCurrentUser && (
              <>
                <Link to={`/fun-facts/edit/${id}`} id="edit-btn">
                  Edit
                </Link>
                <Link to={`/fun-facts/delete/${id}`} id="delete-btn">
                  Delete
                </Link>
              </>
            )}
            {user && !isCurrentUser && !funFactLike.isLiked && (
              <Link onClick={likeHeandler} id="like-btn">
                Like
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFactDetail;
