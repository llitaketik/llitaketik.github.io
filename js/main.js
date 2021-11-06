document.addEventListener('DOMContentLoaded', () => {
    const eventsFilter = document.querySelectorAll('.js-events-filter'),
        eventsItems = document.querySelectorAll('.js-events-item');

    for (let i = 0; i < eventsFilter.length; i++) {
        const item = eventsFilter[i];

        item.addEventListener('change', () => {
            const filterChecked = document.querySelector('.js-events-filter:checked'),
            filterCheckedVal = filterChecked.value;

            if (filterCheckedVal === 'events-all') {
                showAllEvents();
            } else {
                setFilter(filterCheckedVal);
            }
        });
    }

    function setFilter(value) {
        for (let i = 0; i < eventsItems.length; i++) {
            const item = eventsItems[i],
                itemData = item.dataset.time;

            item.classList.add('is-hidden');
            if (itemData === value) {
                item.classList.remove('is-hidden');
            }
        }
    }

    function showAllEvents() {
        for (let i = 0; i < eventsItems.length; i++) {
            const item = eventsItems[i];

            item.classList.remove('is-hidden');
        }
    }
});