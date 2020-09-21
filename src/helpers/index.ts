export function isNil(value: any): boolean {
  if (value === undefined || value === null) {
    return true
  }
  return false
}

export default function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}
