import React from 'react';
import { Company, getCompany } from '../../../../../lib/api';
import getQueryClient from '../../../../../lib/utils/getQueryClient';
import Header from '../../../../../components/header';

// Оновлюємо тип PageProps, враховуючи, що params — це Promise
export interface PageProps {
  params: Promise<{ id: string }>; // Змінено на Promise
}

export default async function Page({ params }: PageProps) {
  const queryClient = getQueryClient();

  // Оскільки params — це Promise, розв’язуємо його
  const resolvedParams = await params;
  const companyId = resolvedParams.id;

  await queryClient.prefetchQuery({
    queryKey: ['companies', companyId],
    queryFn: () => getCompany(companyId, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const company = queryClient.getQueryData(['companies', companyId]) as Company;

  return <Header>{company?.title}</Header>;
}