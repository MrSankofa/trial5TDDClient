import React from 'react';
import Enzyme, {shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import MortgageCalculator from '../client/views/components/MortgageCalculator.jsx';

describe('A suite', function() {
  
  it('should render to static HTML', function() {
    expect(render(<MortgageCalculator />).text()).toEqual('Hello class');
  });
  it('should render without throwing an error', function() {
    expect(shallow(<MortgageCalculator />).contains(<div>Hello class</div>)).toBe(true);
  });
});
