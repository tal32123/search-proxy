import en from "./locales/en";

 
const useTranslation = () => {
  const t = (key: string) => {
    return en[key] || key;
  };

  return { t };
};

export default useTranslation;
