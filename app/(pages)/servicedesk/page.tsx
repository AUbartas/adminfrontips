'use client'
import React, { useState } from 'react';
import styles from "../../page.module.css"
import {Pagination, AutoComplete, DatePicker, Space, Menu} from 'antd';
import dayjs from 'dayjs';
import Link from 'next/link'
import type { MenuProps } from 'antd';

const { RangePicker } = DatePicker;

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

const onRangeChange = (dates: any, dateStrings: any) => {
  if (dates) {
    console.log("From: ", dates[0], ", to: ", dates[1])
    console.log("From: ", dateStrings[0], ", to: ", dateStrings[1])
  } else {
    console.log("Clear")
  }
}

const rangePresets = [
  { label: "Last 7 Days", value: [dayjs().add(-7, "d"), dayjs()] },
  { label: "Last 14 Days", value: [dayjs().add(-14, "d"), dayjs()] },
  { label: "Last 30 Days", value: [dayjs().add(-30, "d"), dayjs()] },
  { label: "Last 90 Days", value: [dayjs().add(-90, "d"), dayjs()] }
]


export default function Servicedesk() {
const [current, setCurrent] = useState('');
    const onClick = (e: any) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
  return (
    <div>
      <div className={styles.pageInfoContainer}>
        <h1 className={styles.h1}>Servicedesk page</h1>
        <Menu style={{ marginBottom:-56, marginRight:-200, minWidth: 450, }} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      </div>
      <div className={styles.topcontainer}>
        <div style={{display:'flex', alignItems:'center',}}>
        <p>Customers</p>
        <AutoComplete
          style={{ width: 150, marginLeft:15 }}
          placeholder="Select customer"
        /></div>
        <div style={{display:'flex', alignItems:'center',}}>
          <p>Partner</p>
        <AutoComplete
          style={{ width: 150, marginLeft:15 }}
          placeholder="Partner"
        />
        </div>
        <div style={{display:'flex', alignItems:'center',}}>
          <p>Incident time</p>
        <Space style={{ width: 150, marginLeft:15 }} direction="vertical" size={12}>
    <RangePicker onChange={onRangeChange} />
  </Space>
        </div>
        <div style={{display:'flex', alignItems:'center',}}>
          <p>Level</p>
        <AutoComplete
          style={{ width: 150, marginLeft:15 }}
          placeholder="Level"
        />
        </div>
        
        <div style={{display:'flex', alignItems:'center',}}>
          <p>Ticket type</p>
        <AutoComplete
          style={{ width: 150, marginLeft:15 }}
          placeholder="Ticket type"
        />
        </div>
        <div style={{display:'flex', alignItems:'center',}}>
          <p>Status</p>
        <AutoComplete
          style={{ width: 150, marginLeft:15 }}
          placeholder="Status"
        />
        </div>
        
        </div>
        <div className={styles.pagination}>
      <Pagination
     total={50} 
     showTotal={(total, range) => `Showing ${range[0]}-${range[1]} of ${total} items`}
     showQuickJumper
     /></div>
      <div className={styles.maincontainer}> 
      </div>
    </div>
  );
}