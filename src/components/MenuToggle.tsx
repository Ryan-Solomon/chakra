import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';

type TProps = {
  toggle: () => void;
  isOpen: boolean;
};

export const MenuToggle: FC<TProps> = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <AiOutlineClose /> : <AiOutlinePlus />}
    </Box>
  );
};
