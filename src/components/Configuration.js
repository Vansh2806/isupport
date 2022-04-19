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
import R3ConfigurationForm from './R3ConfigurationForm';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditNullFlavourConfForm from './EditNullFlavourConfForm';
import EditR2AndR3ConfForm from './EditR2AndR3ConfForm';
import R2Configuration from './R2Configuration';
import E2BConfiguration from './E2BConfiguration';
import R3Configuration from './R3Configuration';
import R3NullFlavours from './R3NullFlavours';
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
  const [factorySettings, setFactorySettings] = useState([]);
  const [configTable, setConfigTable] = useState([]);
  const [selectedConfigRow, setSelectedConfigRow] = useState('');
  const [selectedOrganizationRow, setSelectedOrganizationRow] = useState('');
  const [configRes, setConfigRes] = useState('');
  const [viewTableData, setViewTableData] = useState([]);
  const [viewLoading, setViewLoading] = useState(false);
  useEffect(() => {
    axios.get('http://3.130.2.241:5000/config/get_config').then((res) => {
      setConfigTable(res.data);
      console.log(res.data);
    });
    axios.get('http://3.133.20.223:8080/getAllOrganization/').then((res) => {
      console.log(res.data);
      setOrganizations(res.data.organizations);
    });
  }, []);
  const handleContinue = () => {
    // let arr = factorySettings;
    setSubmitButton(true);
    // arr.forEach((item) => {
    //   item.organization = organization;
    // });
    // console.log('arr', arr);
    // setFactorySettings(arr);
    // axios.post('http://3.130.2.241:5000/config/post_factory_settings', {
    //   config_type: configType,
    //   data: arr,
    // });
    // axios
    //   .post('http://3.130.2.241:5000/config/post_config', {
    //     configuration_type: configType,
    //     organization: organization,
    //     data: arr,
    //   })
    //   .then((res) => {
    //     console.log('response', res.data);
    //     setConfigRes(res.data);
    //     if (res.data != 'Configuration Already Exists') {
    //       setSubmitButton(true);
    //     }
    //     setTimeout(() => {
    //       setConfigRes('');
    //     }, 2000);
    //   });
  };
  const handleViewOpen = () => {
    setViewModal(true);
  };
  const handleViewClose = () => {
    setViewModal(false);
    setSelectedConfigRow('');
  };
  const handleEditOpen = () => {
    setEditModal(true);
  };
  const handleEditClose = () => {
    setEditModal(false);
  };
  const handleView = (config, organization) => {
    setViewLoading(true);
    setSelectedConfigRow(config);
    setSelectedOrganizationRow(organization);
    axios
      .post('http://3.130.2.241:5000/config/view_config', {
        configType: config,
        organization: organization,
      })
      .then((res) => {
        console.log(res.data);
        setViewTableData(res.data);
      })
      .then(() => {
        setViewLoading(false);
      });
  };
  const handleEdit = (config, organization) => {
    setSelectedConfigRow(config);
    setSelectedOrganizationRow(organization);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '70%',
    transform: 'translate(-50%, -50%)',
    width: 1100,
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
                      {configTable.map((item) => (
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
                          <td>{item.id}</td>
                          <td>{item.configuration_type}</td>
                          <td>{item.organization}</td>

                          <Modal
                            open={selectedConfigRow == 'R2 Configuration'}
                            onClose={handleViewClose}
                            aria-labelledby='modal-modal-title'
                            aria-describedby='modal-modal-description'
                            style={{ width: '1000px' }}>
                            <Box sx={style}>
                              <R2AndR3Configuration
                                viewTableData={viewTableData}
                              />
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
                                handleView(
                                  item.configuration_type,
                                  item.organization
                                );
                                handleViewOpen();
                              }}>
                              <RemoveRedEyeIcon fontSize='small' />
                            </button>
                            <button
                              type='button'
                              rel='tooltip'
                              class='btn btn-rose'
                              onClick={() => {
                                setAddConfig(true);
                                setConfigType(item.configuration_type);
                                setOrganization(item.organization);
                                setSubmitButton(true);
                                console.log(
                                  item.configuration_type,
                                  item.organization
                                );
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

              {/* {configType == 'R3 Configuration' && submitButton == true && (
                <R3ConfigurationForm
                  setAddConfig={setAddConfig}
                  configType={configType}
                  organization={organization}
                  setSubmitButton={setSubmitButton}
                />
              )} */}
              {/* {configType == 'R2 Configuration' && submitButton == true && (
                <R2AndR3ConfigurationForm
                  setAddConfig={setAddConfig}
                  configType={configType}
                  organization={organization}
                  setSubmitButton={setSubmitButton}
                />
              )} */}
              {configType == 'E2B Configuration' && submitButton == true && (
                <E2BConfiguration />
              )}
              {configType == 'R2 Configuration' && submitButton == true && (
                <R2Configuration />
              )}
              {configType == 'R3 Configuration' && submitButton == true && (
                <R3Configuration />
              )}
              {configType == 'R3 Null flavour Configuration' &&
                submitButton == true && <R3Configuration />}

              <div class='card-body'>
                {configRes == 'Configuration Already Exists' && (
                  <div class='alert alert-danger' role='alert'>
                    Configuration Already Exists
                  </div>
                )}
                {submitButton == false && (
                  <div>
                    <ArrowBackIcon
                      style={{
                        marginBottom: '20px',
                        marginTop: '-10px',
                        marginLeft: '-10px',
                      }}
                      onClick={() => setAddConfig(false)}
                    />
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
                                axios
                                  .post(
                                    'http://3.130.2.241:5000/config/get_factory_settings',
                                    {
                                      config_type: e.target.value,
                                      organization,
                                    }
                                  )
                                  .then((res) => {
                                    setFactorySettings(res.data);
                                    console.log(res.data);
                                  });
                              }}>
                              <MenuItem value='E2B Configuration'>
                                E2B Configuration
                              </MenuItem>
                              <MenuItem vlaue='Dropdown Value configuration'>
                                Dropdown Value configuration
                              </MenuItem>

                              <MenuItem value='R3 Configuration'>
                                R3 Configuration
                              </MenuItem>
                              <MenuItem value='R2 Configuration'>
                                R2 Configuration
                              </MenuItem>
                              <MenuItem value='R3 Null flavour Configuration'>
                                R3 Null flavour Configuration
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
                          handleContinue();
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
