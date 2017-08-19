import { Component } from '@angular/core';
import { Wishlist } from './wishlist';
import { WishlistDataService } from './wishlist-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WishlistDataService]
})
export class AppComponent {
  newWish: Wishlist = new Wishlist();
  constructor(private wishListData: WishlistDataService) {

    }

  addWish() {
    this.wishListData.addWishlist(this.newWish);
    this.newWish = new Wishlist();
  }

  toggleWishComplete(wishList) {
    this.wishListData.toggleWishlistComplete(wishList);
  }

  removeWish(wishlist) {
    this.wishListData.deleteWishlistById(wishlist.id);
  }

  get wishes(){
    return this.wishListData.getAllWishlists();
  }
}
