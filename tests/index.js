import React from 'react';
import { act } from 'react-dom/test-utils';
import { shallow } from 'enzyme';

import useClickout from '../src';

describe('use-clickout', () => {
  it('should call handleClickout event', () => {
    const clickFn = jest.fn();

    const Wrapper = () => {
      const [refWrap] = useClickout({ handleClickout: clickFn });

      return (
        <div>
          <div className="in" ref={refWrap}>click in</div>
          <div className="out">
            click out
          </div>
        </div>
      );
    };

    const wrapper = shallow(<Wrapper />);
    act(() => {
      wrapper.find('.out').get(0).click();
    });

    expect(clickFn).toHaveBeenCalled();
  });
});
