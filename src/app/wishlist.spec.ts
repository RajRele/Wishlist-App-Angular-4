import {Wishlist} from './wishlist';

describe('Wishlist', () => {
  it('should create an instance', () => {
    expect(new Wishlist()).toBeTruthy();
  });

it('should accept values in the constructor', () => {
  const wishlist = new Wishlist({
    title: 'Bharat Hello',
    complete: true
  });

  expect(wishlist.title).toEqual('Bharat Hello');
  expect(wishlist.complete).toEqual(true);
});
});
