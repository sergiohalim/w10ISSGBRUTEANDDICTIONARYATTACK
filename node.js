const crypto = require('crypto');

const targetHash = '5531a5834816222280f20d1ef9e95f69';

const bruteForcePin = () => {
    for (let pin = 0; pin < 10000; pin++) {
        const pinStr = pin.toString().padStart(4, '0');
        const hash = crypto.createHash('md5').update(pinStr).digest('hex');
        if (hash === targetHash) {
            console.log(`pin nya alice ${pinStr}`);
            return pinStr;
        }
    }
    console.log('PIN tidak ditemukan.');
};

bruteForcePin();
 