function signUp(e)
{
/*    console.log("worked");

    var new_data = document.getElementById('input').value;
    let list = [];

    if(localStorage.getItem('username') == null){
       localStorage.setItem('username', list[0]);
    }
    for(let i = 0; i < list.length; i++){
        if(new_data == list[i]){
            console.log("This username already exists")
        }
        else
            var old_data = JSON.parse(localStorage.getItem('username'));
            old_data.push(new_data);
        
            localStorage.setItem('username', JSON.stringify(old_data));
    }


    e.preventDefault(); */
    function signUp(e)
    {
        e.preventDefault()
        let usernameInput = document.getElementById('input') as HTMLInputElement
        let username = usernameInput.value
        let rawData = localStorage.getItem('username')
        let data: Array<String> = []
        if (rawData != null ) data = JSON.parse(rawData)
        
        console.log( { data, rawData, username, usernameInput } )
    
        if (data.includes(username)) {
            console.log("Username already taken")
        } else {
            console.log("New Username")
            data.push(username)
            localStorage.setItem('username', JSON.stringify(data))
        }
    
    }

}

    //var user = {username: username,}
