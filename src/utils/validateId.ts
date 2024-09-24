export const validateAndParseId = (idString: string): number | null => {
  const id = parseInt(idString, 10)
  if (isNaN(id)) {
    return null
  }
  return id
}
