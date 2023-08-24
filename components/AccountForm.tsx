import ProfileService from "@/services/ProfileService";
import { Currency, Profile } from "@prisma/client";
import { useFormik } from "formik";
import * as Yup from "yup";

interface AccountFormProps {
  profile?: Profile;
}

export default function AccountForm({ profile }: AccountFormProps) {
  const formik = useFormik({
    initialValues: {
      firstName: profile?.firstName ?? "",
      middleName: profile?.middleName ?? "",
      lastName: profile?.lastName ?? "",
      email: profile?.email ?? "",
      country: profile?.country ?? "",
      province: profile?.province ?? "",
      postalCode: profile?.postalCode ?? "",
      city: profile?.city ?? "",
      street: profile?.street ?? "",
      currency: profile?.currency ?? Currency.PHP,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      middleName: Yup.string().notRequired(),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string().required("Email is required"),
      country: Yup.string().required("Country is required"),
      province: Yup.string().required("Province/State/Region is required"),
      postalCode: Yup.string().required("Postal Code/ZIP Code is required"),
      city: Yup.string().required("City/Town/Village is required"),
      street: Yup.string().required("Street is required"),
    }),
    onSubmit: (values) => {
      if (!profile) {
        return ProfileService.createProfile(values);
      } else {
        return ProfileService.updateProfile(profile.id, values);
      }
    },
  });

  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      <input
        type='text'
        placeholder='First Name'
        {...formik.getFieldProps("firstName")}
      />
      <input
        type='text'
        placeholder='Middle Name'
        {...formik.getFieldProps("middleName")}
      />
      <input
        type='text'
        placeholder='Last Name'
        {...formik.getFieldProps("lastName")}
      />
      <input
        type='text'
        placeholder='Email'
        {...formik.getFieldProps("email")}
      />
      <input
        type='text'
        placeholder='Country'
        {...formik.getFieldProps("country")}
      />
      <input
        type='text'
        placeholder='Postal Code/ZIP Code'
        {...formik.getFieldProps("postalCode")}
      />
      <input
        type='text'
        placeholder='Province/State/Region'
        {...formik.getFieldProps("province")}
      />
      <input
        type='text'
        placeholder='City/Town/Village'
        {...formik.getFieldProps("city")}
      />
      <input
        type='text'
        placeholder='Street Address'
        {...formik.getFieldProps("street")}
      />
      <select {...formik.getFieldProps("street")}>
        <option value={Currency.PHP}>Philippine Peso (PHP)</option>
        <option value={Currency.USD}>United States Dollar (USD)</option>
        <option value={Currency.EUR}>Euro (EUR)</option>
        <option value={Currency.JPY}>Japanese Yen (JPY)</option>
        <option value={Currency.GBP}>British Pound Sterling (GBP)</option>
        <option value={Currency.CAD}>Canadian Dollar (CAD)</option>
        <option value={Currency.AUD}>Australian Dollar (AUD)</option>
        <option value={Currency.CHF}>Swiss Franc (CHF)</option>
        <option value={Currency.CNY}>Chinese Yuan Renminbi (CNY)</option>
        <option value={Currency.INR}>Indian Rupee (INR)</option>
      </select>
      <input
        type='submit'
        value='Submit'
        className='bg-slate-200 hover:bg-slate-300 active:bg-slate-200 py-1 px-2 rounded'
      />
    </form>
  );
}
