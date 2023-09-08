import React from "react";
import "./Viewgame.css";
import diamond from "../../Assets/Images/diamonds.png";
import updown from "../../Assets/Images/7up7down_up-new.png";
import club from "../../Assets/Images/Clubs.webp";
import spade from "../../Assets/Images/Spades.webp";
import diamonds from "../../Assets/Images/diamonds.png";
import heart from "../../Assets/Images/Hearts.webp";
import amar from "../../Assets/Images/Amar-Akbar-Anthony-_Virtual_.png";
import { Switch } from "antd";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import Marquee from "react-fast-marquee";
import marquee1 from "../../Assets/Images/marquee1.jpg";
import marquee2 from "../../Assets/Images/marquee2.jpg";

const Viewgame = () => {
  const [visible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!visible);
  };

  const [modal, setModal] = useState(false);

  const [profitModal, setProfitModal] = useState(false);

  return (
    <div className="main-div">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "85%",
        }}
      >
        <div className="slider">
          <span className="menu_logos-wrapper">
            <span className="menu__logos-wrapper">
              <span className="menu_logo"></span>
              <span className="menu_lobby"></span>
            </span>
          </span>

          <Marquee
            behavior="scroll"
            scrollamount="20"
            width="100%"
            height="50%"
            direction="down"
            style={{ width: "200px" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "5px",
              }}
            >
              <img src={marquee1} alt="" style={{ width: "200px" }} />
              <img src={marquee2} alt="" style={{ width: "200px" }} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "5px",
              }}
            >
              <img src={marquee1} alt="" style={{ width: "200px" }} />
              <img src={marquee2} alt="" style={{ width: "200px" }} />
            </div>
          </Marquee>
        </div>

        <div className="middile-part">
          <button className="live-btn">Live(31)</button>
          <button className="virtual-btn">Virtual(21)</button>
          <div>
            <img
              src={amar}
              alt=""
              style={{ width: "45rem", height: "25rem" }}
            />
          </div>
          <div className="classic-view">
            <div className="classic-left">
              <div>
                Classic view
                <Switch
                  style={{ marginLeft: "10px" }}
                  onClick={toggleVisibility}
                />
              </div>
            </div>
          </div>
          {visible ? (
            <>
              <div style={{ display: "flex" }}>
                <span className="display-result">C19</span>
                <span className="display-result">C3</span>
                <span className="display-result">S4</span>
                <span className="display-result">H11</span>
                <span className="display-result">D9</span>
                <span className="display-result">H13</span>
                <span className="display-result">D3</span>
                <span className="display-result">C9</span>
              </div>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <th>Match odds</th>
                      <th></th>
                      <th></th>
                      <th>Back</th>
                      <th>Lay</th>
                      <th></th>
                      <th></th>
                    </tr>
                    <tr>
                      <td>7up</td>
                      <td className="td-value">
                        <span>2</span>
                        <span>15000</span>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td className="td-value">
                        <span>2</span>
                        <span>15000</span>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>7down</td>
                      <td className="td-value">
                        <span>2</span>
                        <span>15000</span>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>

                <table>
                  <tbody>
                    <tr>
                      <th>color</th>
                      <th></th>
                      <th></th>
                      <th>Back</th>
                      <th>Lay</th>
                      <th></th>
                      <th></th>
                    </tr>
                    <tr>
                      <td>Red</td>
                      <td className="td-value">
                        <span>2</span>
                        <span>15000</span>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Black</td>
                      <td className="td-value">
                        <span>2</span>
                        <span>15000</span>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>

                <table>
                  <tbody>
                    <tr>
                      <th>Odd-Even</th>
                      <th></th>
                      <th></th>
                      <th>Back</th>
                      <th>Lay</th>
                      <th></th>
                      <th></th>
                    </tr>
                    <tr>
                      <td>Odd</td>
                      <td className="td-value">
                        <span>2</span>
                        <span>15000</span>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Even</td>
                      <td className="td-value">
                        <span>2</span>
                        <span>15000</span>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <>
              <div>
                <div className="classic-right">
                  <div className="diamond">
                    <img src={diamond} alt="" />6
                  </div>
                  <div className="diamond">
                    <img src={diamond} alt="" />j
                  </div>
                  <div className="diamond">
                    <img src={diamond} alt="" />k
                  </div>
                  <div className="diamond">
                    <img src={diamond} alt="" />l
                  </div>
                  <div className="diamond">
                    <img src={diamond} alt="" />9
                  </div>
                  <div className="diamond">
                    <img src={diamond} alt="" />q
                  </div>
                  <div className="diamond">
                    <img src={diamond} alt="" />9
                  </div>
                  <div className="diamond">
                    <img src={diamond} alt="" />A
                  </div>
                  <div className="diamond">
                    <img src={diamond} alt="" />A
                  </div>
                </div>
              </div>
              <div className="up-down">7 UP & DOWN VIRTUAL</div>
              <div>#52290422</div>
              <div className="card-main">
                <div className="card-down">
                  <div>
                    <img src={updown} alt="" />
                  </div>
                  <div style={{ color: "white" }}>2</div>
                </div>
                <div className="card-down">
                  <div>
                    <img src={updown} alt="" />
                  </div>
                  <div style={{ color: "white" }}>11.2</div>
                </div>
                <div className="card-down">
                  <div>
                    <img src={updown} alt="" />
                  </div>
                  <div style={{ color: "white" }}>2</div>
                </div>

                <div className="club-spade">
                  <div style={{ display: "flex" }}>
                    <img
                      src={club}
                      alt=""
                      style={{ width: "20px", margin: "2px" }}
                    />

                    <img src={spade} alt="" style={{ width: "20px" }} />
                  </div>
                  <div style={{ color: "white" }}>1.98</div>
                </div>
                <div className="club-spade">
                  <div>
                    <img src={diamonds} alt="" style={{ width: "20px" }} />

                    <img src={heart} alt="" style={{ width: "20px" }} />
                  </div>
                  <div style={{ color: "white" }}>1.98</div>
                </div>
              </div>
              <div className="even-odd">
                <div className="even-small">
                  <div>EVEN</div>
                  <div>2.1</div>
                </div>
                <div className="odd-small">
                  <div>ODD</div>
                  <div>2.1</div>
                </div>
                <div className="spade-seven-up">
                  <img src={club} alt="" style={{ width: "32px" }} />
                  <span>3.75</span>
                </div>
                <div className="spade-seven-up">
                  <img src={spade} alt="" style={{ width: "32px" }} />
                  <span>3.75</span>
                </div>
                <div className="spade-seven-up">
                  <img src={heart} alt="" style={{ width: "32px" }} />
                  <span>3.75</span>
                </div>
                <div className="spade-seven-up">
                  <img src={diamonds} alt="" style={{ width: "32px" }} />
                  <span>3.75</span>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="right-part">
          <Accordion defaultActiveKey={["0"]} className="total-credit">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Available Credit: 0.00</Accordion.Header>
              <Accordion.Body>Total Net Exposure: 0.00</Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <button
            className="btn-profit-loss"
            onClick={() => setProfitModal(true)}
          >
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
              <button className="btn-1">Betslip</button>
              <button className="btn-2">Open Bets</button>
            </div>
            <div>
              <button className="stake-btn">Edit Stakes</button>
            </div>
          </div>
          <div className="add-section">
            Click on the odds to add selections to the betslip.
          </div>
          <button className="game-rule" onClick={() => setModal(true)}>
            Game Rules
          </button>
          <Modal
            size="lg"
            isOpen={modal}
            centered
            toggle={() => setModal(!modal)}
          >
            <ModalHeader toggle={() => setModal(!modal)}></ModalHeader>
            <ModalBody style={{ height: "500px" }}>
              <div>32 Card Casino</div>
              <div>Rules and Regulations</div>
              <div>GAME OBJECTIVES</div>
              <div style={{ textAlign: "left" }}>
                The objective of 32 Card Casino is to predict the winning player
                of the game round. 32 Card Casino is played with a deck of 32
                cards which does not include A,2,3,4,5 ranked cards. To win, you
                need to predict if total of the base value of the Player and
                cards dealt with the Player will be higher or lower than other
                three Players. You can either back or lay any Player. On Draw
                between one or more Players, the market will be reopened for the
                next cards and users can place new bets.
              </div>
              <div>GAME RULES</div>
              <ul>
                <li></li>
              </ul>
            </ModalBody>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Viewgame;
