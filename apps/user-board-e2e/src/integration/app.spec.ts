describe('user-board', () => {
  beforeEach(() => cy.visit('http://localhost:4200/'));

  it('should display user cards', () => {
     cy.get('mat-card-title').should('have.length', 10);
     cy.get('mat-card-title').eq(0).should('have.text', 'Leanne Graham')
     cy.get('mat-card-title').eq(1).should('have.text', 'Ervin Howell')
     cy.get('mat-card-title').eq(9).should('have.text', 'Clementina DuBuque')
  });

  it('should go to albums page on click of "View Album button" for user with ID 4', () => {
      cy.get('mat-card-title').eq(3).should('have.text', 'Patricia Lebsack')
      cy.get('mat-card-actions').eq(3).contains('View Albums').click()
      cy.location().should((loc) => {
          expect(loc.pathname).to.eq('/albums/4')
      })
   });

   it('should display albums available for user with ID 4', () => {
      cy.get('mat-card-actions').eq(3).contains('View Albums').click()
      cy.get('mat-list-item ').eq(0).should('have.text', ' insert_photoadipisci laborum fuga laboriosam')
      cy.get('mat-list-item ').eq(2).should('have.text', ' insert_photoiste eos nostrum')
      cy.get('mat-list-item ').eq(6).should('have.text', ' insert_photoest placeat dicta ut nisi rerum iste')
   });

   it('should go to photos page when an album with id 33 is clicked for user with ID 4', () => {
      cy.get('mat-card-actions').eq(3).contains('View Albums').click()
      cy.get('mat-list-item ').eq(2).click()
      cy.location().should((loc) => {
          expect(loc.pathname).to.eq('/photos/33')
      })
      cy.get('img').should('have.length', 50);
      cy.get('img').eq(12).should('have.attr', 'src', 'https://via.placeholder.com/150/3479db')
      cy.get('img').eq(22).should('have.attr', 'src', 'https://via.placeholder.com/150/6fae4f')
      cy.get('img').eq(44).should('have.attr', 'src', 'https://via.placeholder.com/150/5fc568')
   });
});
