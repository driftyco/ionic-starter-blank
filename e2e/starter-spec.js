describe('Ionic Blank Starter Project', function() {
  it('should have a header', function() {
    browser.get(browser.baseUrl);

    var header = element(by.css('.title'));

    expect(header.getText()).toEqual('Ionic Blank Starter');
  });
});
