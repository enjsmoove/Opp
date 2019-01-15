/**
 *
 * JobViewer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectJobViewer from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class JobViewer extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>JobViewer</title>
          <meta name="description" content="Description of JobViewer" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

JobViewer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  jobviewer: makeSelectJobViewer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'jobViewer', reducer });
const withSaga = injectSaga({ key: 'jobViewer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(JobViewer);
