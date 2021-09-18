import { Col, Container, Image, Row } from "react-bootstrap";
import NavFilter from "../NavFilter/NavFilter";
import {} from './Layout.scss';

const Layout = ({ children }) => {
    return (
        <Container fluid className="layout-container">
            <Row>

                <Col className="nav-container" xs={12} md={3}>
                    <NavFilter />
                </Col>

                <Col className="content-container" xs={12} md={9}>
                    {children}
                </Col>

            </Row>
        </Container>
    );
}

export default Layout;