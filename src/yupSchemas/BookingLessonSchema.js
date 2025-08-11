import * as Yup from "yup";

export const BookingLessonSchema = Yup.object().shape({
  picked: Yup.string().required(
    "Kindly choose a purpose for learning English."
  ),
  fullname: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNuber: Yup.number().min(8, "Too Short!").required("Required"),
});
