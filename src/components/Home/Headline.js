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
              <h6 className="my-3 text-white">选择你感兴趣的中小学&大学查询</h6>
              <label htmlFor="" className="headline_label">
                <input type="text" placeholder="大学查询" />
                <button className="headline_btn1">Search</button>
              </label>
            </Col>
            <Col>
              {" "}
              <h6 className="my-3 text-white">
                选择你感兴趣的大学专业&专业排名
              </h6>
              <label htmlFor="" className="headline_label">
                <input type="text" placeholder="大学专业查询" />
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
              <p className="text-center mt-3">UKEC低龄留学</p>
            </Col>
            <Col sm={12} lg={2} md={4}>
              <Card className="headline_card_img">
                <Card.Img
                  variant="top"
                  src="https://ukec.net.cn/static/cn/images/cn2/home_img2.jpg"
                />
              </Card>
              <p className="text-center mt-3">UKEC本科留学</p>
            </Col>
            <Col sm={12} lg={2} md={4}>
              <Card className="headline_card_img">
                <Card.Img
                  variant="top"
                  src="https://ukec.net.cn/static/cn/images/cn2/home_img3.jpg"
                />
              </Card>
              <p className="text-center mt-3">UKEC硕士留学</p>
            </Col>
            <Col sm={12} lg={2} md={4}>
              <Card className="headline_card_img">
                <Card.Img
                  variant="top"
                  src="https://ukec.net.cn/static/cn/images/cn2/home_img4.jpg"
                />
              </Card>
              <p className="text-center mt-3">UKEC博士留学</p>
            </Col>
            <Col sm={12} lg={2} md={4}>
              <Card className="headline_card_img">
                <Card.Img
                  variant="top"
                  src="https://ukec.net.cn/static/cn/images/cn2/utrack1.jpg"
                />
              </Card>
              <p className="text-center mt-3">U-track系统</p>
            </Col>
            <Col sm={12} lg={2} md={4}>
              <Card className="headline_card_img">
                <Card.Img
                  variant="top"
                  src="https://ukec.net.cn/static/cn/images/cn2/interview1.jpg"
                />
              </Card>
              <p className="text-center mt-3">UKEC线上面试宣讲会</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ background: "#e6e6e6" }}>
        <div className="container p-4">
          <div>
            <h1>UKEC今日头条</h1>
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
                    英国大学信息：南安23年秋季入学部分课程针对中国籍贯申请者将于12月15日截申
                  </h4>
                  <p>
                    南安普顿大学2023年秋季入学以下课程针对中国籍贯申请者将于2022年12月15日（12:00pm
                    UK Time) 以及2023年1月19日（12:00pm UK Time) 截止申请：
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
                  <h4>英国大学信息：格拉斯哥大学部分课程11月22日第一轮截申</h4>
                  <p>
                    格拉斯哥大学以下课程将于今日2022年11月22日第一轮截申！！
                    SCHOOL OF EDUCATION 部分课程
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
        <div className="container my-5">
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
            <input className="radio" id="four" name="group" type="radio" />
            <input className="radio" id="five" name="group" type="radio" />
            <div className="tabs">
              <label className="tab" id="one-tab" htmlFor="one">
                UKEC留学攻略
              </label>
              <label className="tab" id="two-tab" htmlFor="two">
                英国留学新鲜事
              </label>
              <label className="tab" id="three-tab" htmlFor="three">
                英国留学信息
              </label>
              <label className="tab" id="four-tab" htmlFor="four">
                UKEC院校新闻
              </label>
              <label className="tab" id="five-tab" htmlFor="five">
                UKEC专家看点
              </label>
            </div>
            <div className="panels">
              <div className="panel" id="one-panel">
                <Row>
                  <Col sm={12} lg={6} md={6}>
                    <div className="d-flex">
                      <img
                        src="https://ukec.mailxpv.com/articleCover/2023/02/16/bf25ba14704e2ecdff2e9adb2c303cb2.jpg"
                        style={{ height: 120, width: 420 }}
                        className="img-fluid w-25"
                        alt=""
                      />
                      <div className="ms-4 w-75">
                        <div className="panel-title">
                          埃塞克斯大学EBS Colchester部分硕士课程依旧开放申请！
                        </div>
                        <p>
                          埃塞克斯大学EBS
                          Colchester部分硕士课程仍然开放申请，埃克塞特大学2023年暑期
                          Pre-sessional English
                          语言班现已开放申请，包含3种语言班供同学们选择...
                        </p>
                        <p>2023-02-17 </p>
                      </div>
                    </div>
                    <div className="d-flex ">
                      <img
                        src="https://ukec.mailxpv.com/articleCover/2023/02/16/02016c614e1b25080888593b8cd21bc9.jpg"
                        style={{ height: 120, width: 420 }}
                        className="img-fluid w-25"
                        alt=""
                      />
                      <div className="ms-4 w-75">
                        <div className="panel-title">
                          阿斯顿大学医药学硕士专业
                        </div>
                        <p>
                          通过阿斯顿大学医药学硕士专业，您将获得对您所选领域的全面了解和认识，以及完成一个最终的研究项目所需的研究方法，以及对药物发现过程的概述。你将承担各种必修模块和一个研究项目。...
                        </p>
                        <p>2023-02-17 </p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <img
                        src="https://ukec.mailxpv.com/articleCover/2023/02/16/b16157fdcc47d311e554082b41e27ebf.jpg"
                        style={{ height: 120, width: 420 }}
                        className="img-fluid w-25"
                        alt=""
                      />
                      <div className="ms-4 w-75">
                        <div className="panel-title">
                          伯明翰大学部分专业将截止第三轮申请，抓紧时间申请！
                        </div>
                        <p>伯明翰大学商学院将于3月13日截止第三轮申请。。...</p>
                        <p>2023-02-17 </p>
                      </div>
                    </div>
                  </Col>
                  <Col sm={12} lg={6} md={6}>
                    <div className="d-flex">
                      <img
                        src="https://ukec.mailxpv.com/articleCover/2023/02/16/bf25ba14704e2ecdff2e9adb2c303cb2.jpg"
                        style={{ height: 120, width: 420 }}
                        className="img-fluid w-25"
                        alt=""
                      />
                      <div className="ms-4 w-75">
                        <div className="panel-title">
                          埃塞克斯大学EBS Colchester部分硕士课程依旧开放申请！
                        </div>
                        <p>
                          埃塞克斯大学EBS
                          Colchester部分硕士课程仍然开放申请，埃克塞特大学2023年暑期
                          Pre-sessional English
                          语言班现已开放申请，包含3种语言班供同学们选择...
                        </p>
                        <p>2023-02-17 </p>
                      </div>
                    </div>
                    <div className="d-flex ">
                      <img
                        src="https://ukec.mailxpv.com/articleCover/2023/02/16/02016c614e1b25080888593b8cd21bc9.jpg"
                        style={{ height: 120, width: 420 }}
                        className="img-fluid w-25"
                        alt=""
                      />
                      <div className="ms-4 w-75">
                        <div className="panel-title">
                          阿斯顿大学医药学硕士专业
                        </div>
                        <p>
                          通过阿斯顿大学医药学硕士专业，您将获得对您所选领域的全面了解和认识，以及完成一个最终的研究项目所需的研究方法，以及对药物发现过程的概述。你将承担各种必修模块和一个研究项目。...
                        </p>
                        <p>2023-02-17 </p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <img
                        src="https://ukec.mailxpv.com/articleCover/2023/02/16/b16157fdcc47d311e554082b41e27ebf.jpg"
                        style={{ height: 120, width: 420 }}
                        className="img-fluid w-25"
                        alt=""
                      />
                      <div className="ms-4 w-75">
                        <div className="panel-title">
                          伯明翰大学部分专业将截止第三轮申请，抓紧时间申请！
                        </div>
                        <p>伯明翰大学商学院将于3月13日截止第三轮申请。。...</p>
                        <p>2023-02-17 </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="panel" id="two-panel">
                <Row>
                  <Col sm={12} lg={6} md={6}>
                    <div className="d-flex">
                      <img
                        src="https://ukec.mailxpv.com/articleCover/2023/02/16/bf25ba14704e2ecdff2e9adb2c303cb2.jpg"
                        style={{ height: 120, width: 420 }}
                        className="img-fluid w-25"
                        alt=""
                      />
                      <div className="ms-4 w-75">
                        <div className="panel-title">
                          埃塞克斯大学EBS Colchester部分硕士课程依旧开放申请！
                        </div>
                        <p>
                          埃塞克斯大学EBS
                          Colchester部分硕士课程仍然开放申请，埃克塞特大学2023年暑期
                          Pre-sessional English
                          语言班现已开放申请，包含3种语言班供同学们选择...
                        </p>
                        <p>2023-02-17 </p>
                      </div>
                    </div>
                    <div className="d-flex ">
                      <img
                        src="https://ukec.mailxpv.com/articleCover/2023/02/16/02016c614e1b25080888593b8cd21bc9.jpg"
                        style={{ height: 120, width: 420 }}
                        className="img-fluid w-25"
                        alt=""
                      />
                      <div className="ms-4 w-75">
                        <div className="panel-title">
                          阿斯顿大学医药学硕士专业
                        </div>
                        <p>
                          通过阿斯顿大学医药学硕士专业，您将获得对您所选领域的全面了解和认识，以及完成一个最终的研究项目所需的研究方法，以及对药物发现过程的概述。你将承担各种必修模块和一个研究项目。...
                        </p>
                        <p>2023-02-17 </p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <img
                        src="https://ukec.mailxpv.com/articleCover/2023/02/16/b16157fdcc47d311e554082b41e27ebf.jpg"
                        style={{ height: 120, width: 420 }}
                        className="img-fluid w-25"
                        alt=""
                      />
                      <div className="ms-4 w-75">
                        <div className="panel-title">
                          伯明翰大学部分专业将截止第三轮申请，抓紧时间申请！
                        </div>
                        <p>伯明翰大学商学院将于3月13日截止第三轮申请。。...</p>
                        <p>2023-02-17 </p>
                      </div>
                    </div>
                  </Col>
                  <Col sm={12} lg={6} md={6}>
                    <div className="d-flex">
                      <img
                        src="https://ukec.mailxpv.com/articleCover/2023/02/16/bf25ba14704e2ecdff2e9adb2c303cb2.jpg"
                        style={{ height: 120, width: 420 }}
                        className="img-fluid w-25"
                        alt=""
                      />
                      <div className="ms-4 w-75">
                        <div className="panel-title">
                          埃塞克斯大学EBS Colchester部分硕士课程依旧开放申请！
                        </div>
                        <p>
                          埃塞克斯大学EBS
                          Colchester部分硕士课程仍然开放申请，埃克塞特大学2023年暑期
                          Pre-sessional English
                          语言班现已开放申请，包含3种语言班供同学们选择...
                        </p>
                        <p>2023-02-17 </p>
                      </div>
                    </div>
                    <div className="d-flex ">
                      <img
                        src="https://ukec.mailxpv.com/articleCover/2023/02/16/02016c614e1b25080888593b8cd21bc9.jpg"
                        style={{ height: 120, width: 420 }}
                        className="img-fluid w-25"
                        alt=""
                      />
                      <div className="ms-4 w-75">
                        <div className="panel-title">
                          阿斯顿大学医药学硕士专业
                        </div>
                        <p>
                          通过阿斯顿大学医药学硕士专业，您将获得对您所选领域的全面了解和认识，以及完成一个最终的研究项目所需的研究方法，以及对药物发现过程的概述。你将承担各种必修模块和一个研究项目。...
                        </p>
                        <p>2023-02-17 </p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <img
                        src="https://ukec.mailxpv.com/articleCover/2023/02/16/b16157fdcc47d311e554082b41e27ebf.jpg"
                        style={{ height: 120, width: 420 }}
                        className="img-fluid w-25"
                        alt=""
                      />
                      <div className="ms-4 w-75">
                        <div className="panel-title">
                          伯明翰大学部分专业将截止第三轮申请，抓紧时间申请！
                        </div>
                        <p>伯明翰大学商学院将于3月13日截止第三轮申请。。...</p>
                        <p>2023-02-17 </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="panel" id="three-panel">
                <div className="panel-title">Note on Prerequisites</div>
                <p>
                  We recommend that you complete Learn HTML before learning CSS.
                </p>
              </div>
              <div className="panel" id="four-panel">
                <div className="panel-title">Note on Prerequisites</div>
                <p>
                  We recommend that you complete Learn HTML before learning CSS.
                </p>
              </div>
              <div className="panel" id="five-panel">
                <div className="panel-title">Note on Prerequisites</div>
                <p>
                  We recommend that you complete Learn HTML before learning CSS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="headline2 py-5">
        <div className="container">
          <h4 className="mb-4">
            UKEC英国教育中心的优势 <span>Our Advantages</span>
          </h4>
          <Row>
            <Col
              sm={12}
              lg={2}
              md={4}
              style={{ borderRight: "1px solid white" }}
            >
              <h1 className="text-white">24</h1>
              <h6 className="text-white">UKEC有24年英国院校 深度合作经营</h6>
            </Col>
            <Col
              sm={12}
              lg={2}
              md={4}
              style={{ borderRight: "1px solid white" }}
            >
              <h1 className="text-white">7万</h1>
              <h6 className="text-white">UKEC有7万余名 满意度客户</h6>
            </Col>
            <Col
              sm={12}
              lg={2}
              md={4}
              style={{ borderRight: "1px solid white" }}
            >
              <h1 className="text-white">30万</h1>
              <h6 className="text-white">UKEC院校申请数字</h6>
            </Col>
            <Col
              sm={12}
              lg={2}
              md={4}
              style={{ borderRight: "1px solid white" }}
            >
              <h1 className="text-white">25</h1>
              <h6 className="text-white">UKEC办公室 横跨欧亚大陆</h6>
            </Col>
            <Col
              sm={12}
              lg={2}
              md={4}
              style={{ borderRight: "1px solid white" }}
            >
              <h1 className="text-white">82</h1>
              <h6 className="text-white">
                82余国家/地区的客户使用 我们UKEC的服务{" "}
              </h6>
            </Col>
            <Col
              sm={12}
              lg={2}
              md={4}
              style={{ borderRight: "1px solid white" }}
            >
              <h1 className="text-white">3天</h1>
              <h6 className="text-white">UKEC可3天拿到Offer </h6>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Headline;
