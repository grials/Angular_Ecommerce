import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input('src') linkImg: string | null = null;
  @Input('clickTitle') title: string | null = null;
  @Input('isOfert') isOfert: boolean | null = null;
  @Input('title') nameProduct: string | null = null;
  @Input('price') price: number | null = null;
  @Input('titleOfert') ofert: string | null | undefined = null;

  constructor() {}

  ngOnInit(): void {}
}
