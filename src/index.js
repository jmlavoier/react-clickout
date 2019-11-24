import { useEffect, useRef } from 'react';

const defaultEvents = ['mousedown', 'touchstart'];

const useClickout = (events = defaultEvents) => {
  const refWrap = useRef();
  let handleClickout = () => {};

  const handleClick = (event) => {
    const isOut = !!refWrap.current && !refWrap.current.contains(event.target);
    if (isOut) handleClickout();
  };

  const bindClickout = (clickoutFn) => {
    handleClickout = clickoutFn;
  };

  useEffect(() => {
    events.forEach((event) => {
      document.addEventListener(event, handleClick);
    });

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, handleClick);
      });
    };
  });

  return [refWrap, bindClickout];
};

export default useClickout;
