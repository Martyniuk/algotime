// 29.07
class TwoSum {
    constructor() {
        this._map = {};
        this._cache = {}; // ammortize complexity
    }
    
    add(number) {
        this._map[number] = this._map[number] ? this._map[number] + 1 : 1;
    }
    find(val) {
        if (this._cache[val])
            return true;
        
        for (let key in this._map) {
            const target = val - key;

            if (target !== parseInt(key)) {
                if (target in this._map) {
                    this._cache[val] = true;

                    return true
                }
            } else {
                if (this._map[key] >= 2) {
                    this._cache[val] = true;

                    return true
                }                
            }
        }
        
        return false;
    }
}