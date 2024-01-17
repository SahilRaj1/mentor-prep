"use client";
import { useState } from 'react';
import { Group, Code } from '@mantine/core';
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
  IconHelpOctagon,
  IconTag,
  IconArrowBadgeUp,
} from '@tabler/icons-react';
import classes from './NavbarSimple.module.css';
import classNames from 'classnames';

const data = [
  { link: '', label: 'Questions', icon: IconHelpOctagon },
  { link: '', label: 'Tags', icon: IconTag },
  { link: '', label: 'Rankings', icon: IconArrowBadgeUp },
];

export function NavbarSimple() {
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <a
      className={classNames("hover:text-violet-700",`${classes.link}${item.label === active ? ' active' : ''}`)}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classNames("flex flex-col justify-between",classes.navbar)}>
      <div className={classes.navbarMain}>
        {links}
      </div>

      <div className={classes.footer}>
        <a href="/" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>
        <a href="/" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}
