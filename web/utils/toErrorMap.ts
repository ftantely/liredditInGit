import { FieldError } from "../src/generated/graphql";

export const toErrorMap = (errors: FieldError[]) => {
  /* Check https://www.typescriptlang.org/docs/handbook/utility-types.html to understand
    Record<string, string> */
  const errorMap: Record<string, string> = {};
  errors.forEach(({ field, message }) => {
    errorMap[field] = message;
  });
  return errorMap;
};
