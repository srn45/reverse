import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reverse',
  templateUrl: './reverse.component.html',
  styleUrls: ['./reverse.component.css']
})
export class ReverseComponent implements OnInit {
      
  word =[];
  result=[];

  // print(){
  //   for(let index=0;index<this.word.length;index++){
  //     this.result= this.word[index]+this.result;
  //   }
  // }
  print(){
     
    for(let i=1; i<this.word.length;i++){
      if(this.word[i]==this.word[i-1]){
       this.result=this.word[i]
      }
      else{
        this.result=this.word;
      }
       
    }
    return this.result;
  }
  reset(){
    
    this.word =[];
    this.result =[];
   
  }
  constructor() { }

  ngOnInit(): void {
  }

}
