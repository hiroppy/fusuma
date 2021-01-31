import { FC } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Breadcrumb } from './Breadcrumb';

export type Props = {
  title: string;
  children: React.ReactNode;
  paths?: {
    name: string;
    path: string;
  }[];
};

export const DocsLayout: FC<Props> = ({ title, children, paths = [] }) => (
  <Box textAlign="left">
    <Heading size="lg">{title}</Heading>
    <Breadcrumb
      items={[
        {
          name: 'home',
          path: '/',
        },
        {
          name: 'docs',
          path: '/docs',
        },
        ...paths,
      ]}
    />
    <Box mt={5}>{children}</Box>
  </Box>
);
