import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Row className="align-items-center">
        <Col style={{ paddingLeft: 0, paddingRight: 1 }} sm={8}>
          <Form.Control
            type="text"
            name="q"
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search Products..."
            className="mr-sm-2 ml-sm-5"
          ></Form.Control>
        </Col>
        <Col style={{ paddingLeft: 1, paddingRight: 0 }} sm={4}>
          <Button type="submit" variant="outline-success" className="p-2">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
