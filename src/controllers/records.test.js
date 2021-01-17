const { fetchRecords } = require('./records');

jest.mock('../services/records');

const { fetchAggregatedRecords } = require('../services/records');

describe('Tests for fetchRecords', () => {
  it('should return an error when incorrect arguments are supplied', async () => {
    await expect(fetchRecords({})).rejects.toHaveProperty('statusCode', 400);
  });

  it('should return records when correct arguments are supplied', async () => {
    fetchAggregatedRecords.mockImplementationOnce(() => Promise.resolve([
      {
        key: 'TAKwGc6Jr4i8Z487',
        value: 'Getir Task',
        createdAt: new Date('2017-06-01T12:23:11.039+0000'),
        counts: [583, 743, 44],
      },
    ]));
    await expect(
      fetchRecords({
        startDate: '2016-02-02',
        endDate: '2019-02-02',
        minCount: 200,
        maxCount: 500,
      }),
    ).resolves.toHaveProperty('code', '0');
  });
});
