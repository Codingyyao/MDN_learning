const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

const moving1 = alice1.animate(aliceTumbling, aliceTiming);

console.log(moving1.finished);
console.log('moving 1');

moving1.finished.then( response => {
    const moving2 = alice2.animate(aliceTumbling, aliceTiming);
    console.log('moving 2');
    moving2.finished.then( response => {
        const moving3 = alice3.animate(aliceTumbling, aliceTiming);
        console.log('moving 3');
    }
    )
});

