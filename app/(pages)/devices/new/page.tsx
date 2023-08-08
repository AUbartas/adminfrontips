
'use client'
import React from 'react';
import styles from "../../../page.module.css";
import {Input, AutoComplete, Checkbox, Button } from 'antd';
import Column from 'antd/es/table/Column';

const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

const devicenew = () => {
  return (
    <div>
      <div className={styles.pageInfoContainer}>
    <h1 className={styles.h1}>Device settings</h1>
      </div>
      <div className={styles.sidecontainer} style={{flexDirection:'column'}}>
        <div>
        <p>Device SN</p>
        <AutoComplete
          style={{ width: 200 }}
        />
        </div>
        <div>
            <p>Modification</p>
        <AutoComplete
          style={{ width: 200 }}
        />
        </div>
      
      <p>Device ID</p>
        <AutoComplete
          style={{ width: 200 }}
        />
      <p>Partner:</p>
        <AutoComplete
          style={{ width: 200 }}
        />
      <p>Customer:</p>
        <AutoComplete
          style={{ width: 200 }}
        />
        </div>
    <div className={styles.sidecontainer} style={{flexDirection:'column'}}>
    <p>Device type</p>
        <AutoComplete
          style={{ width: 200 }}
        />
    <p>Is this a test device? (Will connect to the test server)</p>
        <Checkbox onChange={onChange}></Checkbox>
    <p>Is free device?</p>
        <Checkbox onChange={onChange}></Checkbox>
        <p>Device FW (firmware) type</p>
        <AutoComplete
          style={{ width: 200 }}
        />
        <p>Relay activation time after test (seconds)</p>
        <AutoComplete
          style={{ width: 200 }}
        />
        <p>Allow access without valid alcohol test(simple access)</p>
        <Checkbox onChange={onChange}></Checkbox>
        <p>Wiegand port 1</p>
        <div><Checkbox onChange={onChange}>RFID external reader next to breathalyzer</Checkbox>
        <Checkbox onChange={onChange}>RFID at the gate (entrance)</Checkbox>
        <Checkbox onChange={onChange}>RFID at the gate (exit)</Checkbox></div>
        
        <p>Wiegand port 2</p>
        <div><Checkbox onChange={onChange}>Device connected to external access controller (default)</Checkbox>
        <Checkbox onChange={onChange}>RFID at the gate (entrance)</Checkbox>
        <Checkbox onChange={onChange}>RFID at the gate (exit)</Checkbox></div>
        
    </div>

    <div className={styles.sidecontainer} style={{display:'flex', flexDirection:'column'}}>
        <p>Use company time zone</p>
        <Input
        style={{ width: 200 }}
        disabled />
        <p>Address</p>
        <Input
        style={{ width: 200 }}
        disabled />
        <p>Additional information</p>
        <AutoComplete
          style={{ width: 200 }}
        />
        <p>Phone number</p>
        <Input
        style={{ width: 200 }}
        disabled />
        <p>Device language</p>
        <AutoComplete
          style={{ width: 200 }}
        />
    </div>
    <div className={styles.sidecontainer} style={{display:'flex', flexDirection:'column'}}>
        <p>WiFi MAC address</p>
        <Input
        style={{ width: 200 }}
        disabled />
        <p>WiFi name (SSID)</p>
        <Input
        style={{ width: 200 }}
         />
        <p>WiFi password</p>
        <AutoComplete
          style={{ width: 200 }}
        />
    </div>
    <div className={styles.sidecontainer} style={{display:'flex', flexDirection:'column'}}>
        <p>IP address</p>
        <Input
        style={{ width: 200 }}/>
        <p>Port</p>
        <Input
        style={{ width: 200 }}
         />
        <p>Connection duration</p>
        <AutoComplete
          style={{ width: 200 }}
        />
    </div>
    <div className={styles.sidecontainer} style={{display:'flex', flexDirection:'column'}}>
        <p>APN</p>
        <Input
        style={{ width: 200 }} />
        <p>User</p>
        <Input
        style={{ width: 200 }}
         />
        <p>Password</p>
        <AutoComplete
          style={{ width: 200 }}
        />
        <p>Authentication type</p>
        <AutoComplete
          style={{ width: 200 }}
        />
        <Button style={{width:70, marginTop:20}}>SAVE</Button>
    </div>
    </div>
    
  );
};

export default devicenew;