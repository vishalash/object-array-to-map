const objectArrayToMap = require('./index.js');

describe('objectArrayToMap', () => {
    it('should group objects by key', () => {
        const arr = [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
            { id: 3, name: 'Alice' },
            { id: 4, name: 'Charlie' },
        ];
        const map = objectArrayToMap(arr, 'name');
        expect(map.size).toBe(3);
        expect(map.get('Alice')).toEqual([
            { id: 1, name: 'Alice' },
            { id: 3, name: 'Alice' },
        ]);
        expect(map.get('Bob')).toEqual([{ id: 2, name: 'Bob' }]);
        expect(map.get('Charlie')).toEqual([{ id: 4, name: 'Charlie' }]);
    });

    it('should return an empty map for an empty array', () => {
        const arr = [];
        const map = objectArrayToMap(arr, 'name');
        expect(map.size).toBe(0);
    });
});

