import { Card } from "react-bootstrap";
import Ingredients from "../Ingredients/Ingredients";
import Title from "../shared/Title/Title";
import {} from './CoffeDetail.scss';

const CoffeeDetail = ({coffee}) => {
    return (
        <Card className="coffee-detail">
            <Card.Header>
                <Title titleText={coffee?.title} />
            </Card.Header>
            <Card.Body>
                {coffee?.description}
            </Card.Body>
            <Card.Footer>
                <Ingredients ingredients={coffee?.ingredients}></Ingredients>
            </Card.Footer>
            {/* <Row>
                <Col>
                    <Title titleText={coffee?.title} />
                </Col>
            </Row>
            <Row>
                <Col>{coffee?.description}</Col>
            </Row>
            <Row>
                <Ingredients ingredients={coffee?.ingredients}></Ingredients>
            </Row> */}
        </Card>
    )
};

export default CoffeeDetail;
