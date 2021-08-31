import { Component, OnInit } from '@angular/core';
import { AuthtestService } from './authtest.service';

@Component({
  selector: 'app-authtest',
  templateUrl: './authtest.component.html',
  styleUrls: ['./authtest.component.scss'],
})

export class AuthtestComponent implements OnInit {
    public testing = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
    }

    constructor (
        private authtestService: AuthtestService,
    ) { }

    ngOnInit() {
        this.testing.created_by = sessionStorage.getItem('email'); 
    }
    GpCreate() {
        this.authtestService.GpCreate(this.testing).subscribe(data => {
            this.testing.name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}