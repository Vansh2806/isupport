import React, { useState } from 'react';
import Styles from './general.module.css';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';
const General = () => {
  const [state, setState] = useState({
    case_no: Math.random(),
    AwarenessDate: '',
    ProcessingCenterDate: '',
    programId: '',
    ProgramName: '',
    primarySourceCountry: '',
    reportType: '',
    caseSignificance: '',
    adverseEventType: '',
    ReferenceNo: '',
    patientId: '',
    patientDetails: '',
    firstName: '',
    lastDetails: '',
    age: '',
    organizationName: '',
    reporterContactConsent: false,
    physicianContactConsent: false,
    patientContactConsent: false,
    productName: '',
    adverseEvent: '',
    genericName: '',
    onsetDate: '',
    patientGender: '',
    ageUnit: '',
    ageGroup: '',
    reportTypePatient: '',
    outcome: '',
    countryOfOccurence: '',
    caseSerious: '',
    country: '',
    patientInitial: '',
    lastName: '',
    dob: '',
  });
  const {
    AwarenessDate,
    ProcessingCenterDate,
    programId,
    ProgramName,
    primarySourceCountry,
    reportType,
    caseSignificance,
    adverseEventType,
    ReferenceNo,
    patientId,
    patientDetails,
    firstName,
    lastDetails,
    age,
    organizationName,
    reporterContactConsent,
    physicianContactConsent,
    patientContactConsent,
    productName,
    adverseEvent,
    genericName,
    onsetDate,
    patientGender,
    ageUnit,
    ageGroup,
    reportTypePatient,
    outcome,
    countryOfOccurence,
    caseSerious,
    country,
    patientInitial,
    lastName,
    dob,
  } = state;
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const initiate = () => {
    console.log('sdkjds');
    axios.post('http://3.130.2.241:5000/caseintake/add', { state });
  };
  return (
    <div class='row card-body' id='case-input-div'>
      {console.log('state', state)}
      <div class='col-md-6'>
        <p class='font-weight-bold  pt-4 pb-0'>GENERAL</p>
        <div class='row'>
          <div class='col-md-6'>
            <div class='form-group'>
              <label for='aware_date' className={Styles.label}>
                {' '}
                Awareness date
              </label>
              <input
                type='date'
                class='form-control'
                id='aware_date'
                value={AwarenessDate}
                name='AwarenessDate'
                onChange={onChange}
              />
            </div>
          </div>
          <div class='col-md-6'>
            <div class='form-group'>
              <label className={Styles.label} for='org_name'>
                Processing center received date
              </label>
              <input
                type='date'
                class='form-control'
                id='processing_date'
                name='ProcessingCenterDate'
                value={ProcessingCenterDate}
                onChange={onChange}
              />
            </div>
          </div>
          <div class='col-md-6'>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>
                  Primary Source Country
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={primarySourceCountry}
                  name='primarySourceCountry'
                  label='Primary Source Country'
                  onChange={onChange}>
                  <MenuItem value='Female'>Female</MenuItem>
                  <MenuItem value='Male'>Male</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div class='col-md-6'>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>
                  Report Type
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={reportType}
                  name='reportType'
                  label='Report Type'
                  onChange={onChange}>
                  <MenuItem value='Female'>Female</MenuItem>
                  <MenuItem value='Male'>Male</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div class='col-md-6 mt-3'>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>
                  Case Significance
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={caseSignificance}
                  label='Case Significance'
                  name='caseSignificance'
                  onChange={onChange}>
                  <MenuItem value='Female'>Female</MenuItem>
                  <MenuItem value='Male'>Male</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div class='col-md-6 mt-3'>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>
                  Adverse Event Type
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={adverseEventType}
                  name='adverseEventType'
                  label='Adverse Event Type'
                  onChange={onChange}>
                  <MenuItem value='Female'>Female</MenuItem>
                  <MenuItem value='Male'>Male</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div class='col-md-6'>
            <div class='form-group'>
              <label className={Styles.label} for='org_name'>
                Reference No
              </label>
              <input
                type='text'
                class='form-control tagsinput'
                value={ReferenceNo}
                name='ReferenceNo'
                onChange={onChange}
                data-role='tagsinput'
                data-color='info'
              />
            </div>
          </div>
        </div>
      </div>
      <div class='col-md-6'>
        <p class='font-weight-bold  pt-4 pb-0'>PROGRAM INFORMATION</p>
        <div class='row'>
          <div class='col-md-6'>
            <div class='form-group'>
              <label className={Styles.label} for='program_id'>
                {' '}
                Program ID
              </label>
              <input
                type='email'
                class='form-control'
                id='program_id'
                name='programId'
                value={programId}
                onChange={onChange}
              />
            </div>
          </div>
          <div class='col-md-6'>
            <div class='form-group'>
              <label className={Styles.label} for='program_name'>
                {' '}
                Program Name
              </label>
              <input
                type='text'
                class='form-control'
                id='program_name'
                name='ProgramName'
                value={ProgramName}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div class='col-md-6'>
        <p class='font-weight-bold  pt-4 pb-0'>PATIENT</p>
        <div class='row'>
          <div class='col-md-6'>
            <div class='form-group'>
              <label className={`${Styles.label} `} for='patient_id'>
                {' '}
                Patient ID
              </label>
              <input
                type='text'
                class='form-control'
                id='patient_id'
                name='patientId'
                value={patientId}
                onChange={onChange}
              />
            </div>
          </div>
          <div class='col-md-6'>
            <div class='form-group'>
              <label className={`${Styles.label} `} for='patient_initial'>
                {' '}
                Patient Initials
              </label>
              <input
                type='text'
                class='form-control'
                id='patient_initial'
                name='patientInitial'
                value={patientInitial}
                onChange={onChange}
              />
            </div>
          </div>

          <div class='col-md-6'>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>
                  Patient Gender
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={patientGender}
                  label='Patient Gender'
                  name='patientGender'
                  onChange={onChange}>
                  <MenuItem value='Female'>Female</MenuItem>
                  <MenuItem value='Male'>Male</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div class='col-md-6'>
            <div class='form-group'>
              <label className={Styles.label}>Date Of Birth</label>
              <input
                type='date'
                class='form-control datepicker'
                value={dob}
                id='dob'
                name='dob'
                onChange={onChange}
              />
            </div>
          </div>

          <div class='col-md-4'>
            <div class='form-group pl-3'>
              <label className={`${Styles.label} `} for='patient_age '>
                {' '}
                Age
              </label>
              <input
                type='number'
                class='form-control'
                id='patient_age'
                name='age'
                value={age}
                onChange={onChange}
              />
            </div>
          </div>
          <div class='col-md-4'>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Age Unit</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={ageUnit}
                  name='ageUnit'
                  label='Age Unit'
                  onChange={onChange}>
                  <MenuItem value='Female'>Female</MenuItem>
                  <MenuItem value='Male'>Male</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>

          <div class='col-md-4'>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Age Group</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={ageGroup}
                  name='ageGroup'
                  label='Age Group'
                  onChange={onChange}>
                  <MenuItem value='Female'>Female</MenuItem>
                  <MenuItem value='Male'>Male</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>

          <div class='col-md-12'>
            <div class='togglebutton pt-2'>
              <label className={Styles.label}>
                <input
                  type='checkbox'
                  name='patientContactConsent'
                  value={patientContactConsent}
                  onChange={() => {
                    setState((prevState) => ({
                      ...prevState,
                      patientContactConsent: !prevState.patientContactConsent,
                    }));
                  }}
                />
                <span class='toggle'></span>
                Patient Contact Consent
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class='col-md-6'>
        <p class='font-weight-bold  pt-4 pb-0'>REPORTER</p>
        <div class='row'>
          <div class='col-md-6'>
            <div class='form-group'>
              <label className={`${Styles.label} `} for='first_name'>
                {' '}
                First Name
              </label>
              <input
                type='text'
                class='form-control'
                id='first_name'
                name='firstName'
                value={firstName}
                onChange={onChange}
              />
            </div>
          </div>
          <div class='col-md-6'>
            <div class='form-group'>
              <label className={`${Styles.label} `} for='last_name'>
                {' '}
                Last Name
              </label>
              <input
                type='text'
                class='form-control'
                id='last_name'
                name='lastName'
                value={lastName}
                onChange={onChange}
              />
            </div>
          </div>
          <div class='col-md-12'>
            <div class='form-group'>
              <label className={`${Styles.label} `} for='org_name'>
                {' '}
                Organization Name
              </label>
              <input
                type='text'
                class='form-control'
                id='org_name'
                name='organizationName'
                value={organizationName}
                onChange={onChange}
              />
            </div>
          </div>

          <div class='col-md-6'>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Country</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={country}
                  name='country'
                  label='Country'
                  onChange={onChange}>
                  <MenuItem value='Case No'>Case No</MenuItem>
                  <MenuItem value='Case Reference No'>
                    Case Reference No
                  </MenuItem>
                  <MenuItem value='Safety Report ID'>Safety Report ID</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div class='col-md-6'>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>
                  Report Type
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={reportTypePatient}
                  name='reportTypePatient'
                  label='Report Type'
                  onChange={onChange}>
                  <MenuItem value='Case No'>Case No</MenuItem>
                  <MenuItem value='Case Reference No'>
                    Case Reference No
                  </MenuItem>
                  <MenuItem value='Safety Report ID'>Safety Report ID</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div class='col-md-6 pt-2'>
            <div class='togglebutton'>
              <label className={`${Styles.label} `}>
                <input
                  type='checkbox'
                  name='reporterContactConsent'
                  value={reporterContactConsent}
                  onChange={() => {
                    setState((prevState) => ({
                      ...prevState,
                      reporterContactConsent: !prevState.reporterContactConsent,
                    }));
                  }}
                />
                <span class='toggle'></span>
                Reporter contact Consent
              </label>
            </div>
          </div>
          <div class='col-md-6 pt-2'>
            <div class='togglebutton'>
              <label className={`${Styles.label} `}>
                <input
                  type='checkbox'
                  name='physicianContactConsent'
                  value={physicianContactConsent}
                  onChange={() => {
                    setState((prevState) => ({
                      ...prevState,
                      physicianContactConsent:
                        !prevState.physicianContactConsent,
                    }));
                  }}
                />
                <span class='toggle'></span>
                Physician contact Consent
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class='col-md-6'>
        <p class='font-weight-bold  pt-4 pb-0'>PRODUCT</p>
        <div class='col-md-12'>
          <div class='form-group'>
            <label className={`${Styles.label} `} for='product_name'>
              Product Name
            </label>
            <input
              type='text'
              class='form-control'
              id='product_name'
              name='productName'
              value={productName}
              onChange={onChange}
            />
          </div>
        </div>
        <div class='col-md-12'>
          <div class='form-group'>
            <label for='generic_name' className={`${Styles.label} `}>
              Generic Name
            </label>
            <input
              type='text'
              class='form-control'
              id='generic_name'
              name='genericName'
              value={genericName}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
      <div class='col-md-6'>
        <p class='font-weight-bold  pt-4 pb-0'>EVENT</p>
        <div class='row'>
          <div class='col-md-12'>
            <div class='form-group'>
              <label for='adverse_event' className={`${Styles.label} `}>
                {' '}
                Adverse Event
              </label>
              <input
                type='text'
                class='form-control'
                id='adverse_event'
                name='adverseEvent'
                value={adverseEvent}
                onChange={onChange}
              />
            </div>
          </div>
          <div class='col-md-6'>
            <div class='form-group'>
              <label className={`${Styles.label}`}>Onset Date</label>
              <input
                type='date'
                class='form-control datepicker'
                value={onsetDate}
                id='dob'
                name='onsetDate'
                onChange={onChange}
              />
            </div>
          </div>
          <div class='col-md-6'>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>
                  Case Serious
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={caseSerious}
                  name='caseSerious'
                  label='Case Serious'
                  onChange={onChange}>
                  <MenuItem value='Female'>Female</MenuItem>
                  <MenuItem value='Male'>Male</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>

          <div class='col-md-6'>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Outcome</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={outcome}
                  name='outcome'
                  label='Outcome'
                  onChange={onChange}>
                  <MenuItem value='Female'>Female</MenuItem>
                  <MenuItem value='Male'>Male</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div class='col-md-6'>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>
                  Country of Occurence
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={countryOfOccurence}
                  name='countryOfOccurence'
                  label='Country of Occurence'
                  onChange={onChange}>
                  <MenuItem value='Female'>Female</MenuItem>
                  <MenuItem value='Male'>Male</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
        <div class='pull-right'>
          <button type='button' class='btn btn-seconary' id='back-btn'>
            {' '}
            Save As Draft{' '}
          </button>
          <button
            type='button'
            class='btn btn-primary'
            onClick={() => initiate()}>
            Intiate
          </button>
        </div>
      </div>
    </div>
  );
};

export default General;
