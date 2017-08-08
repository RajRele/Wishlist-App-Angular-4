import { MyWishlistPage } from './app.po';

describe('my-wishlist App', () => {
  let page: MyWishlistPage;

  beforeEach(() => {
    page = new MyWishlistPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
