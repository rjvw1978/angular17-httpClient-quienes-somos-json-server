import { Component } from '@angular/core';
import { QuienesSomosService } from '../../services/quienes-somos.service';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [],
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent {
  profesionalList:any;
  constructor(private QuienesSomosService:QuienesSomosService)
  {
    this.profesionalList=QuienesSomosService.obtenerProfesionales().subscribe({
      next: (profesionalList) => {
        this.profesionalList=profesionalList;
      },
      error: (error) => {
        console.error(error)
      }
    });
  }

}
