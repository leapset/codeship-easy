jest.unmock('../app/utils/StringUtils');

import StringUtils from '../app/utils/StringUtils';

describe('format name from parts', () => {
  it('adds first & last name to a single name', () => {
    const formattedName = StringUtils.joinName('Dinidu','de Silva');
    expect(formattedName).toBe('Dinidu de Silva');
  });
});
