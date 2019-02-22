// Extending navigation menu
class NavExtended {
    constructor(element) {
    this.element = element;
    this.button = this.element.querySelector('.nav-button');
    this.content = this.element.querySelector('.nav-content');
    this.close = this.element.querySelector('.close');

    this.button.addEventListener('click', () => this.toggleContent());
    this.close.addEventListener('click', () => this.toggleContent());

    }

    toggleContent() {
        this.content.classList.toggle('nav-hidden');
        this.button.classList.toggle('nav-hidden');
        this.close.classList.toggle('nav-hidden');
    }
}

let navMenu = document.querySelectorAll('.nav');
navMenu.forEach(nav => new NavExtended(nav));




// Tabs
class ServiceContent {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.itemElement = document.querySelector(`.services--card[data-tab='${this.data}']`);
        this.serviceItem = new TabItem(this.itemElement);

        this.element.addEventListener('click', () => this.select());
    }

    select() {
        const buttons = document.querySelectorAll('.services--card');
        buttons.forEach(button => button.classList.remove('active--card'));
        this.element.classList.add('active--card');
        this.serviceItem.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }
    select() {
        const buttons = document.querySelectorAll('.services--btn');
        buttons.forEach(button => button.classList.remove('active--card'));
    }
}

let serviceButtons = document.querySelectorAll('.services--btn');
serviceButtons.forEach(service => new ServiceContent(service));