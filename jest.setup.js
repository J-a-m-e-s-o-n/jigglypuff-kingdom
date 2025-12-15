// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

// Mock requestAnimationFrame
global.requestAnimationFrame = (callback) => {
  return setTimeout(callback, 0)
}

global.cancelAnimationFrame = (id) => {
  clearTimeout(id)
}
