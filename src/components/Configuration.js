import React, { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import NullFlavoursConfiguration from './NullFlavoursConfiguration';
import R2AndR3Configuration from './R2AndR3Configuration';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import R2AndR3ConfigurationForm from './R2AndR3ConfigurationForm';
import NullFlavoursConfigurationForm from './NullFlavoursConfigurationForm';

import EditNullFlavourConfForm from './EditNullFlavourConfForm';
import EditR2AndR3ConfForm from './EditR2AndR3ConfForm';
import Modal from '@mui/material/Modal';
import axios from 'axios';
const Configuration = () => {
  const [addConfig, setAddConfig] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [configType, setConfigType] = useState('');
  const [submitButton, setSubmitButton] = useState(false);
  const [organization, setOrganization] = useState('');
  const [organizations, setOrganizations] = useState([]);
  useEffect(() => {
    axios.get('http://3.133.20.223:8080/getAllOrganization/').then((res) => {
      console.log(res.data);
      setOrganizations(res.data.organizations);
    });
  }, []);
  const handleViewOpen = () => {
    setViewModal(true);
  };
  const handleViewClose = () => {
    setViewModal(false);
  };
  const handleEditOpen = () => {
    setEditModal(true);
  };
  const handleEditClose = () => {
    setEditModal(false);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className='content'>
      <Row>
        {addConfig == false ? (
          <Col className='text-center' lg='12' md='12'>
            <div class='card'>
              <div class='card-header card-header-rose card-header-icon mb-0'>
                <div class='card-icon'>
                  <i class='material-icons'>create</i>
                </div>
                <h3 class='card-title'>Configurations</h3>
              </div>
              <div class='td-actions text-right'>
                <button
                  type='button'
                  rel='tooltip'
                  class='btn btn-rose mr-4'
                  id='initiate_new_case_btn'
                  onClick={() => {
                    setAddConfig(true);
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
                        <th>Serial No</th>
                        <th>Config Type</th>
                        <th>Organization</th>
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
                        <td>1</td>
                        <td>item.case_no</td>
                        <td>item.patient_age</td>

                        <Modal
                          open={viewModal}
                          onClose={handleViewClose}
                          aria-labelledby='modal-modal-title'
                          aria-describedby='modal-modal-description'>
                          <Box sx={style}>
                            <R2AndR3Configuration />
                          </Box>
                        </Modal>
                        <Modal
                          open={editModal}
                          onClose={handleEditClose}
                          aria-labelledby='modal-modal-title'
                          aria-describedby='modal-modal-description'>
                          <Box sx={style}>
                            <EditR2AndR3ConfForm />
                          </Box>
                        </Modal>

                        <td class='td-actions text-right'>
                          <button
                            type='button'
                            rel='tooltip'
                            class='btn btn-info'
                            onClick={() => {
                              handleViewOpen();
                            }}>
                            <RemoveRedEyeIcon fontSize='small' />
                          </button>
                          <button
                            type='button'
                            rel='tooltip'
                            class='btn btn-rose'
                            onClick={() => {
                              setEditModal(true);
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
          </Col>
        ) : (
          <Col>
            <div class='card'>
              <div class='card-header card-header-rose card-header-icon mb-0'>
                <div class='card-icon'>
                  <i class='material-icons'>create</i>
                </div>
                <h3 class='card-title'>Configurations</h3>
              </div>

              {configType == 'Null Flavours Configuration' &&
                submitButton == true && (
                  <NullFlavoursConfigurationForm setAddConfig={setAddConfig} />
                )}
              {configType == 'R2 and R3 Configuration' &&
                submitButton == true && (
                  <R2AndR3ConfigurationForm setAddConfig={setAddConfig} />
                )}

              <div class='card-body'>
                {submitButton == false && (
                  <div>
                    <div class='material-datatables' id='case-tbl'>
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '30% 20%',
                        }}>
                        <Box sx={{ minWidth: 50 }}>
                          <FormControl style={{ minWidth: 300 }}>
                            <InputLabel id='demo-simple-select-label'>
                              Organization
                            </InputLabel>
                            <Select
                              labelId='demo-simple-select-label'
                              id='demo-simple-select'
                              name='organization'
                              label='Organization'
                              onChange={(e) => {
                                setOrganization(e.target.value);
                                console.log('e.target.name', e.target.value);
                              }}>
                              {console.log(organizations)}
                              {organizations &&
                                organizations.map((item) => (
                                  <MenuItem value={item}>{item}</MenuItem>
                                ))}
                            </Select>
                          </FormControl>
                        </Box>
                        <Box sx={{ minWidth: 50 }}>
                          <FormControl style={{ minWidth: 200 }}>
                            <InputLabel id='demo-simple-select-label'>
                              Config Type
                            </InputLabel>
                            <Select
                              labelId='demo-simple-select-label'
                              id='demo-simple-select'
                              name='configType'
                              label='Config Type'
                              onChange={(e) => {
                                setConfigType(e.target.value);
                                console.log('e.target.name', e.target.value);
                              }}>
                              <MenuItem value='Null Flavours Configuration'>
                                R3 and Null Flavours Configuration
                              </MenuItem>
                              <MenuItem value='R2 and R3 Configuration'>
                                R2 Configuration
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </div>
                    </div>
                    <div>
                      <button
                        type='button'
                        rel='tooltip'
                        class='btn btn-rose mr-4'
                        id='initiate_new_case_btn'
                        style={{
                          display: 'flex',
                          float: 'right',
                        }}
                        onClick={() => {
                          axios.post(
                            'http://3.130.2.241:5000/config/post_config',
                            {
                              configuration_type: configType,
                              organization: organization,
                            }
                          );
                          setSubmitButton(true);
                        }}>
                        Continue
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Configuration;
