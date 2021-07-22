const logout = async () => { 
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      alert('You have successfully logged out!');
      localStorage.setItem('username', '');
      document.location.replace('/');
    }
}; 

export default logout;