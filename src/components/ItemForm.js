import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {

  const [formData, setFormData] = useState({
    name: "",
    category: "Produce"
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate an unique id
      name: formData.name,
      category: formData.category
    };
    
    props.onItemFormSubmit(newItem);
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} value={formData.name} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

// <>====================================================================</>

// import React from "react";
// import { v4 as uuid } from "uuid";

// function ItemForm(props) {
//   return (
//     <form className="NewItem">
//       <label>
//         Name:
//         <input type="text" name="name" />
//       </label>

//       <label>
//         Category:
//         <select name="category">
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </label>

//       <button type="submit">Add to List</button>
//     </form>
//   );
// }

// export default ItemForm;
