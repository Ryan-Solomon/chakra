import React, { FC } from 'react';
import { Link, Text } from '@chakra-ui/react';

type TProps = {
  isLast: boolean;
  to: string;
};

export const MenuItem: FC<TProps> = ({
  children,
  isLast,
  to = '/',
  ...rest
}) => {
  return (
    <Link>
      <Text display='block' {...rest}>
        {children}
      </Text>
    </Link>
  );
};
