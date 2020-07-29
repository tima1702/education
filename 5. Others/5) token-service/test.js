import TokenService from './index';

let tokenService = null;
describe('token-service', () => {
  beforeAll(() => {
    tokenService = new TokenService();
  });
  test('should be TokenService', () => {
    expect(tokenService).toBeInstanceOf(TokenService);
  });
  describe('should have methods', () => {
    test('tokenService.subscribe', () => {
      expect(typeof tokenService.subscribe).toBe('function');
    });
    test('tokenService.setToken', () => {
      expect(typeof tokenService.setToken).toBe('function');
    });
    test('tokenService.removeToken', () => {
      expect(typeof tokenService.removeToken).toBe('function');
    });
    test('tokenService.getToken', () => {
      expect(typeof tokenService.getToken).toBe('function');
    });
  });
  describe('should work', () => {
    beforeEach(() => {
      tokenService = new TokenService();
    });
    test('should run subscriber after setToken with new value', () => {
      const mockSubscriber = jest.fn(() => {});
      tokenService.subscribe(mockSubscriber);
      tokenService.setToken('test');
      expect(mockSubscriber.mock.calls.length).toBe(1);
      expect(mockSubscriber.mock.calls[0][0]).toBe('test');
    });
    test('should run subscriber after removeToken with null', () => {
      const mockSubscriber = jest.fn(() => {});
      tokenService.subscribe(mockSubscriber);
      tokenService.removeToken();
      expect(mockSubscriber.mock.calls.length).toBe(1);
      expect(mockSubscriber.mock.calls[0][0]).toBe(null);
    });
    test('should set token', () => {
      const test = 'test';
      tokenService.setToken(test);
      expect(tokenService.getToken()).toBe(test)
    });
    test('should remove token (token should be null)', () => {
      tokenService.removeToken();
      expect(tokenService.getToken()).toBe(null)
    });
  });
});
