export default function (to, from, savedPosition) {
  console.log(from)
  if (to.hash) {
    return {selector: to.hash}
  } else if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}