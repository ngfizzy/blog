import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-author-create-category',
  template: `
    <form
      (ngSubmit)="submitCategory()"
      class="mt-1 p-3 mat-elevation-z3 d-flex category-form"
    >
      <div>
        <input
          class="p-1 mr-1"
          [(ngModel)]="category"
          name="category category"
          placeholder="Category name"
        />
      </div>
      <div>
        <button type="submit" class="p-1">Add</button>
      </div>
    </form>
  `,
  styles: [
    `
      .category-form {
        background-color: rgba(30, 30, 36, 0.5);
      }

      .category-form input {
        background-color: rgba(30, 30, 36, 0.5);
        color: white;
      }
    `,
  ],
})
export class CreateCategoryComponent {
  @Output() createCategory = new EventEmitter<string>();
  category: string;

  submitCategory() {
    this.createCategory.emit(this.category);
  }
}
