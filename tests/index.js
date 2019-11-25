/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';

import useClickout from '../src';

describe('use-clickout', () => {
  it('should call event', () => {
    const map = {};
    const mockFn = jest.fn();
    window.document.addEventListener = jest.fn((eventName, eventFn) => {
      map[eventName] = eventFn;
    });

    const Wrapper = () => {
      const [refWrap, bindClickout] = useClickout();

      bindClickout(mockFn);

      return (
        <div>
          <div className="in" ref={refWrap}>click in</div>
          <div className="out">
            click out
          </div>
        </div>
      );
    };

    // eslint-disable-next-line no-unused-vars
    const wrapper = mount(<Wrapper />);

    act(() => {
      map.mousedown({});
    });

    expect(mockFn).toHaveBeenCalled();
  });
});
