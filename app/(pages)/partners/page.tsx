'use client'
import React from 'react';
import styles from "../../page.module.css"
import { Button, AutoComplete } from 'antd';
import {Pagination} from 'antd';

const Partners = () => {
  return (
    <div>
      <div className={styles.pageInfoContainer}>
        <h1 className={styles.h1}>Partners page</h1>
      </div>
      <div className={styles.topcontainer}>
        <AutoComplete
          style={{ width: 200 }}
          placeholder="Partner name"
        />
        <Button>
          SEARCH BY PARTNER
        </Button>
        <Button href='/partners/new'>
          CREATE A NEW PARTNER
        </Button>
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
  
export default Partners;