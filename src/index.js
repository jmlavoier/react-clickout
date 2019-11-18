import { useRef } from 'react';

const useClickout = () => {
  const refWrap = useRef();

  const handleClickout = () => {};

  return {
    refWrap,
    handleClickout,
  };
};

export default useClickout;
