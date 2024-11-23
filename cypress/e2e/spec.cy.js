describe('Tareas', () => {
  
  it('Crear Tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("Alquilar un Kayak{enter}")
    cy.contains('Alquilar un Kayak') 
  })



  it('Marcar tarea como completada', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("Alquilar un Kayak{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.should('be.checked')
  })




  it('Desmarcar tarea completada', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("Alquilar un Kayak{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="todo-item-toggle"]').should('not.be.checked')
  })




  it('Editar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("Comprar birra{enter}")
    cy.get('[data-testid="todo-item-label"]').dblclick()
    cy.get('[data-testid="text-input"]').eq(1).clear()
    cy.get('[data-testid="text-input"]').eq(1).type("Comprar cerveza{enter}")
    cy.contains('Comprar cerveza') 
    cy.should('be.checked')
    
  
  })
  
  


  it('Borrar Tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("Comprar jamón{enter}")
   //TO DO: Terminar tarea. No se encuentra elemento X para eliminar tarea (hover no parece funcionar)
    
  })




it('Filtrar tareas', () => {
  cy.visit('https://todomvc.com/examples/react/dist/')
  cy.get('[data-testid="text-input"]').type("Alquilar un Kayak{enter}")
  cy.get('[data-testid="text-input"]').type("Comprar birra{enter}")
  cy.get('[data-testid="text-input"]').type("Comprar aguacate{enter}")
  cy.get('[data-testid="todo-item-toggle"]').eq(1).click()
  cy.get('[data-testid="text-input"]').type("Visitar al papa{enter}")
  cy.get('[data-testid="todo-item-toggle"]').eq(2).click()
  cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()
  cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').should('be.checked')
  cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').should('be.checked')
  cy.get(':nth-child(2) > a').click()
  cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').should('not.be.checked')
  cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').should('not.be.checked')
  cy.get(':nth-child(1) > a').click()

})

})
