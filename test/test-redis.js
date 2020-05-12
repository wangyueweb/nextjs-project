async function test(){
    const Redis = require('ioredis');

    const redis = new Redis({
        port: 6378,
        password: 123456
    });
    await redis.set('age', 19);

    const keys = await redis.keys('*');
    console.log(await redis.get('age'));
}

test();
