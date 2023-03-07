import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer_main">
      <div className="container">
        <Row>
          <Col sm={12} lg={6} md={5}>
            <div className="footer">
              <ul className="d-flex">
                <li>
                  <a href="">关于UKEC</a>
                </li>
                <li>
                  <a href="">选择UKEC</a>
                </li>
                <li>
                  <a href="">UKEC服务</a>
                </li>
                <li>
                  <a href="">UKEC活动</a>
                </li>
                <li>
                  <a href="">UKEC资讯</a>
                </li>
                <li>
                  <a href="">UKEC商务合作</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={12} lg={6} md={5}>
            <div className="footer">
              <div>
                <a href="" className="text-right">
                  关注我们
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <hr />
        <div className="fw-semibold text-center mt-5">
          <p>
            Copyright © 2023 www.ukec.com All Rights Reserved
            UKEC英国教育中心.版权所有
          </p>
          <p>
            The UKEC logo is a registered trademark of United Kingdom Education
            Centre. 蜀ICP备20015637号-1
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
