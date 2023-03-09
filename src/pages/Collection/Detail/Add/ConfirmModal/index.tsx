/**
 * @ Author: Hikaru
 * @ Create Time: 2023-03-08 16:18:09
 * @ Modified by: Hikaru
 * @ Modified time: 2023-03-10 03:57:32
 * @ Description: i@rua.moe
 */

import React, { useState } from 'react';
import styles from './style.less';
import { useIntl } from 'umi';
import { FormInstance, Modal, Select, Spin, message } from 'antd';
import classNames from 'classnames';
import { Loading3QuartersOutlined } from '@ant-design/icons';

const ConfirmModal: React.FC<{
  form: FormInstance<any>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ form, isModalOpen, setIsModalOpen }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const [messageApi, contextHolder] = message.useMessage();

  const intl = useIntl();

  return (
    <Modal
      centered
      open={isModalOpen}
      className={styles.createModalContainer}
      closable={false}
      footer={null}
    >
      {contextHolder}
      <div className={styles.contentContainer}>
        <div className={styles.title}>
          {intl.formatMessage({
            id: 'collection.create.modal.title'
          })}
        </div>
        <div className={styles.description}>
          {intl.formatMessage({
            id: 'collection.create.modal.description'
          })}
        </div>
        <div className={styles.buttons}>
          <div
            className={styles.button}
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            {intl.formatMessage({
              id: 'collection.create.modal.button.cancel'
            })}
          </div>
          <div
            className={classNames(styles.button, styles.buttonPrimary)}
            onClick={async () => {
              setLoading(true);
              messageApi.open({
                type: 'success',
                content: 'Success',
                className: styles.message,
              });
            }}
          >
            {loading ? (
              <Spin
                indicator={
                  <Loading3QuartersOutlined
                    className={styles.loadingIcon}
                    spin
                  />
                }
              />
            ) : (
              intl.formatMessage({
                id: 'collection.create.modal.button.create'
              })
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
