'use client'
import React, { useState } from 'react';
import styles from "../../../page.module.css"
import {Button, DatePicker, Space, AutoComplete, Checkbox, Menu} from 'antd';
import Link from 'next/link'
import type { MenuProps } from 'antd';


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

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

export default function Servicedesknew() {
  const [current, setCurrent] = useState('new');
    const onClick = (e: any) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
  return (
    <div>
      <div className={styles.pageInfoContainer}>
      <h1 className={styles.h1}>New ticket</h1>
      <Menu style={{marginRight:-200, marginBottom:-56, minWidth:450}} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    </div>
    <div className={styles.maincontainer}>
      <p>Ticket type</p>
      <AutoComplete
    style={{ width: 200 }}
  />
      <p>Ticket level</p>
      <AutoComplete
    style={{ width: 200 }}
  />
      <p>Area</p>
      <AutoComplete
    style={{ width: 200 }}
  />
      <p>Date</p>
      <Space direction="vertical"> 
    <DatePicker style={{ width: 200 }} onChange={onChange} />
      </Space>

      <p>Customer</p>
        <AutoComplete
      style={{ width: 200 }}
    />
      <p>Inform customer</p>
      <Checkbox onChange={onChange}></Checkbox>
      <p>Device</p>
      <AutoComplete
    style={{ width: 200 }}
  />
      <p>Problem/task</p>
      <AutoComplete
    style={{ width: 200 }}
  />
      <p>Agent</p>
      <AutoComplete
    style={{ width: 200 }}
  />
      <p>Supervisor</p>
      <AutoComplete
    style={{ width: 200 }}
  />
      <div><Button style={{marginTop:20}}>SAVE</Button></div>
    </div>
    </div>
    
  );
}