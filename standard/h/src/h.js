export default (tagName, attrs) => {
  const element = document.createElement(tagName)

  Object
    .entries(attrs)
    .forEach(([key, value]) => element.setAttribute(key, value))

  return element
}
