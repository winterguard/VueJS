var items = [
    {
        name: 'pencil',
        price: 300,
        quantity: 0
    },
    {
        name: 'notebook',
        price: 400,
        quantity: 0
    },
    {
        name: 'eraser',
        price: 500,
        quantity: 0
    }
];

var vm = new Vue({
    el: '#app',
    data: {items}
});

window.vm = vm;