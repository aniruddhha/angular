import { Component, OnInit } from '@angular/core';
import { MainResponse, Usd } from './dto';
import { RateService } from './rate.service';

/**
 *  1 - Created required UI
 *  2 - Imported HttpClientModule
 *  3 - Created HttpService 
 *  4 - Studied the Json Response properly
 *  5 - Converted JSON to TS interfaces
 *  6 - written HTTP get in side service
 *  7 - Subscribed service in component
 *  8 - Presented data from response 
 */


@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {

  usdPr = ''
  constructor(
    private rates: RateService
  ) { }

  ngOnInit(): void {
    this.rates.rates().subscribe(
      res => {
        const obj: MainResponse = res as MainResponse
        console.log(obj)
        this.usdPr = obj.bpi.USD.rate
      }, // partial completeion
      this.rates.errorHandler, // error
      () => console.log(`Completed`) // complete
    )
  }

  onPost() {

    const formData: Usd = {
      code: '131',
      rate: 'kjkhj',
      rate_float: 5665,
      description: 'sample',
      symbol: 'USD'
    }

    this.rates.create(formData).subscribe(
      res => console.log(res),
      this.rates.errorHandler
    )
  }
}
