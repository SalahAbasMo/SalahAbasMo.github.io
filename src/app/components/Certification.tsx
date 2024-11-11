'use client';
import React from 'react';
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap';
import styles from './styles/certification.module.css';
import NextImage from 'next/image';

interface scrollProps {
  scrollToSection: (id: string) => void;
}

const Certification: React.FunctionComponent<scrollProps> = ({
  scrollToSection,
}) => {
  return (
    <Container id="certification" className="text-center">
      <div className={` ${styles.sectionTitle}`}>
        <h6 className={` mb-3 ${styles.line}`}></h6>
      </div>
      <Row className={`d-flex align-items-center mb-5`}>
        <h1 className={` mb-4 ${styles.gradientText}`}>
          Cairo Hotel Services
        </h1>
        <Col className={`mb-5`} md={12}>
          <h6 className={`mb-5`}>
            نحن نقدم خدمات تنظيف متكاملة للمطابخ والفنادق تهدف إلى تحقيق أعلى مستويات النظافة والكفاءة. يتميز فريقنا من الفنيين المدربين بتطبيق أحدث تقنيات التنظيف لإزالة الشحوم والأوساخ العنيدة التي تتراكم على مر الزمن، مما يسهم في تحسين جودة الهواء وتقليل المخاطر المحتملة على الصحة والسلامة. من تنظيف عوادم المطابخ وأنظمة التهوية إلى تعقيم الأسطح والأجهزة، نضمن لك بيئة نظيفة وصحية تلبي المعايير الصارمة للمطابخ التجارية والفنادق. دع فريقنا من الخبراء يهتم بجميع تفاصيل النظافة، لتحصل على بيئة آمنة وملائمة للعمل والضيافة."
          </h6>
        </Col>

      </Row>
    </Container>
  );
};

export default Certification;
