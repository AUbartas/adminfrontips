import React from 'react';
import styles from "../../page.module.css"
import { Button } from 'antd';

const Tools = () => {
  return (
    <div>
      <div className={styles.pageInfoContainer}>
      <h1 className={styles.h1}>Tools page</h1>
    </div>
    <div className={styles.maincontainer}>
    <Button>
    UNRECOGNISED EMPLOYEES PHOTO GALLERY
   </Button>
   <Button style={{marginLeft:20}}>
    COMPARISON OF MEASUREMENT RESULTS
   </Button>
    </div>
    </div>
  );
};
  
export default Tools;