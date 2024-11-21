import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './counter';
import Display from './display';

<<<<<<< HEAD
// counter.test.js

// Contoh fungsi counter untuk diuji
function createCounter() {
    let count = 0;
    return {
      increment() {
        count += 1;
      },
      decrement() {
        count -= 1;
      },
      getCount() {
        return count;
      },
    };
  }
  

  test('Nilai awal counter adalah nol', () => {
    const counter = createCounter();
    expect(counter.getCount()).toBe(0);
  });
  

  test('Increment meningkatkan nilai counter', () => {
    const counter = createCounter();
    counter.increment();
    expect(counter.getCount()).toBe(1);
  });
  
 
  test('Decrement menurunkan nilai counter', () => {
    const counter = createCounter();
    counter.increment(); // Tambah dulu
    counter.decrement(); // Kurangi
    expect(counter.getCount()).toBe(0);
  });
  
  
=======
>>>>>>> 0a26ae15d40d570c6900688a4a3ae764fbb4d9d4
