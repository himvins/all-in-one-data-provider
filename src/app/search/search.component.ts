import { Component, OnInit } from '@angular/core';
import { UseCaseService } from '../use-case.service';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, MatAutocompleteModule,
    MatInputModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  selectedEnvironment: string = 'development';
  selectedEonId: string = '';
  selectedUseCase: string = '';
  useCasesData = {
    eonid1: [
      { value: 'valid-pm-accounts', text: 'Valid PM Accounts' },
      { value: 'valid-cga-accounts', text: 'Valid CGA Accounts' }
    ],
    eonid2: [
      { value: 'all-accounts', text: 'All Accounts holding a specific product and specific count' },
      { value: 'option-eligible-account', text: 'Option Eligible Account' }
    ],
    eonid3: [
      { value: 'pilot-office-fa-pm', text: 'Pilot Office-FA PM' },
      { value: 'pilot-office-fa-cga', text: 'Pilot Office-FA CGA' },
      { value: 'non-pilot-office-fa-pm', text: 'Non-pilot Office-FA PMa' },
      { value: 'non-pilot-office-fa-cga', text: 'Non-pilot Office-FA CGA' },
      { value: 'mutual-funds-min-denomination', text: 'Mutual Funds Minimum Denomination Securities' }
    ]
  };
  filteredUseCases: { value: string, text: string }[] = [];

  constructor(private useCaseService: UseCaseService) { }

  ngOnInit(): void {
  }

  updateUseCases() {
    // Reset selected use case when EON ID changes
    this.selectedUseCase = '';
    this.filteredUseCases =
      this.useCasesData[this.selectedEonId as keyof typeof this.useCasesData] ||
      [];
  }

  searchUseCase() {
    this.useCaseService.getUseCaseDetails(this.selectedUseCase);
  }
}
