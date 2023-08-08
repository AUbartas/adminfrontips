import React from 'react';
import styles from "../../page.module.css"
import { Button, AutoComplete } from 'antd';

export default function Statistics() {
  return (
    <div>
      <div className={styles.pageInfoContainer}>   
      <h1 className={styles.h1}>Statistics</h1>
    </div>
     <div className={styles.topcontainer}>
      <AutoComplete
      style={{ width: 200 }}
      placeholder="Select customer"
      ></AutoComplete>
      <div style={{display:'flex', alignItems:'center'}}>
      <p style={{marginRight:20}}>Reports:</p>
      <Button>Current week</Button>
      <Button style={{marginLeft:20}}>Previous week</Button>
      <Button style={{marginLeft:20}}>Current month</Button>
      <Button style={{marginLeft:20}}>Previous month</Button>
      <Button style={{marginLeft:20}}>Last 24 hours</Button>
      </div>
     </div>
    <div className={styles.maincontainer}>
    </div>
    </div>
  );
};
