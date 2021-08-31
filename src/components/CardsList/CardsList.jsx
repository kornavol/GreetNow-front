import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateCard, deleteCard } from "../../actions/cardsCRUD";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import "./css/CardsList.css";

export default function CardsList({ createdBy }) {
  const dispatch = useDispatch();

  const [cardsList, setCardsList] = useState([]);

  /* request to gett all cards */

  function getAllCards() {
    const url = "http://localhost:8080/cards/getAllCards";
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };

    fetch(url, options).then((data) =>
      data.json().then((output) => {
        if (output.status === "success") {
          // console.log('CARDS', output);
          const cards = output.data;
          setCardsList(cards);
        }
      })
    );
  }

  useEffect(() => {
    getAllCards();
  }, []);

  const Cards = ({ cards, createdBy }) => {
    const cardSet = cards.map((card, i) => {
      if (card.createdBy == createdBy) {
        const pass = `http://localhost:8080/greeting-pictures/${card.picture}`;
        const cardID = card._id;

        return (
          <div className="cards-list-wrapper2" key={i}>
            <Link key={cardID} to={`/cards/${cardID}`}>
              <img
                alt="card catalog pic"
                className="picture"
                src={pass}
                // onClick={() => {dispatch(sendPict(picture)); closeModal()}}
                style={{ cursor: "pointer" }}
              />
            </Link>
            <div className="cards-list-btn-container">
              <Link
                to="#"
                onClick={async () => {
                  const result = await dispatch(deleteCard(card));
                  if (result.status == "success") {
                    // console.log(result);
                    console.log(
                      "delte operation. Implement useState to up-date a page "
                    );
                    getAllCards();
                  }
                }}
              >
                <p>
                  <DeleteForeverOutlinedIcon />
                </p>
              </Link>
              {/* Has to redirect to card editor with a card */}
              <Link to="#">
                <p>
                  <EditOutlinedIcon />
                </p>
              </Link>
            </div>
          </div>
        );
      }
    });

    return <div className="cards-list-wrapper">{cardSet}</div>;
  };

  return (
    <div className="component-cards-list">
      {cardsList.length > 0 ? (
        <Cards cards={cardsList} createdBy={createdBy} />
      ) : (
        <h1>There aren't any cars</h1>
      )}
    </div>
  );
}
