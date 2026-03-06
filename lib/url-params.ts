export function getURLParams(): string {
  if (typeof window === "undefined") return ""

  const params = new URLSearchParams(window.location.search)
  const paramString = params.toString()

  return paramString ? `?${paramString}` : ""
}

export function buildCheckoutURL(baseUrl: string): string {
  const urlParams = getURLParams()
  return `${baseUrl}${urlParams}`
}
