import GameConnection from './gameConnection';

describe('Game Connection', () => {
  test('should connect to socket', () => {
    const socket = GameConnection.createConnection();
    expect(socket).toBe(GameConnection.socket);
  });
});