import { Injectable } from '@angular/core';
import * as dateFns from 'date-fns';
import * as dateFnsTz from 'date-fns-tz';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }


  public fileName() {
    const timeZone = 'America/Sao_Paulo';
    const data = new Date();
    const spDate = dateFnsTz.utcToZonedTime(data, timeZone);
    const result = dateFnsTz.format(spDate, 'yyyy-MM-dd-HH:mm', { timeZone });
    let filename = '';
    filename = `${result}`;
    const size = filename.length;
    let newString = '';

    for (let i = 0; i < size; i++) {

      // tslint:disable-next-line:quotemark
      if (filename.charAt(i) !== " ") {
        newString += filename.charAt(i);
      }
    }
    console.log(newString);
    return newString;
  }

  // Convert to Base 64
  public toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  })

  // Compare Dates
  async validateDate(initial, final) {

    const splitDateInitial = initial.split('/');
    const splitDateFinal = final.split('/');
    const splitYearInitial = splitDateInitial[2].split(' ');
    const splitYearFinal = splitDateFinal[2].split(' ');
    const splitHourInitial = splitYearInitial[1].split(':');
    const splitHourFinal = splitYearFinal[1].split(':');

    const yearInitial = splitYearInitial[0];
    const yearFinal = splitYearFinal[0];
    const monthInitial = splitDateInitial[1];
    const monthFinal = splitDateFinal[1];
    const dayInitial = splitDateInitial[0];
    const dayFinal = splitDateFinal[0];

    const hourInitial = splitHourInitial[0];
    const hourFinal = splitHourFinal[0];
    const minuteInitial = splitHourInitial[1];
    const minuteFinal = splitHourFinal[1];


    const difference = dateFns.differenceInMinutes(
      new Date(yearFinal, monthFinal, dayFinal, hourFinal, minuteFinal, 0),
      new Date(yearInitial, monthInitial, dayInitial, hourInitial, minuteInitial, 0),

    );

    if (difference >= 0) {
      return true;
    } else {
      return false;
    }
  }


  async formatDate(data) {
    const dataSplit = data.split(' ');
    const date = dataSplit[0];
    const time = dataSplit[1];
    const dateSplit = date.split('/');
    const day = dateSplit[0];
    const month = dateSplit[1];
    const year = dateSplit[2];
    const timeSplit = time.split(':');

    const result = `${year}-${month}-${day} ${time}`;
    return result;
  }

  formatFrontDate(data) {
    const timeZone = 'America/Sao_Paulo';
    const resultData = new Date(data);
    const spDate = dateFnsTz.utcToZonedTime(resultData, timeZone);
    const result = dateFnsTz.format(spDate, 'dd/MM/yyyy HH:mm', { timeZone });
    return result;
  }

  formatFrontTimeDate(data) {
    const timeZone = 'America/Sao_Paulo';
    const resultData = new Date(data);
    const spDate = dateFnsTz.utcToZonedTime(resultData, timeZone);
    const result = dateFnsTz.format(spDate, 'HH:mm', { timeZone });
    return result;
  }

  formatFrontDateWithoutTime(data) {
    const timeZone = 'America/Sao_Paulo';
    const resultData = new Date(data);
    const spDate = dateFnsTz.utcToZonedTime(resultData, timeZone);
    const result = dateFnsTz.format(spDate, 'dd/MM/yyyy', { timeZone });
    return result;
  }
}
