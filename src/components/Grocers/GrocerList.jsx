import React, { useState, useEffect } from 'react'
import styles from '../../css/items1.module.css'
import Grocer from './Grocer'
import Title from '../Title'
import { FaSearch } from 'react-icons/fa'
import { capital } from '../../utils/Utils'

const GrocerList = props => {
  const [grocers, setGrocers] = useState([])
  const [sortedGrocers, setSortedGrocers] = useState([])

  const [categories, setCategories] = useState([])

  const [name, setName] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const getCategories = items => {
    let tempItems = items.map(item => item.node.category.toUpperCase())

    // rm duplicate item and sort them
    let tempCategories = new Set(tempItems)
    let categories1 = Array.from(tempCategories)
    categories1.sort()

    categories1 = ['all', ...categories1]

    return categories1
  }

  useEffect(() => {
    setGrocers(props.grocers.edges)
    setSortedGrocers(props.grocers.edges)

    setCategories(getCategories(props.grocers.edges))
  }, [])

  const handleCategoryChange = event => {
    setName('')

    const category = event.target.value
    setSelectedCategory(category)
    console.log('YYYYYY' + category)

    const tempItems = [...grocers]
    if (category === 'all') {
      setSortedGrocers(tempItems)
    } else {
      let items = tempItems.filter(
        ({ node }) => node.category.toUpperCase() === category.toUpperCase()
      )
      setSortedGrocers(items)
    }
  }

  const handleNameChange = event => {
    setName(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    console.log('YYYYYY', selectedCategory, 'LLLLL=', name)

    console.log('YYYYY sbumit')
    if (!name) {
      const tempItems = [...grocers]
      if (selectedCategory === 'all') {
        setSortedGrocers(tempItems)
      } else {
        let items = tempItems.filter(
          ({ node }) =>
            node.category.toUppercase() === selectedCategory.toUppercase()
        )
        setSortedGrocers(items)
      }

      return
    }

    const tempItems = [...sortedGrocers]
    const regex = new RegExp(`${name}`, 'gi')

    let items = tempItems.filter(({ node }) => {
      return node.name.match(regex)
    })
    setSortedGrocers(items)
  }

  return (
    <>
      <section className={styles.tours}>
        {/* <Title title="our" subtitle="grocers" /> */}
        {/* cateory */}

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'inline-block' }}>
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              value={selectedCategory}
              onChange={handleCategoryChange}
              className={styles.formControl}
            >
              {categories.map(item => (
                <option
                  value={item}
                  key={item}
                  // className="btn-white"
                  // style={{ margin: 'auto, 30px', width: 160, background: 'green' }}
                >
                  {capital(item)}
                </option>
              ))}
            </select>
          </div>
          <div style={{ display: 'inline-block' }}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              className={styles.formControl}
              placeholder={`Search For ${capital(selectedCategory)}`}
              onChange={handleNameChange}
            />
          </div>
          <div style={{ display: 'inline-block' }}>
            <input type="submit" value="Search" className={styles.submit} />

            {/* <FaSearch className={styles.icon} /> */}
          </div>
        </form>

        {sortedGrocers.length === 0 && <h1>not found</h1>}
        <div className={styles.center}>
          {sortedGrocers.map(({ node }) => {
            return <Grocer key={node.id} grocer={node} />
          })}
        </div>
      </section>
    </>
  )
}

export default GrocerList
