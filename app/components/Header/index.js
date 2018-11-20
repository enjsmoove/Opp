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
    return (
      <div>
        {/* <A href="https://twitter.com/mxstbr">
          <Img src={Banner} alt="react-boilerplate - Logo" />
        </A> */}
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/login">
            <FormattedMessage {...messages.login} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}
// s

export default Header;
