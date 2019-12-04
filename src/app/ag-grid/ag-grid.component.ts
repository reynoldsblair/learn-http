import {
  Component,
  OnInit,
  ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from '@ag-grid-community/angular';
import { AllModules, Module } from '@ag-grid-enterprise/all-modules';
import { Subscription } from 'rxjs';

import { CdfDataService } from '../services/cdf-data.service';


@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {
  @ViewChild('agGrid', {static: false}) agGrid: AgGridAngular;
  gridApi: any;
  gridColumnApi: any;
  modules: Module[] = AllModules;

  columnDefs: any;
  defaultColDef: any;
  rowData: any[];
  sideBar: any;

  private cdfSub: Subscription;
  isLoading = false;

  constructor(private http: HttpClient, public cdfDataService: CdfDataService) {
    this.columnDefs = [
      {
        headerName: 'Primary Event Type',
        field: 'PrimaryEventType',
        checkboxSelection: true
      },
      {
        headerName: 'Classification',
        field: 'Classification'
      },
      {
        headerName: 'Date Occurred',
        field: 'DateOccurred'
      },
      {
        headerName: 'Country',
        field: 'Country'
      },
      {
        headerName: 'Primary Event Category',
        field: 'PrimaryEventCategory'
      },
      {
        headerName: 'Tracking Number',
        field: 'TrackingNumber',
        sortable: true,
        filter: true,
        enablePivot: false,
        enableValue: false
      },
      {
        headerName: 'Title',
        field: 'Title',
        sortable: false,
        filter: true,
        enablePivot: false,
        enableRowGroup: false,
        enableValue: false
      },
      {
        headerName: 'Summary',
        field: 'Summary',
        sortable: false,
        filter: true,
        enablePivot: false,
        enableRowGroup: false,
        enableValue: false
      },
      {
        headerName: 'Enemy KIA',
        field: 'EnemyKIA'
      },
      {
        headerName: 'Friendly KIA',
        field: 'FriendlyKIA'
      },
      {
        headerName: 'Unit Name',
        field: 'UnitName'
      },
      {
        headerName: 'CF/CIV WIA',
        field: 'CFCIVWIA'
      },
      {
        headerName: 'Unit Activity',
        field: 'UnitActivity'
      },
      {
        headerName: 'CF/CIV KIA',
        field: 'CFCIVKIA'
      },
      {
        headerName: 'Enemy WIA',
        field: 'EnemyWIA'
      },
      {
        headerName: 'Civilian WIA',
        field: 'CivilianWIA'
      },
      {
        headerName: 'Civilian KIA',
        field: 'CivilianKIA'
      }
    ];
    this.defaultColDef = {
      enableValue: true,
      enableRowGroup: true,
      enablePivot: true,
      sortable: true,
      filter: true
    };
    this.sideBar = {
      toolPanels: [
          {
              id: 'columns',
              labelDefault: 'Columns',
              labelKey: 'columns',
              iconKey: 'columns',
              toolPanel: 'agColumnsToolPanel',
          },
          {
              id: 'filters',
              labelDefault: 'Filters',
              labelKey: 'filters',
              iconKey: 'filter',
              toolPanel: 'agFiltersToolPanel',
          }
      ],
      defaultToolPanel: 'filters'
    };
  }

/* autoGroupColumnDef = {
  headerName: 'Model',
  field: 'model',
  cellRenderer: 'agGroupCellRenderer',
  cellRendererParams: {
      checkbox: true
  }
}; */

onGridReady(params) {
  this.gridApi = params.api;
  this.gridColumnApi = params.columnApi;
  this.isLoading = true;
  this.cdfSub = this.cdfDataService.getCdfDataUpdatedListener()
    .subscribe((cdfData: any[]) => {
      this.rowData = cdfData;
    });
  this.cdfDataService.getCdfData();
  this.isLoading = false;
}

  ngOnInit() { }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.TrackingNumber + ' ' + node.Title).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
    console.log(selectedData);
  }
}
