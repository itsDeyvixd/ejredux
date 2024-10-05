//import { Link } from "react-router-dom";
import { Col, Container, Row, Image, Dropdown, Carousel } from "react-bootstrap";
import perrito from "../imagenes/perrito.png";
import astra from "../imagenes/astra.jpg"; // Assuming the image is named 'astra.jpg'

function Pag1() {
    return (
        <>
            <h1>Hola estoy en la página-1</h1>

            <p className="text-warning">Este es un párrafo</p>

            <Carousel>
                <Carousel.Item>
                    <Image src={astra} alt="First slide" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={astra} alt="Second slide" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={astra} alt="Third slide" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Header>Rick and morty</Dropdown.Header>
                    <Dropdown.Item href="/App">App</Dropdown.Item>
                    <Dropdown.Item href="/C1">Comp1</Dropdown.Item>
                    <Dropdown.Item href="/P2">Pagina 2</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Container fluid class="">
                <Row border-dark class>
                    <Col className="border border-dark p-3 mb-2 bg-primary text-white">
                        col-1de3
                    </Col>
                    <Col
                        className="border border-dark p-3 mb-2 bg-primary text-white"
                        xs={8}
                        sm={2}
                        md={5}
                    >
                        {" "}
                        col-2de3{" "}
                    </Col>
                    <Col
                        className="border border-dark p-3 mb-2 bg-primary text-white"
                        md={{ offset: 1 }}
                    >
                        col=3de3
                    </Col>
                </Row>

                <Row>
                    <Col className="p-3 mb-2 bg-primary text-white border border-dark">
                        {" "}
                        col=1de3
                    </Col>
                    <Col
                        className="border border-dark p-3 mb-2 bg-primary text-white"
                        xs={2}
                    >
                        col=2de3
                    </Col>
                    <Col className="border border-dark d-none d-md-block p-3 mb-2 bg-primary text-white">
                        col=3de3
                    </Col>
                </Row>

                <Row>
                    <Col className="border border-dark p-3 mb-2 bg-primary text-white">
                        {" "}
                        col=111
                    </Col>
                    <Col className="border border-dark p-3 mb-2 bg-primary text-white">
                        <Row>
                            <Col className="border border-dark p-3 mb-2 bg-primary text-white">
                                columna
                            </Col>
                        </Row>
                        <Row>
                            <Col className="border border-dark p-3 mb-2 bg-primary text-white">
                                colunna=2
                            </Col>
                        </Row>
                    </Col>
                    <Col className="border border-dark p-3 mb-2 bg-primary text-white">
                        col=333
                    </Col>
                </Row>
            </Container>

            <Image src={perrito} roundedCircle fluid alt="perrito2" />
        </>
    );
}

export default Pag1;
