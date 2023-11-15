import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  clicks1 = [18593];
  clicks2 = [14722];
  clicks3 = [12767];
  clicks4 = [17457];
  clicks5 = [4637];
  clicks6 = [22000];
  clicks7: any;
  clicks8: any;


  constructor() {
    const storedClicks1 = localStorage.getItem('clicks1');
    if (storedClicks1) {
      this.clicks1 = JSON.parse(storedClicks1);
    }
    const storedClicks2 = localStorage.getItem('clicks2');
    if (storedClicks2) {
      this.clicks2 = JSON.parse(storedClicks2);
    }
    const storedClicks3 = localStorage.getItem('clicks3');
    if (storedClicks3) {
      this.clicks3 = JSON.parse(storedClicks3);
    }
    const storedClicks4 = localStorage.getItem('clicks4');
    if (storedClicks4) {
      this.clicks4 = JSON.parse(storedClicks4);
    }
    const storedClicks5 = localStorage.getItem('clicks5');
    if (storedClicks5) {
      this.clicks5 = JSON.parse(storedClicks5);
    }
    const storedClicks6 = localStorage.getItem('clicks6');
    if (storedClicks6) {
      this.clicks6 = JSON.parse(storedClicks6);
    }
    const storedClicks7 = localStorage.getItem('clicks7');
    if (storedClicks7) {
      this.clicks7 = JSON.parse(storedClicks7);
    }
    const storedClicks8 = localStorage.getItem('clicks8');
    if (storedClicks8) {
      this.clicks8 = JSON.parse(storedClicks8);
    }
  }
  getClicks1() {
    return this.clicks1[this.clicks1.length - 1];
  }
  getClicks2() {
    return this.clicks2[this.clicks2.length - 1];
  }
  getClicks3() {
    return this.clicks3[this.clicks3.length - 1];
  }
  getClicks4() {
    return this.clicks4[this.clicks4.length - 1];
  }
  getClicks5() {
    return this.clicks5[this.clicks5.length - 1];
  }
  getClicks6() {
    return this.clicks6[this.clicks6.length - 1];
    
  }
  // getClicks7() {
  //   return this.clicks7[this.clicks7.length - 1];
    
  // }
  // getClicks8() {
  //   return this.clicks8[this.clicks8.length - 1];
    
  // }
  addClick1() {
    this.clicks1.push(this.clicks1[this.clicks1.length - 1] + 1);
    localStorage.setItem('clicks1', JSON.stringify(this.clicks1));
  }
  addClick2() {
    this.clicks2.push(this.clicks2[this.clicks2.length - 1] + 1);
    localStorage.setItem('clicks2', JSON.stringify(this.clicks2));
  }
  addClick3() {
    this.clicks3.push(this.clicks3[this.clicks3.length - 1] + 1);
    localStorage.setItem('clicks3', JSON.stringify(this.clicks3));
  }
  addClick4() {
    this.clicks4.push(this.clicks4[this.clicks4.length - 1] + 1);
    localStorage.setItem('clicks4', JSON.stringify(this.clicks4));
  }
  addClick5() {
    this.clicks5.push(this.clicks5[this.clicks5.length - 1] + 1);
    localStorage.setItem('clicks5', JSON.stringify(this.clicks5));
  }
  addClick6() {
    this.clicks6.push(this.clicks6[this.clicks6.length - 1] + 1);
    localStorage.setItem('clicks6', JSON.stringify(this.clicks6));
  }
  addClick7() {
    this.clicks7.push(this.clicks7[this.clicks7.length - 1] + 1);
    localStorage.setItem('clicks7', JSON.stringify(this.clicks7));
  }
  addClick8() {
    this.clicks8.push(this.clicks8[this.clicks8.length - 1] + 1);
    localStorage.setItem('clicks8', JSON.stringify(this.clicks8));
  }
}
