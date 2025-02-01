body{
  background-color: #ccc;
}
.navbar{
  display: flex;
  justify-content: center;
  gap: 30%;
  font-size: large;
  background-color: black;
  margin-left: -10px;
  margin-right: -10px;
  margin-top: -10px;
  margin-bottom: 2px;
  padding: 20px;
  cursor: default;
}

.search-form {
    display: flex;
    justify-content: left;
    width: 70%;
    max-width: 70%;
    gap: 50px;
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    
  }
  
  .search-form input {
    width: 100%;
    max-width: 100%;
    padding: 10px 30px;
    font-size: small;
    border: 2px solid #ccc;
    border-radius: 10px;
    transition: border-color 1s ease;
  }
  
  .search-form input:focus {
    border-color: rgb(0,71,171);
    outline: none;
  }
  
  .search-form button {
    padding: 3px,6px;
    color: white;
    background-color: rgb(0,71,171);
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .search-form button:hover {
    background-color: rgb(1, 40, 99);
    color: #ccc;
  }
 
  .recipe-list{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(400px,1fr));
    gap: 20px;
  }
  .recipe-list img{
    width: 20%;
    height: auto;
    border-radius: 5px;
    margin-top: 15px;
    margin-bottom: 1px;
  }
  

  h3,h4,h5{
    color: rgb(0,71,171);
    text-align: center;
    font-size: large;
    margin-bottom: 5px;
  }
  .list{
    display: grid;
    justify-content: center;
  }
  #alert{
    color: rgb(234, 22, 22);
    font-size: large;
    font-weight: 800;
  }
  .filter{
    margin: 20px;
}
.filter select{
  padding: 3px;
  border-radius: 4px;
  color: rgb(0,71,171);
}
.filter option{
  color: rgb(0,71,171);
}

.recipe-detail {
  padding: 20px;
  display: flex;
  justify-content: left;
}
.recipe-detail img{
  width: 25%;
  height: auto;
}
.recipe-detail p{
  color: rgb(0,71,171);
  text-align: center;
  font-size: x-large;
  margin-bottom: 5px;
  font-weight: 900;
}
.recipe-image {
  width: 40%;
  border-radius: 10px;
  margin-bottom: 15px;
  margin-right: 50px;
}

.loading{
  color: rgb(80,255,0);
  font-size: x-large;
  font-weight: 400;

}
.error {
  text-align: center;
  font-size: 18px;
  color: #ff6347;
  font-weight: bold;
}
footer{
  color: white;
  background-color: black;
  display: flex;
  justify-content: center;
  margin-top: 500px;
  margin-left: -30px;
  margin-right: -30px;
  margin-bottom: -30px;
}
  



  
 
