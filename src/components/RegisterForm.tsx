import { EyeIcon } from "@/assets/icons/EyeIcon";
import FormInput from "./FormInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { t } = useTranslation();

  const validationSchema = Yup.object({
    username: Yup.string().required(t("vinaScan.register.usernameRequiredError")),
    email: Yup.string().required(t("vinaScan.register.emailAddressRequiredError")),
    confirmEmail: Yup.string().required(
      t("vinaScan.register.confirmEmailAddressRequiredError")
    ),
    password: Yup.string().required(t("vinaScan.register.passwordRequiredError")),
    confirmPassword: Yup.string().required(
      t("vinaScan.register.confirmPasswordRequiredError")
    ),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      //handle submit form here
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
      <FormInput
        label={t("vinaScan.register.username")}
        placeholder={t("vinaScan.register.username")}
        error={
          formik.touched.username && formik.errors.username
            ? formik.errors.username
            : null
        }
        className="lg:w-[400px]"
      />
      <FormInput
        label={t("vinaScan.register.emailAddress")}
        placeholder={t("vinaScan.register.emailAddressPlaceholder")}
        error={
          formik.touched.email && formik.errors.email
            ? formik.errors.email
            : null
        }
      />
      <FormInput
        label={t("vinaScan.register.confirmEmailAddress")}
        placeholder={t("vinaScan.register.confirmEmailAddressPlaceholder")}
        error={
          formik.touched.confirmEmail && formik.errors.confirmEmail
            ? formik.errors.confirmEmail
            : null
        }
      />
      <FormInput
        label={t("vinaScan.register.password")}
        placeholder="*************"
        error={
          formik.touched.username && formik.errors.username
            ? formik.errors.username
            : null
        }
        type={showPassword ? "text" : "password"}
        endIcon={
          <div
            className="flex items-center justify-center w-[38px] h-[38px]"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeIcon color="#6c757d" /> : <EyeIcon />}
          </div>
        }
      />
      <FormInput
        label={t("vinaScan.register.confirmPassword")}
        placeholder="*************"
        error={
          formik.touched.confirmPassword && formik.errors.confirmPassword
            ? formik.errors.confirmPassword
            : null
        }
        type={showConfirmPassword ? "text" : "password"}
        endIcon={
          <div
            className="flex items-center justify-center w-[38px] h-[38px]"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeIcon color="#6c757d" /> : <EyeIcon />}
          </div>
        }
      />
      <div className="flex gap-1">
        <input type="checkbox" className="border border-[#6c757d]" />
        <label className="text-gray550">
          <span>{t("vinaScan.register.agreeToThe")}</span>&nbsp;
          <Link href={"/terms"}>{t("vinaScan.register.termsAndConditions")}</Link>
        </label>
      </div>
      <div className="flex items-start gap-1">
        <input
          type="checkbox"
          className="relative top-1 border border-[#6c757d]"
        />
        <label className="text-gray550 lg:w-[400px]">
          <span>
            {t("vinaScan.register.receiveVinascan")}{" "}
            <Link href={""}>{t("vinaScan.register.unsubscribe")}</Link>&nbsp;
            {t("vinaScan.register.atAnyTime")}
          </span>
        </label>
      </div>
      <button type="submit" className="button-primary">
        {t("vinaScan.register.createAnAccount")}
      </button>
    </form>
  );
};
