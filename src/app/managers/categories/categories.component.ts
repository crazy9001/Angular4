import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CategoriesService} from './categories.service';
import * as $ from 'jquery';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
    categories: any;
    constructor(
        private httpClient: HttpClient,
        private categoriesService: CategoriesService
    ) {
    }

    ngOnInit() {
        this.categoriesService.getCategories().then( categories => this.categories = categories);
        $('#nestable2').nestable({
            group: 1
        });
    }

}
