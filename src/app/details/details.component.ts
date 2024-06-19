import { Component, OnInit } from '@angular/core';
import { UseCaseService } from '../use-case.service';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  requiredData: string = '';
  useCaseDescription: string = '';
  useCaseResources: string = '';

  constructor(private useCaseService: UseCaseService) { }

  ngOnInit(): void {
    this.useCaseService.requiredData$.subscribe(data => this.requiredData = data);
    this.useCaseService.description$.subscribe(desc => this.useCaseDescription = desc);
    this.useCaseService.resources$.subscribe(res => this.useCaseResources = res);
  }
}
