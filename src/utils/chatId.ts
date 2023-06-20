export const formatChatIdToPhoneNumber = (chatId: string): string => {
  let number = chatId.split("@")[0]
  const code = number.substring(0, 2)
  number = number.substring(2)

  const reversedString = number.split("").reverse().join("")
  const formattedString = reversedString.replace(/(\d{4})(?=\d)/g, "$1-")
  return `+${code} ${formattedString.split("").reverse().join("")}`
}
