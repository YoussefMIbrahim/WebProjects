let user = {username: 'youssef', password: 'password'};


// two ways of accessing the same info
console.log(user.username);

console.log(user['password']);

// modifying  object data
user.password = 'zebras';
user['username'] = 'not Yosusef';
console.log(`${user['username']}, ${user['password']}`);

//adding more attributes toa ne existing object
user.email = 'youssef@youssef.youssef';
console.log(user.email);
