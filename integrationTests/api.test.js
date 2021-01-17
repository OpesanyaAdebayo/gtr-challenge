const supertest = require('supertest');
const { app, server } = require('../server');
const {
  INTERNAL_SERVER_ERROR, BAD_REQUEST, RESOURCE_NOT_FOUND, SUCCESS,
} = require('../src/util/constants/responses').RESPONSES;

jest.mock('../src/services/records');
const { fetchAggregatedRecords } = require('../src/services/records');

afterAll(async () => {
  server.close();
});

const request = supertest(app);

describe('General API Tests', () => {
  it('should respond with corrrect code if route is not found', async () => {
    await expect(
      request.post('/').send({}).set('Accept', 'application/json'),
    ).resolves.toHaveProperty('body.code', RESOURCE_NOT_FOUND.CODE);
  });
});
describe('POST /records', () => {
  it('should respond with corrrect code if invalid parameters are supplied', async () => {
    await expect(
      request.post('/records').send({}).set('Accept', 'application/json'),
    ).resolves.toHaveProperty('body.code', BAD_REQUEST.CODE);
  });
  it('should respond with internal server error if there is a database error', async () => {
    fetchAggregatedRecords.mockImplementationOnce(() => { throw new Error('error'); });
    await expect(
      request
        .post('/records')
        .send({
          startDate: '2016-02-02',
          endDate: '2019-02-02',
          minCount: 200,
          maxCount: 500,
        })
        .set('Accept', 'application/json'),
    ).resolves.toHaveProperty('body.code', INTERNAL_SERVER_ERROR.CODE);
  });
  it('should respond with database records if valid parameters are supplied', async () => {
    fetchAggregatedRecords.mockImplementationOnce(() => Promise.resolve([
      {
        key: 'TAKwGc6Jr4i8Z487',
        value: 'Getir Task',
        createdAt: new Date('2017-06-01T12:23:11.039+0000'),
        counts: [583, 743, 44],
      },
    ]));
    await expect(
      request
        .post('/records')
        .send({
          startDate: '2016-02-02',
          endDate: '2019-02-02',
          minCount: 200,
          maxCount: 500,
        })
        .set('Accept', 'application/json'),
    ).resolves.toHaveProperty('body.code', SUCCESS.CODE);
  });
});
