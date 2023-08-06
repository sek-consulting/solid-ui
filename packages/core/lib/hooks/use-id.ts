let uniqueId = 0
const getUniqueId = () => uniqueId++
const prefix = "S_"

export function useId() {
  let ref
  if (ref === undefined) {
    ref = getUniqueId()
  }
  return `${prefix}${ref}`
}
