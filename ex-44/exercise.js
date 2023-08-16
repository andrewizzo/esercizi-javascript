const user = {
  id: 1,
  name: "John",
  age: 25,
};

function getUser(){
  try{
    const storageUserJson = localStorage.getItem('user');
    if(storageUserJson){
      const storageUser = JSON.parse(storageUserJson);
      console.log('recuperato user dallo storage' , storageUser);
    }else{
      console.log('user non recuperato');
    }
  }catch (e){
    console.error('cè qualche errore',e);
  }
}

getUser();