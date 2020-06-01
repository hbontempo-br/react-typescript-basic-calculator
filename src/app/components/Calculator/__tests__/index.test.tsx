import React from 'react';
import { render } from '@testing-library/react';

import { Calculator } from '..';

describe('<Calculator  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Calculator />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
