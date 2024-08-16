import React from 'react';

const Section = ({ title, children }) => {
  return (
    <section className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
