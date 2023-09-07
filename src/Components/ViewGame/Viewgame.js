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
import Modal from "react-bootstrap/Modal";

const Viewgame = () => {
  const [visible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!visible);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="main-div">
      <div className="slider">
        <span className="menu_logos-wrapper">
          <span className="menu__logos-wrapper">
            <span className="menu_logo"></span>
            <span className="menu_lobby"></span>
          </span>
        </span>
      </div>

      <div className="middile-part">
        <button className="live-btn">Live(31)</button>
        <button className="virtual-btn">Virtual(21)</button>
        <div>
          <img src={amar} alt="" style={{ width: "45rem", height: "25rem" }} />
        </div>
        <div className="classic-view">
          <div className="classic-left">
            <div>
              classic view
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
              </table>

              <table>
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
              </table>

              <table>
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
              </table>
            </div>
          </>
        ) : (
          <>
            {" "}
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
        <button className="btn-profit-loss" onClick={handleShow}>
          Betting Profit and Loss
        </button>
        <Modal show={show} onHide={handleClose} animation={false} centered>
          <Modal.Header closeButton>
            <Modal.Title> Betting Profit and Loss</Modal.Title>
          </Modal.Header>
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
        <button className="game-rule">Game Rules</button>
      </div>
    </div>
  );
};

export default Viewgame;
