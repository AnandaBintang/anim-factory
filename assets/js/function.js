const updateCoordinates = (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
};

function getAngle(diffX, diffY) {
  return (Math.atan2(diffY, diffX) * 180) / Math.PI;
}

function getSqueeze(diffX, diffY) {
  const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
  const maxSqueeze = 0.15;
  const accelerator = 1500;
  return Math.min(distance / accelerator, maxSqueeze);
}

const updateCursor = () => {
  const diffX = Math.round(mouse.x - pos.x);
  const diffY = Math.round(mouse.y - pos.y);

  pos.x += diffX * speed;
  pos.y += diffY * speed;

  const angle = getAngle(diffX, diffY);
  const squeeze = getSqueeze(diffX, diffY);

  const scale = "scale(" + (1 + squeeze) + ", " + (1 - squeeze) + ")";
  const rotate = "rotate(" + angle + "deg)";
  const translate = "translate3d(" + pos.x + "px ," + pos.y + "px, 0)";

  cursorInner.style.transform = translate;
  cursor.style.transform = translate;
  cursorCircle.style.transform = rotate + scale;
};

function loop() {
  updateCursor();
  requestAnimationFrame(loop);
}
