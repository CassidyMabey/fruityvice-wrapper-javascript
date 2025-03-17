# Fruit Stats

A lightweight JavaScript wrapper for the [Fruityvice API](https://www.fruityvice.com/doc/index.html)

## Installation

```bash
npm install fruit_stats
```

## Usage

```javascript
// import the lightweight javascript wrapper
const FruityviceAPI = require('fruit_stats');

// async getAllFruits example
FruityviceAPI.getAllFruits()
  .then(fruits => {
    console.log('All fruits:', fruits);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// using async/await
async function getFruitData() {
  try {
    // Get a specific fruit by name
    const banana = await FruityviceAPI.getFruitByName('banana');
    console.log('Banana data:', banana);
    
    // Get fruits from a specific family
    const rosaceae = await FruityviceAPI.getFruitsByFamily('Rosaceae');
    console.log('Fruits in Rosaceae family:', rosaceae);
    
    // Get fruits with specific nutritional values
    const lowSugarFruits = await FruityviceAPI.getFruitsByNutrition('sugar', 0, 5);
    console.log('Low sugar fruits:', lowSugarFruits);
  } catch (error) {
    console.error('Error fetching fruit data:', error);
  }
}
```

## API Reference

### Response

| Field        | Type   | Description                                           |
|--------------|--------|-------------------------------------------------------|
| `name`       | String | Name of the Fruit.                                    |
| `id`         | int    | ID of the Fruit.                                      |
| `family`     | String | Family of the Fruit.                                  |
| `genus`      | String | Genus of the Fruit.                                   |
| `order`      | String | Order of the Fruit.                                   |
| `nutritions` | json   | Nutritions of the Fruit.                              |
| `carbohydrates` | int | Carbohydrates of the Fruit (per 100g) in grams.       |
| `protein`    | int    | Protein of the Fruit (per 100g) in grams.            |
| `fat`        | int    | Fat of the Fruit (per 100g) in grams.                |
| `calories`   | int    | Calories of the Fruit (per 100g) in grams.           |
| `sugar`      | int    | Sugar of the Fruit (per 100g) in grams.              |




### `getAllFruits()`
Returns information about all available fruits.

```javascript
FruityviceAPI.getAllFruits()
  .then(fruits => console.log(fruits));
```

### `getFruitById(id)`
Retrieves fruit information by its ID.

```javascript
FruityviceAPI.getFruitById(1)
  .then(fruit => console.log(fruit));
```

### `getFruitByName(name)`
Retrieves fruit information by name.

```javascript
FruityviceAPI.getFruitByName('apple')
  .then(fruit => console.log(fruit));
```

### `getFruitsByFamily(family)`
Returns all fruits belonging to a specific botanical family.

```javascript
FruityviceAPI.getFruitsByFamily('Rutaceae')
  .then(fruits => console.log(fruits));
```

### `getFruitsByGenus(genus)`
Returns all fruits belonging to a specific genus.

```javascript
FruityviceAPI.getFruitsByGenus('Citrus')
  .then(fruits => console.log(fruits));
```

### `getFruitsByOrder(order)`
Returns all fruits belonging to a specific botanical order.

```javascript
FruityviceAPI.getFruitsByOrder('Rosales')
  .then(fruits => console.log(fruits));
```

### `getFruitsByNutrition(nutrition, min, max)`
Returns fruits with nutritional values within the specified range.

```javascript
// get fruits with 0-5g of sugar
FruityviceAPI.getFruitsByNutrition('sugar', 0, 5)
  .then(fruits => console.log(fruits));
  
// get fruits with 50-100 calories
FruityviceAPI.getFruitsByNutrition('calories', 50, 100)
  .then(fruits => console.log(fruits));
```

Supported nutrition types:
- `carbohydrates`
- `protein`
- `fat`
- `calories`
- `sugar`

## Response Format

The API returns fruit objects with the following structure:

```javascript
{
  "genus": "Malus",
  "name": "Apple",
  "id": 6,
  "family": "Rosaceae",
  "order": "Rosales",
  "nutritions": {
    "carbohydrates": 11.4,
    "protein": 0.3,
    "fat": 0.4,
    "calories": 52,
    "sugar": 10.3
  }
}
```



## Error Handling

All methods throw descriptive errors that can be caught using try/catch or promise catch blocks.

## License

MIT

## Author

CM ([GitHub](https://github.com/CassidyMabey))

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/CassidyMabey/fruit_stats/issues).
