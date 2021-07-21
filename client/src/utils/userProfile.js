const UserProfile = () => {
    const username = "";
  
    const getName = () => {
        username = localStorage.getItem(username)
      return username;    // Or pull this from cookie/localStorage
    };
  
    const setName = (name) => {
        username = name;     
        localStorage.setItem('username', name)
      // Also set this in cookie/localStorage
    };
  
    return {
      getName: getName,
      setName: setName
    }
};
  
  export default UserProfile;