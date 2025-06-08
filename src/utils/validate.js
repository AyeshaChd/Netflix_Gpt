export const checkValidateData = (
  firstName,
  lastName,
  email,
  password,
  isSignInForm
) => {
  const isFirstNameValid = /\b([A-ZÀ-ÿ][-,a-z. '])/.test(firstName);
  const isLastNameValid = /\b([A-ZÀ-ÿ][-,a-z. '])/.test(lastName);
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isSignInForm) {
    if (!isFirstNameValid) {
      return "First name is not valid";
    }
    if (!isLastNameValid) return "Second name is not valid";

    if (lastName.length > 12)
      return "Second name  length should be less than 12";
    if (firstName.length > 12)
      return "first name  length should be less than 12";
  }

  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";
  return null; //if not error then it will return null
};
