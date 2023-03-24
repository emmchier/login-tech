import React from 'react';
import { FCC } from '../../../types';

import { Brand, Col, Heading, Img, Row } from '../../../components';

import {
  Background,
  BannerContainer,
  BannerImage,
  FormContainer,
  Info,
  PanelBody,
  PanelHeader,
  TemplateContent,
} from './TemplateScreenStyles';

interface TemplateScreenProps {
  title: string;
}

export const TemplateScreen: FCC<TemplateScreenProps> = ({ children, title = '' }) => {
  return (
    <TemplateContent>
      <Brand />
      <Row>
        <Col xs={12} sm={12} md={4} lg={3} xlg={3} smOrder={2}>
          <FormContainer>
            <PanelHeader />
            <PanelBody />
            <Info>
              <Heading variant="t1">{title}</Heading>
              {children}
            </Info>
          </FormContainer>
        </Col>
        <Col xs={12} sm={12} md={8} lg={9} xlg={9} smOrder={1}>
          <BannerContainer>
            <BannerImage>
              <Img
                image="/assets/hero.png"
                alt="Picture of the author"
                width="auto"
                height="75vh"
              />
            </BannerImage>
            <Background />
          </BannerContainer>
        </Col>
      </Row>
    </TemplateContent>
  );
};
