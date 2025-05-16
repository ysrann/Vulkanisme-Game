let draggedItem = null;

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.draggable').forEach(item => {
    item.addEventListener('dragstart', e => {
      draggedItem = item;
    });
  });

  document.querySelectorAll('.dropzone').forEach(zone => {
    zone.addEventListener('dragover', e => e.preventDefault());
    zone.addEventListener('drop', e => {
      e.preventDefault();
      if (zone.children.length === 0) {
        zone.appendChild(draggedItem);
      }
    });
  });
});

function nextPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(`page${page}`).classList.add('active');
}

function checkMatches() {
  let correct = 0;
  document.querySelectorAll('.dropzone').forEach(zone => {
    if (zone.children.length > 0 && zone.children[0].id === zone.dataset.answer) {
      correct++;
    }
  });
  document.getElementById('resultPage2').innerText = `Jawaban benar: ${correct} dari 4`;
  document.getElementById('nextButton2').style.display = 'inline-block';
}

function checkOrder() {
  const correctOrder = [
    "Lakolit", "Intrusi Gang Kecil", "Batolit", "Intrusi Gang", "Sill", "Diaterma", "Lapolit"
  ];
  let items = document.querySelectorAll('#sortableList .draggable');
  let correct = 0;
  items.forEach((item, i) => {
    if (item.innerText.trim() === correctOrder[i]) correct++;
  });
  document.getElementById('resultPage3').innerText = `Urutan benar: ${correct} dari 7`;
}
