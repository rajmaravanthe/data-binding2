import { DataBinding2Page } from './app.po';

describe('data-binding2 App', function() {
  let page: DataBinding2Page;

  beforeEach(() => {
    page = new DataBinding2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
