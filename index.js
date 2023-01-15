const db = new Dexie('ShoppingApp')
db.version(1).stores( {items:'++id,name,price,isPurchased'} )

const itemsForm = document.getElementById('itemForm')
const itemsDiv = document.getElementById('itemDiv')
const totalPriceDiv = document.getElementById('totalPriceDiv')

const populateItemsDiv = async () => { 
    const allItems = await db.items.reverse().toArray()
    
    itemsDiv.innerHTML = allItems.map(item => `
    
    `)
}

itemsForm.onsubmit = async (event) => {
    event.preventDefault()

    const name = document.getElementById('nameInput').value
    const quantity = document.getElementById('quantityInput').value
    const price = document.getElementById('priceInput').value

    
    await db.items.add({name, quantity, price})

    itemsForm.requestFullscreen()

}