import { EyeIcon } from "@/assets/icons/EyeIcon";
import FormInput from "./FormInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const LoginForm = () => {
  const { t } = useTranslation();

  const [showPassword, setShowPassword] = useState(false);
  const validationSchema = Yup.object({
    username: Yup.string().required(t("vinaScan.login.usernameRequiredError")),
    password: Yup.string().required(t("vinaScan.login.passwordRequiredError")),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      //handle submit form here
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 w-full">
      <FormInput
        label={t("vinaScan.login.username")}
        placeholder={t("vinaScan.login.usernamePlaceholder")}
        error={
          formik.touched.username && formik.errors.username
            ? formik.errors.username
            : null
        }
        className="lg:w-[400px]"
      />
      <FormInput
        label={t("vinaScan.login.password")}
        placeholder="*************"
        error={
          formik.touched.username && formik.errors.username
            ? formik.errors.username
            : null
        }
        type={showPassword ? "text" : "password"}
        endIcon={<div className="flex items-center justify-center w-[38px] h-[38px]" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeIcon color="#6c757d" /> : <EyeIcon />}</div>}
        forgotPassword={t("vinaScan.login.forgotYourPassword")}
      />
      <div className="flex gap-1">
        <input type="checkbox" className="border border-[#6c757d]"/>
        <span className="text-gray550">{t("vinaScan.login.rememberAutoLogin")}</span>
      </div>
      <button type="submit" className="button-primary">{t("vinaScan.login.loginBtn")}</button>
    </form>
  );
};
