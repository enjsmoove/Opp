/**
 *
 * Header
 *
 */

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

// import styled from 'styled-components';
import HeaderLink from './HeaderLink';
import NavBar from './NavBar';

import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Header extends Component {
  render() {
    // const { industries, browseMode } = this.props;

    return (
      <div>
        {/* <A href="https://twitter.com/mxstbr">
          <Img src={Banner} alt="react-boilerplate - Logo" />
        </A> */}
        <NavBar>
          <HeaderLink onClick={() => console.log('clicked')} to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/browse">
            <FormattedMessage {...messages.browse} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}
// s

export default Header;
