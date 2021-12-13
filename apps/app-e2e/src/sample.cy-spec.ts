import { Component } from '@angular/core';
import { mount } from '@jscutlery/cypress-angular/mount';
import { ButtonComponent, ButtonLibModule } from 'button-lib';

@Component({
  template: `<h1>👋 Hello!</h1>`,
})
export class GreetingsComponent {}

describe('greetings', () => {
  it('should say hello', () => {
    mount(
      `
      <cypress-component-testing-button type='testing'></cypress-component-testing-button>
    `,
      { imports: [ButtonLibModule] }
    );
    cy.contains('testing');
  });

  it('should say hello', () => {
    mount(ButtonComponent, {
      inputs: { type: 'secondary' } as Partial<ButtonComponent>,
    });
    cy.contains('button works!');
    cy.contains('secondary');
  });
});
