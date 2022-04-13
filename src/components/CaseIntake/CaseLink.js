import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
const CaseLink = () => {
  return (
    <div class='tab-pane' id='link_case_info'>
      <div class='container-fluid mt-3'>
        <div class='row'>
          <div class='col-md-1'>
            <List
              sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
              }}>
              <ListItem alignItems='flex-start'>
                <a
                  class='nav-link active p-0'
                  data-toggle='tab'
                  href='#general_case_reference'
                  role='tablist'>
                  <i class='material-icons'>dashboard</i> Case Reference
                </a>
              </ListItem>
              <ListItem alignItems='flex-start'>
                <a
                  class='nav-link  p-0'
                  data-toggle='tab'
                  href='#general_case_identifier'
                  role='tablist'>
                  <i class='material-icons'>schedule</i> Case Identifier
                </a>
              </ListItem>
            </List>
            {/* <ul
              class='nav nav-pills nav-pills-rose nav-pills-icons justify-content-center'
              role='tablist'>
              <li class='nav-item p-0'>
                <a
                  class='nav-link active p-0'
                  data-toggle='tab'
                  href='#general_case_reference'
                  role='tablist'>
                  <i class='material-icons'>dashboard</i> Case Reference
                </a>
              </li>
              <li class='nav-item'>
                <a
                  class='nav-link  p-0'
                  data-toggle='tab'
                  href='#general_case_identifier'
                  role='tablist'>
                  <i class='material-icons'>schedule</i> Case Identifier
                </a>
              </li>
            </ul> */}
          </div>
          <div class='col-md-11'>
            <div class='tab-content'>
              <div class='tab-pane active' id='general_case_reference'>
                <div class=' text-right pt-0 mt-0'>
                  <button
                    type='button'
                    class='btn btn-rose mr-4 p-2'
                    id='add_general_case_reference'>
                    <i class='material-icons'>add_circle</i>
                  </button>
                </div>
                <div
                  class='table-responsive'
                  style={{ maxHeight: '500px', overflowY: 'auto' }}>
                  <table
                    class='table '
                    id='caseReferenceTable'
                    style={{ width: '100%' }}>
                    <thead>
                      <tr>
                        <th>S. No.</th>
                        <th class='width'>Reference Type</th>
                        <th class='width'>Reference No</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1.</td>
                        <td>
                          <div class='form-group pt-0 mt-0'>
                            <textarea
                              class='form-control mt-0'
                              placeholder='Reference Type'
                              name='reference_type'></textarea>
                          </div>
                        </td>
                        <td>
                          <div class='form-group pt-0 mt-0'>
                            <textarea
                              class='form-control mt-0'
                              placeholder='Reference No'
                              name='reference_no'></textarea>
                          </div>
                        </td>
                        <td class='td-actions text-right'>
                          <button class='btn btn-just-icon btn-rose close-btn btn-round btn-sm'>
                            <i class='material-icons'>close</i>
                          </button>
                          <button class='btn btn-just-icon btn-success  btn-round btn-sm'>
                            <i class='material-icons'>done</i>
                          </button>
                          <button class='btn btn-just-icon btn-info  btn-round btn-sm'>
                            <i class='material-icons'>edit</i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class='tab-pane' id='general_case_identifier'>
                <div class=' text-right pt-0 mt-0'>
                  <button
                    type='button'
                    class='btn btn-rose mr-4 p-2'
                    id='add_case_identifier'>
                    <i class='material-icons'>add_circle</i>
                  </button>
                </div>
                <div
                  class='table-responsive'
                  style={{ maxHeight: '500px', overflowY: 'auto' }}>
                  <table
                    class='table '
                    id='caseIdentifierTable'
                    style={{ width: '100%' }}>
                    <thead>
                      <tr>
                        <th>S. No.</th>
                        <th class='width'>Case Link Reason</th>
                        <th class='width'>Case No</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1.</td>
                        <td>
                          <div class='form-group pt-0 mt-0'>
                            <textarea
                              class='form-control mt-0'
                              placeholder='Case Link Reason'
                              name='case_link_reason'></textarea>
                          </div>
                        </td>
                        <td>
                          <div class='form-group pt-0 mt-0'>
                            <textarea
                              class='form-control mt-0'
                              placeholder='Case No'
                              name='case_no'></textarea>
                          </div>
                        </td>
                        <td class='td-actions text-right'>
                          <button class='btn btn-just-icon btn-rose close-btn btn-round btn-sm'>
                            <i class='material-icons'>close</i>
                          </button>
                          <button class='btn btn-just-icon btn-success  btn-round btn-sm'>
                            <i class='material-icons'>done</i>
                          </button>
                          <button class='btn btn-just-icon btn-info  btn-round btn-sm'>
                            <i class='material-icons'>edit</i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseLink;
