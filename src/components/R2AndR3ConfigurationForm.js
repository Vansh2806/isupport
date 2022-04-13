import React, { useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
const R2AndR3ConfigurationForm = (props) => {
  const [documents, setDocuments] = useState([
    {
      field_name: 'dsk',
      e2b: 'dlk',
      r2_dtd: 'dsl',
      r3_oid: 'sd',
      r2_value: 'dslk',
      r3_value: 'sdlk',
      organization: 'iComply LifeScience Solutions',
      value: 'dslk',
    },
    {
      field_name: 'sdlk',
      e2b: 'sdlk',
      r2_dtd: 'sdkl',
      r3_oid: 'slk',
      r2_value: 'sdkl',
      r3_value: 'sdkl',
      organization: 'iComply LifeScience Solutions',
      value: 'sdkl',
    },
  ]);
  const [state, setState] = useState({
    field_name: '',
    e2b: '',
    r2_dtd: '',
    r3_oid: '',
    r2_value: '',
    r3_value: '',
    organization: 'iComply LifeScience Solutions',
    value: '',
  });

  const {
    field_name,
    e2b,
    r2_dtd,
    r3_oid,
    r2_value,
    r3_value,
    organization,
    value,
  } = state;
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    axios
      .post('http://3.130.2.241:5000/config/post_r2_and_r3_form', {
        field_name,
        e2b,
        r2_dtd,
        r3_oid,
        r2_value,
        r3_value,
        organization,
        value,
      })
      .then(() => {
        props.setAddConfig();
        window.location.reload();
      });
  };
  let formBody = (
    <div>
      {documents.map((item) => (
        <div>
          <Box sx={{ border: '1px dashed grey', margin: '10px' }}>
            <div>
              <div className='row card-body'>
                <div class='col-md-4'>
                  <FormControl fullWidth variant='standard'>
                    <InputLabel id='demo-simple-select-label'>
                      Field Name
                    </InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      value={item.field_name}
                      name='field_name'
                      label={item.field_name}
                      onChange={onChange}>
                      <MenuItem value='Processing center Unit'>
                        Processing center Unit
                      </MenuItem>
                      <MenuItem value='Female'>Female</MenuItem>
                      <MenuItem value='Male'>Male</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div class='col-md-4'>
                  <TextField
                    id='standard-basic'
                    label='Value'
                    variant='standard'
                    name='value'
                    value={item.value}
                    onChange={onChange}
                    fullWidth
                  />
                </div>
                <div class='col-md-4'>
                  <FormControl fullWidth variant='standard'>
                    <InputLabel id='demo-simple-select-label'>
                      E2B Config
                    </InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      // value={field_name}
                      name='e2b'
                      label='E2B Config'
                      onChange={onChange}>
                      <MenuItem value='E2B'>E2B</MenuItem>
                      <MenuItem value='Non E2B'>Non E2B</MenuItem>
                      <MenuItem value='E2B+'>E2B+</MenuItem>
                    </Select>
                  </FormControl>
                  {/* <label for='r2_dtd'>R2 dtd</label>
          <input
            type='text'
            class='form-control'
            id='r2_dtd'
            name='r2_dtd'
            value={r2_dtd}
            onChange={onChange}
          /> */}
                </div>
              </div>
              <div className='row card-body mt-3'>
                <div class='col-md-4'>
                  <TextField
                    id='standard-basic'
                    label='R2 DTD'
                    variant='standard'
                    name='r2_dtd'
                    // value={r2_dtd}
                    onChange={onChange}
                    fullWidth
                  />
                </div>
                <div class='col-md-4'>
                  <TextField
                    id='standard-basic'
                    label='R2 Value'
                    variant='standard'
                    name='r2_value'
                    // value={r2_value}
                    onChange={onChange}
                    fullWidth
                  />
                </div>
                <div class='col-md-4'>
                  <TextField
                    id='standard-basic'
                    label='R3 Value'
                    variant='standard'
                    name='r3_value'
                    // value={r3_value}
                    onChange={onChange}
                    fullWidth
                  />
                </div>
              </div>
              <div className='row card-body mt-3'>
                <div class='col-md-4'>
                  <TextField
                    id='standard-basic'
                    label='R3 OID'
                    variant='standard'
                    name='r3_oid'
                    // value={r3_oid}
                    onChange={onChange}
                    fullWidth
                  />
                </div>
              </div>
              <div
                style={{
                  position: 'relative',
                  left: '820px',
                  marginBottom: '10px',
                }}>
                <button
                  type='button'
                  rel='tooltip'
                  class='btn btn-rose mr-4'
                  id='initiate_new_case_btn'>
                  Edit
                </button>
                <button
                  type='button'
                  rel='tooltip'
                  class='btn btn-rose mr-4'
                  id='initiate_new_case_btn'>
                  Submit
                </button>
              </div>
            </div>
          </Box>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      {console.log(state)}

      {formBody}
    </div>
  );
};

export default R2AndR3ConfigurationForm;
