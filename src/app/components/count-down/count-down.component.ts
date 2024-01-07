import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrl: './count-down.component.scss'
})
export class CountDownComponent implements OnInit, OnDestroy{
 
  @Input() set dDay(dDay: Date) {
    this._dDay = dDay;
    this.dateNow = new Date();
  }
  private subscription: Subscription = new Subscription();
  private _dDay: Date;
  private dateNow: Date;


  private millisecondsInSecond: number = 1000;
  private secondInMinute: number = 60;
  private minutesInHour: number = 60;
  private hoursInADay: number = 24;

  public timeDiff: number;
  public days: number;
  public hours: number;
  public minutes: number;
  public seconds: number;

  ngOnInit(): void {
    this.subscription.add(
      interval(1000).subscribe(()=>{
        this.getTimeDiff();
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getTimeDiff(): void {
    this.timeDiff = new Date(this._dDay).getTime() - new Date().getTime();
    this.setTimeUnits(this.timeDiff);
  }
  private setTimeUnits(timeDiff: number): void {
    this.seconds = Math.floor(
      (timeDiff / this.millisecondsInSecond) % this.secondInMinute
    );
    this.minutes = Math.floor(
      (timeDiff / (this.millisecondsInSecond * this.minutesInHour)) %
      this.minutesInHour
    );
    this.hours = Math.floor(
      (timeDiff /
        (this.millisecondsInSecond *
          this.minutesInHour *
          this.secondInMinute)) %
      this.hoursInADay
    );
    this.days = Math.floor(
      timeDiff /
      (this.millisecondsInSecond *
        this.minutesInHour *
        this.secondInMinute *
        this.hoursInADay)
    );
  }

}
