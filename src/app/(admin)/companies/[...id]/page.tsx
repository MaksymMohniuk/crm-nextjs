'use client';

import Header from "@/components/header";
import { notFound } from "next/navigation";
import React, { useEffect } from "react";

export interface PageProps {
    params: {id : string};
}

export default function Page({ params }: PageProps) {
  useEffect(() => {
    const id = Number.parseInt(params.id);
    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id])
  return (
    <>
      <Header>Companies ({params.id})</Header>
    </>
  );
}