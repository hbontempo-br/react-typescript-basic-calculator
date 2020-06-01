import React from 'react';
import { render } from '@testing-library/react';

import { SimpleButton } from '..';

describe('<Button  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<SimpleButton />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
