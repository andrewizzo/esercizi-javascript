const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUser (userObj){
  try{
    const userJson = JSON.stringify(userObj);
    localStorage.setItem('user',userJson);
    console.log('user salvato con successo');
  }catch (e){
    console.error('cè qualcosa che non va',e);
  }
}

saveUser(user)