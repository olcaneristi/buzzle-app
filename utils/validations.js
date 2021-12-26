const emailRegex =
   /^(?=.{6,265}$)(-|_)*[^\W_](?:[+\w.-]*[^\W_])*(-|_|\.)*@(?:\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.|(?:[\w-]+\.)+)(?:[a-zA-Z]{2,13}|[0-9]{1,3})\]?$/;

export const allValidations = {
   REQUIRED: 'This field is required.',
   MIN_LENGTH_PASSWORD: val => ({
      message: `Please enter at least ${val} characters.`,
      value: val,
   }),
   CHECK_VALIDITY_OF_EMAIL: {
      message: 'Please enter a valid e-mail.',
      value: emailRegex,
   },
   CHECK_PASSWORD: {
      message: 'Please enter at least one uppercase letter, one lowercase letter and one number.',
      value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
   },
};
