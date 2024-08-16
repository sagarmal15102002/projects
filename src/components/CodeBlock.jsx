import React from 'react';

const CodeBlock = ({ code }) => {
  return (
    <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-auto">
      <code>{code}</code>
    </pre>
  );
};

export default CodeBlock;

