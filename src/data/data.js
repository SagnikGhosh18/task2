// src/data.js
export const fetchData = async () => {
    try {
      const response = await fetch(
        'https://s3.amazonaws.com/open-to-cors/assignment.json'
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  