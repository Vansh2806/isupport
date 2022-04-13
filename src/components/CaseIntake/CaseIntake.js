/*!

=========================================================
* Paper Dashboard PRO React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect } from 'react';

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardText,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { connect } from 'react-redux';
import {
  changeCaseIntake,
  caseIntakeFrontPage,
} from '../../actions/caseintakeAction';
import CaseIntakeEditComponent from './CaseIntakeEditComponent';
import General from '../forms/General';

const CaseIntake = (props) => {
  const { caseIntakeEdit, changeCaseIntake, caseIntakeFrontPage } = props;

  useEffect(() => {
    caseIntakeFrontPage();
  }, []);
  const [addCircle, changeAddCircle] = useState(false);
  return (
    <>
      <div className='content'>
        <Row>
          {addCircle == true ? (
            <Col lg='12' md='12'>
              <div class='card'>
                <div class='card-header card-header-rose card-header-icon mb-0'>
                  <div class='card-icon'>
                    <i class='material-icons'>create</i>
                  </div>
                  <h3 class='card-title'>Initiate New Case</h3>
                </div>
                <div class='td-actions text-right'>
                  <button type='button' rel='tooltip' class='btn btn-rose'>
                    <GroupAddIcon />
                  </button>
                </div>
                <div class='card-body'>
                  <General />
                </div>
              </div>
            </Col>
          ) : (
            <Col className='text-center' lg='12' md='12'>
              {caseIntakeEdit == false ? (
                <div class='card'>
                  <div class='card-header card-header-rose card-header-icon mb-0'>
                    <div class='card-icon'>
                      <i class='material-icons'>create</i>
                    </div>
                    <h3 class='card-title'>Initiate New Case</h3>
                  </div>
                  <div class='td-actions text-right'>
                    <button type='button' rel='tooltip' class='btn btn-rose'>
                      <GroupAddIcon />
                    </button>

                    <button
                      type='button'
                      rel='tooltip'
                      class='btn btn-rose mr-4'
                      id='initiate_new_case_btn'
                      onClick={() => {
                        changeAddCircle(true);
                      }}>
                      <AddCircleIcon />
                    </button>
                  </div>

                  <div class='card-body'>
                    <div class='material-datatables' id='case-tbl'>
                      <table
                        id='tbl'
                        class='table table-striped table-no-bordered table-hover'>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Program ID</th>
                            <th>Case No</th>
                            <th>Version No</th>
                            <th>Priority</th>
                            <th>Awareness Date</th>

                            <th>Submission Due Date</th>
                            <th>Case Stage</th>
                            <th>Assigned Name</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {props.caseIntakeTable.map((item) => (
                            <tr>
                              <td>
                                <div class='form-check'>
                                  <label class='form-check-label'>
                                    <input
                                      class='form-check-input'
                                      type='checkbox'
                                      value=''
                                    />
                                    <span class='form-check-sign'>
                                      <span class='check'></span>
                                    </span>
                                  </label>
                                </div>
                              </td>
                              <td>{item.program_id}</td>
                              <td>{item.case_no}</td>
                              <td>{item.patient_age}</td>
                              <td>{item.patient_intials}</td>
                              <td>{item.product_name}</td>

                              <td>{item.event_onset_date}</td>
                              <td>{item.event_case_serious}</td>
                              <td>{item.patient_gender}</td>
                              <td class='td-actions text-right'>
                                <button
                                  type='button'
                                  rel='tooltip'
                                  class='btn btn-info'>
                                  <i class='material-icons'>person</i>
                                </button>
                                <button
                                  type='button'
                                  rel='tooltip'
                                  class='btn btn-rose'
                                  onClick={() => {
                                    console.log('sdkjsd');
                                    changeCaseIntake(true);
                                  }}>
                                  <i class='material-icons'>edit</i>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              ) : (
                <CaseIntakeEditComponent />
              )}
            </Col>
          )}
        </Row>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  caseIntakeEdit: state.caseIntake.caseIntakeEdit,
  caseIntakeTable: state.caseIntake.caseIntakeTable,
});
export default connect(mapStateToProps, {
  changeCaseIntake,
  caseIntakeFrontPage,
})(CaseIntake);
