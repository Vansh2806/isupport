import React from 'react';

const EditNullFlavourConfForm = () => {
  return (
    <div>
      <div className='row card-body'>
        <div class='form-group col-md-4'>
          <label for='field_name'>Feild Name</label>
          <input
            type='text'
            class='form-control'
            id='field_name'
            name='fieldName'
          />
        </div>
        <div class='form-group col-md-4'>
          <label for='NullFlavour'>Null Flavour</label>
          <input
            type='text'
            class='form-control'
            id='NullFlavour'
            name='NullFlavour'
          />
        </div>
        <div class='form-group col-md-4'>
          <label for='R2_NullFlavour'>R2 Null Flavour</label>
          <input
            type='text'
            class='form-control'
            id='R2_NullFlavour'
            name='R2_NullFlavour'
          />
        </div>
      </div>
      <div className='row card-body'>
        <div class='form-group col-md-4'>
          <label for='R3_NullFlavour'>R3 Null Flavour</label>
          <input
            type='text'
            class='form-control'
            id='R3_NullFlavour'
            name='R3_NullFlavour'
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
        }}>
        Edit
      </button>
    </div>
  );
};

export default EditNullFlavourConfForm;
