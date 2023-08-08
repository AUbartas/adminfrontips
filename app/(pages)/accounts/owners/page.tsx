"use client"
import React from 'react';
import styles from "../../../page.module.css"
import { Menu, Button, AutoComplete } from 'antd';
import { useState } from 'react';
import Link from 'next/link'
import type { MenuProps } from 'antd';

const items: MenuProps['items'] = [
  {
    label: (
      <Link href="/accounts" >
        Partner accounts
      </Link>
    ),
    key: 'a',
  },
  {
    label: (
        <Link href="/accounts/customer" >
          Customer accounts
        </Link>
      ),
      key: 'b',
  },
  {
    label: (
        <Link href="/accounts/owners" >
          Owner accounts
        </Link>
      ),
      key: 'c',
  },
];


const Owner = () => {

const [current, setCurrent] = useState('c');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div>
      <div className={styles.pageInfoContainer}>
        <h1 className={styles.h1}>Owners accounts</h1>
        <Menu style={{ marginBottom:-56, minWidth: 450, marginRight:-40, }} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      </div>
      <div className={styles.topcontainer}>
        <div><AutoComplete
    style={{ width: 200 }}
    placeholder="..."
    />
    <Button style={{marginLeft:20}}>
    SEARCH
   </Button></div>
    <Button href='/accounts/owners/new'>
    NEW ACCOUNT
   </Button>
      </div>
      <div className={styles.maincontainer}>
      
      </div>
    </div>
  );
};

export default Owner;

