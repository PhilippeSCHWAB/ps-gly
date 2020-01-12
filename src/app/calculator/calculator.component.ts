import { Component, OnInit } from '@angular/core';
import { GlycemielistalimentService } from '../glycemielistaliment.service';
import { ActivatedRoute } from '@angular/router';


import { FormBuilder } from "@angular/forms";

import { Aliment } from '../aliment';

import { IngredientCalc } from '../ingredientCalc';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})


export class CalculatorComponent implements OnInit {
  //aliment;
  alimentList = this.glycemielistalimentService.aliments;
  ingredients = [];
  ingredientForm;
  alimentCalc: IngredientCalc;


  alimentForm: Aliment;
  calculatorForm;

  carbsCalc; // Calcul intermédiaire carbs portion
  igCalc; // Calcul intermédiaire charge glycémique portion
  totalIgCalc; // Somme des ig calculés des portions ajoutées


  constructor(
    //    private route: ActivatedRoute,
    private glycemielistalimentService: GlycemielistalimentService,
    private formBuilder: FormBuilder

  ) {
    this.ingredientForm = this.formBuilder.group({
      aliment: '',
      portionGram: ''
    })

  }


  OnSubmit(ingredientData) {
    this.alimentForm = ingredientData.aliment; // récupération des 3 datas Aliment
    // Calculs des valeurs carbs et ig de la portion ajoutée
    this.carbsCalc = this.alimentForm.carbs * ingredientData.ingredientGram / 100;
    this.igCalc = this.carbsCalc * this.alimentForm.ig / 100;

    // Instanciation de l'objet alimentCalc avec les propriétés à afficher dans le formulaire portionForm
    this.alimentCalc = {
      name: this.alimentForm.name,
      ig: this.alimentForm.ig,
      carbsCalc: this.carbsCalc,
      igCalc: this.igCalc
    };

    // Ajout des données AlimentCalc dans le tableau portions
    this.ingredients.push(this.alimentCalc);
    // Tableau de valeurs filtrées sur les ig calculés des portions ajoutées
    //const ingredientsIgCalc = this.ingredients.map(ingredient => ingredient.igCalc);
    // Somme des ig calculés des portions ajoutées
    var totalIgCalc = this.ingredients.reduce((acc, ingredient) => acc + ingredient.igCalc, 0);
    totalIgCalc = totalIgCalc.toFixed(2); // valeur avec 2 décimales

    const displaylIgCalc: HTMLElement = document.getElementById('sumIG') as HTMLElement;
    displaylIgCalc.innerHTML = '<h1><font color="orange">' + totalIgCalc + '</font"></h1>';

    // Reset du formulaire
    this.ingredientForm.reset();

    console.log(this.ingredients);
    console.log(totalIgCalc);
  }


  ngOnInit() {
  }
}