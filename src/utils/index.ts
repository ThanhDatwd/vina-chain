import { onToast } from "@/hooks/useToast";

export const handleCopy = (value: string) => {
    navigator.clipboard
      .writeText(value)
      .then(() => onToast("Copied to clipboard", "info"));
  };