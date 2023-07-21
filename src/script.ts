const list_node = document.querySelector<HTMLUListElement>('li#node')!;
const list_react = document.querySelector<HTMLUListElement>('li#react')!;
const list_javascript = document.querySelector<HTMLUListElement>('li#javascript')!;
const list_css = document.querySelector<HTMLUListElement>('li#css')!;
const list_foundations = document.querySelector<HTMLUListElement>('li#foundations')!;

const list_items = document.querySelectorAll<HTMLUListElement>('ul > li')

const table_node = document.querySelector<HTMLTableElement>('#table-node')!;
const table_react = document.querySelector<HTMLTableElement>('#table-react')!;
const table_javascript = document.querySelector<HTMLTableElement>('#table-javascript')!;
const table_css = document.querySelector<HTMLTableElement>('#table-css')!;
const table_foundations = document.querySelector<HTMLTableElement>('#table-foundations')!;

const tables = document.querySelectorAll<HTMLTableElement>('table');

// listeners
list_node.addEventListener('click', () => {
  showSelectElement(list_node, table_node)
})

list_react.addEventListener('click', () => {
  showSelectElement(list_react, table_react)
})

list_javascript.addEventListener('click', () => {
  showSelectElement(list_javascript, table_javascript)
})

list_css.addEventListener('click', () => {
  showSelectElement(list_css, table_css)
})

list_foundations.addEventListener('click', () => {
  showSelectElement(list_foundations, table_foundations)
})

function showSelectElement(listItem: HTMLUListElement, table: HTMLTableElement) {

  Array.from(list_items).forEach(item => item.classList.remove('text-odin-gold'))
  Array.from(tables).forEach(item => item.classList.add('hidden'))

  listItem.classList.add('text-odin-gold')
  table.classList.remove('hidden')
}