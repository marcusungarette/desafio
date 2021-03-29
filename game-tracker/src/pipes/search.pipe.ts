import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "search",
})
export class SearchPipe implements PipeTransform {
  transform(value: any, searchText?: any): any {
    if (!value) {
      return;
    }
    if (!searchText) {
      return value;
    }
    searchText = searchText.toLowerCase();

    return value.filter((item) => {
      let matchFound = false;

      if (item.title) {
        const title = item.title;

        const searchTitle = JSON.stringify(title)
          .toLowerCase()
          .includes(searchText);

        if (searchTitle) {
          matchFound = true;
        }
      }
      return matchFound;
    });
  }
}
