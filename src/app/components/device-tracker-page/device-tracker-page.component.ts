import { Component, OnInit } from '@angular/core';
import { deviceRecords } from 'src/app/utils/device-data';

@Component({
  selector: 'app-device-tracker-page',
  templateUrl: './device-tracker-page.component.html',
  styleUrls: ['./device-tracker-page.component.scss']
})
export class DeviceTrackerPageComponent implements OnInit {
  readonly deviceRecords=deviceRecords
  filteredDeviceRecord=deviceRecords
  searchTerm: string = '';
  filterStatus: string = 'all';
  constructor() { }

  ngOnInit(): void {
  }

// Method to filter the device records based on search term and selected status.

 filteredDevices() {
  // Check if the device hostname or serial contains the search term (case-insensitive).
  this.filteredDeviceRecord= this.deviceRecords.filter(device => {
      const searchMatch = device.hostname.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                          device.serial.toLowerCase().includes(this.searchTerm.toLowerCase());
  // Check if the device status matches the selected filter status (all, Online, or Offline).
    const statusMatch = this.filterStatus === 'all' || device.status === this.filterStatus;
    return searchMatch && statusMatch;
  });
  }
}
