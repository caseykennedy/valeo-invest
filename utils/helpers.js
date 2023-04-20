const camelizeExp = /-(\w)/g
const hyphenateExp = /\B([A-Z])/g

let nextUid = 0

export const isArray = Array.isArray

export const keyCodes = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
})

export function allEqual(array = []) {
  return !array.some(v => v !== array[0])
}

export function cacheFunction(fn) {
  const cache = Object.create(null)
  return function cachedFn(str) {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  }
}

export const camelCase = cacheFunction((str) => {
  if (!str || typeof str !== 'string')
    return

  return str.replace(camelizeExp, (_, c) => (c ? c.toUpperCase() : ''))
})

export const capitalize = cacheFunction((str) => {
  if (!str || typeof str !== 'string')
    return

  return str.charAt(0).toUpperCase() + str.slice(1)
})

export function convertToUnit(str, unit = 'px') {
  if (str == null || str === '')
    return undefined

  else if (isNaN(+str))
    return String(str)

  else
    return `${Number(str)}${unit}`
}

export function createSimpleFunctional(name, className, tag = 'div') {
  return {
    name: camelCase(name),
    functional: true,
    render(h, { data, children }) {
      data.staticClass = `${className} ${data.staticClass || ''}`.trim()
      return h(tag, data, children)
    },
  }
}

export function elementRef(ref, fallback) {
  if (ref instanceof Element)
    return ref

  else if (ref && ref._isVue)
    return ref.$el

  else if (typeof ref === 'string')
    return document.querySelector(ref)

  return fallback
}

export function findElementAndFocus(id) {
  return document.getElementById(id).focus()
}

export function getFocusedElementId() {
  return document.activeElement.id
}

export function getFocusedIndex(elements = []) {
  const activeId = getFocusedElementId()
  return elements.findIndex(element => element.id === activeId)
}

export function getNestedValue(obj, path, fallback) {
  const last = path.length - 1
  if (last < 0)
    return obj === undefined ? fallback : obj
  for (let i = 0; i < last; i++) {
    if (obj == null)
      return fallback

    obj = obj[path[i]]
  }
  if (obj == null)
    return fallback
  return obj[path[last]] === undefined ? fallback : obj[path[last]]
}

export function getObjectValueByPath(obj, path, fallback) {
  // credit: http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key#comment55278413_6491621
  if (obj == null || !path || typeof path !== 'string')
    return fallback

  if (obj[path] !== undefined)
    return obj[path]

  path = path.replace(/\[(\w+)\]/g, '.$1') // convert indexes to properties
  path = path.replace(/^\./, '') // strip a leading dot
  return getNestedValue(obj, path.split('.'), fallback)
}

export function getUnit(value) {
  if (value == null)
    return ''

  value = (`${value}`).substr((`${parseFloat(value)}`).length)
  return isNaN(value) ? value : ''
}

export function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

export const kebabCase = cacheFunction((str) => {
  if (!str || typeof str !== 'string')
    return

  return str.replace(hyphenateExp, '-$1').toLowerCase()
})

export function noop() { }

export function uniqueId(prefix = '') {
  return prefix + ++nextUid
}

export function omit(obj, props = []) {
  if (!Array.isArray(props))
    props = [props]

  props = props.map(prop => `${prop}`)

  return Object.keys(obj).reduce((res, key) => {
    if (!props.includes(key))
      res[key] = obj[key]

    return res
  }, {})
}

export function pick(obj, props = []) {
  if (!Array.isArray(props))
    props = [props]

  return props.reduce((res, key) => {
    key += ''

    if (key)
      res[key] = obj[key]

    return res
  }, {})
}

export function ellipseText(text = '', maxLength = 9999) {
  if (text.length <= maxLength)
    return text

  const _maxLength = maxLength - 3
  let ellipse = false
  let currentLength = 0
  const result
    = `${text
      .split(' ')
      .filter((word) => {
        currentLength += word.length
        if (ellipse || currentLength >= _maxLength) {
          ellipse = true
          return false
        }
        else {
          return true
        }
      })
      .join(' ')}...`
  return result
}

export function ellipseAddress(address = '', start = 6, end = 4) {
  return `${address.slice(0, start)}...${address.slice(-end)}`
}

export function removeTrailingZeroes(value) {
  if (isNumeric(value))
    return String(value).replace(/(\.[0-9]*[1-9])0+$|\.0*$/, '$1')

  return String(value)
}
