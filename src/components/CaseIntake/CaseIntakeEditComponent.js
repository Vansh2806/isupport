import React, { useState } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { connect } from 'react-redux';
import {
  changeCaseIntakeTabChange,
  changeCaseIntake,
} from '../../actions/caseintakeAction';
import Summary from './Summary';
import { AiOutlineFileText } from 'react-icons/ai';
import { IoMdInformationCircle } from 'react-icons/io';
import { HiUserCircle } from 'react-icons/hi';
import { FaBed, FaPlusSquare } from 'react-icons/fa';
import { MdSick } from 'react-icons/md';
import Styles from './caseIntake.module.css';
import General from './General';
import Patient from './Patient';
import Reporter from './Reporter';
import AdverseEvent from './AdverseEvent';
import Product from './Product';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import MedicationIcon from '@mui/icons-material/Medication';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const CaseIntakeEditComponent = (props) => {
  const { changeCaseIntakeTabChange, caseIntakeTab, changeCaseIntake } = props;

  return (
    <>
      <div className='content'>
        <Row>
          <Col className='text-center' lg='12' md='12'>
            <div class='card'>
              <ArrowBackIcon
                style={{ position: 'relative', left: '10px', top: '10px' }}
                onClick={() => {
                  changeCaseIntake(false);
                }}
              />

              <div class='card-header card-header-rose card-header-icon mb-0'>
                <Row>
                  <Col>
                    <Button
                      color='warning'
                      className={
                        caseIntakeTab == 'general'
                          ? Styles.buttonstyleOnClick
                          : Styles.buttonstyle
                      }
                      onClick={() => {
                        changeCaseIntakeTabChange('general');
                      }}>
                      <Row>
                        <Col>
                          <div
                            style={{
                              padding: '5px',
                              marginBottom: '10px',
                              marginTop: '18px',
                            }}>
                            <IoMdInformationCircle
                              color={
                                caseIntakeTab == 'general' ? 'white' : 'black'
                              }
                              size={30}
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p
                            style={{ fontSize: '11px', marginBottom: '0px' }}
                            className={
                              caseIntakeTab == 'general'
                                ? Styles.whiteText
                                : Styles.blackText
                            }>
                            General
                          </p>
                        </Col>
                      </Row>
                    </Button>
                    <Button
                      className={
                        caseIntakeTab == 'patient'
                          ? Styles.buttonstyleOnClick
                          : Styles.buttonstyle
                      }
                      onClick={() => {
                        changeCaseIntakeTabChange('patient');
                      }}>
                      <Row>
                        <Col>
                          <div
                            style={{
                              padding: '5px',
                              marginBottom: '10px',
                              marginTop: '18px',
                            }}>
                            <FaBed
                              color={
                                caseIntakeTab == 'patient' ? 'white' : 'black'
                              }
                              size={30}
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p
                            style={{ fontSize: '11px', marginBottom: '0px' }}
                            className={
                              caseIntakeTab == 'patient'
                                ? Styles.whiteText
                                : Styles.blackText
                            }>
                            Patient
                          </p>
                        </Col>
                      </Row>
                    </Button>
                    <Button
                      className={
                        caseIntakeTab == 'reporter'
                          ? Styles.buttonstyleOnClick
                          : Styles.buttonstyle
                      }
                      onClick={() => {
                        changeCaseIntakeTabChange('reporter');
                      }}>
                      <Row>
                        <Col>
                          <div
                            style={{
                              padding: '5px',
                              marginBottom: '10px',
                              marginTop: '18px',
                            }}>
                            {caseIntakeTab == 'reporter' ? (
                              <PersonPinIcon
                                style={{ color: 'white' }}
                                fontSize='large'
                              />
                            ) : (
                              <PersonPinIcon
                                style={{ color: 'black' }}
                                fontSize='large'
                              />
                            )}

                            {/* <PersonPinIcon fontSize='large' /> */}
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p
                            style={{ fontSize: '11px', marginBottom: '0px' }}
                            className={
                              caseIntakeTab == 'reporter'
                                ? Styles.whiteText
                                : Styles.blackText
                            }>
                            Reporter
                          </p>
                        </Col>
                      </Row>
                    </Button>
                    <Button
                      className={
                        caseIntakeTab == 'product'
                          ? Styles.buttonstyleOnClick
                          : Styles.buttonstyle
                      }
                      onClick={() => {
                        changeCaseIntakeTabChange('product');
                      }}>
                      <Row>
                        <Col>
                          <div
                            style={{
                              padding: '5px',
                              marginBottom: '10px',
                              marginTop: '18px',
                            }}>
                            {caseIntakeTab == 'product' ? (
                              <MedicationIcon
                                style={{ color: 'white' }}
                                fontSize='large'
                              />
                            ) : (
                              <MedicationIcon
                                style={{ color: 'black' }}
                                fontSize='large'
                              />
                            )}
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p
                            style={{ fontSize: '11px', marginBottom: '0px' }}
                            className={
                              caseIntakeTab == 'product'
                                ? Styles.whiteText
                                : Styles.blackText
                            }>
                            Product
                          </p>
                        </Col>
                      </Row>
                    </Button>

                    <Button
                      className={
                        caseIntakeTab == 'adverse event'
                          ? Styles.buttonstyleOnClick
                          : Styles.buttonstyle
                      }
                      onClick={() => {
                        changeCaseIntakeTabChange('adverse event');
                      }}>
                      <Row>
                        <Col>
                          <div
                            style={{
                              padding: '5px',
                              marginBottom: '10px',
                              marginTop: '18px',
                            }}>
                            <MdSick
                              color={
                                caseIntakeTab == 'adverse event'
                                  ? 'white'
                                  : 'black'
                              }
                              size={30}
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p
                            style={{ fontSize: '11px', marginBottom: '0px' }}
                            className={
                              caseIntakeTab == 'adverse event'
                                ? Styles.whiteText
                                : Styles.blackText
                            }>
                            Adverse Event
                          </p>
                        </Col>
                      </Row>
                    </Button>
                    <Button
                      className={
                        caseIntakeTab == 'summary'
                          ? Styles.buttonstyleOnClick
                          : Styles.buttonstyle
                      }
                      onClick={() => {
                        changeCaseIntakeTabChange('summary');
                      }}>
                      <Row>
                        <Col>
                          <div
                            style={{
                              padding: '5px',
                              marginBottom: '10px',
                              marginTop: '18px',
                            }}>
                            {caseIntakeTab == 'summary' ? (
                              <SummarizeIcon
                                style={{ color: 'white' }}
                                fontSize='large'
                              />
                            ) : (
                              <SummarizeIcon
                                style={{ color: 'black' }}
                                fontSize='large'
                              />
                            )}
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p
                            style={{ fontSize: '11px', marginBottom: '0px' }}
                            className={
                              caseIntakeTab == 'summary'
                                ? Styles.whiteText
                                : Styles.blackText
                            }>
                            Summary
                          </p>
                        </Col>
                      </Row>
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col className='text-left'>
                    <div class='card'>
                      <div class='card-header card-header-rose card-header-icon mb-0'>
                        {caseIntakeTab == 'general' ? (
                          <General />
                        ) : caseIntakeTab == 'summary' ? (
                          <Summary />
                        ) : caseIntakeTab == 'patient' ? (
                          <Patient />
                        ) : caseIntakeTab == 'reporter' ? (
                          <Reporter />
                        ) : caseIntakeTab == 'adverse event' ? (
                          <AdverseEvent />
                        ) : caseIntakeTab == 'product' ? (
                          <Product />
                        ) : null}
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  caseIntakeTab: state.caseIntake.caseIntakeTab,
});
export default connect(mapStateToProps, {
  changeCaseIntakeTabChange,
  changeCaseIntake,
})(CaseIntakeEditComponent);
