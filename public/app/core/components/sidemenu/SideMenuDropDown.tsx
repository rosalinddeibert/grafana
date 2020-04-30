import React, { FC } from 'react';
import _ from 'lodash';
import DropDownChild from './DropDownChild';
import { NavModelItem } from '@grafana/data';

interface Props {
  link: NavModelItem;
}

const SideMenuDropDown: FC<Props> = props => {
  const { link } = props;
  let childrenLinks: NavModelItem[] = [];
  if (link.children) {
    childrenLinks = _.filter(link.children, item => !item.hideFromMenu);
  }

  return (
    <ul className="dropdown-menu dropdown-menu--sidemenu" role="menu">
      {childrenLinks.map((child, index) => {
        return <DropDownChild child={child} key={`${child.url}-${index}`} />;
      })}
    </ul>
  );
};

export default SideMenuDropDown;
