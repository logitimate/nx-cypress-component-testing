import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Injector,
  Input,
  VERSION,
  ViewEncapsulation,
} from '@angular/core';
import { ANALYTICS_TOKEN } from '../token';

@Component({
  selector: 'cypress-component-testing-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input() type = 'primary';
  constructor(private injector: Injector, private elementRef: ElementRef) {
    console.log('GET IT', this.injector.get(ANALYTICS_TOKEN, null));
  }
}
