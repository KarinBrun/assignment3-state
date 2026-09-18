import { useState } from 'react'
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />

      <Hero 
        title="Welcome to ComponentCorner"
        subtitle="Built with React!"
        cta="Shop Now"
      />

      <div className='main-content'>
        <br></br>
        <h2>Featured Products</h2>
        <br></br>
        <ProductCard
          image="https://placehold.co/600x400"
          size={200}
          name="Laptop"
          description="A gray laptop with modern specs."
          price="$1,500"
        />
        <br></br>

        <ProductCard
          image="https://placehold.co/600x400"
          size={200}
          name="Mouse"
          description="A black laptop mouse."
          price="$15"
        />
        <br></br>

        <ProductCard
          image="https://placehold.co/600x400"
          size={200}
          name="Earbuds"
          description="Blue earbuds."
          price="$65"
        />
        <br></br>
      </div>

      <Footer
        store="ComponentCorner"
        email="cc@componentcorner.com"
        phone="123-456-7788"
        address="123 First Ave, Component City, USA 12345"
      />
    </div>
  );
}

export default App
