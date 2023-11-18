import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

const ProductDetail = () => {
    let { id } = useParams();
    const [product, setProduct] = useState(null);
    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/batang1/noona-hnm/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data);
    };
    useEffect(() => {
        getProductDetail();
    }, []);

    return (
        <Container>
            <Row>
                <Col className="product-img">
                    <img src={product?.img} />
                </Col>
                <Col className="product-des">
                    <div>{product?.title}</div>
                    <div>￦{product?.price}</div>
                    <div className="choice">
                        {product?.choice == true ? "Conscious Choice" : ""}
                    </div>
                    <div className="choice">
                        {product?.new == true ? "신제품" : ""}
                    </div>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            사이즈 선택
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                                S
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                M
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                L
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div><Button className="add-button" variant="dark">추가</Button></div>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;
