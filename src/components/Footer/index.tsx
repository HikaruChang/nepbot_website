/**
 * @ Author: Hikaru
 * @ Create Time: 2023-02-16 04:16:28
 * @ Modified by: Hikaru
 * @ Modified time: 2023-03-30 21:13:05
 * @ Description: i@rua.moe
 */

import React from 'react';
import styles from './style.less';
import { ReactComponent as Popula } from '@/assets/brand/logo-popula.svg';
import { SiDiscord, SiGithub, SiGmail, SiMedium, SiTwitter } from 'react-icons/si';
import { TfiYoutube } from 'react-icons/tfi';

const Footer: React.FC = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.wrapper}>
        <div className={styles.snsContainer}>
          <div
            className={styles.snsItem}
          >
            <Popula className={styles.snsImage} />
          </div>
          <div
            className={styles.snsItem}
          >
            <SiGithub className={styles.snsImage} />
          </div>
          <div
            className={styles.snsItem}
          >
            <SiTwitter className={styles.snsImage} />
          </div>
          <div
            className={styles.snsItem}
          >
            <SiDiscord className={styles.snsImage} />
          </div>
          <div
            className={styles.snsItem}
          >
            <TfiYoutube className={styles.snsImage} />
          </div>
          <div
            className={styles.snsItem}
          >
            <SiMedium className={styles.snsImage} />
          </div>
          <div
            className={styles.snsItem}
            onClick={() => {
              window.open('mailto:hi@nepbot.org');
            }}
          >
            <SiGmail className={styles.snsImage} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer;
