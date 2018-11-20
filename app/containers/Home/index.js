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
import { makeSelectIndustries } from 'containers/App/selectors';
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
    const { industries } = this.props;
    // const industryListProps = {
    //   loading,
    //   error,
    //   industries,
    // };
    console.log(`props are${industries}`);

    return (
      <div>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Description of Home" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Home.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onInit: PropTypes.func,
  industries: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
  industries: makeSelectIndustries(),
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
