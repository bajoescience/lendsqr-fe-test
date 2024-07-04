export const validateEmail = (email: string):boolean => {
  const re = /^\S+@\S+\.\S+$/
  return re.test(email)
}

export const getNameFromEmail = (email :string | undefined): string | undefined => {
  return email?.substring(0, email?.indexOf("@"));
}
