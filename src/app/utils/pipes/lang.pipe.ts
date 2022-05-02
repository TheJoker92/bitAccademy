import { Pipe, PipeTransform } from '@angular/core';
import * as dataRaw from '../../../assets/lang/lang-IT.json';


@Pipe({
  name: 'lang'
})
export class LangPipe implements PipeTransform {

  static data = JSON.parse(JSON.stringify(dataRaw))

  transform(value: string): unknown {
    return LangPipe.data[value];
  }

  public static translate(value: string): string {
    return LangPipe.data[value]
  }

}
