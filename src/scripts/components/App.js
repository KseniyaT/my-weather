import React from 'react';
import SearchForm from './forms/SearchForm';
import Result from './results/Result';

function App() {
  return (
    <section className="forecast">
      <main className="content">
        <SearchForm />
        <Result />
      </main>
    </section>
  );
}

export default App;
