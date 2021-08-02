import { Component, OnInit } from '@angular/core';
import { ProdctService } from '../Services/prodct.service';
import { Breadcrumb, PageHeaderIconMenu, PageHeaderNavigationItem } from '@ux-aspects/ux-aspects';
import { Products } from '../Models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  Products: any[] = [];

  condensed: boolean = false;
  page: any = 1;
  totalLimit: any = 5;
  TotalRecord: any = 0;
  totalPages: number = 0;
  totalItems:any = 11;
  constructor(private Product: ProdctService) { }

  ngOnInit(): void {
    this.getProduct();
    
  }

  items: PageHeaderNavigationItem[] = [
    {
      icon: 'home',
      title: 'Home'
    },
    {
      icon: 'analytics',
      title: 'Analytics',
      children: [
        {
          title: 'Bar Charts'
        },
        {
          title: 'Pie Charts',
          children: [
            {
              title: 'Daily View'
            },
            {
              title: 'Weekly View'
            },
            {
              title: 'Monthly View'
            }
          ]
        }
      ]
    }
  ];

  iconMenus: PageHeaderIconMenu[] = [
    {
      icon: 'notification',
      label: 'Notifications. 3 new items.',
      badge: 3,
      dropdown: [
        {
          icon: 'chat',
          title: 'You have 16 messages',
          subtitle: '4 minutes ago',
          divider: true
        },
        {
          icon: 'social-twitter',
          title: '3 New Followers',
          subtitle: '12 minutes ago',
          divider: true
        },
        {
          icon: 'cloud',
          title: 'Server Rebooted',
          subtitle: '22 minutes ago'
        }
      ]
    },
    {
      icon: 'actions',
      label: 'Actions',
      dropdown: [
        {
          header: true,
          title: 'User-1',
          divider: true
        },
        {
          icon: 'user-settings',
          title: 'Settings'
        },
        {
          icon: 'logout',
          title: 'Log Out'
        },
        {
          title: 'Show Tips'
        }
      ]
    }
  ];

  getProduct() {
    this.Product.getProduct().subscribe((data: any) => {
      this.Products = data
      console.log(this.Products);

    },
      (error: any) => {
        alert('error During Get Product Data')
      })
  };

  NextPage(page:any) {
    this.page = page;
    this.getProduct();
  }

}
