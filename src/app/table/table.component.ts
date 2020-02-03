import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit {
  constructor() {}

  public scrollLeftPosition = 0;
  public rows: Row[] = [];

  ngOnInit() {

    this.rows.push({
      title: "fixed row 1",
      columns: [ ]
    });

    this.rows.push({
      title: "",
      columns: [
        { value: "11" },
        { value: "12" },
        { value: "13" }
      ]
    });

    this.rows.push({
      title: "fixed row 3",
      columns: [ ]
    });

    this.rows.push({
      title: "",
      columns: [
        { value: "41" },
        { value: "42" },
        { value: "43" }
      ]
    });

    this.rows.push({
      title: "fixed row 5",
      columns: [ ]
    });

    this.rows.push({
      title: "",
      columns: [
        { value: "61" },
        { value: "62" },
        { value: "63" }
      ]
    });
  }

  public onTableScroll(event): void {
    this.scrollLeftPosition = event.target.scrollLeft;
  }
}

export class Row {
  public title: string;
  public columns: Column[];
}

export class Column {
  public value: string;
}
