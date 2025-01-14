import React from 'react';

interface PageProps  {
  params: {id: string};
}
function ProductPage({params}: PageProps) {
const {id} =params;

  return (
    <div>
      <h1>Product Page</h1>
      <p>Product ID: {id}</p>
    </div>
    
  );
}

export default ProductPage;