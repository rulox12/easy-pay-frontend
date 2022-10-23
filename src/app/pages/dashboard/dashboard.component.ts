import {Component, OnInit} from '@angular/core';
import {StatisticService} from '../../services/satistics.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    countBills: any;
    countPayments: any;
    countCommerces: any;
    approvedPayments: any;
    rejectedPayments: any;
    pendingPayments: any;

    constructor(
        private statisticService: StatisticService,
        private spinner: NgxSpinnerService
    ) {
    }

    ngOnInit() {
        this.spinner.show();
        this.getInitialData(12);
    }

    filterData(months) {
        this.spinner.show();
        this.getInitialData(months);
    }

    getInitialData(months: number) {
        this.statisticService.getAllStatistics(months).then(response => {
            if (response) {
                this.countBills = response['bills'];
                this.countPayments = response['payments'];
                this.countCommerces = response['commerces'];
                this.rejectedPayments = response['rejectedPayments'];
                this.pendingPayments = response['pendingPayments'];
                this.approvedPayments = response['approvedPayments'];
                this.spinner.hide();
            }
        });
    }
}
