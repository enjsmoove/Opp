/**
 *
 * IndustryView
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function IndustryView(props) {
  // let industries = [];
  // if (props.industries)
  const { industries } = props;
  const renderIndustries = [];
  if (industries) {
    industries.forEach((name, index) => {
      renderIndustries.push(<li key={index.toString()}>{name}</li>);
    });
  }
  return (
    <div>
      <ul>{renderIndustries}</ul>
    </div>
  );
}

IndustryView.propTypes = {
  industries: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
};

export default IndustryView;
