'use client'
import React, {useState} from 'react';
import styles from "../../page.module.css";
import { Button, AutoComplete, InputNumber, Menu, Pagination } from 'antd';
import type { MenuProps } from 'antd';
import Link from 'next/link'

// FIXME

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

const onChange = (value: number) => {
  console.log("changed", value)
}

const Devices = () => {
   const [current, setCurrent] = useState('');
    const onClick = (e: any) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div>
      <div className={styles.pageInfoContainer}>
      <h1 className={styles.h1}>Devices page</h1>
      <Menu style={{ marginBottom:-56,marginRight:-30, minWidth: 200, }} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    </div>
    <div className={styles.tocontainer}>
      <div>
      <p>Customers</p>
      <AutoComplete
    style={{ width: 300, marginTop:-10, marginBottom:10  }}
    placeholder="Customer name"/>

    <p>Calibrated before</p>
    <InputNumber 
    style={{minWidth:60, marginTop:-15, marginBottom:10}} 
    min={1} max={99} 
    onChange={onChange} />

    <p>Calibration checked how many months ago</p>
    <InputNumber 
    style={{minWidth:60, marginTop:-15, marginBottom:10}} 
    min={1} max={99} 
    onChange={onChange} />

    <p>Metrology checked how many months ago</p>
    <InputNumber 
    style={{minWidth:60, marginTop:-15, marginBottom:10}} 
    min={1} max={99} 
    onChange={onChange} />
    
    <div style={{marginTop:20}}>
    <Button>FILTER</Button>
    <Button style={{marginLeft:20}}>SHOW ALL</Button>
    </div>
    </div>

    <div style={{marginTop:-135, marginLeft:50}}>
    <p>Device SN</p>
    <AutoComplete 
    style={{ width: 300, marginTop:-15, marginBottom:10 }} 
    placeholder="Enter device serial no. fragment" />

    <p>Text</p>
    <AutoComplete 
    style={{ width: 300, marginTop:-15, marginBottom:10 }} 
    placeholder="Name of the customer, device or processor" />

    <p>Partner</p>
    <AutoComplete 
    style={{ width: 300, marginTop:-15, marginBottom:10 }} 
    placeholder="Partner name" />
    </div>
    </div>
    <div className={styles.topcontainer}>
      <div>
      <div style={{marginBottom:20}}>
      <div style={{marginBottom:5}}>
    <Button style={{marginRight:5}} href='/devices/fastDeviceRelocation'>FAST DEVICE TRANSFER</Button>
    <Button href='/devices/listTransferAlcos'>DEVICE TRANSFER</Button>
    </div>
    <div>
    <Button style={{marginRight:5}} href='/devices/new'>ADD NEW DEVICE</Button>
    <Button>REGISTER DEVICE</Button>
    </div>
    </div>
    <div>
    <Button style={{marginRight:5}}>ALL</Button>
    <Button style={{marginRight:5}}>CUSTOMERS</Button>
    <Button style={{marginRight:5}}>INTERNAL</Button>
    <Button style={{marginRight:5}}>OFFLINE</Button>
    </div>
    </div>
      <div>
      <div style={{marginBottom:20}}>
      <div style={{marginBottom:5}}>
      <Button style={{marginRight:5}} href='/logs'>DEVICE LOGS</Button>
    <Button style={{marginRight:5}} href='/devices/measurments'>MEASURMENT DIAGNOSTICS</Button>
    <Button style={{marginRight:5}}>MAP</Button>
    </div>
    <div>
      <Button style={{marginRight:5}}>SERVICE MENU CODES</Button>
    <Button href='/devices/maintenance'>DEVICE MAINTENANCE</Button>
    </div>
    </div>
    <div> 
    <Button style={{marginRight:5}} href='/devices/metrologySheet'>METROLOGY CERTIFICATES</Button>
    <Button style={{marginRight:5}}>DEVICE LIST XLS</Button>
    <Button style={{marginRight:5}}>DEVICE HISTORY XLS</Button>
    <Button>DEVICES HISTORY TO EMAIL</Button>
    </div>
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
};
  
export default Devices;