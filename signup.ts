function signUp(e)
{
    e.preventDefault()
    let usernameInput = document.getElementById('input') as HTMLInputElement
    let username = usernameInput.value
    console.log(username)
    var data:string[] = new Array(4);
    if (localStorage.getItem('user') == null){
        localStorage.setItem('user', '[]')
    }
        
    if (data.includes(username)) {
        console.log("Username already taken")
    } else {
        console.log("New Username")
        data = JSON.parse(localStorage.getItem('user'))
        data.push(username)
        localStorage.setItem('user', JSON.stringify(data))
    } 
}



/*
{
    e.preventDefault()
    let usernameInput = document.getElementById('input') as HTMLInputElement
    let username = usernameInput.value
    let data: Array<string> = []
    if (localStorage.getItem('user') == null){
        localStorage.setItem('user', data[0])
    }
        
    if (data.includes(username)) {
        console.log("Username already taken")
    } else {
        console.log("New Username")
        data = JSON.parse(localStorage.getItem('user'))
        data.push(username)
        localStorage.setItem('username', JSON.stringify(data))
    } 
}
*/