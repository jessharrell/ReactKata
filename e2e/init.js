
const {startServer, stopServer} = require('./fake-web-server/server-fake');

const detox = require('detox');
const config = require('../package.json').detox;

jest.setTimeout(180000);

beforeAll(async () => {
    await startServer(9000);
    await detox.init(config);
});

afterAll(async () => {
    stopServer();
    await detox.cleanup();
});