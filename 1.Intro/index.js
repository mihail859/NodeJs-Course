const { print, getUsers } = require('./utils');
print("Hello, NodeJS!")

async function main(){
    try {
        const data = await getUsers();
        console.log(data);
    } catch (error) {
        console.error(error.message)
    }
}
main();