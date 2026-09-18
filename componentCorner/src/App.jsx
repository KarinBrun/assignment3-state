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

  const products = [
    { 
      id: 1, 
      name: "Wireless Headphones", 
      price: 99.99, 
      image: "https://placehold.co/600x400",
      description: "Premium noise-cancelling headphones with 30-hour battery life"
    },
    { 
      id: 2, 
      name: "Smart Watch", 
      price: 249.99, 
      image: "https://placehold.co/600x400",
      description: "Fitness tracker with heart rate monitor and GPS"
    },
    { 
      id: 3, 
      name: "Bluetooth Speaker", 
      price: 79.99, 
      image: "https://placehold.co/600x400",
      description: "Portable waterproof speaker with 360-degree sound"
    },
    { 
      id: 4, 
      name: "Laptop Stand", 
      price: 49.99, 
      image: "https://placehold.co/600x400",
      description: "Ergonomic aluminum stand for laptops and tablets"
    },
    { 
      id: 5, 
      name: "Webcam", 
      price: 129.99, 
      image: "https://placehold.co/600x400",
      description: "4K webcam with auto-focus and noise reduction"
    },
    { 
      id: 6, 
      name: "Mechanical Keyboard", 
      price: 159.99, 
      image: "https://placehold.co/600x400",
      description: "RGB backlit keyboard with custom switches"
    }
  ] = useState(0);
}

export default App
