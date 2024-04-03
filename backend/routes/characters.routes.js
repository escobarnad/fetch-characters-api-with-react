const router = require('express').Router()

/* GET home page */
router.get('/', async (req, res) => {
  try {
    const responseFromAPI = await fetch('https://ih-crud-api.herokuapp.com/characters')
    if (responseFromAPI.ok) {
      const charactersFromAPI = await responseFromAPI.json()
      res.json({ characters: charactersFromAPI })
    }
  } catch (error) {
    console.error(error)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const responseFromAPI = await fetch(
      `https://ih-crud-api.herokuapp.com/characters/${req.params.id}`
    )
    if (responseFromAPI.ok) {
      const characterFromAPI = await responseFromAPI.json()
      res.json({ character: characterFromAPI })
    }
  } catch (error) {
    console.error(error)
  }
})

router.post('/', async (req, res) => {
  try {
    const responseFromAPI = await fetch(
      `https://ih-crud-api.herokuapp.com/characters`
    )
    if (responseFromAPI.ok) {
      const characterFromAPI = await responseFromAPI.json()
      res.json({ character: characterFromAPI })
    }
  } catch (error) {
    console.error(error)
  }
})

router.put('/:id', async (req, res) => {
  try {
    const responseFromAPI = await fetch(
      `https://ih-crud-api.herokuapp.com/characters/${req.params.id}`
    )
    if (responseFromAPI.ok) {
      const characterFromAPI = await responseFromAPI.json()
      res.json({ character: characterFromAPI })
    }
  } catch (error) {
    console.error(error)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const responseFromAPI = await fetch(
      `https://ih-crud-api.herokuapp.com/characters/${req.params.id}`
    )
    if (responseFromAPI.ok) {
      const characterFromAPI = await responseFromAPI.json()
      res.json({ character: characterFromAPI })
    }
  } catch (error) {
    console.error(error)
  }
})

module.exports = router

// https://ih-crud-api.herokuapp.com/characters
