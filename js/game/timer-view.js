import {AbstractView} from "./abstract-view";
import {Util} from "../core/util";

class TimerView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center">      
      </circle>
      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">${Util.calculateMin(this.state.time)}</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">${Util.calculateSec(this.state.time)}</span>
      </div>      
      </svg>
    `;
  }
}

export {TimerView};
