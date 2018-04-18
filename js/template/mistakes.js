const mistakes = (state) => (`
<div class="main-mistakes">
${Array(3 - state.lives).fill(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`).join(``)}
</div>`);

export {mistakes};
