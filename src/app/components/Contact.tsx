'use client';
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Toast } from 'react-bootstrap';
import { ToastContainer } from 'react-bootstrap';
import styles from './styles/contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
    } else {
      const params = {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        details: details,
      };

      try {
        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          body: JSON.stringify(params),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          // Email sent successfully
          setShow(true);
        } else {
          // Handle error
        }
      } catch (error) {
        // Handle error
      }
    }
    setValidated(true);
  };

  return (
    <Container id="contact" className="text-center">
      <div className={`mt-md-0 mt-5 ${styles.sectionTitle}`}>
        <h6 className={` mb-3 ${styles.line}`}>تواصل معانا</h6>
      </div>
      <Row>
        <Col
          md={12}
          className=" d-flex justify-content-center align-items-center flex-column p-4"
        >
          <h1> احصل على عرض أسعار مجاني اليوم</h1>
          <p className="my-3 text-secondary fw-bolder">
            اختيار خالٍ من المخاطر: تقدير مجاني، أسعار تنافسية، اتخاذ القرار بثقة
          </p>
        </Col>
        <Row className="mx-0">
          <Col md={4} className={`${styles.contactInfo}`}>
            <Container className={`pb-2 pt-2 mb-5 ${styles.contactInfoItem}`}>
              <div className={`mt-4 ${styles.icon}`}>
                <FaPhoneAlt size={20} className={` ${styles.iconColor}`} />
              </div>
              <h3 className="mt-4 ms-5 ps-4 text-start">اتصل بنا</h3>
              <h4 className="ms-5 ps-4 text-start">01040150071</h4>
              <h4 className="ms-5 ps-4 text-start">022-4158744</h4>

            </Container>

            <Container className={`pb-5 pt-2 mb-5 ${styles.contactInfoItem}`}>
              <div className={`mt-4 ${styles.icon}`}>
                <FaEnvelope size={20} className={` ${styles.iconColor}`} />
              </div>
              <h3 className="mt-4 ms-5 ps-4 text-start">راسلنا عبر البريد الإلكتروني</h3>
              <h4 className="ms-5 ps-4 text-start text-break">
                cairohotelservices@gmail.com
              </h4>
            </Container>
          </Col>
          <Col md={8} className="fw-medium">
            <Form
              id="clientForm"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <FloatingLabel
                controlId="floatingName"
                label="الأسم"
                className="mb-3"
              >
                <Form.Control
                  required
                  type="text"
                  value={name}
                  placeholder="الأسم"
                  className={`rounded-4`}
                  onChange={(e) => setName(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  يرجى تقديم الاسم.
                </Form.Control.Feedback>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="البريد الألكتروني"
                className="mb-3"
              >
                <Form.Control
                  required
                  type="email"
                  placeholder="name@example.com"
                  className={`rounded-4`}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  يرجى تقديم بريد إلكتروني صالح.
                </Form.Control.Feedback>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInputPhone"
                label="رقم الهاتف"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="****-***-***"
                  className={`rounded-4`}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  يرجى تقديم البريد الإلكتروني.
                </Form.Control.Feedback>
              </FloatingLabel>
              <FloatingLabel controlId="floatingTextArea" label="التفاصيل">
                <Form.Control
                  as="textarea"
                  type="textarea"
                  placeholder="التفاصيل"
                  className={`rounded-4 ${styles.textArea}`}
                  onChange={(e) => setDetails(e.target.value)}
                />
              </FloatingLabel>
              <Button
                size="lg"
                type="submit"
                className={`my-4 ${styles.primaryButton}`}
              >
                احصل على عرض الأسعار الخاص بك
              </Button>
            </Form>
          </Col>
        </Row>
      </Row>
      <ToastContainer className="p-3 position-fixed" position="bottom-end">
        <Toast bg="success" onClose={() => setShow(false)} show={show} autohide>
          <Toast.Header className="d-flex justify-content-end text-dark fw-bolder">
            تم إرسال الرسالة بنجاح.
          </Toast.Header>
          <Toast.Body className="text-white">
            {"سوف نعود إليك في أقرب وقت ممكن!"}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
};

export default Contact;
