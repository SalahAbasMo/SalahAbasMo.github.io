'use client';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NextImage from 'next/image';
import styles from './page.module.css';
import Contact from './components/Contact';
import ExhaustCleaning from './components/ExhaustCleaning';
import Services from './components/Services';
import Certification from './components/Certification';

export default function Home() {
  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  };

  return (
    <>
      <Container
        id="home"
        className="mt-5 pt-5 pb-2 pb-lg-4 overflow-hidden position-relative"
      >
        <Row className="align-items-center">
          <Col
            md={6}
            className={`rounded-end mt-4 mt-md-0 ${styles.headerContent}`}
          >
            <h1 className={` mb-4 ${styles.gradientText}`}>
              Cairo Hotel Services
            </h1>
            <h1 className={` mb-4 ${styles.gradientText}`}>
              القاهرة لخدمات تنظيف هود المطاعم والفنادق
            </h1>
            <h1 className={` mb-4 ${styles.gradientText}`}>
              خدمة نظيفة معتمدة من قبل خبراء.
            </h1>
            <p className="fw-bold">
              تمتع بأعلى معايير الأمان والامتثال مع حلول التنظيف المعتمدة لدينا، لتشغيل مطبخك بكفاءة وأداء مثالي.
            </p>
            <Button
              className={`rounded-5 mt-4 ${styles.primaryButton}`}
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              احصل على عرض أسعار مجاني
            </Button>
          </Col>
          <Col md={6} className="mt-5">
            <div className={styles.circle}></div>
            <div className={` ${styles.bubble} ${styles.bigBubble}`}></div>
            <div className={` ${styles.bubble} ${styles.mediumBubble}`}></div>
            <div className={` ${styles.bubble} ${styles.smallBubble}`}></div>
            <NextImage
              alt="Clean Kitchen"
              src="/pressureWasherCartoon2.png"
              fill={true}
              className={` ${styles.cartoonImage} ${styles.image}`}
            />
          </Col>
        </Row>
      </Container>
      <Services scrollToSection={scrollToSection} />
      <ExhaustCleaning scrollToSection={scrollToSection} />
      <Certification scrollToSection={scrollToSection} />


      <Contact />
    </>
  );
}
