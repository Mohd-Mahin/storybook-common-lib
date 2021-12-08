import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';
import './header.css';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>

    <div className="wrapper">
      <div>
      <eon-ui-button text="Button" icon="edit"></eon-ui-button>
      <eon-ui-contact-list headline="Contacts" role="list">
    <eon-ui-contact-list-item role="listitem">
      <eon-ui-link size="small" text="E.ON Website" href="https://www.eon.com" target="_blank"></eon-ui-link>
    </eon-ui-contact-list-item>
    <eon-ui-contact-list-item role="listitem">
      <eon-ui-link size="small" text="German E.ON Website" href="https://www.eon.de" target="_blank"></eon-ui-link>
    </eon-ui-contact-list-item>
  </eon-ui-contact-list>
  <eon-ui-slider
  scheme="turquoise"
  type="range"
  min-range="0"
  max-range="100"
  step="5"
  first-handle-start="25"
  second-handle-start="75"
></eon-ui-slider>
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <h1>Acme</h1>
      </div>
      <div>
        {user ? (
          <Button size="small" onClick={onLogout} label="Log out" />
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
