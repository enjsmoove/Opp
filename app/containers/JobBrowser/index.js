/**
 *
 * JobBrowser
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
import { makeSelectJobPosts } from 'containers/OpportunityBrowser/selectors';
import JobView from 'components/JobView';
import makeSelectJobBrowser from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class JobBrowser extends React.Component {
  render() {
    const { jobPosts } = this.props;
    return (
      <div>
        <Helmet>
          <title>JobBrowser</title>
          <meta name="description" content="Description of JobBrowser" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <JobView>{jobPosts}</JobView>
      </div>
    );
  }
}

JobBrowser.propTypes = {
  dispatch: PropTypes.func.isRequired,
  jobPosts: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const mapStateToProps = createStructuredSelector({
  jobbrowser: makeSelectJobBrowser(),
  jobPosts: makeSelectJobPosts(),
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

const withReducer = injectReducer({ key: 'jobBrowser', reducer });
const withSaga = injectSaga({ key: 'jobBrowser', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(JobBrowser);
