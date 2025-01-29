const [recipes, setRecipes] = useState([]);

useEffect(() => {
  fetch('')
    .then(response => response.json())
    .then(data => setRecipes(data));
}, []);