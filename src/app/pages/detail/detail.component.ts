import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/services/card.service';
import { Observable, tap } from 'rxjs';
import { Card } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  id!: string;
  card$!: Observable<Card>;
  constructor(
    private route: ActivatedRoute,
    private cardService: CardService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || ''; // ruta del momento
    this.card$ = this.cardService.getCard(this.id)//.pipe(tap(console.log));
    /* .subscribe((res) => {
      console.log(res); // al final desusbscribirnos de los suubscribes
    }); */
    // console.log(this.id);
  }
}
