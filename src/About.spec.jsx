import React from 'react';
import { shallow } from 'enzyme';

import About from './About';

describe('About Page', () => {
  it('should render ', () => {
    const component = shallow(<About />);
    expect(component.text().length).toBeGreaterThan(0);
  });
});