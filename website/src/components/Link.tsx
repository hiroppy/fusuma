import { Link as LinkComponent } from '@chakra-ui/react';

export const Link = ({ children, href }) => (
  <LinkComponent isExternal color="green.700" href={href}>
    {children}
  </LinkComponent>
);
