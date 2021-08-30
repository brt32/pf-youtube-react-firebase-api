import React from "react";

import "./_videoHorizontal.scss";

import { AiFillEye } from "react-icons/ai";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Col, Row } from "react-bootstrap";

const VideoHorizontal = () => {
  const seconds = moment.duration("100").asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  return (
    <Row className="video-horizontal m-1 py-2 align-items-center">
      <Col xs={6} md={4} className="videoHorizontal__left">
        <LazyLoadImage
          src="https://www.pinclipart.com/picdir/big/499-4992513_avatar-avatar-png-clipart.png"
          effect="blur"
          className="videoHorizontal__thumbnail"
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        <span className="video__top__duration">{_duration}</span>
      </Col>
      <Col xs={6} md={8} className="videoHorizontal__right p-0">
        <p className="videoHorizontal__title mb-1">
          Be a full stack developer in 1 month
        </p>
        <div className="videoHorizontal__details">
          <AiFillEye /> {numeral(100000).format("0.a")} Views •
          {moment("2020-03-04").fromNow()}
        </div>
        <div className="videoHorizontal__channel d-flex align-items-center my-1">
          {/* <LazyLoadImage
            src="https://www.pinclipart.com/picdir/big/499-4992513_avatar-avatar-png-clipart.png"
            effect="blur"
          /> */}
          <p>Backbench Coder</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
