import React from "react";
import "./RightBar.css";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";

const RightBar = () => {
  const [modal, setModal] = useState(false);
  const [profitModal, setProfitModal] = useState(false);
  const [betinfo, setBetInfo] = useState(false);
  const [editstake, setEditStake] = useState(false);

  return (
    <div className="right-part">
      <Accordion defaultActiveKey={["0"]} className="total-credit">
        <Accordion.Item eventKey="1">
          <Accordion.Header>Available Credit: 0.00</Accordion.Header>
          <Accordion.Body>Total Net Exposure: 0.00</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <button className="btn-profit-loss" onClick={() => setProfitModal(true)}>
        Betting Profit and Loss
      </button>
      <Modal
        size="lg"
        isOpen={profitModal}
        centered
        toggle={() => setProfitModal(!profitModal)}
      >
        <ModalHeader toggle={() => setProfitModal(!profitModal)}>
          <div>Betting Profit and Loss</div>
        </ModalHeader>
        <ModalBody style={{ height: "500px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <label for="From">From:</label>
              <input type="date" />
            </div>
            <div>
              <label for="From">To:</label>
              <input type="date" />
            </div>

            <div>
              <button
                style={{
                  backgroundColor: "#264e47",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  width: "87px",
                  height: "30px",
                  fontSize: "15px",
                }}
              >
                Search
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              backgroundColor: "#e5e5e5",
              marginTop: "3rem",
            }}
          >
            <div> Market</div>
            <div>Start Time</div>
            <div>Setteled Time</div>
            <div>Net Win</div>
          </div>
        </ModalBody>
      </Modal>

      <span>Betslip</span>
      <hr style={{ width: "20rem" }} />
      <div className="bet-edit">
        <div style={{ display: "flex" }}>
          <button className="btn-1" onClick={() => setBetInfo(false)}>
            Betslip
          </button>
          <button className="btn-2" onClick={() => setBetInfo(true)}>
            Open Bets
          </button>
        </div>
        <div>
          <button className="stake-btn" onClick={() => setEditStake(true)}>
            Edit Stakes
          </button>
        </div>
      </div>
      {editstake && (
        <div
          style={{
            backgroundColor: "#3d3d3e",
            width: "325px",
            padding: "10px",
          }}
        >
          <div style={{ background: "white", height: "180px" }}>
            <div className="editstake-popup">
              <input style={{ width: "75px" }} />
              <input style={{ width: "75px" }} />
              <input style={{ width: "75px" }} />
              <input style={{ width: "75px" }} />
              <input style={{ width: "75px" }} />
              <input style={{ width: "75px" }} />
            </div>
            <div className="cancel-save-btn">
              <button
                className="cancel-btn"
                onClick={() => setEditStake(false)}
              >
                Cancel
              </button>
              <button className="save-btn" onClick={() => setEditStake(false)}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {betinfo ? (
        <div>
          <div className="betinformation">
            <input type="checkbox" id="betinfo" />
            <label style={{ fontSize: "12px" }}> Show bet Info</label>
            <input type="checkbox" id="betinfo" />
            <label style={{ fontSize: "12px" }}>Show bets for this event</label>
          </div>
          <div className="matched-bet">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header style={{ textAlign: "center" }}>
                  Matched Bets
                </Accordion.Header>
                <Accordion.Body className="betinformation">
                  <input type="checkbox" />
                  <label style={{ fontSize: "12px" }}>Average Odds</label>
                  <input type="checkbox" />
                  <label style={{ fontSize: "12px" }}>Order By Date</label>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      ) : (
        <div className="add-section">
          Click on the odds to add selections to the betslip.
        </div>
      )}

      <button className="game-rule" onClick={() => setModal(true)}>
        Game Rules
      </button>
      <Modal size="lg" isOpen={modal} centered toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}></ModalHeader>
        <ModalBody style={{ height: "500px" }}>
          <div>32 Card Casino</div>
          <div>Rules and Regulations</div>
          <div>GAME OBJECTIVES</div>
          <div style={{ textAlign: "left" }}>
            The objective of 32 Card Casino is to predict the winning player of
            the game round. 32 Card Casino is played with a deck of 32 cards
            which does not include A,2,3,4,5 ranked cards. To win, you need to
            predict if total of the base value of the Player and cards dealt
            with the Player will be higher or lower than other three Players.
            You can either back or lay any Player. On Draw between one or more
            Players, the market will be reopened for the next cards and users
            can place new bets.
          </div>
          <div>GAME RULES</div>
          <ul>
            <li></li>
          </ul>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default RightBar;
