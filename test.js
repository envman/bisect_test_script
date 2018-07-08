try {
  const add = require('../bisect_script/')

  const result = add(2, 2)

  if (result == 4) {
    process.exit(0)
  } else {
    process.exit(1)
  }
} catch (err) {
  process.exit(125)
}
