import storeItems from "../data/items.json";
import { Col, Row, Container } from "react-bootstrap";
import StoreItem from "../components/Storeitem";

const Store = () => {
  return (
    <Container className="mb-4">
      <h1>store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Store;
