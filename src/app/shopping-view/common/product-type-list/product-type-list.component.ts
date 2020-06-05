import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/ws/category.service';
import { ProductNameService } from 'src/app/service/product-name.service';

@Component({
	selector: 'app-product-type-list',
	templateUrl: './product-type-list.component.html',
	styleUrls: ['./product-type-list.component.scss']
})
export class ProductTypeListComponent implements OnInit {

	public categoryList;

	constructor(public router: Router, private categoryService: CategoryService,
		private activeRoute: ActivatedRoute, private productNameService: ProductNameService) { }

	ngOnInit(): void {
		this.categoryService.getProductCategories().subscribe((data: Object[]) => {
			this.categoryList = data;
			this.productNameService.categoryList = data;
		});
	}


}
