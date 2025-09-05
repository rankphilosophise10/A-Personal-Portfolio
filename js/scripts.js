const headshot = createHeadshotContainer("../images/headshot.jpg", "User headshot");
document.body.appendChild(headshot);

function createHeadshotContainer(src, altText) {
  const wrap = document.createElement("div");
  wrap.className = "headshotContainer";

  const img = document.createElement("img");
  img.src = src;
  img.alt = altText;

  wrap.appendChild(img);
  return wrap;
}