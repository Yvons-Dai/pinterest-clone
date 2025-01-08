const grid = document.querySelector('.masonry');
const cards = grid.querySelectorAll('.card');

cards.forEach(card => {
  const img = card.querySelector('img'); 
  if (!img.complete) {
    img.onload = () => adjustSpan(card); 
  } else {
    adjustSpan(card); 
  }
});

function adjustSpan(card) {
  const rowHeight = 10;
  const contentHeight = card.getBoundingClientRect().height; 
  const rowSpan = Math.ceil(contentHeight / rowHeight);
  card.style.gridRow = `span ${rowSpan}`;
}
