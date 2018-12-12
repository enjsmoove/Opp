/**
 *
 * Home
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectIndustries,
  makeSelectLoading,
  makeSelectError,
  makeSelectIndustry,
  makeSelectBrowseMode,
} from 'containers/App/selectors';
// import IndustryView from 'components/IndustryView/index';
import OpportunityBrowser from 'containers/OpportunityBrowser/Loadable';
import makeSelectHome from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadIndustries } from './actions';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class Home extends Component {
  componentDidMount() {
    this.props.onInit();
  }
  render() {
    const { loading, error, industries } = this.props;
    const industryListProps = {
      loading,
      error,
      industries,
    };

    return (
      <div>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Description of Home" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <OpportunityBrowser {...industryListProps} />
      </div>
    );
  }
}

Home.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onInit: PropTypes.func,
  industry: PropTypes.string,
  browseMode: PropTypes.number,
  industries: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
  industries: makeSelectIndustries(),
  industry: makeSelectIndustry(),
  loading: makeSelectLoading(),
  browseMode: makeSelectBrowseMode(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onInit: () => dispatch(loadIndustries()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Home);
