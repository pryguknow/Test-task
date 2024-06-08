import type { TStringArrayInObject } from "../types/types";


export function createCitySelector(citiesList: TStringArrayInObject, state:string, city: string): string{
    let result: string = "Fail";
    citiesList[state].forEach(function(item: string, index: number){
        if(city === citiesList[state][index]){
           result = `#react-select-4-option-${index.toString()}`;
            return result  
        }
    });
    return result
}
