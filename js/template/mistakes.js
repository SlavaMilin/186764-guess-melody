const mistakes = (state) => (`
<div class="main-mistakes">
${Array(3 - state.lives).fill().map(() => (`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`))}
</div>`);

export {mistakes};
