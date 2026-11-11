import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() name!: string;
  @Input() price!: number;

  @Output() buy = new EventEmitter<void>();

  onBuy(): void {
    this.buy.emit();
  }
}