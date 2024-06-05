document.addEventListener('DOMContentLoaded', () => {
    const indicator = document.querySelector('.menu .indicator');
    const menu = document.querySelector('.menu');
    const items = document.querySelectorAll('.menu .list .item');

    items.forEach(item => {
        item.addEventListener('mouseover', updateIndicatorPosition);
    });

    function updateIndicatorPosition() {
        const color = this.getAttribute('color');
        const itemRect = this.getBoundingClientRect();
        const menuRect = menu.getBoundingClientRect();
        const leftPosition = itemRect.left - menuRect.left + itemRect.width / 2 - indicator.offsetWidth / 2;

        indicator.style.left = `${leftPosition}px`;
        indicator.style.backgroundColor = color;
    }
});
