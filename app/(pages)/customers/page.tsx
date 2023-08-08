'use client'
import React from 'react';
import styles from "../../page.module.css"
import { Button, AutoComplete, Col, Row, Pagination } from 'antd';
import style from "./Customer.module.css"

const Customers = () => {
  return (
    <div>
      <div className={styles.pageInfoContainer}>
      <h1 className={styles.h1}>Customers page</h1>
    </div>
      <div className={styles.topcontainer}>
          <div style={{display:'flex',flexDirection:'column' }}>
            <div><AutoComplete
    style={{ width: 200 }}
    placeholder="Customer name"/>
   <Button style={{marginLeft:20}}>
    SEARCH
   </Button>
   </div>
   <Button style={{marginTop:20, width:250}} >
      CHECK EMPLOYEE RFID VALIDITY
      </Button>
      <Button style={{marginTop:10, width:250}}>
      COMPANIES EXCEL
      </Button>
   </div>
   <div style={{marginTop:-95}}>
     <Button>NEW CUSTOMER</Button>
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
  
export default Customers;