// Data comes from Express rather than a hard-coded client-side array.
const addCards = (items) => {
  const section = document.getElementById('card-section');
  const select = document.getElementById('favourite-item');
  section.replaceChildren();
  while (select.options.length > 1) select.remove(1);
  items.forEach(item => {
    const column = document.createElement('div');
    column.className = 'col s12 m6 l4';
    // Only fixed markup is inserted as HTML. API text is assigned with textContent.
    column.innerHTML = '<div class="card medium"><div class="card-image"><img class="activator"></div><div class="card-content"><span class="card-title"></span><button type="button" class="activator btn-flat details-button"></button></div><div class="card-reveal"><span class="card-title"><i class="material-icons right" aria-hidden="true">close</i></span><p class="card-text"></p></div></div>';
    const image = column.querySelector('img');
    image.src = item.image;
    image.alt = item.title;
    column.querySelector('.card-content .card-title').textContent = item.title;
    column.querySelector('.details-button').textContent = item.link;
    column.querySelector('.card-reveal .card-title').prepend(document.createTextNode(item.title));
    column.querySelector('.card-text').textContent = item.desciption;
    section.appendChild(column);
    const option = document.createElement('option');
    option.value = item.title;
    option.textContent = item.title;
    select.appendChild(option);
  });
  const instance = M.FormSelect.getInstance(select);
  if (instance) instance.destroy();
  M.FormSelect.init(select);
};

const getLollies = () => {
  $('#load-status').text('Loading lollies…');
  $('#retry-button').prop('hidden', true);
  $.get('/api/lollies')
    .done(response => {
      if (response.statusCode !== 200 || !Array.isArray(response.data)) {
        $('#load-status').text('The server returned an unexpected response. Please retry.');
        $('#retry-button').prop('hidden', false);
        return;
      }
      addCards(response.data);
      $('#load-status').text(response.data.length + ' lollies loaded from the server.');
    })
    .fail(() => {
      $('#load-status').text('Could not load lollies. Check that the server is running, then retry.');
      $('#retry-button').prop('hidden', false);
    });
};

$(document).ready(function () {
  $('.materialboxed').materialbox();
  $('.modal').modal();
  $('select').formSelect();
  $('#retry-button').on('click', getLollies);
  $('#wishlist-form').on('submit', event => {
    event.preventDefault();
    const name = $('#customer-name').val().trim();
    const item = $('#favourite-item').val();
    if (!name || !item) {
      $('#wishlist-result').text('Please enter a name and choose a lolly.');
      return;
    }
    $('#wishlist-result').text(name + ' picked ' + item + '! This is a preview; your selection has not been saved.');
  });
  getLollies();
});
