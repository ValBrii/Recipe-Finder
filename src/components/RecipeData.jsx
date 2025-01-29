const [recipes, setRecipes] = useState([]);

useEffect(() => {
  fetch('api/recipes')
    .then(response => response.json())
    .then(data => setRecipes(data));
}, []);