import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import "./Headline.css";
const Headline = () => {
  return (
    <div>
      <div className="headline">
        <Container className="container">
          <Row>
            <Col>
              {" "}
              <h6 className="my-3 text-white">
                Select the primary and secondary schools & universities you are
                interested in
              </h6>
              <label htmlFor="" className="headline_label">
                <input type="text" placeholder="enter your name" />
                <button className="headline_btn1">Search</button>
              </label>
            </Col>
            <Col>
              {" "}
              <h6 className="my-3 text-white">
                Select the university majors and professional rankings you are
                interested in
              </h6>
              <label htmlFor="" className="headline_label">
                <input type="text" placeholder="enter your name" />
                <button className="headline_btn2">Search</button>
              </label>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="my-5">
        <Container>
          <Row>
            <Col sm={12} lg={2} md={4}>
              <Card className="headline_card_img">
                <Card.Img
                  variant="top"
                  src="https://ukec.net.cn/static/cn/images/cn2/home_img1.jpg"
                />
              </Card>
              <p className="text-start">UKEC Young Study Abroad</p>
            </Col>
            <Col sm={12} lg={2} md={4}>
              <Card className="headline_card_img">
                <Card.Img
                  variant="top"
                  src="https://ukec.net.cn/static/cn/images/cn2/home_img2.jpg"
                />
              </Card>
              <p className="text-start">UKEC undergraduate study abroad</p>
            </Col>
            <Col sm={12} lg={2} md={4}>
              <Card className="headline_card_img">
                <Card.Img
                  variant="top"
                  src="https://ukec.net.cn/static/cn/images/cn2/home_img3.jpg"
                />
              </Card>
              <p className="text-start">UKEC Master Study Abroad</p>
            </Col>
            <Col sm={12} lg={2} md={4}>
              <Card className="headline_card_img">
                <Card.Img
                  variant="top"
                  src="https://ukec.net.cn/static/cn/images/cn2/home_img4.jpg"
                />
              </Card>
              <p className="text-start">UKEC PhD Study Abroad</p>
            </Col>
            <Col sm={12} lg={2} md={4}>
              <Card className="headline_card_img">
                <Card.Img
                  variant="top"
                  src="https://ukec.net.cn/static/cn/images/cn2/utrack1.jpg"
                />
              </Card>
              <p className="text-start">U-track system</p>
            </Col>
            <Col sm={12} lg={2} md={4}>
              <Card className="headline_card_img">
                <Card.Img
                  variant="top"
                  src="https://ukec.net.cn/static/cn/images/cn2/interview1.jpg"
                />
              </Card>
              <p className="text-start">UKEC Online Interview Seminar</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ background: "#e6e6e6" }}>
        <div className="container p-4">
          <div>
            <h1>UKEC headlines today</h1>
            <div className="m-4">
              <div className="d-flex">
                <div className="circle d-flex justify-content-center align-items-center text-white">
                  12-12
                </div>
                <div className="ms-5">
                  <img
                    src="https://ukec.mailxpv.com/Logo/2015-09-25/5604c43574b30.jpg"
                    alt=""
                    style={{ width: 200 }}
                  />
                </div>
                <div className="ms-3" style={{ width: "100%" }}>
                  <h4>
                    British university information: Nan'an 2023 autumn admission
                    courses for Chinese ap
                  </h4>
                  <p>
                    The University of Southampton's 2023 autumn admission for
                    the following courses for Chinese applicants will be closed
                    on December 15, 2022 (12:00pm UK Time) and January 19, 2023
                    (12:00pm UK Time):{" "}
                  </p>
                  <button type="button" className="btn btn-outline-secondary">
                    expand
                  </button>
                </div>
              </div>
              <hr />
              <div className="d-flex mt-3">
                <div className="circle d-flex justify-content-center align-items-center text-white">
                  11-22
                </div>
                <div className="ms-5" style={{ width: 200 }}>
                  <img
                    src="https://ukec.mailxpv.com/Logo/2015-09-02/55e6a87569a6e.jpg"
                    alt=""
                    style={{ width: 200 }}
                  />
                </div>
                <div className="ms-3" style={{ width: "100%" }}>
                  <h4>
                    British university information: the first round of cut-off
                    application for some courses
                  </h4>
                  <p>
                    The first round of applications for the following courses at
                    the University of Glasgow will be closed today, November 22,
                    2022 ! !
                  </p>
                  <button type="button" className="btn btn-outline-secondary">
                    expand
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div>
            <input
              className="radio"
              id="one"
              name="group"
              type="radio"
              defaultChecked
            />
            <input className="radio" id="two" name="group" type="radio" />
            <input className="radio" id="three" name="group" type="radio" />
            <div className="tabs">
              <label className="tab" id="one-tab" htmlFor="one">
                CSS
              </label>
              <label className="tab" id="two-tab" htmlFor="two">
                Skills
              </label>
              <label className="tab" id="three-tab" htmlFor="three">
                Prerequisites
              </label>
            </div>
            <div className="panels">
              <div className="panel" id="one-panel">
                <Row>
                  <Col sm={12} lg={6} md={6}>
                    <div className="d-flex">
                      <img
                        src="https://ukec.mailxpv.com/articleCover/2023/02/17/f73f6aaa6318be710bebb29c2f190427.jpg?imageView2/1/w/150/h/100"
                        style={{ height: 120 }}
                        className="img-fluid"
                        alt=""
                      />
                      <div className="ms-4">
                        <div className="panel-title">
                          Six Reasons to Choose to Study in Ireland
                        </div>
                        <p>
                          Most international students will give priority to
                          mainstream countries such as Britain, the United
                          States...
                        </p>
                        <p>2023-02-17 </p>
                      </div>
                    </div>
                    <div className="d-flex mt-3">
                      <img
                        src="https://ukec.mailxpv.com/articleCover/2023/02/17/f73f6aaa6318be710bebb29c2f190427.jpg?imageView2/1/w/150/h/100"
                        style={{ height: 120 }}
                        className="img-fluid"
                        alt=""
                      />
                      <div className="ms-4">
                        <div className="panel-title">
                          Six Reasons to Choose to Study in Ireland
                        </div>
                        <p>
                          Most international students will give priority to
                          mainstream countries such as Britain, the United
                          States...
                        </p>
                        <p>2023-02-17 </p>
                      </div>
                    </div>
                    <div className="d-flex mt-3">
                      <img
                        src="https://ukec.mailxpv.com/articleCover/2023/02/17/f73f6aaa6318be710bebb29c2f190427.jpg?imageView2/1/w/150/h/100"
                        style={{ height: 120 }}
                        className="img-fluid"
                        alt=""
                      />
                      <div className="ms-4">
                        <div className="panel-title">
                          Six Reasons to Choose to Study in Ireland
                        </div>
                        <p>
                          Most international students will give priority to
                          mainstream countries such as Britain, the United
                          States...
                        </p>
                        <p>2023-02-17 </p>
                      </div>
                    </div>
                    <div className="d-flex mt-3">
                      <img
                        src="https://ukec.mailxpv.com/articleCover/2023/02/17/f73f6aaa6318be710bebb29c2f190427.jpg?imageView2/1/w/150/h/100"
                        style={{ height: 120 }}
                        className="img-fluid"
                        alt=""
                      />
                      <div className="ms-4">
                        <div className="panel-title">
                          Six Reasons to Choose to Study in Ireland
                        </div>
                        <p>
                          Most international students will give priority to
                          mainstream countries such as Britain, the United
                          States...
                        </p>
                        <p>2023-02-17 </p>
                      </div>
                    </div>
                  </Col>
                  <Col sm={12} lg={6} md={6}>
                    <div className="d-flex mt-3">
                      <img
                        src="https://ukec.mailxpv.com/articleCover/2023/02/17/f73f6aaa6318be710bebb29c2f190427.jpg?imageView2/1/w/150/h/100"
                        style={{ height: 120 }}
                        className="img-fluid"
                        alt=""
                      />
                      <div className="ms-4">
                        <div className="panel-title">
                          Six Reasons to Choose to Study in Ireland
                        </div>
                        <p>
                          Most international students will give priority to
                          mainstream countries such as Britain, the United
                          States...
                        </p>
                        <p>2023-02-17 </p>
                      </div>
                    </div>
                    <div className="d-flex mt-3">
                      <img
                        src="https://ukec.mailxpv.com/articleCover/2023/02/17/f73f6aaa6318be710bebb29c2f190427.jpg?imageView2/1/w/150/h/100"
                        style={{ height: 120 }}
                        className="img-fluid"
                        alt=""
                      />
                      <div className="ms-4">
                        <div className="panel-title">
                          Six Reasons to Choose to Study in Ireland
                        </div>
                        <p>
                          Most international students will give priority to
                          mainstream countries such as Britain, the United
                          States...
                        </p>
                        <p>2023-02-17 </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="panel" id="two-panel">
                <div className="panel-title">Take-Away Skills</div>
                <p>
                  You will learn many aspects of styling web pages! You’ll be
                  able to set up the correct file structure, edit text and
                  colors, and create attractive layouts. With these skills,
                  you’ll be able to customize the appearance of your web pages
                  to suit your every need!
                </p>
              </div>
              <div className="panel" id="three-panel">
                <div className="panel-title">Note on Prerequisites</div>
                <p>
                  We recommend that you complete Learn HTML before learning CSS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headline;
