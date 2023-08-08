import React from 'react';
import styles from "../../page.module.css"
import { AutoComplete } from 'antd';

const Remotecontrol = () => {
  return (
    <div>
      <div className={styles.pageInfoContainer}>
        <h1 className={styles.h1}>Devices remote control</h1>
      </div>
      <div className={styles.maincontainer}>
        <p>Device</p>
        <AutoComplete
          style={{ width: 200 }}
          placeholder="Devices"
        />
      </div>
    </div>
  );
};

export default Remotecontrol;