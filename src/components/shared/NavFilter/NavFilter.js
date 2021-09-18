import { Col, Container, Nav, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { useCoffee } from "../../../contexts/CoffeeContext";
import { capitalize } from "../../../utils/util";
import Input from "../Input/Input";
import {} from './NavFilter.scss'

const NavFilter = () => {
    const {filterCoffees, categories} = useCoffee();
    const {category} = useParams()

    return ( 
        <Container className="nav-filter">
            <Row>
                <Col>
                    <Input id="coffee-filter-input" placeholder="Search" onChange={(e) => filterCoffees(e.target.value)}></Input>
                </Col>
            </Row>
            <Row className="nav-links">
                <Col>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Link active={!category} href="/">All Coffees</Nav.Link>
                        {categories.map(ctg => (
                            <Nav.Link key={`nav-links-${ctg}`} active={category === ctg} href={`/${ctg}`}>{capitalize(ctg)}</Nav.Link>
                        ))}
                    </Nav>
                </Col>
            </Row>
        </Container>
    );
}

export default NavFilter;