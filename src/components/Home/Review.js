import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Review = () => {
  return (
    <div style={{ background: "#E6E6E6" }}>
      <Container>
        <Splide
          options={{
            // type: "loop",
            drag: "free",
            focus: "center",
            gap: "2rem",
            perPage: 1,
            height: "38rem",
            arrows: "false",
            breakpoints: {
              1200: { arrows: false, perPage: 1 },
              800: { arrows: false, perPage: 2 },
              640: { arrows: false, perPage: 1 },
            },
          }}
          // extensions={{ AutoScroll }}
        >
          <SplideSlide>
            <Row>
              <Col sm={12} lg={8} md={8}>
                <div className="d-flex justify-content-center align-content-center">
                  <div>
                    <div className="d-flex" style={{ marginTop: 220 }}>
                      <img
                        src="/assets/Logo/png-transparent-quotation-mark-apostrophe-computer-icons-quotation-text-number-sign-removebg-preview.png"
                        alt=""
                        className="img-fluid"
                        style={{ width: 80, height: 60 }}
                      />
                      <p>
                        感谢徐老师和Brenda老师在我申请之路上的支持与帮助，致以最诚挚的感激！2020年年底，我初次和徐老师见面沟通，对于申请规划一拍即合。在最关键的选校定位时期，徐老师给予了我许多中肯的建议，小到专业选择，大到职业规划，都对我倾囊而谈，至今仍然非常受用。进入到网申和后期阶段，Brenda老师的耐心和细心抚平了我所有的焦虑，让我能够安心投身毕业论文和实习。她的专业、敬业和爱业精神会成为我前行路上不竭的动力。和UKEC的合作看似结束了，但是我相信这将会成为我生命旅程中非常宝贵的一段经历，长远地影响着我的未来。我愿意以优异的研究生成绩和丰富的留学经历来回馈二位老师真诚的帮助，再次感谢！
                      </p>
                      <img
                        src="/assets/Logo/png-transparent-quotation-mark-font-awesome-computer-icons-right-to-quote-double-quotes-text-logo-sign-removebg-preview.png"
                        alt=""
                        className="img-fluid"
                        style={{ width: 80, height: 60 }}
                      />
                    </div>
                    <div>
                      <div className="d-flex">
                        <img
                          src="https://ukec.mailxpv.com/commentImage/2021/10/26/be17ad57ee6da9cd16addad53612cb8b.png"
                          alt=""
                          style={{ width: 120, borderRadius: "50%" }}
                        />
                        <div className="ms-3 mt-4">
                          <h6>夏同学</h6>
                          <p>
                            申请专业：<span>知识产权法</span>
                          </p>
                          <p>
                            毕业院校：<span>知识产权法</span>
                          </p>
                          <p>
                            已拿Offer：
                            <span>Queen Mary, University of London </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={12} lg={4} md={4}>
                <img
                  src="https://ukec.mailxpv.com/commentLetter/2019/01/18/0c20ae5f29cace0a3d692aa9b8167ee8.jpg"
                  alt=""
                />
              </Col>
            </Row>
          </SplideSlide>
          <SplideSlide>
            <Row>
              <Col sm={12} lg={8} md={8}>
                <div className="d-flex justify-content-center align-content-center">
                  <div>
                    <div className="d-flex" style={{ marginTop: 220 }}>
                      <img
                        src="/assets/Logo/png-transparent-quotation-mark-apostrophe-computer-icons-quotation-text-number-sign-removebg-preview.png"
                        alt=""
                        className="img-fluid"
                        style={{ width: 80, height: 60 }}
                      />
                      <p>
                        感谢徐老师和Brenda老师在我申请之路上的支持与帮助，致以最诚挚的感激！2020年年底，我初次和徐老师见面沟通，对于申请规划一拍即合。在最关键的选校定位时期，徐老师给予了我许多中肯的建议，小到专业选择，大到职业规划，都对我倾囊而谈，至今仍然非常受用。进入到网申和后期阶段，Brenda老师的耐心和细心抚平了我所有的焦虑，让我能够安心投身毕业论文和实习。她的专业、敬业和爱业精神会成为我前行路上不竭的动力。和UKEC的合作看似结束了，但是我相信这将会成为我生命旅程中非常宝贵的一段经历，长远地影响着我的未来。我愿意以优异的研究生成绩和丰富的留学经历来回馈二位老师真诚的帮助，再次感谢！
                      </p>
                      <img
                        src="/assets/Logo/png-transparent-quotation-mark-font-awesome-computer-icons-right-to-quote-double-quotes-text-logo-sign-removebg-preview.png"
                        alt=""
                        className="img-fluid"
                        style={{ width: 80, height: 60 }}
                      />
                    </div>
                    <div>
                      <div className="d-flex">
                        <img
                          src="https://ukec.mailxpv.com/commentImage/2021/10/26/be17ad57ee6da9cd16addad53612cb8b.png"
                          alt=""
                          style={{ width: 120, borderRadius: "50%" }}
                        />
                        <div className="ms-3 mt-4">
                          <h6>夏同学</h6>
                          <p>
                            申请专业：<span>知识产权法</span>
                          </p>
                          <p>
                            毕业院校：<span>知识产权法</span>
                          </p>
                          <p>
                            已拿Offer：
                            <span>Queen Mary, University of London </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={12} lg={4} md={4}>
                <img
                  src="https://ukec.mailxpv.com/commentLetter/2019/01/18/0c20ae5f29cace0a3d692aa9b8167ee8.jpg"
                  alt=""
                />
              </Col>
            </Row>
          </SplideSlide>
          <SplideSlide>
            <Row>
              <Col sm={12} lg={8} md={8}>
                <div className="d-flex justify-content-center align-content-center">
                  <div>
                    <div className="d-flex" style={{ marginTop: 220 }}>
                      <img
                        src="/assets/Logo/png-transparent-quotation-mark-apostrophe-computer-icons-quotation-text-number-sign-removebg-preview.png"
                        alt=""
                        className="img-fluid"
                        style={{ width: 80, height: 60 }}
                      />
                      <p>
                        感谢徐老师和Brenda老师在我申请之路上的支持与帮助，致以最诚挚的感激！2020年年底，我初次和徐老师见面沟通，对于申请规划一拍即合。在最关键的选校定位时期，徐老师给予了我许多中肯的建议，小到专业选择，大到职业规划，都对我倾囊而谈，至今仍然非常受用。进入到网申和后期阶段，Brenda老师的耐心和细心抚平了我所有的焦虑，让我能够安心投身毕业论文和实习。她的专业、敬业和爱业精神会成为我前行路上不竭的动力。和UKEC的合作看似结束了，但是我相信这将会成为我生命旅程中非常宝贵的一段经历，长远地影响着我的未来。我愿意以优异的研究生成绩和丰富的留学经历来回馈二位老师真诚的帮助，再次感谢！
                      </p>
                      <img
                        src="/assets/Logo/png-transparent-quotation-mark-font-awesome-computer-icons-right-to-quote-double-quotes-text-logo-sign-removebg-preview.png"
                        alt=""
                        className="img-fluid"
                        style={{ width: 80, height: 60 }}
                      />
                    </div>
                    <div>
                      <div className="d-flex">
                        <img
                          src="https://ukec.mailxpv.com/commentImage/2021/10/26/be17ad57ee6da9cd16addad53612cb8b.png"
                          alt=""
                          style={{ width: 120, borderRadius: "50%" }}
                        />
                        <div className="ms-3 mt-4">
                          <h6>夏同学</h6>
                          <p>
                            申请专业：<span>知识产权法</span>
                          </p>
                          <p>
                            毕业院校：<span>知识产权法</span>
                          </p>
                          <p>
                            已拿Offer：
                            <span>Queen Mary, University of London </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={12} lg={4} md={4}>
                <img
                  src="https://ukec.mailxpv.com/commentLetter/2019/01/18/0c20ae5f29cace0a3d692aa9b8167ee8.jpg"
                  alt=""
                />
              </Col>
            </Row>
          </SplideSlide>
          <SplideSlide>
            <Row>
              <Col sm={12} lg={8} md={8}>
                <div className="d-flex justify-content-center align-content-center">
                  <div>
                    <div className="d-flex" style={{ marginTop: 220 }}>
                      <img
                        src="/assets/Logo/png-transparent-quotation-mark-apostrophe-computer-icons-quotation-text-number-sign-removebg-preview.png"
                        alt=""
                        className="img-fluid"
                        style={{ width: 80, height: 60 }}
                      />
                      <p>
                        感谢徐老师和Brenda老师在我申请之路上的支持与帮助，致以最诚挚的感激！2020年年底，我初次和徐老师见面沟通，对于申请规划一拍即合。在最关键的选校定位时期，徐老师给予了我许多中肯的建议，小到专业选择，大到职业规划，都对我倾囊而谈，至今仍然非常受用。进入到网申和后期阶段，Brenda老师的耐心和细心抚平了我所有的焦虑，让我能够安心投身毕业论文和实习。她的专业、敬业和爱业精神会成为我前行路上不竭的动力。和UKEC的合作看似结束了，但是我相信这将会成为我生命旅程中非常宝贵的一段经历，长远地影响着我的未来。我愿意以优异的研究生成绩和丰富的留学经历来回馈二位老师真诚的帮助，再次感谢！
                      </p>
                      <img
                        src="/assets/Logo/png-transparent-quotation-mark-font-awesome-computer-icons-right-to-quote-double-quotes-text-logo-sign-removebg-preview.png"
                        alt=""
                        className="img-fluid"
                        style={{ width: 80, height: 60 }}
                      />
                    </div>
                    <div>
                      <div className="d-flex">
                        <img
                          src="https://ukec.mailxpv.com/commentImage/2021/10/26/be17ad57ee6da9cd16addad53612cb8b.png"
                          alt=""
                          style={{ width: 120, borderRadius: "50%" }}
                        />
                        <div className="ms-3 mt-4">
                          <h6>夏同学</h6>
                          <p>
                            申请专业：<span>知识产权法</span>
                          </p>
                          <p>
                            毕业院校：<span>知识产权法</span>
                          </p>
                          <p>
                            已拿Offer：
                            <span>Queen Mary, University of London </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={12} lg={4} md={4}>
                <img
                  src="https://ukec.mailxpv.com/commentLetter/2019/01/18/0c20ae5f29cace0a3d692aa9b8167ee8.jpg"
                  alt=""
                />
              </Col>
            </Row>
          </SplideSlide>
          <SplideSlide>
            <Row>
              <Col sm={12} lg={8} md={8}>
                <div className="d-flex justify-content-center align-content-center">
                  <div>
                    <div className="d-flex" style={{ marginTop: 220 }}>
                      <img
                        src="/assets/Logo/png-transparent-quotation-mark-apostrophe-computer-icons-quotation-text-number-sign-removebg-preview.png"
                        alt=""
                        className="img-fluid"
                        style={{ width: 80, height: 60 }}
                      />
                      <p>
                        感谢徐老师和Brenda老师在我申请之路上的支持与帮助，致以最诚挚的感激！2020年年底，我初次和徐老师见面沟通，对于申请规划一拍即合。在最关键的选校定位时期，徐老师给予了我许多中肯的建议，小到专业选择，大到职业规划，都对我倾囊而谈，至今仍然非常受用。进入到网申和后期阶段，Brenda老师的耐心和细心抚平了我所有的焦虑，让我能够安心投身毕业论文和实习。她的专业、敬业和爱业精神会成为我前行路上不竭的动力。和UKEC的合作看似结束了，但是我相信这将会成为我生命旅程中非常宝贵的一段经历，长远地影响着我的未来。我愿意以优异的研究生成绩和丰富的留学经历来回馈二位老师真诚的帮助，再次感谢！
                      </p>
                      <img
                        src="/assets/Logo/png-transparent-quotation-mark-font-awesome-computer-icons-right-to-quote-double-quotes-text-logo-sign-removebg-preview.png"
                        alt=""
                        className="img-fluid"
                        style={{ width: 80, height: 60 }}
                      />
                    </div>
                    <div>
                      <div className="d-flex">
                        <img
                          src="https://ukec.mailxpv.com/commentImage/2021/10/26/be17ad57ee6da9cd16addad53612cb8b.png"
                          alt=""
                          style={{ width: 120, borderRadius: "50%" }}
                        />
                        <div className="ms-3 mt-4">
                          <h6>夏同学</h6>
                          <p>
                            申请专业：<span>知识产权法</span>
                          </p>
                          <p>
                            毕业院校：<span>知识产权法</span>
                          </p>
                          <p>
                            已拿Offer：
                            <span>Queen Mary, University of London </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={12} lg={4} md={4}>
                <img
                  src="https://ukec.mailxpv.com/commentLetter/2019/01/18/0c20ae5f29cace0a3d692aa9b8167ee8.jpg"
                  alt=""
                />
              </Col>
            </Row>
          </SplideSlide>
          <SplideSlide>
            <Row>
              <Col sm={12} lg={8} md={8}>
                <div className="d-flex justify-content-center align-content-center">
                  <div>
                    <div className="d-flex" style={{ marginTop: 220 }}>
                      <img
                        src="/assets/Logo/png-transparent-quotation-mark-apostrophe-computer-icons-quotation-text-number-sign-removebg-preview.png"
                        alt=""
                        className="img-fluid"
                        style={{ width: 80, height: 60 }}
                      />
                      <p>
                        感谢徐老师和Brenda老师在我申请之路上的支持与帮助，致以最诚挚的感激！2020年年底，我初次和徐老师见面沟通，对于申请规划一拍即合。在最关键的选校定位时期，徐老师给予了我许多中肯的建议，小到专业选择，大到职业规划，都对我倾囊而谈，至今仍然非常受用。进入到网申和后期阶段，Brenda老师的耐心和细心抚平了我所有的焦虑，让我能够安心投身毕业论文和实习。她的专业、敬业和爱业精神会成为我前行路上不竭的动力。和UKEC的合作看似结束了，但是我相信这将会成为我生命旅程中非常宝贵的一段经历，长远地影响着我的未来。我愿意以优异的研究生成绩和丰富的留学经历来回馈二位老师真诚的帮助，再次感谢！
                      </p>
                      <img
                        src="/assets/Logo/png-transparent-quotation-mark-font-awesome-computer-icons-right-to-quote-double-quotes-text-logo-sign-removebg-preview.png"
                        alt=""
                        className="img-fluid"
                        style={{ width: 80, height: 60 }}
                      />
                    </div>
                    <div>
                      <div className="d-flex">
                        <img
                          src="https://ukec.mailxpv.com/commentImage/2021/10/26/be17ad57ee6da9cd16addad53612cb8b.png"
                          alt=""
                          style={{ width: 120, borderRadius: "50%" }}
                        />
                        <div className="ms-3 mt-4">
                          <h6>夏同学</h6>
                          <p>
                            申请专业：<span>知识产权法</span>
                          </p>
                          <p>
                            毕业院校：<span>知识产权法</span>
                          </p>
                          <p>
                            已拿Offer：
                            <span>Queen Mary, University of London </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={12} lg={4} md={4}>
                <img
                  src="https://ukec.mailxpv.com/commentLetter/2019/01/18/0c20ae5f29cace0a3d692aa9b8167ee8.jpg"
                  alt=""
                />
              </Col>
            </Row>
          </SplideSlide>
        </Splide>
      </Container>
    </div>
  );
};

export default Review;
