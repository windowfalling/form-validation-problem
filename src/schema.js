import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter an email"),
  password: yup
    .string()
    .min(8)
    .required(),
  colour: yup.string().required(),
  animal: yup
    .string()
    .required()
    .test("animalMinRequirement", "Please select at least 2 animals", value => {
      return value && value.split(",").length >= 2;
    }),
  tiger_type: yup
    .string()
    .test("tigerTypeRequired", "Type of tiger is required", function(value) {
      const { animal } = this.parent;
      const hasSelectedTiger = animal && animal.indexOf("tiger") >= 0;
      return !hasSelectedTiger || Boolean(value);
    })
});

export default schema;
