import { Component, OnInit } from '@angular/core';
import {Quote} from '../quotes'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes =  [
    new Quote(1,'It does not matter how slowly you go as long as you do not stop.',new Date(2018,3,14) ),
    new Quote(2,' Hardships often prepare ordinary people for an extraordinary destiny',new Date(2018,6,9) ),
    new Quote(3, ' Too many of us are not living our dreams because we are living our fears.',new Date(2018,1,12) ),

]

addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength + 1;
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)
}
deleteQuote(isComplete,index){
    if (isComplete){
        let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)
        if(toDelete){
            this.quotes.splice(index,1)

    }

  }

 }

constructor() { }
ngOnInit(){ }

}
