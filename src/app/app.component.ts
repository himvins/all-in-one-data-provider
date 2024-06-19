import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from "./search/search.component";
import { DetailsComponent } from "./details/details.component";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, FormsModule, SearchComponent, DetailsComponent],
})
export class AppComponent {
  title = 'all-in-one-data-provider';
}
