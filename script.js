let total = 0;
const itemList = [];
function addItem() {
    const itemName = 
    document.getElementById("itemName").value;
    const itemPrice = 
    parseFloat(document.getElementById("itemPrice").value);

    if (itemName && itemPrice) {
        itemList.push({ name: itemName, price: itemPrice});

        const list = 
    document.getElementById("itemList");
    const listItem = 
    document.createElement("li");
    listItem.textContent = `${itemName} - ${itemPrice}`;
    list.appendChild(listItem);
    total += itemPrice;
    document.getElementById("totalPrice").textContent = total.toFixed(2);
    document.getElementById("itemName").value = "";
    document.getElementById("itemPrice").value = "";

    } else {
    alert("Please enter both item name and price");
} 
}






