import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionMenuComponent } from './component/transaction-menu/transaction-menu.component';
import { TransactionFormComponent } from './component/transaction-form/transaction-form.component';
import { TransactionCreateComponent } from './page/eco-system/transaction-create/transaction-create.component';
import { TransactionDeletedComponent } from './page/eco-system/transaction-deleted/transaction-deleted.component';
import { TransactionDetailComponent } from './page/eco-system/transaction-detail/transaction-detail.component';
import { TransactionHomeComponent } from './page/eco-system/transaction-home/transaction-home.component';
import { TransactionRouterComponent } from './page/eco-system/transaction-router/transaction-router.component';
import { TransactionUpdateComponent } from './page/eco-system/transaction-update/transaction-update.component';


@NgModule({
  declarations: [
    TransactionMenuComponent,
    TransactionFormComponent,
    TransactionCreateComponent,
    TransactionDeletedComponent,
    TransactionDetailComponent,
    TransactionHomeComponent,
    TransactionRouterComponent,
    TransactionUpdateComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule
  ]
})
export class TransactionModule { }
