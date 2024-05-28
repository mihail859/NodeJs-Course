function print(msg){
    console.log(msg);
}

async function getUsers(){
    const api = "https://jsonplaceholder.typicode.com/users";
    try {
        const response = await fetch(api);
        if (!response.ok){
            throw new Error(response.statusText);
        }
        const data = await response.json();
        return data;
    }catch (error){
        console.error("Error fetching users:", error);
    }
} 

module.exports = { print, getUsers};