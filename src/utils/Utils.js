export const capital = word => {
  const myArr = word.split(' ')

  const store = []
  myArr.forEach(function(item) {
    store.push(item.slice(0, 1).toUpperCase() + item.slice(1).toLowerCase())
  })

  return store.join(' ')
}
