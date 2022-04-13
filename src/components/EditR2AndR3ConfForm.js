import React, { useState } from 'react';
import axios from 'axios';
const EditR2AndR3ConfForm = () => {
  const [state, setState] = useState({
    field_name: '',
    e2b: 'true',
    r2_dtd: '',
    r3_oid: '',
    r2_value: '',
    r3_value: '',
    value: 'iComply',
  });
  const { field_name, e2b, r2_dtd, r3_oid, r2_value, r3_value, value } = state;
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    axios.post('http://3.130.2.241:5000/config/edit_config', {
      configType: 'R2AndR3',
      field_name,
      e2b,
      r2_dtd,
      r3_oid,
      r2_value,
      r3_value,

      value,
    });
  };
  return (
    <div>
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
          <label for='r2_dtd'>R2 dtd</label>
          <input
            type='text'
            class='form-control'
            id='r2_dtd'
            name='r2_dtd'
            value={r2_dtd}
            onChange={onChange}
          />
        </div>
        <div class='form-group col-md-4'>
          <label for='r2_value'>R2 Value</label>
          <input
            type='text'
            class='form-control'
            id='r2_value'
            name='r2_value'
            value={r2_value}
            onChange={onChange}
          />
        </div>
      </div>
      <div className='row card-body'>
        <div class='form-group col-md-4'>
          <label for='r3_oid'>R3 oid</label>
          <input
            type='text'
            class='form-control'
            id='r3_oid'
            name='r3_oid'
            value={r3_oid}
            onChange={onChange}
          />
        </div>
        <div class='form-group col-md-4'>
          <label for='r3_value'>R3 Value</label>
          <input
            type='text'
            class='form-control'
            id='r3_value'
            name='r3_value'
            value={r3_value}
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
        Edit
      </button>
    </div>
  );
};

export default EditR2AndR3ConfForm;
