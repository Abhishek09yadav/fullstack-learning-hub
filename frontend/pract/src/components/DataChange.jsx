import React from 'react'

const DataChange = () => {
  const [data, setData] = useState({
    name: "Alice",
    age: 30,
    address: {
      street: "123 Maple St",
      city: "New York",
      zip: "10001",
    },
    hobbies: ["reading", "yoga", "gardening"],
  });
  return (
    <div>
      <input type=''/>
    </div>
  )
}

export default DataChange
