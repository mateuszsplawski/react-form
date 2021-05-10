export const contractorForm = {
  formName: "contractorForm",
  formLayout: "vertical",
  nameField: {
    name: "name",
    label: "Imię",
  },
  surnameField: {
    name: "surname",
    label: "Nazwisko",
  },
  contractorTypeField: {
    name: "type",
    label: "Typ kontrahenta",
    options: {
      person: { value: "person", name: "Osoba" },
      company: { value: "company", name: "Firma" },
    },
  },
  idField: {
    name: "id",
    label: "Number identyfikacyjny",
    person: "Wprowadź numer pesel",
    company: "Wprowadź numer NIP",
    personErrMessage: "Numer pesel składa się z 11 cyfr.",
    companyErrMessage: "Numer NIP składa się z 9 cyfr.",
    defaultErrMessage: "Numer nie jest poprawny.",
  },
  photoField: {
    name: "photo",
    label: "Zdjęcie",
  },
  onFinish: {
    addContractorErrMessage: "Nie znaleziono metody zapisu:",
    fieldsErrMessage: "Musisz uzupełnić wszystkie pola.",
  },
  submitButtonName: "Dodaj kontrahenta",
  resetButtonName: "Wyczyść formularz",
};

export const upload = {
  buttonName: "Wybierz zdjęcie",
  acceptTypes: "image/jpg, image/jpeg",
  imgErrMessage: "Nie udało się pobrać zdjęcia:",
  imgSuccessMessage: "Pobrano zdjęcie:",
};
