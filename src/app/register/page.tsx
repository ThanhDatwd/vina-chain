"use client";
import { RegisterForm } from "@/components/RegisterForm";
import { SignInUpLayout } from "@/components/SignInUpLayout";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import { useTranslation } from "react-i18next";

export default function RegisterPage() {
  const { t } = useTranslation();

  return (
    <ScanLayout containerStyle="bg-[#FAFAFA] dark:bg-primaryDark font-sans-serif relative">
      <SignInUpLayout title={t("vinaScan.register.title")} subTitle={t("vinaScan.register.alreadyHaveAnAccount")}>
        <RegisterForm />
      </SignInUpLayout>
    </ScanLayout>
  );
}
