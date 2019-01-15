/**
 *
 * OpportunityBrowser
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import JobBrowser from 'containers/JobBrowser/Loadable';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectOpportunityBrowser, {
  makeSelectBrowseMode,
  makeSelectJobPosts,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadJobPosts } from '../Home/actions';

/* eslint-disable react/prefer-stateless-function */
export class OpportunityBrowser extends React.Component {
  pickIndustry(e, i) {
    console.log('selected', e, i);
    this.props.loadJobPosts([e, i]);
  }
  render() {
    const { industries, browseMode } = this.props;
    return (
      <div>
        <center>
          <Helmet>
            <title>IndustryBrowser</title>
            <meta name="description" content="Description of IndustryBrowser" />
          </Helmet>
          <FormattedMessage {...messages.header} />
          <br />
          {browseMode === 0 && industries ? (
            industries.map((name, index) => (
              <button
                onClick={() => this.pickIndustry(name, index)}
                onKeyDown={() => this.pickIndustry(name, index)}
                name="fuck"
                key={index.toString()}
              >
                {name}
              </button>
            ))
          ) : (
            <JobBrowser />
          )}
        </center>
      </div>
    );
  }
}

OpportunityBrowser.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  industry: PropTypes.string,
  loadJobPosts: PropTypes.func,
  browseMode: PropTypes.number,
  // jobPosts: PropTypes.array,
  industries: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
};

const mapStateToProps = createStructuredSelector({
  opportunitybrowser: makeSelectOpportunityBrowser(),
  browseMode: makeSelectBrowseMode(),
  jobPosts: makeSelectJobPosts(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadJobPosts: industry => dispatch(loadJobPosts(industry)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'opportunityBrowser', reducer });
const withSaga = injectSaga({ key: 'opportunityBrowser', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(OpportunityBrowser);
