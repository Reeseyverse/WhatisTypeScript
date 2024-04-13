// Import stylesheets
import './style.css';


const form: HTMLFormElement = document.querySelector('#defineform');

form.onsubmit = async (event: Event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const word: string = formData.get('defineword') as string;

  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await response.json();

    // Assuming the API returns an array of definitions
    const definition: string = data[0]?.meanings[0]?.definitions[0]?.definition || 'Definition not found.';

    document.getElementById('definition').innerText = definition;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};