export const contractorForm = {
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
    options: [
      { value: "person", name: "Osoba" },
      { value: "company", name: "Firma" },
    ],
  },
  idField: {
    name: "id",
    label: "Number identyfikacyjny",
  },
  photoField: {
    name: "photo",
    label: "Zdjęcie",
  },
  submitButtonName: "Submit",
};
