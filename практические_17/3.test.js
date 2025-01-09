const getMonth = require('./functions-here.js');

test('get 10 month', () => {
    expect(getMonth(10)).toBe('октябрь');
    expect(getMonth(13)).toBe('неизвестно');
});
