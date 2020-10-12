// https://docs.cypress.io/api/introduction/api.html

describe("CurrencySelector", () => {
  it("Should add all items when selected in right order and remove them", () => {
    cy.visit("/");

    cy.get("*[testID=currencies]").each(currency => {
      currency.click();
      cy.contains("*[testID=selectedCurrencies]", currency.text());
    });
  });
  it("Should add correct item when clicked and then remove it", () => {
    cy.visit("/");

    const secondCurrency = cy.get("*[testID=currencies]:nth-child(2)");

    secondCurrency.then(el => {
      secondCurrency.click().then(() => {
        cy.get("*[testID=selectedCurrencies]")
          .should("have.length", 1)
          .should("contain", el.text())
          .get("*[testID=selectedCurrenciesRemove]")
          .click()
          .then(() => {
            cy.get("*[testID=selectedCurrencies]").should("not.exist");
          });
      });
    });
  });
});
