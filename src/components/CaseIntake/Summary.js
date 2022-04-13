import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
import { submitSummary } from '../../actions/summaryAction';
import axios from 'axios';
const Summary = (props) => {
  const [caseNarrative, setCaseNarrative] = useState('');
  const [reportersComment, setReportersComment] = useState('');
  const { submitSummary, summary } = props;
  const handleSubmit = () => {
    props.submitSummary({
      case_narative: caseNarrative,
      reportersComment: reportersComment,
    });
    axios
      .post('http://localhost:4000/post_case_intake', {
        caseNarrative,
        reportersComment,
      })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div id='summaryNav'>
      <div>
        <div class='card-header'>
          {console.log('case', caseNarrative, reportersComment)}
          <h4 class='card-title'>Summary</h4>
        </div>
        <div class='card-body'>
          <div class='row'>
            <div class='col-12'>
              <div class='form-group'>
                <label for='program_name'>Case Narrative</label>
                <textarea
                  class=' bordered_textarea mt-4 p-1'
                  name='case_narrative'
                  rows='20'
                  onChange={(e) => setCaseNarrative(e.target.value)}></textarea>
              </div>
            </div>
            <div class='col-12'>
              <div class='form-group'>
                <label for='program_name'>Reporter Comments</label>
                <textarea
                  class=' bordered_textarea mt-4 p-1'
                  name='reporter_comments'
                  rows='12'
                  onChange={(e) =>
                    setReportersComment(e.target.value)
                  }></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button
        onClick={() => {
          handleSubmit();
        }}
        style={{
          display: 'flex',
          float: 'right',
          marginBottom: '10px',
        }}>
        Submit
      </Button>
    </div>
    // <div>
    //   {console.log('hello sarthak', summary)}
    //   <h4>Summary</h4>
    //   <Form>
    //     <FormGroup>
    //       <Label for='exampleText'>Case Narrative</Label>
    //       <Input
    //         type='textarea'
    //         name='text'
    //         id='exampleText'
    //         aria-rowcount={20}
    //         onChange={(e) => setCaseNarrative(e.target.value)}
    //       />
    //     </FormGroup>
    //     <FormGroup>
    //       <Label for='exampleText'>Reporters Comment</Label>
    //       <Input
    //         type='textarea'
    //         name='text'
    //         id='exampleText'
    //         onChange={(e) => setReportersComment(e.target.value)}
    //       />
    //     </FormGroup>

    // <Button
    //   onClick={() => {
    //     handleSubmit();
    //   }}
    //   style={{
    //     position: 'relative',
    //     left: '1043px',
    //   }}>
    //   Submit
    // </Button>
    //   </Form>
    // </div>
  );
};
const mapStateToProps = (state) => ({
  summary: state.summary,
});
export default connect(mapStateToProps, { submitSummary })(Summary);
