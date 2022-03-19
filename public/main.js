'use strict';

//  Open menu 
const btnMenu = document.querySelector('#btn-menu');
const menuList = document.querySelector('#menu');

btnMenu.addEventListener('click', () => {
  menuList.classList.toggle('invisible')
})

// Search
document.getElementById('btn-search').onclick = () => {
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const dayFrom = document.getElementById('day-from').value;
  const dayTo = document.getElementById('day-to').value;

  const renderFrom = document.querySelector('#render-from');
  const renderDayGo = document.querySelector('#render-day-go');
  const renderTo = document.querySelector('#render-to');
  const renderDayTo = document.querySelector('#render-day-to');

  const renderPeople = document.querySelector('#render-people');
  const people = document.getElementById('people').value;
  const renderChair = document.querySelector('#render-chair');
  const optionChair = document.getElementById('option-chair').value;

  const renderFromTicket = document.querySelector('#from-ticket');
  const renderFromStation = document.querySelector('#from-station');
  const renderToTicket = document.querySelector('#to-ticket');
  const renderToStation = document.querySelector('#to-station');

  const fromDay = document.querySelector('#from-day');
  const toDay = document.querySelector('#to-day');

  renderFrom.innerHTML = from;
  renderDayGo.innerHTML = dayFrom;

  renderTo.innerHTML = to;
  renderDayTo.innerHTML = dayTo;

  renderPeople.innerHTML = people;

  renderChair.innerHTML = optionChair;

  renderFromTicket.innerHTML = from;
  renderFromStation.innerHTML = `${from} Airport`;
  renderToTicket.innerHTML = to;
  renderToStation.innerHTML = `${to} Airport`
  fromDay.innerHTML = dayFrom;
  toDay.innerHTML = dayTo;

}

// Details - Info
const btnDetails = document.querySelector('#btn-detail');
const btnFare = document.querySelector('#btn-fare');
const flightDetails = document.querySelector('#flight-detail');
const fareInfo = document.querySelector('#fare-info');

