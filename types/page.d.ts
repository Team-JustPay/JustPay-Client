import { NextPage } from 'next';
import { ComponentType, ReactElement, ReactNode } from 'react';

export type Page<P = {}> = NextPage<P> & {
  Layout?: ComponentType;
};
