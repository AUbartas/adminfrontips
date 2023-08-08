'use client'

import React, {useState} from 'react';
import styles from "../../../page.module.css";
import {Menu} from 'antd';
import type { MenuProps } from 'antd';
import Link from 'next/link'

const items: MenuProps['items'] = [
  {
    label: (
      <Link href="/devices/versions" >
        Versions
      </Link>
    ),
    key: 'versions',
  },
  {
    label: (
        <Link href="/devices/actions" >
          Actions
        </Link>
      ),
      key: 'actions',
  },
];

const deviceversions = () => {
  const [current, setCurrent] = useState('versions');
    const onClick = (e: any) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
  return (
    <div>
      <div className={styles.pageInfoContainer}>
        <h1 className={styles.h1}>Device versions</h1>
        <Menu style={{ marginBottom:-56,marginRight:-30, minWidth: 200, }} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      </div>
      <div className={styles.maincontainer}></div>
    </div>
  );
};

export default deviceversions;