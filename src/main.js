function result() {
    let items = document.getElementById("text_area").value.split(",");
    items = trimItems(items);
    choose(items);
}

function trimItems(itemArray) {
    for (let i in itemArray) itemArray[i] = itemArray[i].trim();
    return itemArray;
}

function choose (itemArray) {
    const result = document.getElementById("result");
    const choice = Math.floor(Math.random() * itemArray.length);

    result.innerHTML = `${itemArray[choice]}`;
}