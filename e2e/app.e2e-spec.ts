import { RewindAngularPage } from './app.po';

describe('rewind-angular App', () => {
  let page: RewindAngularPage;

  beforeEach(() => {
    page = new RewindAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
