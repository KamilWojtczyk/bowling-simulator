import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { BowlingService } from 'src/app/state/bowling/services/bowling.service';
import { AddNewFrame, Frames } from 'src/app/state/bowling/services/models/add-new-frame-model';

@Component({
  selector: 'start-component',
  templateUrl: './start.component.html',
  styleUrls: [ './start.component.scss' ]
})
export class StartComponent implements OnInit, OnDestroy {
  public frames$: Observable<Frames[]>;
  public score$: Observable<number>;
  public round$: Observable<number>;
  public isStrike$: Observable<boolean>;
  public isSpare$: Observable<boolean>;

  private unSubscribe$ = new Subject<void>();

  public form!: FormGroup;

  public frames: Frames[] = [];
  public roundNumber: number = 0;
  public isStrike: boolean = false;
  public isSpare: boolean = false;
  public errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private bowlingService: BowlingService
  ) {
    this.frames$ = this.bowlingService.frames$;
    this.score$ = this.bowlingService.score$;
    this.round$ = this.bowlingService.round$;
    this.isStrike$ = this.bowlingService.isStrike$;
    this.isSpare$ = this.bowlingService.isSpare$;
    this.frames$.subscribe((frames: Frames[]) => {
      this.frames = frames;
    })
    this.round$.subscribe((round: number) => {
      this.roundNumber = round;
    })
    this.isStrike$.subscribe((isStrike: boolean) => {
      this.isStrike = isStrike;
    })
    this.isSpare$.subscribe((isSpare: boolean) => {
      this.isSpare = isSpare;
    })
  }

  ngOnInit(): void {
    this.generateForm();
  }

  public generateForm(): void {
    this.form = this.formBuilder.group({
      first: [null, [Validators.required, Validators.min(0), Validators.max(10)]],
      second: [null, [Validators.required, Validators.min(0), Validators.max(10)]],
      third: [0],
    });
  }

  public addNewFrame(): any {
    this.errorMessage = '';
    if (this.form.value.first + this.form.value.second > 10) {
      this.errorMessage = "Sum of two throws must be less than 11";
      return;
    }
    if (this.form.valid) {
      if (this.frames.length === 10) {
        this.bowlingService.clearState();
      }
      const score = this.getScoreSum();
      const frame = this.createFrame();
      const frames = [];
      frames.push(frame)
      const addNewFrame: AddNewFrame = {
        round: this.roundNumber === 10 ? 0 : 1,
        score: score,
        frames: frames,
        isStrike: this.form.value.first === 10 || this.form.value.second === 10 ? true : false,
        isSpare: this.form.value.first + this.form.value.second === 10 && (this.form.value.first !== 10 || this.form.value.second !== 10) ? true : false,
      }
      this.bowlingService.addFrame(addNewFrame);
    }
  }

  public createFrame(): Frames {
    let frame: Frames
    if (this.frames.length === 9) {
      frame = {
        first: this.form.value.first,
        second: this.form.value.second,
        third: this.form.value.third
      }
    } else {
      frame = {
        first: this.form.value.first,
        second: this.form.value.second,
      }
    }
    return frame
  }

  public getScoreSum(): number {
    let score;
    if (this.isStrike) {
      score = 2 * (this.form.value.first + this.form.value.second);
    } else if (this.isSpare) {
      score = (2 * this.form.value.first) + this.form.value.second;
    } else {
      score = this.form.value.first + this.form.value.second;
    }
    return score;
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }

}

