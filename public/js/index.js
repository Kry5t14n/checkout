const names = document.getElementsByClassName('item-name')
const prices = document.getElementsByClassName('item-price')
const counters = document.getElementsByClassName('item-counter')
const btns_less = document.getElementsByClassName('item-btn-less')
const btns_more = document.getElementsByClassName('item-btn-more')

let final_price = document.getElementById("final-price")
let final_price_val = 0

const reset_btn = document.getElementById('reset')


class Item {
    constructor(name, price, counter, btn_less, btn_more) {
        this.name = name
        this.price = price
        this.counter = counter
        this.counter_val = 0
        this.btn_less = btn_less
        this.btn_more = btn_more
    }
}

const item1 = new Item(names[0], prices[0], counters[0], btns_less[0], btns_more[0])
const item2 = new Item(names[1], prices[1], counters[1], btns_less[1], btns_more[1])
const item3 = new Item(names[2], prices[2], counters[2], btns_less[2], btns_more[2])
const item4 = new Item(names[3], prices[3], counters[3], btns_less[3], btns_more[3])
const item5 = new Item(names[4], prices[4], counters[4], btns_less[4], btns_more[4])

const items = [item1, item2, item3, item4, item5]


const substractPrice = (val, count, counter) => {
    if (count > 0) {
        final_price_val -= parseFloat(val)
        count -= 1
    }
    counter.innerHTML = count
    final_price.innerHTML = `$${final_price_val}`
    return count
}

const addPrice = (val, count, counter) => {
    final_price_val += parseFloat(val)
    count += 1
    counter.innerHTML = count
    final_price.innerHTML = `$${final_price_val}`
    return count
}

const reset = () => {
    items.forEach((item) => {
        item.counter.innerHTML = "0"
        item.counter_val = 0
    })
    final_price.innerHTML = "$0"
    final_price_val = 0
}


items.forEach((item) => {
    item.btn_less.onclick = () => {
        item.counter_val = substractPrice(item.price.innerHTML, item.counter_val, item.counter)
    }
    item.btn_more.onclick = () => {
        item.counter_val = addPrice(item.price.innerHTML, item.counter_val, item.counter)
    }
})

reset_btn.onclick = reset