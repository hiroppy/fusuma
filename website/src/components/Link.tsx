import { Link as LinkComponent } from '@chakra-ui/react';

export const Link = ({ children, href }) => (
  <LinkComponent isExternal color="blue.600" href={href} borderBottom="2px solid">
    {children}
  </LinkComponent>
);
