var cursor = document.querySelector('#cursor');
var cursorinner = document.querySelector('#cursor2');
var a = document.querySelectorAll('a');
var b = document.querySelectorAll('button');

function handleMouseMove(e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
}

document.addEventListener('mousemove', function(e) {
  if (window.innerWidth > 992) {
    cursor.style.display = 'block';
    cursorinner.style.display = 'block';
    handleMouseMove(e);
  }else{
    cursor.style.display = 'none';
    cursorinner.style.display = 'none';
  }
});

document.addEventListener('mousedown', function() {
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover');
});

document.addEventListener('mouseup', function() {
  cursor.classList.remove('click');
  cursorinner.classList.remove('cursorinnerhover');
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
});

b.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
});
