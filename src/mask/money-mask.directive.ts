import { HostListener, Input, Output, Optional, Directive, OnChanges, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MoneyInputEventHandler } from './money-input-event.handler';

@Directive({
  selector: '[money]',
  providers: [NgModel]
})
export class MoneyMaskDirective implements AfterViewInit , OnChanges{

  @Output()
  ngModelChange: EventEmitter<any> = new EventEmitter(false);

  @Output('moneyModel')
  moneyModelChange: EventEmitter<number> = new EventEmitter(true);

  @Input('moneyModel')
  moneyModel: number;

  @Input('money-mask-options')
  inputOptions: any = {};

  inputEventHandler: MoneyInputEventHandler;
  elementRef: HTMLInputElement;
  options = {
    allowNegative: true,
    precision: 2,
    prefix: 'R$ ',
    suffix: '',
    thousands: '.',
    decimal: ',',
    allowZero: true,
    affixesStay: true
  };

  constructor(@Optional() private ngModel: NgModel, public el: ElementRef) {

  }

  ngOnChanges(changes){
    if("moneyModel" in changes){
      this.inputEventHandler.setValue(changes.moneyModel);
    }
  }

  ngAfterViewInit() {
    this.elementRef = this.el.nativeElement as HTMLInputElement;
    this.elementRef.style.textAlign = 'right';

    const options = Object.assign({}, this.options, this.inputOptions);

    this.inputEventHandler = new MoneyInputEventHandler(this.elementRef, options, v => {
      if(this.ngModel) this.ngModel.value.emit(this.inputEventHandler.inputService.rawValue);
      this.moneyModelChange.emit(this.inputEventHandler.inputService.value);
    });
  }


  @HostListener('keypress', ['$event'])
  handleKeypress(e) {
    this.inputEventHandler.handleKeypress(e);
  }

  @HostListener('keydown', ['$event'])
  handleKeydown(e) {
    this.inputEventHandler.handleKeydown(e);
  }

  @HostListener('blur', ['$event'])
  handleBlur(e) {
    this.inputEventHandler.handleBlur(e);
  }

  @HostListener('focus', ['$event'])
  handleFocus(e) {
    this.inputEventHandler.handleFocus(e);
  }

  @HostListener('click', ['$event'])
  handleClick(e) {
    this.inputEventHandler.handleClick(e);
  }

}
