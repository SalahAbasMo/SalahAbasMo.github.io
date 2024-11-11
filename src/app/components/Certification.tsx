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
        <h6 className={` mb-3 ${styles.line}`}>الشهادات</h6>
      </div>
      <Row className={`d-flex align-items-center`}>
        <Col md={6}>
          <NextImage
            alt="Clean Kitchen"
            src="/asttbc2.png"
            fill={true}
            className={styles.image}
          />
        </Col>
        <Col md={6}>
          <Accordion className="text-start">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                لماذا يجب أن تهتم بالشهادة؟
              </Accordion.Header>
              <Accordion.Body>
                تضمن الشهادة أن فنيي الحماية من الحرائق المسجلين لدينا (RFPT) حاصلون على شهادة ASTTBC. تعد هذه الشهادات ضرورية للامتثال القانوني في المطابخ التجارية. يضمن خبراءنا عمليات التفتيش والاختبار والصيانة التي تلتزم بأعلى المعايير. إن اختيار فنيي الحماية من الحرائق المسجلين لدينا (RFPT) يعني إعطاء الأولوية للسلامة والامتثال القانوني وراحة البال في المطبخ.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                ماذا تضمن شهادة الاعتماد الخاصة بنا؟
              </Accordion.Header>
              <Accordion.Body>
                {`تضمن شهاداتنا أن خبراء RFPT لدينا مدربون على نطاق واسع
على عمليات التفتيش والاختبار والصيانة. هذه الشهادات
ضرورية لامتثال مطبخك التجاري للقانون.
من خلال اختيار المحترفين المعتمدين، فإنك تضمن التعامل مع نظامك بكفاءة. يجلب خبراء RFPT المعتمدون من ASTTBC الخبرة
والالتزام بالمعايير القانونية.`}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                كيف تستفيد من الشهادة؟
              </Accordion.Header>
              <Accordion.Body>
                {` تستفيد من الشهادة من خلال ضمان استيفاء مطبخك التجاري للمتطلبات القانونية. تعمل أجهزة RFPT المعتمدة من ASTTBC على تعزيز السلامة وتقليل المخاطر ومنع المشكلات القانونية. من خلال الاستعانة بمحترفين معتمدين لصيانة أنظمة الحماية من الحرائق في مطبخك، فإنك تحافظ على أعلى معايير الصناعة. ثق بنا للحصول على منشأة محمية ومتوافقة.`}
                <br />
                <br />
                <p className="fw-bolder">
                  كجزء من عملية الاعتماد، تم ختم ASTTBC
                  يتم توفير الملصق للتأكد من أن نظام العادم الخاص بك قد تم إصلاحه.
                  تم فحصها بدقة وتلبية جميع اللوائح اللازمة.
                  الملصق بمثابة دليل على الامتثال ويمنحك الثقة
                  في سلامة ووظائف مطبخك.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Row className={`d-flex justify-content-center px-0`}>
          <Button
            size="lg"
            type="submit"
            className={`my-4 w-50 px-0 ${styles.primaryButton}`}
            onClick={() => scrollToSection('contact')}
          >
            احصل على شهادة لمطبخك
          </Button>
        </Row>
      </Row>
    </Container>
  );
};

export default Certification;
