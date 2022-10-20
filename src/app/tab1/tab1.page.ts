import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { CategoriasService } from '../services/categorias.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  categorias;
  productos;
  constructor(
    private categoriasService: CategoriasService,
    private productosService: ProductosService
    ) {}

  ngOnInit() {
    this.loadCategories();
    this.loadProducts();
  }

  loadCategories() {
    this.categoriasService.getCategory().subscribe((res) => {
      console.log('el res', res);
      this.categorias = res;
    });
  }

  loadProducts() {
    this.productosService.getProducts().subscribe((res) => {
      console.log('el res', res);
      this.productos = res;
    });
  }
}
