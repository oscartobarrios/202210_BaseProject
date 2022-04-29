/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { HttpClientModule } from '@angular/common/http';
import { CafesComponent } from './cafes.component';
import { CafesService } from './cafes.service';
import { Cafe } from './cafe';


describe('BookListComponent', () => {
 let component: CafesComponent;
 let fixture: ComponentFixture<CafesComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ CafesComponent ],
     providers: [ CafesService ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(CafesComponent);
   component = fixture.componentInstance;

   component.misdatos = [
     new Cafe(faker.datatype.number(100), faker.lorem.sentence(), faker.name.firstName(), faker.datatype.string())
   ]

   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it("Component has a table", () => {
   expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
 });

 it('should have an dd element ', () => {
   const dd = debug.query(By.css('dd'));
   const content: HTMLElement = dd.nativeElement;
   expect(content.textContent).toEqual(component.misdatos[0].nombre)
 });

});
