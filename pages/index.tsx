import React, { useState } from 'react';

const API_KEY = '1de5a0b7f91948368a062c17dddaa611';
const API_ENDPOINT = `https://api.bing.microsoft.com/v7.0/search`;

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`${API_ENDPOINT}?q=${searchTerm}`, {
        headers: {
          'Ocp-Apim-Subscription-Key': API_KEY
        }
      });
      const data = await response.json();
      setSearchResults(data.webPages.value);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {searchResults.map((result) => (
        <div key={result.id}>
          <h2>{result.name}</h2>
          <a href={result.url}>{result.url}</a>
          <p>{result.snippet}</p>
        </div>
      ))}
    </div>
  );
}

export default App;