import inventoryData from "../models/inventory.js";

// export function list(req, res) {
//   res.render("inventory/inventory", {
//     title: "Inventory",
//     inventory: inventoryData,
//   });
// }
export async function list(req, res) {
  try{
    const all_inventory = await inventoryData.find();
    res.render("inventory/inventory", {
      title: "Inventory",
      inventory: all_inventory,
    });
  }
catch(error){
  console.error("Failed to fetch recipes:", error);
  res.status(500).send("Failed to fetch recipes");
}
}

export function redirectToAdd(req, res) {
  res.render("inventory/add", {
    title: "Add New Item"
  });
}

export async function addItem(req, res){
  try{
  var { name, sku, quantity, price} = req.body;
  const newItem = await inventoryData.create({name, sku, quantity, price})
  list(req, res);
  }
  catch(error){
    console.log("Failed to create new item", error);
    res.status(500).send("Failed to create new item")
  }
}

export function redirectToEdit(req, res) {  
  res.render("inventory/edit", {
    title: "Edit Item"
  });
}

export async function updateItem(req, res) {  
try{
  var {name, sku, quantity, price} = req.body;
  const updatedItem = await inventoryData.findOneAndUpdate(
    {name: name},
    {name, sku, quantity, price})
    list(req, res);
}
catch(error){
  console.log("Failed to update item", error);
  res.status(500).send("Failed to update item")
}
}

export function redirectToDelete(req, res) {  
  res.render("inventory/delete", {
    title: "Delete Item"
  });
}

export async function deleteItem(req,res){
  try{
    var{name} = req.body;
    const deleteItem = await inventoryData.findOneAndDelete(
      {name: name}
    )
    list (req,res);
  }
  catch(error){
    console.log("Failed to delete item", error);
    res.status(500).send("Failed to delete item")
  }
}
