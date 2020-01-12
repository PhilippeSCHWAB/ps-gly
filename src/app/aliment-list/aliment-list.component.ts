import { Component, OnInit , OnChanges, OnDestroy }  from '@angular/core';
import {GlycemielistalimentService} from '../glycemielistaliment.service';

import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-aliment-list',
  templateUrl: './aliment-list.component.html',
  styleUrls: ['./aliment-list.component.css']
})
export class AlimentListComponent implements OnInit {


  alimentList = this.glycemielistalimentService.aliments;

  alimentForm;

  constructor(
    private glycemielistalimentService: GlycemielistalimentService,
    private formBuilder: FormBuilder
    ) {
      this.alimentForm = this.formBuilder.group({
        name: "Saissez un aliment",
        ig: 2030,
        carbs:50
      });
      console.log('coucou, constructeur');
    }
    ngOnInit() {
      console.log("coucou mon composant est prêt");
    }

    clearForm() {
      this.alimentForm.patchValue(
        {
          name: '',
      
        }
         
      )
  alert("dffd");

    }
  
    onSubmit(aliment) {
      alert(aliment);
      this.alimentList.push(aliment);
    }

    ajt(aliment) {
      alert(aliment);
      this.alimentList.push(aliment);
    }



  suppAliment(aliment)
  {
    console.log("avant alim  +"+aliment)
    //this.alimentList.slice(indexof.aliment);

  //  console.log(this.alimentList.splice(this.alimentList.indexOf(aliment), 1 ))
    this.alimentList.splice(this.alimentList.indexOf(aliment), 1 );



  }



  //onSubmit(aliment) {
  // this.alimentList.push(aliment);
  // }

  onNewAliment(aliment) {
    console.log("avant alim")
    this.alimentList.push(aliment);
  }
/*
  suppAliment(aliment)
  {
    console.log("avant alim  +"+aliment)
    //this.alimentList.slice(indexof.aliment);

  //  console.log(this.alimentList.splice(this.alimentList.indexOf(aliment), 1 ))
    this.alimentList.splice(this.alimentList.indexOf(aliment), 1 );

  }
*/
  //onSubmit(aliment) {
 //   this.alimentList.push(aliment);
 // }


}
