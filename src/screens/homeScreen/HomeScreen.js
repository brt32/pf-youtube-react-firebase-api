import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Video from "../../components/video/Video";
import CategoriesBar from "./../../components/categoriesBar/CategoriesBar";
import { getPopularVideos } from "../../redux/actions/videos.action";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos } = useSelector((state) => state.homeVideos);

  return (
    <Container>
      <CategoriesBar />
      <Row>
        {videos.map((video) => {
          return (
            <Col key={video.id} lg={3} md={4}>
              <Video video={video} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default HomeScreen;
