function sum(x, y) {
    try {
        if (typeof x != 'number' || typeof y != 'number') {
            throw 'One or more of the arguments is not a number';
        }
    } catch(err) {
        return err;
    }
    return x + y;
}

try {
    if (isNaN(sum('1', '2'))) {
        throw sum('1', '2');
    }
} catch (error) {
    console.log(error);
}

// console.log(sum('1', '2'));


var user = {username: 'sam', password: '123abc'};
function login(username, password) {
    try {
        if (username != user.username || password != user.password) {
            throw 'The credentials don\'t match our records';
        } else {
            console.log('login successful');
        }
    } catch (hey) {
        return hey;
    }
}

try {
    if (login('sam', '123abc')) {
        throw login('sam', '123abc');
    }
} catch (hello) {
    console.log(hello);
}

try {
    if (login('sam', '123bbc')) {
        throw login('sam', '123bbc');
    }
} catch (hello) {
    console.log(hello);
}

// login('sam', '123abc');
// login('sam', '123abd');