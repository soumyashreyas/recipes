const saveUserInfo = (data) =>{
    localStorage.setItem("user", JSON.stringify(data));
}
const clearUserInfo = () =>{
    localStorage.removeItem("user");
}
const isLoggedin = () => {
    try {
        const val = JSON.parse(localStorage.getItem('user')) ;
        return !!val;
    } catch {
        return false;
    }
    
}

export {
    saveUserInfo,
    clearUserInfo,
    isLoggedin
}