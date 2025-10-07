class HomePage {
  get searchBox() {
    return cy.get('input[type="text"][name="field-keywords"]', { timeout: 10000 })
      .first()
  }

  get searchButton() {
    return cy.get('input[type="submit"].nav-input', { timeout: 10000 })
      .first()
  }

  searchFor(productName) {
    this.searchBox.should('be.visible').clear().type(productName + '{enter}')
    cy.wait(2000) // Wait for search results to load
  }
}

export default new HomePage()
