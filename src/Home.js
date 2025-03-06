import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
function Home() {
    return (
        <Container fluid className="p-0">
            {/* Hero Section */}
            <div className="bg-dark text-white text-center py-5">
                <h1 className="display-4">Welcome to Yours Bank</h1>
                <p className="lead">Your trusted partner in secure and innovative banking.</p>
                {/* <Button variant="primary" href="#/register" className="mt-3">Open an Account</Button> */}
            </div>

            {/* Features Section */}
            <Container className="my-5">
                <h2 className="text-center mb-4">Why Choose Us?</h2>
                <Row>
                    <Col md={4} className="text-center">
                        <i className="fas fa-shield-alt fa-3x text-primary mb-3"></i>
                        <h5>Secure Transactions</h5>
                        <p>We prioritize security to keep your money and data safe.</p>
                    </Col>
                    <Col md={4} className="text-center">
                        <i className="fas fa-bolt fa-3x text-warning mb-3"></i>
                        <h5>Fast & Reliable</h5>
                        <p>Instant deposits and withdrawals with zero downtime.</p>
                    </Col>
                    <Col md={4} className="text-center">
                        <i className="fas fa-gift fa-3x text-success mb-3"></i>
                        <h5>Cashback Rewards</h5>
                        <p>Enjoy exclusive cashback offers on every transaction.</p>
                    </Col>
                </Row>
            </Container>

            {/* Testimonials Section */}
            <Container className="my-5">
                <h2 className="text-center mb-4">What Our Customers Say</h2>
                <Row>
                    <Col md={6}>
                        <Card className="p-3 shadow">
                            <Card.Body>
                                <Card.Text>"Yours Bank has completely transformed the way I manage my finances. The experience is seamless and super secure!"</Card.Text>
                                <Card.Footer className="text-end">- Emily R.</Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="p-3 shadow">
                            <Card.Body>
                                <Card.Text>"Fast deposits, easy withdrawals, and amazing cashback offers. Best banking experience ever!"</Card.Text>
                                <Card.Footer className="text-end">- John D.</Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
        
    );
}


export default Home;
