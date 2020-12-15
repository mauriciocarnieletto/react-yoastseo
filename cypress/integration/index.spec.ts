it("should access a global var called ReactYoastSeo", () => {
  cy.visit("http://localhost:5000");
  cy.window().then(({ ReactYoastSeo }) => {
    expect(ReactYoastSeo === undefined).not.to.be.true;
  });
});
