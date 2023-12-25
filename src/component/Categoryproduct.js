import React, { useEffect, useState } from 'react';

const Categoryproduct = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = (productId) => {
    // Xử lý logic thêm vào giỏ hàng ở đây
    console.log(`Added product with ID ${productId} to the cart`);
  };

  return (
    <div>
      <h1>Products</h1>
      {products && (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {products.map((item) => (
            <li key={item.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
              <img src={item.image} alt={item.title} style={{ width: '200px', marginRight: '10px' }} />
              <div style={{ display: 'inline-block' }}>
                <h3>{item.title}</h3>
   
                <p>Price: ${item.price}</p>
                <button
                  onClick={() => handleAddToCart(item.id)}
                  style={{
                    padding: '10px',
                    backgroundColor: 'green',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

  export default Categoryproduct;
