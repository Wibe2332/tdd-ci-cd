const suma = require('./index');

test('suma 1 + 2 para dar 3', () => {
    expect(suma(1, 2)).toBe(3);
});
