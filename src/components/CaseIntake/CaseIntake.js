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
import React from 'react';

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
import { connect } from 'react-redux';
import { changeCaseIntake } from '../../actions/caseintakeAction';
import CaseIntakeEditComponent from './CaseIntakeEditComponent';
const CaseIntake = (props) => {
  const { caseIntakeEdit, changeCaseIntake } = props;
  return (
    <>
      <div className='content'>
        <Row>
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
                    <i class='material-icons'>group_add</i>
                  </button>

                  <button
                    type='button'
                    rel='tooltip'
                    class='btn btn-rose mr-4'
                    id='initiate_new_case_btn'>
                    <i class='material-icons'>add_circle</i>
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
                          <th>Case Seriou</th>
                          <th>Product</th>
                          <th>Event</th>
                          <th>Submission Due Date</th>
                          <th>Case Stage</th>
                          <th>Assigned Name</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
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
                          <td>Program ID</td>
                          <td>Case No</td>
                          <td>Version No</td>
                          <td>Priority</td>
                          <td>Awareness Date</td>
                          <td>Case Seriou</td>
                          <td>Product</td>
                          <td>Event</td>
                          <td>Submission Due Date</td>
                          <td>Case Stage</td>
                          <td>Assigned Name</td>
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
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ) : (
              <CaseIntakeEditComponent />
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  caseIntakeEdit: state.caseIntake.caseIntakeEdit,
});
export default connect(mapStateToProps, { changeCaseIntake })(CaseIntake);
