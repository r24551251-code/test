alert('СТИХИ МАРИНЫ ЦВЕТАЕВОЙ');
console.log('Не судите строго: страничка получилась так себе - я это признаю :(');
const form = document.getElementById('searchForm');
  const input = document.getElementById('searchInput');
  const items = document.querySelectorAll('#itemsList li');

  // Срабатывает ТОЛЬКО при нажатии на кнопку "Найти" или Enter
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Останавливаем перезагрузку страницы

    const query = input.value.toLowerCase().trim();

    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      // Если запрос пустой или текст подходит — показываем, иначе скрываем
      if (query === '' || text.includes(query)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });