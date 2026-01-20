import inventoryData from "../data/inventoryData.js";

export function list(req, res) {
  res.render("inventory/inventory", {
    title: "Inventory",
    inventory: inventoryData,
  });
}

export function redirectToAdd(req, res) {
  res.render("inventory/add", {
    title: "Add New Item"
  });
}

export function redirectToEdit(req, res) {  
  res.render("inventory/edit", {
    title: "Edit Item"
  });
}
