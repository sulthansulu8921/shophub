'use client';

import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert, Image } from 'react-bootstrap';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);

    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div
      style={{
        backgroundColor: '#f2f5f9',
        minHeight: '100vh',
        paddingTop: '50px',
        paddingBottom: '60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >

      {/* Hero Section */}
      <Container className="text-center mb-5">
        <Image
          src="https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Contact Us Banner"
          fluid
          style={{
            width: '100%',
            maxHeight: '340px',
            objectFit: 'cover',
            borderRadius: '16px',
            marginBottom: '30px',
            boxShadow: '0 5px 18px rgba(0, 0, 0, 0.15)'
          }}
        />
        <h1 style={{ fontWeight: '800', color: '#1e3a8a' }}>Get in Touch</h1>
        <p style={{ fontSize: '18px', color: '#374151' }}>
          Have questions or feedback? We’d love to hear from you.
        </p>
      </Container>

      <Container>
        <Row>
          {/* Contact Form */}
          <Col lg={8} className="mb-4">
            <Card
              style={{
                border: 'none',
                borderRadius: '14px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#11acffff',
                color: 'black',
                fontWeight: 'bold',
                display: 'flex',
                 alignItems: 'center',
                  justifyContent: 'center'
              }}
            >
              <Card.Body style={{ padding: '35px' }}>
                <h3
                  className="mb-4"
                  style={{ color: '#1e3a8a', fontWeight: '700', letterSpacing: '0.3px' }}
                >
                  📩 Send Us a Message
                </h3>

                {submitted && (
                  <Alert variant="success" dismissible>
                    ✅ Thank you! We’ve received your message.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label style={{ fontWeight: '600' }}>Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          style={{ borderRadius: '8px', borderColor: '#c7d2fe' }}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label style={{ fontWeight: '600' }}>Email *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          style={{ borderRadius: '8px', borderColor: '#00ffeaff' }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label style={{ fontWeight: '600' }}>Subject *</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                      style={{ borderRadius: '8px', borderColor: '#2ccd0cff' }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label style={{ fontWeight: '600' }}>Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message..."
                      required
                      style={{ borderRadius: '8px', borderColor: '#c7d2fe' }}
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    size="lg"
                    style={{
                      backgroundColor: '#1e3a8a',
                      border: 'none',
                      borderRadius: '10px',
                      padding: '10px 30px',
                      fontWeight: '600'
                    }}
                  >
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Info */}
          <Col lg={4}>
            {[
              {
                title: '📍 Address',
                content: `123 Commerce Street\nSuite 456\nNew York, NY 10001\nUnited States`
              },
              {
                title: '📞 Phone',
                content: `Customer Service: +1 (234) 567-8900\nToll-Free: 1-800-ESHOP-24\nMon-Fri: 9:00 AM - 6:00 PM`
              },
              {
                title: '📧 Email',
                content: `info@eshop.com\nsupport@eshop.com\nsales@eshop.com`
              }
            ].map((info, index) => (
              <Card
                key={index}
                className="mb-4"
                style={{
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
                  backgroundColor: '#ffffff'
                }}
              >
                <Card.Body>
                  <h5 style={{ color: '#1e3a8a', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{info.title}</h5>
                  <p style={{ whiteSpace: 'pre-line', color: '#0056e1ff', marginBottom: '0' ,display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    {info.content}
                  </p>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>

        {/* FAQ Section */}
        <Row className="mt-5">
          <Col>
            <Card
              style={{
                border: 'none',
                borderRadius: '14px',
                textAlign: 'center',
                backgroundColor: '#e0e7ff',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
              }}
            >
              <Card.Body className="py-5">
                <h3 style={{ color: '#1e3a8a', fontWeight: '700' }}>🧾 Frequently Asked Questions</h3>
                <p style={{ color: '#374151', maxWidth: '600px', margin: '10px auto 30px' }}>
                  Find answers about shipping, returns, payments, and more.
                </p>
                <Button
                  variant="primary"
                  style={{
                    backgroundColor: '#1e3a8a',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 25px'
                  }}
                >
                  Visit FAQ
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    
  );
}
