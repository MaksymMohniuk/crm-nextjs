'use client';

import React from 'react';
import PromotionForm from '../components/promotion-form';
import Modal, { ModalProps } from '../components/modal';

export interface PromotionFormModal extends ModalProps {
  companyId: string;
}

export default function PromotionFormModal({
  companyId,
  onClose,
  ...rest
}: PromotionFormModal) {
  return (
    <Modal {...rest} onClose={onClose}>
      <PromotionForm companyId={companyId} onSubmit={() => onClose()} />
    </Modal>
  );
}