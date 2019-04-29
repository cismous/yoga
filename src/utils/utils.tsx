import { Location, History } from 'history'

export function getCookie(name: string): string {
  let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  let arr = document.cookie.match(reg)
  if (arr) {
    return decodeURIComponent(arr[2])
  } else {
    return ''
  }
}

export function getStrLength(str: string): number {
  let strLen = 0

  for (let i = 0, len = str.length; i < len; i++) {
    let charCode = str.charCodeAt(i)
    if (charCode <= 128) strLen += 1
    else strLen += 2
  }

  return strLen
}

export function updateQuery<T extends { [key: string]: string | number }>(
  props: { location: Location; history: History },
  query: T,
): void {
  const { history, location } = props
  const searchParams = new URLSearchParams(location.search)

  const updateSearchParams = (key: string, value: string | number): void => {
    if (!query[key] && query[key] !== 0) return
    if (searchParams.has(key)) searchParams.set(key, value.toString())
    else searchParams.append(key, value.toString())
  }

  const keys = Object.keys(query)
  for (const key of keys) updateSearchParams(key, query[key])

  history.replace({
    pathname: location.pathname,
    search: searchParams.toString(),
  })
}
