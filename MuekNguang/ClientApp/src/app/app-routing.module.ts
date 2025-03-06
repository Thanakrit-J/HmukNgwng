import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Mgdt01Component } from './feature/mgdt01/mgdt01.component';


const routes: Routes = [
  { path: '', component: Mgdt01Component },  // path '' หมายถึงหน้าเริ่มต้น
  // เพิ่มเส้นทางอื่น ๆ ที่ต้องการ
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
