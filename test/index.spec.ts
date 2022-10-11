import { checkLocales } from '../src';

describe('index', () => {
  describe('checkLocales', () => {
    it('should return a string containing the message', () => {
      const message = 'Hello';

      const result = checkLocales();

      expect(result).toMatch(message);
    });
  });
});
