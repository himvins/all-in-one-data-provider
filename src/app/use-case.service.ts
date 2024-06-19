import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UseCaseService {
  private requiredDataSubject = new BehaviorSubject<string>(''); // Initialize with empty string
  requiredData$ = this.requiredDataSubject.asObservable();

  private descriptionSubject = new BehaviorSubject<string>('');
  description$ = this.descriptionSubject.asObservable();

  private resourcesSubject = new BehaviorSubject<string>('');
  resources$ = this.resourcesSubject.asObservable();

  constructor() { }

  getUseCaseDetails(useCase: string) {
    // Simulate fetching data from a backend service or API
    const details = {
      'valid-pm-accounts': {
        data: 'Data required for Valid PM Accounts',
        description: 'Description for Valid PM Accounts',
        resources: 'Links and documents related to Valid PM Accounts'
      },
      'valid-cga-accounts': {
        data: 'Data required for Valid CGA Accounts',
        description: 'Description for Valid CGA Accounts',
        resources: 'Links and documents related to Valid CGA Accounts'
      },
      'all-accounts': {
        data: 'Data required for All Accounts holding a specific product and specific count',
        description: 'Description for All Accounts holding a specific product and specific count',
        resources: 'Links and documents related to All Accounts holding a specific product and specific count'
      },
      'option-eligible-account': {
        data: 'Data required for Option Eligible Account',
        description: 'Description for Option Eligible Account',
        resources: 'Links and documents related to Option Eligible Account'
      },
      'pilot-office-fa-pm': {
        data: 'Data required for Pilot Office-FA PM',
        description: 'Description for Pilot Office-FA PM',
        resources: 'Links and documents related to Pilot Office-FA PM'
      },
      'pilot-office-fa-cga': {
        data: 'Data required for Pilot Office-FA CGA',
        description: 'Description for Pilot Office-FA CGA',
        resources: 'Links and documents related to Pilot Office-FA CGA'
      },
      'non-pilot-office-fa-pm': {
        data: 'Data required for Non-pilot Office-FA PMa',
        description: 'Description for Non-pilot Office-FA PMa',
        resources: 'Links and documents related to Non-pilot Office-FA PMa'
      },
      'non-pilot-office-fa-cga': {
        data: 'Data required for Non-pilot Office-FA CGA',
        description: 'Description for Non-pilot Office-FA CGA',
        resources: 'Links and documents related to Non-pilot Office-FA CGA'
      },
      'mutual-funds-min-denomination': {
        data: 'Data required for Mutual Funds Minimum Denomination Securities',
        description: 'Description for Mutual Funds Minimum Denomination Securities',
        resources: 'Links and documents related to Mutual Funds Minimum Denomination Securities'
      }
    };

    // Simulate API call delay
    setTimeout(() => {
      const detail = details[useCase as keyof typeof details];
      if (detail) {
        this.requiredDataSubject.next(detail.data);
        this.descriptionSubject.next(detail.description);
        this.resourcesSubject.next(detail.resources);
      } else {
        this.requiredDataSubject.next('No data found for selected use case.');
        this.descriptionSubject.next('');
        this.resourcesSubject.next('');
      }
    }, 1000); // Simulate 1 second delay
  }
}
