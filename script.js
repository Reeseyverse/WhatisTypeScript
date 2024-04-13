const form = document.querySelector('#defineform');

form.onsubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const word = formData.get('defineword');

  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await response.json();

    const definition = data[0]?.meanings[0]?.definitions[0]?.definition || 'Definition not found.';

    document.getElementById('definition').innerText = definition;
  } catch (error) {
    console.error('Error fetching data:', error);
    document.getElementById('definition').innerText = 'Failed to fetch definition.';
  }
};

