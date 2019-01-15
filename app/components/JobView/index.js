/**
 *
 * JobItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import Job from './Job'
// import styled from 'styled-components';

function JobView(props) {
  console.log('props', props.children);
  // let job = <div />;
  if (props.children) {
    const jobs = props.children.map(job => (
      <div>
        <ul>
          {job.account.companyName}
          {job.jobTitle}
          {job.jobType} - {job.createdAt.substring(0, 10)}
          <a href={`jobs/${job.id}`}>More Info</a>
        </ul>
      </div>
    ));
    return <div>{jobs}</div>;
  }

  return <div />;
}

JobView.propTypes = {
  // job: PropTypes.any,
  children: PropTypes.array,
};

export default JobView;
