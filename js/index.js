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
        // assign this.element to passed
        this.element = element;
        this.data = this.element.dataset.tab;
        this.itemElement = document.querySelector(`.services--card[data-tab='${this.data}']`);
        this.tabItem = new TabItem(this.itemElement);
        console.log(this.tabItem);
        this.element.addEventListener('click', () => this.select());
    };

    select() {
        const links = document.querySelectorAll('.services--btn');
        links.forEach(link => link.classList.remove('btn-active'));
        this.element.classList.add('btn-active');
        this.tabItem.select();
    }
};


class TabItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        const items = document.querySelectorAll('.services--card');
        items.forEach(item => item.classList.remove('active--card'));
        this.element.classList.add('active--card');
    }
}

let serviceButtons = document.querySelectorAll('.services--btn');
serviceButtons.forEach(button => new ServiceContent(button));
console.log(serviceButtons);