import React, { useState, useEffect } from 'react';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import Select from '@material-ui/core/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { Select } from 'antd';
import axios from 'axios';
const { Option } = Select;
const R3ConfigurationForm = (props) => {
  const [documents, setDocuments] = useState([]);
  const { setAddConfig, setSubmitButton } = props;
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
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  useEffect(() => {
    setLoading(true);
    axios
      .post('http://3.130.2.241:5000/config/configuration_details', {
        config_type: props.configType,
        organization: props.organization,
      })
      .then((res) => {
        let arr = res.data;
        let count = 0;
        arr = arr.map((obj, index) => {
          return { ...obj, id: index, disabled: true };
        });
        console.log('SDjdskjlds', arr);
        setDocuments(arr);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);

  const onClickBack = () => {
    setAddConfig(false);
    setSubmitButton(false);
  };

  let formBody = (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      {console.log('documenttt', documents)}
      {documents.map((item, index) => (
        <div>
          <Box
            sx={{
              border: '1px solid grey',
              margin: '10px',
              borderRadius: '5%',
            }}>
            <div>
              <div className='row card-body'>
                <div class='col-md-4'>
                  <FormControl fullWidth variant='standard'>
                    <TextField
                      id='standard-basic'
                      label='Field Name'
                      variant='standard'
                      name='field_name'
                      value={item.field_name}
                      fullWidth
                      disabled
                    />
                  </FormControl>
                </div>

                <div class='col-md-4'>
                  <TextField
                    id='standard-basic'
                    label='Value'
                    variant='standard'
                    name='value'
                    value={item.value}
                    onChange={(e) => {
                      setDocuments(
                        documents.map((obj) => {
                          if (obj.id == index) {
                            return { ...obj, value: e.target.value };
                          }
                          return obj;
                        })
                      );
                    }}
                    fullWidth
                    disabled
                  />
                </div>
              </div>
              <div className='row card-body mt-3'>
                <div class='col-md-4'>
                  <TextField
                    id='standard-basic'
                    label='R3 Display Name'
                    variant='standard'
                    name='r3_displayname'
                    value={item.r3_displayname}
                    onChange={(e) => {
                      setDocuments(
                        documents.map((obj) => {
                          if (obj.id == index) {
                            return { ...obj, r3_displayname: e.target.value };
                          }
                          return obj;
                        })
                      );
                    }}
                    fullWidth
                    disabled={item.disabled}
                  />
                </div>

                <div class='col-md-4'>
                  <TextField
                    id='standard-basic'
                    label='R3 Value'
                    variant='standard'
                    name='r3_value'
                    value={item.r3_value}
                    onChange={(e) => {
                      setDocuments(
                        documents.map((obj) => {
                          if (obj.id == index) {
                            return { ...obj, r3_value: e.target.value };
                          }
                          return obj;
                        })
                      );
                    }}
                    fullWidth
                    disabled={item.disabled}
                  />
                </div>
              </div>

              <div>
                <button
                  type='button'
                  rel='tooltip'
                  class='btn btn-rose mr-4'
                  id='initiate_new_case_btn'
                  style={{ position: 'relative', left: '80%' }}
                  onClick={() => {
                    setDocuments(
                      documents.map((obj) => {
                        if (obj.id == index) {
                          return { ...obj, disabled: false };
                        }
                        return obj;
                      })
                    );
                  }}>
                  <EditIcon fontSize='small' />
                </button>
                {item.disabled == false && (
                  <button
                    type='button'
                    rel='tooltip'
                    class='btn btn-rose mr-4'
                    id='initiate_new_case_btn'
                    style={{ position: 'relative', left: '38%' }}>
                    Submit
                  </button>
                )}
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
      {!loading && (
        <ArrowBackIcon
          style={{ marginLeft: '10px' }}
          onClick={() => onClickBack()}
        />
      )}
      {loading ? (
        <div
          class='spinner-border text-secondary'
          style={{ position: 'relative', left: '486px' }}
          role='status'>
          <span class='sr-only'>Loading...</span>
        </div>
      ) : (
        formBody
      )}
    </div>
  );
};

export default R3ConfigurationForm;
