'use client'
import React, {useState} from 'react';
import styles from "../../../page.module.css"
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import Link from 'next/link'

const items: MenuProps['items'] = [
  {
    label: (
      <Link href="/servicedesk/new" >
        New ticket
      </Link>
    ),
    key: 'new',
  },
  {
    label: (
        <Link href="/servicedesk/settings" >
          Settings
        </Link>
      ),
      key: 'settings',
  },
  {
    label: (
        <Link href="/servicedesk/reports" >
          Reports
        </Link>
      ),
      key: 'reports',
  },
];

const sdsettings = () => {
  const [current, setCurrent] = useState('settings');
  const onClick = (e: any) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <div>
      <div className={styles.pageInfoContainer}>
        <h1 className={styles.h1}>Service Desk Settings</h1>
        <Menu style={{ marginBottom:-56, marginRight:-200, minWidth: 450, }} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      </div>
      <div className={styles.maincontainer}></div>
    </div>
  );
};

export default sdsettings;