function fetchUserData() {
    return new Promise((resolve, reject) => {
      let success = false;
        if (success) {
            resolve({
                id: 2930309,
                username: 'JohnDoe',
            });
        } else {
            reject(new Error('ORDER NOT FETCHED.'));
        }
    });
}
async function getUserData() {
    try {
        const userData = await fetchUserData();
        console.log('User Data:', userData);
    } catch (error) {
        console.error('Error:', error.message);
    }
}
getUser();
