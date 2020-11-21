import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.css"

import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { initializeIcons } from 'office-ui-fabric-react';
import { logout } from "../../utils/auth";
import { navigate } from "gatsby"

const overflowProps = { ariaLabel: 'More commands' };

initializeIcons();

const CommandBarBasicExample = () => {
  return (
      <div>
        <CommandBar
            items={_items}
            // overflowItems={_overflowItems}
            // overflowButtonProps={overflowProps}
            farItems={_farItems}
            // ariaLabel="Use left and right arrow keys to navigate between commands"
        />
      </div>
  );
};

const _items = [
  {
    key: 'home',
    text: 'Home',
    iconProps: { iconName: 'Home' },
    onClick: ()=> navigate(`/`),
  },
  {
    key: 'register',
    text: 'Register',
    iconProps: { iconName: 'AddFriend' },
    onClick: ()=> navigate(`/app/register`),
  },
  {
    key: 'profile',
    text: 'Profile',
    iconProps: { iconName: 'UserOptional' },
    onClick: ()=> navigate(`/app/profile`),
  },
  {
    key: 'details',
    text: 'Details',
    iconProps: { iconName: 'WebAppBuilderFragment' },
    onClick: ()=> navigate(`/app/details`),
  },
  {
    key: 'apps',
    text: 'Apps',
    cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
    iconProps: { iconName: 'Waffle' },
    subMenuProps: {
      items: [
        {
          key: 'smogCounter',
          text: 'Smog Counter',
          iconProps: { iconName: 'Duststorm' },
          onClick: ()=> navigate(`/app/airly`),
        },
        {
          key: 'memoryGame',
          text: 'Memory game',
          iconProps: { iconName: 'ArrangeSendToBack' },
          onClick: ()=> navigate(`/app/memory`),
        },
      ],
    },
  },
];

const _overflowItems = [
  { key: 'move', text: 'Move to...', onClick: () => console.log('Move to'), iconProps: { iconName: 'MoveToFolder' } },
  { key: 'copy', text: 'Copy to...', onClick: () => console.log('Copy to'), iconProps: { iconName: 'Copy' } },
  { key: 'rename', text: 'Rename...', onClick: () => console.log('Rename'), iconProps: { iconName: 'Edit' } },
];

const _farItems = [
  {
    key: 'logOut',
    text: 'Logout',
    // This needs an ariaLabel since it's icon-only
    // ariaLabel: 'Logout',
    iconOnly: false,
    iconProps: { iconName: 'SignOut' },
    onClick:  () => logout(() => navigate(`/app/login`)),
  },
  // {
  //   key: 'info',
  //   text: 'Info',
  //   // This needs an ariaLabel since it's icon-only
  //   ariaLabel: 'Info',
  //   iconOnly: true,
  //   iconProps: { iconName: 'Info' },
  //   onClick: () => console.log('Info'),
  // },
];

const Header = () => (
    <header className={styles.header}>
      <div className={styles[`header__wrap`]}>
        <h1 className={styles[`header__heading`]}>
          <Link
              to="/"
              className={`${styles[`header__link`]} ${
                  styles[`header__link--home`]
              }`}
          >
            Gatsby Auth
          </Link>
        </h1>
        {/*<nav role="main" className={styles[`header__nav`]}>*/}
        {/*  <Link to="/" className={styles[`header__link`]}>*/}
        {/*//     Home*/}
        {/*//   </Link>*/}
        {/*//   <Link to="/app/register" className={styles[`header__link`]}>*/}
        {/*//     Register*/}
        {/*//   </Link>*/}
        {/*//   <Link to="/app/profile" className={styles[`header__link`]}>*/}
        {/*//     Profile*/}
        {/*//   </Link>*/}
        {/*//   <Link to="/app/memory" className={styles[`header__link`]}>*/}
        {/*//     Memory Game*/}
        {/*//   </Link>*/}
        {/*  <Link to="/app/airly" className={styles[`header__link`]}>*/}
        {/*    Airly*/}
        {/*  </Link>*/}
        {/*  <Link to="/app/details" className={styles[`header__link`]}>*/}
        {/*    Details*/}
        {/*  </Link>*/}
        {/*</nav>*/}

      </div>
      <div style={{backgroundColor: 'white'}}>
        <div style={{maxWidth: '1024px', margin: '0 auto'}}>
          <div style={{margin: '0 -14px 0 -24px'}}>
            <CommandBarBasicExample />
          </div>
        </div>
      </div>
    </header>
)

export default Header

