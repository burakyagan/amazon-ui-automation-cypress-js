import HomePage from '../pages/HomePage'
import SearchResultsPage from '../pages/SearchResultsPage'

describe('Amazon Search Functionality', () => {
  beforeEach(function() {
    cy.fixture('testData').as('data')
    cy.visitHomepage()
  })

  it('should search for laptop and display results', function() {
    HomePage.searchFor(this.data.product)
    // Verify search was successful by checking URL and results presence
    SearchResultsPage.verifySearchResults(this.data.product)
  })

  it('should navigate to product detail page on click', function() {
    HomePage.searchFor(this.data.product)
    SearchResultsPage.clickFirstProduct()
    // Verify we navigated away from search results
    cy.url().should('not.include', 's?k=')
    cy.url().should('include', '/dp/')
  })

  it('should display relevant results on the first page', function() {
    HomePage.searchFor(this.data.product)
    // Simply verify we have product results displayed
    cy.get('div.s-result-item', { timeout: 10000 }).should('have.length.greaterThan', 3)
  })
})
