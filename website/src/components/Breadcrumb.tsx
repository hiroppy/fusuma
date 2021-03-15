import { FC } from 'react';
import Link from 'next/link';
import { Breadcrumb as BreadcrumbComponent, BreadcrumbItem } from '@chakra-ui/react';

export type Props = {
  items: {
    name: string;
    path: string;
  }[];
};

export const Breadcrumb: FC<Props> = ({ items }) => (
  <BreadcrumbComponent color="blackAlpha.600" mt={4}>
    {items.map(({ name, path }) => (
      <BreadcrumbItem>
        <Link href={path}>{name}</Link>
      </BreadcrumbItem>
    ))}
  </BreadcrumbComponent>
);
