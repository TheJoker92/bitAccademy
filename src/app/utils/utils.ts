import { Observable, ReplaySubject } from "rxjs";

export function convertFileToBase64(file : File) : Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event) => {
        if (event && event.target && event.target.result) {
            result.next(btoa(event.target.result.toString()))
        }
    };
    return result;
  }