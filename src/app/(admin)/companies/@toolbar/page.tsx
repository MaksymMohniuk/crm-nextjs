import React from 'react';

import Toolbar from '../../../../components/toolbar';
import SearchInput from '../../../../components/search-input';
import AddPromotionButton from '../../../../components/add-promotion-button';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <Toolbar action={<AddPromotionButton companyId={params.id} />}>
      <SearchInput />
    </Toolbar>
  );}