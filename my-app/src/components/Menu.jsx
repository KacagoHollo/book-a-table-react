import React from 'react';

const Menu = () => {

  const pizza = [
    {
      name: "Hawaiian",
      topping: "Pizza sauce, cheese, cooked ham, and pineapple.",
      price: "15 $"
    },
    {
      name: "Margherita",
      topping: "San Marzano tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil.",
      price: "10 $"
    },
    {
      name: "Quattro Formaggi",
      topping: "Gorgonzola, fontina, and Parmigiano-Reggiano.",
      price: "16 $"
    },
    {
      name: "Mexican",
      topping: "Filled with seasoned ground beef, refried beans, melty cheese and enchilada sauce stuffed between two flour tortillas.",
      price: "18 $"
    },
  ]
  return (
      pizza.map((piz, za) => {
        return (
          <div className="grid-max"  key={za}>
            <h4 className='gridecske'>{piz.name}</h4>
            <p className='gride'>{piz.topping}</p>
            <h5 className='gridbee'>{piz.price}</h5>
          </div>
        )
      })
  )
}

export default Menu;