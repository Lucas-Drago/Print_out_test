import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imprime',
  templateUrl: './imprime.component.html',
  styleUrls: ['./imprime.component.css']
})
export class ImprimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    imprimir(){
     window.print();
  }

  
}

/* const escpos = require('escpos');
  escpos.SerialPort = require('escpos-serialport');
  
  const serialDeviceOnWindows = new escpos.SerialPort('COM10');
  const serialDeviceOnLinux = new escpos.SerialPort('/dev/usb/lp0', {
    baudRate: 14400,
    stopBit: 2
  }); */
  
