'use client';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './styles/services.module.css';
import Card from 'react-bootstrap/Card';
import { FaCertificate } from 'react-icons/fa';
import { FaTools } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

interface ServiceProps {
  scrollToSection: (id: string) => void;
}

const Services: React.FunctionComponent<ServiceProps> = ({
  scrollToSection,
}) => {
  return (
    <Container id="services" className={`py-md-5 text-center`}>
      <div className={`${styles.sectionTitle}`}>
        <h6 className={` mb-3 ${styles.line}`}>خدمات</h6>
      </div>
      <h1 className="text-center mb-4">ما نقوم به</h1>
      <Row>
        <Col md={6}>
          <Card className={`text-center p-5 ${styles.card}`} text="white">
            <Container className="d-flex justify-content-center mb-5">
              <FaTools
                className={`${styles.serviceIcon} ${styles.serviceCleaningIcon}`}
                size={100}
              ></FaTools>
            </Container>
            <Card.Title>تنظيف غطاء العادم</Card.Title>
            <Card.Text>
              نحن متخصصون في تقديم خدمات تنظيف شاملة لأنظمة العادم للمطابخ التجارية.
            </Card.Text>
            <Button
              variant="outline-light"
              className={`text-white fw-bolder ${styles.primaryButton}`}
              onClick={() => scrollToSection('exhaust-cleaning')}
            >
              المزيد
            </Button>
            <Button
              variant="outline"
              className={`my-4 text-dark fw-bolder ${styles.ternaryButton}`}
              onClick={() => scrollToSection('contact')}
            >
              تواصل معانا{' '}
              <FaAngleRight className={`${styles.arrowIcon}`}></FaAngleRight>
            </Button>
          </Card>
        </Col>
        <Col md={6} className="mt-4 mt-md-0">
          <Card className={`text-center p-5 ${styles.card}`} text="white">
            <Container className="d-flex justify-content-center mb-5">
              <FaCertificate
                className={` ${styles.serviceIcon} ${styles.serviceCertificationIcon}`}
                size={100}
              ></FaCertificate>
            </Container>
            <Card.Title>تنظيف شامل للمطابخ والفنادق</Card.Title>
            <Card.Text>
              . يمكنك ضمان بيئة نظيفة وآمنة لموظفيك وعملائك.
            </Card.Text>
            <Button
              variant="outline-light"
              className={`text-white fw-bolder ${styles.primaryButton}`}
              onClick={() => scrollToSection('certification')}
            >
              المزيد
            </Button>
            <Button
              variant="outline"
              className={`my-4 text-dark fw-bolder ${styles.ternaryButton}`}
              onClick={() => scrollToSection('contact')}
            >
              تواصل معانا {' '}
              <FaAngleRight className={`${styles.arrowIcon}`}></FaAngleRight>
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
