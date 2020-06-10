import React, { FC } from 'react';
import { connectWithStore } from 'app/core/utils/connectWithReduxStore';
import { StoreState } from 'app/types';

const rightMenuStyle = {
  right: 0,
  left: 'auto',
};

export const SignIn: FC<any> = ({ url }) => {
  const loginUrl = `login?redirect=${encodeURIComponent(url)}`;
  return (
    <div className="sidemenu-item dropdown">
      <a href={loginUrl} className="sidemenu-link" target="_self">
        <span className="icon-circle sidemenu-icon">
          <i className="fa fa-fw fa-sign-in" />
        </span>
      </a>
      <ul className="dropdown-menu dropdown-menu--sidemenu" role="menu" style={rightMenuStyle}>
        <li>
          <a href={loginUrl} target="_self">
            <i className="gicon gicon-user"></i>
            Sign In
          </a>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state: StoreState) => ({
  url: state.location.url,
});

export default connectWithStore(SignIn, mapStateToProps);
