import {calculateMin, calculateSec} from "../core/util";

const timer = (state) => (`
    <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
      <span class="timer-value-mins">${calculateMin(state.time)}</span><!--
      --><span class="timer-value-dots">:</span><!--
      --><span class="timer-value-secs">${calculateSec(state.time)}</span>
    </div>`);

export {timer};
