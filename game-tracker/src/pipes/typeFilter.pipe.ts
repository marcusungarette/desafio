import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "typeFilter",
})
export class TypeFilterPipe implements PipeTransform {
  transform(value: any, filters?: any): any {
    if (!value) {
      return;
    }
    if (!filters) {
      return value;
    }
    filters = filters.toLowerCase();

    return value.filter((item) => {
      let matchFound = false;

      if (item.salePrice) {
        const salePrice = item.salePrice;

        const searchSalePrice = JSON.stringify(salePrice)
          .toLowerCase()
          .includes(filters);

        if (searchSalePrice) {
          matchFound = true;
        }
      }
      return matchFound;
    });
  }
}
