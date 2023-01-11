let node = document.getElementById('main')
if (node.parentNode){
    node.parentNode.removeChild(node)
}

const newHeader = document.createElement('h1')