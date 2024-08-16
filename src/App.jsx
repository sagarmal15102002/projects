import React, { useState } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import CodeBlock from './components/CodeBlock';
import Button from './components/Button';
import PricingTable from './components/PricingTable';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-white dark:bg-gray-900 dark:text-white min-h-screen">
        <Header toggleTheme={toggleTheme} darkMode={darkMode} />
        <main className="p-6 space-y-8">
          <Section title="Overview">
            <p>The Book Generator API allows you to generate books on various topics using different language models. This documentation provides details on how to use the API, including authentication, available endpoints, and code examples.</p>
          </Section>
          
          <Section title="Authentication">
            <p>To use the API, you need to include your API key in the header of each request:</p>
            <CodeBlock code={'X-API-Key: YOUR_API_KEY'} />
            <p>To generate an API key, use the button below:</p>
            <Button label="Generate API Key" />
          </Section>

          <Section title="Endpoints">
            <p className="mb-4">Generate Book</p>
            <CodeBlock code={'POST /api/generate-book'} />
            <p>Request Body</p>
            <table className="w-full text-sm text-left dark:text-white mt-2">
              <thead className="bg-gray-200 dark:bg-blue-600">
                <tr>
                  <th className="py-2 px-4">Parameter</th>
                  <th className="py-2 px-4">Type</th>
                  <th className="py-2 px-4">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <td className="py-2 px-4">api</td>
                  <td className="py-2 px-4">string</td>
                  <td className="py-2 px-4">The API provider to use. Options: "openai" or "together"</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="py-2 px-4">model</td>
                  <td className="py-2 px-4">string</td>
                  <td className="py-2 px-4">The specific model to use (e.g., "gpt-3.5-turbo", "gpt-4", "llama-2-70b")</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <td className="py-2 px-4">topic</td>
                  <td className="py-2 px-4">string</td>
                  <td className="py-2 px-4">The main topic or theme of the book</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="py-2 px-4">language</td>
                  <td className="py-2 px-4">string</td>
                  <td className="py-2 px-4">The language in which the book should be generated</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <td className="py-2 px-4">word_count</td>
                  <td className="py-2 px-4">integer</td>
                  <td className="py-2 px-4">The approximate number of words for the generated book</td>
                </tr>
              </tbody>
            </table>
          </Section>

          <Section title="Tutorial">
            <ol className="list-decimal list-inside space-y-2">
              <li>Obtain an API Key</li>
              <li>Make a Request</li>
              <li>Handle the Response</li>
              <li>Retrieve the Generated Book</li>
            </ol>
          </Section>

          <Section title="Code Examples">
            <h2 className="text-xl font-bold">Python</h2>
            <CodeBlock code={`import requests\n\nresponse = requests.post('https://api.example.com/generate-book',\n headers={'X-API-Key': 'YOUR_API_KEY'},\n json={\n 'api': 'openai',\n 'model': 'gpt-3.5-turbo',\n 'topic': 'AI and the future',\n 'language': 'en',\n 'word_count': 5000\n })\n\nprint(response.json())`} />
            
            <h2 className="text-xl font-bold mt-4">JavaScript (Node.js)</h2>
            <CodeBlock code={`const axios = require('axios');\n\naxios.post('https://api.example.com/generate-book', {\n headers: {\n 'X-API-Key': 'YOUR_API_KEY'\n },\n api: 'openai',\n model: 'gpt-3.5-turbo',\n topic: 'AI and the future',\n language: 'en',\n word_count: 5000\n})\n.then(response => console.log(response.data))\n.catch(error => console.error(error));`} />
          </Section>

          <Section title="API Pricing">
            <PricingTable />
          </Section>

          <Section title="Token Limitation">
            <p>Each request to the API is limited by the token count. Please ensure that the parameters are optimized to fit within the token limit of the selected model.</p>
          </Section>
        </main>
      </div>
    </div>
  );
}

export default App;