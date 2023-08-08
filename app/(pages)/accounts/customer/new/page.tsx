'use client'
import React from 'react';
import styles from "../../../../page.module.css"
import {Button, AutoComplete } from 'antd';


const options = [
    { value: 'Lithuanian' },
    { value: 'Polish' },
    { value: 'English' },
    { value: 'Russian' },
    { value: 'Chinese' },
    { value: 'Japanese' },
  ];

const Newcustomer  = () => {

  return (
    <div>
      <div className={styles.pageInfoContainer}>
        <h1 className={styles.h1}>New customer account</h1>
      </div>
      <div className={styles.maincontainer}>
        <p>Name</p>
        <AutoComplete
    style={{ width: 400 }}
    />
        <p>Surname</p>
        <AutoComplete
    style={{ width: 400 }}
    />
        <p>Email</p>
        <AutoComplete
    style={{ width: 400 }}
    />
        <p>Password</p>
        <AutoComplete
    style={{ width: 400 }}
    />
        <p>Role</p>
        <AutoComplete
    style={{ width: 400 }}
    />
        <p>Customer</p>
        <AutoComplete
    style={{ width: 400 }}
    />
        
    <div>
        <p>Language</p>
    <AutoComplete
    style={{width: 400,}}
    options={options}
    defaultValue={'Lithuanian'}
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
  <p>Activatable customers</p>
      <AutoComplete
    style={{ width: 400 }}
    />
  </div>
    <div>
    <Button style={{marginTop:20}}>
    NEW ACCOUNT
   </Button>
   </div>
    
  </div>
    </div>
  );
};

export default Newcustomer;
