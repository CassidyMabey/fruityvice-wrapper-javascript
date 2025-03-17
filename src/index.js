/**
 * JavaScript wrapper for : https://www.fruityvice.com/
 */
const FruityviceAPI = (function() {
  const baseUrl = 'https://www.fruityvice.com';
  const apiPath = '/api/fruit';

  /**
   * gets all of the information about all of the fruits
   * @returns {Promise<Array>} promise of an array of fruit objects
   */
  async function getAllFruits() {
    try {
      const response = await fetch(`${baseUrl}${apiPath}/all`);
      
      if (!response.ok) {
        throw new Error(`fetch error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching all fruits:', error);
      throw error;
    }
  }

  /**
   * gets all of the fruit from a specific ID
   * @param {number|string} id - ID of the fruit
   * @returns {Promise<Object>} promise of an array of fruit objects
   */
  async function getFruitById(id) {
    if (!id) {
      throw new Error('the ID of the fruit is required');
    }
    
    try {
      const response = await fetch(`${baseUrl}${apiPath}/${id}`);
      
      if (!response.ok) {
        throw new Error(`fetch error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`error fetching fruit with ID ${id}:`, error);
      throw error;
    }
  }

  /**
   * gets fruits by name
   * @param {string} name - the name of the fruit
   * @returns {Promise<Object>} promise of an array of fruit objects
   */
  async function getFruitByName(name) {
    if (!name) {
      throw new Error('name of the fruit is required');
    }
    
    try {
      const response = await fetch(`${baseUrl}${apiPath}/${name}`);
      
      if (!response.ok) {
        throw new Error(`fetch error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`Error fetching fruit with name ${name}:`, error);
      throw error;
    }
  }

  /**
   * Get fruits by family
   * @param {string} family - The family name to search for
   * @returns {Promise<Array>} promise of an array of fruit objects
   */
  async function getFruitsByFamily(family) {
    if (!family) {
      throw new Error('Family name is required');
    }
    
    try {
      const response = await fetch(`${baseUrl}${apiPath}/family/${family}`);
      
      if (!response.ok) {
        throw new Error(`fetch error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`Error fetching fruits with family ${family}:`, error);
      throw error;
    }
  }

  /**
   * Get fruits by genus
   * @param {string} genus - The genus name to search for
   * @returns {Promise<Array>} promise of an array of fruit objects
   */
  async function getFruitsByGenus(genus) {
    if (!genus) {
      throw new Error('Genus name is required');
    }
    
    try {
      const response = await fetch(`${baseUrl}${apiPath}/genus/${genus}`);
      
      if (!response.ok) {
        throw new Error(`fetch error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`Error fetching fruits with genus ${genus}:`, error);
      throw error;
    }
  }

  /**
   * get fruit by order / family
   * @param {string} order - order / family of the fruits name
   * @returns {Promise<Array>} promise of an array of fruit objects
   */
  async function getFruitsByOrder(order) {
    if (!order) {
      throw new Error('fruits order / family is needed');
    }
    
    try {
      const response = await fetch(`${baseUrl}${apiPath}/order/${order}`);
      
      if (!response.ok) {
        throw new Error(`fetch error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`fetching fruits with order ${order} error:`, error);
      throw error;
    }
  }

  /**
   * gets each fruit within a nutrition range
   * @param {string} nutrition - the type of nutrition (carbohydrates, protein, fat, calories, sugar)
   * @param {number} [min=0] - min nutrition
   * @param {number} [max=1000] - max nutrition
   * @returns {Promise<Array>} promise of an array of fruit objects
   */
  async function getFruitsByNutrition(nutrition, min = 0, max = 1000) {
    if (!nutrition) {
      throw new Error('Please enter the nutrition type: (carbohydrates, protein, fat, calories, sugar)');
    }
    
    try {
      const response = await fetch(`${baseUrl}${apiPath}/${nutrition}?min=${min}&max=${max}`);
      
      if (!response.ok) {
        throw new Error(`fetch error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`fetching fruits by nutrition ${nutrition} error:`, error);
      throw error;
    }
  }
  // all methods being returned
  return {
    getAllFruits,
    getFruitById,
    getFruitByName,
    getFruitsByFamily,
    getFruitsByGenus,
    getFruitsByOrder,
    getFruitsByNutrition
  };
})();

