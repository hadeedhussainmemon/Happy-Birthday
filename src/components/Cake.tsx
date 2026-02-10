import React from 'react';
import styles from './Cake.module.css';

const Cake = () => {
    return (
        <div className={styles.cake}>
            <div className={styles.plate}></div>
            <div className={`${styles.layer} ${styles.layerBottom}`}></div>
            <div className={`${styles.layer} ${styles.layerMiddle}`}></div>
            <div className={`${styles.layer} ${styles.layerTop}`}></div>
            <div className={styles.icing}></div>

            {/* Sprinkles */}
            <div className={styles.sprinkles}>
                <div className={styles.sprinkle}></div>
                <div className={styles.sprinkle}></div>
                <div className={styles.sprinkle}></div>
                <div className={styles.sprinkle}></div>
                <div className={styles.sprinkle}></div>
            </div>

            <div className={`${styles.drip} ${styles.drip1}`}></div>
            <div className={`${styles.drip} ${styles.drip2}`}></div>
            <div className={`${styles.drip} ${styles.drip3}`}></div>

            {/* Cherry on top */}
            <div className={styles.cherry}></div>

            <div className={styles.candle}>
                <div className={styles.flame}></div>
            </div>
        </div>
    );
};

export default Cake;
