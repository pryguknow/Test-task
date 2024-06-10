import { stubObject } from "lodash";
import type { TSelectorsList, TStringArrayInObject } from "../types/types";



export const citiesList: TStringArrayInObject = {
    NCR: ['Delhi','Gurgaon', 'Noida'],
    UttarPradesh: ['Agra', 'Lucknow', 'Merrut'],
    Haryana: ['Karnal', 'Panipat'],
    Rajasthan: ['Jaipur', 'Jaiselmer']
}

export const genderSelectors: TSelectorsList  = {
    Male: 'gender-radio-1',
    Female: 'gender-radio-2',
    Other: 'gender-radio-3'
};
export const hobbiesSelectors: TSelectorsList = {
    Reading: 'hobbies-checkbox-1',
    Sport: 'hobbies-checkbox-2',
    Music: 'hobbies-checkbox-3'
};

export const statesListSelectors: TSelectorsList = {
    NCR: "#react-select-3-option-0",
    UttarPradesh: "#react-select-3-option-1",
    Haryana: "#react-select-3-option-2",
    Rajasthan: "#react-select-3-option-3"
};

export const fieldsListSelectors: TSelectorsList = {
    firstNameField: "#firstName",
    lastNameField: "#lastName",
    emailField: "#userEmail",
    mobileField: "#userNumber",
    dateOfBirthField: "#dateOfBirthInput",
    subjectsField: "#subjectsInput",
    currentAdressField: "#currentAddress",
    stateField: "#state",
    cityField: "#city"
}


export const buttonsListSelectors: TSelectorsList = {
    chooseFileButton: "#uploadPicture",
    submitButton: "#submit"
};