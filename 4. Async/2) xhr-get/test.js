import mock from 'xhr-mock';
import xhrGet from './index';

describe('xhr-get', () => {
  beforeAll(() => {
    mock.setup();
  });
  test('should be function', () => {
    expect(typeof xhrGet).toBe('function');
  });
  it('should set header', async () => {
    expect.assertions(1);
    mock.get('/test', ((request, response) => {
      expect(request.header('content-type')).toBe('application/json');
      return response.status(200).body("twat");
    }));
    await xhrGet('/test');
  });
  describe('should resolve data', () => {
    it('(status 200)', () => {
      expect.assertions(1);
      const testData = { test: 1 };

      mock.get('/200', {
        status: 200,
        body: JSON.stringify(testData),
      });

      return xhrGet('/200').then(data => expect(data).toEqual(testData));
    });
    it('should return data (status 201)', () => {
      expect.assertions(1);

      const testData = { test: 1 };

      mock.get('/201', {
        status: 201,
        body: JSON.stringify(testData),
      });

      return xhrGet('/201').then(data => expect(data).toEqual(testData));
    });
  });
  describe('should resolve error', () => {
    it('status(400)', () => {
      expect.assertions(1);
      const testData = { message: 'client error' };

      mock.get('/400', {
        status: 400,
        body: JSON.stringify(testData),
      });

      return xhrGet('/400').catch(err => expect(err).toEqual(testData));
    });
    it('status(500)', () => {
      expect.assertions(1);
      const testData = { message: 'server error' };

      mock.get('/500', {
        status: 500,
        body: JSON.stringify(testData),
      });

      return xhrGet('/500').catch(err => expect(err).toEqual(testData));
    });
  });
  afterAll(() => {
    mock.teardown();
  });
});
