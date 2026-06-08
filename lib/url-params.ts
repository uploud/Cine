export function getURLParams(): string {
  if (typeof window === "undefined") return ""

  const params = new URLSearchParams(window.location.search)
  const paramString = params.toString()

  return paramString ? `?${paramString}` : ""
}

export function buildCheckoutURL(baseUrl: string): string {
  const urlParams = getURLParams()
  if (!urlParams) return baseUrl

  const separator = baseUrl.includes("?") ? "&" : "?"
  // Remove the leading "?" from urlParams if it exists since we use separator
  const paramsString = urlParams.startsWith("?") ? urlParams.substring(1) : urlParams

  return `${baseUrl}${separator}${paramsString}`
}
