let node = document.getElementById("main");
if (node.parentNode) {
  node.parentNode.removeChild(node);
}

const main = document.querySelector('#main')

const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerHTML = "Steve is the champion"
main.appendChild(newHeader)
console.log(newHeader)
