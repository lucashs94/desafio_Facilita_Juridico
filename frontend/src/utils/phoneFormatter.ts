export const formatPhone = (input: string) => {
  const cleaned = ('' + input).replace(/\D/g, '')

  const limited = cleaned.slice(0, 11)

  const formatted = limited.replace(
    /(\d{2})(\d{0,5})(\d{0,4})/,
    function (_, p1, p2, p3) {
      let result = ''
      if (p1) result += `(${p1}`
      if (p2) result += `) ${p2}`
      if (p3) result += `-${p3}`
      return result
    }
  )

  return formatted
}
