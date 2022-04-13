import React, { useState } from 'react';
import axios from 'axios';
import { WindowSharp } from '@mui/icons-material';
const NullFlavoursConfigurationForm = (props) => {
  const [state, setState] = useState({
    field_name: '',
    null_flavour: '',
    r2_null_flavour_value: '',
    r3_null_flavour_value: '',
    organization: 'iComply LifeScience SOlutions',
    value: 'iComply',
  });
  const {
    field_name,
    null_flavour,
    r2_null_flavour_value,
    r3_null_flavour_value,
    organization,
    value,
  } = state;
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    axios
      .post('http://3.130.2.241:5000/config/post_null_flavours', {
        field_name,
        null_flavour,
        r2_null_flavour_value,
        r3_null_flavour_value,
        organization,
        value,
      })
      .then(() => {
        props.setAddConfig(false);
        window.location.reload();
      });
  };
  return (
    <div>
      {console.log(state)}
      <div className='row card-body'>
        <div class='form-group col-md-4'>
          <label for='field_name'>Feild Name</label>
          <input
            type='text'
            class='form-control'
            id='field_name'
            name='field_name'
            value={field_name}
            onChange={onChange}
          />
        </div>
        <div class='form-group col-md-4'>
          <label for='null_flavour'>Null Flavour</label>
          <input
            type='text'
            class='form-control'
            id='null_flavour'
            name='null_flavour'
            value={null_flavour}
            onChange={onChange}
          />
        </div>
        <div class='form-group col-md-4'>
          <label for='r2_null_flavour_value'>R2 Null Flavour</label>
          <input
            type='text'
            class='form-control'
            id='r2_null_flavour_value'
            name='r2_null_flavour_value'
            value={r2_null_flavour_value}
            onChange={onChange}
          />
        </div>
      </div>
      <div className='row card-body'>
        <div class='form-group col-md-4'>
          <label for='r3_null_flavour_value'>R3 Null Flavour</label>
          <input
            type='text'
            class='form-control'
            id='r3_null_flavour_value'
            name='r3_null_flavour_value'
            value={r3_null_flavour_value}
            onChange={onChange}
          />
        </div>
      </div>
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
          handleSubmit();
        }}>
        Submit
      </button>
    </div>
  );
};

export default NullFlavoursConfigurationForm;
