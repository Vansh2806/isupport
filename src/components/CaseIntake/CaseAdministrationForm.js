import React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
const CaseAdministrationForm = () => {
  return (
    <div class='tab-pane active' id='administrative_info'>
      <div class='container-fluid'>
        <div class='row'>
          <div class='col-md-3'>
            <div class='form-group'>
              <label for='awareness_date'> Awareness Date</label>
              <input
                type='date'
                class='form-control'
                id='awareness_date'
                name='awareness_date'
              />
            </div>
          </div>
          <div class='col-md-3'>
            <div class='form-group'>
              <label for='program_name'> Initial Received Date</label>
              <input type='date' class='form-control' name='initial_rec_date' />
            </div>
          </div>

          <div class='col-md-3'>
            <div class='form-group'>
              <label for='program_name'> Processing Center Received Date</label>
              <input
                type='date'
                class='form-control'
                id='processing_rec_date'
                name='processing_rec_date'
              />
            </div>
          </div>

          <div class='col-md-3'>
            <FormControl
              variant='standard'
              fullWidth
              style={{ marginTop: '24px' }}>
              <InputLabel id='demo-simple-select-label'>
                Processing center Unit
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value={primarySourceCountry}
                name='primarySourceUnit'
                label='Processing center Unit'>
                <MenuItem value='Processing center Unit'>
                  Processing center Unit
                </MenuItem>
                <MenuItem value='Female'>Female</MenuItem>
                <MenuItem value='Male'>Male</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div class='row'>
          <div class='col-md-3'>
            <FormControl variant='standard' fullWidth>
              <InputLabel id='demo-simple-select-label'>
                Primary Source Country
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value={primarySourceCountry}
                name='primarySourceCountry'
                label='Primary Source Country'>
                <MenuItem value='Primary Source Country'>
                  Primary Source Country
                </MenuItem>
                <MenuItem value='Female'>Female</MenuItem>
                <MenuItem value='Male'>Male</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div class='col-md-3'>
            <FormControl variant='standard' fullWidth>
              <InputLabel id='demo-simple-select-label'>
                Processing center Unit
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value={primarySourceCountry}
                name='CountryOfOccurence'
                label='Country of occurence'>
                <MenuItem value='Country of occurence'>
                  Country of occurence
                </MenuItem>
                <MenuItem value='Female'>Female</MenuItem>
                <MenuItem value='Male'>Male</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div class='col-md-3'>
            <FormControl variant='standard' fullWidth>
              <InputLabel id='demo-simple-select-label'>Report type</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value={primarySourceCountry}
                name='reportType'
                label='Report type'>
                <MenuItem value='Report type'>Report type</MenuItem>
                <MenuItem value='Female'>Female</MenuItem>
                <MenuItem value='Male'>Male</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div class='col-md-3'>
            <FormControl variant='standard' fullWidth>
              <InputLabel id='demo-simple-select-label'>
                Sender source
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value={primarySourceCountry}
                name='senderSource'
                label='Sender source'>
                <MenuItem value='Sender source'>Sender source</MenuItem>
                <MenuItem value='Female'>Female</MenuItem>
                <MenuItem value='Male'>Male</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div class='row'>
          <div class='col-md-3'>
            <FormControl variant='standard' fullWidth>
              <InputLabel id='demo-simple-select-label'>
                Case Significance
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value={primarySourceCountry}
                name='caseSignificance'
                label='Case Significance'>
                <MenuItem value='Case Significance'>Case Significance</MenuItem>
                <MenuItem value='Female'>Female</MenuItem>
                <MenuItem value='Male'>Male</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div class='col-md-3'>
            <FormControl variant='standard' fullWidth>
              <InputLabel id='demo-simple-select-label'>
                Adverse Event Type
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value={primarySourceCountry}
                name='adverseEventType'
                label='Adverse Event Type'>
                <MenuItem value='Adverse Event Type'>
                  Adverse Event Type
                </MenuItem>
                <MenuItem value='Female'>Female</MenuItem>
                <MenuItem value='Male'>Male</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseAdministrationForm;
