// Inbox, Today, This week tab switching
(function () {
  const inbox = document.querySelector('#inbox');
  const today = document.querySelector('#today');
  const thisWeek = document.querySelector('#this-week');

  const inboxBtn = document.querySelector('#inbox-button');
  const todayBtn = document.querySelector('#today-button');
  const thisWeekBtn = document.querySelector('#this-week-button');

  inboxBtn.addEventListener('click', () => {
    inbox.classList.add('active-content');
    inboxBtn.classList.add('active-button');

    today.classList.remove('active-content');
    todayBtn.classList.remove('active-button');

    thisWeek.classList.remove('active-content');
    thisWeekBtn.classList.remove('active-button');
  });


  todayBtn.addEventListener('click', () => {
    inbox.classList.remove('active-content');
    inboxBtn.classList.remove('active-button');

    today.classList.add('active-content');
    todayBtn.classList.add('active-button');

    thisWeek.classList.remove('active-content');
    thisWeekBtn.classList.remove('active-button');
  });


  thisWeekBtn.addEventListener('click', () => {
    inbox.classList.remove('active-content');
    inboxBtn.classList.remove('active-button');

    today.classList.remove('active-content');
    todayBtn.classList.remove('active-button');

    thisWeek.classList.add('active-content');
    thisWeekBtn.classList.add('active-button');
  });
})();