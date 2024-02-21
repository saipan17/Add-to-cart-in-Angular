import { Component } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

      public totalItem : number = 0;

      constructor(private cartService : CartService){

      }

      ngOnInit() : void{

          this.cartService.getProducts()
          .subscribe(res=>{
              this.totalItem = res.length;
          })
      }
        
}
