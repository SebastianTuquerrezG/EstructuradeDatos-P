class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;//genera un numero random con caracteres unicode utd-8
        }
        return hash;
    }
    set(key, value) //metodo que agrega elementos a la hash table
    {
        const address = this.hashMethod(key);
        if (!this.data[address]) {
        this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }
    get(key)
    {
		return this.findPair(key, (currentBucket, index) => currentBucket[index][1]);
	}
	getAllKeys()
    {
		const allKeys = [];
		this.data.forEach((bucket) => {
			for (let i = 0; i < bucket.length; i++) {
				allKeys.push(bucket[i][0]);
			}
		})
		return allKeys;
	}
	remove(key)
    {
		return this.findPair(key, (currentBucket, index) => {
			const pair = currentBucket[index];
			currentBucket.splice(index, 1);
			return pair;
		})
	}
	findPair(key, callback)
    {
		const address = this.hashMethod(key);
		const currentBucket = this.data[address];
		if (currentBucket) {
			for (let i = 0; i < currentBucket.length; i++) {
				if (currentBucket[i][0] === key) {
					return callback(currentBucket, i);
				}
			}
		}
		return undefined;
	}
}

const myHashTable = new HashTable(50);

myHashTable.set("Seb", 2003);
myHashTable.set("Seb", 2004);
myHashTable.set("Sebas", 2005);
myHashTable.set("Sebastian", 2006);

myHashTable.get("Seb"); //nos regresa 2003 y no 2004 porque hay una colicion al ser un mismo identificador
myHashTable.get("Sebastian"); //nos regresa 2006

myHashTable.getAllKeys(); //devuelve todos los hashes o ids
myHashTable.remove("sebas"); //elimina el hash y el value osea 2005