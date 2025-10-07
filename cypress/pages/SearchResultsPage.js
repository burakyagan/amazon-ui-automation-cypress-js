class SearchResultsPage {
  get resultsText() {
    return cy.get('span.a-color-state', { timeout: 10000 }).first()
  }

  get firstProductLink() {
    return cy.get('a.a-link-normal.s-no-outline', { timeout: 10000 }).first()
  }

  get productTitles() {
    return cy.get('div.s-result-item', { timeout: 10000 })
  }

  getResultsText() {
    return this.resultsText.invoke('text')
  }

  clickFirstProduct() {
    cy.get('a.a-link-normal.s-no-outline', { timeout: 10000 })
      .first()
      .scrollIntoView()
      .click({ force: true })
  }

  verifySearchResults(searchTerm) {
    // Verify URL contains search term or results are visible
    cy.url().should('include', 's?k=')
    cy.get('div.s-result-item', { timeout: 10000 }).should('have.length.greaterThan', 0)
  }
}

export default new SearchResultsPage()
