/// <reference types="Cypress" />

describe('Test for locators', () => {
  // before('Navigate to test page', () => {
  //   cy.visit('https://demoqa.com/text-box');
  // });

  it('Verify FULL NAME field', () => {
    cy.visit('/text-box');
    //Get element 1 variant
    cy.get("input[type='text']");
    //Get element, not the best way, but in case we have the same selectors for few elements it works
    cy.get("input[class*='form-control']").then((element) => {
      cy.get(element[0]);
    });

    //Get element with some assertions
    cy.get('#userName').should('be.visible').and('have.attr', 'placeholder', 'Full Name');
  });

  it('Verify Full Name, Email, Current Address, Permanent Address', () => {
    // Another way if we have the same selectors without ids

    cy.get("[class*='form-control']")
      .should('be.visible')
      .and(($lis) => {
        expect($lis.eq(0), 'Full Name').to.have.attr('placeholder');
        expect($lis.eq(1), 'Email').to.have.attr('placeholder');
        expect($lis.eq(2), 'Current Address').to.have.attr('placeholder');
      });
  });
});
