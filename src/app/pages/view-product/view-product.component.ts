import { IProduct } from './../../interfaces/Objects/home.state.interface';
import { Component, OnInit, DoCheck, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MyStore } from 'src/app/context/store/store';
import { ILanguageViewProductPage } from 'src/app/interfaces/Objects/viewProduct.interface';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent implements OnInit, DoCheck {
  public product: IProduct | null = null;
  public idProduct: number = 0;
  public existProduct: boolean = false;
  public language: ILanguageViewProductPage | null = null;
  public cantProd: FormControl = new FormControl('');
  public maxProdError: boolean = false;

  @HostListener('input') onInput() {
    if (this.cantProd?.dirty || this.cantProd?.touched) {
      this.maxProdError = false;
      if (this.cantProd?.value < 0) {
        this.cantProd.setValue(0);
      } else if (this.cantProd?.value >= (this.product?.maxCant || 1)) {
        this.cantProd.setValue(this.product?.maxCant);
        this.maxProdError = true;
      } else if (!parseInt(this.cantProd?.value)) {
        this.cantProd.setValue(0);
      }
    }
  }
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    if (parseInt(this.route.snapshot.params.id)) {
      this.idProduct = parseInt(this.route.snapshot.params.id);
      this.isExistProduct(
        MyStore.getStateHome().homeContent.product,
        this.idProduct
      );
      this.language = MyStore.getViewProductPage();
      this.cantProd = new FormControl(0, [
        Validators.min(0),
        Validators.max(this.product?.maxCant || 0),
      ]);
    } else {
      this.router.navigateByUrl('/products/404');
    }
  }

  ngDoCheck(): void {}

  isExistProduct(products: IProduct[], idProduct: number): boolean {
    for (const product of products) {
      if (product.id === idProduct) {
        this.existProduct = true;
        this.product = product;
        return true;
      }
    }

    this.router.navigateByUrl('/products/404');

    return false;
  }
}
