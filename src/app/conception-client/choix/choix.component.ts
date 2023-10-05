import { Component, OnInit } from '@angular/core';
import { Meta,Title } from '@angular/platform-browser';

@Component({
  selector: 'app-choix',
  templateUrl: './choix.component.html',
  styleUrls: ['./choix.component.css']
})
export class ChoixComponent implements OnInit {

  constructor(private meta: Meta,
    private title: Title) {
    this.meta.addTags([
      {name: 'description', content: 'Centre Tunisien des affaires spécialiste dans le domaine de l’immobilier & de construction. Prospecter, acheter, vendre, louer en Tunisie.'},
      {name: 'author', content: 'buttercms'},
      {name: 'keywords', content: 'Angular, ButterCMS'}
    ]);
    this.setTitle('Tunisie Immobilier | Centre tunisien des affaires');
   }
   public setTitle( newTitle: string) {
    this.title.setTitle( newTitle );
    } 
  ngOnInit(): void {
  }

}
