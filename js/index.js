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
navMenu = Array.from(navMenu).map(nav => new NavExtended(nav));